"use client";

import { GALLERY_IMAGES } from "@/lib/data";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = ["all", "Food", "Restaurant", "Events", "Bakery"];

  const filteredImages = GALLERY_IMAGES.filter((img) => {
    return activeFilter === "all" || img.category === activeFilter;
  });

  return (
    <div className="min-h-screen bg-zinc-50/50 pb-20">
      {/* HEADER */}
      <section className="bg-zinc-950 text-white py-10 md:py-16 text-center">
        <div className="container-max mx-auto px-4 md:px-8 space-y-3">
          <span className="section-label text-[#ff2a13]">Visual Showcase</span>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight" style={{ fontFamily: "Josefin Sans, sans-serif" }}>
            Tastia Photo Gallery
          </h1>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto font-light" style={{ fontFamily: "Poppins, sans-serif" }}>
            Explore photos of our delicious dishes, luxurious restaurant interiors, VIP lounges, and catered outdoor events.
          </p>
        </div>
      </section>

      {/* FILTER CONTROLS */}
      <section className="bg-white border-b py-4 sticky top-[70px] z-20 shadow-sm">
        <div className="container-max mx-auto px-4 md:px-8 flex items-center justify-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 text-xs font-bold rounded-full uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === filter
                  ? "bg-[#b52026] text-white"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200/50"
              }`}
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {filter === "all" ? "All Photos" : filter}
            </button>
          ))}
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="container-max mx-auto px-4 md:px-8 py-12 md:py-20">
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-sm group bg-zinc-100"
              >
                <Image
                  src={img.url}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                  <div className="space-y-1">
                    <p className="text-[9px] text-[#ff2a13] font-bold uppercase tracking-wider" style={{ fontFamily: "Poppins, sans-serif" }}>
                      {img.category}
                    </p>
                    <p className="text-xs font-bold text-white leading-snug" style={{ fontFamily: "Josefin Sans, sans-serif" }}>
                      {img.alt}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}
