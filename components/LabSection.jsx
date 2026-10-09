"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scan, Scissors, Sliders, Check, ArrowRight } from "lucide-react";

const STEPS = [
  {
    num: "01",
    title: "Digital Eye Examination",
    subtitle: "Retinal Scan · 20 Minutes",
    icon: Scan,
    desc: "A twenty-minute non-invasive digital exam covering high-definition retinal imaging and digital prescription mapping.",
    details: [
      "No dilation drops required",
      "Digital prescription sent straight to your phone",
      "Conducted by licensed optometrists",
    ],
  },
  {
    num: "02",
    title: "In-House Precision Edging",
    subtitle: "Surfaced On-Site · Same Day",
    icon: Scissors,
    desc: "Our on-site optical lab surfaces, edges, and polishes your lenses the same day you visit.",
    details: [
      "Diamond-wheel precision robotic cutting",
      "Hand-inspected under polarized light",
      "Anti-glare and scratch coating included",
    ],
  },
  {
    num: "03",
    title: "Custom Frame Fitting",
    subtitle: "Ergonomic Calibration · Lifetime Care",
    icon: Sliders,
    desc: "We calibrate temple curves and bridge nose pads directly to your facial structure for a pinch-free fit.",
    details: [
      "Tailored to your nose bridge and ears",
      "Free lifetime adjustments and fit check",
      "Complimentary ultrasonic cleaning anytime",
    ],
  },
];

export default function LabSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="the-craft" className="py-24 md:py-32 relative bg-[#f1f5f3] dark:bg-[#070908] border-t border-neutral-200 dark:border-white/5 transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 dark:text-white font-sans tracking-tight mb-4">
            From eye exam to finished pair in a{" "}
            <span className="font-serif italic text-emerald-600 dark:text-emerald-400">single visit.</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
            No weeks of waiting. Our master opticians pair Old-World artisan hand-finishing
            with cutting-edge digital surface robotics.
          </p>
        </motion.div>

        {/* Step Selector Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
        >
          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            const isSelected = activeStep === idx;
            return (
              <motion.button
                key={s.num}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveStep(idx)}
                className={`relative p-6 rounded-3xl text-left border transition-all duration-300 focus:outline-none ${
                  isSelected
                    ? "bg-white dark:bg-[#0e1612] border-emerald-500/50 dark:border-emerald-500/40 shadow-xl shadow-emerald-500/5"
                    : "bg-white/60 dark:bg-[#0b0f0d] border-neutral-200 dark:border-white/5 hover:border-neutral-300 dark:hover:border-white/10"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeLabStepIndicator"
                    className="absolute top-4 right-4 w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-2xl font-light text-emerald-600 dark:text-emerald-400">
                    {s.num}
                  </span>
                  <Icon
                    className={`w-5 h-5 ${
                      isSelected ? "text-emerald-600 dark:text-emerald-400" : "text-neutral-400 dark:text-neutral-500"
                    }`}
                  />
                </div>
                <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-1">{s.title}</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 font-serif italic">
                  {s.subtitle}
                </p>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Active Step Details Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="rounded-3xl bg-white dark:bg-[#0c120f] border border-neutral-200 dark:border-white/10 p-6 sm:p-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 shadow-xl shadow-black/5 dark:shadow-none transition-colors"
          >
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-600 dark:text-emerald-400 block mb-2 font-mono">
                Step {STEPS[activeStep].num} · Detailed Process
              </span>
              <h4 className="text-2xl font-light text-neutral-900 dark:text-white mb-3">
                {STEPS[activeStep].title}
              </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                {STEPS[activeStep].desc}
              </p>

              <div className="space-y-2.5">
                {STEPS[activeStep].details.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs text-neutral-700 dark:text-neutral-300">
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <motion.a
                href="#book"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500 text-white dark:text-[#090b0a] text-xs font-bold uppercase tracking-wider hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-all shadow-sm"
              >
                <span>Book 20-Min Exam</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
