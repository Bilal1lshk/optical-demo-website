"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";

const FINISHES = [
  { color: "#059669", label: "Forest Emerald", tag: "Anodized Green" },
  { color: "#94a3b8", label: "Brushed Titanium", tag: "Aerospace Grade" },
  { color: "#27272a", label: "Matte Graphite", tag: "PVD Charcoal" },
  { color: "#f8fafc", label: "Glacier White", tag: "Ceramic Enamel" },
];

const PRESETS = [
  { label: "Perspective", shortLabel: "Orbit", rot: { x: -0.06, y: -0.35 } },
  { label: "Frontal", shortLabel: "Front", rot: { x: 0, y: 0 } },
  { label: "Profile", shortLabel: "Side", rot: { x: 0.05, y: -1.35 } },
  { label: "Overhead", shortLabel: "Top", rot: { x: 0.75, y: -0.15 } },
];

export default function Hero3DCanvas() {
  const canvasRef = useRef(null);
  const colorRef = useRef("#059669");
  const apiRef = useRef(null);
  const [activeFinish, setActiveFinish] = useState(0);
  const [activePreset, setActivePreset] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(dpr);
    renderer.setClearAlpha(0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 60);
    camera.position.set(0, 0.15, 7.4);

    /* Studio environment mapping (clean gray & emerald studio reflections) */
    const envCanvas = document.createElement("canvas");
    envCanvas.width = 512;
    envCanvas.height = 256;
    const ctx = envCanvas.getContext("2d");
    const g = ctx.createLinearGradient(0, 0, 0, 256);
    g.addColorStop(0, "#222a26");
    g.addColorStop(0.45, "#15241d");
    g.addColorStop(0.5, "#0b120f");
    g.addColorStop(1, "#050807");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 512, 256);
    const hot = ctx.createRadialGradient(140, 70, 4, 140, 70, 110);
    hot.addColorStop(0, "rgba(240,253,244,0.95)");
    hot.addColorStop(1, "rgba(240,253,244,0)");
    ctx.fillStyle = hot;
    ctx.fillRect(0, 0, 512, 256);
    const cool = ctx.createRadialGradient(400, 110, 4, 400, 110, 90);
    cool.addColorStop(0, "rgba(110,231,183,0.75)");
    cool.addColorStop(1, "rgba(110,231,183,0)");
    ctx.fillStyle = cool;
    ctx.fillRect(0, 0, 512, 256);

    const envTex = new THREE.CanvasTexture(envCanvas);
    envTex.mapping = THREE.EquirectangularReflectionMapping;
    envTex.colorSpace = THREE.SRGBColorSpace;
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envRT = pmrem.fromEquirectangular(envTex);
    scene.environment = envRT.texture;

    /* Materials */
    const frameMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(colorRef.current),
      metalness: 0.85,
      roughness: 0.25,
      envMapIntensity: 1.6,
    });

    const lensMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#d1fae5"),
      metalness: 0.05,
      roughness: 0.06,
      transparent: true,
      opacity: 0.38,
      clearcoat: 1,
      clearcoatRoughness: 0.05,
      envMapIntensity: 2.0,
      side: THREE.DoubleSide,
    });

    const padMat = new THREE.MeshStandardMaterial({
      color: "#f1f5f9",
      metalness: 0,
      roughness: 0.5,
    });

    /* Procedural 3D Frame Construction */
    const glasses = new THREE.Group();
    const geoms = [];

    const ringGeo = new THREE.TorusGeometry(0.5, 0.045, 20, 96);
    geoms.push(ringGeo);
    const lensGeo = new THREE.CircleGeometry(0.475, 64);
    geoms.push(lensGeo);

    [-1, 1].forEach((s) => {
      const ring = new THREE.Mesh(ringGeo, frameMat);
      ring.position.set(s * 0.62, 0, 0);
      glasses.add(ring);

      const lens = new THREE.Mesh(lensGeo, lensMat);
      lens.position.set(s * 0.62, 0, -0.01);
      glasses.add(lens);
    });

    /* Bridge */
    const bridgeCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.14, 0.16, 0),
      new THREE.Vector3(0, 0.3, 0.03),
      new THREE.Vector3(0.14, 0.16, 0),
    ]);
    const bridgeGeo = new THREE.TubeGeometry(bridgeCurve, 40, 0.04, 12, false);
    geoms.push(bridgeGeo);
    glasses.add(new THREE.Mesh(bridgeGeo, frameMat));

    /* Nose pads */
    const padGeo = new THREE.SphereGeometry(0.055, 18, 14);
    geoms.push(padGeo);
    [-1, 1].forEach((s) => {
      const pad = new THREE.Mesh(padGeo, padMat);
      pad.scale.set(0.7, 1.3, 0.5);
      pad.position.set(s * 0.17, -0.1, 0.14);
      glasses.add(pad);
    });

    /* Temples / Hinges */
    const temples = [];
    const hingeGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.1, 16);
    geoms.push(hingeGeo);

    [-1, 1].forEach((s) => {
      const pivot = new THREE.Group();
      pivot.position.set(s * 1.11, 0.14, 0);

      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(s * 0.16, -0.02, -0.5),
        new THREE.Vector3(s * 0.24, -0.07, -1.15),
        new THREE.Vector3(s * 0.18, -0.3, -1.62),
      ]);
      const tGeo = new THREE.TubeGeometry(curve, 60, 0.043, 12, false);
      geoms.push(tGeo);
      const arm = new THREE.Mesh(tGeo, frameMat);
      pivot.add(arm);

      const hinge = new THREE.Mesh(hingeGeo, frameMat);
      hinge.rotation.z = Math.PI / 2;
      pivot.add(hinge);

      glasses.add(pivot);
      temples.push({ pivot, sign: s });
    });

    scene.add(glasses);
    glasses.rotation.set(-0.06, -0.35, 0.04);

    /* Lights (Clean Emerald, Cool Gray and Neutral White) */
    const key = new THREE.DirectionalLight(0xffffff, 2.5);
    key.position.set(3, 4, 5);
    scene.add(key);

    const rim = new THREE.PointLight(0x34d399, 26, 22);
    rim.position.set(-4, -1.5, 3);
    scene.add(rim);

    const coolFill = new THREE.PointLight(0xa7f3d0, 18, 20);
    coolFill.position.set(3.5, -2.5, -3);
    scene.add(coolFill);

    scene.add(new THREE.AmbientLight(0xffffff, 0.4));

    /* Responsive Sizing */
    const setSize = () => {
      const rect = canvas.getBoundingClientRect();
      const w = Math.max(rect.width, 1);
      const h = Math.max(rect.height, 1);
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      const scale = Math.min(1, w / 580);
      glasses.scale.setScalar(0.95 * Math.max(scale, 0.65));
      camera.updateProjectionMatrix();
    };
    setSize();
    const ro = new ResizeObserver(setSize);
    ro.observe(canvas);

    /* Smooth Drag & Orbit Control */
    const target = { x: -0.06, y: -0.35 };
    const pointer = { x: 0, y: 0 };
    let dragging = false;
    let last = { x: 0, y: 0 };
    let idle = 0;

    const onDown = (e) => {
      dragging = true;
      idle = 0;
      last = { x: e.clientX, y: e.clientY };
      canvas.setPointerCapture?.(e.pointerId);
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      if (!dragging) return;
      target.y += (e.clientX - last.x) * 0.008;
      target.x += (e.clientY - last.y) * 0.006;
      target.x = Math.max(-0.9, Math.min(0.9, target.x));
      last = { x: e.clientX, y: e.clientY };
    };

    const onUp = (e) => {
      dragging = false;
      canvas.releasePointerCapture?.(e.pointerId);
    };

    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointerleave", onUp);

    let colorTarget = new THREE.Color(colorRef.current);
    apiRef.current = {
      setColor(hex) {
        colorRef.current = hex;
        colorTarget = new THREE.Color(hex);
      },
      setPreset(rot) {
        target.x = rot.x;
        target.y = rot.y;
        idle = 0;
      },
    };

    const clock = new THREE.Clock();
    let raf = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      const t = clock.getElapsedTime();
      const scroll = window.scrollY || 0;

      if (!dragging && !reduce) {
        idle += 0.016;
        if (idle > 1.8) target.y += 0.0018;
        target.x += (pointer.y * 0.28 - target.x + 0.06) * 0.02;
        target.y += (pointer.x * 0.38 - (target.y + 0.35)) * 0.012;
      }

      frameMat.color.lerp(colorTarget, 0.08);

      glasses.rotation.x += (target.x - glasses.rotation.x) * 0.07;
      glasses.rotation.y += (target.y - glasses.rotation.y) * 0.07;
      glasses.rotation.z = 0.04 + Math.sin(t * 0.6) * 0.018;
      glasses.position.y = Math.sin(t * 0.9) * 0.06 - scroll * 0.0012;

      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerup", onUp);
      canvas.removeEventListener("pointerleave", onUp);
      geoms.forEach((geo) => geo.dispose());
      ringGeo.dispose();
      frameMat.dispose();
      lensMat.dispose();
      padMat.dispose();
      envTex.dispose();
      envRT.dispose();
      pmrem.dispose();
      renderer.dispose();
      apiRef.current = null;
    };
  }, []);

  const handleFinishChange = (idx, hex) => {
    setActiveFinish(idx);
    apiRef.current?.setColor(hex);
  };

  const handlePresetChange = (idx, preset) => {
    setActivePreset(idx);
    apiRef.current?.setPreset(preset.rot);
  };

  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[1/1] max-w-xl mx-auto rounded-3xl bg-white dark:bg-[#0c120f] border border-neutral-200 dark:border-neutral-800 p-4 sm:p-6 shadow-xl shadow-black/5 dark:shadow-black/60 overflow-hidden flex flex-col justify-between transition-colors duration-250">
      {/* 3D Canvas */}
      <div className="relative flex-1 w-full flex items-center justify-center cursor-grab active:cursor-grabbing touch-none">
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
          aria-label="Interactive 3D Eyeglasses Showcase"
        />
      </div>

      {/* Bottom Controls Bar */}
      <div className="relative z-10 flex flex-col gap-2.5 pt-3 border-t border-neutral-200 dark:border-neutral-800 bg-[#f1f5f3] dark:bg-[#0a0d0b] rounded-2xl p-3 transition-colors">
        {/* Color finish swatches row */}
        <div className="flex items-center justify-between gap-2 w-full">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <span className="text-[11px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold shrink-0">
              Finish:
            </span>
            <div className="flex items-center gap-1.5 sm:gap-2">
              {FINISHES.map((f, i) => (
                <button
                  key={f.label}
                  onClick={() => handleFinishChange(i, f.color)}
                  className="relative p-1 rounded-full group focus:outline-none"
                  aria-label={f.label}
                >
                  {activeFinish === i && (
                    <motion.span
                      layoutId="activeHeroSwatch"
                      className="absolute inset-0 rounded-full border-2 border-emerald-500 dark:border-emerald-400"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                  <span
                    className="block w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-inner border border-neutral-300 dark:border-white/20 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: f.color }}
                  />
                </button>
              ))}
            </div>
          </div>
          <span className="text-xs font-serif italic text-emerald-700 dark:text-emerald-300 font-medium truncate">
            {FINISHES[activeFinish].label}
          </span>
        </div>

        {/* Camera Angle Presets - 4 equal-width responsive grid buttons that fill 100% width cleanly without overflow */}
        <div className="grid grid-cols-4 gap-1 sm:gap-1.5 bg-neutral-200/60 dark:bg-white/5 rounded-xl p-1 border border-neutral-300/60 dark:border-white/5 w-full">
          {PRESETS.map((p, i) => (
            <button
              key={p.label}
              onClick={() => handlePresetChange(i, p)}
              className={`py-1.5 px-1 text-[10px] uppercase tracking-wider rounded-lg font-medium transition-all text-center truncate ${
                activePreset === i
                  ? "bg-emerald-500 text-white dark:text-[#090b0a] font-bold shadow-sm"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
              }`}
            >
              <span className="hidden sm:inline">{p.label}</span>
              <span className="sm:hidden">{p.shortLabel}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
