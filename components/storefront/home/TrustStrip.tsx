import { ShieldCheck, Truck, RotateCcw, Headphones } from "lucide-react";

export default function TrustStrip() {
  const items = [
    { icon: ShieldCheck, label: "Authentic Products", sub: "Hand-sealed certificate" },
    { icon: Truck, label: "Fast Delivery", sub: "Dhaka 24h • Countrywide 48h" },
    { icon: RotateCcw, label: "Easy Returns", sub: "7-Day concierge return" },
    { icon: Headphones, label: "Customer Support", sub: "WhatsApp 1-tap ordering" },
  ];

  return (
    <section className="bg-[#FFFFFF] border-y border-[#E7DED2] py-6 px-6 md:px-12 font-sans">
      <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#F7F3EE] border border-[#E7DED2] flex items-center justify-center text-[#B08D57] shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-xs md:text-sm text-[#1A1A1A] block">
                  ✓ {item.label}
                </span>
                <span className="text-[11px] text-[#555555] font-light hidden sm:block">
                  {item.sub}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
