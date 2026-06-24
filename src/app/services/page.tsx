"use client";

import { SERVICES, BRAND } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ChevronRight, Phone, MessageSquare, Utensils } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-zinc-50/50 pb-20">
      {/* HEADER */}
      <section className="bg-zinc-950 text-white py-10 md:py-16 text-center">
        <div className="container-max mx-auto px-4 md:px-8 space-y-3">
          <span className="section-label text-[#ff2a13]">Tastia Ambiance</span>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight" style={{ fontFamily: "Josefin Sans, sans-serif", color: "#d4d4d8" }}>
            Our Premium Services
          </h1>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto font-light" style={{ fontFamily: "Poppins, sans-serif" }}>
            Explore the different dining, catering, and event formats we support. Excellence is our standard.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="container-max mx-auto px-4 md:px-8 py-12 md:py-20 space-y-20 md:space-y-32">
        {SERVICES.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center scroll-mt-24 mt-10 md:mt-16 ${isEven ? "" : "lg:flex-row-reverse"
                }`}
            >
              {/* Image side */}
              <div className={`lg:col-span-5 relative h-72 sm:h-96 rounded-3xl overflow-hidden shadow-md ${isEven ? "lg:order-1" : "lg:order-2"
                }`}>
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>

              {/* Content side */}
              <div className={`lg:col-span-7 space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"
                }`}>
                <div className="space-y-2">
                  <div className="h-10 w-10 rounded-xl bg-[#b52026]/10 text-[#b52026] flex items-center justify-center text-lg font-bold">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-zinc-900" style={{ fontFamily: "Josefin Sans, sans-serif" }}>
                    {service.name}
                  </h2>
                </div>

                <p className="text-sm text-zinc-600 leading-relaxed font-light" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {service.longDescription}
                </p>

                {/* Features Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-zinc-700" style={{ fontFamily: "Poppins, sans-serif" }}>
                      <CheckCircle2 size={14} className="text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    href={service.cta.href}
                    className="btn btn-primary py-2.5 px-6 text-xs flex items-center gap-1.5 cursor-pointer font-bold"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {service.cta.label}
                    <ChevronRight size={12} />
                  </Link>
                </div>
              </div>

            </motion.div>
          );
        })}
      </section>
    </div>
  );
}
