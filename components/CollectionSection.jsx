"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info, ArrowUpRight } from "lucide-react";
import FrameModal from "./FrameModal";
import TextAnimate from "./magicui/text-animate";

const FILTERS = [
  { id: "all", label: "All Frames" },
  { id: "optical", label: "Optical" },
  { id: "sun", label: "Sunglasses" },
  { id: "titanium", label: "Beta-Titanium" },
  { id: "kids", label: "Junior" },
];

const RAW_PRODUCTS = [
  {
    id: "meridian",
    name: "Meridian Round",
    price: "$145",
    category: "optical",
    tag: "Best seller",
    desc: "Hand-polished Italian acetate · forest moss",
    image: "/images/frames/meridian.jpg",
    swatches: ["#059669", "#27272a", "#94a3b8"],
    frame: "#059669",
    specs: { lens: "48 mm", bridge: "21 mm", temple: "145 mm", weight: "15 g" },
  },
  {
    id: "noctis",
    name: "Noctis Square",
    price: "$165",
    category: "optical",
    tag: "Minimalist",
    desc: "Brushed Japanese titanium · matte graphite",
    image: "/images/frames/noctis.jpg",
    swatches: ["#27272a", "#64748b", "#059669"],
    frame: "#27272a",
    specs: { lens: "52 mm", bridge: "18 mm", temple: "145 mm", weight: "12 g" },
  },
  {
    id: "solstice",
    name: "Solstice Aviator",
    price: "$185",
    category: "sun",
    tag: "Polarised",
    desc: "Featherweight beta-titanium · alpine green",
    image: "/images/frames/solstice.jpg",
    swatches: ["#059669", "#94a3b8", "#f8fafc"],
    frame: "#059669",
    specs: { lens: "56 mm", bridge: "15 mm", temple: "140 mm", weight: "13 g" },
  },
  {
    id: "verite",
    name: "Vérité Cat-Eye",
    price: "$175",
    category: "sun",
    tag: "Italian Acetate",
    desc: "Mazzucchelli acetate · jade shadow",
    image: "/images/frames/verite.jpg",
    swatches: ["#047857", "#27272a", "#a7f3d0"],
    frame: "#047857",
    specs: { lens: "51 mm", bridge: "19 mm", temple: "142 mm", weight: "17 g" },
  },
  {
    id: "koda",
    name: "Kōda Sport Shield",
    price: "$210",
    category: "sun",
    tag: "Photochromic",
    desc: "Composite frame · forest carbon tint",
    image: "/images/frames/koda.jpg",
    swatches: ["#064e3b", "#1e293b", "#10b981"],
    frame: "#064e3b",
    specs: { lens: "64 mm", bridge: "14 mm", temple: "135 mm", weight: "18 g" },
  },
  {
    id: "halo",
    name: "Halo Junior",
    price: "$95",
    category: "kids",
    tag: "Flexible",
    desc: "Hypoallergenic memory polymer · mint pine",
    image: "/images/frames/halo.jpg",
    swatches: ["#10b981", "#64748b", "#f8fafc"],
    frame: "#10b981",
    specs: { lens: "44 mm", bridge: "16 mm", temple: "128 mm", weight: "9 g" },
  },
  {
    id: "auric",
    name: "Auric Pantos",
    price: "$195",
    category: "titanium",
    tag: "Pure Titanium",
    desc: "Ultralight titanium · satin emerald",
    image: "/images/frames/auric.jpg",
    swatches: ["#059669", "#94a3b8", "#f8fafc"],
    frame: "#059669",
    specs: { lens: "47 mm", bridge: "21 mm", temple: "145 mm", weight: "11 g" },
  },
  {
    id: "elysian",
    name: "Elysian Geometric",
    price: "$225",
    category: "titanium",
    tag: "Architectural",
    desc: "Octagonal milled titanium · satin palladium",
    image: "/images/frames/elysian.jpg",
    swatches: ["#94a3b8", "#059669", "#27272a"],
    frame: "#94a3b8",
    specs: { lens: "49 mm", bridge: "20 mm", temple: "145 mm", weight: "12.5 g" },
  },
];

export default function CollectionSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filtered = RAW_PRODUCTS.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "titanium") return p.category === "titanium" || p.desc.includes("titanium");
    return p.category === activeFilter;
  });

  return (
    <section id="collection" className="py-24 md:py-32 relative bg-[#f8faf9] dark:bg-[#090b0a] transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 dark:text-white font-sans tracking-tight">
              Hand-finished frames designed for{" "}
              <span className="font-serif italic text-emerald-600 dark:text-emerald-400">comfort.</span>
            </h2>
          </div>

          <TextAnimate
            animation="fadeIn"
            by="word"
            startOnView
            once
            duration={0.6}
            className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed"
          >
            Every silhouette is engineered with calibrated weight balance, Japanese rivet hinges, and hypoallergenic skin contact points.
          </TextAnimate>
        </motion.div>

        {/* Filter Pills with Framer Motion spring indicator */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar"
        >
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className="relative px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors shrink-0 focus:outline-none"
            >
              {activeFilter === f.id && (
                <motion.div
                  layoutId="activeFilterPill"
                  className="absolute inset-0 rounded-full bg-emerald-500/10 border border-emerald-500/30"
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                />
              )}
              <span className={activeFilter === f.id ? "text-emerald-700 dark:text-emerald-300 font-semibold relative z-10" : "relative z-10"}>
                {f.label}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Eyewear Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl bg-white dark:bg-[#0c120f] border border-neutral-200 dark:border-white/10 hover:border-emerald-500/40 p-5 flex flex-col justify-between transition-colors duration-300 shadow-md shadow-black/5 dark:shadow-none hover:shadow-xl hover:shadow-emerald-500/5 cursor-pointer"
              >
                {/* Card Top Action */}
                <div className="flex items-center justify-end mb-2">
                  <motion.button
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(product);
                    }}
                    className="w-7 h-7 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-white/5 dark:hover:bg-white/15 border border-neutral-200 dark:border-white/5 flex items-center justify-center text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    title="Inspect frame measurements"
                  >
                    <Info className="w-3.5 h-3.5" />
                  </motion.button>
                </div>

                {/* Real Eyewear Photo Preview with smooth zoom */}
                <div
                  onClick={() => setSelectedProduct(product)}
                  className="w-full h-44 rounded-2xl overflow-hidden bg-[#f1f5f3] dark:bg-[#070a08] border border-neutral-200 dark:border-white/5 flex items-center justify-center cursor-pointer my-2 relative group-hover:border-emerald-500/30 transition-colors duration-300"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                </div>

                {/* Frame Details */}
                <div className="pt-4 border-t border-neutral-200 dark:border-white/5">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-base font-medium text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                      {product.name}
                    </h3>
                    <span className="text-base font-serif text-emerald-600 dark:text-emerald-400 font-semibold">
                      {product.price}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-500 dark:text-neutral-400 font-serif italic mb-4 line-clamp-1">
                    {product.desc}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-neutral-500 dark:text-neutral-400 font-medium">
                      {product.specs.lens} · {product.specs.weight}
                    </span>

                    {/* Quick specs trigger */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedProduct(product)}
                      className="text-[11px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-300 flex items-center gap-1 font-medium transition-colors"
                    >
                      <span>Specs</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Frame Detailed Specifications Modal */}
      <FrameModal
        frame={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
