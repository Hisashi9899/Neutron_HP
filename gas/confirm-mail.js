// cryptoEngine 申込確認メール自動送信（Google Apps Script）
// 設置: 回答スプレッドシート > 拡張機能 > Apps Script > 貼付 > CONFIG記入 > トリガー設定
// 前提: 列名「氏名」「住所」「メールアドレス」（フォームの質問文と一致すること）

const CONFIG = {
  SENDER_NAME: "Neutron",
  REPLY_TO: "neutron.aoki@gmail.com",
  TERMS_URL: "https://あなたのドメイン/terms", // ★サイト公開後に置換
  BANK_INFO: "★記入：銀行名／支店名／口座種別／口座番号／口座名義",
  DEPOSIT_NORMAL: 60000,
  DEPOSIT_PRESALE: 50000,
  PRESALE_END: new Date("2026-10-16T17:00:00+09:00"),
  DEADLINE_HOURS: 72,
};

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
}
