export default function AdminIntegrationsPage() {
  return (
    <div className="space-y-6">
      <div className="border-b border-gold-muted/20 pb-6">
        <h1 className="font-serif text-3xl font-semibold text-gold-champagne">Integrations & Pixel Tracking Hub</h1>
        <p className="text-xs text-alabaster-muted mt-1">Configure GA4, Meta Pixel, TikTok Pixel, Google Tag Manager, and Microsoft Clarity tracking IDs.</p>
      </div>
      <div className="bg-obsidian-surface border border-gold-muted/30 p-6 rounded-lg space-y-4">
        <div className="flex justify-between items-center text-xs">
          <span className="font-serif font-bold text-alabaster">Google Analytics 4 (GA4)</span>
          <span className="font-mono text-gold-champagne">G-OZNIOR1234</span>
        </div>
        <div className="flex justify-between items-center text-xs">
          <span className="font-serif font-bold text-alabaster">Meta Pixel</span>
          <span className="font-mono text-gold-champagne">1234567890</span>
        </div>
      </div>
    </div>
  );
}
