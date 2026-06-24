"use client";

import { useCart } from "@/lib/cart-context";
import { Calendar, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FloatingButtons() {
  const { totalItems, setCartOpen } = useCart();

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Reservations Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        <Link
          href="/reservations"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#b52026] shadow-xl hover:shadow-2xl border border-zinc-100 hover:bg-[#fff0f0] transition-colors"
          title="Book a Table"
          aria-label="Book a Table"
        >
          <Calendar size={20} className="animate-float" />
        </Link>
      </motion.div>

      {/* Cart Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setCartOpen(true)}
        className="relative flex h-12 w-12 items-center justify-center rounded-full text-white shadow-xl hover:shadow-2xl transition-all"
        style={{ backgroundColor: "#ff2a13" }}
        title="Open Cart"
        aria-label="Open Cart"
      >
        <ShoppingCart size={20} />
        {totalItems > 0 && (
          <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-zinc-950 text-white text-[10px] font-black animate-pulse-glow">
            {totalItems}
          </span>
        )}
      </motion.button>
    </div>
  );
}
