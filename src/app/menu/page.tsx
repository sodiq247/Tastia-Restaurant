"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { BRAND, MENU_CATEGORIES, FEATURED_ITEMS, MenuItem } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Flame, Clock, SlidersHorizontal, Plus } from "lucide-react";

// Expand menu items to cover all categories to make the restaurant feel full and premium!
const ALL_MENU_ITEMS: MenuItem[] = [
  ...FEATURED_ITEMS,
  // Breakfast
  {
    id: "breakfast-1",
    name: "Full Nigerian Breakfast",
    description: "Fried yam, plantain, sweet potatoes, served with spicy egg sauce and choice of beverage",
    price: 3800,
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&q=80",
    tags: ["Traditional", "Breakfast"],
    isPopular: true,
    isChefPick: false,
    isNew: false,
    prepTime: "15 mins",
  },
  {
    id: "breakfast-2",
    name: "Akara & Pap (Custard)",
    description: "Golden brown fried bean cakes served with hot, creamy corn pap or custard",
    price: 2500,
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=600&q=80",
    tags: ["Traditional", "Healthy"],
    isPopular: false,
    isChefPick: false,
    isNew: false,
    prepTime: "10 mins",
  },
  // Local Dishes
  {
    id: "local-1",
    name: "Amala & Abula Special",
    description: "Soft amala served with ewedu soup, gbegiri (bean soup), and stewed assorted meat",
    price: 4800,
    category: "local-dishes",
    image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=600&q=80",
    tags: ["Signature", "Yoruba Special"],
    isPopular: true,
    isChefPick: true,
    isNew: false,
    spiceLevel: 2,
    prepTime: "20 mins",
  },
  {
    id: "local-2",
    name: "Pounded Yam with Efo Riro",
    description: "Fluffy pounded yam served with rich, leafy spinach stew prepared with locust beans and assorted meats",
    price: 5200,
    category: "local-dishes",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80",
    tags: ["Popular"],
    isPopular: true,
    isChefPick: false,
    isNew: false,
    spiceLevel: 1,
    prepTime: "15 mins",
  },
  // Grills
  {
    id: "grills-1",
    name: "Spicy Grilled Gizzard",
    description: "Peppered gizzards grilled with sweet bell peppers and onions, tossed in spicy yaji sauce",
    price: 3200,
    category: "grills",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80",
    tags: ["Spicy", "Bite"],
    isPopular: false,
    isChefPick: false,
    isNew: true,
    spiceLevel: 3,
    prepTime: "12 mins",
  },
  // Bakery & Pastries
  {
    id: "bakery-1",
    name: "Tastia Special Meat Pie",
    description: "Buttery, flaky pastry stuffed with minced beef, potatoes, and carrots, baked to golden perfection",
    price: 1200,
    category: "bakery",
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&q=80",
    tags: ["Best Seller", "Bakery"],
    isPopular: true,
    isChefPick: false,
    isNew: false,
    prepTime: "5 mins",
  },
  {
    id: "bakery-2",
    name: "Fresh Butter Bread",
    description: "Freshly baked, soft and sweet Nigerian style butter bread loaf",
    price: 1500,
    category: "bakery",
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&q=80",
    tags: ["Freshly Baked"],
    isPopular: false,
    isChefPick: false,
    isNew: false,
    prepTime: "2 mins",
  },
  // Drinks
  {
    id: "drinks-1",
    name: "Fresh Chapman Cocktail",
    description: "Traditional Nigerian mocktail made with soft drinks, bitters, cucumber, lemon, and mint",
    price: 2000,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80",
    tags: ["Refreshing", "Local Favourite"],
    isPopular: true,
    isChefPick: false,
    isNew: false,
    prepTime: "5 mins",
  },
  {
    id: "drinks-2",
    name: "Pineapple Ginger Smoothie",
    description: "Freshly blended pineapples with a kick of fresh ginger and honey sweetener",
    price: 2500,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80",
    tags: ["Healthy", "Fresh"],
    isPopular: false,
    isChefPick: false,
    isNew: true,
    prepTime: "7 mins",
  },
  // Desserts
  {
    id: "dessert-1",
    name: "Warm Chocolate Fudge Cake",
    description: "Decadent chocolate cake served warm with a scoop of vanilla bean ice cream",
    price: 3500,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80",
    tags: ["Sweet", "Luxury"],
    isPopular: true,
    isChefPick: true,
    isNew: false,
    prepTime: "10 mins",
  },
];

function MenuContent() {
  const { addToCart } = useCart();
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("cat") || "all";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [showFilters, setShowFilters] = useState(false);

  // Sync state if category parameter changes
  useEffect(() => {
    setActiveCategory(searchParams.get("cat") || "all");
  }, [searchParams]);

  // Filter items
  const filteredItems = ALL_MENU_ITEMS.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort items
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortBy === "price-low") {
      return a.price - b.price;
    }
    if (sortBy === "price-high") {
      return b.price - a.price;
    }
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    return 0; // Default sorting (insertion order / featured)
  });

  return (
    <div className="min-h-screen bg-zinc-50/50 pb-20">
      {/* 1. HEADER BANNER */}
      <section className="relative pt-12 pb-8 md:py-20 bg-zinc-950 text-white text-center">
        <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80"
            alt="Tastia Restaurant Menu Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container-max mx-auto px-4 md:px-8 relative z-10 space-y-4">
          <span className="section-label text-[#ff2a13]">Culinary Artistry</span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight" style={{ fontFamily: "Josefin Sans, sans-serif", color: "#d4d4d8" }}>
            The Tastia Menu
          </h1>
          <p className="text-sm md:text-base text-zinc-400 max-w-xl mx-auto font-light" style={{ fontFamily: "Poppins, sans-serif" }}>
            Nigeria's finest local delicacies, premium continental dishes, delicious grills, and bakery items prepared daily by our master chefs.
          </p>
        </div>
      </section>

      {/* 2. SEARCH & CATEGORIES CONTROL */}
      <section className="sticky top-[70px] z-30 bg-white border-b border-zinc-200/80 shadow-sm py-4">
        <div className="container-max mx-auto px-4 md:px-8 space-y-4">
          {/* Top row: Search and sort */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-zinc-400 pointer-events-none">
                <Search size={16} />
              </span>
              <input
                type="text"
                placeholder="Search food items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm bg-zinc-100 border border-transparent rounded-lg focus:bg-white focus:border-[#b52026] outline-none transition-all"
                style={{ fontFamily: "Poppins, sans-serif" }}
              />
            </div>

            {/* Sort & Filter Toggle */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs text-zinc-500 font-medium hidden sm:inline" style={{ fontFamily: "Poppins, sans-serif" }}>Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-zinc-100 border border-transparent rounded-lg px-3 py-2 text-xs font-semibold text-zinc-700 outline-none focus:bg-white focus:border-[#b52026] transition-all"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  <option value="default">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-1.5 bg-zinc-100 border border-transparent hover:bg-zinc-200/70 rounded-lg px-3 py-2 text-xs font-semibold text-zinc-700 transition-colors cursor-pointer"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <SlidersHorizontal size={14} />
                <span>Filter</span>
              </button>
            </div>
          </div>

          {/* Category Tabs list */}
          <div className="overflow-x-auto -mx-4 px-4 pb-1 md:pb-0 scrollbar-none">
            <div className="flex items-center gap-2 md:flex-wrap">
              <button
                onClick={() => setActiveCategory("all")}
                className={`flex-shrink-0 px-4 py-2 text-xs font-bold rounded-full uppercase tracking-wide transition-all cursor-pointer ${activeCategory === "all"
                  ? "bg-[#b52026] text-white"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200/50"
                  }`}
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                All Menu
              </button>
              {MENU_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex-shrink-0 px-4 py-2 text-xs font-bold rounded-full uppercase tracking-wide transition-all flex items-center gap-1.5 cursor-pointer ${activeCategory === cat.id
                    ? "bg-[#b52026] text-white"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200/50"
                    }`}
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. MENU ITEMS GRID */}
      <section className="container-max mx-auto px-4 md:px-8 py-12 md:py-20">
        <AnimatePresence mode="wait">
          {sortedItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 bg-white rounded-2xl border shadow-sm space-y-4"
            >
              <p className="text-zinc-500 text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>No dishes found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="btn btn-outline py-2 px-6"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Reset Filters
              </button>
            </motion.div>
          ) : (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10 md:py-16"
            >
              {sortedItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  className="bg-white rounded-2xl overflow-hidden border border-zinc-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  {/* Food Image */}
                  <div className="relative aspect-[4/3] w-full bg-zinc-100 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    {item.spiceLevel !== undefined && item.spiceLevel > 0 && (
                      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md rounded-full p-1.5 text-orange-500 flex items-center gap-0.5 z-10">
                        <Flame size={12} fill="currentColor" />
                        {item.spiceLevel > 1 && <Flame size={12} fill="currentColor" />}
                        {item.spiceLevel > 2 && <Flame size={12} fill="currentColor" />}
                      </div>
                    )}
                    <div className="absolute bottom-3 left-3 flex flex-wrap gap-1 z-10">
                      {item.tags.map((tag, i) => (
                        <span key={i} className="bg-zinc-950/80 backdrop-blur-md text-white text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-zinc-900 line-clamp-1" style={{ fontFamily: "Josefin Sans, sans-serif" }}>
                        {item.name}
                      </h3>
                      <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2" style={{ fontFamily: "Poppins, sans-serif" }}>
                        {item.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      {/* Specs */}
                      <div className="flex items-center justify-between text-[10px] text-zinc-400 font-medium">
                        <div className="flex items-center gap-1">
                          <Clock size={10} />
                          <span>{item.prepTime}</span>
                        </div>
                        {item.calories && (
                          <div>
                            <span>{item.calories} kcal</span>
                          </div>
                        )}
                      </div>

                      {/* Buy Action */}
                      <div className="flex items-center justify-between pt-2.5 border-t border-zinc-50">
                        <span className="text-[#b52026] text-base font-black" style={{ fontFamily: "Josefin Sans, sans-serif" }}>
                          {formatCurrency(item.price)}
                        </span>
                        <button
                          onClick={() => addToCart(item)}
                          className="btn btn-primary py-1.5 px-3 rounded-md flex items-center gap-1 text-xs cursor-pointer"
                          style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          <Plus size={12} />
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}

export default function Menu() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center text-sm font-semibold text-zinc-500">
        Loading Menu...
      </div>
    }>
      <MenuContent />
    </Suspense>
  );
}
