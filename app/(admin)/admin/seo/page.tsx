"use client";

import { useState } from "react";
import { useAdminStore } from "@/lib/adminStore";
import { Save, Globe, CheckCircle2 } from "lucide-react";

export default function AdminSEOPage() {
  const { seoConfig, updateSEOConfig } = useAdminStore();
  const [formData, setFormData] = useState({ ...seoConfig });
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSEOConfig(formData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="space-y-8 text-left font-sans text-[#F7F3EE]">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#B08D57]/30 pb-6 gap-4">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] block">
            SEARCH & OPENGRAPH METADATA
          </span>
          <h1 className="font-serif text-3xl font-bold text-[#D4AF37]">
            SEO & Social Sharing Manager
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Configure Google search titles, meta descriptions, search keywords, and Facebook/WhatsApp preview images.
          </p>
        </div>

        {savedSuccess && (
          <div className="p-3 bg-emerald-950 border border-emerald-500/50 text-emerald-200 rounded-xl text-xs font-bold flex items-center space-x-2 shadow-2xl">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>SEO metadata updated live!</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="bg-[#181818] border border-[#B08D57]/30 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl">
        <div className="flex items-center space-x-3 border-b border-[#B08D57]/20 pb-4">
          <div className="p-2 bg-[#0F0F0F] rounded-lg text-[#D4AF37] border border-[#B08D57]/30">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-xl font-bold text-[#F7F3EE]">Global Meta Tags</h3>
            <p className="text-xs text-zinc-400">Controls how Google and social platforms index your website.</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
              Default Site Title *
            </label>
            <input
              type="text"
              required
              value={formData.siteTitle}
              onChange={(e) => setFormData({ ...formData, siteTitle: e.target.value })}
              className="w-full p-4 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-xs font-serif font-bold text-[#F7F3EE] focus:border-[#D4AF37] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
              Meta Description *
            </label>
            <textarea
              rows={3}
              required
              value={formData.metaDescription}
              onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
              className="w-full p-4 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-xs text-[#F7F3EE] focus:border-[#D4AF37] focus:outline-none leading-relaxed"
            />
          </div>

          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
              Meta Keywords (Comma Separated) *
            </label>
            <input
              type="text"
              required
              value={formData.keywords}
              onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
              className="w-full p-4 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-xs font-mono text-[#D4AF37] focus:border-[#D4AF37] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
              Social OpenGraph Card Banner URL *
            </label>
            <input
              type="text"
              required
              value={formData.ogImageUrl}
              onChange={(e) => setFormData({ ...formData, ogImageUrl: e.target.value })}
              className="w-full p-4 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-xs font-mono text-[#D4AF37] focus:border-[#D4AF37] focus:outline-none"
            />
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="px-8 py-4 bg-[#D4AF37] text-[#0F0F0F] font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-[#E5C158] transition-all shadow-xl flex items-center space-x-2"
          >
            <Save className="w-4 h-4" />
            <span>SAVE SEO METADATA</span>
          </button>
        </div>

      </form>
    </div>
  );
}
