"use client";

import { motion } from "framer-motion";
import { Eye, Shield, Baby, Droplets, Clock, Activity, ArrowRight, Check } from "lucide-react";

const CLINIC_SERVICES = [
  {
    icon: Eye,
    title: "Comprehensive Eye Exam",
    duration: "40 min",
    cost: "Covered by most plans",
    desc: "Complete visual acuity test, eye health evaluation, and 3D retinal scan.",
    bullets: ["OCT 3D retinal scan", "Digital prescription sync"],
  },
  {
    icon: Shield,
    title: "Contact Lens Fitting",
    duration: "45 min",
    cost: "Trial lenses included",
    desc: "Custom corneal mapping for daily, astigmatic, or multifocal lenses.",
    bullets: ["Corneal curvature scan", "Complimentary trial pairs"],
  },
  {
    icon: Baby,
    title: "Pediatric Vision Care",
    duration: "35 min",
    cost: "Child-friendly protocol",
    desc: "Gentle eye checks and myopia management designed for children.",
    bullets: ["Non-invasive eye scan", "Myopia control options"],
  },
  {
    icon: Droplets,
    title: "Dry Eye Treatment",
    duration: "30 min",
    cost: "In-clinic therapy",
    desc: "Targeted soothing therapy for screen fatigue and chronic dry eye symptoms.",
    bullets: ["Tear film evaluation", "Therapeutic warm expression"],
  },
  {
    icon: Clock,
    title: "Same-Day Urgent Care",
    duration: "20 min",
    cost: "Priority scheduling",
    desc: "Fast clinical care for sudden eye pain, redness, or foreign particles.",
    bullets: ["Prompt triage evaluation", "Immediate doctor care"],
  },
  {
    icon: Activity,
    title: "Laser Eye Consultation",
    duration: "30 min",
    cost: "Pre-op evaluation",
    desc: "Corneal thickness and wave analysis to see if you qualify for LASIK or PRK.",
    bullets: ["Corneal scan profiling", "Independent candidacy report"],
  },
];

export default function ClinicServicesSection() {
  return (
    <section id="clinic-services" className="py-24 md:py-32 relative bg-[#f8faf9] dark:bg-[#090b0a] border-t border-neutral-200 dark:border-white/5 transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 dark:text-white font-sans tracking-tight mb-4">
            Specialized optometric care by{" "}
            <span className="font-serif italic text-emerald-600 dark:text-emerald-400">licensed doctors.</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
            Every exam is conducted with modern hospital-grade imaging and paired with our bespoke frame studio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLINIC_SERVICES.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="rounded-3xl bg-white dark:bg-[#0c120f] border border-neutral-200 dark:border-white/10 hover:border-emerald-500/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                      {s.duration}
                    </span>
                  </div>

                  <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                    {s.desc}
                  </p>

                  <div className="space-y-2 mb-8 pt-4 border-t border-neutral-200 dark:border-white/5">
                    {s.bullets.map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-200 dark:border-white/5 flex items-center justify-between text-xs">
                  <span className="text-neutral-500 dark:text-neutral-400">{s.cost}</span>
                  <a
                    href="#book"
                    className="inline-flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 uppercase tracking-wider text-[11px]"
                  >
                    <span>Schedule</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
