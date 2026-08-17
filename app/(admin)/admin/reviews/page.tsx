"use client";

import { useState } from "react";
import { useAdminStore } from "@/lib/adminStore";
import { Star, CheckCircle2, Trash2 } from "lucide-react";

export default function AdminReviewsPage() {
  const { reviews, approveReview, deleteReview } = useAdminStore();
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleToggleApprove = (id: string) => {
    approveReview(id);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="space-y-8 text-left font-sans text-[#F7F3EE]">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#B08D57]/30 pb-6 gap-4">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] block">
            SOCIAL PROOF & REVIEWS CMS
          </span>
          <h1 className="font-serif text-3xl font-bold text-[#D4AF37]">
            Client Testimonials Manager
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Approve, moderate, or remove verified customer reviews displayed on the homepage review slider.
          </p>
        </div>

        {savedSuccess && (
          <div className="p-3 bg-emerald-950 border border-emerald-500/50 text-emerald-200 rounded-xl text-xs font-bold flex items-center space-x-2 shadow-2xl">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Review status updated!</span>
          </div>
        )}
      </div>

      {/* REVIEWS LIST TABLE */}
      <div className="bg-[#181818] border border-[#B08D57]/30 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl">
        <h3 className="font-serif text-2xl font-bold text-[#F7F3EE]">Client Reviews ({reviews.length})</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#B08D57]/20 text-[#D4AF37] font-mono uppercase tracking-wider text-[10px]">
                <th className="pb-3 font-bold">Client Author</th>
                <th className="pb-3 font-bold">Rating</th>
                <th className="pb-3 font-bold">Perfume Edition</th>
                <th className="pb-3 font-bold">Review Comment</th>
                <th className="pb-3 font-bold">Homepage Status</th>
                <th className="pb-3 font-bold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#B08D57]/10 font-mono">
              {reviews.map((r) => (
                <tr key={r.id} className="hover:bg-[#222222] transition-colors">
                  <td className="py-4">
                    <span className="font-serif font-bold text-sm text-[#F7F3EE] block">{r.author}</span>
                    <span className="text-[10px] text-[#D4AF37] block font-mono">{r.date}</span>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center text-[#D4AF37]">
                      {Array.from({ length: r.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                      ))}
                    </div>
                  </td>
                  <td className="py-4 font-bold text-[#D4AF37]">
                    {r.perfumeName}
                  </td>
                  <td className="py-4 text-zinc-300 max-w-sm leading-relaxed font-sans text-xs">
                    "{r.comment}"
                  </td>
                  <td className="py-4">
                    <button
                      onClick={() => handleToggleApprove(r.id)}
                      className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                        r.isApproved ? "bg-emerald-950 text-emerald-300 border border-emerald-500/40" : "bg-amber-950 text-amber-300 border border-amber-500/40"
                      }`}
                    >
                      {r.isApproved ? "PUBLISHED LIVE" : "HIDDEN / PENDING"}
                    </button>
                  </td>
                  <td className="py-4">
                    <button
                      onClick={() => deleteReview(r.id)}
                      className="text-zinc-400 hover:text-rose-400 transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
