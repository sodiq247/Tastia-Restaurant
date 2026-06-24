"use client";

import { BRAND, BRANCHES } from "@/lib/data";
import { generateWhatsAppLink } from "@/lib/utils";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, MessageSquare, Check } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("General Inquiry");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    let text = `*NEW CONTACT INQUIRY FROM WEBSITE*\n`;
    text += `=========================\n`;
    text += `- Name: ${name}\n`;
    text += `- Email: ${email}\n`;
    text += `- Subject: ${subject}\n\n`;
    text += `*Message:*\n${message}`;

    setTimeout(() => {
      window.open(generateWhatsAppLink(BRAND.whatsapp, text), "_blank");
      setIsSent(true);
      setSubmitting(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-zinc-50/50 pb-20">
      {/* HEADER */}
      <section className="bg-zinc-950 text-white py-10 md:py-16 text-center">
        <div className="container-max mx-auto px-4 md:px-8 space-y-3">
          <span className="section-label text-[#ff2a13]">Support Center</span>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight" style={{ fontFamily: "Josefin Sans, sans-serif", color: "#d4d4d8" }}>
            Contact Us
          </h1>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto font-light" style={{ fontFamily: "Poppins, sans-serif" }}>
            Have a question, feedback, or a special request? Send us a message or contact our branches directly.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="container-max mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-10 md:mt-16">

          {/* Left Column: Form */}
          <div className="lg:col-span-8 bg-white border rounded-3xl p-6 md:p-10 shadow-sm">
            {isSent ? (
              <div className="text-center py-10 space-y-6">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-500 mx-auto animate-bounce">
                  <Check size={32} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-zinc-900" style={{ fontFamily: "Josefin Sans, sans-serif" }}>Message Forwarded!</h3>
                  <p className="text-sm text-zinc-500 max-w-sm mx-auto" style={{ fontFamily: "Poppins, sans-serif" }}>
                    Your message has been converted and opened in WhatsApp. We will reply to you as soon as possible.
                  </p>
                </div>
                <button
                  onClick={() => setIsSent(false)}
                  className="btn btn-outline py-2 px-6"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <h2 className="text-xl font-bold text-zinc-900 border-b pb-4" style={{ fontFamily: "Josefin Sans, sans-serif" }}>
                  Send A Message
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-700 uppercase" htmlFor="cnt-name" style={{ fontFamily: "Poppins, sans-serif" }}>Full Name *</label>
                    <input
                      id="cnt-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-2.5 text-sm bg-zinc-50 border border-zinc-200 rounded-lg focus:bg-white focus:border-[#b52026] outline-none transition-all"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-700 uppercase" htmlFor="cnt-email" style={{ fontFamily: "Poppins, sans-serif" }}>Email Address *</label>
                    <input
                      id="cnt-email"
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
                  <label className="text-xs font-bold text-zinc-700 uppercase" htmlFor="cnt-sub" style={{ fontFamily: "Poppins, sans-serif" }}>Subject *</label>
                  <select
                    id="cnt-sub"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-zinc-50 border border-zinc-200 rounded-lg focus:bg-white focus:border-[#b52026] outline-none transition-all"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Event Catering Quote">Event Catering Quote</option>
                    <option value="Feedback / Complaint">Feedback / Complaint</option>
                    <option value="Partnership / Career">Partnership / Career</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-700 uppercase" htmlFor="cnt-msg" style={{ fontFamily: "Poppins, sans-serif" }}>Your Message *</label>
                  <textarea
                    id="cnt-msg"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe how we can help you..."
                    className="w-full px-4 py-2.5 text-sm bg-zinc-50 border border-zinc-200 rounded-lg focus:bg-white focus:border-[#b52026] outline-none transition-all resize-none"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full btn btn-primary py-3 flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-55"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  <Send size={14} />
                  {submitting ? "Sending..." : "Submit via WhatsApp"}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Address and direct contact */}
          <div className="lg:col-span-4 space-y-6">
            {/* Main Headquarters Info */}
            <div className="bg-white border rounded-3xl p-6 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-zinc-900 border-b pb-3" style={{ fontFamily: "Josefin Sans, sans-serif" }}>
                Head Office
              </h3>

              <div className="space-y-4 text-xs text-zinc-600" style={{ fontFamily: "Poppins, sans-serif" }}>
                <div className="flex items-start gap-2.5">
                  <MapPin size={16} className="text-[#b52026] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-zinc-700">Primary Address</div>
                    <div>Off Galadima Gate, 6th Avenue Gwarinpa, Abuja, Nigeria.</div>
                  </div>
                </div>

                <a
                  href={`tel:${BRAND.phone}`}
                  className="flex items-start gap-2.5 hover:text-[#b52026] transition-colors"
                >
                  <Phone size={16} className="text-[#b52026] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-zinc-700">Support Helpline</div>
                    <div>{BRAND.phone}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-start gap-2.5 hover:text-[#b52026] transition-colors"
                >
                  <Mail size={16} className="text-[#b52026] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-zinc-700">Email Address</div>
                    <div>{BRAND.email}</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Direct Branch helplines list */}
            <div className="bg-white border rounded-3xl p-6 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-zinc-800 uppercase tracking-wide" style={{ fontFamily: "Josefin Sans, sans-serif" }}>
                Branch Helplines
              </h3>
              <ul className="space-y-3.5 text-xs text-zinc-600">
                {BRANCHES.map((b) => (
                  <li key={b.id} className="flex justify-between items-center border-b pb-2 last:border-b-0 last:pb-0" style={{ fontFamily: "Poppins, sans-serif" }}>
                    <span className="font-medium text-zinc-800">{b.name}</span>
                    <a
                      href={`tel:${b.phone}`}
                      className="text-[#b52026] hover:text-[#ff2a13] font-semibold flex items-center gap-1 transition-colors"
                    >
                      <Phone size={10} /> {b.phone.slice(0, 15)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
