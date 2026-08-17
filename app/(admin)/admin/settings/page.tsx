"use client";

import { useState } from "react";
import { useAdminStore } from "@/lib/adminStore";
import { Save, CheckCircle2, Shield, Phone, Truck, Power } from "lucide-react";

export default function AdminSettingsPage() {
  const { settings, updateSettings } = useAdminStore();
  const [formData, setFormData] = useState({ ...settings });
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings(formData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="space-y-8 text-left font-sans text-[#F7F3EE]">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#B08D57]/30 pb-6 gap-4">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] block">
            MAISON ENTERPRISE CONTROL
          </span>
          <h1 className="font-serif text-3xl font-bold text-[#D4AF37]">
            Global System Settings
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Configure site announcement bar, WhatsApp support number, free shipping limit, and live storefront behavior.
          </p>
        </div>

        {savedSuccess && (
          <div className="p-3 bg-emerald-950 border border-emerald-500/50 text-emerald-200 rounded-xl text-xs font-bold flex items-center space-x-2 shadow-2xl">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Settings saved & live on Storefront!</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* SECTION 1: ANNOUNCEMENT BAR CONTROL */}
        <div className="bg-[#181818] border border-[#B08D57]/30 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl">
          <div className="flex items-center space-x-3 border-b border-[#B08D57]/20 pb-4">
            <div className="p-2 bg-[#0F0F0F] rounded-lg text-[#D4AF37] border border-[#B08D57]/30">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#F7F3EE]">1. Header Announcement Banner</h3>
              <p className="text-xs text-zinc-400">Displayed at the top of every storefront page.</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                Announcement Bar Message Text *
              </label>
              <textarea
                rows={2}
                required
                value={formData.announcementBarText}
                onChange={(e) => setFormData({ ...formData, announcementBarText: e.target.value })}
                className="w-full p-4 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-xs text-[#F7F3EE] font-semibold focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="announcementEnabled"
                checked={formData.announcementEnabled}
                onChange={(e) => setFormData({ ...formData, announcementEnabled: e.target.checked })}
                className="w-4 h-4 accent-[#D4AF37] rounded"
              />
              <label htmlFor="announcementEnabled" className="text-xs font-bold text-[#F7F3EE] cursor-pointer">
                Enable Announcement Bar across storefront
              </label>
            </div>
          </div>
        </div>

        {/* SECTION 2: CLIENT CARE & SUPPORT CONTACTS */}
        <div className="bg-[#181818] border border-[#B08D57]/30 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl">
          <div className="flex items-center space-x-3 border-b border-[#B08D57]/20 pb-4">
            <div className="p-2 bg-[#0F0F0F] rounded-lg text-[#D4AF37] border border-[#B08D57]/30">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#F7F3EE]">2. Client Care & Concierge Phone</h3>
              <p className="text-xs text-zinc-400">Syncs with header WhatsApp 1-Tap button and support modal.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                Support Phone Number *
              </label>
              <input
                type="text"
                required
                value={formData.supportPhone}
                onChange={(e) => setFormData({ ...formData, supportPhone: e.target.value })}
                className="w-full p-4 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-xs text-[#F7F3EE] font-mono focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                Support Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.supportEmail}
                onChange={(e) => setFormData({ ...formData, supportEmail: e.target.value })}
                className="w-full p-4 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-xs text-[#F7F3EE] font-mono focus:border-[#D4AF37] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* SECTION 3: FREE SHIPPING THRESHOLD */}
        <div className="bg-[#181818] border border-[#B08D57]/30 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl">
          <div className="flex items-center space-x-3 border-b border-[#B08D57]/20 pb-4">
            <div className="p-2 bg-[#0F0F0F] rounded-lg text-[#D4AF37] border border-[#B08D57]/30">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#F7F3EE]">3. Free Shipping Threshold</h3>
              <p className="text-xs text-zinc-400">Controls the progress bar calculation in Cart Drawer.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                Free Delivery Cart Limit (BDT) *
              </label>
              <input
                type="number"
                required
                value={formData.freeShippingThreshold}
                onChange={(e) => setFormData({ ...formData, freeShippingThreshold: Number(e.target.value) })}
                className="w-full p-4 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-xs text-[#F7F3EE] font-mono font-bold focus:border-[#D4AF37] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* SECTION 4: MAINTENANCE MODE */}
        <div className="bg-[#181818] border border-[#B08D57]/30 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl">
          <div className="flex items-center space-x-3 border-b border-[#B08D57]/20 pb-4">
            <div className="p-2 bg-[#0F0F0F] rounded-lg text-rose-400 border border-rose-500/30">
              <Power className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#F7F3EE]">4. Maintenance Mode</h3>
              <p className="text-xs text-zinc-400">Temporarily display VIP private maintenance screen to visitors.</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="maintenance"
              checked={formData.maintenanceMode}
              onChange={(e) => setFormData({ ...formData, maintenanceMode: e.target.checked })}
              className="w-4 h-4 accent-[#D4AF37] rounded"
            />
            <label htmlFor="maintenance" className="text-xs font-bold text-[#F7F3EE] cursor-pointer">
              Enable Maintenance Lock Mode
            </label>
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="px-8 py-4 bg-[#D4AF37] text-[#0F0F0F] font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-[#E5C158] transition-all shadow-xl flex items-center space-x-2"
          >
            <Save className="w-4 h-4" />
            <span>SAVE SYSTEM CONFIGURATION</span>
          </button>
        </div>

      </form>
    </div>
  );
}
