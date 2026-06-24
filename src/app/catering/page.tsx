"use client";

import { CATERING_PACKAGES, BRAND } from "@/lib/data";
import { formatCurrency, generateWhatsAppLink } from "@/lib/utils";
import { useState } from "react";
import { Check, Calendar, Users, MapPin, DollarSign, Send, MessageSquare } from "lucide-react";

export default function CateringPage() {
  // Form states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [guestsCount, setGuestsCount] = useState("50");
  const [selectedPackage, setSelectedPackage] = useState(CATERING_PACKAGES[1].id);
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const activePackage = CATERING_PACKAGES.find((p) => p.id === selectedPackage) || CATERING_PACKAGES[0];

  const handleShareWhatsApp = () => {

    let text = `*TASTIA CATERING SERVICE INQUIRY*\n`;
    text += `=========================\n\n`;
    text += `*Contact Details:*\n`;
    text += `- Name: ${name}\n`;
    text += `- Phone: ${phone}\n`;
    text += `- Email: ${email}\n\n`;

    text += `*Event Specifications:*\n`;
    text += `- Date of Event: ${date}\n`;
    text += `- Location/Venue: ${location}\n`;
    text += `- Expected Guests: ${guestsCount} Persons\n`;
    text += `- Chosen Package: ${activePackage.name}\n`;
    if (message) {
      text += `- Custom Menu/Requests: ${message}\n`;
    }
    text += `\n=========================\n`;
    text += `Please get in touch with me to finalize plans.`;

    window.open(generateWhatsAppLink(BRAND.whatsapp, text), "_blank");
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      handleShareWhatsApp();
      setIsSent(true);
      setSubmitting(false);
    }, 1200);
  };


  return (
    <div className="min-h-screen bg-zinc-50/50 pb-20">
      {/* HEADER */}
      <section className="bg-zinc-950 text-white py-10 md:py-16 text-center">
        <div className="container-max mx-auto px-4 md:px-8 space-y-3">
          <span className="section-label text-[#ff2a13]">Event Catering</span>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight" style={{ fontFamily: "Josefin Sans, sans-serif", color: "#d4d4d8" }}>
            Professional Catering Services
          </h1>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto font-light" style={{ fontFamily: "Poppins, sans-serif", color: "#d4d4d8" }}>
            Make your events unforgettable. We cater for weddings, corporate banquets, anniversaries, and private parties from 20 to 2,000+ guests.
          </p>
        </div>
      </section>

      {/* CATERING PACKAGES */}
      <section className="container-max mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mt-10 md:mt-16" style={{ fontFamily: "Josefin Sans, sans-serif" }}>
            Choose A Catering Package
          </h2>
          <p className="text-xs text-zinc-500 max-w-md mx-auto" style={{ fontFamily: "Poppins, sans-serif" }}>
            Explore our curated culinary bundles or specify custom menu additions in your inquiry form.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {CATERING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-white rounded-3xl border p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all relative ${pkg.popular ? "border-[#b52026] ring-2 ring-[#b52026]/10" : "border-zinc-200"
                }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#b52026] text-white text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900" style={{ fontFamily: "Josefin Sans, sans-serif" }}>
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-2 leading-relaxed" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {pkg.description}
                  </p>
                </div>

                <div className="border-y py-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-zinc-600" style={{ fontFamily: "Poppins, sans-serif" }}>
                    <Users size={14} className="text-[#b52026]" />
                    <span>Guests Size: <strong>{pkg.guests}</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-600" style={{ fontFamily: "Poppins, sans-serif" }}>
                    <DollarSign size={14} className="text-[#b52026]" />
                    <span>Prices Starting From: <strong>{formatCurrency(pkg.priceFrom)}</strong></span>
                  </div>
                </div>

                {/* Inclusions list */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-zinc-800 uppercase tracking-wide" style={{ fontFamily: "Josefin Sans, sans-serif" }}>
                    What's Included
                  </h4>
                  <ul className="space-y-2">
                    {pkg.includes.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-zinc-600" style={{ fontFamily: "Poppins, sans-serif" }}>
                        <Check size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => {
                    setSelectedPackage(pkg.id);
                    document.getElementById("catering-form")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`w-full btn py-2 text-xs font-semibold cursor-pointer ${pkg.popular ? "btn-primary" : "btn-outline"
                    }`}
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Select Package
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING INQUIRY FORM */}
      <section id="catering-form" className="container-max mx-auto px-4 md:px-8 max-w-4xl py-12 md:py-20 scroll-mt-24">
        {isSent ? (
          <div className="bg-white rounded-3xl border p-8 md:p-12 shadow-xl text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-500 mx-auto">
              <Check size={32} />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-zinc-900" style={{ fontFamily: "Josefin Sans, sans-serif" }}>
                Inquiry Sent!
              </h2>
              <p className="text-sm text-zinc-500 max-w-md mx-auto" style={{ fontFamily: "Poppins, sans-serif" }}>
                Your catering request has been forwarded to our events desk. Our planning manager will contact you shortly.
              </p>
            </div>
            <div className="flex gap-4 justify-center pt-2">
              <button
                onClick={handleShareWhatsApp}
                className="btn btn-primary py-2.5 px-5 text-xs flex items-center gap-1.5 cursor-pointer"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <MessageSquare size={14} /> Re-open WhatsApp
              </button>
              <button
                onClick={() => setIsSent(false)}
                className="btn btn-outline py-2.5 px-5 text-xs cursor-pointer"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Submit Another Request
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleInquirySubmit} className="bg-white rounded-3xl border p-6 md:p-10 shadow-sm space-y-6 mt-10 md:mt-16">
            <h2 className="text-xl font-bold text-zinc-900 border-b pb-4" style={{ fontFamily: "Josefin Sans, sans-serif" }}>
              Catering Inquiry Form
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-700 uppercase" htmlFor="cat-name" style={{ fontFamily: "Poppins, sans-serif" }}>Full Name *</label>
                <input
                  id="cat-name"
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
                <label className="text-xs font-bold text-zinc-700 uppercase" htmlFor="cat-phone" style={{ fontFamily: "Poppins, sans-serif" }}>WhatsApp Phone *</label>
                <input
                  id="cat-phone"
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
                <label className="text-xs font-bold text-zinc-700 uppercase" htmlFor="cat-email" style={{ fontFamily: "Poppins, sans-serif" }}>Email Address *</label>
                <input
                  id="cat-email"
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

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-700 uppercase" htmlFor="cat-date" style={{ fontFamily: "Poppins, sans-serif" }}>Event Date *</label>
                <input
                  id="cat-date"
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm bg-zinc-50 border border-zinc-200 rounded-lg focus:bg-white focus:border-[#b52026] outline-none transition-all"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-700 uppercase" htmlFor="cat-loc" style={{ fontFamily: "Poppins, sans-serif" }}>Event Location/Venue *</label>
                <input
                  id="cat-loc"
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Maitama, Abuja"
                  className="w-full px-4 py-2.5 text-sm bg-zinc-50 border border-zinc-200 rounded-lg focus:bg-white focus:border-[#b52026] outline-none transition-all"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-700 uppercase" htmlFor="cat-guests" style={{ fontFamily: "Poppins, sans-serif" }}>Approximate Guests *</label>
                <input
                  id="cat-guests"
                  type="number"
                  required
                  min="20"
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(e.target.value)}
                  placeholder="e.g. 150"
                  className="w-full px-4 py-2.5 text-sm bg-zinc-50 border border-zinc-200 rounded-lg focus:bg-white focus:border-[#b52026] outline-none transition-all"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-zinc-700 uppercase" htmlFor="cat-pkg" style={{ fontFamily: "Poppins, sans-serif" }}>Choose Event Package</label>
              <select
                id="cat-pkg"
                value={selectedPackage}
                onChange={(e) => setSelectedPackage(e.target.value)}
                className="w-full px-4 py-2.5 text-sm bg-zinc-50 border border-zinc-200 rounded-lg focus:bg-white focus:border-[#b52026] outline-none transition-all"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {CATERING_PACKAGES.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} (Starts from {formatCurrency(p.priceFrom)})
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-zinc-700 uppercase" htmlFor="cat-msg" style={{ fontFamily: "Poppins, sans-serif" }}>Custom Inclusions / Menu Details</label>
              <textarea
                id="cat-msg"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Mention specific dishes you want included from our menu, dietary needs, event theme, setup requests, etc."
                className="w-full px-4 py-2.5 text-sm bg-zinc-50 border border-zinc-200 rounded-lg focus:bg-white focus:border-[#b52026] outline-none transition-all resize-none"
                style={{ fontFamily: "Poppins, sans-serif" }}
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full btn btn-primary py-3.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-55 text-sm uppercase tracking-wider font-bold"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {submitting ? "Sending Inquiry..." : "Submit Catering Inquiry via WhatsApp"}
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
