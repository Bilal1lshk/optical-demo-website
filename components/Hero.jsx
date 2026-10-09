"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, ShieldCheck, Clock } from "lucide-react";
import Hero3DCanvas from "./Hero3DCanvas";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-[#f8faf9] dark:bg-[#0a0c0b] transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Clear, readable headline and value prop */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-neutral-900 dark:text-white leading-tight mb-6 font-sans">
              Precision eyewear crafted for{" "}
              <span className="font-serif italic font-normal text-emerald-600 dark:text-emerald-400">
                how you see.
              </span>
            </h1>

            {/* Concise, readable subtext */}
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed max-w-lg mb-8">
              20-minute digital eye tests, handcrafted titanium frames, and
              custom prescription lenses cut in-house the same day.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href="#book"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500 text-white dark:text-[#0a0c0b] text-xs font-bold uppercase tracking-wider hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-colors shadow-sm"
              >
                <span>Book Eye Test</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#collection"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-300 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-white text-xs font-medium tracking-wide dark:border-neutral-800 transition-colors"
              >
                Browse Frames
              </a>
            </div>

            {/* 3 Clear Trust Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-neutral-200 dark:border-neutral-800">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center shrink-0">
                  <Star className="w-4 h-4 text-emerald-600 dark:text-emerald-400 fill-emerald-600 dark:fill-emerald-400" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-neutral-900 dark:text-white">4.9 / 5.0</div>
                  <div className="text-[11px] text-neutral-500 dark:text-neutral-400">2,300+ Reviews</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-neutral-900 dark:text-white">2-Year Warranty</div>
                  <div className="text-[11px] text-neutral-500 dark:text-neutral-400">On Every Frame</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-neutral-900 dark:text-white">Same-Day Lenses</div>
                  <div className="text-[11px] text-neutral-500 dark:text-neutral-400">Cut In-House</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Eyewear Viewer (No gradient backgrounds) */}
          <div className="lg:col-span-6">
            <Hero3DCanvas />
          </div>
        </div>
      </div>
    </section>
  );
}
