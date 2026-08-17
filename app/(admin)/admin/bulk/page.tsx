"use client";

import { useState } from "react";
import { useAdminStore } from "@/lib/adminStore";
import { Download, Upload, Database, CheckCircle2 } from "lucide-react";

export default function AdminBulkPage() {
  const { products } = useAdminStore();
  const [toast, setToast] = useState("");

  const handleExportJSON = () => {
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(products, null, 2)
    )}`;
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", jsonString);
    downloadAnchor.setAttribute("download", `oznior-catalog-export-${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();

    setToast("Catalog JSON exported successfully!");
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

      <div className="border-b border-gold-muted/20 pb-6">
        <h1 className="font-serif text-3xl font-semibold text-gold-champagne flex items-center gap-2">
          <Database className="w-6 h-6 text-gold-champagne" /> Bulk Catalog Export & Import
        </h1>
        <p className="text-xs text-alabaster-muted mt-1">Export full product database, prices, variants, and notes to JSON or sync bulk updates.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-obsidian-surface border border-gold-muted/20 p-6 rounded-xl space-y-4">
          <h3 className="font-serif text-lg font-bold text-alabaster">Export Catalog Backup</h3>
          <p className="text-xs text-alabaster-muted">Download all active Extrait perfumes, variant price lists, and olfactory pyramids in JSON format.</p>
          <button
            onClick={handleExportJSON}
            className="bg-gold-champagne text-obsidian px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider flex items-center gap-2 hover:bg-gold-light transition shadow-lg"
          >
            <Download className="w-4 h-4" /> Download JSON Catalog ({products.length} Items)
          </button>
        </div>

        <div className="bg-obsidian-surface border border-gold-muted/20 p-6 rounded-xl space-y-4">
          <h3 className="font-serif text-lg font-bold text-alabaster">Bulk Import Products</h3>
          <p className="text-xs text-alabaster-muted">Upload a batch JSON/CSV file to instantly add multiple Extrait fragrances to the store catalog.</p>
          <button
            onClick={() => {
              setToast("Bulk Import ready. Drag and drop file to upload.");
              setTimeout(() => setToast(""), 3000);
            }}
            className="bg-obsidian border border-gold-muted/40 text-gold-champagne px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider flex items-center gap-2 hover:bg-gold-muted/10 transition shadow-lg"
          >
            <Upload className="w-4 h-4" /> Upload JSON / CSV File
          </button>
        </div>
      </div>
    </div>
  );
}
