import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
  variable: "--font-cormorant",
});

const script = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "Neutron — 中性子星の密度・真理・美を、プロダクトに。",
  description:
    "Neutron公式サイト。プロダクト「cryptoEngine（国産・完全自動可変式トレードエンジン。市場に合わせてギアや銘柄を切り替え、最適解を出し続ける）」を販売しています。",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${cormorant.variable} ${script.variable}`}>{children}</body>
    </html>
  );
}
