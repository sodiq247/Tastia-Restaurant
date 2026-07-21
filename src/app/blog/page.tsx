"use client";

import { BLOG_POSTS } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-zinc-50/50 pb-20">
      {/* HEADER */}
      <section className="bg-zinc-950 text-white py-10 md:py-16 text-center mb-10 md:mb-16">
        <div className="container-max mx-auto px-4 md:px-8 space-y-3">
          <span className="section-label text-[#ff2a13]">Tastia Journal</span>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight" style={{ fontFamily: "Josefin Sans, sans-serif", color: "#d4d4d8" }}>
            Articles & Food Stories
          </h1>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto font-light" style={{ fontFamily: "Poppins, sans-serif" }}>
            Explore secrets behind our recipes, guides for corporate event planning, and reviews of traditional Nigerian flavors.
          </p>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="container-max mx-auto px-4 md:px-8 py-12 md:py-20 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 md:mt-16">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden border border-zinc-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Visual */}
                <div className="relative aspect-[16/10] w-full bg-zinc-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                  <span className="absolute top-3 left-3 bg-[#b52026] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm">
                    {post.category}
                  </span>
                </div>

                {/* Details */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-1.5 text-[10px] text-zinc-400 font-semibold" style={{ fontFamily: "Poppins, sans-serif" }}>
                    <span>{post.date}</span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-0.5">
                      <Clock size={10} /> {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-zinc-950 line-clamp-2" style={{ fontFamily: "Josefin Sans, sans-serif" }}>
                    {post.title}
                  </h2>

                  <p className="text-xs text-zinc-500 leading-relaxed line-clamp-3" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/blog/${post.slug}`}
                  className="btn btn-outline py-2 px-4 text-xs flex items-center justify-center gap-1.5 cursor-pointer font-bold w-full"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Read Full Article
                  <ArrowRight size={12} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
