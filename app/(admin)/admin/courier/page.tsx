"use client";

import { useState } from "react";
import { useAdminStore } from "@/lib/adminStore";
import { Save, Truck, CheckCircle2 } from "lucide-react";

export default function AdminCourierPage() {
  const { courierConfig, updateCourierConfig } = useAdminStore();
  const [formData, setFormData] = useState({ ...courierConfig });
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateCourierConfig(formData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="space-y-8 text-left font-sans text-[#F7F3EE]">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#B08D57]/30 pb-6 gap-4">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] block">
            COURIER & LOGISTICS API
          </span>
          <h1 className="font-serif text-3xl font-bold text-[#D4AF37]">
            Steadfast / RedX API Integration
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Configure automated Steadfast courier API credentials for 1-click parcel generation & tracking in Bangladesh.
          </p>
        </div>

        {savedSuccess && (
          <div className="p-3 bg-emerald-950 border border-emerald-500/50 text-emerald-200 rounded-xl text-xs font-bold flex items-center space-x-2 shadow-2xl">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Courier API settings saved!</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="bg-[#181818] border border-[#B08D57]/30 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl">
        <div className="flex items-center space-x-3 border-b border-[#B08D57]/20 pb-4">
          <div className="p-2 bg-[#0F0F0F] rounded-lg text-[#D4AF37] border border-[#B08D57]/30">
            <Truck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-xl font-bold text-[#F7F3EE]">Courier Credentials & Dispatch Rules</h3>
            <p className="text-xs text-zinc-400">Primary delivery partner for Dhaka and countrywide shipments.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
              Primary Courier Provider *
            </label>
            <select
              value={formData.provider}
              onChange={(e) => setFormData({ ...formData, provider: e.target.value as any })}
              className="w-full p-4 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-xs font-bold text-[#F7F3EE] focus:border-[#D4AF37] focus:outline-none"
            >
              <option value="Steadfast">Steadfast Courier (Automated BD)</option>
              <option value="RedX">RedX Logistics</option>
              <option value="Pathao">Pathao Courier API</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
              Merchant ID *
            </label>
            <input
              type="text"
              required
              value={formData.merchantId}
              onChange={(e) => setFormData({ ...formData, merchantId: e.target.value })}
              className="w-full p-4 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-xs font-mono text-[#F7F3EE] focus:border-[#D4AF37] focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
              API Key *
            </label>
            <input
              type="password"
              required
              value={formData.apiKey}
              onChange={(e) => setFormData({ ...formData, apiKey: e.target.value })}
              className="w-full p-4 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-xs font-mono text-[#F7F3EE] focus:border-[#D4AF37] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
              Secret Key *
            </label>
            <input
              type="password"
              required
              value={formData.secretKey}
              onChange={(e) => setFormData({ ...formData, secretKey: e.target.value })}
              className="w-full p-4 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-xs font-mono text-[#F7F3EE] focus:border-[#D4AF37] focus:outline-none"
            />
          </div>
        </div>

        <div className="flex items-center space-x-3 pt-2">
          <input
            type="checkbox"
            id="autodispatch"
            checked={formData.autoDispatch}
            onChange={(e) => setFormData({ ...formData, autoDispatch: e.target.checked })}
            className="w-4 h-4 accent-[#D4AF37] rounded"
          />
          <label htmlFor="autodispatch" className="text-xs font-bold text-[#F7F3EE] cursor-pointer">
            Automatically dispatch parcel tracking info to Steadfast API when order is marked "Shipped"
          </label>
        </div>

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="px-8 py-4 bg-[#D4AF37] text-[#0F0F0F] font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-[#E5C158] transition-all shadow-xl flex items-center space-x-2"
          >
            <Save className="w-4 h-4" />
            <span>SAVE COURIER API CONFIG</span>
          </button>
        </div>

      </form>
    </div>
  );
}
