"use client";

import { useState } from "react";
import { CheckCircle2, XCircle, Truck, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function AdminOrdersPage() {
  const [selectedOrder, setSelectedOrder] = useState({
    id: "OZN-8492",
    customerName: "John Doe",
    customerPhone: "01712345678",
    address: "House 12, Road 5, Dhanmondi, Dhaka",
    paymentMethod: "BKASH",
    last4Digits: "4921",
    subtotal: 8500,
    shippingFee: 80,
    total: 8580,
    status: "PENDING",
    items: [
      { name: "Royale Oud Concentré (50ml)", qty: 1, unitPrice: 8500 },
    ],
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-gold-muted/20 pb-6">
        <h1 className="font-serif text-3xl font-semibold text-gold-champagne">Orders & MFS Verification Hub</h1>
        <p className="text-xs text-alabaster-muted mt-1">Match customer bKash/Nagad sender numbers, verify TrxID & dispatch express couriers.</p>
      </div>

      {/* Main Split Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: MFS Verification Queue */}
        <div className="space-y-4">
          <h2 className="font-serif text-lg text-gold-champagne font-semibold">Pending Verification Queue</h2>
          <div className="space-y-3">
            <div className="p-4 bg-obsidian-surface border border-gold-champagne/40 rounded-lg space-y-2 cursor-pointer shadow-gold-glow">
              <div className="flex justify-between items-center text-xs">
                <span className="font-serif font-bold text-alabaster">#OZN-8492</span>
                <Badge variant="gold">bKash</Badge>
              </div>
              <div className="text-xs text-alabaster-muted flex items-center justify-between">
                <span>01712345678</span>
                <span className="font-mono text-gold-champagne font-bold">Last 4: 4921</span>
              </div>
              <div className="text-xs font-bold text-alabaster pt-1">৳ 8,580 BDT</div>
            </div>
          </div>
        </div>

        {/* Right 2 Columns: Order Detail & Actions */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-obsidian-surface border border-gold-muted/30 rounded-lg p-6 space-y-6">
            <div className="flex justify-between items-start border-b border-gold-muted/20 pb-4">
              <div>
                <h3 className="font-serif text-2xl font-bold text-gold-champagne">Order #{selectedOrder.id}</h3>
                <span className="text-xs text-alabaster-muted">Status: {selectedOrder.status}</span>
              </div>
              <div className="flex space-x-3">
                <Button variant="secondary" size="sm" className="bg-red-500/10 border-red-500/30 text-red-400">
                  <XCircle className="w-4 h-4 mr-1" /> Reject
                </Button>
                <Button variant="primary" size="sm">
                  <CheckCircle2 className="w-4 h-4 mr-1" /> Verify Payment
                </Button>
              </div>
            </div>

            {/* MFS Verification Audit Card */}
            <div className="p-4 bg-obsidian border border-gold-champagne/40 rounded-lg space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-gold-champagne font-bold">
                MFS Payment Audit Detail
              </span>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-alabaster-muted">Method:</span> <strong className="text-alabaster">bKash Merchant</strong>
                </div>
                <div>
                  <span className="text-alabaster-muted">Sender Input / TrxID:</span> <strong className="text-gold-champagne font-mono">4921</strong>
                </div>
              </div>
            </div>

            {/* Customer & Address Details */}
            <div className="grid grid-cols-2 gap-6 text-xs border-b border-gold-muted/20 pb-4">
              <div>
                <span className="text-alabaster-muted">Customer Name:</span>
                <div className="font-semibold text-alabaster text-sm">{selectedOrder.customerName}</div>
                <div className="text-alabaster-muted flex items-center mt-1">
                  <Phone className="w-3 h-3 mr-1 text-gold-champagne" /> {selectedOrder.customerPhone}
                </div>
              </div>
              <div>
                <span className="text-alabaster-muted">Shipping Address:</span>
                <div className="text-alabaster mt-1">{selectedOrder.address}</div>
              </div>
            </div>

            {/* Courier Dispatch Actions */}
            <div className="pt-2 flex items-center justify-between">
              <div className="text-xs text-alabaster-muted">
                Available Couriers: <strong className="text-alabaster">Pathao • Steadfast • RedX • Sundarban</strong>
              </div>
              <Button variant="outline" size="sm">
                <Truck className="w-4 h-4 mr-2" /> Dispatch Courier Consignment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
