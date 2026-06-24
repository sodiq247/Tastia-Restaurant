"use client";

import { BLOG_POSTS, BRAND } from "@/lib/data";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowLeft, Share2, Link as LinkIcon } from "lucide-react";
import { FacebookIcon, TwitterIcon } from "@/components/ui/SocialIcons";


export default function BlogPostDetail() {
  const params = useParams();
  const slug = params.slug as string;

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-zinc-50 flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-3xl font-black text-zinc-900" style={{ fontFamily: "Josefin Sans, sans-serif" }}>Article Not Found</h1>
        <p className="text-sm text-zinc-500 mt-2" style={{ fontFamily: "Poppins, sans-serif" }}>The blog article you are looking for does not exist or has been moved.</p>
        <Link href="/blog" className="btn btn-primary mt-6">
          Back to Blog
        </Link>
      </div>
    );
  }

  // Simulated detailed body content based on the article topic
  const getDetailedBody = () => {
    if (post.id === "1") {
      return (
        <>
          <p>
            Jollof Rice is more than just a dish; it's a cultural cornerstone across West Africa. Here at Tastia, we take pride in serving what many consider Abuja's finest Jollof. But what makes it so special? It comes down to a blend of patience, technique, and quality ingredients.
          </p>
          <h3 className="text-lg font-bold text-zinc-900 pt-4" style={{ fontFamily: "Josefin Sans, sans-serif" }}>1. The Tomato-Pepper Base (Tatashe & Shombo)</h3>
          <p>
            The foundation of any great Jollof is its sauce base. We blend red bell peppers (tatashe), fresh tomatoes, onions, and scotch bonnet peppers (atarodo) in precise ratios. This mixture is boiled down until the raw water content is fully evaporated, concentrating the sugars and flavors.
          </p>
          <h3 className="text-lg font-bold text-zinc-900 pt-4" style={{ fontFamily: "Josefin Sans, sans-serif" }}>2. Parboiling and Steaming</h3>
          <p>
            The secret to grains that don't clump lies in how they cook. We don't just boil the rice; we steam it in the seasoned stock. Using high-quality long-grain parboiled rice allows the grains to absorb the rich chicken stock, curry, thyme, and bay leaves without becoming mushy.
          </p>
          <h3 className="text-lg font-bold text-zinc-900 pt-4" style={{ fontFamily: "Josefin Sans, sans-serif" }}>3. The Smoke Factor</h3>
          <p>
            Authentic party Jollof must have that signature smoky flavor. We achieve this by letting the rice cook on a slightly scorched bottom in the cast-iron pot, trapping the steam and circulating the smoke throughout the entire dish. This creates an unforgettable, deep aroma that keeps our customers ordering over 10,000 times a day.
          </p>
        </>
      );
    }
    if (post.id === "2") {
      return (
        <>
          <p>
            Planning catering for a corporate event can be a high-pressure task. With hundreds of guests, VIP executives, and varied dietary requirements, ensuring everyone is fed and satisfied is critical. Here is our step-by-step checklist from Tastia's catering team.
          </p>
          <h3 className="text-lg font-bold text-zinc-900 pt-4" style={{ fontFamily: "Josefin Sans, sans-serif" }}>1. Understand the Event Format</h3>
          <p>
            A formal annual gala demands a buffet or plated multi-course service. A networking seminar, on the other hand, is best suited for quick small chops, finger foods, and drinks stations. Define this early as it guides your budget.
          </p>
          <h3 className="text-lg font-bold text-zinc-900 pt-4" style={{ fontFamily: "Josefin Sans, sans-serif" }}>2. Estimate Guest Count Accurately</h3>
          <p>
            Ensure you get RSVP confirmations at least 7 days before the event. When ordering packages (like Tastia's Classic or Luxury catering bundles), allow a 5-10% buffer in case of unexpected attendance.
          </p>
          <h3 className="text-lg font-bold text-zinc-900 pt-4" style={{ fontFamily: "Josefin Sans, sans-serif" }}>3. Cater to Dietary Diversity</h3>
          <p>
            In modern corporate dining, you must offer diverse options. Ensure you have vegetarian choices, protein-heavy options, and traditional swallow dishes alongside continental staples. Our planning managers consult with clients to design customized menus that delight every guest.
          </p>
        </>
      );
    }
    return (
      <>
        <p>
          Nigerian cuisine is a rich tapestry of colors, spices, and hearty ingredients. For anyone exploring the country's culinary scene, there are a few staple dishes that are absolute must-tries. From savory stews to pillowy swallows, here is our guide.
        </p>
        <h3 className="text-lg font-bold text-zinc-900 pt-4" style={{ fontFamily: "Josefin Sans, sans-serif" }}>1. Smoky Jollof Rice</h3>
        <p>
          Undoubtedly the most famous export, this spicy tomato-based rice dish is celebrated worldwide. Its rich seasoning, smoky profile, and perfect pairing with fried plantain (dodo) make it a staple at any celebration.
        </p>
        <h3 className="text-lg font-bold text-zinc-900 pt-4" style={{ fontFamily: "Josefin Sans, sans-serif" }}>2. Egusi Soup & Swallow</h3>
        <p>
          Egusi soup is made from ground melon seeds, leafy vegetables, palm oil, and rich assorted meats or stockfish. It is eaten with "swallow" (pounded yam, eba, or fufu), which is used to scoop up the savory soup.
        </p>
        <h3 className="text-lg font-bold text-zinc-900 pt-4" style={{ fontFamily: "Josefin Sans, sans-serif" }}>3. Suya (Spicy Grilled Meat)</h3>
        <p>
          Suya is a popular street food made from thinly sliced beef or chicken skewered and coated in a spicy peanut rub (yaji), then flame-grilled. It's smoky, spicy, and served with raw onions and tomatoes.
        </p>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-zinc-50/50 pb-20">
      {/* Article Hero Banner */}
      <section className="relative h-[50vh] min-h-[380px] bg-zinc-950 text-white flex items-end">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20" />
        </div>

        <div className="container-max mx-auto px-4 md:px-8 relative z-10 py-10 max-w-4xl space-y-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-white transition-colors"
          >
            <ArrowLeft size={12} /> Back to Journal
          </Link>
          
          <div className="space-y-2">
            <span className="bg-[#b52026] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm">
              {post.category}
            </span>
            <h1 className="text-2xl md:text-4xl font-black leading-tight" style={{ fontFamily: "Josefin Sans, sans-serif" }}>
              {post.title}
            </h1>
          </div>

          <div className="flex items-center gap-4 text-xs text-zinc-400 font-medium" style={{ fontFamily: "Poppins, sans-serif" }}>
            <span>{post.date}</span>
            <span>&bull;</span>
            <span className="flex items-center gap-0.5">
              <Clock size={12} /> {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="container-max mx-auto px-4 md:px-8 py-12 md:py-20 max-w-3xl">
        <div className="bg-white rounded-3xl border p-6 md:p-10 shadow-sm space-y-8">
          
          {/* Article Body */}
          <div
            className="prose prose-zinc max-w-none text-zinc-700 text-sm leading-relaxed space-y-6"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {getDetailedBody()}
          </div>

          {/* Share options */}
          <div className="border-t pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-zinc-500 font-semibold">
              <Share2 size={14} />
              <span>Share this article</span>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, "_blank")}
                className="p-2 rounded-full hover:bg-zinc-100 text-zinc-600 transition-colors cursor-pointer"
                title="Share on Facebook"
              >
                <FacebookIcon size={16} />
              </button>
              <button
                onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`, "_blank")}
                className="p-2 rounded-full hover:bg-zinc-100 text-zinc-600 transition-colors cursor-pointer"
                title="Share on Twitter"
              >
                <TwitterIcon size={16} />
              </button>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link copied to clipboard!");
                }}
                className="p-2 rounded-full hover:bg-zinc-100 text-zinc-600 transition-colors cursor-pointer"
                title="Copy Link"
              >
                <LinkIcon size={16} />
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
