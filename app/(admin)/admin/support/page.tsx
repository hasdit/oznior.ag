"use client";

import { useState } from "react";
import { useAdminStore } from "@/lib/adminStore";
import { Headphones, MessageSquare, CheckCircle2, Send } from "lucide-react";

export default function AdminSupportPage() {
  const { supportTickets, replySupportTicket, closeSupportTicket } = useAdminStore();
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null);
  const [replyMessage, setReplyMessage] = useState("");
  const [toast, setToast] = useState("");

  const selectedTicket = supportTickets.find((t) => t.id === selectedTicketId);

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTicketId || !replyMessage) return;

    replySupportTicket(selectedTicketId, replyMessage);
    setReplyMessage("");
    setSelectedTicketId(null);
    setToast("Reply sent to customer!");
    setTimeout(() => setToast(""), 3000);
  };

  return (
    <div className="space-y-8">
      {toast && (
        <div className="fixed top-6 right-6 z-50 bg-emerald-950 border border-emerald-500/40 text-emerald-200 px-5 py-3 rounded-lg shadow-2xl flex items-center gap-3 text-xs font-mono">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toast}</span>
        </div>
      )}

      <div className="border-b border-gold-muted/20 pb-6">
        <h1 className="font-serif text-3xl font-semibold text-gold-champagne flex items-center gap-2">
          <Headphones className="w-6 h-6 text-gold-champagne" /> Concierge Support & Inquiries
        </h1>
        <p className="text-xs text-alabaster-muted mt-1">Manage customer inquiries, gift sealing requests, and express delivery support tickets.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-3">
          <h3 className="font-serif text-sm font-bold text-alabaster uppercase tracking-wider">Tickets List</h3>
          {supportTickets.map((ticket) => (
            <div
              key={ticket.id}
              onClick={() => setSelectedTicketId(ticket.id)}
              className={`p-4 rounded-xl border cursor-pointer transition ${selectedTicketId === ticket.id ? 'bg-gold-muted/10 border-gold-champagne' : 'bg-obsidian-surface border-gold-muted/20 hover:border-gold-muted/50'}`}
            >
              <div className="flex justify-between items-center text-[10px] font-mono mb-1">
                <span className="text-gold-champagne font-bold">{ticket.ticketNumber}</span>
                <span className={`px-2 py-0.5 rounded font-bold uppercase ${ticket.status === 'Open' ? 'bg-amber-950 text-amber-300' : 'bg-emerald-950 text-emerald-300'}`}>
                  {ticket.status}
                </span>
              </div>
              <h4 className="font-serif text-sm font-bold text-alabaster">{ticket.customerName}</h4>
              <p className="text-xs text-alabaster-muted mt-1 line-clamp-1">{ticket.subject}</p>
            </div>
          ))}
        </div>

        <div className="lg:col-span-2 bg-obsidian-surface border border-gold-muted/20 p-6 rounded-xl space-y-6">
          {selectedTicket ? (
            <div className="space-y-6">
              <div className="border-b border-gold-muted/20 pb-4 flex justify-between items-start">
                <div>
                  <span className="text-xs font-mono text-gold-champagne font-bold">{selectedTicket.ticketNumber} • {selectedTicket.createdAt}</span>
                  <h2 className="font-serif text-xl font-bold text-alabaster mt-1">{selectedTicket.subject}</h2>
                  <p className="text-xs text-alabaster-muted mt-1">Customer: <strong className="text-alabaster">{selectedTicket.customerName}</strong> ({selectedTicket.customerPhone})</p>
                </div>
                <button
                  onClick={() => closeSupportTicket(selectedTicket.id)}
                  className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700 px-3 py-1.5 rounded text-xs font-mono"
                >
                  Mark Closed
                </button>
              </div>

              <div className="bg-obsidian border border-gold-muted/20 p-4 rounded-lg space-y-2">
                <span className="text-[10px] font-mono text-alabaster-muted uppercase">Customer Message</span>
                <p className="text-xs text-alabaster leading-relaxed">{selectedTicket.message}</p>
              </div>

              {selectedTicket.reply && (
                <div className="bg-gold-muted/10 border border-gold-champagne/30 p-4 rounded-lg space-y-2">
                  <span className="text-[10px] font-mono text-gold-champagne font-bold uppercase">Sent Concierge Reply</span>
                  <p className="text-xs text-alabaster-muted leading-relaxed">{selectedTicket.reply}</p>
                </div>
              )}

              <form onSubmit={handleSendReply} className="space-y-3 pt-4 border-t border-gold-muted/20">
                <label className="block text-xs text-alabaster font-mono">Send Response to Customer</label>
                <textarea
                  value={replyMessage}
                  onChange={(e) => setReplyMessage(e.target.value)}
                  className="w-full bg-obsidian border border-gold-muted/30 px-3 py-2 rounded text-xs text-alabaster focus:outline-none focus:border-gold-champagne h-24"
                  placeholder="Type official concierge response..."
                  required
                />
                <button
                  type="submit"
                  className="bg-gold-champagne text-obsidian px-5 py-2 rounded text-xs font-semibold uppercase tracking-wider flex items-center gap-2 hover:bg-gold-light"
                >
                  <Send className="w-4 h-4" /> Send Reply
                </button>
              </form>
            </div>
          ) : (
            <div className="h-64 flex flex-col items-center justify-center text-center text-alabaster-muted space-y-2">
              <MessageSquare className="w-8 h-8 text-gold-muted/40" />
              <p className="text-xs">Select a ticket from the left panel to inspect and reply.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
