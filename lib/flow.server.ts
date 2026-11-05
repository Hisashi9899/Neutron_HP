// サーバー専用: 申込フォーム・電子契約・決済のURL。
// クライアントコンポーネントからは import しないこと（JSバンドルへの露出防止）。
export type ProductLinks = {
  formUrl: string;
  signUrl: string;
  stripeUrl: string;
};

export const PRODUCT_LINKS: Record<string, ProductLinks> = {
  cryptoengine: {
    // 本番フォーム（2026-09-12公開）
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfsUx5-9IvC53FwWy_4DAWFDm4sei_zXuvXdq4IcH0PSuiWzg/viewform?usp=publish-editor",
    signUrl: "https://adobe.sign/placeholder",
    stripeUrl: "https://buy.stripe.com/fZu5kF6JEcDW1dPc1n3ks00",
  },
  "funding-arb": {
    formUrl: "https://docs.google.com/forms/d/placeholder",
    signUrl: "https://adobe.sign/placeholder",
    stripeUrl: "https://buy.stripe.com/sub-placeholder",
  },
  "grid-rebalance": {
    formUrl: "https://docs.google.com/forms/d/placeholder",
    signUrl: "https://adobe.sign/placeholder",
    stripeUrl: "https://buy.stripe.com/sub-placeholder",
  },
};

export function getProductLinks(slug?: string): ProductLinks {
  return (slug && PRODUCT_LINKS[slug]) || PRODUCT_LINKS.cryptoengine;
}
