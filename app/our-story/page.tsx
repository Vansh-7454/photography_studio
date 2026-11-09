import React from "react";
import type { Metadata } from "next";
import { siteContent } from "@/content/site";
import { SmartImage } from "@/components/ui/SmartImage";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Camera, Heart, Eye, Sparkles, MapPin, Film, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Story — Behind Every Frame, There's A Feeling",
  description: "Learn about Atelier Rangrez in Civil Lines, Meerut. A creative wedding photography and film studio founded on authentic emotions and cinematic craft.",
};

export default function OurStoryPage() {
  return (
    <div className="flex flex-col">
      {/* Compact Page Header */}
      <section className="bg-ivory-card py-12 md:py-16 border-b border-border-subtle">
        <div className="site-container max-w-3xl text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-terracotta mb-2 block">
            Atelier Story
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-deep-aubergine mb-3 leading-tight">
            Behind Every Frame, There&apos;s A Feeling.
          </h1>
          <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-xl mx-auto">
            Based in Civil Lines, Meerut. Documenting genuine emotions, sacred Vedic rites, and spontaneous family joy without artificial staging.
          </p>
        </div>
      </section>

      {/* Behind The Lens Gallery & Narrative Split */}
      <section className="section-padding bg-warm-ivory">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 6 Columns: Photography Studio In Action */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="rounded-card overflow-hidden shadow-card border border-border-subtle">
                <SmartImage
                  src="/images/story/photographer-at-work.jpg"
                  alt="Wedding photographer composing portrait during ceremony"
                  aspectRatio="4/5"
                  rounded="card"
                />
              </div>
              <div className="space-y-4 pt-4">
                <div className="rounded-card overflow-hidden shadow-card border border-border-subtle">
                  <SmartImage
                    src="/images/story/studio-craft.jpg"
                    alt="Handcrafting heirloom photo albums in studio"
                    aspectRatio="1/1"
                    rounded="card"
                  />
                </div>
                <div className="rounded-card overflow-hidden shadow-card border border-border-subtle">
                  <SmartImage
                    src="/images/story/camera-gear.jpg"
                    alt="Professional cinema mirrorless equipment and fast prime lenses"
                    aspectRatio="1/1"
                    rounded="card"
                  />
                </div>
              </div>
            </div>

            {/* Right 6 Columns: Concise Story Copy */}
            <div className="lg:col-span-6 flex flex-col items-start lg:pl-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-terracotta mb-2">
                Why We Shoot Weddings
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-deep-aubergine mb-4 leading-tight">
                Authentic, Unscripted &amp; Patient.
              </h2>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                Growing up around grand celebrations in Western Uttar Pradesh and Delhi NCR, we saw how many photographers disrupted the day—barking orders at elderly family members, blinding priests with flash units, and turning solemn vows into rehearsed film sets.
              </p>
              <p className="text-sm text-text-muted leading-relaxed mb-6">
                We founded Rangrez to offer the exact opposite: an observant, respectful documentary eye. We let the tears flow naturally during bidaai, let the cousins dance unchoreographed during the baraat, and capture the quiet glance between a couple during the pheras.
              </p>

              {/* Studio Camera Kit & Approach */}
              <div className="p-4 rounded-card bg-white border border-border-subtle w-full mb-6 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-deep-aubergine block">
                  Studio Equipment &amp; Craft Standard
                </span>
                <p className="text-xs text-text-muted leading-relaxed">
                  Dual Sony FX3 4K 10-bit cinema rigs, prime lenses (24mm, 50mm, 85mm f/1.4), multi-channel Sennheiser wireless mics for Vedic shlokas, and hand-bound Italian archival albums.
                </p>
              </div>

              <Button href="/portfolio" variant="primary">
                View Our Portfolio Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Studio Craft */}
      <section className="section-padding bg-ivory-card border-y border-border-subtle">
        <div className="site-container">
          <SectionHeader
            eyebrow="Our Craft"
            title="The 4 Principles Guiding Every Shoot"
            description="How we approach people, lighting, sound, and heirloom albums."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-card bg-white border border-border-subtle shadow-subtle">
              <div className="w-10 h-10 rounded-input bg-terracotta/10 border border-terracotta/20 flex items-center justify-center mb-3">
                <Heart className="w-5 h-5 text-terracotta" />
              </div>
              <h3 className="font-serif text-lg font-bold text-deep-aubergine mb-1">
                Reverence For Rituals
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Zero interference during kanyadaan, sindoor daan, and pheras. We know the ceremonies intimately.
              </p>
            </div>

            <div className="p-5 rounded-card bg-white border border-border-subtle shadow-subtle">
              <div className="w-10 h-10 rounded-input bg-muted-marigold/10 border border-muted-marigold/20 flex items-center justify-center mb-3">
                <Eye className="w-5 h-5 text-muted-marigold" />
              </div>
              <h3 className="font-serif text-lg font-bold text-deep-aubergine mb-1">
                Natural Color Science
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Preserving authentic Indian skin tones and rich zardozi textiles without washed-out filters.
              </p>
            </div>

            <div className="p-5 rounded-card bg-white border border-border-subtle shadow-subtle">
              <div className="w-10 h-10 rounded-input bg-soft-sage/10 border border-soft-sage/20 flex items-center justify-center mb-3">
                <Sparkles className="w-5 h-5 text-soft-sage" />
              </div>
              <h3 className="font-serif text-lg font-bold text-deep-aubergine mb-1">
                Acoustic Sound Design
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Recording real laughter, Sanskrit mantras, and Shehnai directly on location with studio microphones.
              </p>
            </div>

            <div className="p-5 rounded-card bg-white border border-border-subtle shadow-subtle">
              <div className="w-10 h-10 rounded-input bg-deep-aubergine/10 border border-deep-aubergine/20 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5 text-deep-aubergine" />
              </div>
              <h3 className="font-serif text-lg font-bold text-deep-aubergine mb-1">
                Archival Heirlooms
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Italian lay-flat fine-art albums hand-bound in leather or silk, crafted to last for generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meerut Studio Location & Meeting */}
      <section className="section-padding bg-warm-ivory">
        <div className="site-container max-w-3xl text-center">
          <SectionHeader
            eyebrow="Our Studio"
            title="Civil Lines Atelier, Meerut"
            description="Our creative workspace where we curate albums, grade films, and meet couples over coffee."
            align="center"
          />

          <div className="p-6 sm:p-8 rounded-card bg-white border border-border-subtle shadow-card text-left flex flex-col sm:flex-row items-center gap-6">
            <div className="w-full sm:w-1/3 rounded-input overflow-hidden aspect-square relative shrink-0">
              <SmartImage
                src="/images/story/studio-craft.jpg"
                alt="Studio print inspection table"
                aspectRatio="1/1"
                rounded="card"
              />
            </div>
            <div className="flex-1">
              <span className="text-[10px] uppercase font-bold text-terracotta tracking-wider block mb-1">
                Consultations By Appointment
              </span>
              <h3 className="font-serif text-2xl font-bold text-deep-aubergine mb-2">
                Visit Us In Meerut
              </h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-4">
                We invite you to touch sample leather albums, see 4K cinema screenings in person, and discuss your wedding timeline.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-deep-aubergine mb-4">
                <MapPin className="w-3.5 h-3.5 text-terracotta" />
                <span>Civil Lines, Near Circuit House, Meerut</span>
              </div>
              <Button href="/contact" variant="primary" size="sm">
                Schedule Studio Visit
              </Button>
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
            Tell us about your wedding date, venue, and vision. We&apos;d love to be there.
          </p>
          <Button href="/contact" variant="marigold">
            Check Studio Availability
          </Button>
        </div>
      </section>
    </div>
  );
}
