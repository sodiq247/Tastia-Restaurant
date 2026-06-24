"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  ChevronRight,
  Clock,
  ExternalLink,
} from "lucide-react";
import { BRAND, BRANCHES } from "@/lib/data";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";


const footerLinks = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Menu", href: "/menu" },
    { label: "Order Online", href: "/order" },
    { label: "Reservations", href: "/reservations" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Dine-In", href: "/services#dine-in" },
    { label: "Takeaway", href: "/services#takeaway" },
    { label: "Home Delivery", href: "/order" },
    { label: "Catering Services", href: "/catering" },
    { label: "VIP Lounge", href: "/services#vip-lounge" },
    { label: "Outdoor Events", href: "/catering" },
    { label: "Bakery & Pastries", href: "/menu?cat=bakery" },
    { label: "Corporate Events", href: "/catering#corporate" },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const mainBranch = BRANCHES[0];

  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: "#000000", color: "#ffffff" }}
      role="contentinfo"
    >
      {/* Decorative top border */}
      <div
        className="h-1 w-full"
        style={{ background: "linear-gradient(90deg, #b52026 0%, #ff2a13 50%, #b52026 100%)" }}
      />

      {/* Newsletter strip */}
      <div
        className="py-10 border-b"
        style={{ borderColor: "rgba(255,255,255,0.08)", backgroundColor: "#0a0002" }}
      >
        <div className="container-max mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-6 justify-between">
          <div className="text-center md:text-left">
            <h3
              className="text-xl font-bold text-white mb-1"
              style={{ fontFamily: "Josefin Sans, sans-serif", color: "#d4d4d8" }}
            >
              JOIN THE TASTIA FAMILY
            </h3>
            <p className="text-sm text-gray-400" style={{ fontFamily: "Poppins, sans-serif" }}>
              Get exclusive deals, new menu alerts, and special offers
            </p>
          </div>

          {subscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2 text-green-400 font-medium"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              ✓ Thank you for subscribing!
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex w-full md:w-auto gap-0"
              aria-label="Newsletter subscription"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                id="newsletter-email"
                className="flex-1 md:w-72 px-4 py-3 text-sm bg-white/10 border border-white/20 rounded-l-md text-white placeholder-gray-400 outline-none focus:border-[#b52026] transition-colors"
                style={{ fontFamily: "Poppins, sans-serif" }}
              />
              <button
                type="submit"
                id="newsletter-subscribe-btn"
                className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white rounded-r-md transition-all hover:opacity-90"
                style={{ backgroundColor: "#b52026", fontFamily: "Poppins, sans-serif" }}
              >
                <Send size={15} />
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Main footer content */}
      <div className="container-max mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="col-span-1">
            <Link
              href="/"
              className="inline-block mb-5 bg-white p-2 rounded-lg shadow-sm hover:opacity-95 transition-opacity"
              aria-label="Tastia Restaurant"
            >
              <Image
                src="/Tastia-Restaurant-Logo.webp"
                alt="Tastia Restaurant Logo"
                width={130}
                height={50}
                className="h-8 w-auto object-contain"
              />
            </Link>

            <p
              className="text-gray-400 text-sm leading-relaxed mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Abuja's largest restaurant with 230+ seats and ₦500M+ investment.
              Making memories through amazing food and exceptional hospitality.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 mb-6">
              <a
                href={BRAND.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 flex items-center justify-center rounded-md bg-white/10 text-white hover:bg-[#b52026] transition-all duration-200 hover:-translate-y-0.5"
              >
                <FacebookIcon size={16} />
              </a>
              <a
                href={BRAND.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center rounded-md bg-white/10 text-white hover:bg-[#b52026] transition-all duration-200 hover:-translate-y-0.5"
              >
                <InstagramIcon size={16} />
              </a>

              <a
                href={BRAND.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 flex items-center justify-center rounded-md bg-white/10 text-white hover:bg-[#b52026] transition-all duration-200 hover:-translate-y-0.5 text-xs font-bold"
              >
                TT
              </a>
              <a
                href={BRAND.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 flex items-center justify-center rounded-md bg-white/10 text-white hover:bg-green-600 transition-all duration-200 hover:-translate-y-0.5 text-xs font-bold"
              >
                WA
              </a>
            </div>

            {/* Hours */}
            <div
              className="flex items-start gap-2 text-sm text-gray-400"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <Clock size={14} className="mt-0.5 flex-shrink-0 text-[#b52026]" />
              <div>
                <div className="font-medium text-white text-xs mb-1">Opening Hours</div>
                <div>Mon–Fri: 7AM – 11PM</div>
                <div>Sat: 7AM – 12AM</div>
                <div>Sun: 9AM – 10PM</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm font-bold text-white uppercase tracking-widest mb-5"
              style={{ fontFamily: "Josefin Sans, sans-serif", color: "#d4d4d8" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-[#b52026] transition-colors group"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    <ChevronRight
                      size={13}
                      className="text-[#b52026] opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-sm font-bold text-white uppercase tracking-widest mb-5"
              style={{ fontFamily: "Josefin Sans, sans-serif", color: "#d4d4d8" }}
            >
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-[#b52026] transition-colors group"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    <ChevronRight
                      size={13}
                      className="text-[#b52026] opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4
              className="text-sm font-bold text-white uppercase tracking-widest mb-5"
              style={{ fontFamily: "Josefin Sans, sans-serif", color: "#d4d4d8" }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${BRAND.phone}`}
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-[#b52026] transition-colors group"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  <Phone size={16} className="mt-0.5 text-[#b52026] flex-shrink-0" />
                  <div>
                    <div className="text-xs text-white font-medium mb-0.5">Phone</div>
                    {BRAND.phone}
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-[#b52026] transition-colors"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  <Mail size={16} className="mt-0.5 text-[#b52026] flex-shrink-0" />
                  <div>
                    <div className="text-xs text-white font-medium mb-0.5">Email</div>
                    {BRAND.email}
                  </div>
                </a>
              </li>
              <li>
                <div
                  className="flex items-start gap-3 text-sm text-gray-400"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  <MapPin size={16} className="mt-0.5 text-[#b52026] flex-shrink-0" />
                  <div>
                    <div className="text-xs text-white font-medium mb-0.5">Main Branch</div>
                    {mainBranch.address}, {mainBranch.city}
                  </div>
                </div>
              </li>
            </ul>

            {/* Branches count */}
            <div className="mt-6 p-4 rounded-lg border border-white/10 bg-white/5">
              <div
                className="text-xs text-gray-400 mb-3"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                📍 We have {BRANCHES.length} locations across Abuja
              </div>
              <Link
                href="/locations"
                className="flex items-center gap-1.5 text-sm font-semibold text-[#b52026] hover:text-[#ff2a13] transition-colors"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Find nearest branch <ExternalLink size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t py-5"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="container-max mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p style={{ fontFamily: "Poppins, sans-serif" }}>
            © {new Date().getFullYear()} Tastia Restaurant & Bakery. All rights reserved.
          </p>
          <div className="flex items-center gap-4" style={{ fontFamily: "Poppins, sans-serif" }}>
            <Link href="/privacy-policy" className="hover:text-[#b52026] transition-colors">
              Privacy Policy
            </Link>
            <span className="opacity-30">|</span>
            <Link href="/terms" className="hover:text-[#b52026] transition-colors">
              Terms of Service
            </Link>
            <span className="opacity-30">|</span>
            <span>Designed with ❤️ in Abuja</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
