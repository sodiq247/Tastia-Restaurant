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
  Smile,
  Flame,
  Trophy,
  Sparkles,
  Lightbulb,
  CheckSquare,
  X,
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
  { icon: MapPin, value: "11", label: "Branches" },
  { icon: CalendarDays, value: "6+", label: "Years of Excellence" },
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
    year: "2020",
    title: "The Beginning",
    description:
      "Tastia Restaurant & Bakery opens its doors in Abuja as a single, humble establishment with a vision to offer exceptional dining experiences through quality ingredients and innovative cuisine during a pandemic year.",
  },
  {
    year: "2022",
    title: "Rising and Expanding",
    description:
      "Our commitment to quality ingredients and innovative cuisine earns a loyal customer base. We quickly expand into multiple branches in Abuja.",
  },
  {
    year: "2024",
    title: "Milestone Investment & 230+ Seats",
    description:
      "Investment surpasses ₦500M, establishing Tastia as a major presence in Abuja's dining scene and the largest seating capacity restaurant in the FCT.",
  },
  {
    year: "2026",
    title: "11 Branches & Flagship Operations",
    description:
      "Now operating 11 branches across Abuja and Ebonyi states, including a flagship commercial outlet in Enugu, employing over 1000+ staff.",
  },
];

/* ─── Team Data ─── */
const teamMembers = [
  {
    name: "Agwu Okike Kester",
    role: "Chief Executive Officer / Managing Director",
    bio: "Agwu Kester Okike is the Chief Executive Officer/Managing Director of Tastia Restaurant and Bakery Limited. With over 20 years of experience in active entrepreneurship and over 10 years in the hospitality industry, Kester Agwu has been able to prove that hard work and consistency give great dividends of reward, as Tastia Restaurant and Bakery is fast becoming a ‘Household Name’ in the regions of Abuja and Ebonyi states where his establishments are currently situated. He is an alumnus of the Univerisity of Uyo where he holds an HND in International Relations and Diplomacy, after which, he went on to bag a bachelor's degree in political science from the same university. His passion for the hospitality industry drove him to establish Ballers Lounge in 2012, which is operational in Ebonyi State, as well as Vegas Restaurant and Bakery in 2016, which eventually evolved into the birth and establishment of Tastia Restaurant and Bakery. In his own words, ‘Tastia Restaurant and Bakery is my big dream, for which I received inspiration from the Holy Spirit’. To further enhance his culinary skills, he went on to acquire a professional diploma in cuisine from the prestigious Reddish Culinary School. Kester Agwu is driven by excellence and philanthropy, for which he has employed over 1000 staff across the board, with plans to enlarge the brand and provide more employment opportunities. As a result of his high ethical standards in all vocations and to advance goodwill and peace around the world, he proceeded to become a member of Rotary International Club, whose main jobs are to bring together business and professional leaders in order to provide humanitarian services.",
    image: "https://tastiarestaurantng.com/wp-content/uploads/2024/07/kester-okike-agwu-e1721827812987.webp",
  },
  {
    name: "Elijah Thelma",
    role: "General Manager",
    bio: "Thelma is a dynamic and results-driven professional whose unwavering passion for the hospitality industry, commitment to customer satisfaction, and strategic leadership have propelled her rapidly through the ranks. She currently serves as the General Manager of Tastia Restaurant, Bakery & Café, where she oversees operations and drives expansion across multiple locations. An alumni of Ahmadu Bello University, Zaria, Thelma holds a Bachelor’s degree in Agriculture and a Master’s degree in Agricultural Economics. Her academic background laid a solid foundation for her analytical and management capabilities, which she seamlessly transitioned into the service sector. Her journey in the hospitality industry began in 2019 with Bukka Hospitality Limited, Lagos, where she was appointed Assistant Restaurant Manager. Within just two months, her exceptional performance earned her the role of Acting Restaurant Manager, a position she held for two years, successfully leading her store. In 2020, Thelma enrolled in the Bukkahut Mentorship Programme, where she received in-depth training in restaurant management and leadership. Her outstanding performance earned her a certification of excellence and a promotion in 2021 to Restaurant Manager, where she was entrusted with the oversight of a larger outlet. Seeking new challenges, she relocated to Abuja and joined Tastia Restaurant, contributing significantly to the brand’s growth and market presence. Her innovative mindset, dedication to service excellence, and operational leadership led to her promotion as Deputy General Manager in 2022. Shortly after, she rose to the position of General Manager, becoming a key figure in the brand’s strategic expansion. Under Thelma’s leadership, Tastia has experienced remarkable growth—launching over three new branches, including a flagship outlet in Enugu State, a commercial hub in southeastern Nigeria. Her role continues to be instrumental in steering Tastia’s operational success, brand reputation, and customer engagement across all locations.",
    image: "https://tastiarestaurantng.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-09-22-at-7.04.40-PM.jpeg",
  },
  {
    name: "Okammadu Cynthia Ifeoma",
    role: "Deputy General Manager (Operation & Administration)",
    bio: "Ifeoma Okammadu is the Deputy General Manager (Operation & Administration). She takes pride in her passion for service, her love for humanity, her fear and love for God, and her desire to always put smiles on people’s faces through her service. She possesses an impeccable entrepreneurship orientation and good customer service skills. She acquired an HND certification in Public Administration from the Institute of Management and Technology, Enugu, a certificate in Culinary Arts from El-Royalitos Catering Institute, Lagos, and a certificate in Event/Surprise Planning from Sparky Surprise Institute, Abuja. Her 8 years of experience in the Hospitality Industry has given her the platform to become bigger, better, and exceptional in outstanding service delivery. She began her journey in Tastia as the Team Lead of the cake department, and within the period of 2 years, she rose to the position of Assistant Restaurant Manager, then Restaurant Manager, and eventually, the position of Deputy General Manager. She is known for her excellence in detailed delivery, sales revenue, and service delivery. Her success story is an illustration of the dividends of hard work.",
    image: "https://tastiarestaurantng.com/wp-content/uploads/2024/07/ifeoma-okammadu-e1721827695995.webp",
  },
  {
    name: "Mr. Odey Anthony",
    role: "Deputy General Manager (Policy & Strategies)",
    bio: "Mr. Odey Anthony is the Deputy General Manager (Policy & Strategies). He obtained an HND in Accounting in Federal Polytechnic, Bauchi. He acquired a certification as a member of the Chartered Institute of Management with Chartered Institutes of Accountants in View. Over his 14 years working as an Accountant and eventually an Audit Personnel in the Hospitality Industry, he was able to track the company’s profit margin and improve it. He began his journey with Village Inn Hotel Bauchi as an Accountant, after which he transitioned to Auditing with his first working experience as an Auditor with Drumstix. He joined Tastia Restaurant in 2021 as an Internal Auditor. Within the first 6 months of his stay in the company, he could track and control stock usage. He is passionate about acquiring more knowledge to attain professionalism in the hospitality industry, utilizing his experience and hunger for knowledge.",
    image: "https://tastiarestaurantng.com/wp-content/uploads/2024/07/IMG-20240924-WA0069-e1736399128964.jpg",
  },
  {
    name: "Ogbo Lynda Ginikachukwu",
    role: "Head of Accounts and Finance",
    bio: "Ogbo Ginikachukwu is a certified Accountant who acquired a National Diploma in Accounting from Akan Ibiam Federal Polytechnic, Unwana, Ebonyi state and a BSc in Accounting with National Open University, Abuja. Her experiential journey in Accounting started with Vegas Restaurant and Bakery in 2017 as an Accounts Clerk. Her sincerity, hard work, integrity, dedication, willpower and determination to succeed gave her the platform to build on her competence and gain mastery over accounting in Restaurant operations. She became the Head of Accounts in Tastia Restaurant because of her level of knowledge of the Accounting system of the company and her sincerity in managing company funds. Her passion for profit maximization led her into understudying the Audit Department in order to gain the knowledge that would be of benefit to her department.",
    image: "https://tastiarestaurantng.com/wp-content/uploads/2024/07/ginikachukwu-ogbo-e1736399904864.webp",
  },
  {
    name: "Ms. Unyime Etido Nkorok",
    role: "Head of Customer Service",
    bio: "Ms Unyime Etido Nkorok is the Head Customer service, with over 3 years of dedicated experience in customer service. She acquired a Bachelor of science(B.Sc) degree in Mass Communication at Akwa Ibom state university,Akwa Ibom state. To further enhance her customer service skills,she acquired the following certifications: Human resources management (HRM), Project management production (PMP), and Customer service relationship management (CSRM) all in 2019. She has worked as a Restaurant Supervisor at TribeAfrik in February 2021.",
    image: "https://tastiarestaurantng.com/wp-content/uploads/2024/07/20251002_143111.jpg",
  },
];

const cultureValues = [
  {
    icon: Smile,
    title: "Attitude",
    description: "Fostering a positive, welcoming atmosphere for guests and staff alike.",
  },
  {
    icon: Flame,
    title: "Boldness",
    description: "Embracing creativity and taking calculated risks to innovate in the culinary world.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "Upholding honest and ethical standards in all interactions and operations.",
  },
  {
    icon: Trophy,
    title: "Greatness",
    description: "Striving for excellence in every dish, service, and customer experience.",
  },
  {
    icon: Sparkles,
    title: "Diversity",
    description: "Celebrating a variety of backgrounds, perspectives, and flavors to enrich the dining experience.",
  },
  {
    icon: Lightbulb,
    title: "Resourcefulness",
    description: "Making the most of available ingredients, opportunities, and challenges with ingenuity.",
  },
  {
    icon: TrendingUp,
    title: "Entrepreneurship",
    description: "Nurturing a spirit of initiative, innovation, and business acumen in the restaurant industry.",
  },
  {
    icon: CheckSquare,
    title: "Accountability",
    description: "Taking responsibility for actions, decisions, and commitments to maintain trust and reliability.",
  },
  {
    icon: Heart,
    title: "Magnanimity",
    description: "Demonstrating generosity, kindness, and a big-hearted approach in interactions with others.",
  },
];

export default function AboutPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

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
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* ══════════════════════════════════════════════
          1. IMMERSIVE HERO BANNER
         ══════════════════════════════════════════════ */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-white bg-black overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="https://tastiarestaurantng.com/wp-content/uploads/2024/07/SAVE_20240718_225034.webp"
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
                  src="https://tastiarestaurantng.com/wp-content/uploads/2024/08/Tastia-teams.webp"
                  alt="Tastia Restaurant team members"
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
                  src="https://tastiarestaurantng.com/wp-content/uploads/2024/08/team-01.webp"
                  alt="Tastia Restaurant team members at work"
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
                6 Years of Tenacity, Growth &amp;&nbsp;
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
          5b. OUR CULTURE & VALUES (Detailed Grid)
         ══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#ff2a13]/5 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#b52026]/5 blur-[120px] pointer-events-none" />

        <div className="container-max mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto space-y-4 mb-16"
          >
            <span className="section-label text-[#ff2a13]">How We Work</span>
            <h2
              className="text-3xl sm:text-4xl font-black text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our Culture &amp; <span className="text-[#ff2a13]">Core Values</span>
            </h2>
            <div className="section-divider mx-auto bg-gradient-to-r from-[#b52026] to-[#ff2a13]" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {cultureValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  custom={idx}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 space-y-4 hover:bg-zinc-900 hover:border-[#ff2a13]/20 transition-all duration-300 group"
                >
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#ff2a13]/20 to-[#ff2a13]/10 flex items-center justify-center text-[#ff2a13] group-hover:scale-110 transition-transform duration-300">
                    <Icon size={20} />
                  </div>
                  <h3
                    className="text-lg font-bold text-white"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {value.title}
                  </h3>
                  <p
                    className="text-zinc-400 text-xs sm:text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {value.description}
                  </p>
                </motion.div>
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
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-zinc-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col"
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
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                  <p
                    className="text-zinc-500 text-xs sm:text-sm leading-relaxed line-clamp-4"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {member.bio}
                  </p>
                  <button
                    onClick={() => setSelectedMember(member)}
                    className="text-xs font-bold text-[#b52026] hover:text-[#ff2a13] transition-colors flex items-center gap-1 mt-4 cursor-pointer self-start"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Read Full Bio <ArrowRight size={12} />
                  </button>
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
            src="https://tastiarestaurantng.com/wp-content/uploads/2024/09/IMG_5913_50.jpeg"
            alt="Tastia Restaurant interior ambiance"
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

      {/* Leadership Bio Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl relative z-10 flex flex-col md:flex-row max-h-[85vh] md:max-h-[75vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-20 h-10 w-10 rounded-full bg-black/5 hover:bg-black/10 text-zinc-700 hover:text-black flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Photo Pane */}
              <div className="relative w-full md:w-2/5 h-64 md:h-auto min-h-[250px] bg-zinc-100 shrink-0">
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/20" />
              </div>

              {/* Text Pane (Scrollable) */}
              <div className="p-6 sm:p-8 md:p-10 flex-1 overflow-y-auto flex flex-col">
                <div className="mb-4">
                  <span
                    className="inline-block tracking-wider uppercase text-[9px] font-bold text-[#b52026] bg-[#b52026]/10 px-3 py-1 rounded-full mb-2"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Leadership
                  </span>
                  <h3
                    className="text-xl sm:text-2xl font-black text-zinc-900 leading-tight"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {selectedMember.name}
                  </h3>
                  <p
                    className="text-[11px] sm:text-xs text-zinc-500 font-semibold uppercase tracking-wider mt-1"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {selectedMember.role}
                  </p>
                </div>

                <div className="h-[1px] w-full mb-6 bg-zinc-100" />

                <div className="flex-1 overflow-y-auto pr-1">
                  <p
                    className="text-zinc-600 text-xs sm:text-sm leading-relaxed whitespace-pre-line"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {selectedMember.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
