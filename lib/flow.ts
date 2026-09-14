// 契約フロー基盤: 製品が増えても ?p=slug で同じ導線を使い回す。
// 将来: funding-arb（ファンディングレート裁定）, grid-rebalance（グリッド/リバランスBot）
export type Product = {
  slug: string;
  name: string;
  deposit: number;
  monthly: number;
  cap: number;
  status: "live" | "soon";
  formUrl: string;
  signUrl: string;
  stripeUrl: string;
};

export const PRODUCTS: Record<string, Product> = {
  cryptoengine: {
    slug: "cryptoengine",
    name: "cryptoEngine",
    deposit: 60000,
    monthly: 25000,
    cap: 80,
    status: "live",
    // 本番フォーム（2026-09-12公開）
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfsUx5-9IvC53FwWy_4DAWFDm4sei_zXuvXdq4IcH0PSuiWzg/viewform?usp=publish-editor",
    signUrl: "https://adobe.sign/placeholder",
    stripeUrl: "https://buy.stripe.com/fZu5kF6JEcDW1dPc1n3ks00",
  },
  "funding-arb": {
    slug: "funding-arb",
    name: "fundingArbEngine",
    deposit: 60000,
    monthly: 25000,
    cap: 80,
    status: "soon",
    formUrl: "https://docs.google.com/forms/d/placeholder",
    signUrl: "https://adobe.sign/placeholder",
    stripeUrl: "https://buy.stripe.com/sub-placeholder",
  },
  "grid-rebalance": {
    slug: "grid-rebalance",
    name: "gridRebalanceBot",
    deposit: 60000,
    monthly: 25000,
    cap: 80,
    status: "soon",
    formUrl: "https://docs.google.com/forms/d/placeholder",
    signUrl: "https://adobe.sign/placeholder",
    stripeUrl: "https://buy.stripe.com/sub-placeholder",
  },
};

export function getProduct(slug?: string): Product {
  return (slug && PRODUCTS[slug]) || PRODUCTS.cryptoengine;
}

export const qp = (slug: string) => `?p=${slug}`;
export const money = (n: number) => "¥" + n.toLocaleString("ja-JP");

// 連絡先: 問い合わせ・申込・契約の全通知先
export const CONTACT_EMAIL = "neutron.aoki@gmail.com";
export const CONTACT_MAILTO =
  "mailto:neutron.aoki@gmail.com?subject=%E3%80%90Neutron%E3%80%91%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B";

// 先行予約の締切（JST）。この時刻を過ぎると申込ボタンは「終了」表示に切替わる。
export const PRESALE_END = "2026-10-16T17:00:00+09:00";
// 先行予約特典：設置代の割引額（期間中のみ表示・適用）
export const PRESALE_DISCOUNT = 10000;
