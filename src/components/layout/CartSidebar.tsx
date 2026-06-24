"use client";

import { useCart } from "@/lib/cart-context";
import { formatCurrency } from "@/lib/utils";
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function CartSidebar() {
  const {
    cartItems,
    cartOpen,
    setCartOpen,
    updateQuantity,
    removeFromCart,
    totalPrice,
    totalItems,
  } = useCart();

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 z-50 bg-black"
          />

          {/* Sidebar Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-white shadow-2xl flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Shopping Cart"
          >
            {/* Header */}
            <div className="p-5 border-b flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="text-[#b52026]" size={22} />
                <h2 className="text-lg font-bold uppercase tracking-wide text-zinc-900" style={{ fontFamily: "Josefin Sans, sans-serif" }}>
                  Your Order ({totalItems})
                </h2>
              </div>
              <button
                onClick={() => setCartOpen(false)}
                className="p-2 rounded-full hover:bg-zinc-100 transition-colors"
                aria-label="Close cart"
              >
                <X size={20} className="text-zinc-500" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center text-[#b52026]">
                    <ShoppingBag size={28} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-zinc-800" style={{ fontFamily: "Josefin Sans, sans-serif" }}>Your cart is empty</h3>
                    <p className="text-sm text-zinc-500 mt-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                      Add delicious meals from our menu to get started.
                    </p>
                  </div>
                  <Link
                    href="/menu"
                    onClick={() => setCartOpen(false)}
                    className="btn btn-primary"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Browse Menu
                  </Link>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-3 rounded-lg border border-zinc-100 bg-zinc-50/50 hover:bg-zinc-50 transition-colors"
                  >
                    {/* Item Image */}
                    <div className="relative w-18 h-18 rounded-md overflow-hidden bg-zinc-100 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="72px"
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-zinc-900 leading-snug line-clamp-1" style={{ fontFamily: "Josefin Sans, sans-serif" }}>
                          {item.name}
                        </h4>
                        <p className="text-xs text-[#b52026] font-semibold mt-0.5" style={{ fontFamily: "Poppins, sans-serif" }}>
                          {formatCurrency(item.price)}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-zinc-200 rounded-md bg-white">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 px-2 hover:bg-zinc-50 text-zinc-500 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="px-2 text-xs font-semibold text-zinc-800" style={{ fontFamily: "Poppins, sans-serif" }}>
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 px-2 hover:bg-zinc-50 text-zinc-500 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-zinc-400 hover:text-red-600 p-1 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary */}
            {cartItems.length > 0 && (
              <div className="border-t p-5 bg-zinc-50 space-y-4">
                <div className="flex items-center justify-between text-zinc-800">
                  <span className="text-sm font-medium" style={{ fontFamily: "Poppins, sans-serif" }}>Subtotal</span>
                  <span className="text-lg font-bold text-zinc-900" style={{ fontFamily: "Josefin Sans, sans-serif" }}>
                    {formatCurrency(totalPrice)}
                  </span>
                </div>
                <p className="text-xs text-zinc-500" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Delivery charges and taxes are calculated at checkout.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setCartOpen(false)}
                    className="btn btn-outline py-2.5"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Keep Browsing
                  </button>
                  <Link
                    href="/order"
                    onClick={() => setCartOpen(false)}
                    className="btn btn-primary py-2.5 text-center text-sm"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
