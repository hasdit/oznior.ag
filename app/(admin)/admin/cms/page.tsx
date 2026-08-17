"use client";

import { useState } from "react";
import { useAdminStore, AdminCMSHeroSlide } from "@/lib/adminStore";
import { Plus, Trash2, CheckCircle2, Sparkles } from "lucide-react";

export default function AdminCMSPage() {
  const { heroSlides, updateHeroSlide, addHeroSlide, deleteHeroSlide } = useAdminStore();
  const [savedSuccess, setSavedSuccess] = useState(false);

  const [newSlide, setNewSlide] = useState<Omit<AdminCMSHeroSlide, "id">>({
    title: "",
    tag: "",
    subtitle: "",
    primaryCtaText: "",
    primaryCtaLink: "/parfums",
    secondaryCtaText: "",
    secondaryCtaLink: "/parfums",
    imageUrl: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1920&q=90",
  });

  const handleUpdateSlide = (id: string, updated: Partial<AdminCMSHeroSlide>) => {
    updateHeroSlide(id, updated);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleAddSlide = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSlide.title) return;
    addHeroSlide({ ...newSlide, id: `slide-${Date.now()}` });
    setNewSlide({
      title: "",
      tag: "",
      subtitle: "",
      primaryCtaText: "",
      primaryCtaLink: "/parfums",
      secondaryCtaText: "",
      secondaryCtaLink: "/parfums",
      imageUrl: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1920&q=90",
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="space-y-8 text-left font-sans text-[#F7F3EE]">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#B08D57]/30 pb-6 gap-4">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] block">
            HOMEPAGE CAMPAIGN CMS
          </span>
          <h1 className="font-serif text-3xl font-bold text-[#D4AF37]">
            Hero Campaign & Banners
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Edit main campaign headlines, subtext tags, CTA links, and high-fashion editorial imagery without touching code.
          </p>
        </div>

        {savedSuccess && (
          <div className="p-3 bg-emerald-950 border border-emerald-500/50 text-emerald-200 rounded-xl text-xs font-bold flex items-center space-x-2 shadow-2xl">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>CMS Slides updated live!</span>
          </div>
        )}
      </div>

      {/* EXISTING SLIDES MANAGEMENT */}
      <div className="space-y-6">
        <h3 className="font-serif text-2xl font-bold text-[#F7F3EE]">
          Active Hero Slides ({heroSlides.length})
        </h3>

        <div className="grid grid-cols-1 gap-6">
          {heroSlides.map((slide, idx) => (
            <div
              key={slide.id}
              className="bg-[#181818] border border-[#B08D57]/30 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl"
            >
              <div className="flex justify-between items-center border-b border-[#B08D57]/20 pb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37]">
                  Slide #{idx + 1} — {slide.title || "Untitled Slide"}
                </span>
                {heroSlides.length > 1 && (
                  <button
                    onClick={() => deleteHeroSlide(slide.id)}
                    className="text-rose-400 hover:text-rose-300 text-xs font-bold flex items-center space-x-1"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Delete Slide</span>
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                    Hero Title / Headline *
                  </label>
                  <input
                    type="text"
                    value={slide.title}
                    onChange={(e) => handleUpdateSlide(slide.id, { title: e.target.value })}
                    className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-xs font-serif font-bold text-[#F7F3EE] focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                    Header Subtext Tagline *
                  </label>
                  <input
                    type="text"
                    value={slide.tag}
                    onChange={(e) => handleUpdateSlide(slide.id, { tag: e.target.value })}
                    className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-xs font-mono text-[#D4AF37] focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                  Subtitle Description *
                </label>
                <textarea
                  rows={2}
                  value={slide.subtitle}
                  onChange={(e) => handleUpdateSlide(slide.id, { subtitle: e.target.value })}
                  className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-xs text-[#F7F3EE] focus:border-[#D4AF37] focus:outline-none leading-relaxed"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                    Primary CTA Text
                  </label>
                  <input
                    type="text"
                    value={slide.primaryCtaText}
                    onChange={(e) => handleUpdateSlide(slide.id, { primaryCtaText: e.target.value })}
                    className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-xs font-bold text-[#F7F3EE] focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                    Primary CTA Target URL
                  </label>
                  <input
                    type="text"
                    value={slide.primaryCtaLink}
                    onChange={(e) => handleUpdateSlide(slide.id, { primaryCtaLink: e.target.value })}
                    className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-xs font-mono text-[#D4AF37] focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                  Background Photography URL *
                </label>
                <input
                  type="text"
                  value={slide.imageUrl}
                  onChange={(e) => handleUpdateSlide(slide.id, { imageUrl: e.target.value })}
                  className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-xs font-mono text-[#D4AF37] focus:border-[#D4AF37] focus:outline-none"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CREATE NEW HERO SLIDE */}
      <form onSubmit={handleAddSlide} className="bg-[#181818] border border-[#B08D57]/30 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl">
        <h3 className="font-serif text-2xl font-bold text-[#D4AF37] flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#D4AF37]" /> Create New Hero Slogan Slide
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">Title *</label>
            <input
              type="text"
              required
              value={newSlide.title}
              onChange={(e) => setNewSlide({ ...newSlide, title: e.target.value })}
              className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-xs text-[#F7F3EE] focus:border-[#D4AF37] focus:outline-none"
              placeholder="e.g. AETERNA AMBER GOLD"
            />
          </div>
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">Tag *</label>
            <input
              type="text"
              required
              value={newSlide.tag}
              onChange={(e) => setNewSlide({ ...newSlide, tag: e.target.value })}
              className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-xs text-[#D4AF37] focus:border-[#D4AF37] focus:outline-none"
              placeholder="e.g. 30% EXTRAIT DE PARFUM"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">Subtitle *</label>
          <textarea
            rows={2}
            required
            value={newSlide.subtitle}
            onChange={(e) => setNewSlide({ ...newSlide, subtitle: e.target.value })}
            className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-xs text-[#F7F3EE] focus:border-[#D4AF37] focus:outline-none"
            placeholder="Sensory narrative..."
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-3.5 bg-[#D4AF37] text-[#0F0F0F] font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-[#E5C158] transition-all shadow-xl flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>ADD HERO SLIDE</span>
          </button>
        </div>
      </form>

    </div>
  );
}
