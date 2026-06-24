// =========================================================
// TASTIA RESTAURANT — Business Data
// Source: tastiarestaurantng.com
// =========================================================

export const BRAND = {
  name: "Tastia Restaurant",
  tagline: "Nigeria's Premier Dining Experience",
  description:
    "Tastia Restaurant & Bakery is a major presence in Abuja's dining scene, recognized as the largest restaurant in the city with a seating capacity of approximately 230 guests and backed by an investment exceeding ₦500 million.",
  shortDescription:
    "At Tastia, we believe in making memories through amazing food and company. From our inventive and broad menu to our friendly hospitality, every aspect is intended to make you feel at home.",
  mission:
    "To deliver an exceptional dining experience that combines authentic Nigerian flavors with world-class hospitality, making every visit unforgettable.",
  vision:
    "To become the most celebrated restaurant brand in West Africa, setting the gold standard for quality, service, and culinary innovation.",
  founded: "2022",
  phone: "+234 908 000 0000",
  whatsapp: "+2349080000000",
  email: "info@tastiarestaurantng.com",
  website: "https://tastiarestaurantng.com",
  socials: {
    facebook: "https://web.facebook.com/tastiarestaurantnigeria",
    instagram: "https://www.instagram.com/tastiarestaurant_nigeria/",
    tiktok: "https://www.tiktok.com/@tastiarestaurant_nigeria",
    whatsapp: "https://wa.me/2349080000000",
  },
  stats: [
    { label: "Seating Capacity", value: "230+", suffix: "" },
    { label: "Menu Items", value: "100+", suffix: "" },
    { label: "Investment", value: "₦500M+", suffix: "" },
    { label: "Daily Guests", value: "500+", suffix: "" },
    { label: "Branches", value: "5+", suffix: "" },
    { label: "Years of Excellence", value: "4+", suffix: "" },
  ],
} as const;

// =========================================================
// BRANCHES / LOCATIONS
// =========================================================
export interface Branch {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  whatsapp: string;
  hours: string;
  hoursDetailed: { day: string; time: string }[];
  mapUrl: string;
  mapEmbed: string;
  features: string[];
  delivery: boolean;
  reservations: boolean;
  image: string;
  isMain: boolean;
}

export const BRANCHES: Branch[] = [
  {
    id: "Gwarinpa1",
    name: "Tastia 1 - Gwarinpa",
    address: "Plot 118, Off Tipper Garage By 3rd Avenue Gwarinpa",
    city: "Abuja",
    state: "FCT",
    phone: "+234 901 113 9970",
    whatsapp: "+2349011139970",
    hours: "Mon–Sun: 7:30 AM – 11:00 PM",
    hoursDetailed: [{ day: "Monday – Sunday", time: "7:30 AM – 11:00 PM" }],
    mapUrl:
      "https://maps.google.com/?q=Tastia+Restaurant+Plot+118+Off+Tipper+Garage+By+3rd+Avenue+Gwarinpa+Abuja",
    mapEmbed:
      "https://maps.google.com/maps?q=Tastia+Restaurant+Plot+118+Off+Tipper+Garage+By+3rd+Avenue+Gwarinpa+Abuja&t=&z=15&ie=UTF8&iwloc=&output=embed",
    features: [
      "Dine-In",
      "Takeaway",
      "Delivery",
      "VIP Lounge",
      "Private Events",
      "Parking",
      "Free WiFi",
    ],
    delivery: true,
    reservations: true,
    image: "/IMG_8878_50.jpeg",
    isMain: true,
  },
  {
    id: "gwarinpa2",
    name: "Tastia 2 - Gwarinpa",
    address: "Road 96, 3rd Avenue Opposite El-Boogie Plaza, Gwarinpa",
    city: "Abuja",
    state: "FCT",
    phone: "+234 901 113 9970",
    whatsapp: "+2349011139970",
    hours: "Mon–Sun: 7:30 AM – 3:00 AM",
    hoursDetailed: [{ day: "Monday – Sunday", time: "7:30 AM – 3:00 AM" }],
    mapUrl:
      "https://maps.google.com/?q=Tastia+Restaurant+Road+96+3rd+Avenue+Opposite+El-Boogie+Plaza+Gwarinpa+Abuja",
    mapEmbed:
      "https://maps.google.com/maps?q=Tastia+Restaurant+Road+96+3rd+Avenue+Opposite+El-Boogie+Plaza+Gwarinpa+Abuja&t=&z=15&ie=UTF8&iwloc=&output=embed",
    features: [
      "Dine-In",
      "Takeaway",
      "Delivery",
      "VIP Lounge",
      "Private Events",
      "Parking",
      "Free WiFi",
    ],
    delivery: true,
    reservations: true,
    image: "/IMG_8890_50.jpeg",
    isMain: false,
  },
  {
    id: "abakaliki",
    name: "Tastia 3 Abakaliki",
    address: " No 1 Brackenbury Street, by Water Works Road, Abakaliki",
    city: "Abakaliki",
    state: "Ebonyi",
    phone: "+234 901 113 9970",
    whatsapp: "+2349011139970",
    hours: "Mon–Sun: 8:00 AM – 11:00 PM",
    hoursDetailed: [{ day: "Monday – Sunday", time: "8:00 AM – 11:00 PM" }],
    mapUrl:
      "https://maps.google.com/?q=Tastia+Restaurant+No+1+Brackenbury+Street+by+Water+Works+Road+Abakaliki",
    mapEmbed:
      "https://maps.google.com/maps?q=Tastia+Restaurant+No+1+Brackenbury+Street+by+Water+Works+Road+Abakaliki&t=&z=15&ie=UTF8&iwloc=&output=embed",
    features: ["Dine-In", "Takeaway", "Delivery", "Parking", "Free WiFi"],
    delivery: true,
    reservations: true,
    image: "/WhatsApp-Image-.jpeg",
    isMain: false,
  },
  {
    id: "maitama",
    name: "Tastia 4 Maitama",
    address: "No 40, Pope John St. Off Gana St. Maitama FCT Abuja",
    city: "Abuja",
    state: "FCT",
    phone: "+234 901 113 9970",
    whatsapp: "+2349011139970",
    hours: "Mon–Sun: 8:00 AM – 9:00 PM",
    hoursDetailed: [{ day: "Monday – Sunday", time: "8:00 AM – 9:00 PM" }],
    mapUrl:
      "https://maps.google.com/?q=Tastia+Restaurant+No+40+Pope+John+St+Off+Gana+St+Maitama+FCT+Abuja",
    mapEmbed:
      "https://maps.google.com/maps?q=Tastia+Restaurant+No+40+Pope+John+St+Off+Gana+St+Maitama+FCT+Abuja&t=&z=15&ie=UTF8&iwloc=&output=embed",
    features: [
      "Dine-In",
      "Takeaway",
      "Delivery",
      "VIP Events",
      "Catering",
      "Valet Parking",
    ],
    delivery: true,
    reservations: true,
    image: "/1000534770-01_50.jpeg",
    isMain: false,
  },
  {
    id: "Aminu",
    name: "Tastia 5 Wuse 2",
    address: " No 73 Aminu Kano Crescent, Wuse 2, FCT Abuja",
    city: "Abuja",
    state: "FCT",
    phone: "+234 901 113 9970",
    whatsapp: "+2349011139970",
    hours: "Mon–Sun: 8:00 AM – 11:00 PM",
    hoursDetailed: [{ day: "Monday – Sunday", time: "8:00 AM – 11:00 PM" }],
    mapUrl:
      "https://maps.google.com/?q=Tastia+Restaurant+No+73+Aminu+Kano+Crescent+Wuse+2+FCT+Abuja",
    mapEmbed:
      "https://maps.google.com/maps?q=Tastia+Restaurant+No+73+Aminu+Kano+Crescent+Wuse+2+FCT+Abuja&t=&z=15&ie=UTF8&iwloc=&output=embed",
    features: ["Dine-In", "Takeaway", "Delivery", "Family Dining", "Parking"],
    delivery: true,
    reservations: false,
    image: "/IMG_8901_50.jpeg",
    isMain: false,
  },
  {
    id: "gwarinpa 3",
    name: "Tastia 6 Gwarinpa",
    address: " No.19, 6th Avenue Off Galadima Gate, Gwarinpa, FCT Abuja",
    city: "Abuja",
    state: "FCT",
    phone: "+234 901 113 9970",
    whatsapp: "+2349011139970",
    hours: "Mon–Sun: 8:00 AM – 12:00 AM",
    hoursDetailed: [{ day: "Monday – Sunday", time: "8:00 AM – 12:00 AM" }],
    mapUrl:
      "https://maps.google.com/?q=Tastia+Restaurant+No.19+6th+Avenue+Off+Galadima+Gate+Gwarinpa+FCT+Abuja",
    mapEmbed:
      "https://maps.google.com/maps?q=Tastia+Restaurant+No.19+6th+Avenue+Off+Galadima+Gate+Gwarinpa+FCT+Abuja&t=&z=15&ie=UTF8&iwloc=&output=embed",
    features: [
      "Dine-In",
      "Takeaway",
      "Delivery",
      "VIP Lounge",
      "Catering",
      "Valet Parking",
      "Free WiFi",
    ],
    delivery: true,
    reservations: true,
    image: "/Tastia_6th_Avenue_1_50.jpeg",
    isMain: false,
  },
  {
    id: "kubwa",
    name: "Tastia 7 Kubwa",
    address:
      " Adjacent Bakan Gizo Before Byazhin Tiper Garage, By Railway Train Station Kubwa",
    city: "Abuja",
    state: "FCT",
    phone: "+234 901 113 9970",
    whatsapp: "+2349011139970",
    hours: "Mon–Sun: 7:30 AM – 10:00 PM",
    hoursDetailed: [{ day: "Monday – Sunday", time: "7:30 AM – 10:00 PM" }],
    mapUrl:
      "https://maps.google.com/?q=Tastia+Restaurant+Adjacent+Bakan+Gizo+Before+Byazhin+Tipper+Garage+By+Railway+Train+Station+Kubwa",
    mapEmbed:
      "https://maps.google.com/maps?q=Tastia+Restaurant+Adjacent+Bakan+Gizo+Before+Byazhin+Tipper+Garage+By+Railway+Train+Station+Kubwa&t=&z=15&ie=UTF8&iwloc=&output=embed",
    features: [
      "Dine-In",
      "Takeaway",
      "Delivery",
      "VIP Lounge",
      "Catering",
      "Valet Parking",
      "Free WiFi",
    ],
    delivery: true,
    reservations: true,
    image: "/Kubwa-Ex-3.jpeg",
    isMain: false,
  },
  {
    id: "abakaliki2",
    name: "Tastia 8 Abakaliki",
    address:
      " No 79 Ogoja Road, Opposite Access Bank, Former Vegas, Abakaliki Ebonyi State",
    city: "Abakaliki",
    state: "Ebonyi",
    phone: "+234 901 113 9970",
    whatsapp: "+2349011139970",
    hours: "Mon–Sun: 7:30 AM – 10:00 PM",
    hoursDetailed: [{ day: "Monday – Sunday", time: "7:30 AM – 10:00 PM" }],
    mapUrl:
      "https://maps.google.com/?q=Tastia+Restaurant+No+79+Ogoja+Road+Opposite+Access+Bank+Former+Vegas+Abakaliki+Ebonyi+State",
    mapEmbed:
      "https://maps.google.com/maps?q=Tastia+Restaurant+No+79+Ogoja+Road+Opposite+Access+Bank+Former+Vegas+Abakaliki+Ebonyi+State&t=&z=15&ie=UTF8&iwloc=&output=embed",
    features: [
      "Dine-In",
      "Takeaway",
      "Delivery",
      "VIP Lounge",
      "Catering",
      "Valet Parking",
      "Free WiFi",
    ],
    delivery: true,
    reservations: true,
    image: "/ABAKALIKI.jpeg",
    isMain: false,
  },

  {
    id: "lifecamp",
    name: "Tastia 9 Lifecamp",
    address: "Abubakar Koko Ave, Life Camp, Abuja, Federal Capital Territory",
    city: "Abuja",
    state: "FCT",
    phone: "+234 901 113 9970",
    whatsapp: "+2349011139970",
    hours: "Mon–Sun: 7:30 AM – 10:00 PM",
    hoursDetailed: [{ day: "Monday – Sunday", time: "7:30 AM – 10:00 PM" }],
    mapUrl:
      "https://maps.google.com/?q=Tastia+Restaurant+Abubakar+Koko+Ave+Life+Camp+Abuja",
    mapEmbed:
      "https://maps.google.com/maps?q=Tastia+Restaurant+Abubakar+Koko+Ave+Life+Camp+Abuja&t=&z=15&ie=UTF8&iwloc=&output=embed",
    features: [
      "Dine-In",
      "Takeaway",
      "Delivery",
      "VIP Lounge",
      "Catering",
      "Valet Parking",
      "Free WiFi",
    ],
    delivery: true,
    reservations: true,
    image: "/Lifecamp_3_50.jpg",
    isMain: false,
  },
  {
    id: "gwarinpa2",
    name: "Tastia 10 Gwarinpa",
    address: " Danjam Plaza Plot C 38, 1st Avenue, Gwarinpa, Abuja FCT",
    city: "Abuja",
    state: "FCT",
    phone: "+234 901 113 9970",
    whatsapp: "+2349011139970",
    hours: "Mon–Sun: 8:00 AM – 11:50 PM",
    hoursDetailed: [{ day: "Monday – Sunday", time: "8:00 AM – 11:50 PM" }],
    mapUrl:
      "https://maps.google.com/?q=Tastia+Restaurant+Danjam+Plaza+Plot+C+38+1st+Avenue+Gwarinpa+Abuja+FCT",
    mapEmbed:
      "https://maps.google.com/maps?q=Tastia+Restaurant+Danjam+Plaza+Plot+C+38+1st+Avenue+Gwarinpa+Abuja+FCT&t=&z=15&ie=UTF8&iwloc=&output=embed",
    features: [
      "Dine-In",
      "Takeaway",
      "Delivery",
      "VIP Lounge",
      "Catering",
      "Valet Parking",
      "Free WiFi",
    ],
    delivery: true,
    reservations: true,
    image: "/Danjam_Exterior_3_50.jpeg",
    isMain: false,
  },
  {
    id: "lugbe",
    name: "Tastia 11 Lugbe",
    address: "No 607, 401 Road Federal Housing Lugbe, FCT Abuja",
    city: "Abuja",
    state: "FCT",
    phone: "+234 901 113 9970",
    whatsapp: "+2349011139970",
    hours: "Mon–Sun: 8:00 AM – 12:00 AM",
    hoursDetailed: [{ day: "Monday – Sunday", time: "8:00 AM – 12:00 AM" }],
    mapUrl:
      "https://maps.google.com/?q=Tastia+Restaurant+No+607+401+Road+Federal+Housing+Lugbe+FCT+Abuja",
    mapEmbed:
      "https://maps.google.com/maps?q=Tastia+Restaurant+No+607+401+Road+Federal+Housing+Lugbe+FCT+Abuja&t=&z=15&ie=UTF8&iwloc=&output=embed",
    features: [
      "Dine-In",
      "Takeaway",
      "Delivery",
      "VIP Lounge",
      "Catering",
      "Valet Parking",
      "Free WiFi",
    ],
    delivery: true,
    reservations: true,
    image: "/Lugbe-store-scaled.jpg",
    isMain: false,
  },
  {
    id: "Enugu",
    name: "Tastia 12 Akaraka, Enugu",
    address: "Opposite Mount Carmel Hospital, Akaraka, New Haven",
    city: "Enugu",
    state: "Enugu",
    phone: "+234 901 113 9970",
    whatsapp: "+2349011139970",
    hours: "Mon–Sun: 8:00 AM – 11:50 PM",
    hoursDetailed: [{ day: "Monday – Sunday", time: "8:00 AM – 11:50 PM" }],
    mapUrl:
      "https://maps.google.com/?q=Tastia+Restaurant+Opposite+Mount+Carmel+Hospital+Akaraka+New+Haven+Enugu",
    mapEmbed:
      "https://maps.google.com/maps?q=Tastia+Restaurant+Opposite+Mount+Carmel+Hospital+Akaraka+New+Haven+Enugu&t=&z=15&ie=UTF8&iwloc=&output=embed",
    features: [
      "Dine-In",
      "Takeaway",
      "Delivery",
      "VIP Lounge",
      "Catering",
      "Valet Parking",
      "Free WiFi",
    ],
    delivery: true,
    reservations: true,
    image: "/Enugu-Store-scaled.jpg",
    isMain: false,
  },
];

// =========================================================
// MENU CATEGORIES
// =========================================================
export interface MenuCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  image: string;
  itemCount: number;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "breakfast",
    name: "Breakfast",
    slug: "breakfast",
    description:
      "Start your day right with our hearty Nigerian breakfast platters",
    icon: "☀️",
    image:
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&q=80",
    itemCount: 18,
  },
  {
    id: "local-dishes",
    name: "Local Dishes",
    slug: "local-dishes",
    description: "Authentic Nigerian dishes crafted with traditional recipes",
    icon: "🍛",
    image:
      "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=600&q=80",
    itemCount: 24,
  },
  {
    id: "grills",
    name: "Grills & BBQ",
    slug: "grills",
    description: "Succulent grilled meats and smoky barbecue specialties",
    icon: "🥩",
    image:
      "https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80",
    itemCount: 15,
  },
  {
    id: "rice-dishes",
    name: "Rice Dishes",
    slug: "rice-dishes",
    description: "From jollof rice to fried rice and everything in between",
    icon: "🍚",
    image:
      "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&q=80",
    itemCount: 12,
  },
  {
    id: "soups-stews",
    name: "Soups & Stews",
    slug: "soups-stews",
    description: "Rich, flavorful Nigerian soups and hearty stews",
    icon: "🍲",
    image:
      "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=80",
    itemCount: 20,
  },
  {
    id: "snacks-small-chops",
    name: "Snacks & Small Chops",
    slug: "snacks-small-chops",
    description: "Perfect bites for events, parties, and casual snacking",
    icon: "🥟",
    image:
      "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=600&q=80",
    itemCount: 22,
  },
  {
    id: "shawarma-sandwiches",
    name: "Shawarma & Sandwiches",
    slug: "shawarma-sandwiches",
    description: "Freshly made wraps, shawarmas, and signature sandwiches",
    icon: "🌯",
    image:
      "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80",
    itemCount: 14,
  },
  {
    id: "bakery",
    name: "Bakery & Pastries",
    slug: "bakery",
    description: "Freshly baked bread, cakes, pastries, and desserts",
    icon: "🧁",
    image:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&q=80",
    itemCount: 30,
  },
  {
    id: "drinks",
    name: "Drinks & Beverages",
    slug: "drinks",
    description: "Fresh juices, smoothies, soft drinks, and hot beverages",
    icon: "🥤",
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80",
    itemCount: 25,
  },
  {
    id: "desserts",
    name: "Desserts",
    slug: "desserts",
    description:
      "Indulgent sweets, ice cream, and traditional Nigerian desserts",
    icon: "🍰",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80",
    itemCount: 16,
  },
];

// =========================================================
// FEATURED MENU ITEMS
// =========================================================
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  tags: string[];
  isPopular: boolean;
  isChefPick: boolean;
  isNew: boolean;
  spiceLevel?: 0 | 1 | 2 | 3;
  prepTime: string;
  calories?: number;
}

export const FEATURED_ITEMS: MenuItem[] = [
  {
    id: "jollof-rice-special",
    name: "Tastia Special Jollof Rice",
    description:
      "Our signature party jollof rice cooked over open fire with a rich tomato base, served with grilled chicken and plantain",
    price: 4500,
    category: "rice-dishes",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80",
    tags: ["Popular", "Nigerian", "Signature"],
    isPopular: true,
    isChefPick: true,
    isNew: false,
    spiceLevel: 2,
    prepTime: "20 mins",
    calories: 650,
  },
  {
    id: "peppersoup",
    name: "Catfish Pepper Soup",
    description:
      "Authentic Nigerian catfish pepper soup with aromatic spices, perfect for every occasion",
    price: 5500,
    category: "soups-stews",
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80",
    tags: ["Spicy", "Nigerian", "Healthy"],
    isPopular: true,
    isChefPick: false,
    isNew: false,
    spiceLevel: 3,
    prepTime: "25 mins",
    calories: 380,
  },
  {
    id: "suya-platter",
    name: "Premium Suya Platter",
    description:
      "Thinly sliced beef marinated in yaji spice blend, grilled to perfection, served with onions and tomatoes",
    price: 6500,
    category: "grills",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
    tags: ["Grilled", "Popular", "Street Food"],
    isPopular: true,
    isChefPick: true,
    isNew: false,
    spiceLevel: 2,
    prepTime: "15 mins",
    calories: 520,
  },
  {
    id: "egusi-soup",
    name: "Egusi Soup & Pounded Yam",
    description:
      "Rich egusi soup with assorted meats and stockfish, served with fresh pounded yam",
    price: 5000,
    category: "soups-stews",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80",
    tags: ["Traditional", "Nigerian", "Filling"],
    isPopular: true,
    isChefPick: false,
    isNew: false,
    spiceLevel: 1,
    prepTime: "30 mins",
    calories: 720,
  },
  {
    id: "tastia-shawarma",
    name: "Tastia Signature Shawarma",
    description:
      "Giant wrap loaded with seasoned chicken, crispy veggies, coleslaw, and our secret garlic sauce",
    price: 3500,
    originalPrice: 4000,
    category: "shawarma-sandwiches",
    image:
      "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80",
    tags: ["Popular", "Value", "Fast"],
    isPopular: true,
    isChefPick: false,
    isNew: false,
    spiceLevel: 1,
    prepTime: "10 mins",
    calories: 580,
  },
  {
    id: "grilled-tilapia",
    name: "Grilled Whole Tilapia",
    description:
      "Fresh whole tilapia marinated in Nigerian spices, grilled and served with jollof rice and fried plantain",
    price: 7500,
    category: "grills",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    tags: ["Seafood", "Premium", "Chef Pick"],
    isPopular: false,
    isChefPick: true,
    isNew: false,
    spiceLevel: 2,
    prepTime: "25 mins",
    calories: 480,
  },
  {
    id: "pancake-stack",
    name: "Premium Pancake Stack",
    description:
      "Fluffy buttermilk pancakes stacked high with fresh berries, maple syrup and whipped cream",
    price: 3800,
    category: "breakfast",
    image:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80",
    tags: ["Breakfast", "Sweet", "New"],
    isPopular: false,
    isChefPick: false,
    isNew: true,
    spiceLevel: 0,
    prepTime: "15 mins",
    calories: 620,
  },
  {
    id: "ofada-rice",
    name: "Ofada Rice & Ayamase",
    description:
      "Traditional Ofada rice served with rich, smoky Ayamase stew and assorted meats",
    price: 4800,
    category: "rice-dishes",
    image:
      "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=600&q=80",
    tags: ["Traditional", "Yoruba", "Premium"],
    isPopular: false,
    isChefPick: true,
    isNew: false,
    spiceLevel: 2,
    prepTime: "20 mins",
    calories: 690,
  },
];

// =========================================================
// SERVICES
// =========================================================
export interface Service {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  icon: string;
  image: string;
  features: string[];
  cta: { label: string; href: string };
}

export const SERVICES: Service[] = [
  {
    id: "dine-in",
    name: "Dine-In",
    description: "Experience the full Tastia ambiance with table service",
    longDescription:
      "Immerse yourself in Tastia's warm, elegant atmosphere. Our trained staff provide attentive table service while you enjoy our full menu in a comfortable, beautifully designed dining space.",
    icon: "🍽️",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    features: [
      "Table reservation available",
      "Full menu access",
      "Attentive table service",
      "Family and group dining",
      "Comfortable seating for 230+",
    ],
    cta: { label: "Reserve a Table", href: "/reservations" },
  },
  {
    id: "takeaway",
    name: "Takeaway",
    description: "Enjoy Tastia meals on your own time, at your own pace",
    longDescription:
      "Order your favourite Tastia meals and take them wherever you go. Our food is packaged in premium, eco-friendly containers that keep your food fresh and hot.",
    icon: "🛍️",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    features: [
      "Order online or by phone",
      "Ready in 15–30 minutes",
      "Premium eco-friendly packaging",
      "All menu items available",
      "Pickup from any branch",
    ],
    cta: { label: "Order Takeaway", href: "/order" },
  },
  {
    id: "delivery",
    name: "Home Delivery",
    description: "Fresh Tastia meals delivered straight to your doorstep",
    longDescription:
      "Tastia delivers to your home, office, or wherever you need us. Our delivery team ensures your food arrives hot, fresh, and exactly as ordered.",
    icon: "🚗",
    image:
      "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&q=80",
    features: [
      "Fast delivery within Abuja",
      "Real-time order tracking",
      "WhatsApp ordering support",
      "Delivery fee from ₦500",
      "Minimum order ₦2,000",
    ],
    cta: { label: "Order Delivery", href: "/order" },
  },
  {
    id: "catering",
    name: "Catering Services",
    description: "Professional catering for events of any size",
    longDescription:
      "From intimate gatherings to large-scale corporate events, Tastia's catering team brings restaurant-quality food and service directly to your venue. We handle everything from planning to serving.",
    icon: "🎉",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80",
    features: [
      "Events from 20 to 2,000+ guests",
      "Full setup and serving team",
      "Customizable menu packages",
      "Corporate and private events",
      "Indoor and outdoor catering",
    ],
    cta: { label: "Get a Quote", href: "/catering" },
  },
  {
    id: "vip-lounge",
    name: "VIP Lounge",
    description: "Exclusive private dining for special occasions",
    longDescription:
      "Our VIP Lounge offers an intimate, luxurious private dining experience. Perfect for business meetings, anniversaries, birthday celebrations, and exclusive gatherings requiring privacy and premium service.",
    icon: "👑",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    features: [
      "Private, soundproofed space",
      "Dedicated butler service",
      "Customizable décor",
      "Private bar access",
      "Seats up to 20 guests",
    ],
    cta: { label: "Book VIP Lounge", href: "/reservations?type=vip" },
  },
  {
    id: "outdoor-catering",
    name: "Outdoor Catering",
    description: "Bring the Tastia experience to any outdoor venue",
    longDescription:
      "Our outdoor catering service is perfect for garden parties, weddings, corporate picnics, and outdoor events. We bring all necessary equipment and our expert team ensures a seamless experience.",
    icon: "🌿",
    image:
      "https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=800&q=80",
    features: [
      "Full outdoor setup provided",
      "Tents and equipment included",
      "Live cooking stations",
      "Experienced event team",
      "Citywide coverage",
    ],
    cta: { label: "Book Outdoor Event", href: "/catering" },
  },
];

// =========================================================
// TESTIMONIALS
// =========================================================
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  date: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Amina Bello",
    role: "Regular Customer",
    content:
      "Tastia is hands down the best restaurant in Abuja. The jollof rice is absolutely divine, and the service is always top-notch. I bring all my guests here — they always leave impressed!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    date: "March 2025",
  },
  {
    id: "2",
    name: "Chukwuemeka Okonkwo",
    role: "Corporate Client",
    content:
      "We used Tastia for our company's annual dinner — 200+ guests — and they executed flawlessly. The food quality was exceptional, the setup was professional, and the team was incredibly responsive.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "January 2025",
  },
  {
    id: "3",
    name: "Fatima Al-Hassan",
    role: "Food Blogger",
    content:
      "As someone who reviews restaurants professionally, Tastia consistently impresses me. The egusi soup with pounded yam is authentic and perfectly seasoned. This is Nigerian cuisine done right!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    date: "April 2025",
  },
  {
    id: "4",
    name: "David Adeyemi",
    role: "Business Owner",
    content:
      "The VIP lounge is perfect for business meetings. Excellent privacy, beautiful ambiance, and the food is always fresh. Tastia has become my go-to for hosting clients.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/85.jpg",
    date: "February 2025",
  },
  {
    id: "5",
    name: "Ngozi Eze",
    role: "Wedding Planner",
    content:
      "I've recommended Tastia's catering to over 30 wedding clients. They never disappoint! The food is always excellent, they're punctual, and the setup is beautiful. My clients always thank me.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/91.jpg",
    date: "May 2025",
  },
  {
    id: "6",
    name: "Ibrahim Suleiman",
    role: "Government Official",
    content:
      "The professionalism at Tastia is unmatched in Abuja. From the moment you walk in to when you leave, every detail is attended to. The suya platter is my personal favourite!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    date: "March 2025",
  },
];

// =========================================================
// CATERING PACKAGES
// =========================================================
export const CATERING_PACKAGES = [
  {
    id: "basic",
    name: "Classic Package",
    priceFrom: 150000,
    guests: "20–50",
    description:
      "Perfect for intimate gatherings, small celebrations, and family events",
    includes: [
      "3 main dish selections",
      "2 side dishes",
      "1 dessert option",
      "Water and soft drinks",
      "Service staff (2 persons)",
      "Disposable tableware",
    ],
  },
  {
    id: "premium",
    name: "Premium Package",
    priceFrom: 400000,
    guests: "50–200",
    description:
      "Ideal for corporate events, birthday parties, and mid-size celebrations",
    includes: [
      "5 main dish selections",
      "4 side dishes",
      "2 dessert options",
      "Drinks station (water, juice, soft drinks)",
      "Service staff (5 persons)",
      "Premium tableware",
      "Event setup and cleanup",
      "Live cooking station (1)",
    ],
    popular: true,
  },
  {
    id: "luxury",
    name: "Luxury Package",
    priceFrom: 900000,
    guests: "200–2000+",
    description:
      "Full-service catering for large-scale events, weddings, and corporate galas",
    includes: [
      "Unlimited dish selections",
      "Buffet or plated service",
      "Full bar setup",
      "Dedicated event manager",
      "Service staff (10+ persons)",
      "Premium crockery and cutlery",
      "Event setup and teardown",
      "Live cooking stations (3)",
      "Décor consultation",
    ],
  },
];

// =========================================================
// BLOG POSTS (placeholder)
// =========================================================
export const BLOG_POSTS = [
  {
    id: "1",
    title: "The Secret Behind Tastia's Famous Jollof Rice",
    excerpt:
      "Discover the techniques and ingredients that make our jollof rice the talk of Abuja. From the right tomato base to the perfect smoky finish.",
    category: "Food Stories",
    date: "May 20, 2025",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
    slug: "secret-behind-tastia-jollof-rice",
  },
  {
    id: "2",
    title: "How to Plan the Perfect Corporate Catering Event",
    excerpt:
      "From venue selection to menu planning, our event experts share their top tips for creating a memorable corporate dining experience.",
    category: "Event Planning",
    date: "May 10, 2025",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80",
    slug: "plan-perfect-corporate-catering",
  },
  {
    id: "3",
    title: "5 Nigerian Dishes Every Food Lover Must Try",
    excerpt:
      "We explore five iconic Nigerian dishes that have captivated taste buds around the world — and why Tastia does them better than anyone else.",
    category: "Food Culture",
    date: "April 28, 2025",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=600&q=80",
    slug: "5-nigerian-dishes-food-lovers-must-try",
  },
];

// =========================================================
// GALLERY IMAGES
// =========================================================
export const GALLERY_IMAGES = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    alt: "Tastia Restaurant dining area",
    category: "Restaurant",
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
    alt: "Signature Jollof Rice",
    category: "Food",
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80",
    alt: "Catering event setup",
    category: "Events",
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80",
    alt: "Premium grilled meats",
    category: "Food",
  },
  {
    id: "5",
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    alt: "Restaurant interior",
    category: "Restaurant",
  },
  {
    id: "6",
    url: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=80",
    alt: "Fresh bakery items",
    category: "Bakery",
  },
  {
    id: "7",
    url: "https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=800&q=80",
    alt: "Outdoor event catering",
    category: "Events",
  },
  {
    id: "8",
    url: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    alt: "Suya preparation",
    category: "Food",
  },
  {
    id: "9",
    url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    alt: "VIP Lounge",
    category: "Restaurant",
  },
];
