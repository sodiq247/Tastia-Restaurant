"use client";

import { useCart } from "@/lib/cart-context";
import { BRAND, BRANCHES } from "@/lib/data";
import { formatCurrency, generateWhatsAppLink } from "@/lib/utils";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, ChevronRight, MapPin, Truck, Phone, MessageSquare, ArrowRight, Trash2, Plus, Minus } from "lucide-react";

export default function OrderPage() {
  const { cartItems, updateQuantity, removeFromCart, totalPrice, totalItems, clearCart } = useCart();
  const router = useRouter();

  // Form states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [orderType, setOrderType] = useState<"delivery" | "pickup">("delivery");
  const [selectedBranch, setSelectedBranch] = useState(BRANCHES[0].id);
  const [address, setAddress] = useState("");
  const [instructions, setInstructions] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const activeBranch = BRANCHES.find((b) => b.id === selectedBranch) || BRANCHES[0];
  const deliveryFee = orderType === "delivery" ? 1000 : 0;
  const finalPrice = totalPrice + deliveryFee;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) return;

    setSubmitting(true);

    // 1. Build WhatsApp message text
    let orderText = `*NEW ORDER FROM TASTIA WEBSITE*\n`;
    orderText += `=========================\n\n`;
    orderText += `*Customer Details:*\n`;
    orderText += `- Name: ${name}\n`;
    orderText += `- Phone: ${phone}\n\n`;

    orderText += `*Order Type:* ${orderType === "delivery" ? "Delivery 🚗" : "Self-Pickup 🛍️"}\n`;
    orderText += `*Branch:* ${activeBranch.name}\n`;
    if (orderType === "delivery") {
      orderText += `*Delivery Address:* ${address}\n`;
    }
    orderText += `\n*Order Items:*\n`;

    cartItems.forEach((item, idx) => {
      orderText += `${idx + 1}. ${item.name} x${item.quantity} - ${formatCurrency(item.price * item.quantity)}\n`;
    });

    orderText += `\n=========================\n`;
    orderText += `*Subtotal:* ${formatCurrency(totalPrice)}\n`;
    if (orderType === "delivery") {
      orderText += `*Delivery Fee:* ${formatCurrency(deliveryFee)}\n`;
    }
    orderText += `*Grand Total:* ${formatCurrency(finalPrice)}\n`;

    if (instructions) {
      orderText += `\n*Special Instructions:* ${instructions}\n`;
    }

    // 2. Generate Link (Sending to main BRAND WhatsApp number, or Branch WhatsApp number)
    const targetWhatsApp = activeBranch.whatsapp || BRAND.whatsapp;
    const whatsappLink = generateWhatsAppLink(targetWhatsApp, orderText);

    // 3. Clear cart and open link
    setTimeout(() => {
      clearCart();
      window.open(whatsappLink, "_blank");
      // Redirect to simulated tracking page
      router.push(`/order/track?name=${encodeURIComponent(name)}&type=${orderType}&branch=${encodeURIComponent(activeBranch.name)}`);
      setSubmitting(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-zinc-50/50 pb-20">
      {/* HEADER */}
      <section className="bg-zinc-950 text-white py-10 md:py-14 text-center mb-10 md:mb-16">
        <div className="container-max mx-auto px-4 md:px-8 space-y-2">
          <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight" style={{ fontFamily: "Josefin Sans, sans-serif", color: "#d4d4d8" }}>
            Review & Checkout
          </h1>
          <p className="text-zinc-400 text-xs" style={{ fontFamily: "Poppins, sans-serif" }}>
            Confirm your items, choose your delivery option, and place your order directly via WhatsApp.
          </p>
        </div>
      </section>

      <section className="container-max mx-auto px-4 md:px-8  ">
        {cartItems.length === 0 ? (
          <div className="max-w-md mx-auto text-center bg-white p-10 rounded-2xl border shadow-sm space-y-6">
            <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center text-[#b52026] mx-auto">
              <ShoppingBag size={28} />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-zinc-900" style={{ fontFamily: "Josefin Sans, sans-serif" }}>Your Cart is Empty</h2>
              <p className="text-sm text-zinc-500" style={{ fontFamily: "Poppins, sans-serif" }}>
                You haven't added any items to your order yet.
              </p>
            </div>
            <Link href="/menu" className="btn btn-primary w-full py-3">
              Go to Menu
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-10 md:mt-16">
            {/* LEFT COLUMN: Checkout Details */}
            <form onSubmit={handleSubmitOrder} className="lg:col-span-7 bg-white rounded-2xl border p-6 md:p-8 space-y-6 shadow-sm">
              <h2 className="text-xl font-bold text-zinc-900 flex items-center gap-2 border-b pb-4" style={{ fontFamily: "Josefin Sans, sans-serif" }}>
                <span className="h-6 w-6 rounded-full bg-[#b52026]/10 text-[#b52026] flex items-center justify-center text-xs">1</span>
                Order Details
              </h2>

              {/* Order Type Toggle */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setOrderType("delivery")}
                  className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all cursor-pointer ${orderType === "delivery"
                    ? "border-[#b52026] bg-[#b52026]/5 text-[#b52026]"
                    : "border-zinc-200 text-zinc-500 hover:border-zinc-300"
                    }`}
                >
                  <Truck size={20} />
                  <span className="text-xs font-bold uppercase tracking-wide" style={{ fontFamily: "Poppins, sans-serif" }}>Delivery</span>
                </button>
                <button
                  type="button"
                  onClick={() => setOrderType("pickup")}
                  className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all cursor-pointer ${orderType === "pickup"
                    ? "border-[#b52026] bg-[#b52026]/5 text-[#b52026]"
                    : "border-zinc-200 text-zinc-500 hover:border-zinc-300"
                    }`}
                >
                  <MapPin size={20} />
                  <span className="text-xs font-bold uppercase tracking-wide" style={{ fontFamily: "Poppins, sans-serif" }}>Self-Pickup</span>
                </button>
              </div>

              {/* Input Fields */}
              <div className="space-y-4 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-700 uppercase" htmlFor="full-name" style={{ fontFamily: "Poppins, sans-serif" }}>Full Name *</label>
                    <input
                      id="full-name"
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
                    <label className="text-xs font-bold text-zinc-700 uppercase" htmlFor="phone-number" style={{ fontFamily: "Poppins, sans-serif" }}>WhatsApp Phone Number *</label>
                    <input
                      id="phone-number"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +234 803 123 4567"
                      className="w-full px-4 py-2.5 text-sm bg-zinc-50 border border-zinc-200 rounded-lg focus:bg-white focus:border-[#b52026] outline-none transition-all"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-700 uppercase" htmlFor="branch-selector" style={{ fontFamily: "Poppins, sans-serif" }}>Select Branch *</label>
                  <select
                    id="branch-selector"
                    value={selectedBranch}
                    onChange={(e) => setSelectedBranch(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-zinc-50 border border-zinc-200 rounded-lg focus:bg-white focus:border-[#b52026] outline-none transition-all"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {BRANCHES.map((b) => (
                      <option key={b.id} value={b.id}>
                        {b.name} ({b.address})
                      </option>
                    ))}
                  </select>
                </div>

                {orderType === "delivery" && (
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-700 uppercase" htmlFor="delivery-address" style={{ fontFamily: "Poppins, sans-serif" }}>Delivery Address *</label>
                    <textarea
                      id="delivery-address"
                      required
                      rows={3}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Full street address, estate, apartment number in Abuja"
                      className="w-full px-4 py-2.5 text-sm bg-zinc-50 border border-zinc-200 rounded-lg focus:bg-white focus:border-[#b52026] outline-none transition-all resize-none"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    />
                  </div>
                )}

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-700 uppercase" htmlFor="special-instructions" style={{ fontFamily: "Poppins, sans-serif" }}>Special Instructions (Optional)</label>
                  <textarea
                    id="special-instructions"
                    rows={2}
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    placeholder="e.g. Extra spicy chicken, don't include cutlery, etc."
                    className="w-full px-4 py-2.5 text-sm bg-zinc-50 border border-zinc-200 rounded-lg focus:bg-white focus:border-[#b52026] outline-none transition-all resize-none"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  />
                </div>
              </div>

              {/* Form Submission Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full btn btn-primary py-3.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-55"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {submitting ? (
                  <span>Processing Order...</span>
                ) : (
                  <>
                    <MessageSquare size={18} />
                    Confirm and Order via WhatsApp
                    <ChevronRight size={16} />
                  </>
                )}
              </button>
            </form>

            {/* RIGHT COLUMN: Order Review */}
            <div className="lg:col-span-5 space-y-6">
              {/* Review Items Card */}
              <div className="bg-white rounded-2xl border p-6 shadow-sm space-y-4">
                <h2 className="text-lg font-bold text-zinc-950 border-b pb-3" style={{ fontFamily: "Josefin Sans, sans-serif" }}>
                  Items in Order ({totalItems})
                </h2>
                <div className="divide-y max-h-[300px] overflow-y-auto pr-2">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 py-3 first:pt-0 last:pb-0">
                      <div className="relative w-14 h-14 rounded-md overflow-hidden bg-zinc-100 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="text-xs font-bold text-zinc-900 line-clamp-1" style={{ fontFamily: "Josefin Sans, sans-serif" }}>{item.name}</h4>
                          <p className="text-[10px] text-[#b52026] font-semibold mt-0.5">{formatCurrency(item.price)}</p>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <div className="flex items-center border rounded">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-1.5 py-0.5 hover:bg-zinc-50 text-zinc-500 text-xs"
                            >
                              <Minus size={10} />
                            </button>
                            <span className="px-2 text-[10px] font-bold text-zinc-800">{item.quantity}</span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-1.5 py-0.5 hover:bg-zinc-50 text-zinc-500 text-xs"
                            >
                              <Plus size={10} />
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="text-zinc-400 hover:text-red-600 transition-colors"
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Calculations Card */}
              <div className="bg-white rounded-2xl border p-6 shadow-sm space-y-4">
                <h2 className="text-lg font-bold text-zinc-950 border-b pb-3" style={{ fontFamily: "Josefin Sans, sans-serif" }}>
                  Summary
                </h2>
                <div className="space-y-2 text-sm text-zinc-600" style={{ fontFamily: "Poppins, sans-serif" }}>
                  <div className="flex items-center justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold text-zinc-900">{formatCurrency(totalPrice)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Delivery Fee</span>
                    <span className="font-semibold text-zinc-900">
                      {orderType === "delivery" ? formatCurrency(deliveryFee) : "Free"}
                    </span>
                  </div>
                  <div className="border-t pt-3 flex items-center justify-between text-zinc-900">
                    <span className="font-bold text-base">Grand Total</span>
                    <span className="font-black text-xl text-[#b52026]" style={{ fontFamily: "Josefin Sans, sans-serif" }}>
                      {formatCurrency(finalPrice)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
