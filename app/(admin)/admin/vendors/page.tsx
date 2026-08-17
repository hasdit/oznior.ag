"use client";

import { useState } from "react";
import { useAdminStore } from "@/lib/adminStore";
import { Users, Plus, CheckCircle2 } from "lucide-react";

export default function AdminVendorsPage() {
  const { vendors, addVendor } = useAdminStore();
  const [showModal, setShowModal] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [materialType, setMaterialType] = useState("");
  const [country, setCountry] = useState("France");
  const [contactPerson, setContactPerson] = useState("");
  const [toast, setToast] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName) return;
    addVendor({
      id: `v-${Date.now()}`,
      companyName,
      materialType,
      country,
      contactPerson,
      status: "Verified",
    });
    setCompanyName("");
    setShowModal(false);
    setToast("Supplier / Distiller registered!");
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
            <Users className="w-6 h-6 text-gold-champagne" /> Distillers & Raw Material Suppliers
          </h1>
          <p className="text-xs text-alabaster-muted mt-1">Directory of Cambodian agarwood distillers, Grasse perfumers, and French glassware suppliers.</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-gold-champagne text-obsidian px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider flex items-center gap-2 hover:bg-gold-light transition shadow-lg"
        >
          <Plus className="w-4 h-4" /> Add Distiller / Supplier
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {vendors.map((v) => (
          <div key={v.id} className="bg-obsidian-surface border border-gold-muted/20 p-6 rounded-xl space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-mono text-gold-champagne font-bold uppercase">{v.country}</span>
                <h3 className="font-serif text-lg font-bold text-alabaster">{v.companyName}</h3>
              </div>
              <span className="bg-emerald-950 text-emerald-300 border border-emerald-500/40 text-[10px] font-mono px-2.5 py-0.5 rounded font-bold uppercase">
                {v.status}
              </span>
            </div>
            <div className="space-y-1 text-xs font-mono text-alabaster-muted">
              <p>🧪 Supplies: <strong className="text-gold-champagne">{v.materialType}</strong></p>
              <p>👤 Key Contact: <strong className="text-alabaster">{v.contactPerson}</strong></p>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-obsidian-surface border border-gold-muted/30 p-6 rounded-xl w-full max-w-lg space-y-4">
            <h2 className="font-serif text-xl font-bold text-gold-champagne">Register Supplier</h2>
            <form onSubmit={handleAdd} className="space-y-4 text-xs">
              <div>
                <label className="block text-alabaster-muted mb-1">Company / Distillery Name</label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full bg-obsidian border border-gold-muted/30 px-3 py-2 rounded text-alabaster focus:outline-none focus:border-gold-champagne"
                  placeholder="e.g. Grasse Natural Oils S.A."
                  required
                />
              </div>
              <div>
                <label className="block text-alabaster-muted mb-1">Raw Material Supplied</label>
                <input
                  type="text"
                  value={materialType}
                  onChange={(e) => setMaterialType(e.target.value)}
                  className="w-full bg-obsidian border border-gold-muted/30 px-3 py-2 rounded text-alabaster focus:outline-none focus:border-gold-champagne"
                  placeholder="e.g. Damask Rose Absolute"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-alabaster-muted mb-1">Country</label>
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full bg-obsidian border border-gold-muted/30 px-3 py-2 rounded text-alabaster focus:outline-none focus:border-gold-champagne"
                  />
                </div>
                <div>
                  <label className="block text-alabaster-muted mb-1">Contact Person</label>
                  <input
                    type="text"
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    className="w-full bg-obsidian border border-gold-muted/30 px-3 py-2 rounded text-alabaster focus:outline-none focus:border-gold-champagne"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-gold-muted/20">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 text-alabaster-muted">
                  Cancel
                </button>
                <button type="submit" className="bg-gold-champagne text-obsidian px-5 py-2 rounded font-semibold uppercase">
                  Save Vendor
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
