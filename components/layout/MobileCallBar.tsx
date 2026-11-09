import React from "react";
import { siteContent } from "@/content/site";
import { Phone, MessageSquare, Calendar } from "lucide-react";
import Link from "next/link";

export function MobileCallBar() {
  return (
    <aside
      aria-label="Quick Actions"
      className="fixed bottom-0 left-0 right-0 z-30 bg-aubergine-dark/95 backdrop-blur-md border-t border-border-dark py-2 px-3 lg:hidden"
    >
      <div className="grid grid-cols-3 gap-2">
        {/* Call Now */}
        <a
          href={siteContent.contact.phoneHref}
          className="flex flex-col items-center justify-center gap-1 h-11 rounded-input bg-deep-aubergine border border-border-dark text-warm-ivory active:scale-95 transition-transform"
          aria-label="Call Studio"
        >
          <Phone className="w-3.5 h-3.5 text-terracotta" />
          <span className="text-[10.5px] font-bold tracking-tight">Call Studio</span>
        </a>

        {/* WhatsApp */}
        <a
          href={siteContent.contact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 h-11 rounded-input bg-soft-sage text-white active:scale-95 transition-transform shadow-subtle"
          aria-label="WhatsApp"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span className="text-[10.5px] font-bold tracking-tight">WhatsApp</span>
        </a>

        {/* Book Dates */}
        <Link
          href="/contact"
          className="flex flex-col items-center justify-center gap-1 h-11 rounded-input bg-terracotta text-white active:scale-95 transition-transform shadow-subtle"
          aria-label="Book Dates"
        >
          <Calendar className="w-3.5 h-3.5 text-muted-marigold" />
          <span className="text-[10.5px] font-bold tracking-tight">Book Dates</span>
        </Link>
      </div>
    </aside>
  );
}
