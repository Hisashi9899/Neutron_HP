"use client";
import NeutronLogo from "../../components/NeutronLogo";
import SevenGateLogo from "../../components/SevenGateLogo";
import { Reveal, usePhiReveal } from "../../components/Reveal";
import { usePresaleActive } from "../../components/usePresaleActive";
import { PRESALE_DISCOUNT, getProduct, money } from "../../lib/flow";

const PRODUCT_SLUG = "cryptoengine";
const p = getProduct(PRODUCT_SLUG);

function H2({ no, title, lead }: { no: string; title: string; lead?: string }) {
  return (
    <div className="mb-8">
      <span className="mb-2 block text-sm tracking-phi text-accent-soft">{no}</span>
      <h2 className="text-2xl font-extrabold md:text-3xl">{title}</h2>
      {lead && <p className="mt-2 max-w-2xl text-sm text-white/60 md:text-base">{lead}</p>}
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs tracking-widest text-accent-soft">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_#10B981]" />
      {children}
    </span>
  );
}

export default function CryptoEnginePage() {
  usePhiReveal();
  const presale = usePresaleActive();
  return (
    <main className="overflow-x-clip bg-navy-900 text-white">
      {/* NAV */}
      <nav className="sticky top-0 z-20 border-b border-accent/20 bg-navy-900/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-phi items-center justify-between px-5 py-3">
          <a href="/" className="flex items-center gap-3" aria-label="Neutron トップへ戻る">
            <NeutronLogo size={120} tone="emerald" tagline={false} />
            <span className="hidden text-xs text-white/50 sm:inline">← Neutronトップ</span>
          </a>
          <div className="flex items-center gap-3">
            <span className="hidden rounded-full border border-accent/40 px-3 py-1 text-[11px] text-accent-soft sm:inline">製品：cryptoEngine</span>
            <a href="/notice?p=cryptoengine" className="rounded-md bg-accent px-5 py-2 text-sm font-bold text-navy-950 transition hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(16,185,129,.4)]">申し込む</a>
          </div>
        </div>
      </nav>

      {/* 1 HERO */}
      <header className="relative overflow-hidden border-b border-accent/20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_500px_at_75%_15%,rgba(16,185,129,.14),transparent_60%),radial-gradient(700px_500px_at_15%_85%,rgba(33,150,243,.12),transparent_60%)]" />
        <div className="relative mx-auto grid max-w-phi items-center gap-10 px-5 py-16 md:grid-cols-[1.618fr_1fr] md:py-24">
          <div>
            <Badge>製品 cryptoEngine ／ 販売元 Neutron・国産・代表が実資金で検証</Badge>
            <h1 className="mt-6 text-3xl font-extrabold leading-snug md:text-5xl">
              寝ている間も、仕事中も。<br />あなたの代わりに24時間365日<span className="text-accent-soft">取引する頭脳</span>
            </h1>
            <p className="mt-4 max-w-xl text-white/65">
              <b>cryptoEngine（クリプトエンジン）</b>は、暗号通貨の取引を24時間365日・完全自動で続ける国産のプログラムです。
              専門知識は一切いりません。チャートの見方も注文の出し方も、覚える必要なし。
              見張るだけではなく、<b className="text-accent-soft">判断も注文もほったらかし</b>。
              あなたがすることは<b className="text-accent-soft">「申し込むだけ」</b>です。
              <span className="mt-3 block text-sm text-white/60">代表自ら実資金で検証し、動くものだけを製品化。デモや机上の理論ではありません。</span>
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/notice?p=cryptoengine" className="cta-shine rounded-md bg-accent px-8 py-3 font-bold text-navy-950 transition hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(16,185,129,.4)]">今すぐ申し込む</a>
              <a href="#arch" className="rounded-md border border-accent/40 px-8 py-3 transition hover:border-accent hover:text-accent-soft">仕組みを見る</a>
            </div>
            {presale === true && (
              <a href="#price" className="mt-5 inline-block rounded-full border border-accent bg-accent/15 px-5 py-2 text-sm font-bold text-accent-soft shadow-[0_0_30px_rgba(16,185,129,.3)] transition hover:-translate-y-0.5">
                先行予約特典：設置代 {money(PRESALE_DISCOUNT)}引き（9/17〜10/16 17:00）→
              </a>
            )}
            <p className="mt-4 text-xs text-white/50">申込 → 契約 → 決済 → あとは販売元のNeutronが設置 → 動き出します。毎日の操作は不要です。※利益の保証ではありません。リスクは11で正直にお伝えします。</p>
          </div>
          <div className="flex items-center justify-center rounded-2xl border border-accent/25 bg-navy-950/70 p-8 md:p-10">
            <img src="/logo/vtwin-engine.svg" alt="cryptoEngine" className="w-full max-w-[420px]" />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-phi px-5">
        {/* 1 とは */}
        <section className="border-b border-accent/15 py-16">
          <Reveal><H2 no="01 — 3分でわかる" title="cryptoEngineって、なに？" lead="むずかしい言葉なしで説明します。たとえるなら、取引の“自動運転”。申し込んだら、ハンドルもアクセルもブレーキも全部おまかせ。あなたは助手席で見守るだけです。" /></Reveal>
          <Reveal kind="gravity" className="grid gap-4 md:grid-cols-3">
            {[
              ["注文まで全部やる", "見張り・判断・注文・記録まで全部自動。あなたがチャートを見てポチポチする必要はありません。"],
              ["完全自動で変わり続ける", "買い切りの古くなる道具ではありません。市場に合わせてギアや銘柄を完全自動で切り替え、最適解を出し続けます。"],
              ["止まらない仕組み", "あなたのパソコンではなく、専用のサーバー上で24時間365日稼働。電源の心配なし。"],
              ["日本の製品", "日本語の申込・契約・お知らせ。海外製ツールの「よくわからない」をなくしました。"],
              ["感情に負けない", "「もっと儲けたい」「損が怖い」に流されません。決めた通りに、毎回同じように動きます。"],
              ["中身が見える技術", "すべての行動を記録。なぜ動いたかが後から確認できる、正直なつくりです。"],
            ].map(([t, d]) => (
              <div key={t} className="rounded-xl border border-accent/20 bg-navy-800 p-6">
                <h3 className="mb-2 font-bold text-accent-soft">{t}</h3><p className="text-sm text-white/70">{d}</p>
              </div>
            ))}
          </Reveal>
        </section>

        {/* 2 違い */}
        <section className="border-b border-accent/15 py-16">
          <Reveal kind="left"><H2 no="02 — ここが違う" title="他と何が違うの？" lead="「自動売買ツール」は前からあります。cryptoEngineが違うのは、市場に合わせてギアや銘柄を変え続ける本番用の頭脳「SEVEN-GATE ENGINE」を搭載している点です。" /></Reveal>
          <Reveal kind="right" className="overflow-x-auto rounded-xl border border-accent/25">
            <table className="w-full min-w-[560px] bg-navy-950 text-sm">
              <thead><tr className="bg-accent/10 text-accent-soft">
                <th className="p-4 text-left">くらべる点</th><th className="p-4 text-left">よくある自動ツール</th><th className="p-4 text-left">cryptoEngine</th>
              </tr></thead>
              <tbody className="[&_td]:border-t [&_td]:border-accent/10 [&_td]:p-4">
                <tr><td>中身</td><td>買ったときのまま・古くなる</td><td className="font-bold text-accent-soft">ギア・銘柄を自動で切り替え続ける</td></tr>
                <tr><td>得意分野</td><td>なんでも用・株の流用</td><td className="font-bold text-accent-soft">暗号通貨だけの専用設計</td></tr>
                <tr><td>動く場所</td><td>自宅PC（止まる心配）</td><td className="font-bold text-accent-soft">専用サーバーで24時間</td></tr>
                <tr><td>改善</td><td>自分で設定変更</td><td className="font-bold text-accent-soft">計測→判定→切替→記録の自動ループ</td></tr>
                <tr><td>正体</td><td>ノウハウ販売</td><td className="font-bold text-accent-soft">技術製品（記録つき）</td></tr>
              </tbody>
            </table>
          </Reveal>
        </section>

        {/* 3 比較 */}
        <section className="border-b border-accent/15 py-16">
          <Reveal><H2 no="03 — あなた vs エンジン" title="人間と、どう違う？" /></Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            <Reveal kind="left" className="sway rounded-xl border border-white/15 bg-navy-950 p-6">
              <h3 className="mb-3 font-bold text-white/60">あなたが自分でやると…</h3>
              <ul className="space-y-2 text-sm text-white/55"><li>感情：上がると欲張り、下がるとパニック</li><li>時間：1日中チャートは見られない</li><li>ブレ：昨日と今日で判断が変わる</li><li>夜：寝ている間は無防備</li></ul>
            </Reveal>
            <Reveal kind="right" className="rounded-xl border border-accent bg-navy-800 p-6 shadow-[0_0_50px_rgba(16,185,129,.15)]">
              <h3 className="mb-3 font-bold text-accent-soft">エンジンに任せると…</h3>
              <ul className="space-y-2 text-sm"><li><b className="text-accent-soft">感情ゼロ</b>。いつも同じ判断</li><li><b className="text-accent-soft">24時間365日</b>、休まず取引</li><li><b className="text-accent-soft">知識ゼロでOK</b>。覚えることなし</li><li><b className="text-accent-soft">記録つき</b>。あとで見返せる</li><li><b className="text-accent-soft">変わり続ける</b>。相場に合わせて最適解を更新</li></ul>
            </Reveal>
          </div>
        </section>

        {/* 4 仕組み */}
        <section id="arch" className="border-b border-accent/15 py-16">
          <Reveal><H2 no="04 — 安心の裏側" title="どんな仕組みで動くの？" lead="むずかしい部分は販売元のNeutronが全部引き受けます。ここでは「信頼できる理由」だけ、やさしく紹介します。" /></Reveal>
          <Reveal kind="gravity" className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {[["速い言語Go", "大量の値動きをさばく"], ["きれいな設計", "壊れにくく直しやすい"], ["CLIエンジン", "余計な飾りなし"], ["専用サーバー", "止まらず動き続ける"]].map(([t, d]) => (
              <div key={t} className="rounded-lg border border-accent/20 bg-navy-950 p-4 text-center text-xs"><b className="mb-1 block text-accent-soft">{t}</b>{d}</div>
            ))}
          </Reveal>
          <Reveal className="mt-4 rounded-xl border border-accent bg-navy-800 p-6 text-center shadow-[0_0_50px_rgba(16,185,129,.12)]">
            <h3 className="font-bold text-accent-soft">代表が実資金で検証 — 机上の理論は売りません</h3>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-white/70">代表自ら実資金で動かして検証し、トレードエンジンとして成り立つものだけを製品化しました。利益の保証ではありませんが、身銭を切った検証の記録があります。</p>
          </Reveal>
          <Reveal className="mt-4 rounded-xl border border-accent/20 bg-navy-800 p-6 text-center">
            <h3 className="font-bold text-accent-soft">変わり方のループ — 相場が変われば、ギアも銘柄も変わる</h3>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-sm">
              {[["① 計測", "値動きを集める"], ["② 判定", "より良い形を探す"], ["③ 切替", "安全に試す"], ["④ 記録", "本番に採用"]].map(([s, d], i, a) => (
                <span key={s} className="flex items-center gap-2">
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2" title={d}>{s}</span>
                  {i < a.length - 1 && <i className="not-italic text-accent">→</i>}
                </span>
              ))}
            </div>
            <p className="mx-auto mt-4 max-w-xl text-xs text-white/55">この切替があるから、買った瞬間がピークの道具になりません。無限に増え続ける魔法ではなく、その時々の最適解を選び直す仕組みです。みんなの注文が同じ瞬間に重ならない工夫も入っています。</p>
          </Reveal>
        </section>

        {/* 5 市場選択 */}
        <section id="market" className="border-b border-accent/15 py-16">
          <Reveal><H2 no="05 — 市場選択" title="なぜ、暗号通貨なのか" lead="株・FX・不動産・NISA——投資は色々あります。その中で「24時間365日の完全自動化」との相性が最も良い市場を選びました。下の表で5種類を比べています。" /></Reveal>
          <Reveal kind="gravity" className="overflow-x-auto rounded-xl border border-accent/25">
            <table className="w-full min-w-[680px] bg-navy-950 text-sm">
              <thead><tr className="bg-accent/10 text-accent-soft">
                <th className="p-4 text-left">投資の種類</th><th className="p-4 text-left">稼働時間</th><th className="p-4 text-left">自動化との相性</th><th className="p-4 text-left">判定</th>
              </tr></thead>
              <tbody className="[&_td]:border-t [&_td]:border-accent/10 [&_td]:p-4 [&_td]:align-top">
                <tr><td className="font-bold">株式</td><td>平日の昼のみ（約245日）</td><td>時間が短くデータ量が少ない。単元株の壁もある。</td><td className="text-white/50">不採用</td></tr>
                <tr><td className="font-bold">FX</td><td>平日24時間・土日休場</td><td>近いが週末に穴が空き、値動きは比較的穏やか。</td><td className="text-white/50">不採用</td></tr>
                <tr><td className="font-bold">不動産</td><td>都度手続き・流動性低</td><td>分割できず高額。契約も管理も手動で自動化の対象外。</td><td className="text-white/50">不採用</td></tr>
                <tr><td className="font-bold">NISA・投信</td><td>長期積立</td><td>「取引しない」投資。エンジンの出番がない。</td><td className="text-white/50">不採用</td></tr>
                <tr><td className="font-bold text-accent-soft">暗号通貨</td><td className="text-accent-soft">24時間365日・休みなし</td><td>API標準・少額可・値動き大・学習データが豊富。コスト割れの薄利は獲りにいかない設計つき。</td><td className="font-bold text-accent-soft">採用</td></tr>
              </tbody>
            </table>
          </Reveal>
          <Reveal className="mt-6 rounded-xl border border-accent/30 bg-navy-950 p-6 text-center">
            <p className="mx-auto max-w-2xl text-sm text-white/75 md:text-base">
              休みなく動き、データが豊富で、少額から始められる。<br />
              <b className="text-accent-soft">自動化エンジンが最も力を発揮できる市場</b>だから、暗号通貨を選びました。<br />
              <span className="text-xs text-white/50">※値動きの大きさは機会であると同時にリスクです。だから「休む構造」と「損失の天井」が必須になります（次の06へ）。</span>
            </p>
          </Reveal>
        </section>

        {/* 6 ロジックの信頼性 */}
        <section id="logic" className="border-b border-accent/15 py-16">
          <Reveal><H2 no="06 — 核心" title="なぜ、知識ゼロでも任せられるのか" lead="答えは「予想しない」ことです。cryptoEngineは値動きを当てにいきません。学術の現場で使われる統計手法で「今は動くべき時か」を判定し、ダメな時は休む。それを感情なしで繰り返すだけです。" /></Reveal>
          <Reveal className="rounded-xl border border-accent/30 bg-navy-950 p-6 md:p-8">
            <h3 className="font-bold text-accent-soft">世の中の理論から、「自動化に耐えるもの」だけを厳選</h3>
            <p className="mt-3 text-sm text-white/70">
              トレード理論は数え切れないほどあります。cryptoEngineは、その中で
              <b className="text-accent-soft">24時間365日の完全自動化に耐える理論だけ</b>を束ねて作られています。
              選定基準は3つです。
            </p>
            <ol className="mt-4 space-y-2 text-sm text-white/75">
              <li><b className="text-accent-soft">① 市場データだけで完結する</b> — 人の解釈やニュース読解が必要な理論は、どれだけ有名でも不採用。</li>
              <li><b className="text-accent-soft">② 統計的に検証できる</b> — 勘や経験則ではなく、過去データで正しさを測れるものだけ。</li>
              <li><b className="text-accent-soft">③ 「休む条件」を持つ</b> — わからない時に休める理論だけ。休めない理論は自動化に向きません。</li>
            </ol>
            <p className="mt-4 text-sm text-white/70">
              裁量のプロが使う手法も尊重します。ただ、機械に任せるなら「機械が正確に回せる理論」が最適です。
              下の表は、その厳選の結果です。
            </p>
          </Reveal>
          <Reveal kind="gravity" className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["わからない時は、休む", "急変・板が薄い・自信が足りない時は取引しません。「なぜ休んだか」（優位不足・不確実・急変・リスク・薄板）を毎回記録。人間がやりがちな“なんとなく参戦”を、構造的に禁止しています。"],
              ["二重の裏取りで方向を決める", "「価格の傾き（回帰分析）」と「注文の流れの持続」の両方が一致した時だけ動きます。片方だけでは動かない。価格だけが跳ねたダマシの局面は自動で除外します。"],
              ["見せ玉にダマされない", "わざと置かれた大口注文（見せ板）は、方向判断の材料にしません。加点の参考に格下げ済み。罠を踏まない設計です。"],
              ["自信を過去の実績で補正", "「いけそう」という勘は使いません。過去の的中率を10段階に分けて蓄積し、その時の自信を実績で補正。データ不足時は平均に寄せる“謙虚さ”も組込み済みです。"],
              ["損失に天井がある", "1回の金額・保有の上限・1日の損失上限を事前に設定。上限に届いたら自動で停止します（初期設定でON）。負けが止まらなくなる暴走は起きません。"],
              ["全部テスト・全部記録", "本番に出す前に過去データで検証＋お金を使わない模擬取引。全判断に理由つきの記録が残り、後から検証できます。テストコードつきの製品です。"],
            ].map(([t, d]) => (
              <div key={t} className="rounded-xl border border-accent/20 bg-navy-800 p-6">
                <h3 className="mb-2 font-bold text-accent-soft">{t}</h3><p className="text-sm text-white/70">{d}</p>
              </div>
            ))}
          </Reveal>
          <Reveal kind="left" className="mt-6 overflow-x-auto rounded-xl border border-accent/25">
            <table className="w-full min-w-[760px] bg-navy-950 text-sm">
              <thead><tr className="bg-accent/10 text-accent-soft">
                <th className="p-4 text-left">使っている理論・手法</th><th className="p-4 text-left">何をするか</th><th className="p-4 text-left">選んだ理由（自動化適性）</th><th className="p-4 text-left">ひとことで言うと</th>
              </tr></thead>
              <tbody className="[&_td]:border-t [&_td]:border-accent/10 [&_td]:p-4 [&_td]:align-top">
                <tr><td className="font-bold text-accent-soft">最小二乗回帰の傾き検定</td><td>価格の「上がり調子」が偶然のブレか、本物の傾向かを数値で判定します。</td><td>数式だけで完結し、人の解釈が不要だから。</td><td className="text-white/60">気のせいを数字で見抜く</td></tr>
                <tr><td className="font-bold text-accent-soft">板不均衡（インバランス）の持続率</td><td>買い注文と売り注文の偏りが「続いているか」を測り、価格分析の裏取りにします。</td><td>注文データの流れだけで測れ、検証可能だから。</td><td className="text-white/60">値動きの裏を取る</td></tr>
                <tr><td className="font-bold text-accent-soft">レジーム分類（7分類）</td><td>上昇・下降・横ばい・荒れ相場・静寂・反転・不明に相場を分類。荒れ相場や不明時は休みます。</td><td>「休むべき相場」を定義できるから。</td><td className="text-white/60">天気予報のように相場を読む</td></tr>
                <tr><td className="font-bold text-accent-soft">確信度較正＋縮退（shrinkage）</td><td>過去の的中率を10段階で蓄積し、その場の自信を実績で補正。データ不足時は控えめに寄せます。</td><td>自信を数値で縛れ、過信を防げるから。</td><td className="text-white/60">自信過剰にならない仕組み</td></tr>
                <tr><td className="font-bold text-accent-soft">ショック検知・遷移ガード</td><td>急変時は判定を待たず即休止。相場の切り替わり直後は様子見し、往復ビンタを防ぎます。</td><td>機械が迷わず休める条件だから。</td><td className="text-white/60">危ない時は手を出さない</td></tr>
                <tr><td className="font-bold text-accent-soft">バックテスト＋模擬取引</td><td>本番前に過去データで検証し、お金を使わない模擬取引でも動作確認します。</td><td>本番前に機械だけで検証できるから。</td><td className="text-white/60">デビュー前に猛練習済み</td></tr>
              </tbody>
            </table>
          </Reveal>
          <Reveal className="mt-6 rounded-xl border border-accent/30 bg-navy-950 p-6 text-center">
            <p className="mx-auto max-w-2xl text-sm text-white/75 md:text-base">
              当てにいかない。優位がない時は休む。損失には天井を設ける。<br />
              <b className="text-accent-soft">プロの規律を、統計学で、感情ゼロで回す。</b>それがcryptoEngineの正体です。<br />
              <span className="text-xs text-white/50">※それでも値動きのリスクはゼロになりません。利益の保証はできません（11で正直にお伝えします）。</span>
            </p>
          </Reveal>
        </section>

        {/* 7 完成形ロジック */}
        <section id="logic-final" className="border-b border-accent/15 py-16">
          <Reveal className="mb-8 flex flex-col items-center text-center">
            <SevenGateLogo size={300} />
            <p className="mt-2 text-[11px] tracking-[0.35em] text-accent-soft">NEUTRON ORIGINAL TRADING ENGINE</p>
          </Reveal>
          <Reveal><H2 no="07 — 心臓部" title="cryptoEngine搭載エンジン「SEVEN-GATE ENGINE」" lead="cryptoEngineの中核として搭載しているトレードエンジンが、Neutronが一から開発した完全オリジナルのSEVEN-GATE ENGINEです。街乗りと高速で走り方を変えるエンジンのように、相場の天気で振る舞いを切り替えます。中身は「板の流れを読む7つの関所＋注文の大きさを変える無段階ギア＋17銘柄から1つを選ぶ目利き」。たとえるなら散弾銃ではなくスナイパーライフル。監視の網は広く、引き金は一発厳選です。" /></Reveal>
          <Reveal className="rounded-xl border border-accent/30 bg-navy-950 p-6 md:p-8">
            <h3 className="font-bold text-accent-soft">7つの関所 — ひとつでも通らなければ進まない</h3>
            <p className="mt-3 text-sm text-white/70">
              5秒ごとに17銘柄の注文の板を全部読み、7つの関所を順に通します。
              どこかで「ダメ」と出たらその場で休みます。だから無駄な注文が出ません。
            </p>
            <ol className="mt-4 space-y-2 text-sm text-white/75">
              <li><b className="text-accent-soft">関所1「急変・薄板チェック」</b> — 値が跳んだ直後や、注文が薄すぎる時は即お休み（約10秒）。事故りそうな時は近づきません。</li>
              <li><b className="text-accent-soft">関所2「相場の天気予報」</b> — 直近20回分の値動きを統計で「上昇・下降・横ばい・荒れ・凪・反転・不明」の7つに分類。凪と不明の日は参加しません。</li>
              <li><b className="text-accent-soft">関所3「切り替わり直後の様子見」</b> — 天気が変わった直後は30秒お休み。慌てて飛びつかず、往復ビンタ（行ったり来たりの負け）を防ぎます。</li>
              <li><b className="text-accent-soft">関所4「方向の裏取り」</b> — 「価格の傾き」と「注文の流れ」が両方同じ方向を向いた時だけ進みます。片方だけでは進みません。ダマシの値動きはここで落ちます。</li>
              <li><b className="text-accent-soft">関所5「自信の補正」</b> — その場の自信を、過去の的中実績で割り引きます。実績が少ないうちは控えめに。過信しない仕組みです。</li>
            <li><b className="text-accent-soft">関所6「手数料の壁」</b> — 「手数料の3倍以上の見込み」がない取引は捨てます。薄利の乱れ撃ちは手数料負けするので、構造上通れません。</li>
            <li><b className="text-accent-soft">関所7「上限と冷却」</b> — 保有は同時に1つまで、銘柄ごとに休憩時間を設けます。熱くなっての連打はできない構造です。</li>
            </ol>
          </Reveal>
          <Reveal kind="gravity" className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-accent/20 bg-navy-800 p-6">
              <h3 className="mb-2 font-bold text-accent-soft">無段階ギア — 大きさが自動で変わる</h3>
              <p className="text-sm text-white/70">
                注文の大きさは毎回コンピュータが計算します。自信が高いほど大きく（0.5〜1.5倍）、
                板が荒れている時は小さく（最大で4分の1まで減速）、口座のお金の2割を超える注文は出しません。
                たとえば口座に5,000円なら1回の上限は約1,000円。だから一発で大損しません。
              </p>
            </div>
            <div className="rounded-xl border border-accent/20 bg-navy-800 p-6">
              <h3 className="mb-2 font-bold text-accent-soft">17銘柄から毎回ひとつだけ選ぶ目利き</h3>
              <p className="text-sm text-white/70">
                対象はGMOコインの現物17銘柄ぜんぶ。5秒ごとに全部調べて、
                条件を満たした中で「いちばん自信が高い1つ」だけ撃ちます。
                持っている銘柄の買い増しや、持っていない銘柄の空売りはしません。
                長く持ちすぎた建玉（約5分超）は時間切れで自動決済します。
              </p>
            </div>
          </Reveal>
          <Reveal kind="left" className="mt-6 overflow-x-auto rounded-xl border border-accent/25">
            <table className="w-full min-w-[680px] bg-navy-950 text-sm">
              <thead><tr className="bg-accent/10 text-accent-soft">
                <th className="p-4 text-left">相場の天気</th><th className="p-4 text-left">ねらい</th><th className="p-4 text-left">持ち時間の目安</th><th className="p-4 text-left">参加条件</th>
              </tr></thead>
              <tbody className="[&_td]:border-t [&_td]:border-accent/10 [&_td]:p-4 [&_td]:align-top">
                <tr><td className="font-bold text-accent-soft">上昇・下降トレンド</td><td>流れに乗る</td><td>30秒〜5分</td><td>自信0.45以上・ゆがみ0.30以上</td></tr>
                <tr><td className="font-bold text-accent-soft">横ばい（レンジ）</td><td>小さく獲る</td><td>15秒〜・休憩30秒</td><td>自信0.60以上・ゆがみ0.50以上</td></tr>
                <tr><td className="font-bold text-accent-soft">荒れ相場</td><td>短期決戦のみ</td><td>10秒〜・休憩30秒</td><td>自信0.55以上・ゆがみ0.40以上</td></tr>
                <tr><td className="font-bold text-accent-soft">反転の兆し</td><td>慎重に逆張り</td><td>20秒〜・休憩60秒</td><td>自信0.55以上（実績100件までは0.65）</td></tr>
                <tr><td>凪・不明</td><td>—（お休み）—</td><td>—</td><td className="text-white/60">参加しません</td></tr>
              </tbody>
            </table>
          </Reveal>
          <Reveal className="mt-6 rounded-xl border border-accent/30 bg-navy-950 p-6 text-center">
            <p className="mx-auto max-w-2xl text-sm text-white/75 md:text-base">
              約定が少ない日があるのは正常です。<b className="text-accent-soft">撃たなかった候補の記録も残し</b>、週ごとの検証で「あの見送りは正しかったか」を測り続けます。<br />
              <span className="text-xs text-white/50">※相場が静かな日は1件も撃たないことがあります。それが手数料負けを防ぐ設計です。利益の保証はできません。</span>
            </p>
          </Reveal>
        </section>

        {/* 8 フロー */}
        <section id="flow" className="border-b border-accent/15 py-16">
          <Reveal><H2 no="08 — 申し込むだけ" title="7ステップ・あなたは4つだけ" lead="むずかしい設置は販売元のNeutronが代行。あなたは申込・契約・お支払い2回の4つだけです。" /></Reveal>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-7">
            {(
            [
              ["STEP 1", "申込", "あなた／1分", true], ["STEP 2", "電子契約", "あなた／署名だけ", true],
              ["STEP 3", "お支払い①", presale ? "設置代 ¥50,000（特典）" : "設置代 ¥60,000", true], ["STEP 4", "設置", "販売元Neutronが代行", false],
              ["STEP 5", "完了メール", "自動で届く", false], ["STEP 6", "お支払い②", "利用料 ¥25,000/月", true],
              ["STEP 7", "スタート", "24時間開始", false],
            ] as [string, string, string, boolean][]
          ).map(([b, t, s, mine]) => (
              <div key={b} data-flow-step className={`rounded-lg border p-3 text-center ${mine ? "border-accent/50 bg-navy-800" : "border-accent/20 bg-navy-950"}`}>
                <b className="mb-1 block text-[11px] tracking-widest text-accent-soft">{b}</b>
                <strong className="block text-sm">{t} {(b === "STEP 3" || b === "STEP 6") && <span className="stripe-bounce inline-block">💳</span>}</strong>
                <span className="text-[11px] text-white/50">{s}</span>
              </div>
            ))}
          </div>
          <p className="glow-auto mt-6 text-center text-xl font-extrabold tracking-widest text-accent-soft">完全自動</p>
        </section>

        {/* 9 料金 */}
        <section id="price" className="border-b border-accent/15 py-16">
          <Reveal><H2 no="09 — お金のはなし" title="料金は2つだけ。追加請求なし" lead="サーバー代込み。あとから「あれもこれも」と請求されることはありません。" /></Reveal>
          <div className="grid gap-4 md:grid-cols-[1.618fr_1fr]">
            <Reveal kind="left" className="float-card rounded-2xl border border-accent bg-gradient-to-b from-navy-800 to-navy-950 p-8">
              <span className="rounded-full border border-accent/30 bg-accent/15 px-3 py-1 text-[11px] tracking-widest text-accent-soft">最初だけ — 設置代</span>
              {presale === true ? (
                <>
                  <span className="mt-3 inline-block rounded-full bg-accent px-4 py-1 text-xs font-bold text-navy-950">先行予約特典 −{money(PRESALE_DISCOUNT)}</span>
                  <div className="my-2 text-5xl font-extrabold text-accent-soft">{money(60000 - PRESALE_DISCOUNT)}</div>
                  <p className="text-sm text-white/50 line-through">通常 {money(60000)}</p>
                  <p className="mt-1 text-sm text-white/70">9/17〜10/16 17:00の申込限定。サーバーの用意・設置・動作確認・完了報告まで全部込み。最初の1回だけです。</p>
                </>
              ) : (
                <>
                  <div className="my-2 text-5xl font-extrabold text-accent-soft">¥60,000</div>
                  <p className="text-sm text-white/70">サーバーの用意・設置・動作確認・完了報告まで全部込み。最初の1回だけです。</p>
                </>
              )}
            </Reveal>
            <Reveal kind="right" className="float-card rounded-2xl border border-accent/25 bg-navy-950 p-8">
              <span className="rounded-full border border-accent/30 bg-accent/15 px-3 py-1 text-[11px] tracking-widest text-accent-soft">毎月 — 利用料（サーバー代込み）</span>
              <div className="my-2 text-4xl font-extrabold">¥25,000<span className="text-sm"> /月</span></div>
              <p className="text-sm text-white/70">利用・自動切替・見守り・お知らせ・領収書・自動更新ぜんぶ込み。</p>
            </Reveal>
          </div>
        </section>

        {/* 10 制限 */}
        <section className="border-b border-accent/15 py-16">
          <Reveal kind="gravity"><H2 no="10 — 人数制限のわけ" title="先着80名で、完全限定です" lead="81人目はお受けできません。10名ずつのグループ（A→B→C…→H）でご案内し、80名に到達したら締め切ります。" /></Reveal>
          <Reveal kind="gravity" className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-accent/20 bg-navy-800 p-6 text-sm">
              <h3 className="mb-2 font-bold text-accent-soft">80名の理由＝市場へのやさしさ</h3>
              <p className="text-white/70">市場は器が決まっています。注文が重なって互いの足を引っ張らないよう、科学的に80名を上限に固定。各グループで導入時期をずらし、市場影響ゼロを維持します。あなたの成績を守るための壁です。</p>
            </div>
            <div className="rounded-xl border border-accent/20 bg-navy-950 p-6 text-sm">
              <h3 className="mb-2 font-bold text-accent-soft">10名ずつのグループ（A → B → C … → H）</h3>
              <div className="flex flex-wrap gap-2">{["A", "B", "C", "D", "E", "F", "G", "H"].map((g) => <span key={g} className="gravity-in rounded-lg border border-accent/40 bg-accent/10 px-4 py-2 font-bold text-accent-soft">{g}</span>)}</div>
              <p className="mt-3 text-white/55">完全先着順。80名到達で募集終了・再開は未定です。</p>
            </div>
          </Reveal>
        </section>

        {/* 11 リスク */}
        <section className="border-b border-accent/15 py-16">
          <Reveal><H2 no="11 — 正直なおはなし" title="リスクとお約束" /></Reveal>
          <div className="border-l-2 border-accent pl-6 text-sm text-white/75">
            <ul className="space-y-2">
              <li>■ 暗号通貨の値段は動きます。元本や利益のお約束はできません。</li>
              <li>■ 過去の成績が、未来も同じとは限りません。</li>
              <li>■ 「絶対に儲かる」とは言いません。それは本当ではないからです。</li>
              <li>■ お約束するのは「いつも同じ判断・ぜんぶ記録・相場に合わせて選び直すこと」の3つです。</li>
            </ul>
            <div className="mt-6 rounded-xl border border-accent/25 bg-navy-950 p-6">
              <strong className="text-accent-soft">お申込後の流れ（ぜんぶ自動）</strong>
              <ol className="ml-5 mt-2 list-decimal space-y-1">
                <li>Xや紹介でこのページに到着</li>
                <li>申込 → 電子契約（署名だけ）</li>
                <li>お支払い① 設置代 {presale ? "¥50,000（先行予約特典）" : "¥60,000"}</li>
                <li>販売元のNeutronが設置・動作確認</li>
                <li>完了メールが届く</li>
                <li>お支払い② 利用料 ¥25,000/月</li>
                <li>スタート。以後は毎月自動・領収書も自動</li>
              </ol>
            </div>
          </div>
        </section>

        {/* 12 CTA */}
        <section id="apply" className="py-16">
          <div className="rounded-2xl border border-accent bg-navy-950/80 p-8 text-center shadow-[0_0_80px_rgba(16,185,129,.12)] md:p-12">
            <Badge>先着80名・完全限定 — 満枠で締切</Badge>
            <h2 className="mt-4 text-2xl font-extrabold md:text-3xl">枠が埋まる前に申し込む</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-white/60">申込は3分で完了。むずかしい設置は販売元が代行します。先着80名・満枠で締切です。</p>
            <div className="mx-auto mt-8 grid max-w-md gap-3 text-center">
              <a href={p.formUrl} target="_blank" rel="noopener" className="cta-shine rounded-md bg-accent py-3 font-bold text-navy-950">80名の枠に申し込む（Googleフォーム）</a>
              <p className="text-center text-xs text-white/50">送信後、契約とお支払いのご案内が自動で届きます。</p>
            </div>
          </div>
        </section>
      </div>

      <footer className="border-t border-accent/15 py-10 text-center text-xs text-white/50">
        <a href="/" className="underline underline-offset-4">← Neutronトップへ戻る</a>
        <p className="mt-3">© 2026 Neutron（販売元の会社） — cryptoEngine™（製品）<br />投資助言ではありません。リスクを理解の上でお申し込みください。</p>
      </footer>
    </main>
  );
}
