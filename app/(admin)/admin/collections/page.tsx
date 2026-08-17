"use client";

import { useState } from "react";
import { useAdminStore, AdminCollection } from "@/lib/adminStore";
import {
  Plus,
  Trash2,
  Eye,
  EyeOff,
  CheckCircle2,
  ArrowLeft,
  Upload,
  Bold,
  Italic,
  Underline,
  Save,
  FolderTree,
  Edit3,
  Package
} from "lucide-react";

export default function AdminCollectionsPage() {
  const { collections, addCollection, toggleCollection, deleteCollection, products } = useAdminStore();
  
  // Page View Mode: "list" | "edit"
  const [viewMode, setViewMode] = useState<"list" | "edit">("list");
  
  // Active Editing Collection
  const [editingCol, setEditingCol] = useState<AdminCollection | null>(null);
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>([]);
  const [highlights, setHighlights] = useState<string[]>(["Featured on Homepage", "Includes Hologram Certificate"]);
  const [toast, setToast] = useState("");

  const handleOpenAdd = () => {
    setEditingCol({
      id: `col-${Date.now()}`,
      title: "",
      slug: "",
      description: "",
      badge: "NEW COFFRET",
      imageUrl: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=85",
      isPublished: true,
      isFeatured: true,
      productIds: products.slice(0, 2).map((p) => p.id),
    });
    setSelectedProductIds(products.slice(0, 2).map((p) => p.id));
    setHighlights(["Featured on Homepage", "Includes Hologram Certificate"]);
    setViewMode("edit");
  };

  const handleOpenEdit = (col: AdminCollection) => {
    setEditingCol({ ...col });
    setSelectedProductIds(col.productIds || products.map((p) => p.id));
    setHighlights(["Featured on Homepage", "Includes Hologram Certificate"]);
    setViewMode("edit");
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCol || !editingCol.title) return;

    const newCol: AdminCollection = {
      ...editingCol,
      slug: editingCol.slug || editingCol.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      productIds: selectedProductIds,
    };

    const exists = collections.some((c) => c.id === editingCol.id);
    if (exists) {
      // update collection
      deleteCollection(editingCol.id);
      addCollection(newCol);
    } else {
      addCollection(newCol);
    }

    setViewMode("list");
    setEditingCol(null);
    setToast("Curated Collection saved successfully!");
    setTimeout(() => setToast(""), 3000);
  };

  const toggleProductId = (id: string) => {
    setSelectedProductIds((prev) =>
      prev.includes(id) ? prev.filter((pId) => pId !== id) : [...prev, id]
    );
  };

  const toggleHighlight = (tag: string) => {
    setHighlights((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // -------------------------------------------------------------
  // VIEW MODE 1: COLLECTIONS LIST GRID
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
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#B08D57]/30 pb-6 gap-4">
          <div>
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#D4AF37] block">
              CURATED COFFRETS & DISCOVERY VAULTS
            </span>
            <h1 className="font-serif text-3xl font-bold text-[#D4AF37] flex items-center gap-2">
              <FolderTree className="w-7 h-7 text-[#D4AF37]" /> Curated Discovery Collections
            </h1>
            <p className="text-xs text-zinc-400 mt-1">
              Manage luxury discovery sets, seasonal Extrait sampling coffrets, and gift vaults.
            </p>
          </div>
          <button
            onClick={handleOpenAdd}
            className="bg-[#D4AF37] text-[#0F0F0F] font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-widest hover:bg-[#E5C158] transition shadow-xl flex items-center gap-2"
          >
            <Plus className="w-4 h-4" /> CREATE COLLECTION
          </button>
        </div>

        {/* COLLECTIONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collections.map((col) => (
            <div key={col.id} className="bg-[#181818] border border-[#B08D57]/30 rounded-2xl overflow-hidden flex flex-col sm:flex-row shadow-2xl group hover:border-[#D4AF37]/60 transition">
              <div className="sm:w-1/3 relative h-48 sm:h-auto bg-[#0F0F0F] p-2 flex items-center justify-center">
                <img src={col.imageUrl} alt={col.title} className="w-full h-full object-cover rounded-xl" />
                <span className="absolute top-4 left-4 bg-[#0F0F0F]/90 text-[#D4AF37] border border-[#B08D57]/40 text-[10px] font-mono font-bold px-2.5 py-1 rounded uppercase">
                  {col.badge}
                </span>
              </div>
              <div className="sm:w-2/3 p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-serif text-xl font-bold text-[#F7F3EE] group-hover:text-[#D4AF37] transition">{col.title}</h3>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleCollection(col.id)}
                        className={`p-1.5 rounded transition ${col.isPublished ? 'text-emerald-400 bg-emerald-950/60 border border-emerald-500/40' : 'text-amber-400 bg-amber-950/60 border border-amber-500/40'}`}
                        title={col.isPublished ? "Published Live" : "Draft Hidden"}
                      >
                        {col.isPublished ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={() => deleteCollection(col.id)}
                        className="p-1.5 text-zinc-400 hover:text-rose-400 transition"
                        title="Delete Collection"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-xs font-mono text-[#D4AF37]/80 mt-1">/parfums?gifts={col.slug}</p>
                  <p className="text-xs text-zinc-300 mt-3 line-clamp-2 leading-relaxed">{col.description}</p>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-[#B08D57]/20 text-xs font-mono">
                  <span className={col.isPublished ? "text-emerald-400 font-bold" : "text-amber-400 font-bold"}>
                    {col.isPublished ? "PUBLISHED LIVE" : "DRAFT HIDDEN"}
                  </span>
                  <button
                    onClick={() => handleOpenEdit(col)}
                    className="px-3.5 py-1.5 bg-[#D4AF37] text-[#0F0F0F] font-bold text-[11px] uppercase tracking-wider rounded-lg hover:bg-[#E5C158] transition flex items-center gap-1"
                  >
                    <Edit3 className="w-3.5 h-3.5" /> Edit Full
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW MODE 2: DEDICATED 2-COLUMN FULL PAGE COLLECTION WORKSPACE
  // (MATCHING THE SHOPIFY / CENTRA PRODUCT EDITOR STYLE IN OBSIDIAN THEME)
  // -------------------------------------------------------------
  if (!editingCol) return null;

  return (
    <div className="space-y-8 text-left font-sans text-[#F7F3EE] max-w-7xl mx-auto pb-16">
      {/* TOP HEADER CONTROL BAR */}
      <div className="bg-[#181818] border border-[#B08D57]/30 rounded-2xl p-4 md:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-2xl">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setViewMode("list")}
            className="p-2 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-zinc-300 hover:text-[#D4AF37] transition"
            title="Back to Collections List"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D4AF37] block">
              COLLECTION EDITOR WORKSPACE
            </span>
            <h1 className="font-serif text-2xl font-bold text-[#D4AF37]">
              {collections.some((c) => c.id === editingCol.id) ? `Edit Collection: ${editingCol.title}` : "Create New Discovery Collection"}
            </h1>
            <p className="text-xs text-zinc-400">Update collection details, photography, assigned perfumes, and homepage badges.</p>
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
            onClick={handleSave}
            className="px-6 py-2.5 bg-[#D4AF37] text-[#0F0F0F] font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-[#E5C158] transition shadow-xl flex items-center gap-2"
          >
            <Save className="w-4 h-4" /> Save Collection
          </button>
        </div>
      </div>

      {/* 2-COLUMN DASHBOARD WORKSPACE GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT COLUMN (2/3 Width - Main Info, Media & Assigned Products) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* CARD 1: COLLECTION TITLE, SLUG & DESCRIPTION */}
          <div className="bg-[#181818] border border-[#B08D57]/30 rounded-2xl p-6 space-y-5 shadow-2xl">
            <h3 className="font-serif text-lg font-bold text-[#D4AF37] border-b border-[#B08D57]/20 pb-3">
              Collection Details
            </h3>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                Collection Title *
              </label>
              <input
                type="text"
                required
                value={editingCol.title}
                onChange={(e) =>
                  setEditingCol({
                    ...editingCol,
                    title: e.target.value,
                    slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
                  })
                }
                className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-sm font-bold text-[#F7F3EE] placeholder:text-zinc-500 focus:border-[#D4AF37] focus:outline-none"
                placeholder="e.g. Cambodian Agarwood Master Vault"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                URL Slug
              </label>
              <input
                type="text"
                value={editingCol.slug}
                onChange={(e) => setEditingCol({ ...editingCol, slug: e.target.value })}
                className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-xs font-mono text-[#D4AF37] focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            {/* Description Textarea */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                Story & Description *
              </label>
              <div className="border border-[#B08D57]/40 rounded-xl overflow-hidden bg-[#0F0F0F]">
                <div className="bg-[#222222] border-b border-[#B08D57]/30 p-2 flex items-center gap-1.5 text-xs">
                  <button type="button" className="p-1.5 bg-[#333] text-[#F7F3EE] rounded font-bold hover:bg-[#D4AF37] hover:text-[#0F0F0F]"><Bold className="w-3.5 h-3.5" /></button>
                  <button type="button" className="p-1.5 bg-[#333] text-[#F7F3EE] rounded font-bold hover:bg-[#D4AF37] hover:text-[#0F0F0F]"><Italic className="w-3.5 h-3.5" /></button>
                  <button type="button" className="p-1.5 bg-[#333] text-[#F7F3EE] rounded font-bold hover:bg-[#D4AF37] hover:text-[#0F0F0F]"><Underline className="w-3.5 h-3.5" /></button>
                </div>
                <textarea
                  required
                  rows={4}
                  value={editingCol.description}
                  onChange={(e) => setEditingCol({ ...editingCol, description: e.target.value })}
                  className="w-full p-4 bg-[#0F0F0F] text-[#F7F3EE] text-xs leading-relaxed focus:outline-none border-none resize-y"
                  placeholder="Describe the coffret contents, maceration guarantee, and sampling luxury packaging..."
                />
              </div>
            </div>
          </div>

          {/* CARD 2: COLLECTION BANNER PHOTOGRAPHY & MEDIA */}
          <div className="bg-[#181818] border border-[#B08D57]/30 rounded-2xl p-6 space-y-5 shadow-2xl">
            <h3 className="font-serif text-lg font-bold text-[#D4AF37] border-b border-[#B08D57]/20 pb-3 flex items-center justify-between">
              <span>Collection Photography & Banner</span>
            </h3>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                Banner Photography Image URL *
              </label>
              <input
                type="text"
                required
                value={editingCol.imageUrl}
                onChange={(e) => setEditingCol({ ...editingCol, imageUrl: e.target.value })}
                className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-xs font-mono text-[#D4AF37] focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            {editingCol.imageUrl && (
              <div className="border border-[#B08D57]/30 rounded-xl overflow-hidden h-52 bg-[#0F0F0F] relative">
                <img src={editingCol.imageUrl} alt={editingCol.title} className="w-full h-full object-cover" />
                <span className="absolute bottom-3 left-3 bg-[#0F0F0F]/90 text-[#D4AF37] border border-[#B08D57]/40 text-xs font-mono font-bold px-3 py-1 rounded uppercase">
                  {editingCol.badge || "FEATURED BANNER"}
                </span>
              </div>
            )}

            {/* Dropzone */}
            <div
              onClick={() => {
                const url = prompt("Enter banner image URL:");
                if (url) setEditingCol({ ...editingCol, imageUrl: url });
              }}
              className="border-2 border-dashed border-[#B08D57]/40 hover:border-[#D4AF37] bg-[#0F0F0F] rounded-2xl p-6 text-center cursor-pointer transition space-y-2 group"
            >
              <div className="w-10 h-10 rounded-full bg-[#252525] group-hover:bg-[#D4AF37] group-hover:text-[#0F0F0F] text-[#D4AF37] flex items-center justify-center mx-auto transition">
                <Upload className="w-5 h-5" />
              </div>
              <p className="text-xs font-bold text-[#F7F3EE]">Click to upload collection banner</p>
              <p className="text-[11px] text-zinc-500 font-mono">High-res 1200x800 photography</p>
            </div>
          </div>

          {/* CARD 3: ASSIGNED PERFUMES & COFFRET ITEMS (PRODUCT SELECTOR) */}
          <div className="bg-[#181818] border border-[#B08D57]/30 rounded-2xl p-6 space-y-5 shadow-2xl">
            <h3 className="font-serif text-lg font-bold text-[#D4AF37] border-b border-[#B08D57]/20 pb-3 flex items-center justify-between">
              <span>Assigned Perfumes in Collection ({selectedProductIds.length})</span>
              <span className="text-xs font-mono text-zinc-400 font-normal">Select Extrait items</span>
            </h3>

            <div className="space-y-3">
              {products.map((p) => {
                const isChecked = selectedProductIds.includes(p.id);
                return (
                  <div
                    key={p.id}
                    onClick={() => toggleProductId(p.id)}
                    className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition ${isChecked ? 'bg-[#0F0F0F] border-[#D4AF37]' : 'bg-[#121212] border-[#B08D57]/20 hover:border-[#B08D57]/50'}`}
                  >
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        className="w-4 h-4 accent-[#D4AF37] rounded cursor-pointer"
                      />
                      <img src={p.imageUrl} alt={p.name} className="w-10 h-12 object-contain bg-[#0F0F0F] p-1 rounded border border-[#B08D57]/30" />
                      <div>
                        <span className="font-serif font-bold text-sm text-[#F7F3EE] block">{p.name}</span>
                        <span className="text-[10px] text-zinc-400 font-mono">{p.category} • {p.fragranceFamily}</span>
                      </div>
                    </div>

                    <span className="text-xs font-mono font-bold text-[#D4AF37]">
                      ৳ {p.variants[0]?.price.toLocaleString()} BDT
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN (1/3 Width - Visibility, Badge Tag & Highlights Sidebar) */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* CARD 1: VISIBILITY STATUS */}
          <div className="bg-[#181818] border border-[#B08D57]/30 rounded-2xl p-6 space-y-4 shadow-2xl">
            <h3 className="font-serif text-base font-bold text-[#D4AF37] border-b border-[#B08D57]/20 pb-2">
              Visibility Status
            </h3>
            <select
              value={editingCol.isPublished ? "published" : "draft"}
              onChange={(e) => setEditingCol({ ...editingCol, isPublished: e.target.value === "published" })}
              className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-xs font-bold text-[#F7F3EE] focus:border-[#D4AF37] focus:outline-none"
            >
              <option value="published">Published (Live on Website)</option>
              <option value="draft">Draft (Hidden)</option>
            </select>
          </div>

          {/* CARD 2: BADGE TAG */}
          <div className="bg-[#181818] border border-[#B08D57]/30 rounded-2xl p-6 space-y-4 shadow-2xl text-xs">
            <h3 className="font-serif text-base font-bold text-[#D4AF37] border-b border-[#B08D57]/20 pb-2">
              Badge Tag
            </h3>
            <div>
              <label className="block font-mono font-bold uppercase text-zinc-400 mb-1.5">Collection Badge Tag</label>
              <input
                type="text"
                value={editingCol.badge}
                onChange={(e) => setEditingCol({ ...editingCol, badge: e.target.value.toUpperCase() })}
                className="w-full p-3 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-[#D4AF37] font-mono font-bold uppercase focus:border-[#D4AF37] focus:outline-none"
                placeholder="e.g. BEST SELLER"
              />
            </div>
          </div>

          {/* CARD 3: HIGHLIGHTS & PRIVILEGES (CHECKBOXES MATCHING SCREENSHOT) */}
          <div className="bg-[#181818] border border-[#B08D57]/30 rounded-2xl p-6 space-y-4 shadow-2xl text-xs">
            <h3 className="font-serif text-base font-bold text-[#D4AF37] border-b border-[#B08D57]/20 pb-2">
              Collection Privileges
            </h3>

            <div className="space-y-2.5">
              {[
                "Featured on Homepage",
                "Includes Hologram Certificate",
                "Complimentary Gift Box",
                "Limited Discovery Coffret",
                "Free Express Countrywide Shipping",
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
