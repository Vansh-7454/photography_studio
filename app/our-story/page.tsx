import React from "react";
import type { Metadata } from "next";
import { siteContent } from "@/content/site";
import { SmartImage } from "@/components/ui/SmartImage";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Sparkles, Heart, Eye, ShieldCheck, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Story & Documentary Philosophy",
  description: "Learn how Atelier Rangrez was founded in Meerut with an unwavering dedication to documenting sacred Indian matrimony with authentic emotion and timeless fine art.",
};

export default function OurStoryPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-ivory-surface py-16 md:py-20 border-b border-border-subtle">
        <div className="site-container max-w-4xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-sindoor-red mb-3 block">
            The Atelier Rangrez Chronicle
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-royal-indigo mb-6 leading-tight">
            Rooted in Tradition. Driven by Genuine Emotion.
          </h1>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
            From the historic bylanes of Meerut to majestic palace courtyards across Rajasthan, our studio was born out of a profound reverence for the timeless poetry of Indian weddings.
          </p>
        </div>
      </section>

      {/* Origin Story Split */}
      <section className="section-padding bg-warm-ivory">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 6 Cols: Photo */}
            <div className="lg:col-span-6">
              <SmartImage
                src="https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1200&q=80"
                alt="Documentary wedding photographer capturing emotional moments at Indian wedding"
                aspectRatio="4/5"
                rounded="hero"
              />
              <p className="text-xs text-text-muted italic text-center mt-3">
                Capturing unseen glances and sacred fire rituals without artificial posing.
              </p>
            </div>

            {/* Right 6 Cols: Narrative Copy */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-peacock-teal mb-3">
                How It Began
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-royal-indigo mb-6 leading-tight">
                Why We Chose Weddings as Our Life&apos;s Work.
              </h2>
              <p className="text-base text-text-muted leading-relaxed mb-4">
                Growing up in Uttar Pradesh, weddings were never mere weekend events—they were living, breathing symphonies of family devotion. The arrival of the dhol, the trembling hands of grandparents blessing the bride, the fragrance of sandalwood and dried rose petals during the Vedic chants.
              </p>
              <p className="text-base text-text-muted leading-relaxed mb-6">
                Yet, we watched too many families endure stressful photoshoots where photographers shouted orders, blinded guests with glaring flashes, and turned sacred rituals into hurried film sets. We created Rangrez to offer the exact opposite: an unobtrusive, deeply respectful documentary gaze that honors every tear and smile.
              </p>

              <div className="p-6 rounded-card bg-ivory-surface border border-border-subtle w-full mb-8">
                <h3 className="font-serif text-xl font-bold text-royal-indigo mb-2">
                  Our Uncompromising Rule:
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  We never interrupt a Vedic ritual, we never tell a father how to hug his daughter, and we never ask a couple to hold a frozen smile. Real love needs no choreography.
                </p>
              </div>

              <Button href="/portfolio" variant="primary">
                View Our Portfolio Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Pillars of Rangrez Craftsmanship */}
      <section className="section-padding bg-ivory-surface border-y border-border-subtle">
        <div className="site-container">
          <SectionHeader
            eyebrow="Core Pillars"
            title="The Principles That Guide Every Frame"
            description="How we approach light, sound, tradition, and archival preservation."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-card bg-warm-ivory border border-border-subtle flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-sindoor-red/10 border border-sindoor-red/20 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-sindoor-red" />
              </div>
              <h3 className="font-serif text-xl font-bold text-royal-indigo mb-2">
                Reverence for Rituals
              </h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Understanding the Vedic significance of the kanyadaan, sindoor daan, and saptapadi allows us to anticipate key moments before they happen.
              </p>
            </div>

            <div className="p-6 rounded-card bg-warm-ivory border border-border-subtle flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-marigold/10 border border-marigold/20 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-marigold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-royal-indigo mb-2">
                Natural Color Science
              </h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                We preserve authentic Indian skin tones and vibrant zardozi pigments without washed-out Western filters or garish saturation.
              </p>
            </div>

            <div className="p-6 rounded-card bg-warm-ivory border border-border-subtle flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-peacock-teal/10 border border-peacock-teal/20 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-peacock-teal" />
              </div>
              <h3 className="font-serif text-xl font-bold text-royal-indigo mb-2">
                Acoustic Soundscapes
              </h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Our films weave original live recordings of family toasts, bansuri notes, and temple shlokas to bring memories alive through sound.
              </p>
            </div>

            <div className="p-6 rounded-card bg-warm-ivory border border-border-subtle flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-royal-indigo/10 border border-royal-indigo/20 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-royal-indigo" />
              </div>
              <h3 className="font-serif text-xl font-bold text-royal-indigo mb-2">
                Generational Heirlooms
              </h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Printed strictly on archival museum cotton rag paper with lay-flat hand binding to resist humidity and aging for over 100 years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Atelier & Team Presentation */}
      <section className="section-padding bg-warm-ivory">
        <div className="site-container max-w-4xl text-center">
          <SectionHeader
            eyebrow="The Collective"
            title="The Storytellers Behind The Lens"
            description="Our handpicked team includes master documentary photographers, cinema colourists, and sound engineers based in Meerut and Delhi NCR."
            align="center"
          />

          <div className="p-8 sm:p-12 rounded-hero bg-ivory-surface border border-border-subtle shadow-card text-left">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5">
                <SmartImage
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
                  alt="Lead creative director composing wedding story"
                  aspectRatio="4/5"
                  rounded="card"
                />
              </div>
              <div className="md:col-span-7">
                <span className="text-xs font-bold uppercase tracking-widest text-sindoor-red block mb-1">
                  Creative Direction &amp; Lead Cinema
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-royal-indigo mb-3">
                  Atelier Rangrez Creative Team
                </h3>
                <p className="text-sm text-text-muted leading-relaxed mb-4">
                  Led by experienced visual artists with over a decade of Indian wedding documentation, our collective is intentionally small. We do not operate a high-volume studio mill. Every single wedding is personally shot, colour-graded, and edited by our core artists.
                </p>
                <div className="flex items-center gap-2 text-xs font-semibold text-royal-indigo mb-6">
                  <MapPin className="w-4 h-4 text-sindoor-red" />
                  <span>Civil Lines Atelier, Meerut • Available for Destination Travels</span>
                </div>
                <Button href="/contact" variant="primary">
                  Meet Us for a Studio Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 bg-royal-indigo-dark text-warm-ivory border-t border-border-dark text-center">
        <div className="site-container max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            Begin Your Wedding Chronicle
          </h2>
          <p className="text-text-muted-dark text-sm sm:text-base mb-8">
            Tell us about your wedding visions, venues, and rituals. We would be honored to preserve your legacy.
          </p>
          <Button href="/contact" variant="marigold" size="lg">
            Inquire for Your Dates
          </Button>
        </div>
      </section>
    </div>
  );
}

