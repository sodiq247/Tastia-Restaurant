"use client";

import { useSearchParams } from "next/navigation";
import { BRAND, BRANCHES } from "@/lib/data";
import { generateWhatsAppLink } from "@/lib/utils";
import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Clock, Phone, MapPin, MessageSquare, ArrowLeft } from "lucide-react";

function TrackContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "Valued Customer";
  const type = searchParams.get("type") || "delivery";
  const branchName = searchParams.get("branch") || "Tastia Wuse 2";

  // Simulated active step state (0 = received, 1 = preparing, 2 = dispatched, 3 = delivered)
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    // Advance progress simulation
    const timer1 = setTimeout(() => setActiveStep(2), 20000); // 20s to dispatch
    const timer2 = setTimeout(() => setActiveStep(3), 45000); // 45s to complete
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const steps = [
    { label: "Order Received", desc: "Your order details have been sent to our kitchen team." },
    { label: "Preparing", desc: "Our chefs are cooking your meals fresh to order." },
    {
      label: type === "delivery" ? "Out for Delivery" : "Ready for Pickup",
      desc: type === "delivery" ? "Our dispatcher is heading to your address." : "Please visit the counter at the branch to collect your order.",
    },
    { label: "Completed", desc: "Enjoy your delicious Tastia meals!" },
  ];

  const handleSupportClick = () => {
    const matchedBranch = BRANCHES.find((b) => b.name === branchName) || BRANCHES[0];
    const text = `Hi ${matchedBranch.name}, my name is ${name}. I just ordered from your website and want to follow up on my order progress.`;
    const targetPhone = matchedBranch.whatsapp || BRAND.whatsapp;
    window.open(generateWhatsAppLink(targetPhone, text), "_blank");
  };

  return (
    <div className="min-h-screen bg-zinc-50/50 pb-20">
      <section className="bg-zinc-950 text-white py-10 md:py-14 text-center">
        <div className="container-max mx-auto px-4 md:px-8 space-y-2">
          <h1 className="text-3xl font-black uppercase tracking-tight" style={{ fontFamily: "Josefin Sans, sans-serif" }}>
            Track Your Order
          </h1>
          <p className="text-zinc-400 text-xs" style={{ fontFamily: "Poppins, sans-serif" }}>
            Thank you, {name}! Your order has been placed.
          </p>
        </div>
      </section>

      <section className="container-max mx-auto px-4 md:px-8 py-10">
        <div className="max-w-2xl mx-auto grid grid-cols-1 gap-8">
          {/* Card: Status progress */}
          <div className="bg-white rounded-2xl border p-6 md:p-8 shadow-sm space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-6">
              <div className="space-y-1">
                <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Estimated Time Arrival</div>
                <div className="text-xl font-bold text-zinc-900 flex items-center gap-2" style={{ fontFamily: "Josefin Sans, sans-serif" }}>
                  <Clock className="text-[#b52026]" size={20} />
                  <span>25 – 40 Minutes</span>
                </div>
              </div>
              <div>
                <span className="inline-block bg-green-50 text-green-700 text-xs font-bold uppercase px-3 py-1.5 rounded-full border border-green-200" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Active Order
                </span>
              </div>
            </div>

            {/* Stepper Grid */}
            <div className="relative pl-8 space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-zinc-100">
              {steps.map((step, idx) => {
                const isCompleted = idx < activeStep;
                const isActive = idx === activeStep;
                const isPending = idx > activeStep;

                return (
                  <div key={idx} className="relative space-y-1">
                    {/* Stepper Dot */}
                    <div className="absolute -left-[35px] top-1">
                      {isCompleted ? (
                        <div className="h-[24px] w-[24px] rounded-full bg-green-500 text-white flex items-center justify-center shadow-md">
                          <CheckCircle2 size={16} />
                        </div>
                      ) : isActive ? (
                        <div className="h-[24px] w-[24px] rounded-full bg-[#b52026] text-white flex items-center justify-center shadow-md animate-pulse">
                          <Loader2 size={12} className="animate-spin" />
                        </div>
                      ) : (
                        <div className="h-[24px] w-[24px] rounded-full bg-zinc-200 text-zinc-400 flex items-center justify-center border border-white" />
                      )}
                    </div>

                    {/* Content */}
                    <h3 className={`text-base font-bold ${isActive ? "text-[#b52026]" : isCompleted ? "text-zinc-800" : "text-zinc-400"}`} style={{ fontFamily: "Josefin Sans, sans-serif" }}>
                      {step.label}
                    </h3>
                    <p className={`text-xs ${isActive ? "text-zinc-700" : isCompleted ? "text-zinc-500" : "text-zinc-400"}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Card: Details Summary & Support */}
          <div className="bg-white rounded-2xl border p-6 shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div className="space-y-4 text-xs text-zinc-500" style={{ fontFamily: "Poppins, sans-serif" }}>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 text-[#b52026] flex-shrink-0" />
                <div>
                  <div className="font-bold text-zinc-700">Origin Branch</div>
                  <div>{branchName}</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={14} className="mt-0.5 text-[#b52026] flex-shrink-0" />
                <div>
                  <div className="font-bold text-zinc-700">Recipient Phone</div>
                  <div>{type === "delivery" ? "Direct Delivery" : "Collection Counter"}</div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleSupportClick}
                className="w-full btn btn-outline flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold cursor-pointer"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <MessageSquare size={14} />
                Contact Branch WhatsApp
              </button>
              <Link
                href="/menu"
                className="w-full btn bg-zinc-100 hover:bg-zinc-200/70 text-zinc-700 transition-colors py-2.5 text-xs text-center justify-center font-bold flex items-center gap-1 cursor-pointer"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <ArrowLeft size={12} />
                Back to Menu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function OrderTrack() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center text-sm font-semibold text-zinc-500">
        Loading Tracker...
      </div>
    }>
      <TrackContent />
    </Suspense>
  );
}
