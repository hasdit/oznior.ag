"use client";

import { useState } from "react";
import { Plus, Download, Edit, Trash2, CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function AdminProductsPage() {
  const [products] = useState([
    {
      id: "1",
      name: "Royale Oud Concentré",
      category: "Oud Concentrés",
      family: "Oud",
      variants: "30ml, 50ml, 100ml, Sample, Tester",
      priceRange: "৳ 950 - ৳ 14,000",
      totalStock: 180,
      status: "PUBLISHED",
    },
    {
      id: "2",
      name: "Noir Mystique",
      category: "Amber Gold",
      family: "Amber",
      variants: "50ml, 100ml",
      priceRange: "৳ 7,500 - ৳ 12,000",
      totalStock: 12, // Low Stock Alert
      status: "PUBLISHED",
    },
  ]);

  return (
    <div className="space-y-6">
      {/* Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gold-muted/20 pb-6">
        <div>
          <h1 className="font-serif text-3xl font-semibold text-gold-champagne">Product Catalog Manager</h1>
          <p className="text-xs text-alabaster-muted mt-1">Manage Extrait de Parfum products, variant matrices & stock levels.</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="secondary" size="sm">
            <Download className="w-3.5 h-3.5 mr-2" />
            Export Excel
          </Button>
          <Button variant="primary" size="sm">
            <Plus className="w-3.5 h-3.5 mr-2" />
            Add Product
          </Button>
        </div>
      </div>

      {/* Product Data Table */}
      <div className="bg-obsidian-surface border border-gold-muted/30 rounded-lg overflow-hidden">
        <table className="w-full text-left text-xs text-alabaster-muted">
          <thead className="bg-obsidian text-[10px] uppercase tracking-widest text-gold-champagne border-b border-gold-muted/30">
            <tr>
              <th className="px-6 py-4">Product Name</th>
              <th className="px-6 py-4">Category / Family</th>
              <th className="px-6 py-4">Variants</th>
              <th className="px-6 py-4">Price Range</th>
              <th className="px-6 py-4">Total Stock</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gold-muted/20">
            {products.map((p) => (
              <tr key={p.id} className="hover:bg-gold-muted/5 transition-colors">
                <td className="px-6 py-4 font-serif text-sm font-semibold text-alabaster">{p.name}</td>
                <td className="px-6 py-4">
                  <span className="text-alabaster font-medium">{p.category}</span>
                  <div className="text-[10px] text-gold-champagne">{p.family}</div>
                </td>
                <td className="px-6 py-4 text-[11px]">{p.variants}</td>
                <td className="px-6 py-4 font-semibold text-gold-champagne">{p.priceRange}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    {p.totalStock < 20 ? (
                      <Badge variant="gold" className="bg-red-500/20 text-red-400 border-red-500/40">
                        <AlertTriangle className="w-3 h-3 mr-1" /> Low ({p.totalStock})
                      </Badge>
                    ) : (
                      <span className="text-alabaster font-medium">{p.totalStock} units</span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <Badge variant="gold">
                    <CheckCircle className="w-3 h-3 mr-1" /> {p.status}
                  </Badge>
                </td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button className="p-1.5 text-alabaster-muted hover:text-gold-champagne">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 text-alabaster-muted hover:text-red-400">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
