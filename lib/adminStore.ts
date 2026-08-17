import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface AdminSettings {
  announcementBarText: string;
  announcementEnabled: boolean;
  supportPhone: string;
  supportEmail: string;
  freeShippingThreshold: number;
  currencySymbol: string;
  maintenanceMode: boolean;
}

export interface AdminCMSHeroSlide {
  id: string;
  title: string;
  tag: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  imageUrl: string;
}

export interface ProductVariantOption {
  volumeMl: number;
  price: number;
  compareAtPrice?: number;
  sku: string;
  stockCount: number;
}

export interface AdminProduct {
  id: string;
  name: string;
  slug: string;
  category: string;
  fragranceFamily: string;
  gender: "Unisex" | "Him" | "Her";
  status: "Active" | "Draft" | "Archived";
  concentration: number;
  macerationDays: number;
  season: string;
  occasion: string;
  description: string;
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  imageUrl: string;
  galleryImages: string[];
  variants: ProductVariantOption[];
}

export interface AdminOrder {
  id: string;
  orderNumber: string;
  customerName: string;
  customerPhone: string;
  address: string;
  paymentMethod: "BKASH" | "NAGAD" | "CASH_ON_DELIVERY";
  last4Digits?: string;
  totalAmount: number;
  status: "Pending" | "Processing" | "Shipped" | "Delivered" | "Cancelled";
  createdAt: string;
  items: { name: string; volumeMl: number; price: number; quantity: number }[];
}

export interface AdminCoupon {
  id: string;
  code: string;
  discountType: "percentage" | "fixed";
  discountValue: number;
  minOrderValue: number;
  isActive: boolean;
}

export interface AdminReview {
  id: string;
  author: string;
  rating: number;
  perfumeName: string;
  comment: string;
  isVerified: boolean;
  isApproved: boolean;
  date: string;
}

export interface AdminCourierConfig {
  provider: "Steadfast" | "RedX" | "Pathao";
  apiKey: string;
  secretKey: string;
  merchantId: string;
  autoDispatch: boolean;
}

export interface AdminSEOCountry {
  siteTitle: string;
  metaDescription: string;
  keywords: string;
  ogImageUrl: string;
}

export interface AdminCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  isFeatured: boolean;
  productCount: number;
}

export interface AdminCollection {
  id: string;
  title: string;
  slug: string;
  description: string;
  badge: string;
  imageUrl: string;
  isPublished: boolean;
  isFeatured?: boolean;
  productIds?: string[];
}

export interface AdminFlashSale {
  id: string;
  title: string;
  discountPercentage: number;
  startDate: string;
  endDate: string;
  isActive: boolean;
  productIds: string[];
}

export interface AdminBlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  category?: string;
  readTime?: string;
  author: string;
  publishedAt: string;
  isPublished: boolean;
  imageUrl: string;
}

export interface AdminSupportTicket {
  id: string;
  ticketNumber: string;
  customerName: string;
  customerPhone: string;
  subject: string;
  message: string;
  status: "Open" | "Replied" | "Closed";
  createdAt: string;
  reply?: string;
}

export interface AdminShipment {
  id: string;
  trackingNumber: string;
  courier: string;
  consignee: string;
  destination: string;
  status: "In Transit" | "Out for Delivery" | "Delivered" | "Failed";
  shippedAt: string;
}

export interface AdminIntegration {
  // Meta Facebook & Instagram
  fbPixelId: string;
  fbCapiToken: string;
  fbTestEventCode: string;

  // Google Tracking Suite
  gtmId: string;
  ga4MeasurementId: string;
  googleAdsConversionId: string;
  googleAdsConversionLabel: string;

  // Social Ad Pixels
  tiktokPixelId: string;
  pinterestTagId: string;
  snapchatPixelId: string;

  // Customer Chat & Support
  whatsappNumber: string;
  tawktoPropertyId: string;
  messengerAppId: string;

  // SMS Gateway
  smsProvider: string;
  smsSenderId: string;
  smsApiKey: string;

  // Behavior & Heatmaps
  clarityProjectId: string;
  hotjarSiteId: string;
}

export interface AdminWarehouse {
  id: string;
  name: string;
  code: string;
  location: string;
  manager: string;
  contact: string;
  stockUnits: number;
}

export interface AdminVendor {
  id: string;
  companyName: string;
  materialType: string;
  country: string;
  contactPerson: string;
  status: "Verified" | "Pending";
}

export interface AdminTeamMember {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "Super Admin" | "Store Manager" | "Support Specialist" | "Logistics Officer" | "Content Editor";
  status: "Active" | "Suspended" | "Pending Inviting";
  lastActive: string;
  avatarUrl?: string;
  permissions: string[];
}

interface AdminState {
  // Settings
  settings: AdminSettings;
  updateSettings: (newSettings: Partial<AdminSettings>) => void;

  // Admin Team & Access Control
  teamMembers: AdminTeamMember[];
  addTeamMember: (member: AdminTeamMember) => void;
  updateTeamMember: (id: string, updated: Partial<AdminTeamMember>) => void;
  deleteTeamMember: (id: string) => void;

  // Hero Campaign CMS
  heroSlides: AdminCMSHeroSlide[];
  updateHeroSlide: (id: string, updated: Partial<AdminCMSHeroSlide>) => void;
  addHeroSlide: (slide: AdminCMSHeroSlide) => void;
  deleteHeroSlide: (id: string) => void;

  // Products CMS
  products: AdminProduct[];
  updateProduct: (id: string, updated: Partial<AdminProduct>) => void;
  addProduct: (product: AdminProduct) => void;
  deleteProduct: (id: string) => void;

  // Categories
  categories: AdminCategory[];
  addCategory: (category: AdminCategory) => void;
  deleteCategory: (id: string) => void;

  // Collections
  collections: AdminCollection[];
  addCollection: (col: AdminCollection) => void;
  toggleCollection: (id: string) => void;
  deleteCollection: (id: string) => void;

  // Flash Sales
  flashSales: AdminFlashSale[];
  addFlashSale: (sale: AdminFlashSale) => void;
  toggleFlashSale: (id: string) => void;
  deleteFlashSale: (id: string) => void;

  // Blog / Journal
  blogPosts: AdminBlogPost[];
  addBlogPost: (post: AdminBlogPost) => void;
  toggleBlogPost: (id: string) => void;
  deleteBlogPost: (id: string) => void;

  // Support Tickets
  supportTickets: AdminSupportTicket[];
  replySupportTicket: (id: string, replyMessage: string) => void;
  closeSupportTicket: (id: string) => void;

  // Shipments
  shipments: AdminShipment[];
  updateShipmentStatus: (id: string, status: AdminShipment["status"]) => void;

  // Orders Management
  orders: AdminOrder[];
  addOrder: (order: Omit<AdminOrder, "id" | "createdAt">) => void;
  updateOrderStatus: (id: string, status: AdminOrder["status"]) => void;

  // Coupons
  coupons: AdminCoupon[];
  addCoupon: (coupon: AdminCoupon) => void;
  toggleCoupon: (id: string) => void;
  deleteCoupon: (id: string) => void;

  // Reviews
  reviews: AdminReview[];
  approveReview: (id: string) => void;
  deleteReview: (id: string) => void;

  // Courier API Config
  courierConfig: AdminCourierConfig;
  updateCourierConfig: (config: Partial<AdminCourierConfig>) => void;

  // SEO Config
  seoConfig: AdminSEOCountry;
  updateSEOConfig: (seo: Partial<AdminSEOCountry>) => void;

  // Third-Party Integrations
  integrations: AdminIntegration;
  updateIntegrations: (config: Partial<AdminIntegration>) => void;

  // Warehouses
  warehouses: AdminWarehouse[];
  addWarehouse: (wh: AdminWarehouse) => void;

  // Vendors
  vendors: AdminVendor[];
  addVendor: (vendor: AdminVendor) => void;
}

const DEFAULT_SETTINGS: AdminSettings = {
  announcementBarText: "COMPLIMENTARY EXPRESS DELIVERY ACROSS BANGLADESH ON ORDERS OVER ৳ 5,000 BDT",
  announcementEnabled: true,
  supportPhone: "+8801700000000",
  supportEmail: "concierge@oznior.com",
  freeShippingThreshold: 5000,
  currencySymbol: "৳",
  maintenanceMode: false,
};

const DEFAULT_HERO_SLIDES: AdminCMSHeroSlide[] = [
  {
    id: "h1",
    title: "ROYALE OUD CONCENTRÉ",
    tag: "30% EXTRAIT DE PARFUM",
    subtitle: "Forged with 25-year aged wild Cambodian agarwood, Damask Rose, and Ambergris. Macerated for 90 days in copper vessels.",
    primaryCtaText: "EXPLORE HARVEST",
    primaryCtaLink: "/parfums?sort=new",
    secondaryCtaText: "VIEW ACCORDS",
    secondaryCtaLink: "/parfums/royale-oud-concentre",
    imageUrl: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1920&q=90",
  },
  {
    id: "h2",
    title: "AETERNA AMBER GOLD",
    tag: "LUMINOUS AMBER SERIES",
    subtitle: "Golden Baltic amber fused with Guatemalan cardamom and Madagascar vanilla pods for magnetic sensual warmth.",
    primaryCtaText: "DISCOVER AMBER",
    primaryCtaLink: "/parfums?family=amber",
    secondaryCtaText: "SHOP ALL EXTRAITS",
    secondaryCtaLink: "/parfums",
    imageUrl: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1920&q=90",
  },
];

const DEFAULT_PRODUCTS: AdminProduct[] = [
  {
    id: "p1",
    name: "Royale Oud Concentré",
    slug: "royale-oud-concentre",
    category: "Oud Concentrés",
    fragranceFamily: "Oud • Floral • Amber",
    gender: "Unisex",
    status: "Active",
    concentration: 30,
    macerationDays: 90,
    season: "Winter & Autumn",
    occasion: "Executive / Formal Evening",
    description: "An opulent fusion of 25-year aged wild Cambodian agarwood, damask rose, and golden amber crystals. Macerated in dark copper vessels for 90 days.",
    topNotes: ["Calabrian Bergamot", "Pink Pepper", "Kashmiri Saffron"],
    heartNotes: ["Damask Rose", "Jasmine Absolute", "Aged Assam Oud"],
    baseNotes: ["Wild Cambodian Oud", "Baltic Ambergris", "Mysore Sandalwood"],
    imageUrl: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=1200&q=85",
    ],
    variants: [
      { volumeMl: 30, price: 5500, compareAtPrice: 6500, sku: "OZN-ROY-30", stockCount: 15 },
      { volumeMl: 50, price: 8500, compareAtPrice: 10000, sku: "OZN-ROY-50", stockCount: 6 },
      { volumeMl: 100, price: 14000, compareAtPrice: 16500, sku: "OZN-ROY-100", stockCount: 8 },
    ],
  },
  {
    id: "p2",
    name: "Aeterna Amber Gold",
    slug: "aeterna-amber-gold",
    category: "Luminous Series",
    fragranceFamily: "Amber • Cardamom",
    gender: "Unisex",
    status: "Active",
    concentration: 30,
    macerationDays: 90,
    season: "Autumn & Winter",
    occasion: "Evening / Dates",
    description: "Golden Baltic amber fused with Guatemalan cardamom and Madagascar vanilla pods for a magnetic sensual warmth.",
    topNotes: ["Guatemalan Cardamom", "Bergamot", "Cinnamon"],
    heartNotes: ["Golden Amber Resin", "Labdanum", "Patchouli"],
    baseNotes: ["Madagascar Vanilla", "Benzoin", "Cashmere Wood"],
    imageUrl: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=85",
    ],
    variants: [
      { volumeMl: 30, price: 5000, compareAtPrice: 6000, sku: "OZN-AMB-30", stockCount: 20 },
      { volumeMl: 50, price: 7800, compareAtPrice: 9000, sku: "OZN-AMB-50", stockCount: 12 },
      { volumeMl: 100, price: 12500, compareAtPrice: 15000, sku: "OZN-AMB-100", stockCount: 10 },
    ],
  },
  {
    id: "p3",
    name: "Noir Wood Intense",
    slug: "noir-wood-intense",
    category: "Signature Series",
    fragranceFamily: "Cedarwood • Vetiver • Pepper",
    gender: "Him",
    status: "Active",
    concentration: 30,
    macerationDays: 90,
    season: "All Season",
    occasion: "Business / Daily Formal",
    description: "Smokey Atlas cedarwood distilled with Haitian vetiver and black pepper for an authoritative masculine scent profile.",
    topNotes: ["Black Pepper", "Calabrian Bergamot"],
    heartNotes: ["Atlas Cedarwood", "Vetiver Root"],
    baseNotes: ["Smokey Leather", "Dark Amber"],
    imageUrl: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=85",
    ],
    variants: [
      { volumeMl: 30, price: 4800, compareAtPrice: 5800, sku: "OZN-NWD-30", stockCount: 10 },
      { volumeMl: 50, price: 7200, compareAtPrice: 8500, sku: "OZN-NWD-50", stockCount: 14 },
      { volumeMl: 100, price: 11800, compareAtPrice: 13500, sku: "OZN-NWD-100", stockCount: 5 },
    ],
  },
];

const DEFAULT_CATEGORIES: AdminCategory[] = [
  { id: "cat-1", name: "Oud Concentrés", slug: "oud-concentres", description: "Wild Cambodian and Assam agarwood extract par excellence.", isFeatured: true, productCount: 4 },
  { id: "cat-2", name: "Luminous Amber", slug: "luminous-amber", description: "Sensual amber resin blended with warm exotics.", isFeatured: true, productCount: 3 },
  { id: "cat-3", name: "Floral Extrait", slug: "floral-extrait", description: "Damask Rose, Jasmine Absolute, and rare blooms.", isFeatured: false, productCount: 2 },
  { id: "cat-4", name: "Wood & Earth", slug: "wood-earth", description: "Smokey Atlas cedar, Haitian vetiver, and leather notes.", isFeatured: true, productCount: 3 },
];

const DEFAULT_COLLECTIONS: AdminCollection[] = [
  { id: "col-1", title: "Royal Discovery Vault", slug: "royal-discovery-vault", description: "5x 10ml Extrait sampling coffret with hologram certification.", badge: "BEST SELLER", imageUrl: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80", isPublished: true },
  { id: "col-2", title: "Winter Evening Selection", slug: "winter-evening-selection", description: "Heavy macerated extraits designed for cold nights.", badge: "SEASONAL", imageUrl: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80", isPublished: true },
];

const DEFAULT_FLASH_SALES: AdminFlashSale[] = [
  { id: "fs-1", title: "MIDNIGHT OUD HARVEST 15% OFF", discountPercentage: 15, startDate: "2026-08-17", endDate: "2026-08-20", isActive: true, productIds: ["p1", "p2"] },
];

const DEFAULT_BLOGS: AdminBlogPost[] = [
  { id: "b1", title: "The 90-Day Maceration Philosophy in Copper Vessels", slug: "90-day-maceration-philosophy", excerpt: "Why aged agarwood requires dark, temperature-controlled copper aging to achieve velvet sillage.", author: "Master Perfumer Jean-Luc", publishedAt: "2026-08-14", isPublished: true, imageUrl: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80" },
  { id: "b2", title: "Decoding Extrait de Parfum Concentration vs Eau de Parfum", slug: "extrait-vs-edp-concentration", excerpt: "Understanding oil weight, longevity, and how 30% concentration transforms fragrance behavior on skin.", author: "OZNIOR Scent Lab", publishedAt: "2026-08-10", isPublished: true, imageUrl: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80" },
];

const DEFAULT_TICKETS: AdminSupportTicket[] = [
  { id: "t1", ticketNumber: "TICK-4912", customerName: "Mahbub Alam", customerPhone: "01755443322", subject: "Inquiry about Discovery Set Shipping to Chittagong", message: "Hi, how many days does Express shipping take to Agrabad, Chittagong?", status: "Open", createdAt: "2026-08-17 14:20" },
  { id: "t2", ticketNumber: "TICK-4890", customerName: "Sabrina Yasmin", customerPhone: "01811223344", subject: "Gift Packaging & Wax Seal Request", message: "Can I add a personalized hand-written gift message with gold wax seal?", status: "Replied", reply: "Yes! All luxury orders include complimentary personalized wax sealing.", createdAt: "2026-08-16 11:05" },
];

const DEFAULT_SHIPMENTS: AdminShipment[] = [
  { id: "shp-1", trackingNumber: "STDF-948271", courier: "Steadfast Express", consignee: "Tanvir Ahmed", destination: "Banani, Dhaka", status: "In Transit", shippedAt: "2026-08-17 10:00" },
  { id: "shp-2", trackingNumber: "REDX-841920", courier: "RedX Logistics", consignee: "Nusrat Jahan", destination: "Uttara, Dhaka", status: "Out for Delivery", shippedAt: "2026-08-17 08:30" },
];

const DEFAULT_INTEGRATIONS: AdminIntegration = {
  fbPixelId: "94829103948201",
  fbCapiToken: "EAAGk9812739182391028301928301",
  fbTestEventCode: "TEST94817",

  gtmId: "GTM-OZNIOR99",
  ga4MeasurementId: "G-OZNIOR2026",
  googleAdsConversionId: "AW-948271039",
  googleAdsConversionLabel: "k91_CJOw84MZEP",

  tiktokPixelId: "C91823901823948",
  pinterestTagId: "2618290182394",
  snapchatPixelId: "snap-9482019-oznior",

  whatsappNumber: "+8801700000000",
  tawktoPropertyId: "6491823910/1g94817",
  messengerAppId: "94817264910283",

  smsProvider: "BulkSMS BD",
  smsSenderId: "OZNIOR",
  smsApiKey: "bulk_bd_apiKey_94817264",

  clarityProjectId: "k941829018",
  hotjarSiteId: "3891028",
};

const DEFAULT_WAREHOUSES: AdminWarehouse[] = [
  { id: "w1", name: "Dhaka Central Flagship Hub", code: "DHK-01", location: "Gulshan 2, Dhaka", manager: "Kazi Anisur", contact: "+8801711002233", stockUnits: 450 },
  { id: "w2", name: "Chittagong Distribution Depot", code: "CTG-01", location: "GEC Circle, Chittagong", manager: "Rafiqul Islam", contact: "+8801811998877", stockUnits: 210 },
];

const DEFAULT_VENDORS: AdminVendor[] = [
  { id: "v1", companyName: "Koh Kong Wild Distillates", materialType: "Aged Cambodian Agarwood Oil", country: "Cambodia", contactPerson: "Heng Samrin", status: "Verified" },
  { id: "v2", companyName: "Verrerie de Haute-Provence", materialType: "50ml Heavy Crystal Bottles", country: "France", contactPerson: "Claire Dubois", status: "Verified" },
];

const DEFAULT_ORDERS: AdminOrder[] = [
  {
    id: "ord-1",
    orderNumber: "OZN-9482",
    customerName: "Tanvir Ahmed",
    customerPhone: "01711223344",
    address: "House 42, Road 11, Banani, Dhaka",
    paymentMethod: "BKASH",
    last4Digits: "4921",
    totalAmount: 8580,
    status: "Processing",
    createdAt: "2026-08-17 16:30",
    items: [
      { name: "Royale Oud Concentré", volumeMl: 50, price: 8500, quantity: 1 }
    ],
  },
  {
    id: "ord-2",
    orderNumber: "OZN-9483",
    customerName: "Nusrat Jahan",
    customerPhone: "01899887766",
    address: "Flat 4B, Sector 7, Uttara, Dhaka",
    paymentMethod: "CASH_ON_DELIVERY",
    totalAmount: 5080,
    status: "Pending",
    createdAt: "2026-08-17 17:15",
    items: [
      { name: "Aeterna Amber Gold", volumeMl: 30, price: 5000, quantity: 1 }
    ],
  },
];

const DEFAULT_COUPONS: AdminCoupon[] = [
  { id: "c1", code: "VIP10", discountType: "percentage", discountValue: 10, minOrderValue: 5000, isActive: true },
  { id: "c2", code: "ROYAL500", discountType: "fixed", discountValue: 500, minOrderValue: 8000, isActive: true },
];

const DEFAULT_REVIEWS: AdminReview[] = [
  { id: "r1", author: "Dr. Kazi Rahman", rating: 5, perfumeName: "Royale Oud Concentré", comment: "Incredible Cambodian agarwood profile. Sillage lasts over 18 hours easily.", isVerified: true, isApproved: true, date: "Aug 15, 2026" },
  { id: "r2", author: "Tahmina Chowdhury", rating: 5, perfumeName: "Aeterna Amber Gold", comment: "Warm, magnetic amber notes. Perfect for Dhaka winter evenings.", isVerified: true, isApproved: true, date: "Aug 12, 2026" },
];

const DEFAULT_COURIER: AdminCourierConfig = {
  provider: "Steadfast",
  apiKey: "stdf_api_94817264",
  secretKey: "stdf_sec_991823",
  merchantId: "MCH-8492",
  autoDispatch: true,
};

const DEFAULT_SEO: AdminSEOCountry = {
  siteTitle: "OZNIOR — Haute Parfumerie & Extrait Concentré",
  metaDescription: "Exclusive Cambodian Oud, Ambergris, and rare 30% Extrait de Parfum concentrates.",
  keywords: "OZNIOR, Haute Parfumerie, Extrait de Parfum, Cambodian Oud, Luxury Perfume Bangladesh",
  ogImageUrl: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=85",
};

const DEFAULT_TEAM_MEMBERS: AdminTeamMember[] = [
  {
    id: "user-1",
    name: "Master Admin (OZNIOR)",
    email: "admin@oznior.com",
    phone: "+8801700000000",
    role: "Super Admin",
    status: "Active",
    lastActive: "Just Now",
    permissions: ["All Access", "User Roles", "Integrations", "Orders", "Products", "CMS"],
  },
  {
    id: "user-2",
    name: "Kazi Anisur Rahman",
    email: "anisur@oznior.com",
    phone: "+8801711002233",
    role: "Store Manager",
    status: "Active",
    lastActive: "15 minutes ago",
    permissions: ["Products", "Inventory", "Orders", "Coupons", "Analytics"],
  },
  {
    id: "user-3",
    name: "Farhana Nusrat",
    email: "support@oznior.com",
    phone: "+8801811223344",
    role: "Support Specialist",
    status: "Active",
    lastActive: "1 hour ago",
    permissions: ["Support Tickets", "Customer CRM", "Reviews"],
  },
  {
    id: "user-4",
    name: "Shafiqul Islam",
    email: "logistics@oznior.com",
    phone: "+8801911998877",
    role: "Logistics Officer",
    status: "Active",
    lastActive: "3 hours ago",
    permissions: ["Shipments", "Courier API", "Warehouses"],
  },
];

export const useAdminStore = create<AdminState>()(
  persist(
    (set) => ({
      settings: DEFAULT_SETTINGS,
      updateSettings: (newSettings) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
        })),

      teamMembers: DEFAULT_TEAM_MEMBERS,
      addTeamMember: (member) =>
        set((state) => ({ teamMembers: [member, ...state.teamMembers] })),
      updateTeamMember: (id, updated) =>
        set((state) => ({
          teamMembers: state.teamMembers.map((m) => (m.id === id ? { ...m, ...updated } : m)),
        })),
      deleteTeamMember: (id) =>
        set((state) => ({ teamMembers: state.teamMembers.filter((m) => m.id !== id) })),

      heroSlides: DEFAULT_HERO_SLIDES,
      updateHeroSlide: (id, updated) =>
        set((state) => ({
          heroSlides: state.heroSlides.map((slide) =>
            slide.id === id ? { ...slide, ...updated } : slide
          ),
        })),
      addHeroSlide: (slide) =>
        set((state) => ({
          heroSlides: [...state.heroSlides, slide],
        })),
      deleteHeroSlide: (id) =>
        set((state) => ({
          heroSlides: state.heroSlides.filter((slide) => slide.id !== id),
        })),

      products: DEFAULT_PRODUCTS,
      updateProduct: (id, updated) =>
        set((state) => ({
          products: state.products.map((p) =>
            p.id === id ? { ...p, ...updated } : p
          ),
        })),
      addProduct: (product) =>
        set((state) => ({
          products: [product, ...state.products],
        })),
      deleteProduct: (id) =>
        set((state) => ({
          products: state.products.filter((p) => p.id !== id),
        })),

      categories: DEFAULT_CATEGORIES,
      addCategory: (category) =>
        set((state) => ({ categories: [...state.categories, category] })),
      deleteCategory: (id) =>
        set((state) => ({ categories: state.categories.filter((c) => c.id !== id) })),

      collections: DEFAULT_COLLECTIONS,
      addCollection: (col) =>
        set((state) => ({ collections: [...state.collections, col] })),
      toggleCollection: (id) =>
        set((state) => ({
          collections: state.collections.map((c) => (c.id === id ? { ...c, isPublished: !c.isPublished } : c)),
        })),
      deleteCollection: (id) =>
        set((state) => ({ collections: state.collections.filter((c) => c.id !== id) })),

      flashSales: DEFAULT_FLASH_SALES,
      addFlashSale: (sale) =>
        set((state) => ({ flashSales: [...state.flashSales, sale] })),
      toggleFlashSale: (id) =>
        set((state) => ({
          flashSales: state.flashSales.map((f) => (f.id === id ? { ...f, isActive: !f.isActive } : f)),
        })),
      deleteFlashSale: (id) =>
        set((state) => ({ flashSales: state.flashSales.filter((f) => f.id !== id) })),

      blogPosts: DEFAULT_BLOGS,
      addBlogPost: (post) =>
        set((state) => ({ blogPosts: [post, ...state.blogPosts] })),
      toggleBlogPost: (id) =>
        set((state) => ({
          blogPosts: state.blogPosts.map((b) => (b.id === id ? { ...b, isPublished: !b.isPublished } : b)),
        })),
      deleteBlogPost: (id) =>
        set((state) => ({ blogPosts: state.blogPosts.filter((b) => b.id !== id) })),

      supportTickets: DEFAULT_TICKETS,
      replySupportTicket: (id, replyMessage) =>
        set((state) => ({
          supportTickets: state.supportTickets.map((t) =>
            t.id === id ? { ...t, reply: replyMessage, status: "Replied" as const } : t
          ),
        })),
      closeSupportTicket: (id) =>
        set((state) => ({
          supportTickets: state.supportTickets.map((t) =>
            t.id === id ? { ...t, status: "Closed" as const } : t
          ),
        })),

      shipments: DEFAULT_SHIPMENTS,
      updateShipmentStatus: (id, status) =>
        set((state) => ({
          shipments: state.shipments.map((s) => (s.id === id ? { ...s, status } : s)),
        })),

      orders: DEFAULT_ORDERS,
      addOrder: (orderData) =>
        set((state) => {
          const newOrder: AdminOrder = {
            ...orderData,
            id: `ord-${Date.now()}`,
            createdAt: new Date().toLocaleString(),
          };
          return { orders: [newOrder, ...state.orders] };
        }),
      updateOrderStatus: (id, status) =>
        set((state) => ({
          orders: state.orders.map((o) => (o.id === id ? { ...o, status } : o)),
        })),

      coupons: DEFAULT_COUPONS,
      addCoupon: (coupon) =>
        set((state) => ({ coupons: [...state.coupons, coupon] })),
      toggleCoupon: (id) =>
        set((state) => ({
          coupons: state.coupons.map((c) => (c.id === id ? { ...c, isActive: !c.isActive } : c)),
        })),
      deleteCoupon: (id) =>
        set((state) => ({ coupons: state.coupons.filter((c) => c.id !== id) })),

      reviews: DEFAULT_REVIEWS,
      approveReview: (id) =>
        set((state) => ({
          reviews: state.reviews.map((r) => (r.id === id ? { ...r, isApproved: !r.isApproved } : r)),
        })),
      deleteReview: (id) =>
        set((state) => ({ reviews: state.reviews.filter((r) => r.id !== id) })),

      courierConfig: DEFAULT_COURIER,
      updateCourierConfig: (config) =>
        set((state) => ({ courierConfig: { ...state.courierConfig, ...config } })),

      seoConfig: DEFAULT_SEO,
      updateSEOConfig: (seo) =>
        set((state) => ({ seoConfig: { ...state.seoConfig, ...seo } })),

      integrations: DEFAULT_INTEGRATIONS,
      updateIntegrations: (config) =>
        set((state) => ({ integrations: { ...state.integrations, ...config } })),

      warehouses: DEFAULT_WAREHOUSES,
      addWarehouse: (wh) =>
        set((state) => ({ warehouses: [...state.warehouses, wh] })),

      vendors: DEFAULT_VENDORS,
      addVendor: (vendor) =>
        set((state) => ({ vendors: [...state.vendors, vendor] })),
    }),
    {
      name: "oznior-admin-storage-v2",
    }
  )
);
