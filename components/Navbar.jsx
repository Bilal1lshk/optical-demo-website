"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Exactly 5 Navlinks as requested
  const navLinks = [
    { label: "Collection", href: "#collection" },
    { label: "Clinic & Exams", href: "#clinic" },
    { label: "Lens Lab", href: "#lens-lab" },
    { label: "Reviews", href: "#reviews" },
    { label: "Visit", href: "#visit" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 dark:bg-[#090b0a]/90 backdrop-blur-xl border-b border-neutral-200 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/30 py-3"
            : "bg-transparent border-b border-neutral-200/40 dark:border-white/5 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo: Lumina Optical & Clinic */}
            <Link
              href="/"
              className="flex items-center gap-3 group text-neutral-900 dark:text-white tracking-tight"
            >
              <div className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center transition-colors group-hover:border-emerald-400/50">
                <svg
                  viewBox="0 0 40 20"
                  className="w-5 h-3 text-emerald-600 dark:text-emerald-400 transition-transform duration-300 group-hover:scale-105"
                  fill="none"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="7.5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="29"
                    cy="11"
                    r="7.5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M18.5 10c1-1.6 2.9-1.6 4 0"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-semibold tracking-widest text-neutral-900 dark:text-white leading-none font-sans uppercase">
                  LUMINA
                </span>
                <span className="text-[10px] tracking-wider text-emerald-600 dark:text-emerald-400 font-mono mt-0.5">
                  Eyewear Boutique &amp; Clinic
                </span>
              </div>
            </Link>

            {/* Exactly 5 Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs uppercase tracking-wider text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200 relative group font-medium"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-emerald-500 transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Direct Actions: Theme Toggle + Book */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle variant="desktop" />

              <motion.a
                href="#book"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500 text-white dark:text-[#090b0a] hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-colors shadow-sm shadow-emerald-500/20"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
              </motion.a>
            </div>

            {/* Mobile Action Buttons */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle variant="icon" />

              <a
                href="#book"
                className="px-3 py-1.5 rounded-full text-[11px] font-semibold bg-emerald-500 text-white dark:text-[#090b0a]"
              >
                Book
              </a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-200 dark:bg-white/5 dark:hover:bg-white/10 dark:text-white dark:border-white/10 flex items-center justify-center transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer with Framer Motion */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-0 top-[65px] z-40 bg-white/98 dark:bg-[#090b0a]/98 backdrop-blur-2xl border-b border-neutral-200 dark:border-white/10 p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3 border-b border-neutral-200 dark:border-white/10 pb-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center justify-between py-2 text-sm uppercase tracking-wider text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500" />
                  </motion.a>
                ))}
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <ThemeToggle variant="mobile" />

                <motion.a
                  href="#book"
                  onClick={() => setMobileOpen(false)}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-emerald-500 text-white dark:text-[#090b0a]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Eye Exam or Styling</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
