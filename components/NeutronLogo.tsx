// Neutronブランドロゴ:
// 「Neutron」の文字そのものが中性子星 — 2つ目の "o" を中性子星グリフに置換。
// 同心リング + 黄金比スパイラル + 磁場ライン4本 + 中心発光。洗練のため要素は最小限。
export default function NeutronLogo({
  size = 320,
  tone = "gold",
  tagline = true,
}: {
  size?: number;
  tone?: "gold" | "emerald" | "mono";
  tagline?: boolean;
}) {
  const main = tone === "emerald" ? "#10B981" : tone === "mono" ? "#F5F7FA" : "#C9A86A";
  const sub = tone === "mono" ? "#F5F7FA" : "#F5F7FA";
  const h = tagline ? 150 : 110;
  return (
    <svg viewBox={`0 0 360 ${h}`} width={size} height={(size * h) / 360} className="h-auto max-w-full" role="img" aria-label="Neutron logo">
      <defs>
        <radialGradient id="n-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="45%" stopColor={main} />
          <stop offset="100%" stopColor={main} stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* oを中心とする立体パルサー線（文字の背後に配置） */}
      <g transform="translate(240,60)" fill="none">
        <circle r="46" stroke="#F5F7FA" strokeWidth="0.9" opacity=".55" />
        <circle r="54" stroke="#F5F7FA" strokeWidth="0.7" opacity=".3" />
        <ellipse rx="72" ry="15" stroke={main} strokeWidth="1" opacity=".55" transform="rotate(-12)" />
        <ellipse rx="72" ry="15" stroke={main} strokeWidth="0.8" opacity=".3" transform="rotate(12)" />
        <ellipse rx="58" ry="11" stroke={main} strokeWidth="0.7" opacity=".35" transform="rotate(-12)" />
      </g>
      {/* 左: Neutr */}
      <text x="205" y="76" textAnchor="end" fill={sub} fontSize="48" fontWeight="500" letterSpacing="6" textLength="150" lengthAdjust="spacing" fontFamily="'Cormorant Garamond',Georgia,'Times New Roman',serif">Neutr</text>
      {/* 中: 中性子星の "o"（前版の形を維持） */}
      <g transform="translate(240,60)">
        <circle r="27" fill="none" stroke={main} strokeWidth="1.6" opacity=".95" />
        <circle r="17" fill="none" stroke={main} strokeWidth="1" opacity=".55" />
        <circle r="13" fill="url(#n-core)" opacity=".95" />
        <path
          d="M0 0 m0 -1.5 a1.5 1.5 0 0 1 1.5 1.5 a2.6 2.6 0 0 1 -2.6 2.6 a4.4 4.4 0 0 1 -4.4 -4.4 a7.4 7.4 0 0 1 7.4 -7.4 a12 12 0 0 1 12 12"
          fill="none" stroke="#FFFFFF" strokeWidth="1.3"
        />
        <path d="M-40 0 Q-14 -12 0 -12 Q14 -12 40 0" fill="none" stroke={main} strokeWidth="1" opacity=".8" />
        <path d="M-40 0 Q-14 12 0 12 Q14 12 40 0" fill="none" stroke={main} strokeWidth="1" opacity=".8" />
        <path d="M-34 0 Q-14 -6 0 -6 Q14 -6 34 0" fill="none" stroke={main} strokeWidth="0.8" opacity=".45" />
        <path d="M-34 0 Q-14 6 0 6 Q14 6 34 0" fill="none" stroke={main} strokeWidth="0.8" opacity=".45" />
      </g>
      {/* 右: n */}
      <text x="275" y="76" textAnchor="start" fill={sub} fontSize="48" fontWeight="500" letterSpacing="6" textLength="30" lengthAdjust="spacing" fontFamily="'Cormorant Garamond',Georgia,'Times New Roman',serif">n</text>
      {tagline && (
        <text x="180" y="120" textAnchor="middle" fill={main} fontSize="11" letterSpacing="5">DENSITY × TRUTH × BEAUTY</text>
      )}
    </svg>
  );
}
