import { Product } from "../context/CartContext";

export const products: Product[] = [
  // Wooden Furniture
  {
    id: 1,
    title: "Classic Oak Dining Table",
    category: "wooden",
    price: 1200,
    description:
      "A stunning handcrafted oak dining table that seats 6-8 people comfortably. Features traditional joinery and a rich, hand-rubbed finish that showcases the natural beauty of oak grain.",
    image:
      "https://images.unsplash.com/photo-1687180497278-ca4d736ecc99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3b29kZW4lMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzY2MTE4NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Solid Oak Wood",
      "Seats 6-8 People",
      "Hand-Rubbed Finish",
      "Traditional Joinery",
    ],
    material: "Premium Oak",
    dimensions: "200cm x 100cm x 75cm",
    color: "Natural Oak",
  },
  {
    id: 2,
    title: "Walnut Bookshelf",
    category: "wooden",
    price: 850,
    description:
      "Elegant walnut bookshelf with adjustable shelves. Perfect for displaying books, art pieces, and decorative items. Features smooth-gliding drawers at the bottom.",
    image:
      "https://images.unsplash.com/photo-1759307278083-852eb23b6e98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBjcmFmdHNtYW5zaGlwJTIwZGV0YWlsfGVufDF8fHx8MTc2NjA4NjczMXww&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Walnut Wood",
      "Adjustable Shelves",
      "Bottom Drawers",
      "Modern Design",
    ],
    material: "Walnut",
    dimensions: "180cm x 80cm x 35cm",
    color: "Dark Walnut",
  },
  {
    id: 3,
    title: "Mahogany Coffee Table",
    category: "wooden",
    price: 650,
    description:
      "Contemporary coffee table crafted from rich mahogany. Features a lower shelf for storage and elegant tapered legs.",
    image:
      "https://images.unsplash.com/photo-1687180497278-ca4d736ecc99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3b29kZW4lMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzY2MTE4NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Mahogany Wood",
      "Storage Shelf",
      "Tapered Legs",
      "Polished Finish",
    ],
    material: "Mahogany",
    dimensions: "120cm x 60cm x 45cm",
    color: "Rich Brown",
  },
  {
    id: 4,
    title: "Teak Wood Dresser",
    category: "wooden",
    price: 980,
    description:
      "Spacious teak dresser with six drawers. Features solid brass hardware and a protective coating for long-lasting beauty.",
    image:
      "https://images.unsplash.com/photo-1759307278083-852eb23b6e98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBjcmFmdHNtYW5zaGlwJTIwZGV0YWlsfGVufDF8fHx8MTc2NjA4NjczMXww&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Teak Wood",
      "6 Drawers",
      "Brass Hardware",
      "Protective Coating",
    ],
    material: "Teak",
    dimensions: "150cm x 50cm x 90cm",
    color: "Golden Teak",
  },

  // Chandeliers
  {
    id: 5,
    title: "Crystal Grand Chandelier",
    category: "chandelier",
    price: 2500,
    description:
      "Magnificent crystal chandelier with cascading tiers. Features premium K9 crystals and accommodates 12 LED bulbs for brilliant illumination.",
    image:
      "https://images.unsplash.com/photo-1765118106411-dccdfb21f77d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlzdGFsJTIwY2hhbmRlbGllciUyMGVsZWdhbnR8ZW58MXx8fHwxNzY2MDM5MjY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "K9 Crystal",
      "12 Light Capacity",
      "LED Compatible",
      "Cascading Design",
    ],
    material: "Crystal & Brass",
    dimensions: "80cm diameter x 100cm height",
    color: "Gold & Crystal",
  },
  {
    id: 6,
    title: "Modern Brass Chandelier",
    category: "chandelier",
    price: 1800,
    description:
      "Contemporary brass chandelier with geometric design. Features adjustable arms and dimmable LED compatibility.",
    image:
      "https://images.unsplash.com/photo-1765118106411-dccdfb21f77d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlzdGFsJTIwY2hhbmRlbGllciUyMGVsZWdhbnR8ZW58MXx8fHwxNzY2MDM5MjY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Solid Brass",
      "Geometric Design",
      "Adjustable Arms",
      "Dimmable",
    ],
    material: "Brass",
    dimensions: "70cm diameter x 80cm height",
    color: "Antique Brass",
  },
  {
    id: 7,
    title: "Classic Empire Chandelier",
    category: "chandelier",
    price: 2200,
    description:
      "Traditional empire-style chandelier with hand-cut crystals. Perfect for grand dining rooms and entryways.",
    image:
      "https://images.unsplash.com/photo-1765118106411-dccdfb21f77d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlzdGFsJTIwY2hhbmRlbGllciUyMGVsZWdhbnR8ZW58MXx8fHwxNzY2MDM5MjY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Hand-Cut Crystal",
      "Empire Style",
      "16 Lights",
      "Ornate Details",
    ],
    material: "Crystal & Gold",
    dimensions: "90cm diameter x 120cm height",
    color: "Gold & Clear Crystal",
  },
  {
    id: 8,
    title: "Mini Crystal Pendant",
    category: "chandelier",
    price: 450,
    description:
      "Compact crystal pendant light ideal for smaller spaces. Features sparkling crystals and a polished chrome finish.",
    image:
      "https://images.unsplash.com/photo-1765118106411-dccdfb21f77d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlzdGFsJTIwY2hhbmRlbGllciUyMGVsZWdhbnR8ZW58MXx8fHwxNzY2MDM5MjY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Compact Design",
      "Crystal Accents",
      "Chrome Finish",
      "Single Light",
    ],
    material: "Crystal & Chrome",
    dimensions: "25cm diameter x 40cm height",
    color: "Chrome & Crystal",
  },

  // Sofas
  {
    id: 9,
    title: "Luxury Velvet Sofa",
    category: "sofa",
    price: 3200,
    description:
      "Sumptuous velvet sofa with deep cushioning and solid wood frame. Features removable cushions and stain-resistant fabric treatment.",
    image:
      "https://images.unsplash.com/photo-1759722668253-1767030ad9b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzb2ZhJTIwbGl2aW5nJTIwcm9vbXxlbnwxfHx8fDE3NjYxMTg3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Premium Velvet",
      "Deep Cushioning",
      "Wood Frame",
      "Stain Resistant",
    ],
    material: "Velvet & Hardwood",
    dimensions: "220cm x 95cm x 85cm",
    color: "Emerald Green",
  },
  {
    id: 10,
    title: "Leather Sectional Sofa",
    category: "sofa",
    price: 4500,
    description:
      "Spacious L-shaped sectional in top-grain leather. Features reclining seats and built-in USB charging ports.",
    image:
      "https://images.unsplash.com/photo-1759722668253-1767030ad9b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzb2ZhJTIwbGl2aW5nJTIwcm9vbXxlbnwxfHx8fDE3NjYxMTg3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    features: ["Top-Grain Leather", "Reclining Seats", "USB Ports", "L-Shaped"],
    material: "Leather",
    dimensions: "280cm x 180cm x 90cm",
    color: "Chocolate Brown",
  },
  {
    id: 11,
    title: "Mid-Century Modern Sofa",
    category: "sofa",
    price: 2800,
    description:
      "Iconic mid-century design with button tufting and tapered wooden legs. Upholstered in durable fabric.",
    image:
      "https://images.unsplash.com/photo-1759722668253-1767030ad9b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzb2ZhJTIwbGl2aW5nJTIwcm9vbXxlbnwxfHx8fDE3NjYxMTg3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Button Tufting",
      "Wooden Legs",
      "Mid-Century Style",
      "Durable Fabric",
    ],
    material: "Fabric & Wood",
    dimensions: "200cm x 88cm x 82cm",
    color: "Charcoal Gray",
  },
  {
    id: 12,
    title: "Contemporary Loveseat",
    category: "sofa",
    price: 1600,
    description:
      "Compact two-seater perfect for apartments. Features plush cushions and modern clean lines.",
    image:
      "https://images.unsplash.com/photo-1759722668253-1767030ad9b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzb2ZhJTIwbGl2aW5nJTIwcm9vbXxlbnwxfHx8fDE3NjYxMTg3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    features: ["Compact Size", "Plush Cushions", "Modern Design", "2-Seater"],
    material: "Linen Blend",
    dimensions: "150cm x 85cm x 80cm",
    color: "Light Beige",
  },
];
