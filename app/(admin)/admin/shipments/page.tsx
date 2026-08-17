"use client";

import { useState } from "react";
import { useAdminStore } from "@/lib/adminStore";
import { Truck, CheckCircle2 } from "lucide-react";

export default function AdminShipmentsPage() {
  const { shipments, updateShipmentStatus } = useAdminStore();
  const [toast, setToast] = useState("");

  const handleStatusChange = (id: string, newStatus: any) => {
    updateShipmentStatus(id, newStatus);
    setToast(`Shipment ${id} status updated to ${newStatus}`);
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

      <div className="border-b border-gold-muted/20 pb-6">
        <h1 className="font-serif text-3xl font-semibold text-gold-champagne flex items-center gap-2">
          <Truck className="w-6 h-6 text-gold-champagne" /> Live Courier Shipments & Logistics
        </h1>
        <p className="text-xs text-alabaster-muted mt-1">Real-time dispatch status from Steadfast, RedX, and Pathao APIs.</p>
      </div>

      <div className="bg-obsidian-surface border border-gold-muted/20 rounded-xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-obsidian border-b border-gold-muted/20 text-alabaster-muted font-mono uppercase text-[10px]">
              <tr>
                <th className="py-3.5 px-6">Tracking Number</th>
                <th className="py-3.5 px-4">Courier API</th>
                <th className="py-3.5 px-4">Consignee</th>
                <th className="py-3.5 px-4">Destination</th>
                <th className="py-3.5 px-4">Dispatch Date</th>
                <th className="py-3.5 px-4">Live Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold-muted/10 font-mono">
              {shipments.map((shp) => (
                <tr key={shp.id} className="hover:bg-gold-muted/5 transition">
                  <td className="py-4 px-6 font-bold text-gold-champagne">{shp.trackingNumber}</td>
                  <td className="py-4 px-4 text-alabaster font-bold">{shp.courier}</td>
                  <td className="py-4 px-4 text-alabaster">{shp.consignee}</td>
                  <td className="py-4 px-4 text-alabaster-muted">{shp.destination}</td>
                  <td className="py-4 px-4 text-alabaster-muted">{shp.shippedAt}</td>
                  <td className="py-4 px-4">
                    <select
                      value={shp.status}
                      onChange={(e) => handleStatusChange(shp.id, e.target.value as any)}
                      className="bg-obsidian border border-gold-muted/30 px-3 py-1 rounded text-gold-champagne font-bold focus:outline-none"
                    >
                      <option value="In Transit">In Transit</option>
                      <option value="Out for Delivery">Out for Delivery</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Failed">Failed / Returned</option>
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
