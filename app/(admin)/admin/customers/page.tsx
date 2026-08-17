"use client";

import { useAdminStore } from "@/lib/adminStore";

export default function AdminCustomersPage() {
  const { orders } = useAdminStore();

  const customerMap: Record<string, { name: string; phone: string; totalSpent: number; orderCount: number; lastOrder: string }> = {};

  orders.forEach((o) => {
    if (!customerMap[o.customerPhone]) {
      customerMap[o.customerPhone] = {
        name: o.customerName,
        phone: o.customerPhone,
        totalSpent: o.totalAmount,
        orderCount: 1,
        lastOrder: o.createdAt,
      };
    } else {
      customerMap[o.customerPhone].totalSpent += o.totalAmount;
      customerMap[o.customerPhone].orderCount += 1;
    }
  });

  const customerList = Object.values(customerMap);

  return (
    <div className="space-y-8 text-left font-sans text-[#F7F3EE]">
      
      {/* Header */}
      <div className="border-b border-[#B08D57]/30 pb-6">
        <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] block">
          CLIENT CRM & VIP DIRECTORY
        </span>
        <h1 className="font-serif text-3xl font-bold text-[#D4AF37]">
          VIP Customer Directory
        </h1>
        <p className="text-xs text-zinc-400 mt-1">
          View all registered clients, total purchase values, order frequencies, and VIP tier statuses.
        </p>
      </div>

      {/* CUSTOMERS TABLE */}
      <div className="bg-[#181818] border border-[#B08D57]/30 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl">
        <h3 className="font-serif text-2xl font-bold text-[#F7F3EE]">Registered Clients ({customerList.length})</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#B08D57]/20 text-[#D4AF37] font-mono uppercase tracking-wider text-[10px]">
                <th className="pb-3 font-bold">Client Name</th>
                <th className="pb-3 font-bold">Mobile Number</th>
                <th className="pb-3 font-bold">Total Orders</th>
                <th className="pb-3 font-bold">Lifetime Spent</th>
                <th className="pb-3 font-bold">VIP Tier Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#B08D57]/10 font-mono">
              {customerList.map((c, idx) => (
                <tr key={idx} className="hover:bg-[#222222] transition-colors">
                  <td className="py-4 font-serif font-bold text-sm text-[#F7F3EE]">
                    {c.name}
                  </td>
                  <td className="py-4 font-mono text-zinc-400">
                    {c.phone}
                  </td>
                  <td className="py-4 font-mono font-bold text-[#F7F3EE]">
                    {c.orderCount} Orders
                  </td>
                  <td className="py-4 font-serif font-bold text-sm text-[#D4AF37]">
                    ৳ {c.totalSpent.toLocaleString()} BDT
                  </td>
                  <td className="py-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-amber-950 text-amber-300 border border-amber-500/40">
                      ROYAL VIP
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
