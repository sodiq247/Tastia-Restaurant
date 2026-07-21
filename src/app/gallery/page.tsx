"use client";

import { useEffect, useRef } from "react";

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
      <section className="bg-zinc-950 text-white py-10 md:py-16 text-center">
        <div className="container-max mx-auto px-4 md:px-8 space-y-3">
          <span className="section-label text-[#ff2a13]">Visual Showcase</span>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight" style={{ fontFamily: "Josefin Sans, sans-serif" }}>
            Tastia Photo Gallery
          </h1>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto font-light" style={{ fontFamily: "Poppins, sans-serif" }}>
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
          }}
          title="Tastia Restaurant Gallery"
        />
      </section>
    </div>
  );
}

