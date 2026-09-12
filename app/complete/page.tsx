import NeutronLogo from "../../components/NeutronLogo";
import { getProduct, qp } from "../../lib/flow";

export default function CompletePage({ searchParams }: { searchParams?: { p?: string } }) {
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
        <span className="mb-2 block text-sm tracking-phi text-accent-soft">お申込ありがとうございます</span>
        <h1 className="text-2xl font-extrabold md:text-4xl">利用開始までの流れ</h1>

        <div className="mt-8 rounded-2xl border border-accent bg-navy-950/80 p-8 md:p-10">
          <ol className="mx-auto max-w-xl list-decimal space-y-3 text-sm text-white/75">
            <li><b className="text-accent-soft">デプロイ完了を待つ</b> — 販売元のNeutronが設置します。完了報告メールが届きます。</li>
            <li><b className="text-accent-soft">IPアドレスを受け取る</b> — デプロイ完了後、稼働サーバーのIPアドレスをメールでお送りします。</li>
            <li><b className="text-accent-soft">月額サブスクを確認</b> — 登録済みの方に毎月自動決済・自動領収書が届きます。</li>
            <li><b className="text-accent-soft">{p.name}が起動</b> — 24時間365日の完全自動取引が始まります。毎日の操作は不要です。</li>
          </ol>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={`/crypto-engine`} className="rounded-md border border-accent/50 px-8 py-3 transition hover:border-accent hover:text-accent-soft">製品ページへ戻る</a>
            <a href={`/`} className="rounded-md border border-accent/50 px-8 py-3 transition hover:border-accent hover:text-accent-soft">Neutronトップへ</a>
          </div>
        </div>
      </div>

      <footer className="border-t border-accent/15 py-10 text-center text-xs text-white/50">
        <p>© 2026 Neutron（販売元の会社） — {p.name}™（製品）</p>
      </footer>
    </main>
  );
}
