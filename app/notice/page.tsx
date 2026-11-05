import NeutronLogo from "../../components/NeutronLogo";
import PresaleInlineNote from "../../components/PresaleInlineNote";
import { SalesSuspendedNotice } from "../../components/SalesSuspended";
import { getProduct, money, qp } from "../../lib/flow";
import { getProductLinks } from "../../lib/flow.server";

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-accent/20 bg-navy-800 p-6 md:p-8">
      <h2 className="mb-3 font-bold text-accent-soft">{title}</h2>
      <div className="space-y-2 text-sm text-white/70">{children}</div>
    </div>
  );
}

export default function NoticePage({ searchParams }: { searchParams?: { p?: string } }) {
  const p = getProduct(searchParams?.p);
  const links = getProductLinks(searchParams?.p);
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
        <span className="mb-2 block text-sm tracking-phi text-accent-soft">
          {p.salesSuspended ? "販売中止のお知らせ" : "お申込の前に必ずお読みください"}
        </span>
        <h1 className="text-2xl font-extrabold md:text-4xl">
          {p.salesSuspended ? "新規のお申し込みを停止しています" : "注意事項・契約の流れ"}
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-white/60">
          {p.salesSuspended
            ? `製品「${p.name}」／販売元「Neutron」。現在は新規のお申し込みを停止しております。`
            : `製品「${p.name}」／販売元「Neutron」の契約フローです。すべて無料サービスで自動化されており、申込順は機械の記録で公平に判定します。`}
        </p>
        {p.salesSuspended && <SalesSuspendedNotice className="mt-6" />}

        <div className="mt-8 grid gap-4">
          <Card title="① リスク（必ずご理解ください）">
            <p>■ 暗号通貨の値段は動きます。元本や利益のお約束はできません。</p>
            <p>■ 過去の成績が、未来も同じとは限りません。</p>
            <p>■ 「絶対に儲かる」とは言いません。それは本当ではないからです。</p>
            <p>■ お約束するのは「いつも同じ判断・ぜんぶ記録・育て続けること」の3つです。</p>
          </Card>

          <Card title={`② 人数制限（先着${p.cap}名・完全限定）`}>
            <p>■ 受付は申込順。{p.cap}名に到達した時点で募集終了・再開は未定です。</p>
            <p>■ 先着順の確定基準は「Googleフォームの自動タイムスタンプ＋確認メールの同意返信記録」です。</p>
            <p>■ 申込情報はGoogleフォームが自動でタイムスタンプを記録します。</p>
            <p>■ 期限内に入金が確認できない場合は自動キャンセルとなり、次の方へ権利が移ります。</p>
          </Card>

          <Card title="③ 契約 → 利用開始の流れ">
            <ol className="ml-5 list-decimal space-y-1">
              <li>利用規約を確認（本サイト掲載・全文公開）</li>
              <li>Googleフォームに登録（氏名・メール・住所・規約への同意チェック）</li>
              <li>確認メールに同意を返信（合意の往復記録）</li>
              <li>設置代 {money(p.deposit)}を銀行振込（口座は確認メールで通知）{!p.salesSuspended && <PresaleInlineNote />}</li>
              <li>販売元のNeutronがデプロイ（完了報告メール）</li>
              <li>月額 {money(p.monthly)}のサブスク登録（Stripe・自動決済・自動領収書）</li>
              <li>利用開始（デプロイ完了後、IPアドレスをメールで通知）</li>
            </ol>
          </Card>
        </div>

        <div className="mt-10 rounded-2xl border border-accent bg-navy-950/80 p-8 text-center md:p-10">
          {p.salesSuspended ? (
            <>
              <h2 className="text-xl font-extrabold md:text-2xl">新規のお申し込みを停止しています</h2>
              <p className="mx-auto mt-2 max-w-xl text-sm text-white/60">
                外部取引所のセキュリティ事案を受け、安全が確認できるまで新規のお申し込みを一時停止しております。再開時期は改めてお知らせします。
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <span className="cursor-not-allowed rounded-md border border-amber-400/40 bg-amber-400/10 px-8 py-3 font-bold text-amber-200" aria-disabled="true">
                  現在販売を中止しております。
                </span>
                <a href={`/crypto-engine`} className="rounded-md border border-accent/50 px-8 py-3 transition hover:border-accent hover:text-accent-soft">{p.name}のページへ戻る</a>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-xl font-extrabold md:text-2xl">内容に同意の上、契約に進む</h2>
              <p className="mx-auto mt-2 max-w-xl text-sm text-white/60">
                Step1 規約確認 → Step2 フォーム登録 → Step3 確認メールに同意返信の順です。すべて無料。控えは自動でメール送信されます。
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <a href={`/terms${qp(p.slug)}`} className="cta-shine rounded-md bg-accent px-8 py-3 font-bold text-navy-950 transition hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(16,185,129,.45)]">Step1 利用規約を読む</a>
                <a href={links.formUrl} target="_blank" rel="noopener" className="rounded-md border border-accent/50 px-8 py-3 transition hover:border-accent hover:text-accent-soft">Step2 Googleフォームで申し込む</a>
              </div>
              <p className="mt-5 text-xs text-white/50">
                署名・登録が済んだ方は<a href={`/payment-info${qp(p.slug)}`} className="font-bold text-accent-soft underline underline-offset-4">入金案内へ進む →</a>
              </p>
            </>
          )}
        </div>
      </div>

      <footer className="border-t border-accent/15 py-10 text-center text-xs text-white/50">
        <a href={`/crypto-engine`} className="underline underline-offset-4">← {p.name}のページへ戻る</a>
        <p className="mt-3">© 2026 Neutron（販売元の会社） — {p.name}™（製品）</p>
      </footer>
    </main>
  );
}
