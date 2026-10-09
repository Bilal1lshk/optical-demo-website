"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Navigation, CheckCircle2 } from "lucide-react";

export default function StoreVisitSection() {
  const mapsUrl = "https://maps.google.com/?q=24+Kingsley+Road+Westfield";

  return (
    <section id="visit" className="py-24 md:py-32 relative bg-[#f8faf9] dark:bg-[#090b0a] transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white dark:bg-[#0c120f] border border-neutral-200 dark:border-neutral-800 p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative overflow-hidden shadow-xl shadow-black/5 dark:shadow-black/40">
          {/* Left Column: Hours & Boutique Details */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 dark:text-white font-sans tracking-tight mb-4">
              Experience the frames in person at our{" "}
              <span className="font-serif italic text-emerald-600 dark:text-emerald-400">flagship studio.</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8 max-w-xl font-normal">
              Try on over 250 curated frames in person. Walk-ins are always welcomed for frame viewings, adjustments, and cleanings.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-neutral-200 dark:border-white/10">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-600 dark:text-emerald-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold mb-1">
                    Boutique Location
                  </h4>
                  <p className="text-sm font-medium text-neutral-900 dark:text-white">
                    24 Kingsley Road, Westfield
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Complimentary client valet parking available
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-600 dark:text-emerald-400">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold mb-1">
                    Store Hours
                  </h4>
                  <p className="text-sm font-medium text-neutral-900 dark:text-white">
                    Mon – Sat: 09:00 – 19:00
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Sunday: 11:00 – 17:00 (By Appointment)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direction Card & Quick Contact */}
          <div className="lg:col-span-5 bg-neutral-50 dark:bg-white/[0.02] border border-neutral-200 dark:border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold mb-3 font-mono">
                Lab Diagnostic Suite
              </div>
              <h3 className="text-xl font-light text-neutral-900 dark:text-white mb-2">
                Same-Day Lens Edging Counter
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                Need single-vision or high-index lenses replaced today? Drop off your frames
                before 2:00 PM and collect them before closing.
              </p>

              <div className="space-y-2 text-xs text-neutral-700 dark:text-neutral-300 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Free espresso &amp; sparkling mineral water bar</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Lifetime ultrasonic cleaning for all visitors</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-white/10 dark:hover:bg-white/15 text-neutral-800 dark:text-white text-xs font-semibold uppercase tracking-wider transition-all border border-neutral-200 dark:border-white/10"
              >
                <Navigation className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Get Directions</span>
              </a>

              <a
                href="#book"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 dark:hover:bg-emerald-400 text-white dark:text-[#090b0a] text-xs font-bold uppercase tracking-wider transition-all"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
