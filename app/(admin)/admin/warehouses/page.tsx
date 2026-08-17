"use client";

import { useState } from "react";
import { useAdminStore } from "@/lib/adminStore";
import { Warehouse as WarehouseIcon, Plus, CheckCircle2 } from "lucide-react";

export default function AdminWarehousesPage() {
  const { warehouses, addWarehouse } = useAdminStore();
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [location, setLocation] = useState("");
  const [manager, setManager] = useState("");
  const [contact, setContact] = useState("");
  const [toast, setToast] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !code) return;
    addWarehouse({
      id: `w-${Date.now()}`,
      name,
      code,
      location,
      manager,
      contact,
      stockUnits: 0,
    });
    setName("");
    setCode("");
    setShowModal(false);
    setToast("New Warehouse Hub registered!");
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
            <WarehouseIcon className="w-6 h-6 text-gold-champagne" /> Warehouses & Distribution Depots
          </h1>
          <p className="text-xs text-alabaster-muted mt-1">Manage physical fulfillment hubs across Dhaka, Chittagong, and Sylhet.</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-gold-champagne text-obsidian px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider flex items-center gap-2 hover:bg-gold-light transition shadow-lg"
        >
          <Plus className="w-4 h-4" /> Add Warehouse
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {warehouses.map((wh) => (
          <div key={wh.id} className="bg-obsidian-surface border border-gold-muted/20 p-6 rounded-xl space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-mono text-gold-champagne font-bold uppercase">{wh.code}</span>
                <h3 className="font-serif text-lg font-bold text-alabaster">{wh.name}</h3>
              </div>
              <span className="bg-gold-champagne/10 text-gold-champagne border border-gold-champagne/30 text-xs font-mono px-3 py-1 rounded font-bold">
                {wh.stockUnits} Units
              </span>
            </div>
            <div className="space-y-1 text-xs font-mono text-alabaster-muted">
              <p>📍 Location: <strong className="text-alabaster">{wh.location}</strong></p>
              <p>👤 Hub Manager: <strong className="text-alabaster">{wh.manager}</strong></p>
              <p>📞 Phone: <strong className="text-alabaster">{wh.contact}</strong></p>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-obsidian-surface border border-gold-muted/30 p-6 rounded-xl w-full max-w-lg space-y-4">
            <h2 className="font-serif text-xl font-bold text-gold-champagne">Register Warehouse Hub</h2>
            <form onSubmit={handleAdd} className="space-y-4 text-xs">
              <div>
                <label className="block text-alabaster-muted mb-1">Hub Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-obsidian border border-gold-muted/30 px-3 py-2 rounded text-alabaster focus:outline-none focus:border-gold-champagne"
                  placeholder="e.g. Sylhet Zindabazar Fulfillment Hub"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-alabaster-muted mb-1">Hub Code</label>
                  <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full bg-obsidian border border-gold-muted/30 px-3 py-2 rounded text-alabaster focus:outline-none focus:border-gold-champagne uppercase font-mono"
                    placeholder="SYL-01"
                    required
                  />
                </div>
                <div>
                  <label className="block text-alabaster-muted mb-1">Manager Name</label>
                  <input
                    type="text"
                    value={manager}
                    onChange={(e) => setManager(e.target.value)}
                    className="w-full bg-obsidian border border-gold-muted/30 px-3 py-2 rounded text-alabaster focus:outline-none focus:border-gold-champagne"
                  />
                </div>
              </div>
              <div>
                <label className="block text-alabaster-muted mb-1">Physical Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-obsidian border border-gold-muted/30 px-3 py-2 rounded text-alabaster focus:outline-none focus:border-gold-champagne"
                />
              </div>
              <div>
                <label className="block text-alabaster-muted mb-1">Contact Phone</label>
                <input
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full bg-obsidian border border-gold-muted/30 px-3 py-2 rounded text-alabaster focus:outline-none focus:border-gold-champagne font-mono"
                />
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-gold-muted/20">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 text-alabaster-muted">
                  Cancel
                </button>
                <button type="submit" className="bg-gold-champagne text-obsidian px-5 py-2 rounded font-semibold uppercase">
                  Register Depot
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
