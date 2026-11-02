import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, Search, Heart, User, ShieldCheck, Truck, RefreshCw, 
  Percent, Sparkles, ChevronRight, Star, Check, X, Menu, Filter, 
  ArrowUpDown, SlidersHorizontal, ChevronDown, ChevronUp, Info, 
  Phone, Mail, MapPin, CreditCard, Lock, CheckCircle2, AlertCircle,
  HelpCircle, ChevronLeft, Gift, Zap
} from 'lucide-react';

// --- DATA: 40 SMARTPHONES CATALOG ---
const SMARTPHONES = [
  // Apple
  {
    id: 1,
    brand: "Apple",
    model: "iPhone 16 Pro Max",
    category: "Apple iPhones",
    price: 144900,
    originalPrice: 159900,
    discount: 9,
    rating: 4.9,
    reviewsCount: 1420,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80",
    colors: ["Desert Titanium", "Natural Titanium", "White Titanium", "Black Titanium"],
    storage: ["256GB", "512GB", "1TB"],
    display: "6.9-inch Super Retina XDR OLED",
    processor: "A18 Pro chip",
    camera: "48MP Fusion + 48MP Ultra Wide + 12MP 5x Telephoto",
    battery: "4685 mAh",
    charging: "25W MagSafe, 50% in 30 mins",
    fiveG: true,
    pros: ["Stunning 6.9-inch display", "Exceptional A18 Pro performance", "Top-tier camera system", "Longer battery life"],
    cons: ["Very expensive", "Heavy in hand"],
    description: "The ultimate iPhone with the largest display ever on an iPhone, camera control, Apple Intelligence, and the breakthrough A18 Pro chip."
  },
  {
    id: 2,
    brand: "Apple",
    model: "iPhone 16 Pro",
    category: "Apple iPhones",
    price: 119900,
    originalPrice: 129900,
    discount: 8,
    rating: 4.8,
    reviewsCount: 980,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80",
    colors: ["Desert Titanium", "Natural Titanium", "White Titanium", "Black Titanium"],
    storage: ["128GB", "256GB", "512GB", "1TB"],
    display: "6.3-inch Super Retina XDR OLED",
    processor: "A18 Pro chip",
    camera: "48MP Fusion + 48MP Ultra Wide + 12MP 5x Telephoto",
    battery: "3582 mAh",
    charging: "25W MagSafe wireless charging",
    fiveG: true,
    pros: ["Compact professional powerhouse", "Stunning titanium build", "Pro camera upgrades"],
    cons: ["Battery life is moderate compared to Max model"],
    description: "Built for Apple Intelligence with Grade 5 titanium design, Camera Control, and 4K 120 fps Dolby Vision recording."
  },
  {
    id: 3,
    brand: "Apple",
    model: "iPhone 16",
    category: "Apple iPhones",
    price: 79900,
    originalPrice: 89900,
    discount: 11,
    rating: 4.7,
    reviewsCount: 2150,
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=600&q=80",
    colors: ["Ultramarine", "Teal", "Pink", "White", "Black"],
    storage: ["128GB", "256GB", "512GB"],
    display: "6.1-inch Super Retina XDR OLED",
    processor: "A18 chip",
    camera: "48MP Fusion + 12MP Ultra Wide",
    battery: "3561 mAh",
    charging: "Fast wireless & USB-C charging",
    fiveG: true,
    pros: ["Action button and Camera control", "Vibrant new colors", "Apple Intelligence ready", "Great value"],
    cons: ["60Hz refresh rate display"],
    description: "Supercharged by the A18 chip, featuring advanced dual-camera system, customizable Action button, and stunning vibrant color finishes."
  },
  {
    id: 4,
    brand: "Apple",
    model: "iPhone 15",
    category: "Apple iPhones",
    price: 69900,
    originalPrice: 79900,
    discount: 13,
    rating: 4.6,
    reviewsCount: 3400,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    colors: ["Pink", "Yellow", "Green", "Blue", "Black"],
    storage: ["128GB", "256GB", "512GB"],
    display: "6.1-inch Super Retina XDR with Dynamic Island",
    processor: "A16 Bionic chip",
    camera: "48MP Main + 12MP Ultra Wide",
    battery: "3349 mAh",
    charging: "USB-C universal charging",
    fiveG: true,
    pros: ["Dynamic Island is fantastic", "USB-C port integration", "Bright gorgeous screen"],
    cons: ["Standard refresh rate"],
    description: "Featuring Dynamic Island, a 48MP Main camera, and colour-infused glass design with sturdy aerospace-grade aluminium."
  },
  {
    id: 5,
    brand: "Apple",
    model: "iPhone 14",
    category: "Apple iPhones",
    price: 58900,
    originalPrice: 69900,
    discount: 16,
    rating: 4.5,
    reviewsCount: 4200,
    image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=600&q=80",
    colors: ["Midnight", "Purple", "Starlight", "Blue", "Red"],
    storage: ["128GB", "256GB", "512GB"],
    display: "6.1-inch Super Retina XDR OLED",
    processor: "A15 Bionic chip with 5-core GPU",
    camera: "12MP Main + 12MP Ultra Wide",
    battery: "3279 mAh",
    charging: "MagSafe wireless charging",
    fiveG: true,
    pros: ["Reliable everyday performance", "Great battery life", "Crash Detection safety feature"],
    cons: ["Older generation processor"],
    description: "A remarkably capable device with a phenomenal dual-camera system, Crash Detection, and all-day battery life."
  },

  // Samsung Galaxy
  {
    id: 6,
    brand: "Samsung",
    model: "Samsung Galaxy S25 Ultra",
    category: "Samsung Galaxy",
    price: 129999,
    originalPrice: 144999,
    discount: 10,
    rating: 4.9,
    reviewsCount: 890,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80",
    colors: ["Titanium Gray", "Titanium Black", "Titanium Violet", "Titanium Silver"],
    storage: ["256GB", "512GB", "1TB"],
    display: "6.8-inch Dynamic AMOLED 2X, 120Hz",
    processor: "Snapdragon 8 Elite for Galaxy",
    camera: "200MP Main + 50MP Periscope + 50MP Ultra Wide + 10MP Telephoto",
    battery: "5000 mAh",
    charging: "45W Super Fast Charging",
    fiveG: true,
    pros: ["Ultimate quad camera setup", "Built-in S Pen", "Blazing Snapdragon 8 Elite", "Gorgeous anti-reflective display"],
    cons: ["High price point"],
    description: "The pinnacle of Android engineering featuring Galaxy AI, revolutionary 200MP camera, built-in S Pen, and titanium durability."
  },
  {
    id: 7,
    brand: "Samsung",
    model: "Samsung Galaxy S25+",
    category: "Samsung Galaxy",
    price: 99999,
    originalPrice: 109999,
    discount: 9,
    rating: 4.8,
    reviewsCount: 540,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=80",
    colors: ["Icy Blue", "Silver Shadow", "Navy", "Mint"],
    storage: ["256GB", "512GB"],
    display: "6.7-inch QHD+ Dynamic AMOLED 2X",
    processor: "Snapdragon 8 Elite / Exynos 2500",
    camera: "50MP Main + 10MP Telephoto + 12MP Ultra Wide",
    battery: "4900 mAh",
    charging: "45W Fast Charging",
    fiveG: true,
    pros: ["Sleek slim bezels", "Stunning QHD+ screen", "Massive battery capacity"],
    cons: ["Lacks S Pen"],
    description: "Sleek, powerful, and intelligent. Offers immersive viewing on a large screen with long-lasting battery and advanced Galaxy AI."
  },
  {
    id: 8,
    brand: "Samsung",
    model: "Samsung Galaxy S25",
    category: "Samsung Galaxy",
    price: 79999,
    originalPrice: 89999,
    discount: 11,
    rating: 4.7,
    reviewsCount: 780,
    image: "https://images.unsplash.com/photo-1583573636224-b32d169acddf?auto=format&fit=crop&w=600&q=80",
    colors: ["Silver Shadow", "Navy", "Icy Blue", "Sparkling Pink"],
    storage: ["128GB", "256GB"],
    display: "6.2-inch FHD+ Dynamic AMOLED 2X",
    processor: "Snapdragon 8 Elite",
    camera: "50MP Main + 10MP Telephoto + 12MP Ultra Wide",
    battery: "4000 mAh",
    charging: "25W Fast Charging",
    fiveG: true,
    pros: ["Compact and lightweight", "Flagship performance in small form factor", "Full Galaxy AI suite"],
    cons: ["Battery capacity is average"],
    description: "Pocket-sized perfection with uncompromising flagship performance, stunning camera capabilities, and cutting-edge AI assistance."
  },
  {
    id: 9,
    brand: "Samsung",
    model: "Samsung Galaxy S24 FE",
    category: "Samsung Galaxy",
    price: 54999,
    originalPrice: 65999,
    discount: 16,
    rating: 4.6,
    reviewsCount: 620,
    image: "https://images.unsplash.com/photo-1546054454-aa26bc2ab773?auto=format&fit=crop&w=600&q=80",
    colors: ["Graphite", "Mint", "Gray", "Blue"],
    storage: ["128GB", "256GB"],
    display: "6.7-inch Dynamic AMOLED 2X, 120Hz",
    processor: "Exynos 2400e",
    camera: "50MP Main + 8MP Telephoto + 12MP Ultra Wide",
    battery: "4700 mAh",
    charging: "25W Fast Charging",
    fiveG: true,
    pros: ["Flagship features at lower price", "Big 6.7-inch display", "Robust build quality"],
    cons: ["Chunky bezels compared to S series"],
    description: "Fan Edition powerhouse loaded with flagship features, premium camera tools, and a gorgeous immersive display."
  },
  {
    id: 10,
    brand: "Samsung",
    model: "Samsung Galaxy A56",
    category: "Samsung Galaxy",
    price: 36999,
    originalPrice: 42999,
    discount: 14,
    rating: 4.5,
    reviewsCount: 1100,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=600&q=80",
    colors: ["Awesome Iceblue", "Awesome Lilac", "Awesome Navy", "Awesome Lemon"],
    storage: ["128GB", "256GB"],
    display: "6.6-inch Super AMOLED, 120Hz",
    processor: "Exynos 1580",
    camera: "50MP OIS Main + 12MP Ultra Wide + 5MP Macro",
    battery: "5000 mAh",
    charging: "25W Fast Charging",
    fiveG: true,
    pros: ["IP67 water resistance", "Long software support", "Brilliant Super AMOLED screen"],
    cons: ["Charger not in box"],
    description: "The ultimate mid-range champion with premium metal frame, stunning camera with OIS, and reliable 2-day battery life."
  },

  // OnePlus
  {
    id: 11,
    brand: "OnePlus",
    model: "OnePlus 13",
    category: "OnePlus",
    price: 69999,
    originalPrice: 79999,
    discount: 12,
    rating: 4.8,
    reviewsCount: 1250,
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=600&q=80",
    colors: ["Midnight Shadow", "Emerald Green", "Arctic White"],
    storage: ["256GB", "512GB", "1TB"],
    display: "6.82-inch 2K Fluid AMOLED, 120Hz ProXDR",
    processor: "Snapdragon 8 Elite",
    camera: "50MP Hasselblad Main + 50MP Periscope + 50MP Ultra Wide",
    battery: "6000 mAh",
    charging: "100W SuperVOOC + 50W Wireless",
    fiveG: true,
    pros: ["Massive 6000 mAh battery", "Hasselblad camera tuning", "Blazing 100W charging", "Gorgeous 2K display"],
    cons: ["Slightly curved screen edges"],
    description: "Co-developed with Hasselblad, featuring a monstrous 6000 mAh battery, Snapdragon 8 Elite power, and ultra-fast charging speeds."
  },
  {
    id: 12,
    brand: "OnePlus",
    model: "OnePlus 13R",
    category: "OnePlus",
    price: 42999,
    originalPrice: 49999,
    discount: 14,
    rating: 4.7,
    reviewsCount: 890,
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=600&q=80",
    colors: ["Nebula Noir", "Astral Trail"],
    storage: ["128GB", "256GB"],
    display: "6.78-inch AMOLED, 120Hz LTPO 4.0",
    processor: "Snapdragon 8 Gen 3",
    camera: "50MP Sony IMX906 + 8MP Ultra Wide + 2MP Macro",
    battery: "5500 mAh",
    charging: "80W SuperVOOC",
    fiveG: true,
    pros: ["Flagship killer performance", "Incredible battery endurance", "Smooth OxygenOS"],
    cons: ["Ultrawide camera is basic"],
    description: "Performance flagship delivering incredible speed, gaming prowess, and exceptional battery life with blazing fast charging."
  },
  {
    id: 13,
    brand: "OnePlus",
    model: "OnePlus 12",
    category: "OnePlus",
    price: 59999,
    originalPrice: 69999,
    discount: 14,
    rating: 4.7,
    reviewsCount: 1600,
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=600&q=80",
    colors: ["Silky Black", "Flowy Emerald"],
    storage: ["256GB", "512GB"],
    display: "6.82-inch QHD+ ProXDR Display",
    processor: "Snapdragon 8 Gen 3",
    camera: "50MP Sony LYT-808 + 64MP Periscope + 48MP Ultra Wide",
    battery: "5400 mAh",
    charging: "100W Wired, 50W Wireless",
    fiveG: true,
    pros: ["Stupendous camera performance", "Brightest display in class", "Stellar haptics"],
    cons: ["Large and bulky footprint"],
    description: "Smooth beyond belief with the Snapdragon 8 Gen 3 processor, 4th Gen Hasselblad Camera for Mobile, and Aqua Touch technology."
  },
  {
    id: 14,
    brand: "OnePlus",
    model: "OnePlus Nord 4",
    category: "OnePlus",
    price: 29999,
    originalPrice: 35999,
    discount: 16,
    rating: 4.6,
    reviewsCount: 2300,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    colors: ["Mercurial Silver", "Oasis Green", "Obsidian Midnight"],
    storage: ["128GB", "256GB"],
    display: "6.74-inch 1.5K AMOLED, 120Hz",
    processor: "Snapdragon 7+ Gen 3",
    camera: "50MP OIS Sony LYT-600 + 8MP Ultra Wide",
    battery: "5500 mAh",
    charging: "100W SuperVOOC",
    fiveG: true,
    pros: ["Unique unibody metal design", "Exceptional battery life", "Powerful mid-range processor"],
    cons: ["No wireless charging"],
    description: "The world's first 5G metal unibody smartphone, combining stunning aluminum build with robust performance and 100W fast charging."
  },
  {
    id: 15,
    brand: "OnePlus",
    model: "OnePlus Nord CE4",
    category: "OnePlus",
    price: 22999,
    originalPrice: 26999,
    discount: 15,
    rating: 4.5,
    reviewsCount: 1850,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=80",
    colors: ["Celadon Marble", "Dark Chrome"],
    storage: ["128GB", "256GB"],
    display: "6.7-inch AMOLED, 120Hz",
    processor: "Snapdragon 7 Gen 3",
    camera: "50MP Sony LYT-600 with OIS + 8MP Ultra Wide",
    battery: "5500 mAh",
    charging: "100W SuperVOOC",
    fiveG: true,
    pros: ["Massive 5500 mAh battery", "MicroSD card expandable", "Super fast 100W charger in box"],
    cons: ["Mono speaker sound"],
    description: "Clean design, dependable performance, and unmatched charging speed in the budget segment with expandable storage."
  },

  // Google Pixel
  {
    id: 16,
    brand: "Google",
    model: "Google Pixel 9 Pro XL",
    category: "Google Pixel",
    price: 104999,
    originalPrice: 124999,
    discount: 16,
    rating: 4.8,
    reviewsCount: 720,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
    colors: ["Obsidian", "Porcelain", "Hazel", "Rose Quartz"],
    storage: ["256GB", "512GB", "1TB"],
    display: "6.8-inch Super Actua OLED, 120Hz",
    processor: "Google Tensor G4",
    camera: "50MP Wide + 48MP Ultrawide with Macro Focus + 48MP 5x Telephoto",
    battery: "5060 mAh",
    charging: "Fast USB-PD wireless charging",
    fiveG: true,
    pros: ["Best-in-class AI photography", "7 years of OS updates", "Super bright 6.8-inch display", "Refined premium design"],
    cons: ["Tensor G4 trails competitors in gaming"],
    description: "Google's premium flagship smartphone loaded with advanced Gemini AI features, pro-level camera system, and gorgeous display."
  },
  {
    id: 17,
    brand: "Google",
    model: "Google Pixel 9 Pro",
    category: "Google Pixel",
    price: 94999,
    originalPrice: 109999,
    discount: 13,
    rating: 4.8,
    reviewsCount: 650,
    image: "https://images.unsplash.com/photo-1533749047139-189de3cf06d6?auto=format&fit=crop&w=600&q=80",
    colors: ["Obsidian", "Porcelain", "Hazel", "Rose Quartz"],
    storage: ["128GB", "256GB", "512GB"],
    display: "6.3-inch Super Actua OLED, 120Hz",
    processor: "Google Tensor G4",
    camera: "50MP Wide + 48MP Ultrawide + 48MP 5x Telephoto",
    battery: "4700 mAh",
    charging: "Fast wireless charging",
    fiveG: true,
    pros: ["Compact pro size", "Incredible camera zoom", "Advanced AI photo editing"],
    cons: ["Pricey for base storage"],
    description: "All the pro features of the XL packed into a comfortable, pocket-friendly 6.3-inch form factor with stunning matte glass."
  },
  {
    id: 18,
    brand: "Google",
    model: "Google Pixel 9",
    category: "Google Pixel",
    price: 69999,
    originalPrice: 79999,
    discount: 12,
    rating: 4.7,
    reviewsCount: 940,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
    colors: ["Obsidian", "Peony", "Wintergreen", "Porcelain"],
    storage: ["128GB", "256GB"],
    display: "6.3-inch Actua OLED, 60-120Hz",
    processor: "Google Tensor G4",
    camera: "50MP Wide + 48MP Ultrawide",
    battery: "4700 mAh",
    charging: "Qi-certified wireless charging",
    fiveG: true,
    pros: ["Cleanest Android experience", "Exceptional camera quality", "Sturdy rounded design"],
    cons: ["Slower charging speeds than rivals"],
    description: "Everyday powerhouse featuring Gemini Nano built-in, upgraded dual rear cameras, and an incredibly durable polished glass back."
  },
  {
    id: 19,
    brand: "Google",
    model: "Google Pixel 8a",
    category: "Google Pixel",
    price: 43999,
    originalPrice: 52999,
    discount: 17,
    rating: 4.6,
    reviewsCount: 1120,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    colors: ["Aloe", "Bay", "Obsidian", "Porcelain"],
    storage: ["128GB", "256GB"],
    display: "6.1-inch Actua Display, 120Hz",
    processor: "Google Tensor G3",
    camera: "64MP Main + 13MP Ultrawide",
    battery: "4492 mAh",
    charging: "Wireless charging supported",
    fiveG: true,
    pros: ["Fantastic budget camera", "7 years security updates", "Smooth 120Hz screen"],
    cons: ["Thick display bezels"],
    description: "The smart phone that packs Google's powerful AI tools, brilliant camera magic, and durable matte finish at an accessible price."
  },
  {
    id: 20,
    brand: "Google",
    model: "Google Pixel 8",
    category: "Google Pixel",
    price: 59999,
    originalPrice: 75999,
    discount: 21,
    rating: 4.6,
    reviewsCount: 1450,
    image: "https://images.unsplash.com/photo-1533749047139-189de3cf06d6?auto=format&fit=crop&w=600&q=80",
    colors: ["Hazel", "Obsidian", "Rose"],
    storage: ["128GB", "256GB"],
    display: "6.2-inch Actua Display, 120Hz",
    processor: "Google Tensor G3",
    camera: "50MP Main + 12MP Ultrawide with Macro Focus",
    battery: "4575 mAh",
    charging: "Fast wireless charging",
    fiveG: true,
    pros: ["Great compact size", "Audio Magic Eraser", "Long software support"],
    cons: ["Base storage is 128GB"],
    description: "Helpful, safe, and stunningly capable with AI-driven photo editing, temperature sensor, and gorgeous smooth contours."
  },

  // Xiaomi and Redmi
  {
    id: 21,
    brand: "Xiaomi",
    model: "Xiaomi 15 Ultra",
    category: "Xiaomi and Redmi",
    price: 99999,
    originalPrice: 109999,
    discount: 9,
    rating: 4.8,
    reviewsCount: 310,
    image: "https://images.unsplash.com/photo-1546054454-aa26bc2ab773?auto=format&fit=crop&w=600&q=80",
    colors: ["Black Ceramic", "White Leather", "Titanium Edition"],
    storage: ["512GB", "1TB"],
    display: "6.73-inch 2K AMOLED, 120Hz LTPO",
    processor: "Snapdragon 8 Elite",
    camera: "50MP 1-inch Sony LYT-900 + 200MP Periscope + 50MP + 50MP",
    battery: "5500 mAh",
    charging: "90W Wired, 80W Wireless",
    fiveG: true,
    pros: ["Stunning Leica quad cameras", "Huge battery with 90W fast charge", "Luxurious build"],
    cons: ["Heavy camera bump"],
    description: "Photography masterpiece engineered with Leica optics, massive 1-inch sensor, and ultimate Snapdragon 8 Elite processing power."
  },
  {
    id: 22,
    brand: "Xiaomi",
    model: "Xiaomi 15",
    category: "Xiaomi and Redmi",
    price: 64999,
    originalPrice: 72999,
    discount: 11,
    rating: 4.7,
    reviewsCount: 450,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=80",
    colors: ["Black", "White", "Green", "Lilac"],
    storage: ["256GB", "512GB"],
    display: "6.36-inch 1.5K AMOLED, 120Hz",
    processor: "Snapdragon 8 Elite",
    camera: "50MP Leica Main + 50MP Telephoto + 50MP Ultrawide",
    battery: "5400 mAh",
    charging: "90W Fast Charging",
    fiveG: true,
    pros: ["Ultra-slim bezels", "Compact flagship design", "Leica camera filters"],
    cons: ["Regional ROM availability quirks"],
    description: "Compact powerhouse offering balanced flagship performance, professional Leica camera tuning, and ultra-narrow bezel display."
  },
  {
    id: 23,
    brand: "Redmi",
    model: "Redmi Note 14 Pro+",
    category: "Xiaomi and Redmi",
    price: 29999,
    originalPrice: 35999,
    discount: 16,
    rating: 4.7,
    reviewsCount: 2890,
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=600&q=80",
    colors: ["Phantom Black", "Spectre Blue", "Porcelain White"],
    storage: ["256GB", "512GB"],
    display: "6.67-inch 1.5K Curved AMOLED, 120Hz",
    processor: "Snapdragon 7s Gen 3",
    camera: "200MP OIS Main + 8MP Ultrawide + 50MP Telephoto",
    battery: "6200 mAh",
    charging: "120W HyperCharge",
    fiveG: true,
    pros: ["Massive 6200 mAh battery", "120W lightning charging", "IP68 water resistance"],
    cons: ["Curved screen might not suit everyone"],
    description: "Unbeatable midrange champion featuring a gargantuan battery, blazing 120W charging, and professional 200MP camera with OIS."
  },
  {
    id: 24,
    brand: "Redmi",
    model: "Redmi Note 14 Pro",
    category: "Xiaomi and Redmi",
    price: 24999,
    originalPrice: 29999,
    discount: 16,
    rating: 4.6,
    reviewsCount: 3100,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    colors: ["Midnight Black", "Lavender Purple", "Ocean Blue"],
    storage: ["128GB", "256GB"],
    display: "6.67-inch AMOLED, 120Hz",
    processor: "MediaTek Dimensity 7300-Ultra",
    camera: "50MP Sony LYT-600 with OIS + 8MP Ultrawide + 2MP Macro",
    battery: "5500 mAh",
    charging: "45W Fast Charging",
    fiveG: true,
    pros: ["Sturdy Gorilla Glass Victus 2", "Great daylight camera", "All-day battery life"],
    cons: ["Average macro lens"],
    description: "Sturdy durability meets everyday reliability with a vibrant AMOLED screen, OIS camera, and comfortable ergonomic grip."
  },
  {
    id: 25,
    brand: "Redmi",
    model: "Redmi Note 13",
    category: "Xiaomi and Redmi",
    price: 15999,
    originalPrice: 19999,
    discount: 20,
    rating: 4.4,
    reviewsCount: 5400,
    image: "https://images.unsplash.com/photo-1583573636224-b32d169acddf?auto=format&fit=crop&w=600&q=80",
    colors: ["Graphite Grey", "Arctic White", "Ocean Sunset"],
    storage: ["128GB", "256GB"],
    display: "6.67-inch FHD+ AMOLED, 120Hz",
    processor: "MediaTek Dimensity 6080",
    camera: "108MP Main + 8MP Ultrawide + 2MP Macro",
    battery: "5000 mAh",
    charging: "33W Fast Charging",
    fiveG: true,
    pros: ["Super affordable 5G", "120Hz AMOLED in budget", "108MP main sensor"],
    cons: ["Basic processor for heavy 3D gaming"],
    description: "Budget bestseller bringing high refresh rate AMOLED display and crisp 108MP photography to everyone."
  },

  // Realme
  {
    id: 26,
    brand: "Realme",
    model: "Realme GT 7 Pro",
    category: "Realme",
    price: 54999,
    originalPrice: 64999,
    discount: 15,
    rating: 4.7,
    reviewsCount: 520,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
    colors: ["Mars Orange", "Galaxy Grey", "Light Titanium"],
    storage: ["256GB", "512GB"],
    display: "6.78-inch Eco² OLED Plus, 120Hz",
    processor: "Snapdragon 8 Elite",
    camera: "50MP Sony IMX906 OIS + 50MP Periscope + 8MP Ultrawide",
    battery: "6500 mAh",
    charging: "120W Ultra Charge",
    fiveG: true,
    pros: ["Gigantic 6500 mAh battery", "Top Snapdragon 8 Elite performance", "IP68/IP69 rating"],
    cons: ["Brand UI has bloatware apps"],
    description: "Performance beast packed with massive 6500 mAh battery, blazing Snapdragon 8 Elite processor, and extreme underwater IP69 rating."
  },
  {
    id: 27,
    brand: "Realme",
    model: "Realme GT 6",
    category: "Realme",
    price: 34999,
    originalPrice: 42999,
    discount: 18,
    rating: 4.6,
    reviewsCount: 890,
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=600&q=80",
    colors: ["Fluid Silver", "Razor Green"],
    storage: ["256GB", "512GB"],
    display: "6.78-inch 6000-nit HyperDisplay",
    processor: "Snapdragon 8s Gen 3",
    camera: "50MP Sony LYT-808 OIS + 50MP Telephoto + 8MP Ultrawide",
    battery: "5500 mAh",
    charging: "120W SuperVOOC",
    fiveG: true,
    pros: ["Blindingly bright screen", "Powerful gaming processor", "Fast charging"],
    cons: ["Glossy back attracts fingerprints"],
    description: "AI flagship killer engineered with ultra-bright display, powerful Snapdragon 8s Gen 3 processor, and flagship Sony camera."
  },
  {
    id: 28,
    brand: "Realme",
    model: "Realme 14 Pro+",
    category: "Realme",
    price: 29999,
    originalPrice: 35999,
    discount: 16,
    rating: 4.6,
    reviewsCount: 1340,
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=600&q=80",
    colors: ["Monet Gold", "Emerald Green", "Velvet Red"],
    storage: ["128GB", "256GB"],
    display: "6.7-inch Curved AMOLED, 120Hz",
    processor: "Snapdragon 7s Gen 3",
    camera: "50MP Sony LYT-701 OIS + 50MP Periscope + 8MP Ultrawide",
    battery: "5200 mAh",
    charging: "80W Fast Charge",
    fiveG: true,
    pros: ["Periscope zoom in mid-range", "Artistic back design", "Reliable battery"],
    cons: ["Curved screen prone to accidental touches"],
    description: "Art meets technology with a stunning Monet-inspired design, periscope telephoto lens, and smooth curved AMOLED display."
  },
  {
    id: 29,
    brand: "Realme",
    model: "Realme 13 Pro+",
    category: "Realme",
    price: 26999,
    originalPrice: 32999,
    discount: 18,
    rating: 4.5,
    reviewsCount: 1620,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=600&q=80",
    colors: ["Monet Gold", "Emerald Green"],
    storage: ["256GB", "512GB"],
    display: "6.7-inch FHD+ Curved AMOLED",
    processor: "Snapdragon 7s Gen 2",
    camera: "50MP Sony LYT-601 OIS + 50MP Sony IMX882 Periscope",
    battery: "5200 mAh",
    charging: "80W SuperVOOC",
    fiveG: true,
    pros: ["Dual Sony portrait lenses", "IP65 water resistance", "Sleek in-hand feel"],
    cons: ["Average mono speakers"],
    description: "Professional portrait master with dual Sony OIS cameras, AI hyperimage quality, and exquisite gemstone-inspired aesthetic."
  },
  {
    id: 30,
    brand: "Realme",
    model: "Realme Narzo 70 Pro",
    category: "Realme",
    price: 18999,
    originalPrice: 22999,
    discount: 17,
    rating: 4.5,
    reviewsCount: 2100,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=80",
    colors: ["Glass Green", "Glass Gold"],
    storage: ["128GB", "256GB"],
    display: "6.7-inch AMOLED, 120Hz",
    processor: "MediaTek Dimensity 7050",
    camera: "50MP Sony IMX890 OIS + 8MP Ultrawide",
    battery: "5000 mAh",
    charging: "67W SuperVOOC",
    fiveG: true,
    pros: ["Air Gestures feature", "Sony IMX890 sensor with OIS", "Clean punchy display"],
    cons: ["Plastic side frames"],
    description: "Innovation leader featuring futuristic Air Gestures, premium Sony OIS camera sensor, and blazing 67W fast charging."
  },

  // Vivo
  {
    id: 31,
    brand: "Vivo",
    model: "Vivo X200 Pro",
    category: "Vivo",
    price: 89999,
    originalPrice: 99999,
    discount: 10,
    rating: 4.9,
    reviewsCount: 480,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80",
    colors: ["Titanium", "Cosmic Black", "Aurora Green"],
    storage: ["256GB", "512GB", "1TB"],
    display: "6.78-inch 1.5K AMOLED, 120Hz LTPO",
    processor: "MediaTek Dimensity 9400",
    camera: "50MP 1-inch LYT-818 + 200MP Zeiss APO Telephoto + 50MP Ultrawide",
    battery: "6000 mAh",
    charging: "90W Wired, 30W Wireless",
    fiveG: true,
    pros: ["Extraordinary Zeiss 200MP zoom", "Massive 6000 mAh battery", "Stunning portrait imagery"],
    cons: ["High price tier"],
    description: "Zeiss optical mastery meets flagship performance with a 200MP telephoto lens, Dimensity 9400 processor, and 6000 mAh battery."
  },
  {
    id: 32,
    brand: "Vivo",
    model: "Vivo X200",
    category: "Vivo",
    price: 64999,
    originalPrice: 72999,
    discount: 11,
    rating: 4.8,
    reviewsCount: 520,
    image: "https://images.unsplash.com/photo-1546054454-aa26bc2ab773?auto=format&fit=crop&w=600&q=80",
    colors: ["Aurora Green", "Midnight Black", "Titanium Gray"],
    storage: ["256GB", "512GB"],
    display: "6.67-inch AMOLED, 120Hz",
    processor: "MediaTek Dimensity 9400",
    camera: "50MP Zeiss Main + 50MP Telephoto + 50MP Ultrawide",
    battery: "5800 mAh",
    charging: "90W FlashCharge",
    fiveG: true,
    pros: ["Compact Zeiss cameras", "All-day durable battery", "Gorgeous slim profile"],
    cons: ["Slightly protruding camera module"],
    description: "Professional mobile photography engineered with Zeiss co-engineered optics, compact ergonomics, and high-performance chipset."
  },
  {
    id: 33,
    brand: "Vivo",
    model: "Vivo V50",
    category: "Vivo",
    price: 37999,
    originalPrice: 44999,
    discount: 15,
    rating: 4.7,
    reviewsCount: 910,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    colors: ["Starry Blue", "Rose Red", "Noble Black"],
    storage: ["256GB", "512GB"],
    display: "6.78-inch Curved AMOLED, 120Hz",
    processor: "Snapdragon 7 Gen 3",
    camera: "50MP OIS Main + 50MP Ultrawide + 50MP Selfie camera",
    battery: "5500 mAh",
    charging: "80W FlashCharge",
    fiveG: true,
    pros: ["Incredible 50MP front and rear cameras", "Slim & lightweight design", "Aura Light portrait system"],
    cons: ["Mono speaker"],
    description: "The ultimate portrait smartphone featuring 50MP selfie and main cameras with Studio Aura Light for magical night portraits."
  },
  {
    id: 34,
    brand: "Vivo",
    model: "Vivo V40",
    category: "Vivo",
    price: 34999,
    originalPrice: 41999,
    discount: 16,
    rating: 4.6,
    reviewsCount: 1450,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=80",
    colors: ["Nebula Purple", "Sunglow Peach", "Stellar Silver"],
    storage: ["128GB", "256GB"],
    display: "6.78-inch 1.5K 3D Curved AMOLED",
    processor: "Snapdragon 7 Gen 3",
    camera: "50MP Zeiss OIS Main + 50MP Ultrawide",
    battery: "5500 mAh",
    charging: "80W Fast Charge",
    fiveG: true,
    pros: ["Zeiss portrait studio in pocket", "IP68 & IP69 water resistance", "Slim 7.58mm body"],
    cons: ["No headphone jack"],
    description: "Sleek IP68/69 waterproof body combined with Zeiss optics and studio lighting for cinematic portrait photography."
  },
  {
    id: 35,
    brand: "Vivo",
    model: "Vivo T3 Ultra",
    category: "Vivo",
    price: 29999,
    originalPrice: 35999,
    discount: 16,
    rating: 4.5,
    reviewsCount: 1100,
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=600&q=80",
    colors: ["Frost Green", "Lunar Gray"],
    storage: ["128GB", "256GB"],
    display: "6.78-inch 1.5K Curved AMOLED, 120Hz",
    processor: "MediaTek Dimensity 9200+",
    camera: "50MP Sony IMX921 OIS + 8MP Ultrawide",
    battery: "5500 mAh",
    charging: "80W FlashCharge",
    fiveG: true,
    pros: ["Flagship Dimensity 9200+ processor", "Slim curved design", "Vibrant display"],
    cons: ["Basic ultra-wide camera"],
    description: "Blazing performance meets slim elegance with flagship MediaTek 9200+ power, curved AMOLED display, and 80W charging."
  },

  // Oppo
  {
    id: 36,
    brand: "Oppo",
    model: "Oppo Find X8 Pro",
    category: "Oppo",
    price: 99999,
    originalPrice: 109999,
    discount: 9,
    rating: 4.8,
    reviewsCount: 390,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
    colors: ["Space Black", "Pearl White", "Haze Blue"],
    storage: ["512GB", "1TB"],
    display: "6.78-inch AMOLED, 120Hz LTPO",
    processor: "MediaTek Dimensity 9400",
    camera: "50MP Hasselblad Main + Dual 50MP Periscopes (3x & 6x) + 50MP Ultrawide",
    battery: "5910 mAh",
    charging: "80W SuperVOOC, 50W Wireless",
    fiveG: true,
    pros: ["Dual periscope zoom lenses", "Hasselblad color mastery", "Massive battery"],
    cons: ["Heavy camera island"],
    description: "Master photography with dual periscope zoom lenses, Hasselblad tuning, and robust MediaTek Dimensity 9400 performance."
  },
  {
    id: 37,
    brand: "Oppo",
    model: "Oppo Find X8",
    category: "Oppo",
    price: 69999,
    originalPrice: 79999,
    discount: 12,
    rating: 4.7,
    reviewsCount: 420,
    image: "https://images.unsplash.com/photo-1533749047139-189de3cf06d6?auto=format&fit=crop&w=600&q=80",
    colors: ["Star Grey", "Shell Pink", "Space Black"],
    storage: ["256GB", "512GB"],
    display: "6.59-inch AMOLED, 120Hz",
    processor: "MediaTek Dimensity 9400",
    camera: "50MP Hasselblad Main + 50MP Periscope Telephoto + 50MP Ultrawide",
    battery: "5630 mAh",
    charging: "80W SuperVOOC",
    fiveG: true,
    pros: ["Compact flagship feel", "Stunning Hasselblad imagery", "Long battery life"],
    cons: ["Curved edges require careful handling"],
    description: "Compact flagship powerhouse featuring premium Hasselblad camera system, sleek glass body, and robust battery life."
  },
  {
    id: 38,
    brand: "Oppo",
    model: "Oppo Reno 13 Pro",
    category: "Oppo",
    price: 44999,
    originalPrice: 52999,
    discount: 15,
    rating: 4.6,
    reviewsCount: 780,
    image: "https://images.unsplash.com/photo-1546054454-aa26bc2ab773?auto=format&fit=crop&w=600&q=80",
    colors: ["Starlight Black", "Butterfly Purple", "Gold"],
    storage: ["256GB", "512GB"],
    display: "6.83-inch Quad Curved AMOLED, 120Hz",
    processor: "MediaTek Dimensity 8350",
    camera: "50MP OIS Main + 50MP Portrait Telephoto + 8MP Ultrawide",
    battery: "5800 mAh",
    charging: "80W SuperVOOC, 50W Wireless",
    fiveG: true,
    pros: ["Stunning quad-curved display", "Wireless charging in Reno series", "IP68/IP69 water resistance"],
    cons: ["Mid-range processor price stretch"],
    description: "Elegance meets durability with quad-curved glass, IP68/69 water resistance, wireless charging, and dedicated portrait lens."
  },
  {
    id: 39,
    brand: "Oppo",
    model: "Oppo Reno 13",
    category: "Oppo",
    price: 32999,
    originalPrice: 38999,
    discount: 15,
    rating: 4.5,
    reviewsCount: 940,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=80",
    colors: ["Galaxy Blue", "Midnight Black"],
    storage: ["128GB", "256GB"],
    display: "6.59-inch AMOLED, 120Hz",
    processor: "MediaTek Dimensity 7300 Energy",
    camera: "50MP OIS Main + 8MP Ultrawide + 32MP Selfie",
    battery: "5600 mAh",
    charging: "80W SuperVOOC",
    fiveG: true,
    pros: ["Slim and lightweight", "Big 5600 mAh battery", "Vibrant flat display"],
    cons: ["Plastic frame build"],
    description: "Sleek flat-screen beauty with long-lasting battery life, quick charging, and dependable AI photography."
  },
  {
    id: 40,
    brand: "Oppo",
    model: "Oppo A5 Pro",
    category: "Oppo",
    price: 19999,
    originalPrice: 24999,
    discount: 20,
    rating: 4.3,
    reviewsCount: 1500,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=600&q=80",
    colors: ["Sparkle Black", "Aqua Green"],
    storage: ["128GB", "256GB"],
    display: "6.67-inch HD+ IPS LCD, 120Hz",
    processor: "MediaTek Dimensity 6300",
    camera: "50MP Main + 2MP Portrait",
    battery: "5100 mAh",
    charging: "45W SuperVOOC",
    fiveG: true,
    pros: ["Rugged drop resistance", "All-day battery", "Affordable 5G"],
    cons: ["LCD screen instead of AMOLED"],
    description: "Military-grade durability smartphone designed for rough usage with long battery life and dependable everyday performance."
  }
];

const CATEGORIES = [
  "All Smartphones",
  "Apple iPhones",
  "Samsung Galaxy",
  "OnePlus",
  "Google Pixel",
  "Xiaomi and Redmi",
  "Realme",
  "Vivo",
  "Oppo"
];

const EXCHANGE_PHONES = [
  { brand: "Apple", model: "iPhone 13", maxVal: 18000 },
  { brand: "Apple", model: "iPhone 12", maxVal: 14000 },
  { brand: "Apple", model: "iPhone 11", maxVal: 10000 },
  { brand: "Samsung", model: "Galaxy S22", maxVal: 12000 },
  { brand: "Samsung", model: "Galaxy S21", maxVal: 9000 },
  { brand: "Samsung", model: "Galaxy A53", maxVal: 6000 },
  { brand: "OnePlus", model: "OnePlus 10 Pro", maxVal: 10000 },
  { brand: "OnePlus", model: "OnePlus 9RT", maxVal: 7500 },
  { brand: "Redmi", model: "Redmi Note 12", maxVal: 5000 },
  { brand: "Realme", model: "Realme GT Neo 3", maxVal: 6000 }
];

export default function App() {
  // Navigation & Page State
  const [activeTab, setActiveTab] = useState('home'); // home, catalog, exchange, diwali, about, contact, cart, checkout, product-detail
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // Cart & Wishlist State
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  
  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Smartphones');
  const [sortBy, setSortBy] = useState('popular'); // popular, price-low, price-high, rating
  const [priceFilter, setPriceFilter] = useState(150000);

  // Exchange Calculator State
  const [exBrand, setExBrand] = useState('Apple');
  const [exModel, setExModel] = useState('iPhone 13');
  const [exStorage, setExStorage] = useState('128GB');
  const [exCondition, setExCondition] = useState('Good');
  const [exScreenDamage, setExScreenDamage] = useState('No');
  const [exPincode, setExPincode] = useState('');
  const [calculatedExchangeValue, setCalculatedExchangeValue] = useState(null);
  const [appliedExchange, setAppliedExchange] = useState(null);

  // Checkout State
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [checkoutStep, setCheckoutStep] = useState(1); // 1: Address, 2: Payment, 3: Success
  const [paymentMethod, setPaymentMethod] = useState('upi'); // cod, credit, debit, upi, netbanking, emi
  const [addressForm, setAddressForm] = useState({
    name: 'Rahul Sharma',
    phone: '9876543210',
    address: 'Flat 402, Sunshine Apartments, MG Road',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400001'
  });
  const [pincodeCheck, setPincodeCheck] = useState({ code: '400001', checked: true, deliverable: true });

  // Contact Form State
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // UI Notification Toast
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Cart operations
  const addToCart = (product, e = null) => {
    if (e) e.stopPropagation();
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1 }];
    });
    showToast(`Added ${product.model} to Cart!`);
  };

  const updateCartQty = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.qty + delta;
        return newQty > 0 ? { ...item, qty: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
    showToast("Item removed from cart");
  };

  // Wishlist operations
  const toggleWishlist = (product, e = null) => {
    if (e) e.stopPropagation();
    setWishlist(prev => {
      const exists = prev.some(item => item.id === product.id);
      if (exists) {
        showToast(`Removed ${product.model} from Wishlist`);
        return prev.filter(item => item.id !== product.id);
      } else {
        showToast(`Added ${product.model} to Wishlist`);
        return [...prev, product];
      }
    });
  };

  // Calculations
  const cartSubtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const diwaliDiscountTotal = Math.round(cartSubtotal * 0.08); // 8% festive discount
  const exchangeDiscountValue = appliedExchange ? appliedExchange.value : 0;
  const couponDiscountValue = appliedCoupon ? (appliedCoupon === 'DIWALI10' ? 1000 : appliedCoupon === 'FESTIVE15' ? 1500 : 500) : 0;
  const bankDiscountValue = (paymentMethod === 'credit' || paymentMethod === 'debit') ? Math.round(cartSubtotal * 0.05) : 0;
  const finalPayable = Math.max(0, cartSubtotal - diwaliDiscountTotal - exchangeDiscountValue - couponDiscountValue - bankDiscountValue);

  // Countdown timer simulation for Diwali
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 42, seconds: 35 });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Filter & Search Logic
  const filteredProducts = SMARTPHONES.filter(phone => {
    const matchesSearch = phone.model.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          phone.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === 'All Smartphones' || phone.category === selectedCategory;
    const matchesPrice = phone.price <= priceFilter;
    return matchesSearch && matchesCat && matchesPrice;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return b.reviewsCount - a.reviewsCount; // popular
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-orange-500 selection:text-white">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-purple-400/30 animate-bounce">
          <Sparkles className="w-5 h-5 text-yellow-300" />
          <span className="font-medium text-sm">{toastMessage}</span>
        </div>
      )}

      {/* TOP FESTIVE BANNER */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-purple-700 text-white text-xs sm:text-sm py-2 px-4 text-center font-medium shadow-inner flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 text-yellow-200 animate-spin" />
        <span>Diwali Dhamaka Sale Live! Extra ₹15,000 (INR) Exchange Bonus + No-Cost EMI on All Flagships.</span>
        <button onClick={() => setActiveTab('diwali')} className="underline hover:text-yellow-200 font-bold ml-2">Explore Deals</button>
      </div>

      {/* HEADER & NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            
            {/* Logo */}
            <div 
              onClick={() => setActiveTab('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 via-purple-600 to-orange-500 p-0.5 shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-orange-500/20" />
                  <ShoppingBag className="w-5 h-5 text-orange-400 absolute transform -translate-y-0.5" />
                  <Phone className="w-3 h-3 text-purple-300 absolute transform translate-x-1 translate-y-1" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-xl font-black bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent tracking-tight">Phone</span>
                  <span className="text-xl font-black text-orange-400 tracking-tight">World</span>
                </div>
                <span className="text-[10px] text-slate-400 font-medium tracking-wide hidden sm:block">
                  Upgrade Your World, One Phone at a Time!
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 text-xs font-semibold">
              {[
                { id: 'home', label: 'Home' },
                { id: 'catalog', label: 'All Smartphones' },
                { id: 'exchange', label: 'Exchange Your Old Phone' },
                { id: 'diwali', label: 'Diwali Dhamaka Offers' },
                { id: 'about', label: 'About Us' },
                { id: 'contact', label: 'Contact Us' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-2 rounded-full transition-all duration-200 ${
                    activeTab === tab.id 
                      ? 'bg-orange-500/10 text-orange-400 font-bold border border-orange-500/30' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-xs relative">
              <input
                type="text"
                placeholder="Search iPhone, Samsung, Pixel..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (activeTab !== 'catalog') setActiveTab('catalog');
                }}
                className="w-full bg-slate-950/80 border border-slate-800 text-slate-200 text-xs rounded-full pl-9 pr-4 py-2.5 focus:outline-none focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/60 transition"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>

            {/* Icons: Wishlist, Cart, Account */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setActiveTab('wishlist')}
                className="relative p-2.5 rounded-full bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white transition"
                title="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </button>

              <button 
                onClick={() => setActiveTab('cart')}
                className="relative p-2.5 rounded-full bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white transition"
                title="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {cart.reduce((sum, item) => sum + item.qty, 0)}
                  </span>
                )}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* 1. HOMEPAGE VIEW */}
      {activeTab === 'home' && (
        <main className="space-y-16 pb-20">
          
          {/* Hero Diwali Section */}
          <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 pt-8 pb-16 border-b border-slate-800/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <div className="lg:col-span-7 space-y-6 text-left">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-orange-500/40 px-4 py-1.5 rounded-full">
                    <Sparkles className="w-4 h-4 text-yellow-400" />
                    <span className="text-xs font-bold text-orange-300 uppercase tracking-widest">
                      FESTIVE SEASON EXCLUSIVE
                    </span>
                  </div>

                  <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none">
                    <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
                      DIWALI DHAMAKA SALE
                    </span>
                  </h1>

                  <p className="text-lg sm:text-xl font-bold text-slate-200">
                    Light Up Your Diwali with Your Dream Smartphone!
                  </p>

                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-orange-400" />
                      <span>Up to <strong className="text-orange-400">40% OFF</strong> on selected smartphones.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-400" />
                      <span>Exchange old phones for extra <strong className="text-purple-300">₹15,000 INR</strong> value.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-yellow-400" />
                      <span>Instant bank card discounts + No-Cost EMI available.</span>
                    </li>
                  </ul>

                  {/* Countdown Timer */}
                  <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl w-fit flex items-center gap-4 text-center">
                    <div>
                      <span className="block text-xl font-black text-orange-400">{String(timeLeft.hours).padStart(2, '0')}</span>
                      <span className="text-[10px] text-slate-400 uppercase">Hours</span>
                    </div>
                    <span className="text-slate-600 font-bold">:</span>
                    <div>
                      <span className="block text-xl font-black text-orange-400">{String(timeLeft.minutes).padStart(2, '0')}</span>
                      <span className="text-[10px] text-slate-400 uppercase">Mins</span>
                    </div>
                    <span className="text-slate-600 font-bold">:</span>
                    <div>
                      <span className="block text-xl font-black text-orange-400">{String(timeLeft.seconds).padStart(2, '0')}</span>
                      <span className="text-[10px] text-slate-400 uppercase">Secs</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button 
                      onClick={() => setActiveTab('catalog')}
                      className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-orange-500/25 transition-all transform hover:-translate-y-0.5 text-sm"
                    >
                      Shop Now
                    </button>
                    <button 
                      onClick={() => setActiveTab('exchange')}
                      className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold px-8 py-4 rounded-2xl transition text-sm"
                    >
                      Exchange Old Phone
                    </button>
                  </div>
                </div>

                {/* Hero Product Showcases (3-4 Smart Phones) */}
                <div className="lg:col-span-5 relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-orange-500/25 rounded-3xl blur-2xl" />
                  
                  <div className="relative grid grid-cols-2 gap-4">
                    <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-3xl shadow-2xl space-y-3 transform hover:-translate-y-2 transition duration-300">
                      <div className="badge bg-orange-500/20 text-orange-400 text-[10px] font-bold px-2.5 py-1 rounded-full w-fit">SAVE ₹15,000</div>
                      <img src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=400&q=80" alt="iPhone 16 Pro Max" className="w-full h-40 object-cover rounded-2xl" />
                      <div>
                        <h3 className="font-bold text-sm">iPhone 16 Pro Max</h3>
                        <p className="text-xs text-orange-400 font-semibold">₹1,44,900 INR <span className="text-slate-500 line-through text-[10px]">₹1,59,900</span></p>
                      </div>
                    </div>

                    <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-3xl shadow-2xl space-y-3 transform translate-y-6 hover:-translate-y-4 transition duration-300">
                      <div className="badge bg-purple-500/20 text-purple-400 text-[10px] font-bold px-2.5 py-1 rounded-full w-fit">BESTSELLER</div>
                      <img src="https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=400&q=80" alt="Galaxy S25 Ultra" className="w-full h-40 object-cover rounded-2xl" />
                      <div>
                        <h3 className="font-bold text-sm">Galaxy S25 Ultra</h3>
                        <p className="text-xs text-orange-400 font-semibold">₹1,29,999 INR <span className="text-slate-500 line-through text-[10px]">₹1,44,999</span></p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Featured Smartphones Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">Featured Flagships</h2>
                <p className="text-slate-400 text-sm">Top-tier smartphones handpicked for Diwali</p>
              </div>
              <button onClick={() => setActiveTab('catalog')} className="text-orange-400 hover:text-orange-300 font-semibold text-sm flex items-center gap-1">
                View All Catalog <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SMARTPHONES.slice(0, 4).map(phone => (
                <div 
                  key={phone.id}
                  onClick={() => { setSelectedProduct(phone); setActiveTab('product-detail'); }}
                  className="bg-slate-900 border border-slate-800 hover:border-orange-500/50 rounded-3xl p-5 shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 transition-all cursor-pointer flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="absolute top-4 right-4 z-10 flex gap-2">
                    <button onClick={(e) => toggleWishlist(phone, e)} className="p-2 bg-slate-800/80 hover:bg-slate-700 rounded-full text-slate-300 hover:text-red-400 transition">
                      <Heart className={`w-4 h-4 ${wishlist.some(w => w.id === phone.id) ? 'fill-red-500 text-red-500' : ''}`} />
                    </button>
                  </div>

                  <span className="absolute top-4 left-4 bg-orange-500/20 text-orange-400 text-[10px] font-bold px-2.5 py-1 rounded-full">
                    {phone.discount}% OFF
                  </span>

                  <div className="pt-8 pb-4 text-center">
                    <img src={phone.image} alt={phone.model} className="w-36 h-48 object-cover mx-auto rounded-2xl group-hover:scale-105 transition duration-300 shadow-md" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>{phone.brand}</span>
                      <div className="flex items-center gap-1 text-yellow-400 font-semibold">
                        <Star className="w-3.5 h-3.5 fill-yellow-400" />
                        <span>{phone.rating}</span>
                      </div>
                    </div>

                    <h3 className="font-bold text-base text-slate-100 group-hover:text-orange-400 transition-colors line-clamp-1">{phone.model}</h3>

                    <div className="flex items-center gap-2">
                      <span className="text-lg font-black text-orange-400">₹{phone.price.toLocaleString('en-IN')} <span className="text-[10px] text-slate-400 font-semibold">INR</span></span>
                      <span className="text-xs text-slate-500 line-through">₹{phone.originalPrice.toLocaleString('en-IN')}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <button 
                        onClick={(e) => addToCart(phone, e)}
                        className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 py-2.5 rounded-xl font-semibold text-xs transition"
                      >
                        Add to Cart
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); setSelectedProduct(phone); setActiveTab('checkout'); }}
                        className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:opacity-95 text-white py-2.5 rounded-xl font-semibold text-xs transition shadow-md"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Diwali Dhamaka Offer Banners Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 border border-purple-500/30 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
              <div className="absolute right-0 top-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
                <div className="space-y-4">
                  <span className="bg-yellow-400/20 text-yellow-300 font-bold px-3 py-1 rounded-full text-xs">FESTIVAL SPECIAL</span>
                  <h2 className="text-3xl sm:text-4xl font-black text-white">Diwali Mega Sale Offers</h2>
                  <p className="text-slate-300 text-sm sm:text-base">
                    Save big this festive season with exclusive bank discounts, instant exchange valuation, and flexible No-Cost EMI plans.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <button onClick={() => setActiveTab('diwali')} className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl text-sm transition">
                      View All Offers
                    </button>
                    <button onClick={() => setActiveTab('exchange')} className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-6 py-3 rounded-xl text-sm transition">
                      Calculate Exchange
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-900/80 border border-slate-700 p-5 rounded-2xl space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold">₹</div>
                    <h3 className="font-bold text-sm">Up to ₹10,000 Instant Off</h3>
                    <p className="text-xs text-slate-400">Instant discount on selected bank cards</p>
                  </div>
                  <div className="bg-slate-900/80 border border-slate-700 p-5 rounded-2xl space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">🔄</div>
                    <h3 className="font-bold text-sm">Up to ₹15,000 Exchange Bonus</h3>
                    <p className="text-xs text-slate-400">Extra exchange value on old phones</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Brand Categories Carousel */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-2xl font-bold">Shop by Brand</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {CATEGORIES.slice(1).map(cat => (
                <div 
                  key={cat}
                  onClick={() => { setSelectedCategory(cat); setActiveTab('catalog'); }}
                  className="bg-slate-900 border border-slate-800 hover:border-orange-500 p-4 rounded-2xl text-center cursor-pointer transition group"
                >
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-3 text-orange-400 font-bold group-hover:scale-110 transition">
                    📱
                  </div>
                  <h3 className="text-xs font-semibold text-slate-200">{cat}</h3>
                </div>
              ))}
            </div>
          </section>

        </main>
      )}

      {/* 2. CATALOG VIEW */}
      {activeTab === 'catalog' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-xl">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black">Smartphone Catalog ({filteredProducts.length})</h1>
              <p className="text-xs sm:text-sm text-slate-400">Explore all 40 verified latest smartphones with Diwali offers</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded-xl px-3 py-2.5 focus:outline-none"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Filters Sidebar */}
            <div className="space-y-6 bg-slate-900 border border-slate-800 p-6 rounded-3xl h-fit">
              <div>
                <h3 className="font-bold text-sm text-slate-300 mb-3">Categories</h3>
                <div className="space-y-1.5">
                  {CATEGORIES.map(cat => (
                    <button 
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition ${selectedCategory === cat ? 'bg-orange-500 text-white font-bold' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-2">
                  <span className="font-bold text-slate-300">Max Price</span>
                  <span className="text-orange-400 font-bold">₹{priceFilter.toLocaleString('en-IN')}</span>
                </div>
                <input 
                  type="range" 
                  min="15000" 
                  max="160000" 
                  step="5000" 
                  value={priceFilter}
                  onChange={(e) => setPriceFilter(Number(e.target.value))}
                  className="w-full accent-orange-500 cursor-pointer"
                />
              </div>
            </div>

            {/* Product Grid */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(phone => (
                <div 
                  key={phone.id}
                  onClick={() => { setSelectedProduct(phone); setActiveTab('product-detail'); }}
                  className="bg-slate-900 border border-slate-800 hover:border-orange-500/50 rounded-3xl p-5 shadow-xl hover:shadow-2xl transition cursor-pointer flex flex-col justify-between group relative"
                >
                  <button onClick={(e) => toggleWishlist(phone, e)} className="absolute top-4 right-4 z-10 p-2 bg-slate-800/80 hover:bg-slate-700 rounded-full text-slate-300 hover:text-red-400 transition">
                    <Heart className={`w-4 h-4 ${wishlist.some(w => w.id === phone.id) ? 'fill-red-500 text-red-500' : ''}`} />
                  </button>

                  <span className="absolute top-4 left-4 bg-orange-500/20 text-orange-400 text-[10px] font-bold px-2.5 py-1 rounded-full">
                    {phone.discount}% OFF
                  </span>

                  <div className="pt-8 pb-4 text-center">
                    <img src={phone.image} alt={phone.model} className="w-32 h-44 object-cover mx-auto rounded-2xl group-hover:scale-105 transition duration-300 shadow-md" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>{phone.brand}</span>
                      <div className="flex items-center gap-1 text-yellow-400 font-semibold">
                        <Star className="w-3.5 h-3.5 fill-yellow-400" />
                        <span>{phone.rating}</span>
                      </div>
                    </div>

                    <h3 className="font-bold text-base text-slate-100 group-hover:text-orange-400 transition-colors line-clamp-1">{phone.model}</h3>

                    <div className="flex items-center gap-2">
                      <span className="text-lg font-black text-orange-400">₹{phone.price.toLocaleString('en-IN')}</span>
                      <span className="text-xs text-slate-500 line-through">₹{phone.originalPrice.toLocaleString('en-IN')}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <button onClick={(e) => addToCart(phone, e)} className="bg-slate-800 hover:bg-slate-700 text-slate-200 py-2.5 rounded-xl font-semibold text-xs transition">Add to Cart</button>
                      <button onClick={(e) => { e.stopPropagation(); setSelectedProduct(phone); setActiveTab('checkout'); }} className="bg-gradient-to-r from-orange-500 to-amber-500 text-white py-2.5 rounded-xl font-semibold text-xs transition shadow-md">Buy Now</button>
                    </div>
                  </div>
                </div>
              ))}
              {filteredProducts.length === 0 && (
                <div className="col-span-full py-20 text-center text-slate-400">
                  <p className="text-lg font-semibold">No smartphones found matching your filters.</p>
                </div>
              )}
            </div>

          </div>
        </main>
      )}

      {/* 3. PRODUCT DETAIL VIEW */}
      {activeTab === 'product-detail' && selectedProduct && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
          <button onClick={() => setActiveTab('catalog')} className="text-xs font-semibold text-orange-400 hover:underline flex items-center gap-1">
            ← Back to Catalog
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-slate-900 border border-slate-800 p-8 sm:p-12 rounded-3xl shadow-2xl">
            <div className="space-y-4 text-center">
              <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 inline-block w-full">
                <img src={selectedProduct.image} alt={selectedProduct.model} className="w-64 h-96 object-cover mx-auto rounded-2xl shadow-xl" />
              </div>
              <div className="flex gap-4 justify-center">
                <button onClick={(e) => addToCart(selectedProduct, e)} className="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 rounded-2xl transition text-sm">
                  Add to Cart
                </button>
                <button onClick={() => setActiveTab('checkout')} className="flex-1 bg-gradient-to-r from-orange-500 to-amber-500 hover:opacity-95 text-white font-bold py-4 rounded-2xl transition text-sm shadow-lg">
                  Buy Now
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <span className="bg-orange-500/20 text-orange-400 text-xs font-bold px-3 py-1 rounded-full">{selectedProduct.brand}</span>
                <h1 className="text-3xl sm:text-4xl font-black mt-3">{selectedProduct.model}</h1>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <span className="font-bold ml-1">{selectedProduct.rating}</span>
                  </div>
                  <span className="text-slate-400 text-sm">({selectedProduct.reviewsCount} customer reviews)</span>
                </div>
              </div>

              <div className="flex items-baseline gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <span className="text-3xl font-black text-orange-400">₹{selectedProduct.price.toLocaleString('en-IN')} <span className="text-xs text-slate-400 font-normal">INR</span></span>
                <span className="text-slate-500 line-through text-sm">₹{selectedProduct.originalPrice.toLocaleString('en-IN')}</span>
                <span className="bg-green-500/20 text-green-400 text-xs font-bold px-2.5 py-1 rounded-full ml-auto">{selectedProduct.discount}% OFF</span>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">{selectedProduct.description}</p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 uppercase font-bold">Display</span>
                  <p className="text-xs font-semibold text-slate-200 mt-1">{selectedProduct.display}</p>
                </div>
                <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 uppercase font-bold">Processor</span>
                  <p className="text-xs font-semibold text-slate-200 mt-1">{selectedProduct.processor}</p>
                </div>
                <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 uppercase font-bold">Camera</span>
                  <p className="text-xs font-semibold text-slate-200 mt-1">{selectedProduct.camera}</p>
                </div>
                <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 uppercase font-bold">Battery & Charging</span>
                  <p className="text-xs font-semibold text-slate-200 mt-1">{selectedProduct.battery} ({selectedProduct.charging})</p>
                </div>
              </div>

              {/* Pros & Cons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-2xl space-y-2">
                  <h4 className="font-bold text-green-400 text-xs flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Pros</h4>
                  <ul className="text-xs space-y-1 text-slate-300">
                    {selectedProduct.pros.map((pro, i) => <li key={i}>• {pro}</li>)}
                  </ul>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-2xl space-y-2">
                  <h4 className="font-bold text-red-400 text-xs flex items-center gap-1.5"><AlertCircle className="w-4 h-4" /> Cons</h4>
                  <ul className="text-xs space-y-1 text-slate-300">
                    {selectedProduct.cons.map((con, i) => <li key={i}>• {con}</li>)}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </main>
      )}

      {/* 4. EXCHANGE OLD PHONE VIEW */}
      {activeTab === 'exchange' && (
        <main className="max-w-4xl mx-auto px-4 py-12 space-y-8">
          <div className="text-center space-y-3">
            <span className="bg-purple-500/20 text-purple-300 text-xs font-bold px-3.5 py-1.5 rounded-full">INSTANT VALUATION</span>
            <h1 className="text-3xl sm:text-4xl font-black">Your Old Phone = Your New Phone Discount!</h1>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">Get up to ₹15,000 extra Diwali exchange bonus instantly by trading in your old device.</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-2">Select Old Brand</label>
                <select 
                  value={exBrand} 
                  onChange={(e) => setExBrand(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-sm text-slate-200"
                >
                  <option value="Apple">Apple</option>
                  <option value="Samsung">Samsung</option>
                  <option value="OnePlus">OnePlus</option>
                  <option value="Redmi">Redmi</option>
                  <option value="Realme">Realme</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-2">Select Model</label>
                <select 
                  value={exModel} 
                  onChange={(e) => setExModel(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-sm text-slate-200"
                >
                  {EXCHANGE_PHONES.filter(p => p.brand === exBrand).map(p => (
                    <option key={p.model} value={p.model}>{p.model}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-2">Storage Capacity</label>
                <select value={exStorage} onChange={(e) => setExStorage(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-sm text-slate-200">
                  <option value="64GB">64GB</option>
                  <option value="128GB">128GB</option>
                  <option value="256GB">256GB</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-2">Device Physical Condition</label>
                <select value={exCondition} onChange={(e) => setExCondition(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-sm text-slate-200">
                  <option value="Flawless">Flawless (Like New)</option>
                  <option value="Good">Good (Minor Scratches)</option>
                  <option value="Fair">Fair (Visible Wear)</option>
                </select>
              </div>
            </div>

            <button 
              onClick={() => {
                const found = EXCHANGE_PHONES.find(p => p.model === exModel);
                const baseVal = found ? found.maxVal : 10000;
                const multiplier = exCondition === 'Flawless' ? 1.1 : exCondition === 'Good' ? 1.0 : 0.85;
                const val = Math.round(baseVal * multiplier);
                setCalculatedExchangeValue(val);
                showToast(`Estimated exchange value calculated: ₹${val.toLocaleString('en-IN')}`);
              }}
              className="w-full bg-gradient-to-r from-orange-500 to-purple-600 hover:opacity-95 text-white font-bold py-4 rounded-2xl shadow-lg transition text-sm"
            >
              Calculate Exchange Value
            </button>

            {calculatedExchangeValue !== null && (
              <div className="bg-slate-950 border border-purple-500/30 p-6 rounded-2xl text-center space-y-4 animate-fade-in">
                <span className="text-xs text-slate-400 font-semibold uppercase">Estimated Trade-In Value</span>
                <h2 className="text-4xl font-black text-orange-400">₹{calculatedExchangeValue.toLocaleString('en-IN')}</h2>
                <p className="text-xs text-slate-400">Includes special ₹15,000 Diwali Dhamaka Exchange Bonus. Final inspection at doorstep upon delivery.</p>
                <button 
                  onClick={() => {
                    setAppliedExchange({ model: exModel, value: calculatedExchangeValue });
                    setActiveTab('catalog');
                    showToast("Exchange discount applied! Choose your new smartphone.");
                  }}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-xl text-xs transition shadow-md"
                >
                  Apply to New Smartphone
                </button>
              </div>
            )}
          </div>
        </main>
      )}

      {/* 5. DIWALI OFFERS VIEW */}
      {activeTab === 'diwali' && (
        <main className="max-w-7xl mx-auto px-4 py-12 space-y-10">
          <div className="text-center space-y-3">
            <span className="bg-yellow-500/20 text-yellow-300 text-xs font-bold px-3.5 py-1.5 rounded-full">FESTIVAL OF LIGHTS</span>
            <h1 className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">Diwali Dhamaka Offers & Discounts</h1>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">Unbeatable deals across all flagship smartphones with zero hidden fees.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-4">
              <div className="w-12 h-12 bg-orange-500/20 text-orange-400 rounded-2xl flex items-center justify-center font-bold text-lg">💳</div>
              <h3 className="font-bold text-lg">Bank Discounts</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Get up to ₹10,000 instant discount on selected credit and debit cards from HDFC, ICICI, and SBI.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-4">
              <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center font-bold text-lg">🔄</div>
              <h3 className="font-bold text-lg">Exchange Bonus</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Exchange your old smartphone and save up to ₹15,000 extra on top of device valuation.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-4">
              <div className="w-12 h-12 bg-yellow-500/20 text-yellow-400 rounded-2xl flex items-center justify-center font-bold text-lg">🏷️</div>
              <h3 className="font-bold text-lg">Coupon Savings</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Use coupon code <span className="text-orange-400 font-bold">DIWALI10</span> at checkout for instant festive cart discounts.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-4">
              <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-2xl flex items-center justify-center font-bold text-lg">⚡</div>
              <h3 className="font-bold text-lg">No-Cost EMI</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Buy your dream smartphone with easy 3, 6, or 9 months No-Cost EMI options on major bank credit cards.</p>
            </div>
          </div>
        </main>
      )}

      {/* 6. ABOUT US VIEW */}
      {activeTab === 'about' && (
        <main className="max-w-4xl mx-auto px-4 py-12 space-y-8">
          <div className="bg-slate-900 border border-slate-800 p-8 sm:p-12 rounded-3xl shadow-2xl space-y-6">
            <h1 className="text-3xl font-black">About PhoneWorld</h1>
            <p className="text-slate-300 text-sm leading-relaxed">
              PhoneWorld is your trusted destination for buying the latest smartphones at exciting prices. We make upgrading your phone simple with amazing Diwali deals, bank offers, and convenient old-phone exchange options.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
                <h3 className="font-bold text-sm text-orange-400">Our Mission</h3>
                <p className="text-xs text-slate-400">To make cutting-edge smartphone technology accessible and affordable for every customer across India.</p>
              </div>
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
                <h3 className="font-bold text-sm text-purple-400">Easy Exchange</h3>
                <p className="text-xs text-slate-400">Hassle-free doorstep exchange valuation with maximum returns on your old devices.</p>
              </div>
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
                <h3 className="font-bold text-sm text-yellow-400">Secure Checkout</h3>
                <p className="text-xs text-slate-400">100% encrypted payments with multiple convenient payment methods and COD.</p>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* 7. CONTACT US VIEW */}
      {activeTab === 'contact' && (
        <main className="max-w-4xl mx-auto px-4 py-12 space-y-8">
          <div className="bg-slate-900 border border-slate-800 p-8 sm:p-12 rounded-3xl shadow-2xl space-y-6">
            <h1 className="text-3xl font-black">Contact Us</h1>
            <p className="text-slate-400 text-sm">Have questions about your order, exchange, or Diwali offers? Reach out to our 24/7 support team.</p>

            {contactSubmitted ? (
              <div className="bg-green-500/10 border border-green-500/30 p-6 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-green-400 mx-auto" />
                <h3 className="font-bold text-base text-green-300">Message Received!</h3>
                <p className="text-xs text-slate-300">Thank you for contacting PhoneWorld. Our support executive will respond within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setContactSubmitted(true); showToast("Support ticket submitted successfully!"); }} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name" required value={contactForm.name} onChange={(e) => setContactForm({...contactForm, name: e.target.value})} className="bg-slate-800 border border-slate-700 p-3 rounded-xl text-sm text-slate-200" />
                  <input type="email" placeholder="Email Address" required value={contactForm.email} onChange={(e) => setContactForm({...contactForm, email: e.target.value})} className="bg-slate-800 border border-slate-700 p-3 rounded-xl text-sm text-slate-200" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Phone Number" required value={contactForm.phone} onChange={(e) => setContactForm({...contactForm, phone: e.target.value})} className="bg-slate-800 border border-slate-700 p-3 rounded-xl text-sm text-slate-200" />
                  <input type="text" placeholder="Subject" required value={contactForm.subject} onChange={(e) => setContactForm({...contactForm, subject: e.target.value})} className="bg-slate-800 border border-slate-700 p-3 rounded-xl text-sm text-slate-200" />
                </div>
                <textarea rows="4" placeholder="Your Message..." required value={contactForm.message} onChange={(e) => setContactForm({...contactForm, message: e.target.value})} className="w-full bg-slate-800 border border-slate-700 p-3 rounded-xl text-sm text-slate-200" />
                <button type="submit" className="bg-gradient-to-r from-orange-500 to-purple-600 text-white font-bold px-8 py-3.5 rounded-xl text-xs transition shadow-lg">Submit Request</button>
              </form>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800 text-xs">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-400" />
                <div>
                  <span className="text-slate-400 block">Email Support</span>
                  <span className="font-bold text-slate-200">support@phoneworld.example</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <div>
                  <span className="text-slate-400 block">Helpline</span>
                  <span className="font-bold text-slate-200">+91 98765 43210</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-yellow-400" />
                <div>
                  <span className="text-slate-400 block">Headquarters</span>
                  <span className="font-bold text-slate-200">BKC, Mumbai, India</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* 8. WISHLIST VIEW */}
      {activeTab === 'wishlist' && (
        <main className="max-w-7xl mx-auto px-4 py-12 space-y-8">
          <h1 className="text-2xl sm:text-3xl font-black">My Wishlist ({wishlist.length})</h1>
          {wishlist.length === 0 ? (
            <div className="text-center py-20 bg-slate-900 border border-slate-800 rounded-3xl space-y-4">
              <Heart className="w-16 h-16 text-slate-600 mx-auto" />
              <p className="text-slate-400 text-sm">Your wishlist is currently empty.</p>
              <button onClick={() => setActiveTab('catalog')} className="bg-orange-500 text-white font-bold px-6 py-3 rounded-xl text-xs">Explore Smartphones</button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {wishlist.map(phone => (
                <div key={phone.id} className="bg-slate-900 border border-slate-800 p-5 rounded-3xl space-y-4">
                  <img src={phone.image} alt={phone.model} className="w-32 h-44 object-cover mx-auto rounded-xl" />
                  <h3 className="font-bold text-sm">{phone.model}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-orange-400 font-bold">₹{phone.price.toLocaleString('en-IN')}</span>
                    <button onClick={(e) => toggleWishlist(phone, e)} className="text-red-400 text-xs font-semibold hover:underline">Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      )}

      {/* 9. CART VIEW */}
      {activeTab === 'cart' && (
        <main className="max-w-7xl mx-auto px-4 py-12 space-y-8">
          <h1 className="text-2xl sm:text-3xl font-black">Shopping Cart ({cart.reduce((a, b) => a + b.qty, 0)})</h1>
          {cart.length === 0 ? (
            <div className="text-center py-20 bg-slate-900 border border-slate-800 rounded-3xl space-y-4">
              <ShoppingBag className="w-16 h-16 text-slate-600 mx-auto" />
              <p className="text-slate-400 text-sm">Your shopping cart is empty.</p>
              <button onClick={() => setActiveTab('catalog')} className="bg-orange-500 text-white font-bold px-6 py-3 rounded-xl text-xs">Start Shopping</button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="bg-slate-900 border border-slate-800 p-4 sm:p-6 rounded-2xl flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <img src={item.image} alt={item.model} className="w-16 h-20 object-cover rounded-xl" />
                      <div>
                        <h3 className="font-bold text-sm">{item.model}</h3>
                        <p className="text-xs text-orange-400 font-bold mt-1">₹{item.price.toLocaleString('en-IN')}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center bg-slate-800 border border-slate-700 rounded-xl">
                        <button onClick={() => updateCartQty(item.id, -1)} className="px-3 py-1 font-bold text-slate-300">-</button>
                        <span className="px-3 text-xs font-bold">{item.qty}</span>
                        <button onClick={() => updateCartQty(item.id, 1)} className="px-3 py-1 font-bold text-slate-300">+</button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-300 p-2"><X className="w-4 h-4" /></button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-4 bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-4 h-fit">
                <h3 className="font-bold text-base border-b border-slate-800 pb-3">Order Summary</h3>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{cartSubtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-green-400 font-semibold">
                    <span>Diwali Special Discount (8%)</span>
                    <span>-₹{diwaliDiscountTotal.toLocaleString('en-IN')}</span>
                  </div>
                  {appliedExchange && (
                    <div className="flex justify-between text-purple-400 font-semibold">
                      <span>Exchange Bonus ({appliedExchange.model})</span>
                      <span>-₹{appliedExchange.value.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  <div className="flex justify-between font-bold text-sm text-white pt-2 border-t border-slate-800">
                    <span>Final Payable Amount (INR)</span>
                    <span className="text-orange-400">₹{finalPayable.toLocaleString('en-IN')} INR</span>
                  </div>
                </div>

                <button onClick={() => setActiveTab('checkout')} className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-3.5 rounded-2xl text-xs transition shadow-lg">
                  Proceed to Checkout (₹{finalPayable.toLocaleString('en-IN')} INR)
                </button>
              </div>
            </div>
          )}
        </main>
      )}

      {/* 10. CHECKOUT VIEW */}
      {activeTab === 'checkout' && (
        <main className="max-w-4xl mx-auto px-4 py-12 space-y-8">
          <div className="text-center space-y-2">
            <span className="bg-orange-500/20 text-orange-400 text-xs font-bold px-3 py-1 rounded-full">SECURE CHECKOUT</span>
            <h1 className="text-3xl font-black">Complete Your Order</h1>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl space-y-8">
            {checkoutStep === 1 && (
              <div className="space-y-6">
                <h3 className="font-bold text-lg border-b border-slate-800 pb-3">1. Shipping Address & Pincode</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name" value={addressForm.name} onChange={(e) => setAddressForm({...addressForm, name: e.target.value})} className="bg-slate-800 border border-slate-700 p-3 rounded-xl text-sm text-slate-200" />
                  <input type="text" placeholder="Phone Number" value={addressForm.phone} onChange={(e) => setAddressForm({...addressForm, phone: e.target.value})} className="bg-slate-800 border border-slate-700 p-3 rounded-xl text-sm text-slate-200" />
                  <input type="text" placeholder="Street Address" value={addressForm.address} onChange={(e) => setAddressForm({...addressForm, address: e.target.value})} className="sm:col-span-2 bg-slate-800 border border-slate-700 p-3 rounded-xl text-sm text-slate-200" />
                  <input type="text" placeholder="City" value={addressForm.city} onChange={(e) => setAddressForm({...addressForm, city: e.target.value})} className="bg-slate-800 border border-slate-700 p-3 rounded-xl text-sm text-slate-200" />
                  <input type="text" placeholder="Pincode (e.g., 400001)" value={addressForm.pincode} onChange={(e) => setAddressForm({...addressForm, pincode: e.target.value})} className="bg-slate-800 border border-slate-700 p-3 rounded-xl text-sm text-slate-200" />
                </div>
                <button onClick={() => setCheckoutStep(2)} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-2xl text-xs transition">
                  Proceed to Payment
                </button>
              </div>
            )}

            {checkoutStep === 2 && (
              <div className="space-y-6">
                <h3 className="font-bold text-lg border-b border-slate-800 pb-3">2. Choose Payment Method</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: 'upi', label: 'UPI (Google Pay, PhonePe, Paytm)', icon: '📱' },
                    { id: 'credit', label: 'Credit Card (Visa, Mastercard, RuPay)', icon: '💳' },
                    { id: 'debit', label: 'Debit Card', icon: '🏧' },
                    { id: 'netbanking', label: 'Net Banking', icon: '🏦' },
                    { id: 'emi', label: 'No-Cost EMI', icon: '⏳' },
                    { id: 'cod', label: 'Cash on Delivery (COD)', icon: '💵' }
                  ].map(m => (
                    <div 
                      key={m.id}
                      onClick={() => setPaymentMethod(m.id)}
                      className={`p-4 rounded-2xl border cursor-pointer flex items-center gap-3 transition ${paymentMethod === m.id ? 'bg-orange-500/10 border-orange-500 text-orange-400 font-bold' : 'bg-slate-800 border-slate-700 text-slate-300'}`}
                    >
                      <span className="text-xl">{m.icon}</span>
                      <span className="text-xs">{m.label}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span>Payable Amount:</span>
                    <span className="font-bold text-orange-400 text-base">₹{finalPayable.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button onClick={() => setCheckoutStep(1)} className="bg-slate-800 text-slate-300 font-bold px-6 py-3 rounded-xl text-xs">Back</button>
                  <button onClick={() => setCheckoutStep(3)} className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:opacity-95 text-white font-bold py-3.5 rounded-2xl text-xs shadow-lg">
                    Place Order Now
                  </button>
                </div>
              </div>
            )}

            {checkoutStep === 3 && (
              <div className="text-center py-10 space-y-6">
                <CheckCircle2 className="w-20 h-20 text-green-400 mx-auto animate-bounce" />
                <h2 className="text-3xl font-black">Order Placed Successfully!</h2>
                <p className="text-slate-300 text-sm">Thank you for shopping during the PhoneWorld Diwali Dhamaka Sale. Your order #PW-84920 has been confirmed and will be delivered by October 30.</p>
                <button onClick={() => { setCart([]); setActiveTab('home'); setCheckoutStep(1); }} className="bg-orange-500 text-white font-bold px-8 py-3.5 rounded-xl text-xs">
                  Return to Homepage
                </button>
              </div>
            )}
          </div>
        </main>
      )}

      {/* FOOTER */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 mt-20 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-orange-500 p-0.5 flex items-center justify-center">
                <span className="text-white font-black text-sm">📱</span>
              </div>
              <span className="text-lg font-black text-white">PhoneWorld</span>
            </div>
            <p className="text-[11px] leading-relaxed">Upgrade Your World, One Phone at a Time! Your trusted destination for smartphones & Diwali offers.</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => setActiveTab('home')} className="hover:text-white">Home</button></li>
              <li><button onClick={() => setActiveTab('catalog')} className="hover:text-white">All Smartphones</button></li>
              <li><button onClick={() => setActiveTab('exchange')} className="hover:text-white">Exchange Old Phone</button></li>
              <li><button onClick={() => setActiveTab('diwali')} className="hover:text-white">Diwali Dhamaka Offers</button></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm">Customer Support</h4>
            <ul className="space-y-2">
              <li><button onClick={() => setActiveTab('contact')} className="hover:text-white">Contact Us</button></li>
              <li><button onClick={() => setActiveTab('about')} className="hover:text-white">About Us</button></li>
              <li><a href="#return" onClick={() => showToast("Viewing Return Policy info")} className="hover:text-white">Return Policy</a></li>
              <li><a href="#shipping" onClick={() => showToast("Viewing Shipping info")} className="hover:text-white">Shipping Information</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm">Policies</h4>
            <ul className="space-y-2">
              <li><a href="#privacy" onClick={() => showToast("Viewing Privacy Policy")} className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#terms" onClick={() => showToast("Viewing Terms & Conditions")} className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="#exchange-policy" onClick={() => showToast("Viewing Exchange Policy")} className="hover:text-white">Exchange Policy</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm">Newsletter</h4>
            <p className="text-[11px]">Subscribe to get notified about festive flash sales and exchange bonuses.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Your email..." className="bg-slate-800 border border-slate-700 px-3 py-2 rounded-xl text-xs text-slate-200 flex-1 focus:outline-none" />
              <button onClick={() => showToast("Subscribed successfully to newsletter!")} className="bg-orange-500 text-white font-bold px-4 py-2 rounded-xl text-xs">Join</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 mt-8 border-t border-slate-800/60 text-center text-[10px]">
          © 2026 PhoneWorld Inc. All rights reserved. Made with festive Diwali spirit in India.
        </div>
      </footer>

    </div>
  );
}