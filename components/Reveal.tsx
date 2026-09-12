"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const PHI = 1.618;

export function usePhiReveal() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        const kind = el.dataset.reveal || "fade";
        const from =
          kind === "left" ? { x: -60, opacity: 0 } :
          kind === "right" ? { x: 60, opacity: 0 } :
          kind === "gravity" ? { scale: 0.92, opacity: 0, y: 30 } :
          { y: 40, opacity: 0 };
        gsap.fromTo(el, from, {
          x: 0, y: 0, scale: 1, opacity: 1,
          duration: PHI, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });
      // 導入フロー点灯：黄金比タイミング stagger
      gsap.utils.toArray<HTMLElement>("[data-flow-step]").forEach((el, i) => {
        gsap.fromTo(el, { opacity: 0.25, scale: 0.96 }, {
          opacity: 1, scale: 1, duration: 0.618, delay: i * 0.382,
          ease: "power2.out",
          scrollTrigger: { trigger: "#flow", start: "top 75%" },
        });
      });
    });
    return () => ctx.revert();
  }, []);
}

export function Reveal({
  kind = "fade", className = "", children, id,
}: { kind?: "fade" | "left" | "right" | "gravity"; className?: string; children: React.ReactNode; id?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  return <div id={id} ref={ref} data-reveal={kind} className={className}>{children}</div>;
}
