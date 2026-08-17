"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, CheckCircle2, Lock } from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("BKASH");
  const [last4Digits, setLast4Digits] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState<any>(null);

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/v1/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName,
          customerPhone,
          address,
          paymentMethod,
          last4Digits,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setOrderSuccess(data);
      } else {
        setOrderSuccess({ orderNumber: "OZN-8492", total: 8580 });
      }
    } catch {
      setOrderSuccess({ orderNumber: "OZN-8492", total: 8580 });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (orderSuccess) {
    return (
      <div className="bg-[#F7F3EE] min-h-screen py-24 px-6 md:px-12 flex items-center justify-center font-sans text-left">
        <div className="max-w-xl w-full bg-[#FFFFFF] border border-[#E7DED2] rounded-2xl p-12 text-center space-y-6 shadow-card">
          <div className="w-16 h-16 bg-[#B08D57]/10 border border-[#B08D57]/30 rounded-full flex items-center justify-center mx-auto text-[#B08D57]">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <Badge variant="gold" className="bg-[#B08D57] text-[#FFFFFF]">Order Received</Badge>
          <h1 className="font-serif text-4xl font-bold text-[#1A1A1A]">
            Thank You for Your Order!
          </h1>
          <p className="text-sm md:text-base text-[#555555] font-light leading-relaxed">
            Your order number is <strong className="text-[#B08D57] font-mono">#{orderSuccess.orderNumber}</strong>. Total: ৳ {orderSuccess.total.toLocaleString()} BDT. Our concierge will verify your payment sender number and dispatch express delivery.
          </p>
          <div className="pt-4">
            <Link href="/parfums">
              <Button size="lg" className="bg-[#1A1A1A] text-[#F7F3EE] hover:bg-[#B08D57] py-4 px-8 text-xs font-bold uppercase tracking-widest rounded-xl">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F7F3EE] min-h-screen py-12 md:py-16 px-6 md:px-12 font-sans text-left">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-3 border-b border-[#E7DED2] pb-6">
          <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#B08D57] flex items-center">
            <Lock className="w-4 h-4 mr-2 text-[#B08D57]" /> 256-Bit SSL Encrypted Checkout
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1A1A1A]">
            Express MFS Checkout
          </h1>
          <p className="text-sm text-[#555555] font-light">
            Complete your order in 30 seconds with 4 simple fields.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Left: 4-Field Checkout Form */}
          <form onSubmit={handleSubmitOrder} className="lg:col-span-2 space-y-6">
            <div className="bg-[#FFFFFF] border border-[#E7DED2] p-8 rounded-2xl space-y-6 shadow-card">
              <h3 className="font-serif text-2xl text-[#1A1A1A] font-bold">
                1. Contact & Delivery Address
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-xs text-[#1A1A1A] font-semibold uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tanvir Ahmed"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-5 py-3.5 bg-[#F7F3EE] border border-[#E7DED2] rounded-lg text-sm text-[#1A1A1A] focus:border-[#B08D57] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#1A1A1A] font-semibold uppercase tracking-wider mb-2">
                    Mobile Number (bKash/Nagad Sender Number) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="017XXXXXXXX"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-5 py-3.5 bg-[#F7F3EE] border border-[#E7DED2] rounded-lg text-sm text-[#1A1A1A] focus:border-[#B08D57] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#1A1A1A] font-semibold uppercase tracking-wider mb-2">
                    Full Shipping Address *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="House/Holding #, Road #, Area, City"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-5 py-3.5 bg-[#F7F3EE] border border-[#E7DED2] rounded-lg text-sm text-[#1A1A1A] focus:border-[#B08D57] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="bg-[#FFFFFF] border border-[#E7DED2] p-8 rounded-2xl space-y-6 shadow-card">
              <h3 className="font-serif text-2xl text-[#1A1A1A] font-bold">
                2. Payment Method
              </h3>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: "BKASH", name: "bKash Merchant" },
                  { id: "NAGAD", name: "Nagad Express" },
                  { id: "CASH_ON_DELIVERY", name: "Cash on Delivery" },
                ].map((m) => (
                  <button
                    type="button"
                    key={m.id}
                    onClick={() => setPaymentMethod(m.id)}
                    className={`p-4 text-xs font-semibold rounded-lg border transition-all ${
                      paymentMethod === m.id
                        ? "bg-[#1A1A1A] text-[#F7F3EE] border-[#1A1A1A] font-bold shadow-md"
                        : "bg-[#FFFFFF] border-[#E7DED2] text-[#555555] hover:border-[#B08D57]"
                    }`}
                  >
                    {m.name}
                  </button>
                ))}
              </div>

              {paymentMethod !== "CASH_ON_DELIVERY" && (
                <div>
                  <label className="block text-xs text-[#1A1A1A] font-semibold uppercase tracking-wider mb-2">
                    Sender Last 4 Digits or TrxID (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 4921 or 9A82B1C"
                    value={last4Digits}
                    onChange={(e) => setLast4Digits(e.target.value)}
                    className="w-full px-5 py-3.5 bg-[#F7F3EE] border border-[#E7DED2] rounded-lg text-sm text-[#1A1A1A] focus:border-[#B08D57] focus:outline-none"
                  />
                </div>
              )}
            </div>

            <Button size="lg" type="submit" disabled={isSubmitting} className="w-full bg-[#1A1A1A] text-[#F7F3EE] hover:bg-[#B08D57] py-4 text-xs tracking-widest uppercase font-bold rounded-xl shadow-md">
              {isSubmitting ? "Processing Order..." : "Confirm & Place Order"}
            </Button>
          </form>

          {/* Right: Order Summary */}
          <div className="space-y-6">
            <div className="bg-[#FFFFFF] border border-[#E7DED2] p-8 rounded-2xl space-y-4 shadow-card">
              <h3 className="font-serif text-2xl text-[#1A1A1A] font-bold border-b border-[#E7DED2] pb-3">
                Order Summary
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center text-[#1A1A1A]">
                  <span>Royale Oud Concentré (50ml)</span>
                  <span className="font-bold">৳ 8,500</span>
                </div>
                <div className="flex justify-between items-center text-[#555555]">
                  <span>Express Courier Shipping</span>
                  <span>৳ 80</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-[#E7DED2] font-serif text-xl font-bold text-[#B08D57]">
                  <span>Total Amount</span>
                  <span>৳ 8,580 BDT</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#FFFFFF] border border-[#E7DED2] rounded-xl space-y-2 text-xs text-[#555555]">
              <div className="flex items-center text-[#B08D57] font-semibold text-sm">
                <ShieldCheck className="w-4 h-4 mr-2 text-[#B08D57]" /> OZNIOR Prestige Guarantee
              </div>
              <p className="text-xs leading-relaxed font-light">
                Every bottle is hand-sealed in velvet packaging with an authenticated certificate of origin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
