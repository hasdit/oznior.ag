"use client";

import { useState } from "react";
import { useAdminStore } from "@/lib/adminStore";
import {
  Sliders,
  Save,
  CheckCircle2,
  Share2,
  Search,
  MessageSquare,
  Smartphone,
  Eye,
  ShieldCheck,
  Zap,
  Globe
} from "lucide-react";

export default function AdminIntegrationsPage() {
  const { integrations, updateIntegrations } = useAdminStore();
  const [formData, setFormData] = useState({ ...integrations });
  const [activeTab, setActiveTab] = useState<"all" | "meta" | "google" | "social" | "chat" | "sms" | "behavior">("all");
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateIntegrations(formData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="space-y-8 text-left font-sans text-[#F7F3EE] max-w-6xl mx-auto pb-16">
      {savedSuccess && (
        <div className="fixed top-6 right-6 z-50 bg-emerald-950 border border-emerald-500/60 text-emerald-200 px-5 py-3 rounded-lg shadow-2xl flex items-center gap-3 text-xs font-mono animate-in fade-in slide-in-from-top-4">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>All Marketing Pixels & Tracking Keys Saved!</span>
        </div>
      )}

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#B08D57]/30 pb-6 gap-4">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] block">
            ENTERPRISE TRACKING & MARKETING ENGINE
          </span>
          <h1 className="font-serif text-3xl font-bold text-[#D4AF37] flex items-center gap-2">
            <Sliders className="w-7 h-7 text-[#D4AF37]" /> Integrations & Tracking Pixels Hub
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Configure Meta Pixel, CAPI, GTM, GA4, TikTok Pixel, WhatsApp, Masking SMS, and Clarity Heatmaps without writing code.
          </p>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="bg-[#D4AF37] text-[#0F0F0F] font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-widest hover:bg-[#E5C158] transition-all shadow-xl flex items-center gap-2 shrink-0"
        >
          <Save className="w-4 h-4" /> Save Integration Keys
        </button>
      </div>

      {/* TAB SELECTION BAR */}
      <div className="bg-[#181818] border border-[#B08D57]/30 rounded-2xl p-2 flex flex-wrap gap-1.5 text-xs font-mono">
        {[
          { id: "all", label: "All Integrations" },
          { id: "meta", label: "Meta (FB & IG)" },
          { id: "google", label: "Google Suite (GTM & GA4)" },
          { id: "social", label: "TikTok & Social Pixels" },
          { id: "chat", label: "Live Chat & Concierge" },
          { id: "sms", label: "SMS Gateway (BD)" },
          { id: "behavior", label: "Heatmaps & Clarity" },
        ].map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setActiveTab(t.id as any)}
            className={`px-4 py-2 rounded-xl transition font-bold ${
              activeTab === t.id
                ? "bg-[#D4AF37] text-[#0F0F0F] shadow-md"
                : "text-zinc-300 hover:text-white hover:bg-zinc-800"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* FORM SUITE */}
      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* CARD 1: META (FACEBOOK & INSTAGRAM) ECOSYSTEM */}
        {(activeTab === "all" || activeTab === "meta") && (
          <div className="bg-[#181818] border border-[#B08D57]/30 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center space-x-3 border-b border-[#B08D57]/20 pb-4">
              <div className="p-2.5 bg-[#0F0F0F] rounded-xl text-sky-400 border border-[#B08D57]/30">
                <Share2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#F7F3EE]">1. Meta (Facebook & Instagram) Pixel & CAPI</h3>
                <p className="text-xs text-zinc-400">Track page views, add to cart, checkout start, and purchase events with server-side Conversions API.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div>
                <label className="block font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                  Meta Facebook Pixel ID
                </label>
                <input
                  type="text"
                  value={formData.fbPixelId || ""}
                  onChange={(e) => setFormData({ ...formData, fbPixelId: e.target.value })}
                  className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-[#F7F3EE] font-mono focus:border-[#D4AF37] focus:outline-none"
                  placeholder="e.g. 94829103948201"
                />
                <span className="text-[10px] text-zinc-500 mt-1 block">Browser-side Meta Pixel tracking.</span>
              </div>

              <div>
                <label className="block font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                  Test Event Code (Optional)
                </label>
                <input
                  type="text"
                  value={formData.fbTestEventCode || ""}
                  onChange={(e) => setFormData({ ...formData, fbTestEventCode: e.target.value })}
                  className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-[#D4AF37] font-mono focus:border-[#D4AF37] focus:outline-none"
                  placeholder="e.g. TEST94817"
                />
                <span className="text-[10px] text-zinc-500 mt-1 block">Used in Meta Events Manager Test Events tab.</span>
              </div>
            </div>

            <div>
              <label className="block font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                Meta Conversions API (CAPI) Access Token
              </label>
              <textarea
                rows={2}
                value={formData.fbCapiToken || ""}
                onChange={(e) => setFormData({ ...formData, fbCapiToken: e.target.value })}
                className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-[#F7F3EE] font-mono text-xs focus:border-[#D4AF37] focus:outline-none leading-relaxed"
                placeholder="EAAG..."
              />
              <span className="text-[10px] text-zinc-500 mt-1 block">Bypasses iOS 14+ ad blockers with secure server-to-server dispatch.</span>
            </div>
          </div>
        )}

        {/* CARD 2: GOOGLE TRACKING SUITE (GTM, GA4, GOOGLE ADS) */}
        {(activeTab === "all" || activeTab === "google") && (
          <div className="bg-[#181818] border border-[#B08D57]/30 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center space-x-3 border-b border-[#B08D57]/20 pb-4">
              <div className="p-2.5 bg-[#0F0F0F] rounded-xl text-amber-400 border border-[#B08D57]/30">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#F7F3EE]">2. Google Tracking Suite (GTM, GA4 & Ads)</h3>
                <p className="text-xs text-zinc-400">Inject Google Tag Manager containers, GA4 ecommerce events, and Google Ads purchase conversions.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div>
                <label className="block font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                  Google Tag Manager Container ID (GTM) *
                </label>
                <input
                  type="text"
                  value={formData.gtmId || ""}
                  onChange={(e) => setFormData({ ...formData, gtmId: e.target.value })}
                  className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-[#F7F3EE] font-mono focus:border-[#D4AF37] focus:outline-none"
                  placeholder="e.g. GTM-OZNIOR99"
                />
                <span className="text-[10px] text-zinc-500 mt-1 block">Injected into head and body tags.</span>
              </div>

              <div>
                <label className="block font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                  Google Analytics 4 Measurement ID (GA4)
                </label>
                <input
                  type="text"
                  value={formData.ga4MeasurementId || ""}
                  onChange={(e) => setFormData({ ...formData, ga4MeasurementId: e.target.value })}
                  className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-[#F7F3EE] font-mono focus:border-[#D4AF37] focus:outline-none"
                  placeholder="e.g. G-OZNIOR2026"
                />
                <span className="text-[10px] text-zinc-500 mt-1 block">Tracks revenue, traffic sources, and conversion funnels.</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div>
                <label className="block font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                  Google Ads Conversion ID
                </label>
                <input
                  type="text"
                  value={formData.googleAdsConversionId || ""}
                  onChange={(e) => setFormData({ ...formData, googleAdsConversionId: e.target.value })}
                  className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-[#F7F3EE] font-mono focus:border-[#D4AF37] focus:outline-none"
                  placeholder="e.g. AW-948271039"
                />
              </div>

              <div>
                <label className="block font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                  Google Ads Conversion Label
                </label>
                <input
                  type="text"
                  value={formData.googleAdsConversionLabel || ""}
                  onChange={(e) => setFormData({ ...formData, googleAdsConversionLabel: e.target.value })}
                  className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-[#F7F3EE] font-mono focus:border-[#D4AF37] focus:outline-none"
                  placeholder="e.g. k91_CJOw84MZEP"
                />
              </div>
            </div>
          </div>
        )}

        {/* CARD 3: TIKTOK, PINTEREST & SNAPCHAT AD PIXELS */}
        {(activeTab === "all" || activeTab === "social") && (
          <div className="bg-[#181818] border border-[#B08D57]/30 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center space-x-3 border-b border-[#B08D57]/20 pb-4">
              <div className="p-2.5 bg-[#0F0F0F] rounded-xl text-rose-400 border border-[#B08D57]/30">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#F7F3EE]">3. TikTok, Pinterest & Snapchat Ad Pixels</h3>
                <p className="text-xs text-zinc-400">Track paid ad conversions and retargeting audiences across social platforms.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
              <div>
                <label className="block font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                  TikTok Pixel ID
                </label>
                <input
                  type="text"
                  value={formData.tiktokPixelId || ""}
                  onChange={(e) => setFormData({ ...formData, tiktokPixelId: e.target.value })}
                  className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-[#F7F3EE] font-mono focus:border-[#D4AF37] focus:outline-none"
                  placeholder="e.g. C91823901823948"
                />
              </div>

              <div>
                <label className="block font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                  Pinterest Tag ID
                </label>
                <input
                  type="text"
                  value={formData.pinterestTagId || ""}
                  onChange={(e) => setFormData({ ...formData, pinterestTagId: e.target.value })}
                  className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-[#F7F3EE] font-mono focus:border-[#D4AF37] focus:outline-none"
                  placeholder="e.g. 2618290182394"
                />
              </div>

              <div>
                <label className="block font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                  Snapchat Pixel ID
                </label>
                <input
                  type="text"
                  value={formData.snapchatPixelId || ""}
                  onChange={(e) => setFormData({ ...formData, snapchatPixelId: e.target.value })}
                  className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-[#F7F3EE] font-mono focus:border-[#D4AF37] focus:outline-none"
                  placeholder="e.g. snap-9482019"
                />
              </div>
            </div>
          </div>
        )}

        {/* CARD 4: LIVE CHAT & CONCIERGE WIDGETS */}
        {(activeTab === "all" || activeTab === "chat") && (
          <div className="bg-[#181818] border border-[#B08D57]/30 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center space-x-3 border-b border-[#B08D57]/20 pb-4">
              <div className="p-2.5 bg-[#0F0F0F] rounded-xl text-emerald-400 border border-[#B08D57]/30">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#F7F3EE]">4. Live Chat & Concierge Widgets</h3>
                <p className="text-xs text-zinc-400">Direct 1-tap WhatsApp chat button, Tawk.to live support widget, and Messenger chat plugin.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
              <div>
                <label className="block font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                  WhatsApp Business Chat Number *
                </label>
                <input
                  type="text"
                  value={formData.whatsappNumber || ""}
                  onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                  className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-[#F7F3EE] font-mono focus:border-[#D4AF37] focus:outline-none"
                  placeholder="e.g. +8801700000000"
                />
              </div>

              <div>
                <label className="block font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                  Tawk.to Property ID / Direct Key
                </label>
                <input
                  type="text"
                  value={formData.tawktoPropertyId || ""}
                  onChange={(e) => setFormData({ ...formData, tawktoPropertyId: e.target.value })}
                  className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-[#F7F3EE] font-mono focus:border-[#D4AF37] focus:outline-none"
                  placeholder="e.g. 6491823910/1g94817"
                />
              </div>

              <div>
                <label className="block font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                  Facebook Messenger App ID
                </label>
                <input
                  type="text"
                  value={formData.messengerAppId || ""}
                  onChange={(e) => setFormData({ ...formData, messengerAppId: e.target.value })}
                  className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-[#F7F3EE] font-mono focus:border-[#D4AF37] focus:outline-none"
                  placeholder="e.g. 94817264910283"
                />
              </div>
            </div>
          </div>
        )}

        {/* CARD 5: BANGLADESH MASKING SMS GATEWAY */}
        {(activeTab === "all" || activeTab === "sms") && (
          <div className="bg-[#181818] border border-[#B08D57]/30 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center space-x-3 border-b border-[#B08D57]/20 pb-4">
              <div className="p-2.5 bg-[#0F0F0F] rounded-xl text-[#D4AF37] border border-[#B08D57]/30">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#F7F3EE]">5. Bangladesh Masking SMS Gateway</h3>
                <p className="text-xs text-zinc-400">Automated SMS notifications for order placement, bKash payment verification, and delivery tracking.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
              <div>
                <label className="block font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                  SMS Gateway Provider
                </label>
                <select
                  value={formData.smsProvider || "BulkSMS BD"}
                  onChange={(e) => setFormData({ ...formData, smsProvider: e.target.value })}
                  className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-[#F7F3EE] font-bold focus:border-[#D4AF37] focus:outline-none"
                >
                  <option value="BulkSMS BD">BulkSMS BD (Fast API)</option>
                  <option value="SSL Wireless">SSL Wireless SMS API</option>
                  <option value="Greenweb SMS">Greenweb BD SMS</option>
                  <option value="ElitBuzz SMS">ElitBuzz Gateway</option>
                </select>
              </div>

              <div>
                <label className="block font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                  SMS Sender ID / Masking Brand
                </label>
                <input
                  type="text"
                  value={formData.smsSenderId || "OZNIOR"}
                  onChange={(e) => setFormData({ ...formData, smsSenderId: e.target.value })}
                  className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-[#D4AF37] font-mono font-bold focus:border-[#D4AF37] focus:outline-none uppercase"
                  placeholder="OZNIOR"
                />
              </div>

              <div>
                <label className="block font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                  SMS API Secret Key
                </label>
                <input
                  type="password"
                  value={formData.smsApiKey || ""}
                  onChange={(e) => setFormData({ ...formData, smsApiKey: e.target.value })}
                  className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-[#F7F3EE] font-mono focus:border-[#D4AF37] focus:outline-none"
                  placeholder="••••••••••••••••"
                />
              </div>
            </div>
          </div>
        )}

        {/* CARD 6: USER BEHAVIOR & HEATMAPS */}
        {(activeTab === "all" || activeTab === "behavior") && (
          <div className="bg-[#181818] border border-[#B08D57]/30 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center space-x-3 border-b border-[#B08D57]/20 pb-4">
              <div className="p-2.5 bg-[#0F0F0F] rounded-xl text-purple-400 border border-[#B08D57]/30">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#F7F3EE]">6. User Behavior, Heatmaps & Session Recordings</h3>
                <p className="text-xs text-zinc-400">Record customer sessions, inspect click heatmaps, and identify checkout drop-off friction.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div>
                <label className="block font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                  Microsoft Clarity Project ID
                </label>
                <input
                  type="text"
                  value={formData.clarityProjectId || ""}
                  onChange={(e) => setFormData({ ...formData, clarityProjectId: e.target.value })}
                  className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-[#F7F3EE] font-mono focus:border-[#D4AF37] focus:outline-none"
                  placeholder="e.g. k941829018"
                />
                <span className="text-[10px] text-zinc-500 mt-1 block">Free session replay & heatmap recordings.</span>
              </div>

              <div>
                <label className="block font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                  Hotjar Site ID
                </label>
                <input
                  type="text"
                  value={formData.hotjarSiteId || ""}
                  onChange={(e) => setFormData({ ...formData, hotjarSiteId: e.target.value })}
                  className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-[#F7F3EE] font-mono focus:border-[#D4AF37] focus:outline-none"
                  placeholder="e.g. 3891028"
                />
              </div>
            </div>
          </div>
        )}

        {/* SUBMIT BUTTON */}
        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="px-8 py-4 bg-[#D4AF37] text-[#0F0F0F] font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-[#E5C158] transition-all shadow-xl flex items-center space-x-2"
          >
            <Save className="w-4 h-4" />
            <span>SAVE ALL TRACKING KEYS</span>
          </button>
        </div>

      </form>
    </div>
  );
}
