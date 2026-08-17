"use client";

import Link from "next/link";
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Truck } from "lucide-react";
import { useUIStore } from "@/lib/store";
import { trackEvent } from "@/lib/analytics";

export default function CartDrawer() {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity } = useUIStore();

  if (!isCartOpen) return null;

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const freeShippingThreshold = 5000;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Shopping Bag"
      className="fixed inset-0 z-50 bg-[#1A1A1A]/80 backdrop-blur-md flex justify-end"
    >
      <div className="bg-[#FFFFFF] w-full max-w-md h-full overflow-y-auto p-6 md:p-8 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300 text-left">
        {/* Header */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#E7DED2] pb-4">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-[#B08D57]" />
              <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">Your Order Bag</h3>
            </div>
            <button
              onClick={closeCart}
              className="p-2 text-[#555555] hover:text-[#1A1A1A] transition-colors rounded-full hover:bg-[#F7F3EE]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-[#F7F3EE] p-4 rounded-xl border border-[#E7DED2] space-y-2">
            <div className="flex justify-between items-center text-xs font-semibold">
              <span className="text-[#1A1A1A] flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#B08D57]" /> Express Delivery Threshold
              </span>
              <span className="text-[#B08D57] font-bold">
                {remainingForFreeShipping === 0
                  ? "✓ FREE SHIPPING UNLOCKED"
                  : `Add ৳ ${remainingForFreeShipping.toLocaleString()} for Free Delivery`}
              </span>
            </div>
            <div className="w-full h-2 bg-[#E7DED2] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#B08D57] transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          {cart.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <ShoppingBag className="w-12 h-12 text-[#B08D57] mx-auto opacity-40" />
              <p className="text-sm text-[#555555]">Your shopping bag is currently empty.</p>
              <Link
                href="/parfums"
                onClick={closeCart}
                className="inline-block px-6 py-3 bg-[#1A1A1A] text-[#F7F3EE] text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-[#B08D57] transition-colors shadow-sm"
              >
                Explore Extrait Collection
              </Link>
            </div>
          ) : (
            <div className="space-y-4 max-h-[45vh] overflow-y-auto pr-1">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.volumeMl}`}
                  className="flex items-center space-x-4 p-4 bg-[#F7F3EE] border border-[#E7DED2] rounded-xl"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-16 h-20 object-contain filter drop-shadow-sm shrink-0"
                  />

                  <div className="flex-1 space-y-1">
                    <h4 className="font-serif font-bold text-base text-[#1A1A1A]">{item.name}</h4>
                    <span className="text-xs text-[#555555] block">{item.volumeMl}ml Extrait</span>
                    <span className="text-sm font-serif font-bold text-[#B08D57]">
                      ৳ {(item.price * item.quantity).toLocaleString()} BDT
                    </span>

                    {/* Quantity controls */}
                    <div className="flex items-center space-x-3 pt-2">
                      <div className="flex items-center border border-[#E7DED2] bg-[#FFFFFF] rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.volumeMl, -1)}
                          className="px-2.5 py-0.5 text-xs text-[#1A1A1A] font-bold hover:bg-[#F7F3EE]"
                        >
                          -
                        </button>
                        <span className="px-3 py-0.5 text-xs font-bold text-[#1A1A1A]">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.volumeMl, 1)}
                          className="px-2.5 py-0.5 text-xs text-[#1A1A1A] font-bold hover:bg-[#F7F3EE]"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id, item.volumeMl)}
                        className="text-red-500 hover:text-red-700 p-1 transition-colors"
                        aria-label="Remove Item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Subtotal & Checkout Action (with Mobile Bottom Safe Padding) */}
        {cart.length > 0 && (
          <div className="pt-6 border-t border-[#E7DED2] space-y-4 pb-20 md:pb-0">
            <div className="space-y-2 text-xs text-[#555555]">
              <div className="flex justify-between items-center text-sm font-semibold text-[#1A1A1A]">
                <span>Bag Subtotal</span>
                <span className="font-serif text-xl font-bold text-[#1A1A1A]">
                  ৳ {subtotal.toLocaleString()} BDT
                </span>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span>Taxes & Shipping</span>
                <span>Calculated at checkout</span>
              </div>
            </div>

            <Link
              href="/checkout"
              onClick={() => {
                closeCart();
                trackEvent("checkout_start", { subtotal, itemCount: totalCartCount });
              }}
              className="w-full flex items-center justify-center space-x-2 py-4 bg-[#1A1A1A] text-[#F7F3EE] font-bold text-xs uppercase tracking-[0.22em] rounded-xl hover:bg-[#B08D57] transition-all shadow-md"
            >
              <span>PROCEED TO CHECKOUT</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="flex items-center justify-center space-x-2 text-[10px] text-[#555555] pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2F6F4F]" />
              <span>7-Day Return Policy • Velvet Box Included</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
