// SEVEN-GATE ENGINE ロゴ調表記:
// Neutronが開発した完全オリジナルトレードエンジンの印。
// 7本の門柱（7段階の関所）＋中央発光。既存の世界観（emerald/navy）に合わせる。
export default function SevenGateLogo({ size = 320 }: { size?: number }) {
  const h = 150;
  const bars = [34, 52, 70, 92, 70, 52, 34];
  const gap = 30;
  const startX = 180 - (gap * (bars.length - 1)) / 2;
  return (
    <svg viewBox={`0 0 360 ${h}`} width={size} height={(size * h) / 360} className="h-auto max-w-full" role="img" aria-label="SEVEN-GATE ENGINE logo">
      <defs>
        <linearGradient id="sg-bar" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
        <radialGradient id="sg-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="45%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* 7本の門柱 */}
      {bars.map((bh, i) => {
        const x = startX + i * gap;
        const hot = i === 3;
        return (
          <g key={i}>
            {hot && <circle cx={x} cy={52 - bh} r="16" fill="url(#sg-core)" opacity=".9" />}
            <rect x={x - 4} y={52 - bh} width="8" height={bh} rx="3" fill={hot ? "#34D399" : "url(#sg-bar)"} opacity={hot ? 1 : 0.75 + i * 0.02} />
          </g>
        );
      })}
      {/* 土台ライン */}
      <rect x={startX - 22} y="54" width={gap * (bars.length - 1) + 44} height="2.5" rx="1.25" fill="#10B981" opacity=".5" />
      {/* 名称 */}
      <text x="180" y="102" textAnchor="middle" fill="#F5F7FA" fontSize="30" fontWeight="800" letterSpacing="4" fontFamily="Arial,Helvetica,sans-serif">SEVEN-GATE</text>
      <text x="180" y="128" textAnchor="middle" fill="#10B981" fontSize="13" letterSpacing="10" fontFamily="Arial,Helvetica,sans-serif">ENGINE</text>
    </svg>
  );
}
