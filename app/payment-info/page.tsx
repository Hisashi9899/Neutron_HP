import NeutronLogo from "../../components/NeutronLogo";
import DepositAmount from "../../components/DepositAmount";
import { getProduct, qp } from "../../lib/flow";

export default function PaymentInfoPage({ searchParams }: { searchParams?: { p?: string } }) {
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
        <span className="mb-2 block text-sm tracking-phi text-accent-soft">契約済みの方へ</span>
        <h1 className="text-2xl font-extrabold md:text-4xl">入金のご案内（設置代）</h1>
        <p className="mt-3 max-w-2xl text-sm text-white/60">
          製品「{p.name}」／販売元「Neutron」。設置代のお振込先と期限のご案内です。
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-[1.618fr_1fr]">
          <div className="rounded-2xl border border-accent bg-gradient-to-b from-navy-800 to-navy-950 p-8">
            <span className="rounded-full border border-accent/30 bg-accent/15 px-3 py-1 text-[11px] tracking-widest text-accent-soft">銀行振込</span>
            <DepositAmount deposit={p.deposit} />
            <div className="mt-4 space-y-2 text-sm text-white/70">
              <p>■ お振込先の口座情報は、確認メールでお知らせします。</p>
              <p>■ 期限：確認メール到達から72時間以内にお振込ください。</p>
              <p>■ 振込人名義は申込氏名と同一でお願いします（確認の自動化のため）。</p>
              <p>■ 振込手数料はお客様のご負担となります。</p>
            </div>
          </div>
          <div className="rounded-2xl border border-accent/25 bg-navy-950 p-8">
            <h2 className="font-bold text-accent-soft">期限超過は自動キャンセル</h2>
            <p className="mt-2 text-sm text-white/70">
              先着順の公平のため、期限内に入金が確認できない場合は自動キャンセルとなり、
              次の方へ権利が移ります。再申込は可能ですが、順番は取り直しです。
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-accent/25 bg-navy-950/80 p-8 text-center">
          <h2 className="text-xl font-extrabold">入金が済んだら</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-white/60">
            販売元のNeutronがデプロイします。完了報告メールの後、月額サブスクの登録へお進みください。
          </p>
          <div className="mt-6">
            <a href={`/subscription${qp(p.slug)}`} className="cta-shine inline-block rounded-md bg-accent px-8 py-3 font-bold text-navy-950 transition hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(16,185,129,.45)]">サブスク登録へ進む →</a>
          </div>
        </div>
      </div>

      <footer className="border-t border-accent/15 py-10 text-center text-xs text-white/50">
        <a href={`/notice${qp(p.slug)}`} className="underline underline-offset-4">← 注意事項へ戻る</a>
        <p className="mt-3">© 2026 Neutron（販売元の会社） — {p.name}™（製品）</p>
      </footer>
    </main>
  );
}
