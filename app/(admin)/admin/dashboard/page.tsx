"use client";

import Link from "next/link";
import { useAdminStore } from "@/lib/adminStore";
import { DollarSign, ShoppingBag, Truck, AlertCircle, ArrowUpRight } from "lucide-react";

export default function AdminDashboardPage() {
  const { orders, products, updateOrderStatus } = useAdminStore();

  const totalRevenue = orders.reduce((sum, o) => sum + o.totalAmount, 0);
  const pendingOrders = orders.filter((o) => o.status === "Pending");
  const processingOrders = orders.filter((o) => o.status === "Processing");
  const shippedOrders = orders.filter((o) => o.status === "Shipped");
  const lowStockProducts = products.filter((p) => p.variants?.some((v) => v.stockCount <= 8));

  return (
    <div className="space-y-8 text-left font-sans text-[#F7F3EE]">
      
      {/* Header */}
      <div className="border-b border-[#B08D57]/30 pb-6">
        <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] block">
          EXECUTIVE OVERVIEW
        </span>
        <h1 className="font-serif text-3xl font-bold text-[#D4AF37]">
          Executive Admin Dashboard
        </h1>
        <p className="text-xs text-zinc-400 mt-1">
          Real-time sales revenue, order queue verification, low stock alerts, and quick management links.
        </p>
      </div>

      {/* KPI METRIC CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#181818] border border-[#B08D57]/30 p-6 rounded-2xl space-y-2 shadow-2xl">
          <div className="flex justify-between items-center text-zinc-400">
            <span className="text-[10px] uppercase font-mono font-bold tracking-wider">Total Sales Revenue</span>
            <DollarSign className="w-4 h-4 text-[#D4AF37]" />
          </div>
          <div className="font-serif text-3xl font-bold text-[#D4AF37]">
            ৳ {totalRevenue.toLocaleString()}
          </div>
          <span className="text-[10px] font-bold text-emerald-400 flex items-center">
            <ArrowUpRight className="w-3 h-3 mr-0.5" /> +14.2% from last month
          </span>
        </div>

        <div className="bg-[#181818] border border-[#B08D57]/30 p-6 rounded-2xl space-y-2 shadow-2xl">
          <div className="flex justify-between items-center text-zinc-400">
            <span className="text-[10px] uppercase font-mono font-bold tracking-wider">Total Orders</span>
            <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
          </div>
          <div className="font-serif text-3xl font-bold text-[#F7F3EE]">
            {orders.length} Orders
          </div>
          <span className="text-[10px] font-mono text-[#D4AF37]">
            {pendingOrders.length} Pending • {processingOrders.length} Processing
          </span>
        </div>

        <div className="bg-[#181818] border border-[#B08D57]/30 p-6 rounded-2xl space-y-2 shadow-2xl">
          <div className="flex justify-between items-center text-zinc-400">
            <span className="text-[10px] uppercase font-mono font-bold tracking-wider">Dispatched Shipments</span>
            <Truck className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="font-serif text-3xl font-bold text-[#F7F3EE]">
            {shippedOrders.length} En Route
          </div>
          <span className="text-[10px] font-mono text-emerald-400">
            Steadfast Express Active
          </span>
        </div>

        <div className="bg-[#181818] border border-[#B08D57]/30 p-6 rounded-2xl space-y-2 shadow-2xl">
          <div className="flex justify-between items-center text-zinc-400">
            <span className="text-[10px] uppercase font-mono font-bold tracking-wider">Low Stock Inventory</span>
            <AlertCircle className="w-4 h-4 text-rose-400" />
          </div>
          <div className="font-serif text-3xl font-bold text-[#F7F3EE]">
            {lowStockProducts.length} Items
          </div>
          <span className="text-[10px] font-mono text-rose-400">
            Action required below 10 units
          </span>
        </div>
      </div>

      {/* QUICK MANAGEMENT LINKS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/admin/settings" className="bg-[#181818] border border-[#B08D57]/30 p-6 rounded-2xl space-y-2 hover:border-[#D4AF37] transition-all shadow-2xl group">
          <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#D4AF37]">GLOBAL SETTINGS</span>
          <h3 className="font-serif text-xl font-bold text-[#F7F3EE] group-hover:text-[#D4AF37]">Store Settings & Live Sync →</h3>
          <p className="text-xs text-zinc-400">Edit announcement bar, WhatsApp number & free delivery threshold.</p>
        </Link>

        <Link href="/admin/cms" className="bg-[#181818] border border-[#B08D57]/30 p-6 rounded-2xl space-y-2 hover:border-[#D4AF37] transition-all shadow-2xl group">
          <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#D4AF37]">HOMEPAGE CMS</span>
          <h3 className="font-serif text-xl font-bold text-[#F7F3EE] group-hover:text-[#D4AF37]">Hero Campaign & Banners →</h3>
          <p className="text-xs text-zinc-400">Edit hero slider headlines, subtext tags & background imagery.</p>
        </Link>

        <Link href="/admin/products" className="bg-[#181818] border border-[#B08D57]/30 p-6 rounded-2xl space-y-2 hover:border-[#D4AF37] transition-all shadow-2xl group">
          <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#D4AF37]">CATALOG CMS</span>
          <h3 className="font-serif text-xl font-bold text-[#F7F3EE] group-hover:text-[#D4AF37]">Product Prices & Stock →</h3>
          <p className="text-xs text-zinc-400">Edit 30ml, 50ml, 100ml perfume prices & stock availability.</p>
        </Link>
      </div>

      {/* RECENT ORDERS TABLE */}
      <div className="bg-[#181818] border border-[#B08D57]/30 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl">
        <div className="flex justify-between items-center border-b border-[#B08D57]/20 pb-4">
          <h3 className="font-serif text-2xl font-bold text-[#F7F3EE]">Recent Incoming Client Orders</h3>
          <Link href="/admin/orders" className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] hover:underline">
            View All Orders ({orders.length}) →
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#B08D57]/20 text-[#D4AF37] uppercase tracking-wider text-[10px] font-mono">
                <th className="pb-3 font-bold">Order #</th>
                <th className="pb-3 font-bold">Client Name & Phone</th>
                <th className="pb-3 font-bold">Payment</th>
                <th className="pb-3 font-bold">Total Amount</th>
                <th className="pb-3 font-bold">Status</th>
                <th className="pb-3 font-bold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#B08D57]/10 font-mono">
              {orders.slice(0, 5).map((ord) => (
                <tr key={ord.id} className="hover:bg-[#222222] transition-colors">
                  <td className="py-4 font-mono font-bold text-sm text-[#D4AF37]">#{ord.orderNumber}</td>
                  <td className="py-4 font-bold text-[#F7F3EE]">{ord.customerName} ({ord.customerPhone})</td>
                  <td className="py-4 font-bold text-zinc-400">{ord.paymentMethod}</td>
                  <td className="py-4 font-serif font-bold text-sm text-[#D4AF37]">৳ {ord.totalAmount.toLocaleString()} BDT</td>
                  <td className="py-4">
                    <span className="px-2.5 py-1 rounded bg-[#252525] border border-[#B08D57]/30 text-[#D4AF37] font-bold text-[10px]">
                      {ord.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <button
                      onClick={() => updateOrderStatus(ord.id, "Processing")}
                      className="text-xs text-[#D4AF37] font-bold hover:underline"
                    >
                      Process Order
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
