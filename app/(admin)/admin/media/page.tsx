"use client";

import { Upload, Image as ImageIcon, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminMediaPage() {
  const sampleMedia = [
    {
      id: "1",
      publicId: "samples/royale-oud",
      url: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=400&q=80",
      folderTag: "products",
      altText: "Royale Oud Bottle",
    },
    {
      id: "2",
      publicId: "samples/hero-banner",
      url: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=400&q=80",
      folderTag: "banners",
      altText: "Editorial Luxury Perfume Hero Banner",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gold-muted/20 pb-6">
        <div>
          <h1 className="font-serif text-3xl font-semibold text-gold-champagne">Media Library Manager</h1>
          <p className="text-xs text-alabaster-muted mt-1">Cloudinary asset pipeline for product images, hero banners & blog media.</p>
        </div>
        <Button variant="primary" size="sm">
          <Upload className="w-3.5 h-3.5 mr-2" />
          Upload Cloudinary Media
        </Button>
      </div>

      {/* Asset Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {sampleMedia.map((m) => (
          <div key={m.id} className="group relative bg-obsidian-surface border border-gold-muted/30 rounded-lg overflow-hidden space-y-2 p-2 hover:border-gold-champagne/60 transition-all">
            <div className="aspect-square bg-obsidian rounded overflow-hidden flex items-center justify-center">
              <img src={m.url} alt={m.altText} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            </div>
            <div className="text-[10px] text-alabaster-muted truncate font-mono">{m.publicId}</div>
            <span className="text-[9px] uppercase tracking-widest text-gold-champagne font-bold px-1.5 py-0.5 bg-gold-champagne/10 rounded">
              {m.folderTag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
