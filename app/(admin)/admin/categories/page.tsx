"use client";

import { useState } from "react";
import { useAdminStore } from "@/lib/adminStore";
import { FolderPlus, Trash2, Tag, Layers, CheckCircle2 } from "lucide-react";

export default function AdminCategoriesPage() {
  const { categories, addCategory, deleteCategory } = useAdminStore();
  const [showAddModal, setShowAddModal] = useState(false);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [isFeatured, setIsFeatured] = useState(true);
  const [toast, setToast] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !slug) return;
    addCategory({
      id: `cat-${Date.now()}`,
      name,
      slug,
      description,
      isFeatured,
      productCount: 0,
    });
    setName("");
    setSlug("");
    setDescription("");
    setShowAddModal(false);
    setToast("New Fragrance Category added successfully!");
    setTimeout(() => setToast(""), 3000);
  };

  return (
    <div className="space-y-8">
      {toast && (
        <div className="fixed top-6 right-6 z-50 bg-emerald-950 border border-emerald-500/40 text-emerald-200 px-5 py-3 rounded-lg shadow-2xl flex items-center gap-3 text-xs font-mono animate-in fade-in slide-in-from-top-4">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toast}</span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gold-muted/20 pb-6 gap-4">
        <div>
          <h1 className="font-serif text-3xl font-semibold text-gold-champagne">Fragrance Categories</h1>
          <p className="text-xs text-alabaster-muted mt-1">Manage olfactory families, note groupings, and storefront navigation hierarchy.</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-gold-champagne text-obsidian px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider flex items-center gap-2 hover:bg-gold-light transition shadow-lg"
        >
          <FolderPlus className="w-4 h-4" /> Add Category
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div key={cat.id} className="bg-obsidian-surface border border-gold-muted/20 p-6 rounded-lg relative group hover:border-gold-muted/50 transition">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-gold-muted/10 rounded border border-gold-muted/20 text-gold-champagne">
                <Layers className="w-5 h-5" />
              </div>
              <button
                onClick={() => deleteCategory(cat.id)}
                className="text-alabaster-muted hover:text-rose-400 p-1 transition"
                title="Delete Category"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <h3 className="font-serif text-lg font-bold text-alabaster">{cat.name}</h3>
            <p className="text-xs font-mono text-gold-champagne/80 mt-0.5">/parfums?category={cat.slug}</p>
            <p className="text-xs text-alabaster-muted mt-3 line-clamp-2">{cat.description}</p>
            <div className="mt-6 pt-4 border-t border-gold-muted/10 flex justify-between items-center text-xs font-mono">
              <span className="text-alabaster-muted">{cat.productCount} Perfumes</span>
              {cat.isFeatured ? (
                <span className="bg-gold-champagne/10 text-gold-champagne border border-gold-champagne/30 px-2 py-0.5 rounded text-[10px] tracking-wider uppercase">
                  Featured Home
                </span>
              ) : (
                <span className="text-alabaster-muted text-[10px]">Standard</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-obsidian-surface border border-gold-muted/30 p-6 rounded-xl w-full max-w-lg space-y-4">
            <h2 className="font-serif text-xl font-bold text-gold-champagne">Add New Category</h2>
            <form onSubmit={handleAdd} className="space-y-4 text-xs">
              <div>
                <label className="block text-alabaster-muted mb-1">Category Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setSlug(e.target.value.toLowerCase().replace(/\s+/g, "-"));
                  }}
                  className="w-full bg-obsidian border border-gold-muted/30 px-3 py-2 rounded text-alabaster focus:outline-none focus:border-gold-champagne"
                  placeholder="e.g. Rare Musk Extrait"
                  required
                />
              </div>
              <div>
                <label className="block text-alabaster-muted mb-1">URL Slug</label>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="w-full bg-obsidian border border-gold-muted/30 px-3 py-2 rounded text-alabaster focus:outline-none focus:border-gold-champagne font-mono"
                  required
                />
              </div>
              <div>
                <label className="block text-alabaster-muted mb-1">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-obsidian border border-gold-muted/30 px-3 py-2 rounded text-alabaster focus:outline-none focus:border-gold-champagne h-20"
                  placeholder="Short sensory overview..."
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="feat"
                  checked={isFeatured}
                  onChange={(e) => setIsFeatured(e.target.checked)}
                  className="accent-gold-champagne"
                />
                <label htmlFor="feat" className="text-alabaster cursor-pointer">Show as Featured Category on Homepage</label>
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-gold-muted/20">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-alabaster-muted hover:text-alabaster"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-gold-champagne text-obsidian px-5 py-2 rounded font-semibold uppercase tracking-wider hover:bg-gold-light"
                >
                  Save Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
