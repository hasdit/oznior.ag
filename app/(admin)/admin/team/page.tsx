"use client";

import { useState } from "react";
import { useAdminStore, AdminTeamMember } from "@/lib/adminStore";
import {
  ShieldCheck,
  UserPlus,
  Trash2,
  CheckCircle2,
  Lock,
  Mail,
  Phone,
  X,
  UserCheck,
  UserX,
  Sparkles
} from "lucide-react";

export default function AdminTeamPage() {
  const { teamMembers, addTeamMember, updateTeamMember, deleteTeamMember } = useAdminStore();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<AdminTeamMember | null>(null);
  const [toast, setToast] = useState("");

  const handleOpenAdd = () => {
    setEditingMember({
      id: `user-${Date.now()}`,
      name: "",
      email: "",
      phone: "",
      role: "Store Manager",
      status: "Active",
      lastActive: "Never",
      permissions: ["Products", "Orders", "Inventory"],
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (member: AdminTeamMember) => {
    setEditingMember({ ...member });
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingMember || !editingMember.name || !editingMember.email) return;

    const exists = teamMembers.some((m) => m.id === editingMember.id);
    if (exists) {
      updateTeamMember(editingMember.id, editingMember);
      setToast("Admin team member updated!");
    } else {
      addTeamMember(editingMember);
      setToast("New admin team member invited!");
    }

    setIsModalOpen(false);
    setEditingMember(null);
    setTimeout(() => setToast(""), 3000);
  };

  const togglePermission = (perm: string) => {
    if (!editingMember) return;
    const current = editingMember.permissions || [];
    const updated = current.includes(perm)
      ? current.filter((p) => p !== perm)
      : [...current, perm];
    setEditingMember({ ...editingMember, permissions: updated });
  };

  const toggleSuspend = (id: string, currentStatus: string) => {
    const nextStatus = currentStatus === "Active" ? "Suspended" : "Active";
    updateTeamMember(id, { status: nextStatus as any });
    setToast(`Account status updated to ${nextStatus}!`);
    setTimeout(() => setToast(""), 3000);
  };

  return (
    <div className="space-y-8 text-left font-sans text-[#F7F3EE] max-w-7xl mx-auto pb-16">
      {toast && (
        <div className="fixed top-6 right-6 z-50 bg-[#143521] border border-emerald-500/60 text-emerald-200 px-5 py-3 rounded-lg shadow-2xl flex items-center gap-3 text-xs font-mono animate-in fade-in slide-in-from-top-4">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toast}</span>
        </div>
      )}

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#B08D57]/30 pb-6 gap-4">
        <div>
          <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#D4AF37] block">
            ROLE-BASED ACCESS CONTROL (RBAC)
          </span>
          <h1 className="font-serif text-3xl font-bold text-[#D4AF37] flex items-center gap-2">
            <ShieldCheck className="w-7 h-7 text-[#D4AF37]" /> Admin Team & User Permissions
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Invite admin staff, assign granular module permissions, manage roles, and enforce security controls.
          </p>
        </div>
        <button
          onClick={handleOpenAdd}
          className="bg-[#D4AF37] text-[#0F0F0F] font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-widest hover:bg-[#E5C158] transition shadow-xl flex items-center gap-2"
        >
          <UserPlus className="w-4 h-4" /> INVITE TEAM MEMBER
        </button>
      </div>

      {/* ROLE PERMISSION OVERVIEW CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
        <div className="bg-[#181818] border border-[#B08D57]/30 p-5 rounded-2xl space-y-2 shadow-2xl">
          <span className="text-amber-400 font-bold block uppercase tracking-wider text-[11px]">👑 Super Admin</span>
          <p className="text-zinc-400 font-sans text-[11px]">Full access to system settings, team roles, integrations, and revenue analytics.</p>
        </div>

        <div className="bg-[#181818] border border-[#B08D57]/30 p-5 rounded-2xl space-y-2 shadow-2xl">
          <span className="text-emerald-400 font-bold block uppercase tracking-wider text-[11px]">🛍️ Store Manager</span>
          <p className="text-zinc-400 font-sans text-[11px]">Manages product catalog, inventory matrix, order status, and vouchers.</p>
        </div>

        <div className="bg-[#181818] border border-[#B08D57]/30 p-5 rounded-2xl space-y-2 shadow-2xl">
          <span className="text-sky-400 font-bold block uppercase tracking-wider text-[11px]">🎧 Support Specialist</span>
          <p className="text-zinc-400 font-sans text-[11px]">Responds to concierge support tickets, client CRM, and review approvals.</p>
        </div>

        <div className="bg-[#181818] border border-[#B08D57]/30 p-5 rounded-2xl space-y-2 shadow-2xl">
          <span className="text-purple-400 font-bold block uppercase tracking-wider text-[11px]">🚚 Logistics Officer</span>
          <p className="text-zinc-400 font-sans text-[11px]">Dispatches Steadfast/RedX courier parcels, tracks stock & fulfillment hubs.</p>
        </div>
      </div>

      {/* TEAM MEMBERS TABLE */}
      <div className="bg-[#181818] border border-[#B08D57]/30 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl">
        <div className="flex justify-between items-center border-b border-[#B08D57]/20 pb-4">
          <h3 className="font-serif text-2xl font-bold text-[#F7F3EE]">
            Active Admin Team ({teamMembers.length})
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#B08D57]/20 text-[#D4AF37] font-mono uppercase tracking-wider text-[10px]">
                <th className="pb-3 font-bold">Team Member</th>
                <th className="pb-3 font-bold">Role</th>
                <th className="pb-3 font-bold">Status</th>
                <th className="pb-3 font-bold">Granted Permissions</th>
                <th className="pb-3 font-bold">Last Active</th>
                <th className="pb-3 font-bold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#B08D57]/10 font-mono">
              {teamMembers.map((m) => (
                <tr key={m.id} className="hover:bg-[#222222] transition-colors">
                  
                  {/* Name & Contact */}
                  <td className="py-4 font-serif font-bold text-sm text-[#F7F3EE]">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-[#0F0F0F] border border-[#B08D57]/40 flex items-center justify-center text-[#D4AF37] font-bold text-sm">
                        {m.name.charAt(0)}
                      </div>
                      <div>
                        <span className="block font-bold text-[#F7F3EE]">{m.name}</span>
                        <span className="text-[11px] text-zinc-400 font-mono font-normal flex items-center gap-1">
                          <Mail className="w-3 h-3 text-[#D4AF37]" /> {m.email}
                        </span>
                        <span className="text-[10px] text-zinc-500 font-mono font-normal flex items-center gap-1">
                          <Phone className="w-3 h-3 text-[#D4AF37]" /> {m.phone}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Role */}
                  <td className="py-4 font-mono font-bold">
                    <span className="px-3 py-1 rounded-full text-[10px] bg-[#0F0F0F] border border-[#B08D57]/40 text-[#D4AF37]">
                      {m.role}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="py-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                      m.status === "Active" ? "bg-emerald-950 text-emerald-300 border border-emerald-500/30" : "bg-rose-950 text-rose-300 border border-rose-500/30"
                    }`}>
                      {m.status}
                    </span>
                  </td>

                  {/* Permissions Pills */}
                  <td className="py-4 max-w-xs">
                    <div className="flex flex-wrap gap-1">
                      {m.permissions?.map((p) => (
                        <span key={p} className="px-2 py-0.5 bg-[#0F0F0F] border border-[#B08D57]/20 rounded text-[9px] text-zinc-300">
                          {p}
                        </span>
                      ))}
                    </div>
                  </td>

                  {/* Last Active */}
                  <td className="py-4 text-zinc-400 text-[11px]">
                    {m.lastActive}
                  </td>

                  {/* Actions */}
                  <td className="py-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleOpenEdit(m)}
                        className="px-3 py-1.5 bg-[#D4AF37] text-[#0F0F0F] hover:bg-[#E5C158] rounded-lg text-[11px] font-bold transition flex items-center space-x-1"
                      >
                        <span>Edit Role</span>
                      </button>

                      {m.role !== "Super Admin" && (
                        <>
                          <button
                            onClick={() => toggleSuspend(m.id, m.status)}
                            className={`p-1.5 rounded transition ${m.status === "Active" ? "text-amber-400 hover:text-amber-300" : "text-emerald-400 hover:text-emerald-300"}`}
                            title={m.status === "Active" ? "Suspend Account" : "Activate Account"}
                          >
                            {m.status === "Active" ? <UserX className="w-4 h-4" /> : <UserCheck className="w-4 h-4" />}
                          </button>

                          <button
                            onClick={() => deleteTeamMember(m.id)}
                            className="text-zinc-400 hover:text-rose-400 p-1.5 transition"
                            title="Delete User"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* INVITE / EDIT TEAM MEMBER MODAL */}
      {isModalOpen && editingMember && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <form onSubmit={handleSave} className="bg-[#181818] border border-[#B08D57]/60 rounded-2xl w-full max-w-2xl flex flex-col shadow-2xl text-left text-[#F7F3EE] overflow-hidden">
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-[#B08D57]/40 bg-[#121212] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="font-serif text-xl font-bold text-[#D4AF37]">
                  {teamMembers.some((m) => m.id === editingMember.id) ? `Edit Admin Permissions: ${editingMember.name}` : "Invite New Admin Team Member"}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 text-zinc-400 hover:text-[#F7F3EE] transition-colors rounded-lg hover:bg-zinc-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4 text-xs">
              <div>
                <label className="block font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={editingMember.name}
                  onChange={(e) => setEditingMember({ ...editingMember, name: e.target.value })}
                  className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-[#F7F3EE] font-bold focus:border-[#D4AF37] focus:outline-none"
                  placeholder="e.g. Kazi Anisur Rahman"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={editingMember.email}
                    onChange={(e) => setEditingMember({ ...editingMember, email: e.target.value })}
                    className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-[#F7F3EE] font-mono focus:border-[#D4AF37] focus:outline-none"
                    placeholder="name@oznior.com"
                  />
                </div>

                <div>
                  <label className="block font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-1.5">
                    Mobile Phone *
                  </label>
                  <input
                    type="text"
                    required
                    value={editingMember.phone}
                    onChange={(e) => setEditingMember({ ...editingMember, phone: e.target.value })}
                    className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-[#F7F3EE] font-mono focus:border-[#D4AF37] focus:outline-none"
                    placeholder="+8801700000000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-1.5">
                    Assigned Role *
                  </label>
                  <select
                    value={editingMember.role}
                    onChange={(e) => setEditingMember({ ...editingMember, role: e.target.value as any })}
                    className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-[#F7F3EE] font-bold focus:border-[#D4AF37] focus:outline-none"
                  >
                    <option value="Super Admin">Super Admin (All Access)</option>
                    <option value="Store Manager">Store Manager (Products & Orders)</option>
                    <option value="Support Specialist">Support Specialist (CRM & Tickets)</option>
                    <option value="Logistics Officer">Logistics Officer (Shipments & Courier)</option>
                    <option value="Content Editor">Content Editor (Blog & Banners)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-1.5">
                    Account Status
                  </label>
                  <select
                    value={editingMember.status}
                    onChange={(e) => setEditingMember({ ...editingMember, status: e.target.value as any })}
                    className="w-full p-3.5 bg-[#0F0F0F] border border-[#B08D57]/40 rounded-xl text-[#F7F3EE] font-bold focus:border-[#D4AF37] focus:outline-none"
                  >
                    <option value="Active">Active Access</option>
                    <option value="Suspended">Suspended</option>
                  </select>
                </div>
              </div>

              {/* PERMISSION CHECKBOXES */}
              <div className="pt-2">
                <label className="block font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                  Granular Module Permissions
                </label>
                <div className="grid grid-cols-2 gap-2 bg-[#0F0F0F] p-4 border border-[#B08D57]/30 rounded-xl">
                  {[
                    "All Access",
                    "Products",
                    "Inventory",
                    "Orders",
                    "Coupons",
                    "Analytics",
                    "Support Tickets",
                    "Customer CRM",
                    "Shipments",
                    "Courier API",
                    "CMS & Journal",
                    "Integrations",
                    "User Roles"
                  ].map((perm) => (
                    <div
                      key={perm}
                      onClick={() => togglePermission(perm)}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={(editingMember.permissions || []).includes(perm)}
                        onChange={() => {}}
                        className="w-4 h-4 accent-[#D4AF37] rounded cursor-pointer"
                      />
                      <span className="text-xs font-mono text-zinc-300">{perm}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-[#B08D57]/40 bg-[#121212] flex justify-between items-center">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2.5 rounded-lg text-xs font-mono font-bold text-[#F7F3EE] bg-[#2A2A2A] hover:bg-[#383838] transition"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-6 py-2.5 bg-[#D4AF37] text-[#0F0F0F] font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-[#E5C158] transition shadow-lg"
              >
                Save Member Credentials
              </button>
            </div>

          </form>
        </div>
      )}

    </div>
  );
}
