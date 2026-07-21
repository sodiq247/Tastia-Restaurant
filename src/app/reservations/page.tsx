"use client";

<<<<<<< HEAD
import { BRAND } from "@/lib/data";
import Image from "next/image";
import { Clock, User, Phone, Award } from "lucide-react";
=======
import Image from "next/image";
import { BRAND } from "@/lib/data";
import { Clock, User, Award, Phone } from "lucide-react";
>>>>>>> origin/main

export default function ReservationsPage() {
  return (
    <div className="min-h-screen bg-zinc-50/50 pb-20">
<<<<<<< HEAD
      {/* HEADER */}
      <section className="relative bg-zinc-950 text-white py-16 md:py-24 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80"
            alt="Tastia Table Reservation Background"
            fill
            className="object-cover opacity-70 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/40" />
        </div>

        <div className="container-max mx-auto px-4 md:px-8 space-y-3 relative z-10">
          <span className="section-label text-[#ff2a13] bg-zinc-950/70 px-4 py-1 rounded-full border border-[#ff2a13]/30 inline-block backdrop-blur-md">
            Reservation Desk
          </span>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white drop-shadow-md" style={{ fontFamily: "Josefin Sans, sans-serif", color: "#d4d4d8" }}>
            Book A Table
          </h1>
          <p className="text-zinc-200 text-sm md:text-base max-w-xl mx-auto font-light drop-shadow-sm" style={{ fontFamily: "Poppins, sans-serif" }}>
            Secure your table at any of our branches. Experience Tastia's world-class dining, VIP lounge, or garden terrace.
=======
      {/* HERO BANNER */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center text-white bg-black overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/Dinnerware-on-table.webp"
            alt="Elegant table setting at Tastia Restaurant"
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
            Reservation Desk
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#ff2a13]" style={{ fontFamily: "Josefin Sans, sans-serif", color: "#d4d4d8" }}>
            Book A Table
          </h1>
          <p className="text-zinc-300 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed" style={{ fontFamily: "Poppins, sans-serif" }}>
            Secure your table at any of our branches. Experience Tastia&apos;s world-class dining, VIP lounge, or garden terrace.
>>>>>>> origin/main
          </p>
        </div>
      </section>

<<<<<<< HEAD
      {/* MAIN CONTENT AREA */}
      <section className="container-max mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start mt-20">
          {/* Left Column: Embed Reservation Form */}
          <div className="lg:col-span-8 bg-white rounded-3xl border p-4 sm:p-6 md:p-8 shadow-sm flex flex-col items-center justify-center">
            <div className="w-full mx-auto flex justify-center">
              <iframe
                src="https://amenaa.odobba.com/api/v1/public/reservations/GCfjH_Kpv49fddb8dl60tGm5VXEGJGjw/embed"
                style={{
                  width: "100%",
                  height: "600px",
                  border: "0",
                  borderRadius: "14px",
                  margin: "0 auto",
                  display: "block",
                }}
                title="Reserve a table"
              />
            </div>
=======
      <section className="container-max mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-16">
          {/* Left Column: Iframe Form Wrapper */}
          <div className="lg:col-span-8 bg-white rounded-3xl border p-6 md:p-10 shadow-sm flex justify-center w-full">
            <iframe
              src="https://amenaa.odobba.com/api/v1/public/reservations/GCfjH_Kpv49fddb8dl60tGm5VXEGJGjw/embed"
              style={{ width: "100%", maxWidth: "800px", height: "600px", border: 0, borderRadius: "14px" }}
              title="Reserve a table"
            />
>>>>>>> origin/main
          </div>

          {/* Right Column: Sidebar Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#b52026] text-white p-6 rounded-3xl space-y-6 shadow-md relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-white/5 pointer-events-none" />
              <h3 className="text-xl font-bold uppercase tracking-wider border-b border-white/20 pb-3" style={{ fontFamily: "Josefin Sans, sans-serif" }}>
                Reservation Policy
              </h3>
              <ul className="space-y-4 text-xs font-light" style={{ fontFamily: "Poppins, sans-serif" }}>
                <li className="flex items-start gap-2">
                  <Clock size={16} className="flex-shrink-0 mt-0.5" />
<<<<<<< HEAD
                  <span>Table holds for maximum <strong>15 minutes</strong> past booking time. Please call the branch if you are running late.</span>
                </li>
                <li className="flex items-start gap-2">
                  <User size={16} className="flex-shrink-0 mt-0.5" />
                  <span>For parties larger than <strong>20 people</strong>, please contact our group reservations team directly via phone.</span>
=======
                  <span>Table holds for maximum **15 minutes** past booking time. Please call the branch if you are running late.</span>
                </li>
                <li className="flex items-start gap-2">
                  <User size={16} className="flex-shrink-0 mt-0.5" />
                  <span>For parties larger than **20 people**, please contact our group reservations team directly via phone.</span>
>>>>>>> origin/main
                </li>
                <li className="flex items-start gap-2">
                  <Award size={16} className="flex-shrink-0 mt-0.5" />
                  <span>VIP Lounge booking requires a minimum spend policy depending on details. Our manager will call you to confirm.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl border p-6 shadow-sm space-y-4">
              <h4 className="text-sm font-bold text-zinc-800" style={{ fontFamily: "Josefin Sans, sans-serif" }}>Need Instant Assistance?</h4>
              <p className="text-xs text-zinc-500 leading-relaxed" style={{ fontFamily: "Poppins, sans-serif" }}>
                If you need immediate support, booking customization, or have event catering inquiries, chat directly with our guest team.
              </p>
              <a
                href={`tel:${BRAND.phone}`}
<<<<<<< HEAD
                className="flex items-center gap-2 text-xs font-bold text-[#b52026] hover:text-[#ff2a13] transition-colors"
=======
                className="flex items-center gap-2 text-xs font-bold text-zinc-900 hover:text-[#ff2a13] transition-colors"
>>>>>>> origin/main
              >
                <Phone size={14} /> Call Support: {BRAND.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

