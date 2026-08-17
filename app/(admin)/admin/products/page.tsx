"use client";

import { useState } from "react";
import { useAdminStore, AdminProduct } from "@/lib/adminStore";
import {
  Plus,
  Search,
  Edit3,
  Trash2,
  CheckCircle2,
  ArrowLeft,
  Upload,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Link as LinkIcon,
  Quote,
  Sparkles,
  Save,
  Package,
  Layers,
  Image as ImageIcon
} from "lucide-react";

export default function AdminProductsPage() {
  const { products, addProduct, updateProduct, deleteProduct } = useAdminStore();
  
  // Page View Mode: "list" | "edit"
  const [viewMode, setViewMode] = useState<"list" | "edit">("list");
  
  // Filtering & Search
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedStatus, setSelectedStatus] = useState("ALL");

  // Active Editing Product State
  const [editingProduct, setEditingProduct] = useState<AdminProduct | null>(null);
  const [highlights, setHighlights] = useState<string[]>(["New Launch", "Best Seller", "30% Extrait"]);
  const [toast, setToast] = useState("");

  const filteredProducts = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.fragranceFamily.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "ALL" || p.category === selectedCategory;
    const matchesStatus = selectedStatus === "ALL" || p.status === selectedStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleOpenAdd = () => {
    setEditingProduct({
      id: `p-${Date.now()}`,
      name: "",
      slug: "",
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
      ],
      variants: [
        { volumeMl: 30, price: 5500, compareAtPrice: 6500, sku: "OZN-NEW-30", stockCount: 15 },
        { volumeMl: 50, price: 8500, compareAtPrice: 10000, sku: "OZN-NEW-50", stockCount: 10 },
        { volumeMl: 100, price: 14000, compareAtPrice: 16500, sku: "OZN-NEW-100", stockCount: 8 },
      ],
    });
    setHighlights(["New Launch", "30% Extrait"]);
    setViewMode("edit");
  };

  const handleOpenEdit = (product: AdminProduct) => {
    setEditingProduct({ ...product });
    setHighlights(["Best Seller", "30% Extrait", "90-Day Maceration"]);
    setViewMode("edit");
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct || !editingProduct.name || !editingProduct.slug) return;

    const exists = products.some((p) => p.id === editingProduct.id);
    if (exists) {
      updateProduct(editingProduct.id, editingProduct);
    } else {
      addProduct(editingProduct);
    }

    setViewMode("list");
    setEditingProduct(null);
    setToast("Product catalog updated successfully!");
    setTimeout(() => setToast(""), 3000);
  };

  const toggleHighlight = (tag: string) => {
    setHighlights((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // -------------------------------------------------------------
  // VIEW MODE 1: CATALOG INVENTORY LIST TABLE
  // -------------------------------------------------------------
  if (viewMode === "list") {
    return (
      <div className="space-y-8 text-left font-sans text-[#F7F3EE]">
        {toast && (
          <div className="fixed top-6 right-6 z-50 bg-[#143521] border border-emerald-500/60 text-emerald-200 px-5 py-3 rounded-lg shadow-2xl flex items-center gap-3 text-xs font-mono animate-in fade-in slide-in-from-top-4">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{toast}</span>
          </div>
        )}

        {/* HEADER BAR */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#B08D57]/30 pb-6 gap-4">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] block">
              SHOPIFY / CENTRA GRADE CATALOG ENGINE
            </span>
            <h1 className="font-serif text-3xl font-bold text-[#D4AF37]">
              Product Management Suite
            </h1>
            <p className="text-xs text-zinc-400 mt-1">
              Multi-variant pricing matrix, media gallery, olfactory note tags, and status control.
            </p>
          </div>

          <button
            onClick={handleOpenAdd}
            className="px-6 py-3.5 bg-[#D4AF37] text-[#0F0F0F] hover:bg-[#E5C158] font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-xl flex items-center space-x-2 shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>ADD NEW EXTRAIT</span>
          </button>
        </div>

        {/* FILTER & SEARCH CONTROL DECK */}
        <div className="bg-[#181818] border border-[#B08D57]/30 rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xl">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#D4AF37] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search name, slug, or notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-xs text-[#F7F3EE] placeholder:text-zinc-500 font-semibold focus:border-[#D4AF37] focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3.5 py-2.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-xs font-bold text-[#F7F3EE] focus:border-[#D4AF37] focus:outline-none"
            >
              <option value="ALL">All Categories</option>
              <option value="Oud Concentrés">Oud Concentrés</option>
              <option value="Luminous Series">Luminous Series</option>
              <option value="Signature Series">Signature Series</option>
            </select>

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3.5 py-2.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-xs font-bold text-[#F7F3EE] focus:border-[#D4AF37] focus:outline-none"
            >
              <option value="ALL">All Status</option>
              <option value="Active">Active Only</option>
              <option value="Draft">Draft Only</option>
              <option value="Archived">Archived</option>
            </select>
          </div>
        </div>

        {/* PRODUCTS TABLE */}
        <div className="bg-[#181818] border border-[#B08D57]/30 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl">
          <div className="flex justify-between items-center border-b border-[#B08D57]/20 pb-4">
            <h3 className="font-serif text-2xl font-bold text-[#F7F3EE]">
              Catalog Inventory ({filteredProducts.length})
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[#B08D57]/20 text-[#D4AF37] font-mono uppercase tracking-wider text-[10px]">
                  <th className="pb-3 font-bold">Perfume</th>
                  <th className="pb-3 font-bold">Status</th>
                  <th className="pb-3 font-bold">Variant Prices (30ml / 50ml / 100ml)</th>
                  <th className="pb-3 font-bold">Total Stock</th>
                  <th className="pb-3 font-bold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#B08D57]/10 font-mono">
                {filteredProducts.map((p) => {
                  const totalStock = p.variants?.reduce((sum, v) => sum + v.stockCount, 0) || 0;
                  return (
                    <tr key={p.id} className="hover:bg-[#222222] transition-colors">
                      <td className="py-4 font-serif font-bold text-sm text-[#F7F3EE] flex items-center space-x-3">
                        <img src={p.imageUrl} alt={p.name} className="w-12 h-14 object-contain rounded-xl bg-[#0F0F0F] p-1.5 border border-[#B08D57]/30" />
                        <div>
                          <span className="block font-bold text-[#F7F3EE]">{p.name}</span>
                          <span className="text-[10px] text-[#D4AF37] font-mono font-normal">/{p.slug}</span>
                          <span className="block text-[10px] text-zinc-400 font-sans font-normal mt-0.5">{p.fragranceFamily}</span>
                        </div>
                      </td>

                      <td className="py-4">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                          p.status === "Active" ? "bg-emerald-950 text-emerald-300 border border-emerald-500/30" : "bg-amber-950 text-amber-300 border border-amber-500/30"
                        }`}>
                          {p.status || "Active"}
                        </span>
                      </td>

                      <td className="py-4">
                        <div className="flex flex-wrap items-center gap-1.5">
                          {p.variants?.map((v) => (
                            <span key={v.volumeMl} className="px-2.5 py-1 bg-[#0F0F0F] border border-[#B08D57]/30 rounded-lg text-[10px] font-bold text-[#F7F3EE]">
                              {v.volumeMl}ml: <strong className="text-[#D4AF37]">৳{v.price.toLocaleString()}</strong>
                            </span>
                          ))}
                        </div>
                      </td>

                      <td className="py-4">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                          totalStock > 8 ? "bg-emerald-950 text-emerald-300 border border-emerald-500/30" : "bg-rose-950 text-rose-300 border border-rose-500/30"
                        }`}>
                          {totalStock > 0 ? `${totalStock} units` : "Out of Stock"}
                        </span>
                      </td>

                      <td className="py-4">
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => handleOpenEdit(p)}
                            className="px-3 py-1.5 bg-[#D4AF37] text-[#0F0F0F] hover:bg-[#E5C158] rounded-lg text-[11px] font-bold transition-all flex items-center space-x-1"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                            <span>Edit Full</span>
                          </button>

                          <button
                            onClick={() => deleteProduct(p.id)}
                            className="text-zinc-400 hover:text-rose-400 p-1.5 transition"
                            aria-label="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW MODE 2: DEDICATED 2-COLUMN FULL PAGE EDITOR WORKSPACE
  // (MATCHING USER SCREENSHOT LAYOUT IN OZNIOR LUXURY OBSIDIAN THEME)
  // -------------------------------------------------------------
  if (!editingProduct) return null;

  return (
    <div className="space-y-8 text-left font-sans text-[#F7F3EE] max-w-7xl mx-auto pb-16">
      {/* TOP HEADER BAR WITH BACK, TITLE, DISCARD, SAVE */}
      <div className="bg-[#181818] border border-[#B08D57]/30 rounded-2xl p-4 md:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-2xl">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setViewMode("list")}
            className="p-2 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-zinc-300 hover:text-[#D4AF37] transition"
            title="Back to Product Inventory"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D4AF37] block">
              CATALOG EDITOR WORKSPACE
            </span>
            <h1 className="font-serif text-2xl font-bold text-[#D4AF37]">
              {products.some((p) => p.id === editingProduct.id) ? `Edit Product: ${editingProduct.name}` : "Create New Extrait Perfume"}
            </h1>
            <p className="text-xs text-zinc-400">Update existing product details, variants, media, and inventory.</p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <button
            type="button"
            onClick={() => setViewMode("list")}
            className="px-5 py-2.5 rounded-xl text-xs font-mono font-bold text-[#F7F3EE] bg-[#2A2A2A] hover:bg-[#383838] transition border border-zinc-700"
          >
            Discard
          </button>

          <button
            type="button"
            onClick={handleSaveProduct}
            className="px-6 py-2.5 bg-[#D4AF37] text-[#0F0F0F] font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-[#E5C158] transition shadow-xl flex items-center gap-2"
          >
            <Save className="w-4 h-4" /> Save Product
          </button>
        </div>
      </div>

      {/* 2-COLUMN DASHBOARD WORKSPACE GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT COLUMN (2/3 Width - Main Details, Media, Variants, Notes) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* CARD 1: PRODUCT TITLE & RICH DESCRIPTION */}
          <div className="bg-[#181818] border border-[#B08D57]/30 rounded-2xl p-6 space-y-5 shadow-2xl">
            <h3 className="font-serif text-lg font-bold text-[#D4AF37] border-b border-[#B08D57]/20 pb-3">
              Basic Information
            </h3>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                Product Title *
              </label>
              <input
                type="text"
                required
                value={editingProduct.name}
                onChange={(e) =>
                  setEditingProduct({
                    ...editingProduct,
                    name: e.target.value,
                    slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
                  })
                }
                className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-sm font-bold text-[#F7F3EE] placeholder:text-zinc-500 focus:border-[#D4AF37] focus:outline-none"
                placeholder="e.g. Royale Oud Concentré"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                URL Slug *
              </label>
              <input
                type="text"
                required
                value={editingProduct.slug}
                onChange={(e) => setEditingProduct({ ...editingProduct, slug: e.target.value })}
                className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-xs font-mono text-[#D4AF37] focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            {/* Rich Description */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                Description & Story *
              </label>
              
              {/* Rich Text Mini Toolbar */}
              <div className="border border-[#B08D57]/40 rounded-xl overflow-hidden bg-[#0F0F0F]">
                <div className="bg-[#222222] border-b border-[#B08D57]/30 p-2 flex flex-wrap items-center gap-1.5 text-xs">
                  <button type="button" className="p-1.5 bg-[#333] text-[#F7F3EE] rounded font-bold hover:bg-[#D4AF37] hover:text-[#0F0F0F]" title="Bold"><Bold className="w-3.5 h-3.5" /></button>
                  <button type="button" className="p-1.5 bg-[#333] text-[#F7F3EE] rounded font-bold hover:bg-[#D4AF37] hover:text-[#0F0F0F]" title="Italic"><Italic className="w-3.5 h-3.5" /></button>
                  <button type="button" className="p-1.5 bg-[#333] text-[#F7F3EE] rounded font-bold hover:bg-[#D4AF37] hover:text-[#0F0F0F]" title="Underline"><Underline className="w-3.5 h-3.5" /></button>
                  <button type="button" className="p-1.5 bg-[#333] text-[#F7F3EE] rounded font-bold hover:bg-[#D4AF37] hover:text-[#0F0F0F]" title="Quote"><Quote className="w-3.5 h-3.5" /></button>
                  <button type="button" className="p-1.5 bg-[#333] text-[#F7F3EE] rounded font-bold hover:bg-[#D4AF37] hover:text-[#0F0F0F]" title="Bullet List"><List className="w-3.5 h-3.5" /></button>
                  <button type="button" className="p-1.5 bg-[#333] text-[#F7F3EE] rounded font-bold hover:bg-[#D4AF37] hover:text-[#0F0F0F]" title="Link"><LinkIcon className="w-3.5 h-3.5" /></button>
                </div>
                <textarea
                  required
                  rows={4}
                  value={editingProduct.description}
                  onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                  className="w-full p-4 bg-[#0F0F0F] text-[#F7F3EE] text-xs leading-relaxed focus:outline-none border-none resize-y"
                  placeholder="Enter full sensory narrative, distillation origin, and olfactory notes..."
                />
              </div>
            </div>
          </div>

          {/* CARD 2: MEDIA & GALLERY PREVIEW */}
          <div className="bg-[#181818] border border-[#B08D57]/30 rounded-2xl p-6 space-y-5 shadow-2xl">
            <h3 className="font-serif text-lg font-bold text-[#D4AF37] border-b border-[#B08D57]/20 pb-3 flex items-center justify-between">
              <span>Media & Gallery</span>
              <span className="text-xs font-mono text-zinc-400 font-normal">Primary bottle + thumbnails</span>
            </h3>

            {/* Primary Cover Image URL */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                Primary Bottle Cover Image URL *
              </label>
              <input
                type="text"
                required
                value={editingProduct.imageUrl}
                onChange={(e) => setEditingProduct({ ...editingProduct, imageUrl: e.target.value })}
                className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-xs font-mono text-[#D4AF37] focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            {/* Gallery Thumbnails Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="relative border-2 border-[#D4AF37] rounded-xl overflow-hidden aspect-square bg-[#0F0F0F] p-2 flex items-center justify-center">
                <span className="absolute top-1 left-1 bg-[#D4AF37] text-[#0F0F0F] text-[9px] font-mono font-bold px-1.5 py-0.5 rounded uppercase">COVER</span>
                <img src={editingProduct.imageUrl} alt="Cover" className="max-h-full max-w-full object-contain" />
              </div>

              {editingProduct.galleryImages.map((img, idx) => (
                <div key={idx} className="border border-[#B08D57]/30 rounded-xl overflow-hidden aspect-square bg-[#0F0F0F] p-2 flex items-center justify-center relative">
                  <img src={img} alt={`Gallery ${idx}`} className="max-h-full max-w-full object-contain" />
                </div>
              ))}
            </div>

            {/* Upload Placeholder Dropzone */}
            <div
              onClick={() => {
                const url = prompt("Enter additional gallery image URL:");
                if (url) {
                  setEditingProduct({
                    ...editingProduct,
                    galleryImages: [...editingProduct.galleryImages, url],
                  });
                }
              }}
              className="border-2 border-dashed border-[#B08D57]/40 hover:border-[#D4AF37] bg-[#0F0F0F] rounded-2xl p-6 text-center cursor-pointer transition space-y-2 group"
            >
              <div className="w-10 h-10 rounded-full bg-[#252525] group-hover:bg-[#D4AF37] group-hover:text-[#0F0F0F] text-[#D4AF37] flex items-center justify-center mx-auto transition">
                <Upload className="w-5 h-5" />
              </div>
              <p className="text-xs font-bold text-[#F7F3EE]">Click to upload images</p>
              <p className="text-[11px] text-zinc-500 font-mono">High-res PNG, JPG or WEBP up to 10MB</p>
            </div>
          </div>

          {/* CARD 3: BOTTLE VARIANT PRICING & INVENTORY MATRIX (30ml, 50ml, 100ml) */}
          <div className="bg-[#181818] border border-[#B08D57]/30 rounded-2xl p-6 space-y-5 shadow-2xl">
            <h3 className="font-serif text-lg font-bold text-[#D4AF37] border-b border-[#B08D57]/20 pb-3">
              Bottle Variants Matrix (30ml, 50ml, 100ml)
            </h3>

            <div className="space-y-4 font-mono">
              {editingProduct.variants.map((v, idx) => (
                <div key={v.volumeMl} className="p-4 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-[#D4AF37] uppercase">{v.volumeMl}ml Extrait Bottle Variant</span>
                    <span className="text-[10px] text-zinc-400">SKU: {v.sku}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div>
                      <label className="text-[10px] text-zinc-400 block mb-1">Selling Price (BDT ৳)</label>
                      <input
                        type="number"
                        value={v.price}
                        onChange={(e) => {
                          const newV = [...editingProduct.variants];
                          newV[idx].price = Number(e.target.value);
                          setEditingProduct({ ...editingProduct, variants: newV });
                        }}
                        className="w-full p-2.5 bg-[#181818] border border-[#B08D57]/40 text-[#F7F3EE] font-bold rounded-lg focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-zinc-400 block mb-1">SKU Code</label>
                      <input
                        type="text"
                        value={v.sku}
                        onChange={(e) => {
                          const newV = [...editingProduct.variants];
                          newV[idx].sku = e.target.value;
                          setEditingProduct({ ...editingProduct, variants: newV });
                        }}
                        className="w-full p-2.5 bg-[#181818] border border-[#B08D57]/40 text-[#D4AF37] rounded-lg focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-zinc-400 block mb-1">Stock Count</label>
                      <input
                        type="number"
                        value={v.stockCount}
                        onChange={(e) => {
                          const newV = [...editingProduct.variants];
                          newV[idx].stockCount = Number(e.target.value);
                          setEditingProduct({ ...editingProduct, variants: newV });
                        }}
                        className="w-full p-2.5 bg-[#181818] border border-[#B08D57]/40 text-[#F7F3EE] font-bold rounded-lg focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CARD 4: OLFACTORY NOTES & PYRAMIDS */}
          <div className="bg-[#181818] border border-[#B08D57]/30 rounded-2xl p-6 space-y-5 shadow-2xl">
            <h3 className="font-serif text-lg font-bold text-[#D4AF37] border-b border-[#B08D57]/20 pb-3">
              Olfactory Scent Pyramid Notes
            </h3>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-1.5">Top Notes (Comma Separated)</label>
                <input
                  type="text"
                  value={editingProduct.topNotes.join(", ")}
                  onChange={(e) => setEditingProduct({ ...editingProduct, topNotes: e.target.value.split(",").map((s) => s.trim()) })}
                  className="w-full p-3 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-[#F7F3EE] focus:border-[#D4AF37] focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-1.5">Heart Notes (Comma Separated)</label>
                <input
                  type="text"
                  value={editingProduct.heartNotes.join(", ")}
                  onChange={(e) => setEditingProduct({ ...editingProduct, heartNotes: e.target.value.split(",").map((s) => s.trim()) })}
                  className="w-full p-3 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-[#F7F3EE] focus:border-[#D4AF37] focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-1.5">Base Notes (Comma Separated)</label>
                <input
                  type="text"
                  value={editingProduct.baseNotes.join(", ")}
                  onChange={(e) => setEditingProduct({ ...editingProduct, baseNotes: e.target.value.split(",").map((s) => s.trim()) })}
                  className="w-full p-3 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-[#F7F3EE] focus:border-[#D4AF37] focus:outline-none"
                />
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN (1/3 Width - Organization, Status, Badges Sidebar) */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* CARD 1: STATUS DROPDOWN */}
          <div className="bg-[#181818] border border-[#B08D57]/30 rounded-2xl p-6 space-y-4 shadow-2xl">
            <h3 className="font-serif text-base font-bold text-[#D4AF37] border-b border-[#B08D57]/20 pb-2">
              Status
            </h3>
            <select
              value={editingProduct.status}
              onChange={(e) => setEditingProduct({ ...editingProduct, status: e.target.value as any })}
              className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-xs font-bold text-[#F7F3EE] focus:border-[#D4AF37] focus:outline-none"
            >
              <option value="Active">Active (Live on Website)</option>
              <option value="Draft">Draft (Hidden)</option>
              <option value="Archived">Archived</option>
            </select>
          </div>

          {/* CARD 2: ORGANIZATION (Category, Family, Gender, Season) */}
          <div className="bg-[#181818] border border-[#B08D57]/30 rounded-2xl p-6 space-y-4 shadow-2xl text-xs">
            <h3 className="font-serif text-base font-bold text-[#D4AF37] border-b border-[#B08D57]/20 pb-2">
              Organization
            </h3>

            <div>
              <label className="block font-mono font-bold uppercase text-zinc-400 mb-1.5">Main Category</label>
              <select
                value={editingProduct.category}
                onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}
                className="w-full p-3 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-[#F7F3EE] font-bold focus:border-[#D4AF37] focus:outline-none"
              >
                <option value="Oud Concentrés">Oud Concentrés</option>
                <option value="Luminous Series">Luminous Series</option>
                <option value="Signature Series">Signature Series</option>
                <option value="Floral Extrait">Floral Extrait</option>
              </select>
            </div>

            <div>
              <label className="block font-mono font-bold uppercase text-zinc-400 mb-1.5">Fragrance Family</label>
              <input
                type="text"
                value={editingProduct.fragranceFamily}
                onChange={(e) => setEditingProduct({ ...editingProduct, fragranceFamily: e.target.value })}
                className="w-full p-3 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-[#D4AF37] font-bold focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-mono font-bold uppercase text-zinc-400 mb-1.5">Gender Profile</label>
              <select
                value={editingProduct.gender}
                onChange={(e) => setEditingProduct({ ...editingProduct, gender: e.target.value as any })}
                className="w-full p-3 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-[#F7F3EE] font-bold focus:border-[#D4AF37] focus:outline-none"
              >
                <option value="Unisex">Unisex</option>
                <option value="Him">For Him</option>
                <option value="Her">For Her</option>
              </select>
            </div>

            <div>
              <label className="block font-mono font-bold uppercase text-zinc-400 mb-1.5">Season</label>
              <input
                type="text"
                value={editingProduct.season}
                onChange={(e) => setEditingProduct({ ...editingProduct, season: e.target.value })}
                className="w-full p-3 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-[#F7F3EE] focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-mono font-bold uppercase text-zinc-400 mb-1.5">Occasion</label>
              <input
                type="text"
                value={editingProduct.occasion}
                onChange={(e) => setEditingProduct({ ...editingProduct, occasion: e.target.value })}
                className="w-full p-3 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-[#F7F3EE] focus:border-[#D4AF37] focus:outline-none"
              />
            </div>
          </div>

          {/* CARD 3: HIGHLIGHTS & BADGES (CHECKBOXES MATCHING SCREENSHOT) */}
          <div className="bg-[#181818] border border-[#B08D57]/30 rounded-2xl p-6 space-y-4 shadow-2xl text-xs">
            <h3 className="font-serif text-base font-bold text-[#D4AF37] border-b border-[#B08D57]/20 pb-2">
              Highlights & Badges
            </h3>

            <div className="space-y-2.5">
              {[
                "Hot Demand",
                "New Launch",
                "30% Extrait",
                "90-Day Maceration",
                "Best Seller",
                "Limited Edition",
                "Hologram Sealed",
                "Free Delivery",
              ].map((tag) => (
                <div key={tag} className="flex items-center space-x-2.5 cursor-pointer" onClick={() => toggleHighlight(tag)}>
                  <input
                    type="checkbox"
                    checked={highlights.includes(tag)}
                    onChange={() => {}}
                    className="w-4 h-4 accent-[#D4AF37] rounded cursor-pointer"
                  />
                  <span className={`text-xs font-mono transition ${highlights.includes(tag) ? 'text-[#D4AF37] font-bold' : 'text-zinc-400'}`}>
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
