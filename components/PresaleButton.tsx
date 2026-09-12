"use client";
import { useEffect, useState } from "react";
import { PRESALE_END } from "../lib/flow";

function split(end: number, now: number) {
  const s = Math.max(0, Math.floor((end - now) / 1000));
  return {
    d: Math.floor(s / 86400),
    h: Math.floor((s % 86400) / 3600),
    m: Math.floor((s % 3600) / 60),
    s: s % 60,
    over: end <= now,
  };
}

// 先行予約ボタン: 期間中は発光＋カウントダウン、終了後は終了表示に自動切替。
export default function PresaleButton() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  if (now === null) {
    return (
      <a href="/crypto-engine" className="btn-gold rounded-md px-5 py-2 text-sm font-bold">
        先行予約受付中
      </a>
    );
  }
  const r = split(new Date(PRESALE_END).getTime(), now);
  if (r.over) {
    return (
      <a href="/crypto-engine" className="rounded-md border border-paper/20 px-5 py-2 text-sm text-paper/50">
        先行予約終了
      </a>
    );
  }
  const cd =
    r.d >= 1
      ? `残り${r.d}日`
      : `残り${r.h}:${String(r.m).padStart(2, "0")}:${String(r.s).padStart(2, "0")}`;
  return (
    <a
      href="/crypto-engine"
      className="btn-gold cta-shine presale-hot rounded-md px-5 py-2 text-sm font-bold"
    >
      <span className="relative mr-1.5 inline-flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-deep opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-deep" />
      </span>
      先行予約受付中
      <span className="ml-1.5 tabular-nums">{cd}</span>
    </a>
  );
}
