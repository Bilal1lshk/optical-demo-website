"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton({
  phone = "15550123456",
  message = "Hi Lumina Optical! I'd like to book an eye exam or enquire about frames.",
}) {
  const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-40">
      <motion.a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/20 focus:outline-none transition-colors"
      >
        <MessageCircle className="w-6 h-6 fill-white text-transparent relative z-10" />

        {/* Hover Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-neutral-900 text-white dark:bg-[#090b0a] dark:text-white text-[11px] font-medium tracking-wide border border-neutral-700 dark:border-emerald-500/20 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-lg">
          Chat with an Optician
        </span>
      </motion.a>
    </aside>
  );
}
