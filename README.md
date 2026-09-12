# Neutron LP — Next.js + Docker(開発) + Vercel(本番)

日本初の国産・完全自動・自己改善型トレードエンジン `cryptoEngine` 販売LP。
Three.js（中性子星）+ GSAP（黄金比モーション）+ Tailwind。

## 開発 (Docker + ホットリロード)
```bash
docker compose up --build
# http://localhost:3000
```

## 本番 (Vercel + GitHub自動デプロイ)
1. GitHubにpush
2. VercelでImport（Framework: Next.js / Build: `npm run build`）
3. push毎に自動デプロイ・SSL自動

## Stripe
`app/page.tsx` の `STRIPE_DEPLOY` / `STRIPE_SUB` を本番リンクに置換。

## 旧静的LP
`legacy-static.html` に保存（前世代の単一ファイル版）。
