"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, ArrowRight } from "lucide-react";

const FACE_SHAPES = [
  {
    id: "oval",
    name: "Oval Face",
    subtitle: "Harmonious & balanced",
    desc: "Naturally balanced proportions with high cheekbones and a tapered jaw.",
    recommendation: "Geometric Squares, Crown Pantos & Aviators",
    advice: "Most frame shapes suit oval faces. Square and aviator frames offer great natural balance.",
    bestStyles: ["Noctis Square", "Auric Pantos", "Solstice Aviator"],
    ratio: "Balanced Proportions",
  },
  {
    id: "round",
    name: "Round Face",
    subtitle: "Soft curves & full cheeks",
    desc: "Soft contours with equal width and length and a gently curved chin.",
    recommendation: "Rectangular, Angular & Sharp Geometric Frames",
    advice: "Angular frames with clean lines add structure and complement soft features.",
    bestStyles: ["Noctis Square", "Elysian Geometric"],
    ratio: "Equal Width & Length",
  },
  {
    id: "square",
    name: "Square Face",
    subtitle: "Defined jaw & broad forehead",
    desc: "Strong horizontal jawline with a broad forehead and straight cheeks.",
    recommendation: "Round, Oval & Teardrop Silhouettes",
    advice: "Curved and round silhouettes soften bold jawlines and add gentle balance.",
    bestStyles: ["Meridian Round", "Solstice Aviator", "Auric Pantos"],
    ratio: "Strong Angular Jawline",
  },
  {
    id: "heart",
    name: "Heart Face",
    subtitle: "Wide brow & tapered chin",
    desc: "Broad forehead tapering down smoothly to a slender chin.",
    recommendation: "Cat-Eye, Delicate Wire & Bottom-Heavy Frames",
    advice: "Light metal frames or subtle cat-eyes balance a wider brow and slender chin.",
    bestStyles: ["Vérité Cat-Eye", "Meridian Round"],
    ratio: "Wide Brow, Slender Chin",
  },
];

export default function FaceShapeGuide() {
  const [selectedShapeId, setSelectedShapeId] = useState("oval");

  const current = FACE_SHAPES.find((s) => s.id === selectedShapeId) || FACE_SHAPES[0];

  return (
    <section id="face-guide" className="py-24 md:py-32 relative bg-[#f8faf9] dark:bg-[#090b0a] transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 dark:text-white font-sans tracking-tight">
              Find frames that match{" "}
              <span className="font-serif italic text-emerald-600 dark:text-emerald-400">
                your face shape.
              </span>
            </h2>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed">
            Quick recommendations based on your facial structure and bridge fit.
          </p>
        </div>

        {/* Face Shape Picker Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {FACE_SHAPES.map((shape) => {
            const isSelected = selectedShapeId === shape.id;
            return (
              <button
                key={shape.id}
                onClick={() => setSelectedShapeId(shape.id)}
                className={`relative p-5 rounded-2xl text-left border transition-all duration-200 focus:outline-none ${
                  isSelected
                    ? "bg-white dark:bg-[#0e1612] border-emerald-500/50 dark:border-emerald-500/40 shadow-lg shadow-emerald-500/5"
                    : "bg-white/60 dark:bg-[#0b0f0d] border-neutral-200 dark:border-white/5 hover:border-neutral-300 dark:hover:border-white/15"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeFaceShapeIndicator"
                    className="absolute top-3 right-3 w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
                <div className="text-xs uppercase tracking-wider text-neutral-800 dark:text-neutral-300 font-medium mb-1">
                  {shape.name}
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 font-serif italic">
                  {shape.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Card with Framer Motion */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="rounded-3xl bg-white dark:bg-[#0c120f] border border-neutral-200 dark:border-white/10 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl shadow-black/5 dark:shadow-none transition-colors"
          >
            <div className="lg:col-span-7">
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-2 font-medium">
                {current.ratio}
              </p>
              <h3 className="text-2xl sm:text-3xl font-light text-neutral-900 dark:text-white font-sans mb-3">
                {current.recommendation}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                {current.advice}
              </p>

              <div className="space-y-2 border-t border-neutral-200 dark:border-white/5 pt-6">
                <span className="text-[11px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold block mb-2">
                  Recommended Lumina Models:
                </span>
                <div className="flex flex-wrap gap-2">
                  {current.bestStyles.map((model) => (
                    <a
                      key={model}
                      href="#collection"
                      className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-200 dark:bg-white/5 dark:hover:bg-emerald-500/10 dark:hover:border-emerald-500/30 dark:border-white/10 dark:text-white transition-colors"
                    >
                      {model}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-neutral-50 dark:bg-white/[0.02] border border-neutral-200 dark:border-white/5 rounded-2xl p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4 text-emerald-600 dark:text-emerald-400">
                <Eye className="w-6 h-6" />
              </div>
              <h4 className="text-base font-medium text-neutral-900 dark:text-white mb-1">
                Complimentary In-Store Styling
              </h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-6">
                Book a 20-minute digital face scan and 1-on-1 styling consultation with our master opticians.
              </p>
              <a
                href="#book"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 text-white dark:text-[#090b0a] text-xs font-bold uppercase tracking-wider hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-all shadow-sm"
              >
                <span>Reserve Styling Session</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
