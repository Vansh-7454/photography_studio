import React from "react";
import type { Metadata } from "next";
import { siteContent } from "@/content/site";
import { ContactForm } from "@/components/ui/ContactForm";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowUpRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Book Us — Let's Make Your Story",
  description: "Check availability for your wedding dates with Atelier Rangrez in Civil Lines, Meerut. We travel across North India, Rajasthan, and worldwide destinations.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Compact Page Header */}
      <section className="bg-ivory-card py-12 md:py-16 border-b border-border-subtle">
        <div className="site-container max-w-3xl text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-terracotta mb-2 block">
            Dates &amp; Consultations
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-deep-aubergine mb-3 leading-tight">
            Let&apos;s Make Your Story.
          </h1>
          <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-xl mx-auto">
            We document a limited 18 weddings per season. Tell us about your dates and location below.
          </p>
        </div>
      </section>

      {/* Main Contact Grid (Info Card on Left, Form on Right) */}
      <section className="section-padding bg-warm-ivory">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 5 Columns: Studio Credentials & Instant Connect */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              {/* Direct Connect */}
              <div className="p-6 rounded-card bg-white border border-border-subtle shadow-card">
                <span className="text-[10px] font-bold uppercase tracking-wider text-terracotta block mb-1">
                  Direct Line
                </span>
                <h2 className="font-serif text-2xl font-bold text-deep-aubergine mb-3">
                  Talk With Our Studio
                </h2>
                <p className="text-xs text-text-muted leading-relaxed mb-4">
                  For urgent date checks or immediate questions, our studio lines in Meerut are open Tuesday through Sunday.
                </p>

                <div className="space-y-3 text-xs sm:text-sm">
                  <a
                    href={siteContent.contact.phoneHref}
                    className="flex items-center gap-3 p-3 rounded-input bg-warm-ivory hover:bg-terracotta/5 text-deep-aubergine font-bold transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0">
                      <Phone className="w-3.5 h-3.5 text-terracotta" />
                    </div>
                    <div>
                      <span className="text-[9.5px] uppercase font-bold text-text-muted block">Direct Phone</span>
                      <span>{siteContent.contact.phoneDisplay}</span>
                    </div>
                  </a>

                  <a
                    href={siteContent.contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-input bg-soft-sage/10 hover:bg-soft-sage/20 text-soft-sage font-bold transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-soft-sage/20 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-3.5 h-3.5 text-soft-sage" />
                    </div>
                    <div>
                      <span className="text-[9.5px] uppercase font-bold text-soft-sage/80 block">Instant WhatsApp</span>
                      <span>{siteContent.contact.whatsappDisplay}</span>
                    </div>
                  </a>

                  <a
                    href={`mailto:${siteContent.contact.email}`}
                    className="flex items-center gap-3 p-3 rounded-input bg-warm-ivory hover:bg-deep-aubergine/5 text-deep-aubergine font-bold transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-deep-aubergine/10 flex items-center justify-center shrink-0">
                      <Mail className="w-3.5 h-3.5 text-deep-aubergine" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[9.5px] uppercase font-bold text-text-muted block">Email</span>
                      <span className="truncate block text-xs">{siteContent.contact.email}</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Physical Studio Card */}
              <div className="p-6 rounded-card bg-white border border-border-subtle shadow-card">
                <span className="text-[10px] font-bold uppercase tracking-wider text-soft-sage block mb-1">
                  Civil Lines Atelier
                </span>
                <h3 className="font-serif text-xl font-bold text-deep-aubergine mb-2">
                  Visit Our Meerut Workspace
                </h3>
                <div className="space-y-2 text-xs text-text-muted mb-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-muted-marigold shrink-0 mt-0.5" />
                    <span>{siteContent.contact.address}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="w-3.5 h-3.5 text-soft-sage shrink-0 mt-0.5" />
                    <span>{siteContent.contact.hours}</span>
                  </div>
                </div>

                <a
                  href={siteContent.contact.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-input border border-border-subtle text-xs font-bold text-deep-aubergine hover:bg-warm-ivory transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-terracotta" />
                </a>
              </div>

              {/* Discretion Notice */}
              <div className="p-4 rounded-card bg-aubergine-dark text-warm-ivory border border-border-dark flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-muted-marigold shrink-0 mt-0.5" />
                <p className="text-[11px] text-text-muted-dark leading-relaxed">
                  <strong className="text-warm-ivory">Client Discretion:</strong> We protect client privacy. Contact details and raw footage are never shared with external agencies.
                </p>
              </div>
            </div>

            {/* Right 7 Columns: Validated Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Booking FAQ */}
      <section className="section-padding bg-ivory-card border-t border-border-subtle">
        <div className="site-container">
          <SectionHeader
            eyebrow="Booking Guidance"
            title="Common Questions About Booking"
            description="Clear details on contracts, travel terms, and date reservation."
            align="center"
          />

          <FAQAccordion items={siteContent.faqs} />
        </div>
      </section>
    </div>
  );
}
