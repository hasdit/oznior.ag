"use client";

import { useState } from "react";
import { useAdminStore } from "@/lib/adminStore";
import { Image as ImageIcon, Copy, CheckCircle2, Upload } from "lucide-react";

export default function AdminMediaPage() {
  const { products, heroSlides } = useAdminStore();
  const [toast, setToast] = useState("");

  const mediaUrls = Array.from(
    new Set([
      ...products.map((p) => p.imageUrl),
      ...products.flatMap((p) => p.galleryImages),
      ...heroSlides.map((h) => h.imageUrl),
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=85",
    ])
  );

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    setToast("Image URL copied to clipboard!");
    setTimeout(() => setToast(""), 2500);
  };

  return (
    <div className="space-y-8">
      {toast && (
        <div className="fixed top-6 right-6 z-50 bg-emerald-950 border border-emerald-500/40 text-emerald-200 px-5 py-3 rounded-lg shadow-2xl flex items-center gap-3 text-xs font-mono">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toast}</span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gold-muted/20 pb-6 gap-4">
        <div>
          <h1 className="font-serif text-3xl font-semibold text-gold-champagne flex items-center gap-2">
            <ImageIcon className="w-6 h-6 text-gold-champagne" /> Media & Image Asset Vault
          </h1>
          <p className="text-xs text-alabaster-muted mt-1">High-resolution bottle renders, campaign photography, and asset URL manager.</p>
        </div>
        <button
          onClick={() => {
            setToast("Upload simulation: Drag and drop files to sync CDN.");
            setTimeout(() => setToast(""), 3000);
          }}
          className="bg-gold-champagne text-obsidian px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider flex items-center gap-2 hover:bg-gold-light transition shadow-lg"
        >
          <Upload className="w-4 h-4" /> Upload Asset
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mediaUrls.map((url, idx) => (
          <div key={idx} className="bg-obsidian-surface border border-gold-muted/20 rounded-xl overflow-hidden group relative">
            <div className="aspect-square relative bg-obsidian">
              <img src={url} alt={`Asset ${idx}`} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <div className="p-3 bg-obsidian border-t border-gold-muted/10 flex justify-between items-center text-[10px] font-mono">
              <span className="text-alabaster-muted truncate max-w-[120px]">{url}</span>
              <button
                onClick={() => copyToClipboard(url)}
                className="text-gold-champagne hover:text-gold-light p-1"
                title="Copy Image URL"
              >
                <Copy className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
