import React from "react";
import type { Metadata } from "next";
import { siteContent } from "@/content/site";
import { SmartImage } from "@/components/ui/SmartImage";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Check, Sparkles, BookOpen, Camera, Film, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Packages — Every Celebration. Every Emotion.",
  description: "Transparent wedding photography and cinematic film collections by Atelier Rangrez. Tailored for destination palace weddings, traditional celebrations, and intimate pheras.",
};

export default function ServicesPackagesPage() {
  return (
    <div className="flex flex-col">
      {/* Compact Page Header */}
      <section className="bg-ivory-card py-12 md:py-16 border-b border-border-subtle">
        <div className="site-container max-w-3xl text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-terracotta mb-2 block">
            Coverage Collections
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-deep-aubergine mb-3 leading-tight">
            Every Celebration. Every Emotion.
          </h1>
          <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-xl mx-auto">
            Honest, transparent coverage frameworks. Fully customizable to honor your family&apos;s ceremonies, locations, and personal vision.
          </p>
        </div>
      </section>

      {/* Main Packages (Distinct Layouts, Not Generic Boxy Cards) */}
      <section className="section-padding bg-warm-ivory">
        <div className="site-container space-y-12">
          {/* Collection 1: Shahi Collection (Flagship Dark Hero Band) */}
          <div className="p-8 sm:p-10 rounded-card bg-aubergine-dark text-warm-ivory border border-border-dark shadow-raised relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-6 flex flex-col items-start">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-marigold bg-muted-marigold/10 border border-muted-marigold/20 px-2.5 py-0.5 rounded-full mb-3">
                  Flagship Destination Experience
                </span>
                <span className="text-sm font-bold text-muted-marigold tracking-wider block mb-1">
                  {siteContent.servicePackages[0].investment}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-warm-ivory mb-2">
                  {siteContent.servicePackages[0].title}
                </h2>
                <p className="text-xs text-text-muted-dark font-medium uppercase tracking-wider mb-4">
                  {siteContent.servicePackages[0].coverage}
                </p>
                <p className="text-xs sm:text-sm text-text-muted-dark leading-relaxed mb-6">
                  {siteContent.servicePackages[0].description}
                </p>
                <Button href="/contact" variant="marigold">
                  Request Custom Shahi Proposal
                </Button>
              </div>

              <div className="lg:col-span-6 bg-deep-aubergine p-6 rounded-card border border-border-dark">
                <h3 className="font-serif text-lg font-bold text-warm-ivory mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-muted-marigold" />
                  <span>Comprehensive Inclusions:</span>
                </h3>
                <ul className="space-y-2.5 text-xs text-text-muted-dark">
                  {siteContent.servicePackages[0].deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="w-3.5 h-3.5 text-muted-marigold shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Collection 2 & 3: Two Distinct Asymmetric Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Parampara Collection */}
            <div className="p-6 sm:p-8 rounded-card bg-white border border-border-subtle shadow-card flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-terracotta tracking-wider uppercase block mb-1">
                  {siteContent.servicePackages[1].investment}
                </span>
                <h3 className="font-serif text-2xl font-bold text-deep-aubergine mb-1">
                  {siteContent.servicePackages[1].title}
                </h3>
                <p className="text-xs text-text-muted font-medium mb-3">
                  {siteContent.servicePackages[1].coverage}
                </p>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-5">
                  {siteContent.servicePackages[1].description}
                </p>

                <div className="p-4 rounded-input bg-warm-ivory border border-border-subtle mb-6">
                  <h4 className="font-serif text-sm font-bold text-deep-aubergine mb-2.5">
                    Core Inclusions:
                  </h4>
                  <ul className="space-y-2 text-xs text-text-muted">
                    {siteContent.servicePackages[1].deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
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

            {/* Utsav Collection */}
            <div className="p-6 sm:p-8 rounded-card bg-white border border-border-subtle shadow-card flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-soft-sage tracking-wider uppercase block mb-1">
                  {siteContent.servicePackages[2].investment}
                </span>
                <h3 className="font-serif text-2xl font-bold text-deep-aubergine mb-1">
                  {siteContent.servicePackages[2].title}
                </h3>
                <p className="text-xs text-text-muted font-medium mb-3">
                  {siteContent.servicePackages[2].coverage}
                </p>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-5">
                  {siteContent.servicePackages[2].description}
                </p>

                <div className="p-4 rounded-input bg-warm-ivory border border-border-subtle mb-6">
                  <h4 className="font-serif text-sm font-bold text-deep-aubergine mb-2.5">
                    Core Inclusions:
                  </h4>
                  <ul className="space-y-2 text-xs text-text-muted">
                    {siteContent.servicePackages[2].deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-soft-sage shrink-0 mt-0.5" />
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

      {/* Artisanal Additions */}
      <section className="section-padding bg-ivory-card border-y border-border-subtle">
        <div className="site-container">
          <SectionHeader
            eyebrow="Heirloom Artifacts"
            title="Albums &amp; Custom Additions"
            description="Preserve your frames on museum-grade Italian cotton paper and handcrafted leather covers."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-card bg-white border border-border-subtle shadow-subtle flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-input bg-deep-aubergine text-warm-ivory flex items-center justify-center mb-3">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-deep-aubergine mb-1">
                  Italian Flush-Mount Albums
                </h3>
                <p className="text-xs text-text-muted leading-relaxed mb-3">
                  Lay-flat panoramic spreads on thick cotton rag paper. Handcrafted leather or Banarasi silk cover with custom foil debossing.
                </p>
              </div>
              <span className="text-[11px] text-terracotta font-semibold">
                Available in 12x12 and 14x11 sizes
              </span>
            </div>

            <div className="p-5 rounded-card bg-white border border-border-subtle shadow-subtle flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-input bg-soft-sage text-white flex items-center justify-center mb-3">
                  <Camera className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-deep-aubergine mb-1">
                  Pre-Wedding Portrait Session
                </h3>
                <p className="text-xs text-text-muted leading-relaxed mb-3">
                  A relaxed portraiture afternoon in Rajasthan palaces, heritage groves in Meerut, or hills without wedding-day hurry.
                </p>
              </div>
              <span className="text-[11px] text-soft-sage font-semibold">
                Includes wardrobe &amp; lighting planning
              </span>
            </div>

            <div className="p-5 rounded-card bg-white border border-border-subtle shadow-subtle flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-input bg-terracotta text-white flex items-center justify-center mb-3">
                  <Film className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-deep-aubergine mb-1">
                  Private Cloud Broadcast
                </h3>
                <p className="text-xs text-text-muted leading-relaxed mb-3">
                  Multi-camera 1080p private broadcast for grandparents or relatives abroad who cannot travel to the wedding in person.
                </p>
              </div>
              <span className="text-[11px] text-terracotta font-semibold">
                Private, password-protected stream
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-14 bg-aubergine-dark text-warm-ivory border-t border-border-dark text-center">
        <div className="site-container max-w-xl mx-auto">
          <h2 className="font-serif text-3xl font-semibold mb-3">
            Let&apos;s Make Your Story.
          </h2>
          <p className="text-text-muted-dark text-xs sm:text-sm mb-6">
            Share your dates, venues, and expected ceremonies. We will craft a tailored proposal within 24 hours.
          </p>
          <Button href="/contact" variant="marigold">
            Request Custom Proposal
          </Button>
        </div>
      </section>
    </div>
  );
}
