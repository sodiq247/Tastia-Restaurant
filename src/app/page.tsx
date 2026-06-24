"use client";

import { BRAND, FEATURED_ITEMS, SERVICES, TESTIMONIALS, BLOG_POSTS, GALLERY_IMAGES } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import { useCart } from "@/lib/cart-context";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Clock,
  Flame,
  ArrowRight,
  Utensils,
  Award,
  Users,
  TrendingUp,
  ShoppingBag,
} from "lucide-react";

export default function Home() {
  const { addToCart } = useCart();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [menuFilter, setMenuFilter] = useState("all");

  // Auto scroll testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-white bg-black">
        {/* Immersive background image with parallax effect */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80"
            alt="Tastia Dining Ambiance"
            fill
            className="object-cover opacity-45 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
        </div>

        {/* Hero Content */}
        <div className="container-max mx-auto px-4 md:px-8 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span
              className="inline-block tracking-[0.3em] uppercase text-xs font-bold text-[#ff2a13] bg-[#ff2a13]/10 px-4 py-1.5 rounded-full border border-[#ff2a13]/20"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {BRAND.tagline}
            </span>

            <h1
              className="text-5xl md:text-7xl font-black tracking-tight leading-none"
              style={{ fontFamily: "Josefin Sans, sans-serif", color: "#d4d4d8" }}
            >
              Discover <span className="text-[#ff2a13]">Delicious</span> Moments
            </h1>

            <p
              className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Tastia Restaurant & Bakery is Abuja's ultimate dining destination, offering premium hospitality, rich flavors, and unforgettable experiences.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Link
                href="/menu"
                className="btn btn-primary w-full sm:w-auto text-base py-3.5 px-8 flex items-center justify-center gap-2 group cursor-pointer"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <ShoppingBag size={18} />
                Explore Our Menu
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/reservations"
                className="btn btn-outline border-white text-white hover:bg-white hover:text-black w-full sm:w-auto text-base py-3.5 px-8 flex items-center justify-center gap-2 cursor-pointer"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Reserve a Table
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats strip */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-white/5 py-4 hidden md:block">
          <div className="container-max mx-auto px-4 grid grid-cols-4 gap-6 text-center">
            {BRAND.stats.slice(0, 4).map((stat, idx) => (
              <div key={idx} className="border-r border-white/10 last:border-0">
                <div
                  className="text-2xl font-black text-[#ff2a13]"
                  style={{ fontFamily: "Josefin Sans, sans-serif" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-[10px] uppercase tracking-wider text-zinc-400 mt-0.5"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. OUR STORY SECTION */}
      <section className="py-16 md:py-24 bg-zinc-50 relative noise-overlay">
        <div className="container-max mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Image collage */}
          <div className="relative h-[360px] md:h-[480px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80"
                alt="Tastia Wuse 2 Interior"
                fill
                className="object-cover"
              />
            </motion.div>
            {/* Small floating card overlay */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs border border-zinc-100 hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-red-50 flex items-center justify-center text-[#ff2a13]">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900" style={{ fontFamily: "Josefin Sans, sans-serif" }}>Largest Restaurant</h4>
                  <p className="text-xs text-zinc-500 mt-0.5" style={{ fontFamily: "Poppins, sans-serif" }}>230+ guests seating capacity in Abuja.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative */}
          <div className="space-y-6">
            <span className="section-label">Our Story</span>
            <h2
              className="text-4xl md:text-5xl font-black tracking-tight text-zinc-950"
              style={{ fontFamily: "Josefin Sans, sans-serif" }}
            >
              Crafting Memorable <span className="text-[#b52026]">Culinary</span> Experiences
            </h2>
            <div className="section-divider" />
            <p
              className="text-zinc-600 leading-relaxed font-light"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {BRAND.description}
            </p>
            <p
              className="text-zinc-600 leading-relaxed font-light"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {BRAND.shortDescription}
            </p>

            {/* Mission & Vision block */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="p-5 bg-white border border-zinc-100 rounded-xl">
                <h3 className="text-sm font-bold text-[#b52026] mb-2 uppercase tracking-wide" style={{ fontFamily: "Josefin Sans, sans-serif" }}>Our Mission</h3>
                <p className="text-xs text-zinc-500 leading-relaxed" style={{ fontFamily: "Poppins, sans-serif" }}>{BRAND.mission}</p>
              </div>
              <div className="p-5 bg-white border border-zinc-100 rounded-xl">
                <h3 className="text-sm font-bold text-[#b52026] mb-2 uppercase tracking-wide" style={{ fontFamily: "Josefin Sans, sans-serif" }}>Our Vision</h3>
                <p className="text-xs text-zinc-500 leading-relaxed" style={{ fontFamily: "Poppins, sans-serif" }}>{BRAND.vision}</p>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-[#b52026] hover:text-[#ff2a13] transition-colors">
                Learn more about our journey <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MENU HIGHLIGHTS SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-max mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
            <span className="section-label">Chef's Picks</span>
            <h2
              className="text-4xl md:text-5xl font-black text-zinc-950"
              style={{ fontFamily: "Josefin Sans, sans-serif" }}
            >
              From Our Signature <span className="text-[#b52026]">Kitchen</span>
            </h2>
            <div className="section-divider mx-auto" />
            <p className="text-zinc-500 text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>
              Explore our highly recommended and popular dishes crafted with fresh local ingredients and traditional recipes.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURED_ITEMS.slice(0, 4).map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl overflow-hidden border border-zinc-100 shadow-md card-lift flex flex-col justify-between"
              >
                {/* Food Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="badge-primary text-[9px] px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {item.spiceLevel !== undefined && item.spiceLevel > 0 && (
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md rounded-full p-1.5 text-orange-500 flex items-center gap-0.5 z-10" title={`Spice Level: ${item.spiceLevel}`}>
                      <Flame size={12} fill="currentColor" />
                      {item.spiceLevel > 1 && <Flame size={12} fill="currentColor" />}
                      {item.spiceLevel > 2 && <Flame size={12} fill="currentColor" />}
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3
                        className="text-base font-bold text-zinc-950 line-clamp-1"
                        style={{ fontFamily: "Josefin Sans, sans-serif" }}
                      >
                        {item.name}
                      </h3>
                    </div>
                    <p
                      className="text-zinc-500 text-xs leading-relaxed line-clamp-2"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {item.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {/* Price and Prep Time */}
                    <div className="flex items-center justify-between text-xs text-zinc-500">
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        <span>{item.prepTime}</span>
                      </div>
                      {item.calories && (
                        <div>
                          <span>{item.calories} kcal</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-zinc-50">
                      <span
                        className="text-[#b52026] text-lg font-black"
                        style={{ fontFamily: "Josefin Sans, sans-serif" }}
                      >
                        {formatCurrency(item.price)}
                      </span>
                      <button
                        onClick={() => addToCart(item)}
                        className="btn btn-primary py-1.5 px-3.5 text-xs rounded-md flex items-center gap-1 cursor-pointer"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/menu" className="btn btn-outline py-3 px-8 cursor-pointer" style={{ fontFamily: "Poppins, sans-serif" }}>
              View Our Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* 4. PREMIUM SERVICES SECTION */}
      <section className="py-16 md:py-24 bg-zinc-950 text-white relative overflow-hidden">
        {/* Background visual details */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#ff2a13]/5 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#b52026]/5 blur-[120px] pointer-events-none" />

        <div className="container-max mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="section-label text-[#ff2a13]">Tastia Services</span>
            <h2
              className="text-4xl md:text-5xl font-black text-white"
              style={{ fontFamily: "Josefin Sans, sans-serif", color: "#d4d4d8" }}
            >
              Elevating the Art of <span className="text-[#ff2a13]">Hospitality</span>
            </h2>
            <div className="section-divider mx-auto" />
            <p className="text-zinc-400 text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>
              Whether dining in our spacious locations, hosting a private corporate gathering, or enjoying local dishes at home, we deliver excellence.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-dark rounded-2xl overflow-hidden flex flex-col justify-between border border-white/5 hover:border-[#ff2a13]/30 transition-colors"
              >
                <div>
                  {/* Service Image */}
                  <div className="relative h-48 w-full bg-zinc-800">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 30vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent" />
                    {/* Icon floating */}
                    <div className="absolute bottom-4 left-4 h-12 w-12 rounded-xl bg-[#ff2a13] flex items-center justify-center text-xl shadow-lg">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3
                      className="text-xl font-bold text-white"
                      style={{ fontFamily: "Josefin Sans, sans-serif" }}
                    >
                      {service.name}
                    </h3>
                    <p
                      className="text-zinc-400 text-xs leading-relaxed"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {service.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-2 pt-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#ff2a13]" />
                          <span style={{ fontFamily: "Poppins, sans-serif" }}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={service.cta.href}
                    className="w-full btn bg-white/10 hover:bg-[#ff2a13] text-white hover:border-[#ff2a13] transition-colors py-2 text-xs text-center justify-center font-bold flex items-center gap-1.5 cursor-pointer"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {service.cta.label}
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Special VIP Lounge / Karaoke strip */}
          <div className="mt-16 bg-gradient-to-r from-[#b52026]/20 to-[#ff2a13]/10 border border-white/5 rounded-3xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#ff2a13]">Exclusive VIP Lounge</span>
              <h3 className="text-2xl md:text-3xl font-black text-white" style={{ fontFamily: "Josefin Sans, sans-serif", color: "#d4d4d8" }}>Luxury Meets Privacy & Entertainment</h3>
              <p className="text-zinc-400 text-sm leading-relaxed" style={{ fontFamily: "Poppins, sans-serif" }}>
                Step into Tastia's private VIP lounge at our Ademola Adetokunbo branch, FCT. A secluded haven offering boisterous karaoke sessions, premium butler service, customized event setup, and private bar access. Perfect for anniversaries, business meetings, and celebrations.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link
                href="/reservations?type=vip"
                className="btn btn-primary text-sm py-3 px-6 cursor-pointer"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Book VIP Experience
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE STATISTICS SECTION */}
      <section className="py-16 bg-white border-y border-zinc-100">
        <div className="container-max mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <div className="text-3xl md:text-5xl font-black text-[#b52026]" style={{ fontFamily: "Josefin Sans, sans-serif" }}>50,000+</div>
              <div className="text-xs uppercase tracking-wider text-zinc-500 font-semibold" style={{ fontFamily: "Poppins, sans-serif" }}>Happy Customers</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-5xl font-black text-[#b52026]" style={{ fontFamily: "Josefin Sans, sans-serif" }}>1,500+</div>
              <div className="text-xs uppercase tracking-wider text-zinc-500 font-semibold" style={{ fontFamily: "Poppins, sans-serif" }}>Staff Strength</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-5xl font-black text-[#b52026]" style={{ fontFamily: "Josefin Sans, sans-serif" }}>10,300+</div>
              <div className="text-xs uppercase tracking-wider text-zinc-500 font-semibold" style={{ fontFamily: "Poppins, sans-serif" }}>Daily Orders</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-5xl font-black text-[#b52026]" style={{ fontFamily: "Josefin Sans, sans-serif" }}>5+</div>
              <div className="text-xs uppercase tracking-wider text-zinc-500 font-semibold" style={{ fontFamily: "Poppins, sans-serif" }}>Modern Branches</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section className="py-16 md:py-24 bg-zinc-50 relative noise-overlay">
        <div className="container-max mx-auto px-4 md:px-8 max-w-4xl text-center space-y-8">
          <span className="section-label">Testimonials</span>
          <h2
            className="text-4xl font-black text-zinc-950"
            style={{ fontFamily: "Josefin Sans, sans-serif" }}
          >
            What Our <span className="text-[#b52026]">Guests</span> Say
          </h2>
          <div className="section-divider mx-auto" />

          {/* Testimonial card */}
          <div className="relative min-h-[220px] flex items-center justify-center py-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 text-amber-500">
                  {[...Array(TESTIMONIALS[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote
                  className="text-lg md:text-xl text-zinc-700 italic font-light leading-relaxed max-w-3xl mx-auto"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  "{TESTIMONIALS[activeTestimonial].content}"
                </blockquote>

                {/* Author Details */}
                <div className="flex flex-col items-center gap-2">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden border border-zinc-200">
                    <Image
                      src={TESTIMONIALS[activeTestimonial].image}
                      alt={TESTIMONIALS[activeTestimonial].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <cite
                      className="not-italic font-bold text-sm text-zinc-900 uppercase tracking-wide block"
                      style={{ fontFamily: "Josefin Sans, sans-serif" }}
                    >
                      {TESTIMONIALS[activeTestimonial].name}
                    </cite>
                    <span
                      className="text-xs text-zinc-500 font-light"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {TESTIMONIALS[activeTestimonial].role} — {TESTIMONIALS[activeTestimonial].date}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider controls */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 hidden md:flex justify-between pointer-events-none">
              <button
                onClick={prevTestimonial}
                className="p-2.5 rounded-full bg-white hover:bg-zinc-100 text-zinc-700 border shadow-md pointer-events-auto transition-colors cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2.5 rounded-full bg-white hover:bg-zinc-100 text-zinc-700 border shadow-md pointer-events-auto transition-colors cursor-pointer"
                aria-label="Next review"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. GALLERY PREVIEW SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-max mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div className="space-y-3">
              <span className="section-label">Gallery Preview</span>
              <h2 className="text-3xl md:text-4xl font-black text-zinc-950" style={{ fontFamily: "Josefin Sans, sans-serif" }}>
                A Feast for the <span className="text-[#b52026]">Eyes</span>
              </h2>
            </div>
            <Link href="/gallery" className="btn btn-outline py-2.5 px-6 flex items-center gap-1.5 cursor-pointer text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>
              View Full Gallery <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY_IMAGES.slice(0, 4).map((img) => (
              <div key={img.id} className="relative aspect-square rounded-xl overflow-hidden shadow-sm group">
                <Image
                  src={img.url}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div>
                    <p className="text-[10px] text-[#ff2a13] font-bold uppercase tracking-wider">{img.category}</p>
                    <p className="text-xs font-bold text-white mt-0.5 line-clamp-1">{img.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BLOG / ARTICLES SECTION */}
      <section className="py-16 md:py-24 bg-zinc-50 relative noise-overlay border-t">
        <div className="container-max mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
            <span className="section-label">Blog & News</span>
            <h2
              className="text-3xl md:text-4xl font-black text-zinc-950"
              style={{ fontFamily: "Josefin Sans, sans-serif" }}
            >
              Latest from the <span className="text-[#b52026]">Tastia Journal</span>
            </h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden border border-zinc-100 shadow-md card-lift flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full bg-zinc-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 30vw"
                    />
                    <span className="absolute top-3 left-3 bg-[#b52026] text-white text-[9px] font-bold uppercase px-2 py-0.5 rounded-sm">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="text-[10px] text-zinc-400 font-medium">
                      {post.date} &bull; {post.readTime}
                    </div>
                    <h3 className="text-base font-bold text-zinc-950 line-clamp-2" style={{ fontFamily: "Josefin Sans, sans-serif" }}>
                      {post.title}
                    </h3>
                    <p className="text-xs text-zinc-500 leading-relaxed line-clamp-3" style={{ fontFamily: "Poppins, sans-serif" }}>
                      {post.excerpt}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b52026] hover:text-[#ff2a13] transition-colors"
                  >
                    Read Article <ArrowRight size={12} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
