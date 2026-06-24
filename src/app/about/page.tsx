"use client";

import { BRAND, TESTIMONIALS, GALLERY_IMAGES } from "@/lib/data";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  ShieldCheck,
  Heart,
  Star,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Utensils,
  Users,
  MapPin,
  CalendarDays,
  TrendingUp,
  Quote,
} from "lucide-react";

/* ─── Animation Variants ─── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ─── Count-Up Hook ─── */
function useCountUp(target: number, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted, startOnView]);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  return { count, ref };
}

/* ─── Stat Counter Component ─── */
function StatCounter({
  icon: Icon,
  value,
  label,
  index,
}: {
  icon: React.ComponentType<{ size?: number }>;
  value: string;
  label: string;
  index: number;
}) {
  const numericMatch = value.match(/^([₦]?)(\d+)([M+]*)/);
  const prefix = numericMatch?.[1] || "";
  const numericValue = numericMatch ? parseInt(numericMatch[2]) : 0;
  const suffix = numericMatch?.[3] || "";
  const { count, ref } = useCountUp(numericValue, 2000);

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col items-center gap-3 p-6"
    >
      <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#ff2a13]/15 to-[#ff2a13]/10 flex items-center justify-center text-[#ff2a13] group-hover:scale-110 transition-transform">
        <Icon size={24} />
      </div>
      <div
        className="text-3xl sm:text-4xl md:text-5xl font-black text-[#ff2a13]"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {prefix}
        {count}
        {suffix}
      </div>
      <div
        className="text-[10px] sm:text-xs uppercase tracking-wider text-zinc-300 font-semibold"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {label}
      </div>
    </motion.div>
  );
}

/* ─── Stats Configuration ─── */
const statsConfig = [
  { icon: Users, value: "230+", label: "Seating Capacity" },
  { icon: Utensils, value: "100+", label: "Menu Items" },
  { icon: TrendingUp, value: "₦500M+", label: "Investment" },
  { icon: Star, value: "500+", label: "Daily Guests" },
  { icon: MapPin, value: "5+", label: "Branches" },
  { icon: CalendarDays, value: "4+", label: "Years of Excellence" },
];

/* ─── Card Data ─── */
const pillars = [
  {
    icon: Award,
    title: "Our Mission",
    body: BRAND.mission,
    gradient: "from-[#b52026] to-[#d93239]",
    bgAccent: "bg-gradient-to-br from-red-50 to-orange-50",
    iconBg: "bg-[#b52026]",
  },
  {
    icon: ShieldCheck,
    title: "Our Vision",
    body: BRAND.vision,
    gradient: "from-[#ff2a13] to-[#ff6b4a]",
    bgAccent: "bg-gradient-to-br from-orange-50 to-amber-50",
    iconBg: "bg-[#ff2a13]",
  },
  {
    icon: Heart,
    title: "Our Values",
    body: "At Tastia, we prioritize guest satisfaction, fresh and authentic ingredients, and consistent hospitality across all branches.",
    gradient: "from-[#c9a96e] to-[#e8d5b7]",
    bgAccent: "bg-gradient-to-br from-amber-50 to-yellow-50",
    iconBg: "bg-[#c9a96e]",
  },
];

/* ─── Timeline Data ─── */
const milestones = [
  {
    year: "2022",
    title: "The Beginning",
    description:
      "Tastia Restaurant & Bakery opens its doors in Abuja, introducing a new standard of Nigerian dining with a vision to become the city's premier destination.",
  },
  {
    year: "2023",
    title: "Rapid Expansion",
    description:
      "Growing from one to multiple branches across Abuja's key districts, welcoming thousands of guests and expanding our menu to 100+ items.",
  },
  {
    year: "2024",
    title: "Milestone Investment",
    description:
      "Investment surpasses ₦500M as Tastia becomes the largest restaurant in Abuja with 230+ seats, VIP lounges, and full-service catering operations.",
  },
  {
    year: "2025",
    title: "5+ Branches & Beyond",
    description:
      "Now operating 5+ modern branches serving 500+ daily guests, Tastia continues setting the gold standard for quality, service, and culinary innovation in West Africa.",
  },
];

/* ─── Team Data ─── */
const teamMembers = [
  {
    name: "Executive Chef",
    role: "Head of Culinary Operations",
    bio: "With over 15 years of culinary expertise spanning Nigerian and international cuisines, our Executive Chef leads a team of talented cooks in crafting Tastia's signature dishes.",
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80",
  },
  {
    name: "Operations Director",
    role: "Business Strategy & Growth",
    bio: "Overseeing the seamless operation of all 5+ branches, our Operations Director ensures every guest experiences the same premium quality and hospitality Tastia is known for.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    name: "Pastry Chef",
    role: "Head of Bakery Division",
    bio: "The creative force behind Tastia's celebrated bakery, crafting artisanal breads, premium cakes, and signature pastries that keep guests coming back for more.",
    image:
      "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400&q=80",
  },
];

export default function AboutPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-scroll testimonials
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
    setActiveTestimonial(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ══════════════════════════════════════════════
          1. IMMERSIVE HERO BANNER
         ══════════════════════════════════════════════ */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-white bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80"
            alt="Tastia Restaurant premium interior ambiance"
            fill
            className="object-cover opacity-40 scale-105"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
        </div>

        {/* Decorative blurs */}
        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#ff2a13]/8 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[#b52026]/8 blur-[120px] pointer-events-none" />

        {/* Hero Content */}
        <div className="container-max mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span
              className="inline-block tracking-[0.3em] uppercase text-xs font-bold text-[#ff2a13] bg-[#ff2a13]/10 px-4 py-1.5 rounded-full border border-[#ff2a13]/20"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Behind the brand
            </span>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none"
              style={{ fontFamily: "var(--font-heading)", color: "#d4d4d8" }}
            >
              Our Story of{" "}
              <span className="text-[#ff2a13]">Culinary Excellence</span>
            </h1>

            <p
              className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Nigeria&apos;s premier dining experience. Discover our history,
              milestones, and what makes Tastia Abuja&apos;s favorite dining
              destination.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/reservations"
                className="btn btn-primary w-full sm:w-auto text-base py-3.5 px-8 flex items-center justify-center gap-2 group cursor-pointer"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Reserve a Table
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/menu"
                className="btn btn-outline border-white text-white hover:bg-white hover:text-black w-full sm:w-auto text-base py-3.5 px-8 flex items-center justify-center gap-2 cursor-pointer"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Explore Our Menu
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          2. OUR JOURNEY (Improved Layout)
         ══════════════════════════════════════════════ */}
      <section className="py-16 md:py-28 bg-white relative noise-overlay">
        <div className="container-max mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Collage */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="relative h-[340px] sm:h-[420px] md:h-[520px]"
            >
              {/* Main image */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                  alt="Tastia Restaurant elegant dining interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Floating accent image */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 w-40 h-40 sm:w-52 sm:h-52 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden sm:block"
              >
                <Image
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80"
                  alt="Tastia Restaurant cozy dining area"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </motion.div>

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-4 -left-4 sm:bottom-8 sm:-left-6 bg-white p-5 rounded-xl shadow-xl max-w-[200px] border border-zinc-100 hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-red-50 flex items-center justify-center text-[#ff2a13] shrink-0">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4
                      className="text-sm font-bold text-zinc-900"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Largest in Abuja
                    </h4>
                    <p
                      className="text-[10px] text-zinc-500 mt-0.5"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      230+ seats capacity
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="space-y-6"
            >
              <span
                className="section-label"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Our Journey
              </span>

              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                4 Years of Tenacity, Growth &amp;&nbsp;
                <span className="text-[#b52026]">Culinary Excellence</span>
              </h2>

              <div className="section-divider" />

              <p
                className="text-zinc-600 text-sm sm:text-base leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {BRAND.description}
              </p>

              <p
                className="text-zinc-600 text-sm sm:text-base leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {BRAND.shortDescription}
              </p>

              <div className="pt-2">
                <Link
                  href="/locations"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#b52026] hover:text-[#ff2a13] transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Visit our locations <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          3. STATS COUNTER STRIP (Enhanced with Icons & Count-Up)
         ══════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-zinc-950 text-white relative overflow-hidden">
        {/* Background accents */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#ff2a13]/5 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#b52026]/5 blur-[120px] pointer-events-none" />

        <div className="container-max mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span
              className="section-label text-[#ff2a13]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Tastia in Numbers
            </span>
            <h2
              className="text-2xl sm:text-3xl font-black text-white mt-3"
              style={{ fontFamily: "var(--font-heading)", color: "#d4d4d8" }}
            >
              Our Impact at a Glance
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-4">
            {statsConfig.map((stat, idx) => (
              <StatCounter
                key={idx}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          4. MILESTONE TIMELINE
         ══════════════════════════════════════════════ */}
      <section className="py-16 md:py-28 bg-zinc-50 relative noise-overlay">
        <div className="container-max mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto space-y-4 mb-16"
          >
            <span className="section-label">Our Milestones</span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              The Tastia{" "}
              <span className="text-[#b52026]">Timeline</span>
            </h2>
            <div className="section-divider mx-auto" />
            <p
              className="text-zinc-500 text-sm sm:text-base"
              style={{ fontFamily: "var(--font-body)" }}
            >
              From a bold vision to Abuja&apos;s largest restaurant — here are
              the moments that defined our journey.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#b52026] via-[#ff2a13] to-[#c9a96e] md:-translate-x-px" />

            <div className="space-y-12 md:space-y-16">
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  custom={idx}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-12 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  {/* Year badge */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-gradient-to-br from-[#b52026] to-[#ff2a13] flex items-center justify-center text-white text-xs font-black shadow-lg shadow-[#b52026]/25 z-10 border-4 border-zinc-50">
                    <CalendarDays size={18} />
                  </div>

                  {/* Content card */}
                  <div
                    className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${idx % 2 === 0 ? "md:text-right md:pr-4" : "md:text-left md:pl-4"
                      }`}
                  >
                    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-zinc-100 hover:shadow-md hover:border-[#b52026]/15 transition-all duration-300">
                      <span
                        className="text-[#b52026] text-2xl sm:text-3xl font-black"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {milestone.year}
                      </span>
                      <h3
                        className="text-lg sm:text-xl font-bold text-zinc-900 mt-2"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {milestone.title}
                      </h3>
                      <p
                        className="text-zinc-500 text-xs sm:text-sm leading-relaxed mt-3"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-[calc(50%-3rem)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          5. MISSION / VISION / VALUES (Redesigned)
         ══════════════════════════════════════════════ */}
      <section className="py-16 md:py-28 bg-white">
        <div className="container-max mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto space-y-4 mb-16"
          >
            <span className="section-label">What Drives Us</span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our <span className="text-[#b52026]">Pillars</span> of
              Excellence
            </h2>
            <div className="section-divider mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={idx}
                  custom={idx}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  className={`${item.bgAccent} border border-zinc-100/80 rounded-3xl p-8 sm:p-10 space-y-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden`}
                >
                  {/* Decorative corner */}
                  <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${item.gradient} opacity-[0.07] group-hover:opacity-[0.12] transition-opacity duration-500`} />

                  <div
                    className={`h-14 w-14 rounded-2xl ${item.iconBg} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon size={24} />
                  </div>

                  <h3
                    className="text-xl sm:text-2xl font-bold text-zinc-900"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.title}
                  </h3>

                  <div className={`w-10 h-1 rounded-full bg-gradient-to-r ${item.gradient}`} />

                  <p
                    className="text-zinc-600 text-sm sm:text-base leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.body}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          6. TEAM / LEADERSHIP SECTION
         ══════════════════════════════════════════════ */}
      <section className="py-16 md:py-28 bg-zinc-50 relative noise-overlay">
        <div className="container-max mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto space-y-4 mb-16"
          >
            <span className="section-label">The People Behind Tastia</span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Meet Our{" "}
              <span className="text-[#b52026]">Leadership</span>
            </h2>
            <div className="section-divider mx-auto" />
            <p
              className="text-zinc-500 text-sm sm:text-base"
              style={{ fontFamily: "var(--font-body)" }}
            >
              A passionate team of professionals dedicated to delivering an
              exceptional dining experience at every visit.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-zinc-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Photo */}
                <div className="relative h-72 sm:h-80 overflow-hidden bg-zinc-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Name overlay on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="glass rounded-xl p-4">
                      <h3
                        className="text-lg font-bold text-white"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {member.name}
                      </h3>
                      <p
                        className="text-[11px] text-zinc-200 uppercase tracking-wider font-semibold mt-0.5"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className="p-6 sm:p-8">
                  <p
                    className="text-zinc-500 text-xs sm:text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          7. PHOTO GALLERY
         ══════════════════════════════════════════════ */}
      <section className="py-16 md:py-28 bg-white">
        <div className="container-max mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div className="space-y-3">
              <span className="section-label">Life at Tastia</span>
              <h2
                className="text-3xl md:text-4xl font-black text-zinc-950"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Our <span className="text-[#b52026]">Spaces</span> &amp;{" "}
                Moments
              </h2>
            </div>
            <Link
              href="/gallery"
              className="btn btn-outline py-2.5 px-6 flex items-center gap-1.5 cursor-pointer text-sm"
              style={{ fontFamily: "var(--font-body)" }}
            >
              View Full Gallery <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY_IMAGES.slice(0, 8).map((img, idx) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`relative rounded-2xl overflow-hidden shadow-sm group cursor-pointer ${idx === 0 || idx === 5
                  ? "md:col-span-2 md:row-span-2 aspect-square"
                  : "aspect-square"
                  }`}
              >
                <Image
                  src={img.url}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                  <div>
                    <p className="text-[10px] sm:text-xs text-[#ff2a13] font-bold uppercase tracking-wider">
                      {img.category}
                    </p>
                    <p
                      className="text-xs sm:text-sm font-bold text-white mt-1 line-clamp-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {img.alt}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          8. TESTIMONIALS
         ══════════════════════════════════════════════ */}
      <section className="py-16 md:py-28 bg-zinc-950 text-white relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#ff2a13]/5 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#b52026]/5 blur-[120px] pointer-events-none" />

        <div className="container-max mx-auto px-6 sm:px-8 lg:px-12 max-w-4xl text-center relative z-10">
          <span
            className="section-label text-[#ff2a13]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Testimonials
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-3 mb-4"
            style={{ fontFamily: "var(--font-heading)", color: "#d4d4d8" }}
          >
            What Our <span className="text-[#ff2a13]">Guests</span> Say
          </h2>
          <div className="section-divider mx-auto mb-12" />

          {/* Testimonial Carousel */}
          <div className="relative min-h-[280px] flex items-center justify-center py-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {/* Quote icon */}
                <div className="flex justify-center">
                  <div className="h-14 w-14 rounded-full bg-[#ff2a13]/15 flex items-center justify-center">
                    <Quote size={24} className="text-[#ff2a13]" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex justify-center gap-1 text-amber-400">
                  {[
                    ...Array(TESTIMONIALS[activeTestimonial].rating),
                  ].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>

                {/* Quote text */}
                <blockquote
                  className="text-lg md:text-xl text-zinc-200 italic font-light leading-relaxed max-w-3xl mx-auto"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  &ldquo;{TESTIMONIALS[activeTestimonial].content}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex flex-col items-center gap-3">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-[#ff2a13]/30">
                    <Image
                      src={TESTIMONIALS[activeTestimonial].image}
                      alt={TESTIMONIALS[activeTestimonial].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <cite
                      className="not-italic font-bold text-sm text-white uppercase tracking-wide block"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {TESTIMONIALS[activeTestimonial].name}
                    </cite>
                    <span
                      className="text-xs text-zinc-400 font-light"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {TESTIMONIALS[activeTestimonial].role} —{" "}
                      {TESTIMONIALS[activeTestimonial].date}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 hidden md:flex justify-between pointer-events-none">
              <button
                onClick={prevTestimonial}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 shadow-md pointer-events-auto transition-colors cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 shadow-md pointer-events-auto transition-colors cursor-pointer"
                aria-label="Next review"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${idx === activeTestimonial
                  ? "w-8 bg-[#ff2a13]"
                  : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          9. BOTTOM CTA SECTION
         ══════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1555244162-803834f70033?w=1600&q=80"
            alt="Tastia Restaurant catering and events"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/85" />
        </div>

        <div className="container-max mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <span
              className="inline-block tracking-[0.3em] uppercase text-xs font-bold text-[#ff2a13]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Ready to Experience Tastia?
            </span>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Your Table Is{" "}
              <span className="text-[#ff2a13]">Waiting</span>
            </h2>

            <p
              className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Join thousands of guests who have made Tastia their favorite
              dining destination. Reserve your table today and experience Abuja&apos;s finest.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/reservations"
                className="btn btn-primary w-full sm:w-auto text-base py-4 px-10 flex items-center justify-center gap-2 group cursor-pointer animate-pulse-glow"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Reserve a Table
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/menu"
                className="btn btn-outline border-white text-white hover:bg-white hover:text-black w-full sm:w-auto text-base py-4 px-10 flex items-center justify-center gap-2 cursor-pointer"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <Utensils size={16} />
                View Our Menu
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
