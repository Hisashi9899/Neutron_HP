"use client";
import { usePresaleActive } from "./usePresaleActive";
import { PRESALE_DISCOUNT, money } from "../lib/flow";

// 設置代の金額表示：先行予約期間中は特典価格、終了後は通常価格に自動切替。
export default function DepositAmount({ deposit }: { deposit: number }) {
  const presale = usePresaleActive();
  if (presale === true) {
    return (
      <>
        <span className="mt-3 inline-block rounded-full bg-accent px-4 py-1 text-xs font-bold text-navy-950">
          先行予約特典 −{money(PRESALE_DISCOUNT)}
        </span>
        <div className="my-2 text-5xl font-extrabold text-accent-soft">
          {money(deposit - PRESALE_DISCOUNT)}
        </div>
        <p className="text-sm text-white/50 line-through">通常 {money(deposit)}</p>
        <p className="mt-1 text-xs text-accent-soft">9/17〜10/16 17:00の契約完了分に適用</p>
      </>
    );
  }
  return (
    <div className="my-2 text-5xl font-extrabold text-accent-soft">{money(deposit)}</div>
  );
}
