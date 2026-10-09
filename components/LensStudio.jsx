"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Shield, Sun, Laptop, Layers } from "lucide-react";

const LENS_TECH = [
  {
    id: "ar",
    name: "UltraClear AR",
    badge: "Essential",
    icon: Layers,
    headline: "99.8% light transmission without reflections",
    description:
      "Anti-reflective coating eliminates glare, halos, and reflections from screens and headlights.",
    specs: {
      index: "1.67 Hi-Index",
      abbe: "42 (High Clarity)",
      uv: "100% UV400",
      coating: "Hydrophobic + Oleophobic",
    },
    sim: {
      mode: "ar",
      solidBg: "bg-[#091510]",
      activeText: "AR Coated: Pure Crisp Clarity",
      inactiveText: "Raw Glass: Internal Reflections & Glare",
    },
  },
  {
    id: "blue",
    name: "BlueShield 420",
    badge: "Digital Comfort",
    icon: Laptop,
    headline: "Protection for hours in front of screens",
    description:
      "Filters high-energy blue-violet light from monitors and phones to reduce digital eye fatigue.",
    specs: {
      index: "1.60 Featherweight",
      abbe: "40",
      uv: "100% UV420",
      coating: "Anti-Fatigue Filter",
    },
    sim: {
      mode: "blue",
      solidBg: "bg-[#091714]",
      activeText: "BlueShield Filter: Soothing Crisp Contrast",
      inactiveText: "Unfiltered: High-Energy Violet Screen Strain",
    },
  },
  {
    id: "photo",
    name: "Transitions Gen 9",
    badge: "Adaptive",
    icon: Sun,
    headline: "Clear indoors. Dark sunglasses under the sun.",
    description:
      "Reacts quickly to sunlight, shifting smoothly between crystal-clear indoors and dark tint outside.",
    specs: {
      index: "1.67 Ultra-Thin",
      abbe: "38",
      uv: "100% UV400 Indoors & Out",
      coating: "Fast-Fade Molecule",
    },
    sim: {
      mode: "photo",
      solidBg: "bg-[#0d1712]",
      activeText: "Outdoor Mode: 85% Dark Polarized Tint",
      inactiveText: "Indoor Mode: 98% Crystal Clear",
    },
  },
  {
    id: "polar",
    name: "Polarized HD Sun",
    badge: "Outdoor & Driving",
    icon: Shield,
    headline: "Cancels blinding road and water glare",
    description:
      "Filters scattered light reflections from wet roads and water for sharp contrast and eye comfort.",
    specs: {
      index: "Polycarbonate Impact",
      abbe: "32",
      uv: "100% UV400 Polarized",
      coating: "Hard-Coat Scratch Armor",
    },
    sim: {
      mode: "polar",
      solidBg: "bg-[#0a1610]",
      activeText: "Polarized: Surface Glare Eliminated",
      inactiveText: "Unpolarized: Blinding Reflected Glare",
    },
  },
];

export default function LensStudio() {
  const [activeTechId, setActiveTechId] = useState("ar");
  const [isFilterActive, setIsFilterActive] = useState(true);

  const activeTech = LENS_TECH.find((t) => t.id === activeTechId) || LENS_TECH[0];

  return (
    <section id="lens-lab" className="py-24 md:py-32 relative bg-[#f1f5f3] dark:bg-[#070908] border-y border-neutral-200 dark:border-white/5 transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 dark:text-white font-sans tracking-tight mb-4">
            Custom lenses surfaced to{" "}
            <span className="font-serif italic text-emerald-600 dark:text-emerald-400">
              0.01 diopter accuracy.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
            Surfaced in our private laboratory with computer-guided diamond cutters and verified for sharp optical clarity.
          </p>
        </motion.div>

        {/* Interactive Lens Technology Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10"
        >
          {LENS_TECH.map((t) => {
            const Icon = t.icon;
            const isSelected = activeTechId === t.id;
            return (
              <motion.button
                key={t.id}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setActiveTechId(t.id);
                  setIsFilterActive(true);
                }}
                className={`relative p-5 rounded-2xl text-left border transition-all duration-200 focus:outline-none ${
                  isSelected
                    ? "bg-white dark:bg-[#0c1410] border-emerald-500/60 shadow-lg shadow-emerald-500/5"
                    : "bg-white/60 dark:bg-[#0b0f0d] border-neutral-200 dark:border-white/5 hover:border-neutral-300 dark:hover:border-white/15"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeTechIndicator"
                    className="absolute top-3 right-3 w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
                <Icon
                  className={`w-5 h-5 mb-3 transition-colors ${
                    isSelected ? "text-emerald-600 dark:text-emerald-400" : "text-neutral-400 dark:text-neutral-500"
                  }`}
                />
                <div className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-medium mb-1">
                  {t.badge}
                </div>
                <div className="text-sm font-semibold text-neutral-900 dark:text-white">{t.name}</div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Visualizer Simulator & Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white dark:bg-[#0c120f] border border-neutral-200 dark:border-white/10 rounded-3xl p-6 sm:p-10 shadow-xl shadow-black/5 dark:shadow-none transition-colors"
        >
          {/* Left Column: Technology Specs & Explanation */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl font-light text-neutral-900 dark:text-white font-sans mb-3">
                {activeTech.headline}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                {activeTech.description}
              </p>
            </div>

            {/* Micro Specs Grid */}
            <div className="grid grid-cols-2 gap-3 pt-6 border-t border-neutral-200 dark:border-white/5">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-neutral-500 block">
                  Material Index
                </span>
                <span className="text-xs font-semibold text-neutral-900 dark:text-white">
                  {activeTech.specs.index}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-neutral-500 block">
                  Abbe Number
                </span>
                <span className="text-xs font-semibold text-neutral-900 dark:text-white">
                  {activeTech.specs.abbe}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-neutral-500 block">
                  UV Protection
                </span>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  {activeTech.specs.uv}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-neutral-500 block">
                  Surface Coat
                </span>
                <span className="text-xs font-semibold text-neutral-900 dark:text-white">
                  {activeTech.specs.coating}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Optical Simulator */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="w-full relative aspect-[16/10] rounded-2xl overflow-hidden border border-neutral-800 flex flex-col justify-between p-6 shadow-inner bg-[#0e1310]">
              {/* Simulator Scene Background */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  isFilterActive ? "opacity-100" : "opacity-30"
                } ${activeTech.sim.solidBg}`}
              />

              {/* Optical Lens Rim simulation */}
              <div className="relative z-10 flex items-center justify-between text-xs text-neutral-300">
                <span className="text-xs font-medium text-neutral-300">
                  {activeTech.name}
                </span>
                <span className="text-[11px] text-emerald-400 font-mono font-bold">
                  {isFilterActive ? "ENHANCED" : "RAW"}
                </span>
              </div>

              {/* Optical center graphics */}
              <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                <div
                  className={`w-36 h-36 rounded-full border-2 transition-all duration-500 flex items-center justify-center ${
                    isFilterActive
                      ? "border-emerald-400 bg-white/5"
                      : "border-white/20 bg-white/10"
                  }`}
                >
                  <Eye
                    className={`w-10 h-10 transition-colors ${
                      isFilterActive ? "text-emerald-400" : "text-neutral-500"
                    }`}
                  />
                </div>
                <p className="text-xs text-neutral-300 mt-4 text-center">
                  {isFilterActive ? activeTech.sim.activeText : activeTech.sim.inactiveText}
                </p>
              </div>

              {/* Interactive On/Off Switch */}
              <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-xs text-neutral-400">Toggle Lens Effect</span>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setIsFilterActive(!isFilterActive)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                    isFilterActive
                      ? "bg-emerald-500 text-white dark:text-[#090b0a]"
                      : "bg-white/10 text-neutral-300 hover:bg-white/20"
                  }`}
                >
                  {isFilterActive ? "Filter Active" : "Filter Off"}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
