"use client";

import { BRANCHES, BRAND } from "@/lib/data";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock, Compass, CheckCircle2, ChevronRight, MessageSquare } from "lucide-react";

export default function LocationsPage() {
  const [selectedBranchId, setSelectedBranchId] = useState(BRANCHES[0].id);

  const activeBranch = BRANCHES.find((b) => b.id === selectedBranchId) || BRANCHES[0];

  return (
    <div className="min-h-screen bg-zinc-50/50 pb-20">
      {/* HEADER */}
      <section className="bg-zinc-950 text-white py-10 md:py-16 text-center">
        <div className="container-max mx-auto px-4 md:px-8 space-y-3">
          <span className="section-label text-[#ff2a13]">Tastia Locations</span>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight" style={{ fontFamily: "Josefin Sans, sans-serif", color: "#d4d4d8" }}>
            Find A Branch Near You
          </h1>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto font-light" style={{ fontFamily: "Poppins, sans-serif" }}>
            We have 5 state-of-the-art dining and bakery branches across Abuja. Visit us to experience premium Nigerian hospitality.
          </p>
        </div>
      </section>

      {/* BRANCH DETAILS GRID */}
      <section className="container-max mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-10 md:mt-16">

          {/* Left Column: Branch Cards List */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-lg font-bold text-zinc-800 uppercase tracking-wide px-1" style={{ fontFamily: "Josefin Sans, sans-serif" }}>
              Our Branches
            </h2>
            <div className="space-y-3 h-[630px] p-3 pl-0 overflow-y-auto">
              {BRANCHES.map((branch) => {
                const isActive = branch.id === selectedBranchId;
                return (
                  <button
                    key={branch.id}
                    onClick={() => setSelectedBranchId(branch.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer shadow-sm flex gap-4 ${isActive
                      ? "border-[#b52026] bg-[#b52026]/5"
                      : "border-zinc-200 bg-white hover:border-zinc-300"
                      }`}
                  >
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-zinc-100 flex-shrink-0">
                      <Image
                        src={branch.image}
                        alt={branch.name}
                        fill
                        className="object-cover"
                        sizes="200px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 justify-between">
                        <h3 className="text-sm font-bold text-zinc-900 truncate" style={{ fontFamily: "Josefin Sans, sans-serif" }}>
                          {branch.name}
                        </h3>
                        {branch.isMain && (
                          <span className="bg-[#b52026] text-white text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-sm">
                            Main
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-zinc-500 truncate mt-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                        {branch.address}
                      </p>
                      <span className="text-[10px] text-[#b52026] font-semibold flex items-center gap-1 mt-1.5" style={{ fontFamily: "Poppins, sans-serif" }}>
                        <Clock size={10} /> {branch.hours.split(":")[0]}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Detailed View & Map */}
          <div className="lg:col-span-8 bg-white border rounded-3xl overflow-hidden shadow-md grid grid-cols-1">

            {/* Map Iframe overlaid on Image */}
            <div className="relative flex flex-col items-center justify-center h-72 sm:h-96 w-full bg-zinc-100 border-b overflow-hidden group">
              <Image
                src={activeBranch.image}
                alt={activeBranch.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-102"
                priority
              />
              <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />

              {/* Small Floating Map Card */}
              <div className="absolute bottom-4 right-4 w-48 h-36 sm:w-72 sm:h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white/95 z-10 transition-all duration-300 hover:scale-[1.03] hover:shadow-black/35">
                <iframe
                  title={`Google Map pointing to ${activeBranch.name}`}
                  src={activeBranch.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Branch Detailed Content */}
            <div className="p-6 md:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-5">
                <div>
                  <h2 className="text-2xl font-black text-zinc-950" style={{ fontFamily: "Josefin Sans, sans-serif" }}>
                    {/* {activeBranch.name} */}
                    {activeBranch.name}
                  </h2>
                  <p className="text-sm text-zinc-500 mt-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {activeBranch.address}, {activeBranch.city}, {activeBranch.state}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Link
                    href={`/reservations?branch=${activeBranch.id}`}
                    className="btn btn-primary text-xs py-2 px-4 cursor-pointer"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Book Table Here
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm">

                {/* Contact and Hours */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-zinc-800 uppercase tracking-wider" style={{ fontFamily: "Josefin Sans, sans-serif" }}>
                    Contact & Hours
                  </h3>

                  <div className="space-y-3 text-zinc-600" style={{ fontFamily: "Poppins, sans-serif" }}>
                    <a
                      href={`tel:${activeBranch.phone}`}
                      className="flex items-start gap-2.5 hover:text-[#b52026] transition-colors"
                    >
                      <Phone size={16} className="text-[#b52026] mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-[10px] text-zinc-400 font-bold uppercase">Call Counter</div>
                        <div>{activeBranch.phone}</div>
                      </div>
                    </a>

                    <a
                      href={`https://wa.me/${activeBranch.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-2.5 hover:text-green-600 transition-colors"
                    >
                      <MessageSquare size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-[10px] text-zinc-400 font-bold uppercase">WhatsApp Desk</div>
                        <div>Chat on WhatsApp</div>
                      </div>
                    </a>

                    <div className="flex items-start gap-2.5">
                      <Clock size={16} className="text-[#b52026] mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-[10px] text-zinc-400 font-bold uppercase">Opening Hours</div>
                        <ul className="space-y-0.5 text-xs text-zinc-500 mt-1">
                          {activeBranch.hoursDetailed.map((sched, idx) => (
                            <li key={idx} className="flex gap-2 justify-between">
                              <span className="font-medium text-zinc-700">{sched.day}:</span>
                              <span>{sched.time}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Facilities Checklist */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-zinc-800 uppercase tracking-wider" style={{ fontFamily: "Josefin Sans, sans-serif" }}>
                    Branch Inclusions
                  </h3>

                  <div className="grid grid-cols-2 gap-3">
                    {activeBranch.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-600" style={{ fontFamily: "Poppins, sans-serif" }}>
                        <CheckCircle2 size={14} className="text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-zinc-100">
                    <div className="flex items-center gap-3 text-xs text-zinc-500" style={{ fontFamily: "Poppins, sans-serif" }}>
                      <div className="flex items-center gap-1.5">
                        <span className={`h-2 w-2 rounded-full ${activeBranch.delivery ? "bg-green-500" : "bg-red-400"}`} />
                        <span>Delivery Available</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className={`h-2 w-2 rounded-full ${activeBranch.reservations ? "bg-green-500" : "bg-red-400"}`} />
                        <span>Reservations Supported</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
