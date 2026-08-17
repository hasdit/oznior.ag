"use client";

import { useState } from "react";
import { useAdminStore, AdminOrder } from "@/lib/adminStore";
import { CheckCircle2 } from "lucide-react";

export default function AdminOrdersPage() {
  const { orders, updateOrderStatus } = useAdminStore();
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleStatusChange = (id: string, status: AdminOrder["status"]) => {
    updateOrderStatus(id, status);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="space-y-8 text-left font-sans text-[#F7F3EE]">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#B08D57]/30 pb-6 gap-4">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] block">
            CLIENT FULFILLMENT & LOGISTICS
          </span>
          <h1 className="font-serif text-3xl font-bold text-[#D4AF37]">
            Order Management Hub
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Track incoming bKash, Nagad, and Cash-on-Delivery client orders, verify payment details, and dispatch courier shipments.
          </p>
        </div>

        {savedSuccess && (
          <div className="p-3 bg-emerald-950 border border-emerald-500/50 text-emerald-200 rounded-xl text-xs font-bold flex items-center space-x-2 shadow-2xl">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Order status updated!</span>
          </div>
        )}
      </div>

      {/* ORDERS TABLE */}
      <div className="bg-[#181818] border border-[#B08D57]/30 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl">
        <h3 className="font-serif text-2xl font-bold text-[#F7F3EE]">Client Orders ({orders.length})</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#B08D57]/20 text-[#D4AF37] font-mono uppercase tracking-wider text-[10px]">
                <th className="pb-3 font-bold">Order #</th>
                <th className="pb-3 font-bold">Client Name & Phone</th>
                <th className="pb-3 font-bold">Delivery Address</th>
                <th className="pb-3 font-bold">Payment</th>
                <th className="pb-3 font-bold">Total Amount</th>
                <th className="pb-3 font-bold">Fulfillment Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#B08D57]/10 font-mono">
              {orders.map((ord) => (
                <tr key={ord.id} className="hover:bg-[#222222] transition-colors">
                  <td className="py-4 font-mono font-bold text-sm text-[#D4AF37]">
                    #{ord.orderNumber}
                    <span className="block text-[10px] text-zinc-400 font-normal font-mono">{ord.createdAt}</span>
                  </td>
                  <td className="py-4">
                    <span className="font-serif font-bold text-sm text-[#F7F3EE] block">{ord.customerName}</span>
                    <span className="font-mono text-xs text-zinc-400">{ord.customerPhone}</span>
                  </td>
                  <td className="py-4 text-zinc-300 max-w-xs leading-relaxed">
                    {ord.address}
                  </td>
                  <td className="py-4 font-bold">
                    <span className="px-2.5 py-1 rounded bg-[#0F0F0F] border border-[#B08D57]/30 text-[#D4AF37] text-[10px] uppercase font-bold block w-fit">
                      {ord.paymentMethod}
                    </span>
                    {ord.last4Digits && (
                      <span className="text-[10px] text-zinc-400 block font-mono mt-1">TrxID: {ord.last4Digits}</span>
                    )}
                  </td>
                  <td className="py-4 font-serif font-bold text-base text-[#D4AF37]">
                    ৳ {ord.totalAmount.toLocaleString()} BDT
                  </td>
                  <td className="py-4">
                    <select
                      value={ord.status}
                      onChange={(e) => handleStatusChange(ord.id, e.target.value as AdminOrder["status"])}
                      className="p-2 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-lg text-xs font-bold text-[#F7F3EE] focus:border-[#D4AF37] focus:outline-none"
                    >
                      <option value="Pending">⏳ Pending</option>
                      <option value="Processing">⚙️ Processing</option>
                      <option value="Shipped">🚚 Shipped (Steadfast)</option>
                      <option value="Delivered">✅ Delivered</option>
                      <option value="Cancelled">❌ Cancelled</option>
                    </select>
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
