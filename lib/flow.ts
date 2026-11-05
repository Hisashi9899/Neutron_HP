// 契約フロー基盤: 製品が増えても ?p=slug で同じ導線を使い回す。
// 将来: funding-arb（ファンディングレート裁定）, grid-rebalance（グリッド/リバランスBot）
// クライアントにも公開してよい製品情報のみを定義する。
// 申込フォーム・決済URLは lib/flow.server.ts（サーバー専用）に分離し、
// クライアントのJSバンドルへ含めない。
export type Product = {
  slug: string;
  name: string;
  deposit: number;
  monthly: number;
  cap: number;
  status: "live" | "soon";
  /** true の間は新規申込ボタンを無効化し、販売中止の案内を表示する */
  salesSuspended?: boolean;
};

export const PRODUCTS: Record<string, Product> = {
  cryptoengine: {
    slug: "cryptoengine",
    name: "cryptoEngine",
    deposit: 60000,
    monthly: 25000,
    cap: 80,
    status: "live",
    // 2026-11-05: 外部取引所のセキュリティ事案を受け、新規販売を一時中止
    salesSuspended: true,
  },
  "funding-arb": {
    slug: "funding-arb",
    name: "fundingArbEngine",
    deposit: 60000,
    monthly: 25000,
    cap: 80,
    status: "soon",
  },
  "grid-rebalance": {
    slug: "grid-rebalance",
    name: "gridRebalanceBot",
    deposit: 60000,
    monthly: 25000,
    cap: 80,
    status: "soon",
  },
};

export function getProduct(slug?: string): Product {
  return (slug && PRODUCTS[slug]) || PRODUCTS.cryptoengine;
}

export const qp = (slug: string) => `?p=${slug}`;
export const money = (n: number) => "¥" + n.toLocaleString("ja-JP");

// 販売中止中に申込ボタンへ表示する文言
export const SALES_SUSPENDED_MESSAGE = "現在販売を中止しております。";
export const SALES_SUSPENDED_DETAIL =
  "外部取引所のセキュリティ事案を受け、安全が確認できるまで新規のお申し込みを一時停止しております。再開時期は改めてお知らせします。";

// 連絡先: 問い合わせ・申込・契約の全通知先
export const CONTACT_EMAIL = "neutron.aoki@gmail.com";
export const CONTACT_MAILTO =
  "mailto:neutron.aoki@gmail.com?subject=%E3%80%90Neutron%E3%80%91%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B";

// 先行予約の締切（JST）。この時刻を過ぎると申込ボタンは「終了」表示に切替わる。
export const PRESALE_END = "2026-10-16T17:00:00+09:00";
// 先行予約特典：設置代の割引額（期間中のみ表示・適用）
export const PRESALE_DISCOUNT = 10000;
