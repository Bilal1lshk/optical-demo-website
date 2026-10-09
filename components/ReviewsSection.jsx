"use client";

import { motion } from "framer-motion";
import { Star, CheckCircle, Quote } from "lucide-react";

const REVIEWS = [
  {
    quote:
      "Fast 20-minute eye test, no dilation drops, and my prescription lenses were surfaced the same afternoon.",
    author: "Elena Rostova",
    role: "Architectural Designer",
    frame: "Meridian Round · Forest Moss",
    rating: 5,
    verified: true,
  },
  {
    quote:
      "Lightest titanium frames I have ever owned. Fits comfortably all day without pinching or leaving bridge marks.",
    author: "Julian Chen",
    role: "Creative Director",
    frame: "Auric Pantos · Alpine Green",
    rating: 5,
    verified: true,
  },
  {
    quote:
      "The BlueShield lenses eliminated my daily screen fatigue, and the opticians helped find the exact right frame for my face.",
    author: "Dr. Marcus Vance",
    role: "Software Architect",
    frame: "Noctis Square · Matte Graphite",
    rating: 5,
    verified: true,
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 md:py-32 relative bg-[#f1f5f3] dark:bg-[#070908] border-t border-neutral-200 dark:border-white/5 transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 dark:text-white font-sans tracking-tight">
              Crafted for clarity, commended by{" "}
              <span className="font-serif italic text-emerald-600 dark:text-emerald-400">thousands.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center text-emerald-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
              ))}
            </div>
            <span className="text-sm font-semibold text-neutral-900 dark:text-white">4.9 / 5.0</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">· Over 2,300 boutique reviews</span>
          </div>
        </motion.div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev, idx) => (
            <motion.div
              key={rev.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }}
              className="rounded-3xl bg-white dark:bg-[#0c120f] border border-neutral-200 dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-500/30 transition-colors duration-300 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 cursor-default"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-emerald-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-neutral-300 dark:text-white/10" />
                </div>

                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal mb-8 font-serif italic">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-200 dark:border-white/5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-neutral-900 dark:text-white">{rev.author}</span>
                  {rev.verified && (
                    <span className="inline-flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-mono">
                      <CheckCircle className="w-3 h-3" />
                      <span>Verified Client</span>
                    </span>
                  )}
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400">{rev.role}</div>
                <div className="text-[11px] text-emerald-700 dark:text-emerald-400 mt-2 font-mono">
                  {rev.frame}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
