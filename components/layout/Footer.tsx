import React from "react";
import Link from "next/link";
import { siteContent } from "@/content/site";
import { Logo } from "@/components/ui/Logo";
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-royal-indigo-dark text-warm-ivory border-t border-border-dark pt-16 pb-28 md:pb-16 relative overflow-hidden">
      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-14 border-b border-border-dark">
          {/* Col 1: Brand & Tagline */}
          <div className="flex flex-col gap-4">
            <Logo variant="full" theme="light" />
            <p className="font-serif italic text-lg text-marigold tracking-wide">
              &ldquo;{siteContent.brand.tagline}&rdquo;
            </p>
            <p className="text-sm text-text-muted-dark leading-relaxed">
              {siteContent.brand.metaDescription}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs uppercase tracking-widest text-marigold font-bold px-2.5 py-1 rounded bg-marigold/10 border border-marigold/20">
                Meerut Atelier
              </span>
              <span className="text-xs text-text-muted-dark">Est. Worldwide Cinema</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-serif text-lg font-semibold tracking-wider text-warm-ivory uppercase">
              Explore Stories
            </h4>
            <div className="flex flex-col gap-2.5 pt-1">
              {siteContent.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-text-muted-dark hover:text-marigold transition-colors flex items-center justify-between group max-w-[200px]"
                >
                  <span>{item.label}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-marigold text-xs">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3: Contact & Atelier Details */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-lg font-semibold tracking-wider text-warm-ivory uppercase">
              Connect With Us
            </h4>
            <div className="flex flex-col gap-3 text-sm text-text-muted-dark">
              <a
                href={siteContent.contact.phoneHref}
                className="flex items-start gap-3 hover:text-marigold transition-colors group"
              >
                <Phone className="w-4 h-4 text-sindoor-red shrink-0 mt-0.5" />
                <span>{siteContent.contact.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${siteContent.contact.email}`}
                className="flex items-start gap-3 hover:text-marigold transition-colors group"
              >
                <Mail className="w-4 h-4 text-peacock-teal shrink-0 mt-0.5" />
                <span className="break-all">{siteContent.contact.email}</span>
              </a>

              <a
                href={siteContent.contact.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-marigold transition-colors group"
              >
                <MapPin className="w-4 h-4 text-marigold shrink-0 mt-0.5" />
                <span>{siteContent.contact.address}</span>
              </a>

              <a
                href={siteContent.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-peacock-teal hover:text-warm-ivory pt-1"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat Directly on WhatsApp</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Col 4: Studio Hours & Editorial Notice */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-lg font-semibold tracking-wider text-warm-ivory uppercase">
              Consultation Hours
            </h4>
            <div className="flex items-start gap-3 text-sm text-text-muted-dark">
              <Clock className="w-4 h-4 text-marigold shrink-0 mt-0.5" />
              <p className="leading-relaxed">{siteContent.contact.hours}</p>
            </div>
            <div className="p-3.5 rounded-lg bg-royal-indigo border border-border-dark text-xs text-text-muted-dark leading-relaxed">
              <strong className="text-warm-ivory block mb-1">Calendar Notice:</strong>
              Due to our unhurried documentary approach, we accept only 18 wedding commissions per fiscal year to ensure meticulous craftsmanship.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted-dark">
          <p>© {new Date().getFullYear()} {siteContent.brand.legalName}. All rights reserved.</p>
          <p className="font-serif italic text-warm-ivory/80">
            Handcrafted with devotion in Meerut, India.
          </p>
        </div>
      </div>
    </footer>
  );
}

