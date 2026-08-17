"use client";

import { useAdminStore } from "@/lib/adminStore";
import { TrendingUp, DollarSign, ShoppingBag, CreditCard, Award } from "lucide-react";

export default function AdminAnalyticsPage() {
  const { orders, products } = useAdminStore();

  const totalRevenue = orders.reduce((sum, o) => sum + o.totalAmount, 0);
  const totalOrders = orders.length;
  const avgOrderValue = totalOrders > 0 ? Math.round(totalRevenue / totalOrders) : 0;

  const bkashOrders = orders.filter((o) => o.paymentMethod === "BKASH").length;
  const codOrders = orders.filter((o) => o.paymentMethod === "CASH_ON_DELIVERY").length;

  return (
    <div className="space-y-8">
      <div className="border-b border-gold-muted/20 pb-6">
        <h1 className="font-serif text-3xl font-semibold text-gold-champagne flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-gold-champagne" /> Executive Financial Analytics
        </h1>
        <p className="text-xs text-alabaster-muted mt-1">Real-time revenue performance BDT, AOV, conversion breakdown, and payment distribution.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-obsidian-surface border border-gold-muted/20 p-6 rounded-xl space-y-2">
          <div className="flex justify-between items-center text-xs font-mono text-alabaster-muted">
            <span>TOTAL REVENUE (BDT)</span>
            <DollarSign className="w-4 h-4 text-emerald-400" />
          </div>
          <p className="font-serif text-3xl font-bold text-gold-champagne">৳ {totalRevenue.toLocaleString()}.00</p>
          <p className="text-[11px] font-mono text-emerald-400">↑ 18.4% vs last month</p>
        </div>

        <div className="bg-obsidian-surface border border-gold-muted/20 p-6 rounded-xl space-y-2">
          <div className="flex justify-between items-center text-xs font-mono text-alabaster-muted">
            <span>AVERAGE ORDER VALUE (AOV)</span>
            <ShoppingBag className="w-4 h-4 text-gold-champagne" />
          </div>
          <p className="font-serif text-3xl font-bold text-alabaster">৳ {avgOrderValue.toLocaleString()}</p>
          <p className="text-[11px] font-mono text-gold-champagne/80">Premium Extrait Basket</p>
        </div>

        <div className="bg-obsidian-surface border border-gold-muted/20 p-6 rounded-xl space-y-2">
          <div className="flex justify-between items-center text-xs font-mono text-alabaster-muted">
            <span>PAYMENT BREAKDOWN</span>
            <CreditCard className="w-4 h-4 text-sky-400" />
          </div>
          <div className="space-y-1 text-xs font-mono pt-1">
            <div className="flex justify-between">
              <span className="text-alabaster-muted">bKash Instant Gateway:</span>
              <span className="text-gold-champagne font-bold">{bkashOrders} Orders ({Math.round((bkashOrders / (totalOrders || 1)) * 100)}%)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-alabaster-muted">Cash On Delivery:</span>
              <span className="text-alabaster font-bold">{codOrders} Orders</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-obsidian-surface border border-gold-muted/20 p-6 rounded-xl space-y-4">
        <h3 className="font-serif text-lg font-bold text-alabaster flex items-center gap-2">
          <Award className="w-5 h-5 text-gold-champagne" /> Top Performing Perfume Catalog
        </h3>
        <div className="space-y-3">
          {products.map((p) => (
            <div key={p.id} className="flex justify-between items-center p-3 bg-obsidian border border-gold-muted/10 rounded-lg text-xs font-mono">
              <div>
                <span className="font-serif font-bold text-alabaster text-sm">{p.name}</span>
                <p className="text-alabaster-muted text-[11px]">{p.category} • {p.concentration}% Concentration</p>
              </div>
              <span className="text-gold-champagne font-bold">
                ৳ {p.variants[0]?.price.toLocaleString()} BDT
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
