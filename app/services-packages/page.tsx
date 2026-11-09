import React from "react";
import type { Metadata } from "next";
import { siteContent } from "@/content/site";
import { SmartImage } from "@/components/ui/SmartImage";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Check, Sparkles, BookOpen, Camera, Film, Users, Shield, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Curated Wedding Collections",
  description: "Explore bespoke Indian wedding photography and cinematic film packages by Atelier Rangrez, tailored for grand destination weddings, traditional nuptials, and intimate pheras.",
};

export default function ServicesPackagesPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-ivory-surface py-16 md:py-20 border-b border-border-subtle">
        <div className="site-container max-w-4xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-sindoor-red mb-3 block">
            Bespoke Coverage Collections
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-royal-indigo mb-6 leading-tight">
            Services &amp; Wedding Packages
          </h1>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
            Every Indian wedding has its own rhythm. We offer three distinct coverage frameworks, each fully customizable to honor your family&apos;s rituals and venues.
          </p>
        </div>
      </section>

      {/* Main Packages Presentation (Distinct Layouts, Not Repetitive Cards) */}
      <section className="section-padding bg-warm-ivory">
        <div className="site-container space-y-16">
          {/* Collection 1: Shahi Heirloom (Flagship Horizontal Split) */}
          <div className="p-8 sm:p-12 rounded-hero bg-royal-indigo-dark text-warm-ivory border border-border-dark shadow-raised relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 mandap-pattern-dark pointer-events-none opacity-20" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
              <div className="lg:col-span-6 flex flex-col items-start">
                <span className="text-xs font-bold uppercase tracking-widest text-marigold bg-marigold/10 border border-marigold/20 px-3 py-1 rounded-full mb-4">
                  {siteContent.servicePackages[0].badge}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-ivory mb-2">
                  {siteContent.servicePackages[0].title}
                </h2>
                <p className="text-xs sm:text-sm text-marigold font-semibold tracking-wide uppercase mb-6">
                  {siteContent.servicePackages[0].coverage}
                </p>
                <p className="text-sm sm:text-base text-text-muted-dark leading-relaxed mb-6">
                  {siteContent.servicePackages[0].description}
                </p>
                <div className="p-4 rounded-xl bg-royal-indigo border border-border-dark w-full mb-8">
                  <span className="text-xs font-bold text-marigold uppercase tracking-wider block mb-1">
                    Ideal Celebration:
                  </span>
                  <p className="text-xs sm:text-sm text-warm-ivory">
                    {siteContent.servicePackages[0].idealFor}
                  </p>
                </div>
                <Button href="/contact" variant="marigold" size="lg">
                  Request Custom Shahi Proposal
                </Button>
              </div>

              <div className="lg:col-span-6 bg-royal-indigo p-6 sm:p-8 rounded-card border border-border-dark">
                <h3 className="font-serif text-xl font-bold text-warm-ivory mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-marigold" />
                  <span>Comprehensive Inclusions &amp; Deliverables</span>
                </h3>
                <ul className="space-y-3.5 text-xs sm:text-sm text-text-muted-dark">
                  {siteContent.servicePackages[0].deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-marigold shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Collection 2 & 3: Two Balanced Distinct Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Parampara Classic */}
            <div className="p-8 sm:p-10 rounded-card bg-ivory-surface border border-sindoor-red/30 shadow-card flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-sindoor-red bg-sindoor-red/10 border border-sindoor-red/20 px-3 py-1 rounded-full inline-block mb-4">
                  {siteContent.servicePackages[1].badge}
                </span>
                <h2 className="font-serif text-3xl font-bold text-royal-indigo mb-2">
                  {siteContent.servicePackages[1].title}
                </h2>
                <p className="text-xs text-sindoor-red font-semibold uppercase tracking-wider mb-4">
                  {siteContent.servicePackages[1].coverage}
                </p>
                <p className="text-sm text-text-muted leading-relaxed mb-6">
                  {siteContent.servicePackages[1].description}
                </p>

                <div className="p-6 rounded-xl bg-warm-ivory border border-border-subtle mb-6">
                  <h4 className="font-serif text-base font-bold text-royal-indigo mb-3">
                    Core Inclusions:
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-text-muted">
                    {siteContent.servicePackages[1].deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-sindoor-red shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Button href="/contact" variant="primary">
                Inquire For Parampara Dates
              </Button>
            </div>

            {/* Utsav Intimate */}
            <div className="p-8 sm:p-10 rounded-card bg-ivory-surface border border-peacock-teal/30 shadow-card flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-peacock-teal bg-peacock-teal/10 border border-peacock-teal/20 px-3 py-1 rounded-full inline-block mb-4">
                  {siteContent.servicePackages[2].badge}
                </span>
                <h2 className="font-serif text-3xl font-bold text-royal-indigo mb-2">
                  {siteContent.servicePackages[2].title}
                </h2>
                <p className="text-xs text-peacock-teal font-semibold uppercase tracking-wider mb-4">
                  {siteContent.servicePackages[2].coverage}
                </p>
                <p className="text-sm text-text-muted leading-relaxed mb-6">
                  {siteContent.servicePackages[2].description}
                </p>

                <div className="p-6 rounded-xl bg-warm-ivory border border-border-subtle mb-6">
                  <h4 className="font-serif text-base font-bold text-royal-indigo mb-3">
                    Core Inclusions:
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-text-muted">
                    {siteContent.servicePackages[2].deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-peacock-teal shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Button href="/contact" variant="secondary">
                Inquire For Utsav Pheras
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Artisanal Additions & Heirloom Products */}
      <section className="section-padding bg-ivory-surface border-y border-border-subtle">
        <div className="site-container">
          <SectionHeader
            eyebrow="Heirloom Artifacts"
            title="Artisanal Additions &amp; Custom Curation"
            description="Elevate your wedding collection with hand-bound Italian leather albums, parent duplicate volumes, and pre-wedding destination sessions."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-card bg-warm-ivory border border-border-subtle flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-royal-indigo text-warm-ivory flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-royal-indigo mb-2">
                  Italian Flush-Mount Albums
                </h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-4">
                  Handcrafted with genuine top-grain Italian leather, silk covers, and thick archival museum paper. Lay-flat panoramic binding allows seamless double-page spreads.
                </p>
              </div>
              <span className="text-xs text-sindoor-red font-bold">
                Custom Foil Engraving Included
              </span>
            </div>

            <div className="p-6 rounded-card bg-warm-ivory border border-border-subtle flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-peacock-teal text-white flex items-center justify-center mb-4">
                  <Camera className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-royal-indigo mb-2">
                  Destination Pre-Wedding Session
                </h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-4">
                  A relaxed 1-to-2 day intimate portraiture retreat in Rajasthan palaces, Himachal hills, or your family ancestral groves without wedding-day chaos.
                </p>
              </div>
              <span className="text-xs text-peacock-teal font-bold">
                Styling &amp; Wardrobe Consultation
              </span>
            </div>

            <div className="p-6 rounded-card bg-warm-ivory border border-border-subtle flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sindoor-red text-white flex items-center justify-center mb-4">
                  <Film className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-royal-indigo mb-2">
                  Private Cloud Live Streaming
                </h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-4">
                  Multi-camera 1080p private broadcast for elderly grandparents or overseas relatives unable to travel to Meerut or destination venues.
                </p>
              </div>
              <span className="text-xs text-sindoor-red font-bold">
                Encrypted &amp; Ad-Free Broadcast
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 bg-royal-indigo-dark text-warm-ivory border-t border-border-dark text-center">
        <div className="site-container max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            Need A Custom Tailored Itinerary?
          </h2>
          <p className="text-text-muted-dark text-sm sm:text-base mb-8">
            Every wedding timeline is unique. Share your muhurat and event flow with us, and we will formulate a personalized proposal within 24 hours.
          </p>
          <Button href="/contact" variant="marigold" size="lg">
            Request Bespoke Wedding Itinerary
          </Button>
        </div>
      </section>
    </div>
  );
}

