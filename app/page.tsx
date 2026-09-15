"use client";
import { useEffect, useState } from "react";
import NeutronLogo from "../components/NeutronLogo";
import PresaleButton from "../components/PresaleButton";
import { Reveal, usePhiReveal } from "../components/Reveal";

const MENU = [
  { no: "01", title: "プロダクト", desc: "会社Neutronが販売する製品。24時間働くトレードの頭脳。", href: "/crypto-engine", cta: "cryptoEngineを見る →", hot: true },
  { no: "02", title: "会社概要", desc: "中性子星の密度・真理・美を美学とする会社。", href: "#company", cta: "会社を知る →", hot: false },
  { no: "03", title: "技術と美学", desc: "フルスペクトラムの技術力・純度100%の構造・真理へのこだわり。", href: "#philosophy", cta: "美学を読む →", hot: false },
  { no: "04", title: "お問い合わせ", desc: "取材・提携はこちらから。", href: "#contact", cta: "連絡する →", hot: false },
];

export default function GatePage() {
  usePhiReveal();
  const [letterOpen, setLetterOpen] = useState(false);
  useEffect(() => {
    if (!letterOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLetterOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [letterOpen]);
  return (
    <main className="overflow-x-clip bg-deep text-paper">
      {/* NAV */}
      <nav className="sticky top-0 z-20 border-b border-gold/15 bg-deep/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-phi items-center justify-between px-5 py-3">
          <a href="/" aria-label="Neutron トップ"><NeutronLogo size={150} tagline={false} /></a>
          <div className="hidden items-center gap-7 text-sm text-paper/70 md:flex">
            <a className="transition hover:text-gold" href="#menu">メニュー</a>
            <a className="transition hover:text-gold" href="#products">プロダクト</a>
            <a className="transition hover:text-gold" href="#company">会社概要</a>
            <a className="transition hover:text-gold" href="#contact">お問い合わせ</a>
          </div>
          <PresaleButton />
        </div>
      </nav>

      {/* HERO: ロゴだけの一枚目 */}
      <header className="relative flex min-h-[92vh] items-center justify-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_420px_at_50%_36%,rgba(201,168,106,.08),transparent_65%)]" />
        <div className="relative px-5 py-20 text-center">
          <Reveal>
            <div className="flex justify-center"><NeutronLogo size={380} /></div>
            <p className="mx-auto mt-6 max-w-xl text-sm tracking-[0.3em] text-paper/60 md:text-base">
              中性子星の密度・真理・美を、プロダクトに。
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href="/crypto-engine" className="btn-gold cta-shine rounded-md px-9 py-3 font-bold">プロダクトを見る</a>
              <a href="#menu" className="btn-ghost rounded-md px-9 py-3">メニューへ</a>
            </div>
          </Reveal>
          <p className="mt-14 animate-bounce text-[11px] tracking-phi text-paper/40">SCROLL</p>
        </div>
      </header>

      {/* MENU */}
      <section id="menu" className="border-t border-gold/15">
        <div className="mx-auto max-w-phi px-5 py-16 md:py-24">
          <Reveal>
            <span className="mb-2 block text-sm tracking-phi text-gold">MENU</span>
            <h2 className="text-2xl font-extrabold md:text-3xl">どこへ向かいますか</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {MENU.map((m, i) => (
              <Reveal key={m.no} kind={i % 2 ? "right" : "left"}>
                <a href={m.href}
                  className={`cta-shine group block rounded-2xl border p-7 transition duration-300 hover:-translate-y-1.5 md:p-9 ${m.hot ? "border-gold bg-gradient-to-b from-deep2 to-ink shadow-[0_0_60px_rgba(201,168,106,.15)]" : "border-gold/20 bg-card/60 hover:border-gold/60"}`}>
                  <span className="text-xs tracking-phi text-gold">{m.no}</span>
                  <h3 className="mt-2 text-xl font-extrabold md:text-2xl">{m.title}</h3>
                  <p className="mt-2 text-sm text-paper/60">{m.desc}</p>
                  <span className="mt-5 inline-block text-sm font-bold text-gold transition group-hover:translate-x-1">{m.cta}</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="border-t border-gold/15 bg-ink/40">
        <div className="mx-auto max-w-phi px-5 py-16 md:py-24">
          <Reveal>
            <span className="mb-2 block text-sm tracking-phi text-gold">PRODUCTS — 01</span>
            <h2 className="text-2xl font-extrabold md:text-3xl">販売中のプロダクト</h2>
          </Reveal>
          <Reveal kind="gravity" className="mt-8">
            <a href="/crypto-engine" className="float-card block rounded-2xl border border-gold/40 bg-gradient-to-br from-deep2 via-ink to-navy-900 p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-accent/50 bg-accent/10 px-4 py-1 text-[11px] font-bold tracking-widest text-accent-soft">● 先行予約受付中</span>
                <span className="text-[11px] tracking-phi text-paper/50">日本初・国産・完全自動可変式</span>
              </div>
              <h3 className="mt-4 text-3xl font-extrabold md:text-4xl">cryptoEngine</h3>
              <p className="mt-3 max-w-2xl text-sm text-paper/70 md:text-base">
                あなたの代わりに24時間365日、取引し続ける“トレードの頭脳”。
                市場に合わせてギアや銘柄を完全自動で切り替え、最適解を出し続けます。くわしくは専用ページへ。
              </p>
              <span className="btn-gold cta-shine mt-7 inline-block rounded-md px-8 py-3 font-bold">cryptoEngineのページへ →</span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* PHILOSOPHY + COMPANY */}
      <section id="philosophy" className="border-t border-gold/15">
        <div className="mx-auto grid max-w-phi gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <Reveal kind="left">
            <span className="mb-2 block text-sm tracking-phi text-gold">PHILOSOPHY</span>
            <h2 className="text-2xl font-extrabold">技術と美学</h2>
            <ul className="mt-5 space-y-5 text-sm text-paper/70">
              <li><b className="text-gold">技術力</b> — CEO/CTO/フルスペクトラムエンジニア</li>
              <li>
                <b className="text-gold">フルスペクトラムエンジニアとは・・・</b>
                <p className="mt-1">複数の専門家が必要な領域を、一人でゼロから創り上げる最上位の開発者。企画・設計・UI/UX・フロント・バックエンド・インフラ・運用まで、プロダクトの全工程を“純度100%の構造”として生成する。Neutron の代表は、この全領域を一人で完遂できる圧倒的な開発力を持っています。</p>
              </li>
              <li>
                <b className="text-gold">純度</b>
                <p className="mt-1">無駄なものは一切排除することで、最高品質・手に取りやすい価格・純度100%のプロダクトを提供。</p>
              </li>
              <li>
                <b className="text-gold">美学・圧倒的情熱</b>
                <p className="mt-1">自身の美学を実現するために、一切の妥協はせず、代表である私自身が本当に納得のいくプロダクトを創り上げます。そして、創って終わりではなく、創ってからが始まりだと考えており、グロースさせ続けていきます。</p>
              </li>
              <li>
                <b className="text-gold">真理・誠実</b>
                <p className="mt-1">幻想やビジネストークではなく、真理や構造を偽りなく伝えます。それこそが、本当の誠実さだと考えるからです。例）「絶対に儲かる」とは言わない。</p>
              </li>
            </ul>
            <button onClick={() => setLetterOpen(true)} className="mt-6 inline-block text-sm font-bold text-gold underline underline-offset-4 transition hover:translate-x-1">
              代表からの言葉 →
            </button>
          </Reveal>
          <Reveal kind="right" id="company">
            <span className="mb-2 block text-sm tracking-phi text-gold">COMPANY</span>
            <h2 className="text-2xl font-extrabold">会社概要</h2>
            <table className="mt-5 w-full text-sm">
              <tbody className="[&_td]:border-b [&_td]:border-gold/15 [&_td]:py-3">
                <tr><td className="w-28 text-paper/50">会社名</td><td className="font-bold">Neutron</td></tr>
                <tr><td className="text-paper/50">所在地</td><td>設立後記載</td></tr>
                <tr><td className="text-paper/50">代表者</td><td>青木　常</td></tr>
                <tr><td className="text-paper/50">設立</td><td>2026年予定</td></tr>
                <tr><td className="text-paper/50">事業</td><td>システムエンジン開発</td></tr>
                <tr><td className="text-paper/50">製品</td><td>完全自動暗号通貨トレードエンジン「<a href="/crypto-engine" className="font-bold text-gold underline underline-offset-4">cryptoEngine →</a>」</td></tr>
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-gold/15 bg-ink/40">
        <div className="mx-auto max-w-phi px-5 py-16 md:py-24">
          <Reveal className="mx-auto max-w-xl text-center">
            <span className="mb-2 block text-sm tracking-phi text-gold">CONTACT</span>
            <h2 className="text-2xl font-extrabold">お問い合わせ</h2>
            <p className="mt-3 text-sm text-paper/60">製品のお申込は cryptoEngineページの申込導線から。取材・提携は以下からどうぞ。返信先は neutron.aoki@gmail.com です。</p>
            <p className="mt-2 text-sm"><a href="mailto:neutron.aoki@gmail.com" className="font-bold text-gold underline underline-offset-4">neutron.aoki@gmail.com に直接メールする</a></p>
            <form action="mailto:neutron.aoki@gmail.com?subject=%E3%80%90Neutron%E3%80%91%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B" method="post" encType="text/plain" className="mt-8 grid gap-3 text-left">
              <label className="text-xs tracking-widest text-gold">お名前</label>
              <input name="name" required placeholder="山田 太郎" className="rounded-lg border border-gold/25 bg-deep p-3 text-base md:text-sm" />
              <label className="text-xs tracking-widest text-gold">メールアドレス</label>
              <input name="email" type="email" required placeholder="you@example.com" className="rounded-lg border border-gold/25 bg-deep p-3 text-base md:text-sm" />
              <label className="text-xs tracking-widest text-gold">内容</label>
              <textarea name="msg" rows={4} placeholder="ご用件を記入ください" className="rounded-lg border border-gold/25 bg-deep p-3 text-base md:text-sm" />
              <button className="btn-gold cta-shine rounded-md py-3 font-bold" type="submit">送信する</button>
            </form>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-gold/15 py-10 text-center text-xs text-paper/50">
        © 2026 Neutron — Density × Truth × Beauty.
      </footer>

      {/* 代表からの手紙モーダル */}
      {letterOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/75 p-4 backdrop-blur-sm"
          onClick={() => setLetterOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="代表からの言葉"
        >
          <div
            className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-gold/60 bg-deep p-8 text-paper shadow-[0_0_80px_rgba(201,168,106,.25)] md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLetterOpen(false)}
              aria-label="閉じる"
              className="absolute right-4 top-4 rounded-full border border-gold/40 px-2.5 py-0.5 text-gold/70 transition hover:border-gold hover:text-gold"
            >
              ×
            </button>
            <div className="flex justify-center"><NeutronLogo size={150} /></div>
            <h3 className="mt-2 text-center text-lg font-bold tracking-[0.3em] text-gold">代表からの言葉</h3>
            <div
              className="mt-5 space-y-0 text-sm text-paper/85"
              style={{
                lineHeight: "32px",
                backgroundImage: "repeating-linear-gradient(transparent 0 31px, rgba(201,168,106,.28) 31px 32px)",
              }}
            >
              <p>Neutron代表の青木です。</p>
              <p>
                この「Neutron」という名前は、「Neutron Star」日本語で「中性子星」に由来しています。
                理由は、私の宿命と運命にとてもよく似ているからです。
              </p>
              <p>
                中性子星を簡単に説明しますと、太陽の数倍の質量を、半径10~12kmの球体に押し潰した天体であり、
                その質量は角砂糖1個程の大きさで数億トンの質量と計算されています。
                ブラックホールの一歩手前の存在であり、物理法則がギリギリ成立している限界領域であり、
                ハイペロン物質やストレンジクォークマターなど「地球では絶対に作ることが出来ない物質」が理論上、
                自然に存在し得る、「宇宙で最も奇妙で、最も極端な物質の状態が存在する場所」といわれています。
              </p>
              <p>
                そして、中性子星は「孤独な星」と呼ばれています。
                理由には様々な諸説がありますが、中性子星が生まれる際に超新星爆発が起こるため、
                周囲の物質をほぼ全て吹き飛ばしてしまうことや重力が強すぎることで、
                近づき過ぎると、星が引き裂かれてしまうことが理由とされています。
              </p>
              <p>
                中性子星の話が少し長くなってしまいましたが、宇宙と人間である私に一体何の関係があるのかと
                不思議に思われるかもしれません。しかし、これは断言できますが、宇宙と人間は大いに関係があります。
                宇宙も世界も、そして世界で生きる私たち人間も全て物理法則というメロディの上に存在しているのですから。
              </p>
              <p>
                私はサヴァン症候群的、ADHD的、2Eギフテッド的の3つの思考特性を同時に抱える脳を持ちながら、
                それらを自力でコントロールして、日常生活を送ることができているという特異体質です。
                これはQEEG(定量的脳波検査)と精神医学の検査・診断という科学的な根拠に基づく事実です。
                それだけ聞くと、特別な才能のように感じるかもしれませんが、当人である私が見ている景色は永遠の孤独と絶望です。
              </p>
              <p>
                人よりも多くのものが見え、人よりも多くのことを感じ、故に人よりも多くのことを思考してしまう。
                これは止めたいと思っても止められるものではなく、何をしてもこの宿命から逃れることはできません。
              </p>
              <p>
                そして、自分の見えているものは、ほとんどの人には全く理解されません。
                どんなに声を枯らして叫び続けても私が見ている世界の本質は誰にも届きませんでした。
              </p>
              <p>
                あなたは、毎日、毎時間、毎分、毎秒永遠の孤独と絶望を抱え続けながら生きたことはありますか？
                私は、何度、このまま一生眠っていたいと考えたかわかりません。
              </p>
              <p>
                しかし、中性子星でしか生まれない物質があるように、私だけが生み出せるものがあるのではないかと考えました。
                私が見えている真理を、私の美学で表現したいし、するべきだと考え、私はNeutronを設立することにしました。
              </p>
              <p>
                私が見ている宇宙・世界の真理から生み出される、Neutronのプロダクトがお手に取って頂いた方の
                有限で不可逆的な「人生」という名の時間を少しでも豊かなものにできたのなら、これほど幸せなことはありません。
              </p>
            </div>
            <div className="mt-6 text-right">
              <p className="text-[11px] tracking-[0.25em] text-paper/60">Neutron CEO / CTO / Full-Spectrum Engineer</p>
              <p className="mt-1 font-script text-4xl text-gold drop-shadow-[0_0_12px_rgba(201,168,106,.45)]">Hisashi Aoki</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
