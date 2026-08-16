import { ShieldCheck, Truck, Lock, PackageCheck } from "lucide-react";

export default function TrustSection() {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: "AUTHENTICITY GUARANTEE",
      desc: "Every bottle is hand-sealed with a unique certificate of origin.",
    },
    {
      icon: PackageCheck,
      title: "LUXURY PACKAGING",
      desc: "Prepared in velvet-cushioned boxes for protected presentation.",
    },
    {
      icon: Truck,
      title: "NATIONWIDE DELIVERY",
      desc: "Protected express delivery across Bangladesh within 24–48 hours.",
    },
    {
      icon: Lock,
      title: "SECURE CHECKOUT",
      desc: "256-Bit SSL encrypted bKash, Nagad & Credit Card processing.",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#F8F5EF] border-y border-[#E4DDD2]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {trustItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="space-y-3 p-6">
              <Icon className="w-7 h-7 text-[#8A6A44] mx-auto" />
              <h4 className="font-serif text-base font-bold text-[#111111] tracking-wider uppercase">
                {item.title}
              </h4>
              <p className="text-base text-[#4B4B4B] font-light leading-[1.75] max-w-xs mx-auto">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
