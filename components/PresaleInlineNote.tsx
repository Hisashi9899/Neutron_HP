"use client";
import { usePresaleActive } from "./usePresaleActive";
import { PRESALE_DISCOUNT, money } from "../lib/flow";

// 先行予約期間中のみ表示される特典注記。期間外は何も出さない。
export default function PresaleInlineNote() {
  const presale = usePresaleActive();
  if (presale !== true) return null;
  return <>（先行予約期間中は{money(PRESALE_DISCOUNT)}引き）</>;
}
