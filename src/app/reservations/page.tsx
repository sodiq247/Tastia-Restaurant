"use client";

import { BRAND, BRANCHES } from "@/lib/data";
import { generateWhatsAppLink } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, Phone, Mail, Clock, MapPin, CheckCircle, ChevronRight, Award, MessageSquare } from "lucide-react";

export default function ReservationsPage() {
  // Form states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState("2");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("19:00");
  const [branchId, setBranchId] = useState(BRANCHES[0].id);
  const [area, setArea] = useState("Main Dining Hall");
  const [occasion, setOccasion] = useState("None");
  const [notes, setNotes] = useState("");
  
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [reservationCode, setReservationCode] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const activeBranch = BRANCHES.find((b) => b.id === branchId) || BRANCHES[0];

  const handleBookTable = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate reservation database booking
    setTimeout(() => {
      const code = "TS-" + Math.floor(100000 + Math.random() * 900000);
      setReservationCode(code);
      setIsConfirmed(true);
      setSubmitting(false);
    }, 1200);
  };

  const handleShareWhatsApp = () => {
    let msg = `*TASTIA TABLE RESERVATION CONFIRMED*\n`;
    msg += `=========================\n`;
    msg += `*Reservation Code:* ${reservationCode}\n\n`;
    msg += `*Details:*\n`;
    msg += `- Guest Name: ${name}\n`;
    msg += `- Phone: ${phone}\n`;
    msg += `- Guests: ${guests} Persons\n`;
    msg += `- Date & Time: ${date} @ ${time}\n`;
    msg += `- Location: ${activeBranch.name}\n`;
    msg += `- Seating Area: ${area}\n`;
    if (occasion !== "None") {
      msg += `- Occasion: ${occasion}\n`;
    }
    if (notes) {
      msg += `- Notes: ${notes}\n`;
    }
    msg += `\nThank you, looking forward to dining with you!`;

    const targetPhone = activeBranch.whatsapp || BRAND.whatsapp;
    window.open(generateWhatsAppLink(targetPhone, msg), "_blank");
  };

  return (
    <div className="min-h-screen bg-zinc-50/50 pb-20">
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
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white drop-shadow-md" style={{ fontFamily: "Josefin Sans, sans-serif" }}>
            Book A Table
          </h1>
          <p className="text-zinc-200 text-sm md:text-base max-w-xl mx-auto font-light drop-shadow-sm" style={{ fontFamily: "Poppins, sans-serif" }}>
            Secure your table at any of our branches. Experience Tastia's world-class dining, VIP lounge, or garden terrace.
          </p>
        </div>
      </section>

      <section className="container-max mx-auto px-4 md:px-8 py-12 md:py-20">
        {isConfirmed ? (
          /* SUCCESS SCREEN */
          <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-3xl border shadow-xl text-center space-y-8">
            <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center text-green-500 mx-auto">
              <CheckCircle size={44} />
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-black text-zinc-900" style={{ fontFamily: "Josefin Sans, sans-serif" }}>
                Booking Confirmed!
              </h2>
              <p className="text-sm text-zinc-500 max-w-md mx-auto" style={{ fontFamily: "Poppins, sans-serif" }}>
                Your table at <strong className="text-zinc-800">{activeBranch.name}</strong> is reserved. We look forward to hosting you.
              </p>
            </div>

            {/* Receipt Table */}
            <div className="bg-zinc-50 rounded-2xl border p-6 text-left grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-zinc-600" style={{ fontFamily: "Poppins, sans-serif" }}>
              <div className="space-y-1">
                <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">Reservation ID</span>
                <span className="font-bold text-zinc-900 text-base">{reservationCode}</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">Guest Name</span>
                <span className="font-semibold text-zinc-900">{name}</span>
              </div>
              <div className="space-y-1 border-t sm:border-t-0 sm:pt-0 pt-3">
                <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">Date & Time</span>
                <span className="font-semibold text-zinc-900">{date} @ {time}</span>
              </div>
              <div className="space-y-1 border-t sm:border-t-0 sm:pt-0 pt-3">
                <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">Guests Size</span>
                <span className="font-semibold text-zinc-900">{guests} Persons</span>
              </div>
              <div className="space-y-1 border-t pt-3 col-span-1 sm:col-span-2">
                <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">Seating Area</span>
                <span className="font-semibold text-zinc-900">{area} ({activeBranch.name})</span>
              </div>
            </div>

            {/* CTA Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button
                onClick={handleShareWhatsApp}
                className="btn btn-primary py-3 px-6 flex items-center justify-center gap-1.5 cursor-pointer"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <MessageSquare size={16} />
                Send Confirmation to WhatsApp
              </button>
              <Link
                href="/menu"
                className="btn btn-outline py-3 px-6 cursor-pointer"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Browse Menu
              </Link>
            </div>
          </div>
        ) : (
          /* RESERVATION FORM */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Form */}
            <form onSubmit={handleBookTable} className="lg:col-span-8 bg-white rounded-3xl border p-6 md:p-10 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-zinc-900 flex items-center gap-2 border-b pb-4" style={{ fontFamily: "Josefin Sans, sans-serif" }}>
                Seating Request Details
              </h2>

              {/* Grid selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-700 uppercase" htmlFor="guest-select" style={{ fontFamily: "Poppins, sans-serif" }}>Number of Guests</label>
                  <select
                    id="guest-select"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-zinc-50 border border-zinc-200 rounded-lg focus:bg-white focus:border-[#b52026] outline-none transition-all"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Person" : "People"}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-700 uppercase" htmlFor="booking-date" style={{ fontFamily: "Poppins, sans-serif" }}>Choose Date</label>
                  <input
                    id="booking-date"
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-zinc-50 border border-zinc-200 rounded-lg focus:bg-white focus:border-[#b52026] outline-none transition-all"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-700 uppercase" htmlFor="booking-time" style={{ fontFamily: "Poppins, sans-serif" }}>Choose Time</label>
                  <select
                    id="booking-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-zinc-50 border border-zinc-200 rounded-lg focus:bg-white focus:border-[#b52026] outline-none transition-all"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {["11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"].map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Grid Location and Area */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-700 uppercase" htmlFor="branch-select" style={{ fontFamily: "Poppins, sans-serif" }}>Location Branch</label>
                  <select
                    id="branch-select"
                    value={branchId}
                    onChange={(e) => setBranchId(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-zinc-50 border border-zinc-200 rounded-lg focus:bg-white focus:border-[#b52026] outline-none transition-all"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {BRANCHES.map((b) => (
                      <option key={b.id} value={b.id}>
                        {b.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-700 uppercase" htmlFor="area-select" style={{ fontFamily: "Poppins, sans-serif" }}>Dining Area</label>
                  <select
                    id="area-select"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-zinc-50 border border-zinc-200 rounded-lg focus:bg-white focus:border-[#b52026] outline-none transition-all"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    <option value="Main Dining Hall">Main Dining Hall</option>
                    <option value="VIP Lounge">VIP Lounge (Premium)</option>
                    <option value="Terrace / Garden">Outdoor Terrace / Garden</option>
                    <option value="Private Booth">Private Booth</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-700 uppercase" htmlFor="occasion-select" style={{ fontFamily: "Poppins, sans-serif" }}>Occasion</label>
                  <select
                    id="occasion-select"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-zinc-50 border border-zinc-200 rounded-lg focus:bg-white focus:border-[#b52026] outline-none transition-all"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    <option value="None">Just Dining Out</option>
                    <option value="Birthday">Birthday Celebration</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Business Dinner">Business Dinner</option>
                    <option value="Date Night">Date Night</option>
                  </select>
                </div>
              </div>

              {/* Personal Details */}
              <div className="space-y-4 pt-4 border-t border-zinc-100">
                <h3 className="text-base font-bold text-zinc-800" style={{ fontFamily: "Josefin Sans, sans-serif" }}>Contact Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-700 uppercase" htmlFor="cust-name" style={{ fontFamily: "Poppins, sans-serif" }}>Full Name *</label>
                    <input
                      id="cust-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 text-sm bg-zinc-50 border border-zinc-200 rounded-lg focus:bg-white focus:border-[#b52026] outline-none transition-all"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-700 uppercase" htmlFor="cust-phone" style={{ fontFamily: "Poppins, sans-serif" }}>Phone Number *</label>
                    <input
                      id="cust-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +234 803 ..."
                      className="w-full px-4 py-2.5 text-sm bg-zinc-50 border border-zinc-200 rounded-lg focus:bg-white focus:border-[#b52026] outline-none transition-all"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-700 uppercase" htmlFor="cust-email" style={{ fontFamily: "Poppins, sans-serif" }}>Email Address *</label>
                    <input
                      id="cust-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      className="w-full px-4 py-2.5 text-sm bg-zinc-50 border border-zinc-200 rounded-lg focus:bg-white focus:border-[#b52026] outline-none transition-all"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-700 uppercase" htmlFor="cust-notes" style={{ fontFamily: "Poppins, sans-serif" }}>Special Requests / Notes (Optional)</label>
                  <textarea
                    id="cust-notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Near the window, high-chair for a baby, dietary restrictions, secret proposal setup, etc."
                    className="w-full px-4 py-2.5 text-sm bg-zinc-50 border border-zinc-200 rounded-lg focus:bg-white focus:border-[#b52026] outline-none transition-all resize-none"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full btn btn-primary py-3.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-55 text-sm uppercase tracking-wider font-bold"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {submitting ? "Booking Table..." : "Confirm Table Reservation"}
              </button>
            </form>

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
                    <span>Table holds for maximum **15 minutes** past booking time. Please call the branch if you are running late.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <User size={16} className="flex-shrink-0 mt-0.5" />
                    <span>For parties larger than **20 people**, please contact our group reservations team directly via phone.</span>
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
                  className="flex items-center gap-2 text-xs font-bold text-[#b52026] hover:text-[#ff2a13] transition-colors"
                >
                  <Phone size={14} /> Call Support: {BRAND.phone}
                </a>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
