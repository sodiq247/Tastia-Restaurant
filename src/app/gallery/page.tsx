"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function GalleryPage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data && e.data.amenaaGalleryHeight && iframeRef.current) {
        iframeRef.current.style.height = `${e.data.amenaaGalleryHeight}px`;
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50/50 pb-20">
      {/* HEADER */}
      <section className="relative bg-zinc-950 text-white py-16 md:py-24 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80"
            alt="Tastia Photo Gallery Ambiance"
            fill
            className="object-cover opacity-70 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/40" />
        </div>

        <div className="container-max mx-auto px-4 md:px-8 space-y-3 relative z-10">
          <span className="section-label text-[#ff2a13] bg-zinc-950/70 px-4 py-1 rounded-full border border-[#ff2a13]/30 inline-block backdrop-blur-md">
            Visual Showcase
          </span>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white drop-shadow-md" style={{ fontFamily: "Josefin Sans, sans-serif", color: "#d4d4d8" }}>
            Tastia Photo Gallery
          </h1>
          <p className="text-zinc-200 text-sm md:text-base max-w-xl mx-auto font-light drop-shadow-sm" style={{ fontFamily: "Poppins, sans-serif" }}>
            Explore photos of our delicious dishes, luxurious restaurant interiors, VIP lounges, and catered outdoor events.
          </p>
        </div>
      </section>

      {/* AMENAA GALLERY EMBED */}
      <section className="container-max mx-auto px-4 md:px-8 py-8 md:py-12">
        <iframe
          ref={iframeRef}
          id="amenaa-gallery"
          src="https://amenaa.app/api/v1/public/gallery/tMcSzQEzJEWgF8xrTAA6CZ3Vfy808vr8/embed"
          allowFullScreen
          style={{
            width: "100%",
            border: 0,
            minHeight: "480px",
            marginTop: "60px",
          }}
          title="Tastia Restaurant Gallery"
        />
      </section>
    </div>
  );
}



