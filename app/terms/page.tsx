import NeutronLogo from "../../components/NeutronLogo";
import { getProduct, qp } from "../../lib/flow";

function Art({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-accent/20 bg-navy-800 p-6 md:p-8">
      <h2 className="mb-3 font-bold text-accent-soft">{n}（{title}）</h2>
      <div className="space-y-2 text-sm leading-relaxed text-white/75">{children}</div>
    </section>
  );
}

export default function TermsPage({ searchParams }: { searchParams?: { p?: string } }) {
  const p = getProduct(searchParams?.p);
  return (
    <main className="overflow-x-clip bg-navy-900 text-white">
      <nav className="sticky top-0 z-20 border-b border-accent/20 bg-navy-900/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-phi items-center justify-between px-5 py-3">
          <a href="/" className="flex items-center gap-3" aria-label="Neutron トップへ戻る">
            <NeutronLogo size={120} tone="emerald" tagline={false} />
          </a>
          <span className="hidden rounded-full border border-accent/40 px-3 py-1 text-[11px] text-accent-soft sm:inline">製品：{p.name}</span>
        </div>
      </nav>

      <div className="mx-auto max-w-phi px-5 py-12 md:py-16">
        <span className="mb-2 block text-sm tracking-phi text-accent-soft">申込前に必ず全文をお読みください</span>
        <h1 className="text-2xl font-extrabold md:text-4xl">{p.name} 利用規約</h1>
        <p className="mt-3 max-w-2xl text-sm text-white/60">
          本規約は、Neutron（以下「提供者」）と{p.name}の利用を申し込む者（以下「利用者」）との間の契約内容を定める定型約款です。
          利用者は、Googleフォームで本規約への同意を送信し、確認メールに同意を返信することで、本規約に合意したものとします。
        </p>

        <div className="mt-8 grid gap-4">
          <Art n="第1条" title="当事者の特定">
            <p>1. 提供者 — 屋号：Neutron／氏名：青木 常／住所：東京都国分寺市本多3丁目16-5 レオパレスHONDA104／連絡先メール：neutron.aoki@gmail.com／インボイス登録番号：未取得（適格請求書は発行できません）<br />※住所が変更となる場合、提供者は速やかに利用者へ通知します。</p>
            <p>2. 利用者 — Googleフォームの申込情報（氏名・住所・メール）により特定される者とします。</p>
          </Art>

          <Art n="第2条" title="サービスの内容">
            <p>提供者は、暗号資産取引所のAPIを利用し、自動売買を行うプログラム「{p.name}」（以下「本サービス」）を利用者に提供します。</p>
            <p>本サービスは、提供者が構築するVPS環境上で稼働し、利用者の取引所APIキーを用いて自動売買を実行します。</p>
            <p>本サービスは、売買戦略・アルゴリズム・リスク管理ロジックを含む一連の自動売買処理を提供するものであり、投資助言・投資運用・資産管理を目的としたサービスではありません。</p>
          </Art>

          <Art n="第3条" title="料金・支払い方法">
            <p>利用者は、以下の料金（税込）を支払うものとします。(1) 初期費用（サーバー構築代）：{p.deposit.toLocaleString("ja-JP")}円 — 先行予約期間中（2026年9月17日〜10月16日17:00 JST）は50,000円。(2) 月額利用料：{p.monthly.toLocaleString("ja-JP")}円 — Stripeによる毎月自動決済。</p>
            <p>提供者は適格請求書を発行できません（インボイス制度非対応）。</p>
            <p>初期費用は提供者が指定する銀行口座への振込、月額利用料はStripeのサブスクリプション決済により支払うものとします。振込名義は申込時の氏名と一致させるものとします。</p>
            <p>振込「完了」とは、提供者が着金を確認した時点をいいます。振込手数料は利用者負担とします。</p>
          </Art>

          <Art n="第4条" title="契約成立">
            <p>本サービスの契約は、以下のすべてが完了した時点で成立します。(1) 本規約への同意＋Googleフォームによる申込情報の送信 (2) 確認メールへの同意返信 (3) 初期費用の着金確認 (4) Stripeサブスクリプションの登録完了。</p>
          </Art>

          <Art n="第5条" title="先行予約の適用基準">
            <p>先行予約価格（初期費用50,000円）は、(1) Googleフォームの送信 (2) 確認メールへの同意返信 (3) 初期費用の着金確認のすべてが2026年10月16日17:00（JST）までに完了した場合に適用されます。上記期限を過ぎた場合、通常価格（60,000円）が適用されます。</p>
          </Art>

          <Art n="第6条" title="初期費用の返金">
            <p>利用者は、デプロイ完了報告メールの送信前であれば初期費用の返金を申請できます。デプロイ完了報告メール送信後の返金はできません。</p>
            <p>返金時の振込手数料は利用者負担とします。ただし提供者の都合によりサービス提供が不可能となった場合、初期費用は手数料も含め全額返金します。</p>
          </Art>

          <Art n="第7条" title="リスクと免責">
            <p>暗号資産は価格変動が大きく、元本割れの可能性があります。本サービスは自動売買を行いますが、利益を保証するものではありません。</p>
            <p>市場状況・取引所の仕様変更・API障害・通信障害・VPS障害等により損失が発生する可能性があります。提供者は、故意または重過失がある場合を除き、利用者の損失について責任を負いません。</p>
            <p>利用者は、暗号資産取引に関するリスクを十分に理解した上で本サービスを利用するものとします。</p>
          </Art>

          <Art n="第8条" title="APIキーの取り扱い">
            <p>利用者は、取引所のAPIキーを提供者に共有するものとします。APIキーの権限は「取引（売買）」のみに限定し、「出金」権限は付与しないものとします。権限設定が正しいかどうかは、利用者が最終確認する責任を負います。</p>
            <p>提供者は、APIキーを本サービスの運用目的以外に利用しません。</p>
          </Art>

          <Art n="第9条" title="個人情報の取り扱い">
            <p>提供者は、利用者の氏名・住所・メールアドレス・APIキー情報を、本サービスの提供に必要な範囲でのみ利用し、第三者に提供しません。</p>
            <p>APIキー情報およびその他の個人情報は、法令に基づく保存義務がある場合を除き、契約終了後30日以内に削除します。</p>
          </Art>

          <Art n="第10条" title="禁止事項">
            <p>利用者は、本サービスの解析・改変・複製・再配布、VPSへの不正アクセス、提供者の許可なく第三者へ本サービスを利用させる行為、法令に違反する行為を行ってはなりません。</p>
          </Art>

          <Art n="第11条" title="反社会的勢力の排除">
            <p>利用者は、反社会的勢力に該当しないことを表明し、保証します。該当すると判明した場合、提供者は契約を即時解除できます。</p>
          </Art>

          <Art n="第12条" title="秘密保持">
            <p>利用者および提供者は、本サービスに関連して知り得た相手方の情報を第三者に漏洩してはなりません。本条の義務は、契約終了後3年間存続します。</p>
          </Art>

          <Art n="第13条" title="規約の交付">
            <p>本規約は、本サイトへの掲載および確認メールへの添付により交付されます。</p>
          </Art>

          <Art n="第14条" title="障害時の対応">
            <p>VPS障害・API障害・取引所障害などが発生した場合、提供者は可能な限り速やかに復旧に努めます。障害発生時は、可能な範囲で利用者にメールで通知するよう努めます。</p>
          </Art>

          <Art n="第15条" title="契約期間・解約">
            <p>契約期間は、利用者がStripeサブスクを継続している期間とします。利用者は、Stripeのサブスクを解約することでいつでも契約を終了できます。解約後の月額料金の返金は行いません。</p>
            <p>解約後、提供者はVPSを停止し、利用者のAPIキー情報を30日以内に削除します。</p>
          </Art>

          <Art n="第16条" title="準拠法・管轄">
            <p>本契約は日本法に準拠します。本契約に関する紛争が生じた場合、東京地方裁判所を第一審の専属的合意管轄裁判所とします。</p>
          </Art>

          <Art n="第17条" title="規約の変更">
            <p>提供者は、必要に応じて本規約を変更できます。変更する場合は、効力発生日の2週間前までに本サイトへの掲載およびメールで周知します。利用者が効力発生日以降も解約せず利用を継続した場合、変更に合意したものとします。</p>
          </Art>
        </div>

        <div className="mt-10 rounded-2xl border border-accent bg-navy-950/80 p-8 text-center md:p-10">
          <p className="text-sm text-white/60">制定日：2026年9月17日 — 以上で全文です。同意の上、お申し込みください。</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a href={p.formUrl} target="_blank" rel="noopener" className="cta-shine rounded-md bg-accent px-8 py-3 font-bold text-navy-950 transition hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(16,185,129,.45)]">規約に同意して申し込む</a>
            <a href={`/notice${qp(p.slug)}`} className="rounded-md border border-accent/50 px-8 py-3 transition hover:border-accent hover:text-accent-soft">注意事項へ戻る</a>
          </div>
        </div>
      </div>

      <footer className="border-t border-accent/15 py-10 text-center text-xs text-white/50">
        <p>© 2026 Neutron（販売元の会社） — {p.name}™（製品）</p>
      </footer>
    </main>
  );
}
