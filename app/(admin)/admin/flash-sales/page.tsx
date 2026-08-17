"use client";

import { useState } from "react";
import { useAdminStore } from "@/lib/adminStore";
import { Zap, Plus, Trash2, CheckCircle2, Clock } from "lucide-react";

export default function AdminFlashSalesPage() {
  const { flashSales, addFlashSale, toggleFlashSale, deleteFlashSale, products } = useAdminStore();
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState(15);
  const [startDate, setStartDate] = useState("2026-08-17");
  const [endDate, setEndDate] = useState("2026-08-25");
  const [toast, setToast] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    addFlashSale({
      id: `fs-${Date.now()}`,
      title,
      discountPercentage,
      startDate,
      endDate,
      isActive: true,
      productIds: products.map((p) => p.id),
    });
    setTitle("");
    setShowModal(false);
    setToast("Flash Campaign created & activated!");
    setTimeout(() => setToast(""), 3000);
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
            <Zap className="w-6 h-6 text-amber-400 fill-amber-400" /> Flash Sales & Campaigns
          </h1>
          <p className="text-xs text-alabaster-muted mt-1">Configure timed flash sales, percentage drops, and site-wide countdown banners.</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-gold-champagne text-obsidian px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider flex items-center gap-2 hover:bg-gold-light transition shadow-lg"
        >
          <Plus className="w-4 h-4" /> Launch Flash Sale
        </button>
      </div>

      <div className="space-y-4">
        {flashSales.map((sale) => (
          <div key={sale.id} className="bg-obsidian-surface border border-gold-muted/20 p-6 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-mono font-bold px-2.5 py-1 rounded">
                  {sale.discountPercentage}% OFF
                </span>
                <h3 className="font-serif text-lg font-bold text-alabaster">{sale.title}</h3>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono text-alabaster-muted">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-gold-champagne" /> {sale.startDate} ➔ {sale.endDate}
                </span>
                <span>• {sale.productIds.length} Perfumes Included</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => toggleFlashSale(sale.id)}
                className={`px-3 py-1.5 rounded text-xs font-mono font-bold transition ${sale.isActive ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40' : 'bg-zinc-800 text-zinc-400'}`}
              >
                {sale.isActive ? "ACTIVE LIVE" : "PAUSED"}
              </button>
              <button
                onClick={() => deleteFlashSale(sale.id)}
                className="p-2 text-alabaster-muted hover:text-rose-400 transition"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-obsidian-surface border border-gold-muted/30 p-6 rounded-xl w-full max-w-lg space-y-4">
            <h2 className="font-serif text-xl font-bold text-gold-champagne">Launch New Flash Sale</h2>
            <form onSubmit={handleAdd} className="space-y-4 text-xs">
              <div>
                <label className="block text-alabaster-muted mb-1">Campaign Banner Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-obsidian border border-gold-muted/30 px-3 py-2 rounded text-alabaster focus:outline-none focus:border-gold-champagne"
                  placeholder="e.g. EID EXTRAIT HARVEST 15% OFF"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-alabaster-muted mb-1">Discount %</label>
                  <input
                    type="number"
                    value={discountPercentage}
                    onChange={(e) => setDiscountPercentage(Number(e.target.value))}
                    className="w-full bg-obsidian border border-gold-muted/30 px-3 py-2 rounded text-alabaster focus:outline-none focus:border-gold-champagne"
                    required
                  />
                </div>
                <div>
                  <label className="block text-alabaster-muted mb-1">Start Date</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full bg-obsidian border border-gold-muted/30 px-3 py-2 rounded text-alabaster focus:outline-none focus:border-gold-champagne"
                  />
                </div>
              </div>
              <div>
                <label className="block text-alabaster-muted mb-1">End Date</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full bg-obsidian border border-gold-muted/30 px-3 py-2 rounded text-alabaster focus:outline-none focus:border-gold-champagne"
                />
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-gold-muted/20">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 text-alabaster-muted">
                  Cancel
                </button>
                <button type="submit" className="bg-gold-champagne text-obsidian px-5 py-2 rounded font-semibold uppercase">
                  Launch Flash Sale
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
