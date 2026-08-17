"use client";

import { useState } from "react";
import { useAdminStore, AdminCoupon } from "@/lib/adminStore";
import { Plus, Trash2, CheckCircle2 } from "lucide-react";

export default function AdminCouponsPage() {
  const { coupons, addCoupon, toggleCoupon, deleteCoupon } = useAdminStore();
  const [savedSuccess, setSavedSuccess] = useState(false);

  const [newCoupon, setNewCoupon] = useState<Omit<AdminCoupon, "id">>({
    code: "",
    discountType: "percentage",
    discountValue: 10,
    minOrderValue: 5000,
    isActive: true,
  });

  const handleAddCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCoupon.code) return;
    addCoupon({ ...newCoupon, id: `c-${Date.now()}` });
    setNewCoupon({
      code: "",
      discountType: "percentage",
      discountValue: 10,
      minOrderValue: 5000,
      isActive: true,
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
            PROMOTIONS & PRIVILEGES
          </span>
          <h1 className="font-serif text-3xl font-bold text-[#D4AF37]">
            Coupon & Voucher Manager
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Create promotional voucher codes (e.g. VIP10, ROYAL500) for cart & checkout discounts.
          </p>
        </div>

        {savedSuccess && (
          <div className="p-3 bg-emerald-950 border border-emerald-500/50 text-emerald-200 rounded-xl text-xs font-bold flex items-center space-x-2 shadow-2xl">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Coupon code created live!</span>
          </div>
        )}
      </div>

      {/* ACTIVE COUPONS TABLE */}
      <div className="bg-[#181818] border border-[#B08D57]/30 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl">
        <h3 className="font-serif text-2xl font-bold text-[#F7F3EE]">Active Promo Vouchers ({coupons.length})</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#B08D57]/20 text-[#D4AF37] font-mono uppercase tracking-wider text-[10px]">
                <th className="pb-3 font-bold">Coupon Code</th>
                <th className="pb-3 font-bold">Discount</th>
                <th className="pb-3 font-bold">Min Order Value</th>
                <th className="pb-3 font-bold">Status</th>
                <th className="pb-3 font-bold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#B08D57]/10 font-mono">
              {coupons.map((c) => (
                <tr key={c.id} className="hover:bg-[#222222] transition-colors">
                  <td className="py-4 font-mono font-bold text-sm text-[#D4AF37]">
                    {c.code}
                  </td>
                  <td className="py-4 font-serif font-bold text-sm text-[#F7F3EE]">
                    {c.discountType === "percentage" ? `${c.discountValue}% OFF` : `৳ ${c.discountValue} BDT OFF`}
                  </td>
                  <td className="py-4 font-mono text-zinc-400">
                    ৳ {c.minOrderValue.toLocaleString()} BDT
                  </td>
                  <td className="py-4">
                    <button
                      onClick={() => toggleCoupon(c.id)}
                      className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                        c.isActive ? "bg-emerald-950 text-emerald-300 border border-emerald-500/40" : "bg-amber-950 text-amber-300 border border-amber-500/40"
                      }`}
                    >
                      {c.isActive ? "ACTIVE LIVE" : "PAUSED"}
                    </button>
                  </td>
                  <td className="py-4">
                    <button
                      onClick={() => deleteCoupon(c.id)}
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

      {/* CREATE NEW COUPON */}
      <form onSubmit={handleAddCoupon} className="bg-[#181818] border border-[#B08D57]/30 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl">
        <h3 className="font-serif text-2xl font-bold text-[#D4AF37]">Create New Privilege Voucher Code</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">Coupon Code *</label>
            <input
              type="text"
              required
              value={newCoupon.code}
              onChange={(e) => setNewCoupon({ ...newCoupon, code: e.target.value.toUpperCase() })}
              className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-xs font-mono text-[#D4AF37] focus:border-[#D4AF37] focus:outline-none"
              placeholder="e.g. VIP2026"
            />
          </div>

          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">Discount Type</label>
            <select
              value={newCoupon.discountType}
              onChange={(e) => setNewCoupon({ ...newCoupon, discountType: e.target.value as any })}
              className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-xs font-bold text-[#F7F3EE] focus:border-[#D4AF37] focus:outline-none"
            >
              <option value="percentage">Percentage Discount (%)</option>
              <option value="fixed">Fixed Amount (BDT ৳)</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">Discount Value *</label>
            <input
              type="number"
              required
              value={newCoupon.discountValue}
              onChange={(e) => setNewCoupon({ ...newCoupon, discountValue: Number(e.target.value) })}
              className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-xs font-mono font-bold text-[#F7F3EE] focus:border-[#D4AF37] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">Minimum Order Value (BDT) *</label>
            <input
              type="number"
              required
              value={newCoupon.minOrderValue}
              onChange={(e) => setNewCoupon({ ...newCoupon, minOrderValue: Number(e.target.value) })}
              className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-xs font-mono font-bold text-[#F7F3EE] focus:border-[#D4AF37] focus:outline-none"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-3.5 bg-[#D4AF37] text-[#0F0F0F] font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-[#E5C158] transition-all shadow-xl flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>CREATE VOUCHER CODE</span>
          </button>
        </div>
      </form>

    </div>
  );
}
