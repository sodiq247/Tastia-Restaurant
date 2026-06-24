"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  MapPin,
  ChevronDown,
  ShoppingCart,
} from "lucide-react";
import { BRAND } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/cart-context";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";



const navLinks = [
  { label: "Home", href: "/" },
  { label: "Order", href: "/order" },
  {
    label: "Menu",
    href: "/menu",
    children: [
      { label: "Full Menu", href: "/menu" },
      { label: "Breakfast", href: "/menu?cat=breakfast" },
      { label: "Local Dishes", href: "/menu?cat=local-dishes" },
      { label: "Grills & BBQ", href: "/menu?cat=grills" },
      { label: "Bakery & Pastries", href: "/menu?cat=bakery" },
      { label: "Drinks", href: "/menu?cat=drinks" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Dine-In", href: "/services#dine-in" },
      { label: "Home Delivery", href: "/services#delivery" },
      { label: "Catering", href: "/catering" },
      { label: "VIP Lounge", href: "/services#vip-lounge" },
      { label: "Outdoor Events", href: "/catering" },
    ],
  },
  { label: "Locations", href: "/locations" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const { totalItems, setCartOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isHome = pathname === "/";

  return (
    <>
      {/* Top announcement bar */}
      <div
        style={{ backgroundColor: "#030000" }}
        className="py-2 px-4 text-white text-xs text-center hidden md:flex items-center justify-between"
        aria-label="Contact and social bar"
      >
        <div className="flex items-center gap-6 container-max mx-auto w-full justify-between">
          <div className="flex items-center gap-4">
            <a
              href={`tel:${BRAND.phone}`}
              className="flex items-center gap-1.5 hover:text-red-300 transition-colors"
            >
              <Phone size={12} />
              <span>{BRAND.phone}</span>
            </a>
            <span className="opacity-30">|</span>
            <span className="flex items-center gap-1.5 opacity-70">
              <MapPin size={12} />
              <span>5 Locations across Abuja, FCT</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={BRAND.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-300 transition-colors"
            >
              <FacebookIcon size={13} />
            </a>
            <a
              href={BRAND.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-300 transition-colors"
            >
              <InstagramIcon size={13} />
            </a>

            <a
              href={BRAND.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-xs font-bold hover:text-purple-300 transition-colors"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-500",
          scrolled || !isHome
            ? "bg-white shadow-md shadow-black/5"
            : "bg-white/95 backdrop-blur-sm",
        )}
      >
        <nav
          ref={dropdownRef}
          className="container-max mx-auto px-4 md:px-8 flex items-center justify-between h-[70px]"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 flex-shrink-0"
            aria-label="Tastia Restaurant Home"
          >
            <Image
              src="/Tastia-Restaurant-Logo.webp"
              alt="Tastia Restaurant Logo"
              width={150}
              height={58}
              priority
              className="h-9 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center" role="menubar">
            {navLinks.map((link) => (
              <li key={link.href} className="relative" role="none">
                {link.children ? (
                  <div>
                    <button
                      role="menuitem"
                      aria-haspopup="true"
                      aria-expanded={openDropdown === link.href}
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === link.href ? null : link.href
                        )
                      }
                      className={cn(
                        "flex items-center px-2 py-2 text-sm font-medium rounded-sm transition-all duration-200 uppercase tracking-wide",
                        pathname.startsWith(link.href) && link.href !== "/"
                          ? "text-[#b52026]"
                          : "text-[#272727] hover:text-[#b52026]"
                      )}
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform duration-200",
                          openDropdown === link.href ? "rotate-180" : ""
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {openDropdown === link.href && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="absolute top-full left-0 mt-2 w-52 bg-white rounded-md shadow-xl border border-gray-100 py-1 z-50"
                          role="menu"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              role="menuitem"
                              className="block px-4 py-2.5 text-sm text-[#272727] hover:bg-[#fff0f0] hover:text-[#b52026] transition-colors"
                              style={{ fontFamily: "Poppins, sans-serif" }}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    role="menuitem"
                    className={cn(
                      "block px-4 py-2 text-sm font-medium rounded-sm transition-all duration-200 uppercase tracking-wide",
                      pathname === link.href
                        ? "text-[#b52026]"
                        : "text-[#272727] hover:text-[#b52026]"
                    )}
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setCartOpen(true)}
              id="nav-order-cta"
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded-md transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg cursor-pointer"
              style={{
                backgroundColor: "#ff2a13",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              <ShoppingCart size={15} />
              <span>Order Now</span>
              {totalItems > 0 && (
                <span className="ml-1 bg-zinc-950 text-white rounded-full h-5 w-5 flex items-center justify-center text-[10px] font-bold">
                  {totalItems}
                </span>
              )}
            </button>

            <Link
              href="/reservations"
              id="nav-reserve-cta"
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md border-2 transition-all duration-200 hover:-translate-y-0.5"
              style={{
                borderColor: "#b52026",
                color: "#b52026",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Reserve a Table
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            id="mobile-menu-toggle"
            className="lg:hidden p-2 rounded-md text-[#272727] hover:text-[#b52026] hover:bg-red-50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden border-t border-gray-100 bg-white lg:hidden"
              id="mobile-nav-menu"
            >
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    {link.children ? (
                      <div>
                        <button
                          onClick={() =>
                            setOpenDropdown(
                              openDropdown === link.href ? null : link.href
                            )
                          }
                          className="w-full flex items-center justify-between px-3 py-3 text-sm font-medium text-[#272727] hover:text-[#b52026] hover:bg-red-50 rounded-md transition-colors"
                          style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          {link.label}
                          <ChevronDown
                            size={16}
                            className={cn(
                              "transition-transform duration-200",
                              openDropdown === link.href ? "rotate-180" : ""
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {openDropdown === link.href && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="ml-4 mt-1 border-l-2 border-[#b52026]/20 pl-3 space-y-1 overflow-hidden"
                            >
                              {link.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="block px-3 py-2 text-sm text-[#272727] hover:text-[#b52026] hover:bg-red-50 rounded-md transition-colors"
                                  style={{ fontFamily: "Poppins, sans-serif" }}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className={cn(
                          "block px-3 py-3 text-sm font-medium rounded-md transition-colors",
                          pathname === link.href
                            ? "text-[#b52026] bg-red-50"
                            : "text-[#272727] hover:text-[#b52026] hover:bg-red-50"
                        )}
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Mobile CTAs */}
                <div className="pt-4 space-y-3 border-t border-gray-100">
                  <button
                    onClick={() => {
                      setMobileOpen(false);
                      setCartOpen(true);
                    }}
                    className="flex items-center justify-center gap-2 w-full py-3 text-sm font-bold text-white rounded-md cursor-pointer"
                    style={{
                      backgroundColor: "#ff2a13",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    <ShoppingCart size={16} />
                    Order Online Now {totalItems > 0 && `(${totalItems})`}
                  </button>

                  <Link
                    href="/reservations"
                    className="flex items-center justify-center w-full py-3 text-sm font-bold rounded-md border-2"
                    style={{
                      borderColor: "#b52026",
                      color: "#b52026",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    Reserve a Table
                  </Link>
                </div>

                {/* Mobile contact */}
                <div className="pt-3 flex items-center gap-4 text-xs text-gray-500">
                  <a
                    href={`tel:${BRAND.phone}`}
                    className="flex items-center gap-1 hover:text-[#b52026]"
                  >
                    <Phone size={12} />
                    {BRAND.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
