// cryptoEngine 申込確認メール自動送信（Google Apps Script）
// 設置: 回答スプレッドシート > 拡張機能 > Apps Script > 貼付 > CONFIG記入 > トリガー設定
// 前提: 列名「氏名」「住所」「メールアドレス」（フォームの質問文と一致すること）

const CONFIG = {
  SENDER_NAME: "Neutron",
  REPLY_TO: "neutron.aoki@gmail.com",
  ADMIN_EMAIL: "neutron.aoki@gmail.com",
  TERMS_URL: "https://neutron-hp.vercel.app/terms",
  SUBSCRIPTION_URL: "https://buy.stripe.com/fZu5kF6JEcDW1dPc1n3ks00",
  SUBSCRIPTION_PAGE: "https://neutron-hp.vercel.app/subscription?p=cryptoengine",
  BANK_INFO: "★記入：銀行名／支店名／口座種別／口座番号／口座名義",
  DEPOSIT_NORMAL: 60000,
  DEPOSIT_PRESALE: 50000,
  PRESALE_END: new Date("2026-10-16T17:00:00+09:00"),
  DEADLINE_HOURS: 72,
  // 申込状態の遷移: 仮申込済み → 正式申込完了（同意返信済み）→ サブスク案内済み
  // 着金確認・デプロイ済みは運用者が手動で列に記入する。
  STATUS_PROVISIONAL: "仮申込済み",
  STATUS_CONFIRMED: "正式申込完了（同意返信済み）",
  STATUS_SUBSCRIPTION_SENT: "サブスク案内済み",
};

// 時間主導トリガー用エントリ（15分毎を推奨）:
// 同意返信の検出とサブスク案内の送信をまとめて行う。
function syncAll() {
  syncReplies();
  sendSubscriptionGuides();
}

function onFormSubmit(e) {
  const sheet = e.range.getSheet();
  const row = e.range.getRow();
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const val = (name) => {
    const i = headers.indexOf(name);
    return i < 0 ? "" : String(sheet.getRange(row, i + 1).getValue());
  };
  const name = val("氏名");
  const email = val("メールアドレス");
  if (!email) return; // メアドなしは送信不可
  // 重複申込の検出: 同一メアドの先行行があれば重複として扱う。
  // 先着順は最初の行の受付No.を維持し、確認メールの二重送信も防ぐ。
  const mailCol = headers.indexOf("メールアドレス");
  if (mailCol >= 0 && row > 2) {
    const prior = sheet.getRange(2, mailCol + 1, row - 2, 1).getValues().flat();
    if (prior.includes(email)) {
      const dupCol = (() => {
        let i = headers.indexOf("重複");
        if (i < 0) {
          sheet.getRange(1, sheet.getLastColumn() + 1).setValue("重複");
          headers.push("重複");
          i = headers.length - 1;
        }
        return i + 1;
      })();
      sheet.getRange(row, dupCol).setValue("重複（2回目以降）");
      GmailApp.sendEmail(
        CONFIG.ADMIN_EMAIL,
        `【通知】重複申込（${name}／${email}）`,
        [`重複申込を検出しました（行 ${row}）。`, `申込者: ${name}`, `メール: ${email}`, `先着判定は最初の行を維持してください。`].join("\n"),
        { name: CONFIG.SENDER_NAME }
      );
      return;
    }
  }
  const no = row - 1; // 先着No.（ヘッダー行を除く）
  const now = new Date();
  const presale = now < CONFIG.PRESALE_END;
  const amount = presale ? CONFIG.DEPOSIT_PRESALE : CONFIG.DEPOSIT_NORMAL;
  const deadline = new Date(now.getTime() + CONFIG.DEADLINE_HOURS * 3600 * 1000);
  const fmt = (d) =>
    Utilities.formatDate(d, "Asia/Tokyo", "yyyy/MM/dd HH:mm");

  const subject = `【cryptoEngine】お申込確認と契約内容のご案内（受付No.${no}）`;
  const body = [
    `${name} 様`,
    ``,
    `このたびは cryptoEngine にお申し込みいただき、ありがとうございます。`,
    `販売元の Neutron です。受付No.${no} で承りました。`,
    ``,
    `■ 利用規約`,
    `${CONFIG.TERMS_URL}`,
    `お申込により利用規約に同意いただいたものとして取り扱います。`,
    ``,
    `■ お振込のご案内（設置代）`,
    `金額：${amount.toLocaleString()}円`,
    `${CONFIG.BANK_INFO}`,
    `期限：${fmt(deadline)} まで（本メール到達から${CONFIG.DEADLINE_HOURS}時間以内）`,
    `振込人名義は申込氏名と同一でお願いします。`,
    ``,
    `■ 最重要：本メールへの返信のお願い`,
    `本メールに「同意します」とご返信ください。`,
    `返信の記録をもって合意成立の証跡とします。返信がない場合、手続きは進みません。`,
    ``,
    `■ この後の流れ`,
    `同意返信 → 着金確認 → Neutronがデプロイ（完了報告メール） → 月額サブスク登録 → 利用開始`,
    ``,
    `ご不明点は本メールにご返信ください。`,
    `${CONFIG.SENDER_NAME}`,
  ].join("\n");

  GmailApp.sendEmail(email, subject, body, {
    name: CONFIG.SENDER_NAME,
    replyTo: CONFIG.REPLY_TO,
  });

  // 管理者通知: 全申込を neutron.aoki@gmail.com に転送
  GmailApp.sendEmail(
    CONFIG.ADMIN_EMAIL,
    `【通知】${subject}（${name}／${email}）`,
    [`申込者: ${name}`, `メール: ${email}`, `受付No.${no}`, ``, body].join("\n"),
    { name: CONFIG.SENDER_NAME }
  );

  // 証跡列の記録（なければ追加）
  const ensureCol = (title) => {
    let i = headers.indexOf(title);
    if (i < 0) {
      sheet.getRange(1, sheet.getLastColumn() + 1).setValue(title);
      headers.push(title);
      i = headers.length - 1;
    }
    return i + 1;
  };
  sheet.getRange(row, ensureCol("受付No")).setValue(no);
  sheet.getRange(row, ensureCol("確認メール送信日時")).setValue(
    Utilities.formatDate(now, "Asia/Tokyo", "yyyy/MM/dd HH:mm:ss")
  );
  sheet.getRange(row, ensureCol("申込状態")).setValue(CONFIG.STATUS_PROVISIONAL);
}

// --- 申込状態の列ユーティリティ（sync系で共有） ---

function sheetHeaders(sheet) {
  const last = sheet.getLastColumn();
  return sheet.getRange(1, 1, 1, last).getValues()[0];
}

function ensureColByHeaders(sheet, headers, title) {
  let i = headers.indexOf(title);
  if (i < 0) {
    sheet.getRange(1, sheet.getLastColumn() + 1).setValue(title);
    headers.push(title);
    i = headers.length - 1;
  }
  return i + 1;
}

function colIndex(headers, title) {
  const i = headers.indexOf(title);
  return i < 0 ? -1 : i + 1;
}

function fmtDT(d) {
  return Utilities.formatDate(d, "Asia/Tokyo", "yyyy/MM/dd HH:mm:ss");
}

// --- 同意返信の検出: 仮申込済み → 正式申込完了（同意返信済み） ---
// 確認メールへの返信スレッドを Gmail 検索し、申込者本人の返信があれば
// 同意返信受信日時を記録して状態を進める。管理者にも通知する。

function syncReplies() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const headers = sheetHeaders(sheet);
  const cStatus = ensureColByHeaders(sheet, headers, "申込状態");
  const cReplyAt = ensureColByHeaders(sheet, headers, "同意返信受信日時");
  const cMailAt = colIndex(headers, "確認メール送信日時");
  const cNo = colIndex(headers, "受付No");
  const cMail = headers.indexOf("メールアドレス");
  const cName = headers.indexOf("氏名");
  if (cMail < 0) return;
  const lastRow = sheet.getLastRow();
  for (let row = 2; row <= lastRow; row++) {
    const status = String(sheet.getRange(row, cStatus).getValue() || "");
    if (status !== CONFIG.STATUS_PROVISIONAL) continue;
    const email = String(sheet.getRange(row, cMail + 1).getValue() || "").trim();
    if (!email) continue;
    const no = cNo > 0 ? String(sheet.getRange(row, cNo).getValue() || "") : "";
    const sentAt = cMailAt > 0 ? sheet.getRange(row, cMailAt).getValue() : null;
    const sentMs = sentAt instanceof Date ? sentAt.getTime() : 0;
    // 件名に受付No.を含むスレッドを申込者発で検索する。
    const q = `from:${email} subject:"受付No.${no}" newer_than:30d`;
    let threads = [];
    try {
      threads = GmailApp.search(q, 0, 10);
    } catch (err) {
      continue;
    }
    let repliedAt = null;
    for (const th of threads) {
      for (const msg of th.getMessages()) {
        const from = String(msg.getFrom() || "").toLowerCase();
        if (from.indexOf(email.toLowerCase()) < 0) continue;
        if (msg.getDate().getTime() <= sentMs) continue;
        repliedAt = msg.getDate();
        break;
      }
      if (repliedAt) break;
    }
    if (!repliedAt) continue;
    const name = cName >= 0 ? String(sheet.getRange(row, cName + 1).getValue() || "") : "";
    sheet.getRange(row, cReplyAt).setValue(fmtDT(repliedAt));
    sheet.getRange(row, cStatus).setValue(CONFIG.STATUS_CONFIRMED);
    GmailApp.sendEmail(
      CONFIG.ADMIN_EMAIL,
      `【通知】同意返信あり・正式申込完了（${name}／${email}）`,
      [`正式申込が成立しました。`, `申込者: ${name}`, `メール: ${email}`, `受付No.${no}`, `同意返信受信: ${fmtDT(repliedAt)}`, ``, `次は着金確認です。確認できたら「着金確認」列に日付を記入してください。`].join("\n"),
      { name: CONFIG.SENDER_NAME }
    );
  }
}

// --- サブスク案内の自動送信 ---
// 運用者が「着金確認」列に日付等を記入した行のうち、未送信のものに
// Stripe 登録の案内メールを送り、送信日時を記録する。
// デプロイ完了報告メールは IP 通知を含むため手動送信のままとする。

function sendSubscriptionGuides() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const headers = sheetHeaders(sheet);
  const cStatus = ensureColByHeaders(sheet, headers, "申込状態");
  const cPaid = ensureColByHeaders(sheet, headers, "着金確認");
  const cSubAt = ensureColByHeaders(sheet, headers, "サブスク案内送信日時");
  const cMail = headers.indexOf("メールアドレス");
  const cName = headers.indexOf("氏名");
  const cNo = colIndex(headers, "受付No");
  if (cMail < 0) return;
  const lastRow = sheet.getLastRow();
  for (let row = 2; row <= lastRow; row++) {
    const status = String(sheet.getRange(row, cStatus).getValue() || "");
    if (status !== CONFIG.STATUS_CONFIRMED) continue;
    const paid = String(sheet.getRange(row, cPaid).getValue() || "").trim();
    if (!paid) continue;
    const sent = String(sheet.getRange(row, cSubAt).getValue() || "").trim();
    if (sent) continue;
    const email = String(sheet.getRange(row, cMail + 1).getValue() || "").trim();
    if (!email) continue;
    const name = cName >= 0 ? String(sheet.getRange(row, cName + 1).getValue() || "") : "";
    const no = cNo > 0 ? String(sheet.getRange(row, cNo).getValue() || "") : "";
    const subject = `【cryptoEngine】月額利用料の登録のご案内（受付No.${no}）`;
    const body = [
      `${name} 様`,
      ``,
      `設置代の着金を確認しました。ありがとうございます。`,
      `続いて月額利用料（25,000円/月・サーバー代込み）の登録をお願いします。`,
      ``,
      `■ 登録ページ`,
      `${CONFIG.SUBSCRIPTION_PAGE}`,
      `■ Stripe 直接リンク`,
      `${CONFIG.SUBSCRIPTION_URL}`,
      ``,
      `登録完了後、販売元の Neutron がデプロイし、完了報告メールでサーバーのIPアドレスをお知らせします。`,
      ``,
      `${CONFIG.SENDER_NAME}`,
    ].join("\n");
    GmailApp.sendEmail(email, subject, body, {
      name: CONFIG.SENDER_NAME,
      replyTo: CONFIG.REPLY_TO,
    });
    sheet.getRange(row, cSubAt).setValue(fmtDT(new Date()));
    sheet.getRange(row, cStatus).setValue(CONFIG.STATUS_SUBSCRIPTION_SENT);
  }
}
