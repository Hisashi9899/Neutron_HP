import NeutronLogo from "../../components/NeutronLogo";
import { getProduct, money, qp } from "../../lib/flow";

export default function SubscriptionPage({ searchParams }: { searchParams?: { p?: string } }) {
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
        <span className="mb-2 block text-sm tracking-phi text-accent-soft">デプロイ完了後のお手続き</span>
        <h1 className="text-2xl font-extrabold md:text-4xl">月額利用料の登録</h1>
        <p className="mt-3 max-w-2xl text-sm text-white/60">
          製品「{p.name}」／販売元「Neutron」。サーバー代込みの一括料金です。追加請求はありません。
        </p>

        <div className="float-card mx-auto mt-8 max-w-xl rounded-2xl border border-accent bg-gradient-to-b from-navy-800 to-navy-950 p-8 text-center md:p-10">
          <span className="rounded-full border border-accent/30 bg-accent/15 px-3 py-1 text-[11px] tracking-widest text-accent-soft">Stripe・自動決済</span>
          <div className="my-3 text-5xl font-extrabold text-accent-soft">{money(p.monthly)}<span className="text-base"> /月</span></div>
          <div className="mx-auto max-w-md space-y-2 text-left text-sm text-white/70">
            <p>■ 毎月自動決済（手続きは初回のみ）</p>
            <p>■ 領収書は自動発行・メール通知つき</p>
            <p>■ 自動更新（解約はいつでも可能）</p>
          </div>
          <a href={p.stripeUrl} target="_blank" rel="noopener" className="cta-shine mt-7 inline-block rounded-md bg-accent px-10 py-3 font-bold text-navy-950 transition hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(16,185,129,.45)]">サブスクを登録する</a>
          <p className="mt-5 text-xs text-white/50">
            登録が済んだ方は<a href={`/complete${qp(p.slug)}`} className="font-bold text-accent-soft underline underline-offset-4">完了ページへ進む →</a>
          </p>
        </div>
      </div>

      <footer className="border-t border-accent/15 py-10 text-center text-xs text-white/50">
        <a href={`/payment-info${qp(p.slug)}`} className="underline underline-offset-4">← 入金案内へ戻る</a>
        <p className="mt-3">© 2026 Neutron（販売元の会社） — {p.name}™（製品）</p>
      </footer>
    </main>
  );
}
