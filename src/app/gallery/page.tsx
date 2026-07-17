export default function GalleryPage() {
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

      {/* EMBEDDED GALLERY */}
      <section className="container-max mx-auto px-4 md:px-8 pt-6 md:pt-8 pb-16 md:pb-24">
        <iframe
          src="https://amenaa.odobba.com/api/v1/public/gallery/tMcSzQEzJEWgF8xrTAA6CZ3Vfy808vr8/embed"
          style={{ width: "100%", border: 0, minHeight: "480px" }}
          title="Tastia Gallery"
        />
      </section>
    </div>
  );
}
