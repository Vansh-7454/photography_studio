import React from "react";
import type { Metadata } from "next";
import { siteContent } from "@/content/site";
import { ContactForm } from "@/components/ui/ContactForm";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowUpRight, ShieldCheck, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Check Wedding Date Availability",
  description: "Reach out to Atelier Rangrez in Civil Lines, Meerut to check availability for your wedding dates across India and worldwide destinations.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-ivory-surface py-16 md:py-20 border-b border-border-subtle">
        <div className="site-container max-w-4xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-sindoor-red mb-3 block">
            Atelier Consultations
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-royal-indigo mb-6 leading-tight">
            Reserve Your Wedding Dates
          </h1>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
            Because we document only a strictly limited number of weddings each season, we encourage couples to reach out as early as their dates and venues are confirmed.
          </p>
        </div>
      </section>

      {/* Main Contact Grid (Info Card on Left, Validated Form on Right) */}
      <section className="section-padding bg-warm-ivory">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 5 Cols: Atelier Credentials & Instant Action Cards */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Direct Booking Card */}
              <div className="p-8 rounded-card bg-ivory-surface border border-border-subtle shadow-card">
                <span className="text-xs font-bold uppercase tracking-wider text-sindoor-red block mb-1">
                  Immediate Connect
                </span>
                <h2 className="font-serif text-2xl font-bold text-royal-indigo mb-4">
                  Speak Directly With Our Studio
                </h2>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-6">
                  For immediate date confirmation or urgent muhurat inquiries, our studio lines in Meerut are open Tuesday through Sunday.
                </p>

                <div className="space-y-4 text-sm text-text-muted">
                  <a
                    href={siteContent.contact.phoneHref}
                    className="flex items-center gap-3.5 p-3 rounded-lg bg-warm-ivory hover:bg-royal-indigo/5 text-royal-indigo font-bold transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-sindoor-red/10 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-sindoor-red" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-text-muted block">
                        Telephone Direct
                      </span>
                      <span>{siteContent.contact.phoneDisplay}</span>
                    </div>
                  </a>

                  <a
                    href={siteContent.contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3 rounded-lg bg-peacock-teal/10 hover:bg-peacock-teal/20 text-peacock-teal font-bold transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-peacock-teal/20 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-4 h-4 text-peacock-teal" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-peacock-teal/80 block">
                        Instant WhatsApp Chat
                      </span>
                      <span>{siteContent.contact.whatsappDisplay}</span>
                    </div>
                  </a>

                  <a
                    href={`mailto:${siteContent.contact.email}`}
                    className="flex items-center gap-3.5 p-3 rounded-lg bg-warm-ivory hover:bg-royal-indigo/5 text-royal-indigo font-bold transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-royal-indigo/10 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-royal-indigo" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] uppercase font-bold text-text-muted block">
                        Official Inquiries
                      </span>
                      <span className="text-xs truncate block">{siteContent.contact.email}</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Studio Location & Map Card */}
              <div className="p-8 rounded-card bg-ivory-surface border border-border-subtle shadow-card">
                <span className="text-xs font-bold uppercase tracking-wider text-peacock-teal block mb-1">
                  Physical Atelier
                </span>
                <h3 className="font-serif text-2xl font-bold text-royal-indigo mb-2">
                  Visit Our Meerut Studio
                </h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-4">
                  Experience handcrafted Italian albums and screen 4K wedding cinema in our private viewing lounge.
                </p>

                <div className="space-y-3 text-xs sm:text-sm text-text-muted mb-6">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-marigold shrink-0 mt-0.5" />
                    <span>{siteContent.contact.address}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-peacock-teal shrink-0 mt-0.5" />
                    <span>{siteContent.contact.hours}</span>
                  </div>
                </div>

                <a
                  href={siteContent.contact.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-input border border-border-subtle text-xs font-bold text-royal-indigo hover:bg-warm-ivory transition-colors flex items-center justify-center gap-2"
                >
                  <span>Open Location in Google Maps</span>
                  <ArrowUpRight className="w-4 h-4 text-sindoor-red" />
                </a>
              </div>

              {/* Integrity & Privacy Guarantee */}
              <div className="p-6 rounded-card bg-royal-indigo-dark text-warm-ivory border border-border-dark flex items-start gap-3.5">
                <ShieldCheck className="w-5 h-5 text-marigold shrink-0 mt-0.5" />
                <div className="text-xs text-text-muted-dark leading-relaxed">
                  <strong className="text-warm-ivory block mb-0.5">Absolute Discretion:</strong>
                  We respect the privacy of our couples and their families. We never share client contact details, guest lists, or unreleased wedding footage with third parties.
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Validated Availability Inquiry Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Booking FAQ Section */}
      <section className="section-padding bg-ivory-surface border-t border-border-subtle">
        <div className="site-container">
          <SectionHeader
            eyebrow="Booking Guidance"
            title="Frequently Asked Booking Questions"
            description="Clear answers regarding our travel protocols, contract terms, and date reservation."
            align="center"
          />

          <FAQAccordion items={siteContent.faqs} />
        </div>
      </section>
    </div>
  );
}

