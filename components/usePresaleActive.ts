"use client";
import { useEffect, useState } from "react";
import { PRESALE_END } from "../lib/flow";

// 先行予約期間中か（null＝判定前）。SSGとの不整合を避けるためマウント後に判定。
export function usePresaleActive(): boolean | null {
  const [active, setActive] = useState<boolean | null>(null);
  useEffect(() => {
    const check = () => setActive(Date.now() < new Date(PRESALE_END).getTime());
    check();
    const id = setInterval(check, 30000);
    return () => clearInterval(id);
  }, []);
  return active;
}
