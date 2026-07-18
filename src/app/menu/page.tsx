"use client";

import Image from "next/image";

export default function Menu() {
  return (
    <div className="min-h-screen bg-zinc-50/50 pb-20">
      {/* HERO BANNER */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center text-white bg-black overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/Dine-In-in-Tastiarestaurant.webp"
            alt="Delicious Tastia Restaurant cuisines"
            fill
            className="object-cover opacity-40 scale-105"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/60" />
        </div>

        {/* Decorative blurs */}
        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#ff2a13]/8 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[#b52026]/8 blur-[120px] pointer-events-none" />

        {/* Hero Content */}
        <div className="container-max mx-auto px-4 md:px-8 relative z-10 text-center space-y-4">
          <span className="inline-block tracking-[0.3em] uppercase text-xs font-bold text-[#ff2a13] bg-[#ff2a13]/10 px-4 py-1.5 rounded-full border border-[#ff2a13]/20" style={{ fontFamily: "Poppins, sans-serif" }}>
            Culinary Artistry
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl uppercase" style={{ fontFamily: "Josefin Sans, sans-serif", color: "#d4d4d8" }}>
            Our Menu
          </h1>
          <p className="text-zinc-300 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed" style={{ fontFamily: "Poppins, sans-serif" }}>
            Explore our rich collection of local delicacies, continentals, and premium bakery items.
          </p>
        </div>
      </section>

      {/* IFRAME CONTAINER */}
      <section className="container-max mx-auto px-4 md:px-8 py-12 md:py-16 h-full mt-32 overflow-auto">
        <div>
          <iframe
            src="https://amenaa.odobba.com/api/v1/public/menu/55ce433ae481a77ed5d6d0609f4a8996/embed"
            style={{ width: "100%", minHeight: "900px", border: "none" }}
            title="Menu"
            className="w-full rounded-2xl h-full"
          />
        </div>
      </section>
    </div>
  );
}
