"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f1f5f3] dark:bg-[#050706] border-t border-neutral-200 dark:border-white/5 pt-16 pb-12 text-xs text-neutral-600 dark:text-neutral-400 transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-neutral-200 dark:border-white/5">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <svg
                  viewBox="0 0 40 20"
                  className="w-4 h-2.5 text-emerald-600 dark:text-emerald-400"
                  fill="none"
                >
                  <circle cx="11" cy="11" r="7.5" stroke="currentColor" strokeWidth="2" />
                  <circle cx="29" cy="11" r="7.5" stroke="currentColor" strokeWidth="2" />
                  <path d="M18.5 10c1-1.6 2.9-1.6 4 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-sm font-semibold tracking-widest text-neutral-900 dark:text-white uppercase font-sans">
                LUMINA <span className="font-serif italic font-normal text-emerald-600 dark:text-emerald-400">OPTICAL</span>
              </span>
            </div>

            <p className="text-xs text-neutral-600 dark:text-neutral-400 max-w-sm leading-relaxed">
              Independent opticians and bespoke frame makers. Handcrafting titanium
              and Italian acetate spectacles with in-house precision surfacing since 1998.
            </p>

            <div className="text-[11px] text-neutral-500 font-mono">
              24 Kingsley Road, Westfield · Licensed General Optical Council #3910
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] uppercase tracking-wider text-neutral-900 dark:text-white font-semibold mb-4">
              Collection
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#collection" className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors">
                  Titanium Silhouettes
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors">
                  Acetate Optical
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors">
                  Polarised Sunglasses
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors">
                  Junior Frames
                </a>
              </li>
            </ul>
          </div>

          {/* Eye Care & Lab */}
          <div>
            <h4 className="text-[11px] uppercase tracking-wider text-neutral-900 dark:text-white font-semibold mb-4">
              Diagnostic &amp; Lab
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#the-craft" className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors">
                  20-Min Digital Exam
                </a>
              </li>
              <li>
                <a href="#lens-lab" className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors">
                  BlueShield 420 Technology
                </a>
              </li>
              <li>
                <a href="#lens-lab" className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors">
                  Transitions Gen 9
                </a>
              </li>
              <li>
                <a href="#clinic" className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors">
                  Clinical Vision Diagnostics
                </a>
              </li>
            </ul>
          </div>

          {/* Visit & Connect */}
          <div>
            <h4 className="text-[11px] uppercase tracking-wider text-neutral-900 dark:text-white font-semibold mb-4">
              Boutique
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#visit" className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors">
                  Studio Hours
                </a>
              </li>
              <li>
                <a href="#book" className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors">
                  Book Appointment
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/15550123456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors"
                >
                  Direct WhatsApp Line
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors">
                  Client Reviews
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} Lumina Optical Boutique. Designed with Next.js,
            Tailwind CSS &amp; Framer Motion.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-800 dark:hover:text-neutral-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-neutral-800 dark:hover:text-neutral-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-neutral-800 dark:hover:text-neutral-300 cursor-pointer">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
