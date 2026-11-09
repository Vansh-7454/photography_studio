import React from "react";
import Link from "next/link";
import { siteContent } from "@/content/site";
import { Logo } from "@/components/ui/Logo";
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-aubergine-dark text-warm-ivory border-t border-border-dark pt-14 pb-28 md:pb-14 relative overflow-hidden">
      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-border-dark">
          {/* Col 1: Brand & Tagline */}
          <div className="flex flex-col gap-3">
            <Logo variant="full" theme="light" />
            <p className="font-serif italic text-base text-muted-marigold mt-1">
              &ldquo;{siteContent.brand.tagline}&rdquo;
            </p>
            <p className="text-xs sm:text-sm text-text-muted-dark leading-relaxed">
              Creative wedding photography and cinematic films. Based in Civil Lines, Meerut, traveling worldwide.
            </p>
            <div className="pt-2">
              <span className="text-[11px] font-semibold text-soft-sage bg-soft-sage/10 px-2.5 py-1 rounded border border-soft-sage/20 inline-block">
                18 Weddings Per Season
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="flex flex-col gap-2.5">
            <h4 className="font-serif text-base font-semibold tracking-wider text-warm-ivory uppercase">
              Stories &amp; Cinema
            </h4>
            <div className="flex flex-col gap-2 pt-1">
              {siteContent.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs sm:text-sm text-text-muted-dark hover:text-muted-marigold transition-colors flex items-center justify-between group max-w-[180px]"
                >
                  <span>{item.label}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-marigold text-xs">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3: Contact & Atelier Details */}
          <div className="flex flex-col gap-3">
            <h4 className="font-serif text-base font-semibold tracking-wider text-warm-ivory uppercase">
              Meerut Studio
            </h4>
            <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-text-muted-dark">
              <a
                href={siteContent.contact.phoneHref}
                className="flex items-center gap-2.5 hover:text-muted-marigold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-terracotta shrink-0" />
                <span>{siteContent.contact.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${siteContent.contact.email}`}
                className="flex items-center gap-2.5 hover:text-muted-marigold transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-soft-sage shrink-0" />
                <span className="break-all">{siteContent.contact.email}</span>
              </a>

              <a
                href={siteContent.contact.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-muted-marigold transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-muted-marigold shrink-0 mt-0.5" />
                <span>{siteContent.contact.address}</span>
              </a>

              <a
                href={siteContent.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-soft-sage hover:text-warm-ivory pt-1"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Direct WhatsApp Chat</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Col 4: Studio Hours & Booking Note */}
          <div className="flex flex-col gap-3">
            <h4 className="font-serif text-base font-semibold tracking-wider text-warm-ivory uppercase">
              Visiting Hours
            </h4>
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-text-muted-dark">
              <Clock className="w-3.5 h-3.5 text-muted-marigold shrink-0 mt-0.5" />
              <p className="leading-relaxed">{siteContent.contact.hours}</p>
            </div>
            <div className="p-3 rounded-card bg-deep-aubergine border border-border-dark text-xs text-text-muted-dark leading-relaxed mt-1">
              <strong className="text-warm-ivory block mb-0.5 font-medium">Studio Consultations:</strong>
              Drop by for coffee and review hand-bound Italian leather albums in person.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-muted-dark">
          <p>© {new Date().getFullYear()} {siteContent.brand.legalName}. All rights reserved.</p>
          <p className="font-serif italic text-warm-ivory/80">
            Civil Lines, Meerut • Handcrafted Visual Heirlooms
          </p>
        </div>
      </div>
    </footer>
  );
}
