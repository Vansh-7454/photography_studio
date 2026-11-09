import React from "react";
import { siteContent } from "@/content/site";
import { Phone, MessageSquare, Calendar } from "lucide-react";
import Link from "next/link";

export function MobileCallBar() {
  return (
    <aside
      aria-label="Quick Actions"
      className="fixed bottom-0 left-0 right-0 z-30 bg-royal-indigo-dark/95 backdrop-blur-md border-t border-border-dark py-2 px-3 lg:hidden"
    >
      <div className="grid grid-cols-3 gap-2">
        {/* Call Now */}
        <a
          href={siteContent.contact.phoneHref}
          className="flex flex-col items-center justify-center gap-1 h-12 rounded-lg bg-royal-indigo border border-border-dark text-warm-ivory active:scale-95 transition-transform"
          aria-label="Direct Phone Call"
        >
          <Phone className="w-4 h-4 text-sindoor-red" />
          <span className="text-[11px] font-bold tracking-tight">Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          href={siteContent.contact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 h-12 rounded-lg bg-peacock-teal text-white active:scale-95 transition-transform shadow-sm"
          aria-label="WhatsApp Message"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="text-[11px] font-bold tracking-tight">WhatsApp</span>
        </a>

        {/* Book Dates */}
        <Link
          href="/contact"
          className="flex flex-col items-center justify-center gap-1 h-12 rounded-lg bg-sindoor-red text-white active:scale-95 transition-transform shadow-sm"
          aria-label="Check Available Dates"
        >
          <Calendar className="w-4 h-4 text-marigold-light" />
          <span className="text-[11px] font-bold tracking-tight">Check Dates</span>
        </Link>
      </div>
    </aside>
  );
}

