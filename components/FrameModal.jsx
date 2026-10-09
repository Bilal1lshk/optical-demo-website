"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Check, MessageCircle } from "lucide-react";

export default function FrameModal({ frame, onClose }) {
  if (!frame) return null;

  const waText = encodeURIComponent(
    `Hi Lumina Optical! I'm interested in trying on the ${frame.name} (${frame.price}) in-store. Do you have it in stock?`
  );
  const waUrl = `https://wa.me/15550123456?text=${waText}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 dark:bg-black/85 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-white dark:bg-[#0d1410] border border-neutral-200 dark:border-emerald-500/20 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden transition-colors"
        >
          {/* Close button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-white/5 dark:hover:bg-white/10 border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </motion.button>

          <div className="flex flex-col gap-6">
            {/* Title & Price */}
            <div>
              <div className="flex items-baseline justify-between">
                <h3 className="text-2xl sm:text-3xl font-light text-neutral-900 dark:text-white font-sans">
                  {frame.name}
                </h3>
                <span className="text-2xl font-serif text-emerald-600 dark:text-emerald-400 font-semibold">{frame.price}</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 font-serif italic">
                {frame.desc}
              </p>
            </div>

            {/* Frame Real Image Preview */}
            <div className="w-full h-52 sm:h-60 rounded-2xl overflow-hidden bg-[#f1f5f3] dark:bg-[#070a08] border border-neutral-200 dark:border-white/5 flex items-center justify-center relative">
              {frame.image ? (
                <img
                  src={frame.image}
                  alt={frame.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-neutral-500 text-sm">Frame Preview</div>
              )}
            </div>

            {/* Specifications Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/5 rounded-2xl p-3 text-center">
                <span className="text-[10px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block mb-1">
                  Lens Width
                </span>
                <span className="text-sm font-semibold text-neutral-900 dark:text-white">
                  {frame.specs?.lens || "50 mm"}
                </span>
              </div>
              <div className="bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/5 rounded-2xl p-3 text-center">
                <span className="text-[10px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block mb-1">
                  Bridge
                </span>
                <span className="text-sm font-semibold text-neutral-900 dark:text-white">
                  {frame.specs?.bridge || "19 mm"}
                </span>
              </div>
              <div className="bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/5 rounded-2xl p-3 text-center">
                <span className="text-[10px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block mb-1">
                  Temple Length
                </span>
                <span className="text-sm font-semibold text-neutral-900 dark:text-white">
                  {frame.specs?.temple || "145 mm"}
                </span>
              </div>
              <div className="bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/5 rounded-2xl p-3 text-center">
                <span className="text-[10px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block mb-1">
                  Net Weight
                </span>
                <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                  {frame.specs?.weight || "14 g"}
                </span>
              </div>
            </div>

            {/* Feature Bullets */}
            <div className="space-y-2 border-y border-neutral-200 dark:border-white/10 py-4 text-xs text-neutral-700 dark:text-neutral-300">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Custom prescription cut in our private in-house lab</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Anti-reflective, hydrophobic &amp; scratch-resistant coating included</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Complimentary face-contour fitting and lifetime adjustments</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <motion.a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.18 }}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-emerald-500 hover:bg-emerald-600 dark:hover:bg-emerald-400 text-white dark:text-[#090b0a] text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-white dark:text-[#090b0a]" />
                <span>Reserve in Store via WhatsApp</span>
              </motion.a>

              <motion.a
                href="#book"
                onClick={onClose}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.18 }}
                className="flex items-center justify-center py-3.5 px-6 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-white/5 dark:hover:bg-white/10 border border-neutral-200 dark:border-white/10 text-neutral-800 dark:text-white text-xs font-medium tracking-wide transition-colors"
              >
                Book Eye Exam First
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
