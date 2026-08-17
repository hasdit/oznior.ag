"use client";

import { useState } from "react";
import { useAdminStore } from "@/lib/adminStore";
import { Warehouse, Save, CheckCircle2, AlertTriangle } from "lucide-react";

export default function AdminInventoryPage() {
  const { products, warehouses, updateProduct } = useAdminStore();
  const [toast, setToast] = useState("");

  const handleStockChange = (productId: string, variantIndex: number, newStock: number) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    const updatedVariants = [...product.variants];
    updatedVariants[variantIndex] = {
      ...updatedVariants[variantIndex],
      stockCount: Math.max(0, newStock),
    };

    updateProduct(productId, { variants: updatedVariants });
    setToast(`Stock updated for ${product.name} (${updatedVariants[variantIndex].volumeMl}ml)!`);
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
          <Warehouse className="w-6 h-6 text-gold-champagne" /> Warehouse Stock Matrix & Inventory
        </h1>
        <p className="text-xs text-alabaster-muted mt-1">Multi-hub inventory manager for 30ml, 50ml, and 100ml Extrait bottle units.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {warehouses.map((wh) => (
          <div key={wh.id} className="bg-obsidian-surface border border-gold-muted/20 p-4 rounded-lg flex justify-between items-center text-xs font-mono">
            <div>
              <span className="text-gold-champagne font-bold">{wh.name}</span> ({wh.code})
              <p className="text-alabaster-muted text-[11px] mt-0.5">{wh.location} • Manager: {wh.manager}</p>
            </div>
            <span className="bg-gold-muted/10 text-gold-champagne px-3 py-1 rounded border border-gold-muted/30 font-bold">
              {wh.stockUnits} Total Units
            </span>
          </div>
        ))}
      </div>

      <div className="bg-obsidian-surface border border-gold-muted/20 rounded-xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-obsidian border-b border-gold-muted/20 text-alabaster-muted font-mono uppercase text-[10px]">
              <tr>
                <th className="py-3.5 px-6">Perfume</th>
                <th className="py-3.5 px-4">Variant (ml)</th>
                <th className="py-3.5 px-4">SKU</th>
                <th className="py-3.5 px-4">Current Price</th>
                <th className="py-3.5 px-4">Live Stock Count</th>
                <th className="py-3.5 px-4">Stock Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold-muted/10 font-mono">
              {products.map((product) =>
                product.variants.map((v, vIdx) => (
                  <tr key={`${product.id}-${v.volumeMl}`} className="hover:bg-gold-muted/5 transition">
                    <td className="py-4 px-6 font-serif font-bold text-alabaster">
                      {vIdx === 0 ? product.name : ""}
                    </td>
                    <td className="py-4 px-4 text-gold-champagne font-bold">{v.volumeMl} ml</td>
                    <td className="py-4 px-4 text-alabaster-muted">{v.sku}</td>
                    <td className="py-4 px-4 text-alabaster">৳ {v.price.toLocaleString()} BDT</td>
                    <td className="py-4 px-4">
                      <input
                        type="number"
                        value={v.stockCount}
                        onChange={(e) => handleStockChange(product.id, vIdx, Number(e.target.value))}
                        className="w-24 bg-obsidian border border-gold-muted/30 px-3 py-1 rounded text-gold-champagne font-bold focus:outline-none focus:border-gold-champagne"
                      />
                    </td>
                    <td className="py-4 px-4">
                      {v.stockCount <= 5 ? (
                        <span className="bg-rose-950 text-rose-300 border border-rose-500/40 px-2.5 py-1 rounded text-[10px] flex items-center gap-1 w-fit">
                          <AlertTriangle className="w-3 h-3" /> LOW STOCK ({v.stockCount})
                        </span>
                      ) : (
                        <span className="bg-emerald-950 text-emerald-300 border border-emerald-500/40 px-2.5 py-1 rounded text-[10px] w-fit">
                          IN STOCK ({v.stockCount})
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
