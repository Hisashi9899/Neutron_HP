"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function NeutronStar({ tone = "gold" }: { tone?: "gold" | "emerald" }) {
  const ref = useRef<HTMLDivElement>(null);
  const ACCENT = tone === "emerald" ? 0x10b981 : 0xc9a86a;
  const EMISSIVE = tone === "emerald" ? 0x0a6f52 : 0x8a6f3a;

  useEffect(() => {
    const el = ref.current!;
    const w = el.clientWidth, h = el.clientHeight;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    camera.position.set(0, 0.6, 5.2);

    // 中性子星コア
    const core = new THREE.Mesh(
      new THREE.SphereGeometry(0.55, 48, 48),
      new THREE.MeshStandardMaterial({ color: 0xf5f7fa, emissive: EMISSIVE, emissiveIntensity: 0.7, roughness: 0.3 })
    );
    scene.add(core);
    const glow = new THREE.Mesh(
      new THREE.SphereGeometry(0.72, 32, 32),
      new THREE.MeshBasicMaterial({ color: ACCENT, transparent: true, opacity: 0.16 })
    );
    scene.add(glow);

    // 黄金比スパイラル（対数螺旋 r = a * φ^(θ))
    const PHI = 1.6180339887;
    const spiralPts: THREE.Vector3[] = [];
    for (let i = 0; i <= 400; i++) {
      const t = (i / 400) * Math.PI * 5;
      const r = 0.15 * Math.pow(PHI, t / Math.PI / 1.2);
      spiralPts.push(new THREE.Vector3(Math.cos(t) * r * 1.9, Math.sin(t) * r * 1.2, 0));
    }
    const spiral = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(spiralPts),
      new THREE.LineBasicMaterial({ color: 0xf5f7fa, transparent: true, opacity: 0.9 })
    );
    scene.add(spiral);

    // 磁場ライン5本（揺らす対象）
    const fields: THREE.Line[] = [];
    for (let k = 0; k < 5; k++) {
      const pts: THREE.Vector3[] = [];
      const amp = 1.4 + k * 0.28;
      for (let i = 0; i <= 80; i++) {
        const x = -2.4 + (i / 80) * 4.8;
        pts.push(new THREE.Vector3(x, Math.sin(x * 1.2) * 0.28 * (k % 2 ? 1 : -1) + (k - 2) * 0.22, -0.4 - k * 0.06));
      }
      const line = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(pts),
        new THREE.LineBasicMaterial({ color: ACCENT, transparent: true, opacity: 0.75 - k * 0.09 })
      );
      scene.add(line);
      fields.push(line);
    }

    // リング（円形構造）
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(1.7, 0.012, 12, 128),
      new THREE.MeshBasicMaterial({ color: ACCENT, transparent: true, opacity: 0.7 })
    );
    ring.rotation.x = Math.PI / 2.4;
    scene.add(ring);

    scene.add(new THREE.AmbientLight(0x8890ff, 0.7));
    const key = new THREE.PointLight(ACCENT, 30, 20);
    key.position.set(3, 2, 4);
    scene.add(key);

    let raf = 0;
    const t0 = performance.now();
    const tick = () => {
      const t = (performance.now() - t0) / 1000;
      core.rotation.y = t * 0.9;
      glow.scale.setScalar(1 + Math.sin(t * 2.2) * 0.05);
      spiral.rotation.z = t * 0.22; // ゆっくり回転
      fields.forEach((f, i) => { f.position.y = Math.sin(t * 1.618 + i) * 0.08; });
      ring.rotation.z = t * 0.12;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    tick();

    const onResize = () => {
      const nw = el.clientWidth, nh = el.clientHeight;
      renderer.setSize(nw, nh);
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); renderer.dispose(); el.innerHTML = ""; };
  }, []);

  return <div ref={ref} className="h-[320px] w-full md:h-[440px]" aria-label="中性子星アニメーション" />;
}
