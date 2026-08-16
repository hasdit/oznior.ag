import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting OZNIOR Database Seeding...");

  // 1. GlobalSettings
  const settings = await prisma.globalSettings.upsert({
    where: { id: "default" },
    update: {},
    create: {
      id: "default",
      siteName: "OZNIOR",
      siteUrl: "https://oznior.com",
      supportEmail: "support@oznior.com",
      supportPhone: "+8801700000000",
      supportAddress: "House 12, Road 5, Dhanmondi, Dhaka, Bangladesh",
      currency: "BDT",
      timezone: "Asia/Dhaka",
    },
  });
  console.log("✅ GlobalSettings Seeded");

  // 2. Super Admin User
  const admin = await prisma.user.upsert({
    where: { email: "admin@oznior.com" },
    update: {},
    create: {
      email: "admin@oznior.com",
      firebaseUid: "SUPER_ADMIN_FIREBASE_UID_DEFAULT",
      fullName: "OZNIOR Super Admin",
      phone: "+8801700000000",
      role: "SUPER_ADMIN" as any,
    },
  });
  console.log("✅ Super Admin User Seeded:", admin.email);

  // 3. Default Warehouse
  const warehouse = await prisma.warehouse.upsert({
    where: { code: "DHK-01" },
    update: {},
    create: {
      code: "DHK-01",
      name: "Dhaka Central Hub",
      address: "Plot 8, Block C, Tejgaon Industrial Area, Dhaka",
    },
  });
  console.log("✅ Default Warehouse Seeded:", warehouse.name);

  // 4. Categories
  const categoryOud = await prisma.category.upsert({
    where: { slug: "oud-concentres" },
    update: {},
    create: {
      name: "Oud Concentrés",
      slug: "oud-concentres",
      description: "Extrait de Parfum concentrates featuring Cambodian & Assam Oud",
    },
  });

  const categoryAmber = await prisma.category.upsert({
    where: { slug: "amber-gold" },
    update: {},
    create: {
      name: "Amber Gold",
      slug: "amber-gold",
      description: "Luminous amber crystals and golden botanical accords",
    },
  });
  console.log("✅ Categories Seeded");

  // 5. Collections
  const collectionSignature = await prisma.collection.upsert({
    where: { slug: "signature-series" },
    update: {},
    create: {
      name: "Signature Series",
      slug: "signature-series",
      description: "Our flagship haute parfumerie collection",
      isSignature: true,
    },
  });
  console.log("✅ Collections Seeded");

  // 6. Sample Product & Variants
  const productOud = await prisma.product.upsert({
    where: { slug: "royale-oud-concentre" },
    update: {},
    create: {
      name: "Royale Oud Concentré",
      slug: "royale-oud-concentre",
      description: "An opulent fusion of rare Cambodian oud, damask rose, and golden amber crystals.",
      fragranceFamily: "Oud",
      gender: "Unisex",
      occasion: "Night",
      season: "Winter",
      longevityScore: 5,
      sillageScore: 5,
      topNotes: ["Bergamot", "Pink Pepper", "Saffron"],
      heartNotes: ["Damask Rose", "Jasmine", "Assam Oud"],
      baseNotes: ["Cambodian Oud", "Ambergris", "Sandalwood"],
      isFeatured: true,
      isBestSeller: true,
      categoryId: categoryOud.id,
      searchText: "royale oud concentre cambodian oud damask rose ambergris saffron unisex night winter",
    },
  });

  // Product Variants
  await prisma.productVariant.upsert({
    where: { sku: "OZN-ROY-50" },
    update: {},
    create: {
      productId: productOud.id,
      type: "STANDARD" as any,
      volumeMl: 50,
      sku: "OZN-ROY-50",
      price: 8500.00,
      compareAtPrice: 10000.00,
      stock: 50,
    },
  });

  await prisma.productVariant.upsert({
    where: { sku: "OZN-ROY-100" },
    update: {},
    create: {
      productId: productOud.id,
      type: "STANDARD" as any,
      volumeMl: 100,
      sku: "OZN-ROY-100",
      price: 14000.00,
      compareAtPrice: 16500.00,
      stock: 30,
    },
  });

  await prisma.productVariant.upsert({
    where: { sku: "OZN-ROY-SAMPLE" },
    update: {},
    create: {
      productId: productOud.id,
      type: "SAMPLE" as any,
      volumeMl: 5,
      sku: "OZN-ROY-SAMPLE",
      price: 950.00,
      stock: 100,
    },
  });
  console.log("✅ Sample Product & Variants Seeded");

  // 7. CMS Blocks
  await prisma.cMSBlock.upsert({
    where: { key: "homepage_hero" },
    update: {},
    create: {
      key: "homepage_hero",
      page: "homepage",
      position: 1,
      visibility: true,
      content: {
        headline: "ROYALE OUD CONCENTRÉ",
        subheadline: "An opulent fusion of rare Cambodian oud, damask rose, and golden amber.",
        ctaLabel: "EXPLORE DISCOVERY SET",
        ctaUrl: "/collections/signature-series",
      },
    },
  });
  console.log("✅ CMS Blocks Seeded");

  // 8. SEO Metadata Entries
  await prisma.sEO.upsert({
    where: { pageRoute: "/" },
    update: {},
    create: {
      pageRoute: "/",
      metaTitle: "OZNIOR — Haute Parfumerie & Luxury Fragrances",
      metaDescription: "L'Essence de l'Elégance Pure. Exclusive Cambodian Oud, Ambergris, and rare perfume concentrates.",
      canonicalUrl: "https://oznior.com",
    },
  });
  console.log("✅ SEO Metadata Seeded");

  console.log("🎉 OZNIOR Database Seeding Completed Successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding Error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
