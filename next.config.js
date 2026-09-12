/** @type {import('next').NextConfig} */
// Vercel本番用: SSG基本 + 動的レンダーは必要時のみ
// Three.js / GSAP はクライアント側 ("use client" + dynamic ssr:false) で動作
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
};
module.exports = nextConfig;
