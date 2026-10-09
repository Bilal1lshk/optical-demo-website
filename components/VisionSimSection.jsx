"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Activity, ShieldCheck, Clock, CheckCircle2, ArrowRight } from "lucide-react";

const SNELLEN = ["E", "F P T O Z", "L P E D", "P E C F D", "E D F C Z P"];

export default function VisionSimSection() {
  const rootRef = useRef(null);
  const irisRef = useRef(null);
  const [clarity, setClarity] = useState(45);

  const trackIris = (e) => {
    const el = rootRef.current;
    const iris = irisRef.current;
    if (!el || !iris) return;
    const box = el.getBoundingClientRect();
    const cx = box.left + box.width / 2;
    const cy = box.top + box.height * 0.42;
    const nx = Math.max(-1, Math.min(1, (e.clientX - cx) / (box.width / 2)));
    const ny = Math.max(-1, Math.min(1, (e.clientY - cy) / (box.height / 2)));
    iris.style.transform = `translate(${nx * 36}px, ${ny * 18}px)`;
  };

  const resetIris = () => {
    if (irisRef.current) irisRef.current.style.transform = "translate(0,0)";
  };

  const blurPx = ((100 - clarity) / 100) * 5.5;

  return (
    <section id="clinic" className="py-24 md:py-32 relative bg-[#f1f5f3] dark:bg-[#070908] border-t border-neutral-200 dark:border-white/5 transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Clinical Diagnostic Overview */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 dark:text-white font-sans tracking-tight mb-6">
              Digital eye exams with{" "}
              <span className="font-serif italic text-emerald-600 dark:text-emerald-400">retinal clarity.</span>
            </h2>

            <p className="text-base text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed max-w-xl mb-8">
              A 20-minute digital exam with 3D retinal OCT imaging. Your prescription is
              delivered straight to your phone before you leave.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href="#book"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-500 text-white dark:text-[#090b0a] text-xs font-bold uppercase tracking-wider hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-all group active:scale-95"
              >
                <span>Book Clinical Exam</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#clinic-services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-300 dark:bg-white/5 dark:hover:bg-white/10 dark:text-white text-xs font-medium tracking-wide dark:border-white/10 transition-all"
              >
                View Diagnostic Services
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-neutral-200 dark:border-white/10 text-xs">
              <div>
                <span className="font-semibold text-neutral-900 dark:text-white block">OCT 3D Retinal Scans</span>
                <span className="text-neutral-500 text-[11px]">Retina &amp; macular health</span>
              </div>
              <div>
                <span className="font-semibold text-neutral-900 dark:text-white block">No Dilation Drops</span>
                <span className="text-neutral-500 text-[11px]">Comfortable &amp; fast</span>
              </div>
              <div>
                <span className="font-semibold text-neutral-900 dark:text-white block">Insurance Accepted</span>
                <span className="text-neutral-500 text-[11px]">Direct billing available</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Eye Tracking & Acuity Simulator */}
          <div
            ref={rootRef}
            onPointerMove={trackIris}
            onPointerLeave={resetIris}
            className="lg:col-span-6 rounded-3xl bg-white dark:bg-[#0c120f] border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 shadow-xl shadow-black/5 dark:shadow-2xl relative overflow-hidden transition-colors"
          >
            <div className="flex items-center justify-end text-xs mb-4">
              <span className="text-neutral-500 dark:text-neutral-400 text-[11px]">Move cursor to direct gaze</span>
            </div>

            {/* Interactive Eye SVG */}
            <div className="w-full max-w-sm mx-auto mb-6 flex items-center justify-center">
              <svg viewBox="0 0 400 240" className="w-full h-auto drop-shadow-xl" aria-label="Interactive Eye">
                <defs>
                  <clipPath id="clearEyeClip">
                    <path d="M14 120C90 34 310 34 386 120C310 206 90 206 14 120Z" />
                  </clipPath>
                </defs>

                <path d="M14 120C90 34 310 34 386 120C310 206 90 206 14 120Z" fill="#ffffff" />

                <g clipPath="url(#clearEyeClip)">
                  <g ref={irisRef} className="transition-transform duration-75 ease-out">
                    <circle cx="200" cy="120" r="66" fill="#059669" />
                    <circle
                      cx="200"
                      cy="120"
                      r="52"
                      fill="none"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="1.5"
                      strokeDasharray="4 7"
                    />
                    <circle cx="200" cy="120" r="28" fill="#030706" />
                    <circle cx="184" cy="102" r="10" fill="rgba(255,255,255,0.95)" />
                    <circle cx="219" cy="137" r="5" fill="rgba(255,255,255,0.6)" />
                  </g>
                </g>

                <path
                  d="M14 120C90 34 310 34 386 120C310 206 90 206 14 120Z"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Visual Acuity Snellen Chart Simulation with slider */}
            <div className="bg-[#f8faf9] dark:bg-[#070908] border border-neutral-200 dark:border-white/5 rounded-2xl p-5 transition-colors">
              <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 mb-3">
                <span className="font-semibold text-neutral-900 dark:text-white uppercase tracking-wider text-[11px]">
                  Visual Refraction Acuity Test
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 font-mono text-xs font-semibold">
                  {clarity > 80 ? "20/20 (Corrected)" : clarity > 45 ? "20/40" : "20/100 (Uncorrected)"}
                </span>
              </div>

              {/* Snellen Letters with dynamic blur filter */}
              <div
                style={{ filter: `blur(${blurPx.toFixed(2)}px)` }}
                className="py-4 text-center select-none font-mono tracking-widest transition-all duration-100"
              >
                {SNELLEN.map((row, i) => (
                  <div
                    key={i}
                    className={`font-bold ${
                      i === 0
                        ? "text-3xl mb-1 text-emerald-600 dark:text-emerald-400"
                        : i === 1
                        ? "text-xl mb-1 text-neutral-900 dark:text-neutral-200"
                        : i === 2
                        ? "text-sm mb-1 text-neutral-700 dark:text-neutral-300"
                        : i === 3
                        ? "text-xs mb-1 text-neutral-500 dark:text-neutral-400"
                        : "text-[10px] text-neutral-400 dark:text-neutral-500"
                    }`}
                  >
                    {row}
                  </div>
                ))}
              </div>

              {/* Interactive Clarity Slider */}
              <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-white/5">
                <div className="flex justify-between text-[11px] text-neutral-500 dark:text-neutral-400 mb-2">
                  <span>Simulate Astigmatism &amp; Blur</span>
                  <span className="text-neutral-900 dark:text-white font-medium">{clarity}% Precision</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={clarity}
                  onChange={(e) => setClarity(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                  aria-label="Adjust visual clarity"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
