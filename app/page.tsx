import React from "react";
import Link from "next/link";
import { siteContent } from "@/content/site";
import { SmartImage } from "@/components/ui/SmartImage";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import {
  Camera,
  Film,
  ArrowRight,
  Play,
  Check,
  MapPin,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION (Photography-First Editorial Split) */}
      <section className="relative overflow-hidden pt-6 md:pt-12 pb-14 md:pb-20 border-b border-border-subtle bg-warm-ivory">
        <div className="absolute inset-0 studio-subtle-pattern pointer-events-none" />

        <div className="site-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left 6 Columns: Concise Editorial Copy */}
            <div className="lg:col-span-6 flex flex-col items-start">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terracotta/10 border border-terracotta/20 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-terracotta">
                  {siteContent.hero.eyebrow}
                </span>
              </div>

              {/* Punchy Hero Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[66px] font-semibold leading-[1.08] text-deep-aubergine mb-4 tracking-tight">
                {siteContent.hero.headline}
              </h1>

              {/* Short Subtitle */}
              <p className="text-base sm:text-lg lg:text-xl text-text-muted leading-snug mb-8 max-w-lg font-serif italic">
                {siteContent.hero.subtitle}
              </p>

              {/* Dual Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8">
                <Button href="/contact" variant="primary" size="lg">
                  {siteContent.hero.ctaPrimary}
                </Button>
                <Button href="/portfolio" variant="outline" size="lg">
                  {siteContent.hero.ctaSecondary}
                </Button>
              </div>

              {/* Quick Studio Markers */}
              <div className="pt-4 border-t border-border-subtle w-full grid grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="font-serif font-bold text-deep-aubergine text-sm block">18 Max</span>
                  <span className="text-text-muted text-[11px]">Weddings / Year</span>
                </div>
                <div>
                  <span className="font-serif font-bold text-deep-aubergine text-sm block">Sony Cinema</span>
                  <span className="text-text-muted text-[11px]">4K 10-Bit Sound</span>
                </div>
                <div>
                  <span className="font-serif font-bold text-deep-aubergine text-sm block">Civil Lines</span>
                  <span className="text-text-muted text-[11px]">Meerut Studio</span>
                </div>
              </div>
            </div>

            {/* Right 6 Columns: Large High-Res Royal Wedding Portrait */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-hero overflow-hidden shadow-raised border border-border-subtle">
                <SmartImage
                  src={siteContent.hero.image.src}
                  alt={siteContent.hero.image.alt}
                  aspectRatio="4/5"
                  priority={true}
                  rounded="hero"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Refined Studio Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-card bg-aubergine-dark/90 backdrop-blur-md border border-border-dark text-warm-ivory flex items-center justify-between">
                  <div>
                    <span className="text-[9.5px] uppercase font-bold tracking-widest text-muted-marigold block">
                      Featured Royal Monograph
                    </span>
                    <span className="font-serif text-sm font-semibold text-warm-ivory">
                      Ananya &amp; Vikram — Udaipur Palace
                    </span>
                  </div>
                  <Link
                    href="/portfolio"
                    className="text-xs text-muted-marigold hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>View</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PHOTOGRAPHY STORY MOSAIC (Asymmetric, Visual-Led) */}
      <section className="section-padding bg-ivory-card border-b border-border-subtle">
        <div className="site-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10">
            <SectionHeader
              eyebrow="Recent Celebrations"
              title="Love, Through Our Lens."
              description="Real vows, unhurried candids, and family emotions from Meerut to Rajasthan."
              className="mb-0"
            />
            <Link
              href="/portfolio"
              className="mt-3 md:mt-0 inline-flex items-center gap-1.5 text-xs font-bold text-terracotta hover:underline"
            >
              <span>Explore All Galleries</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteContent.featuredStories.map((story) => (
              <article
                key={story.id}
                className="group flex flex-col bg-white rounded-card overflow-hidden border border-border-subtle shadow-card hover:shadow-raised transition-all"
              >
                <div className="relative overflow-hidden">
                  <SmartImage
                    src={story.image.src}
                    alt={story.image.alt}
                    aspectRatio="4/5"
                    rounded="none"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-aubergine-dark/85 text-warm-ivory text-[9.5px] font-bold uppercase tracking-wider backdrop-blur-sm">
                    {story.tag}
                  </span>
                </div>

                <div className="p-5 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-bold text-terracotta uppercase tracking-wider mb-0.5">
                      {story.location}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-deep-aubergine group-hover:text-terracotta transition-colors">
                      {story.couple}
                    </h3>
                  </div>
                  <Link
                    href="/portfolio"
                    className="w-9 h-9 rounded-full bg-warm-ivory text-deep-aubergine flex items-center justify-center group-hover:bg-terracotta group-hover:text-white transition-colors"
                    aria-label={`View gallery for ${story.couple}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BEHIND THE LENS / STUDIO REALITY (Authentic Studio Feel) */}
      <section className="section-padding bg-warm-ivory border-b border-border-subtle">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 6 Columns: Studio Photography Image Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="rounded-card overflow-hidden shadow-card border border-border-subtle">
                <SmartImage
                  src="/images/story/photographer-at-work.jpg"
                  alt="Professional wedding photographer composing candid shot with mirrorless camera"
                  aspectRatio="4/5"
                  rounded="card"
                />
              </div>
              <div className="space-y-4 pt-6">
                <div className="rounded-card overflow-hidden shadow-card border border-border-subtle">
                  <SmartImage
                    src="/images/story/camera-gear.jpg"
                    alt="Professional Sony Cinema mirrorless cameras and fast prime lenses"
                    aspectRatio="1/1"
                    rounded="card"
                  />
                </div>
                <div className="p-4 rounded-card bg-white border border-border-subtle">
                  <span className="text-[10px] font-bold text-terracotta uppercase tracking-wider block mb-1">
                    Authentic Gear
                  </span>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Sony FX3 &amp; A7R V Cinema systems with fast prime glass. Natural low-light mastery.
                  </p>
                </div>
              </div>
            </div>

            {/* Right 6 Columns: Studio Philosophy Copy */}
            <div className="lg:col-span-6 flex flex-col items-start lg:pl-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-soft-sage mb-2.5 px-3 py-0.5 rounded-full bg-soft-sage/10 border border-soft-sage/20">
                Behind The Frames
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-deep-aubergine mb-4 leading-tight">
                Behind Every Frame, There&apos;s A Feeling.
              </h2>
              <p className="text-sm sm:text-base text-text-muted leading-relaxed mb-4">
                Weddings are unscripted chaos and quiet magic. We don&apos;t shout instructions or manufacture fake poses. We quietly blend into your celebrations, waiting for the authentic glances, unannounced laughter, and tearful hugs that truly matter.
              </p>
              <div className="grid grid-cols-2 gap-3 w-full mb-6">
                <div className="p-3.5 rounded-input bg-white border border-border-subtle">
                  <strong className="text-xs font-bold text-deep-aubergine block mb-0.5">Non-Intrusive</strong>
                  <span className="text-[11px] text-text-muted">Zero interruptions during sacred Vedic rites.</span>
                </div>
                <div className="p-3.5 rounded-input bg-white border border-border-subtle">
                  <strong className="text-xs font-bold text-deep-aubergine block mb-0.5">Natural Skin &amp; Color</strong>
                  <span className="text-[11px] text-text-muted">True Indian zardozi tones without garish filters.</span>
                </div>
              </div>
              <Button href="/our-story" variant="secondary">
                Learn About Our Studio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CINEMATIC WEDDING FILMS (Dark Band Spotlight) */}
      <section className="section-padding bg-aubergine-dark text-warm-ivory relative overflow-hidden">
        <div className="absolute inset-0 studio-dark-pattern pointer-events-none" />

        <div className="site-container relative z-10">
          <SectionHeader
            eyebrow="Cinematic Films"
            title="Some Moments Deserve to Move."
            description="Shot with cinema cameras, live multi-track audio, and authentic acoustic scoring."
            align="center"
            theme="dark"
          />

          <div className="max-w-4xl mx-auto rounded-hero overflow-hidden border border-border-dark bg-deep-aubergine shadow-dark-card mb-8">
            <div className="relative aspect-video group">
              <SmartImage
                src="/images/films/film-udaipur.jpg"
                alt="Cinematic still from royal wedding film in Udaipur"
                aspectRatio="16/9"
                rounded="none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-aubergine-dark/90 via-aubergine-dark/30 to-transparent flex flex-col justify-end p-6 sm:p-8">
                <span className="text-[10px] uppercase tracking-widest text-muted-marigold font-bold block mb-1">
                  12 Min 4K Master Grade
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-warm-ivory mb-2">
                  Kesariya Phool — Udaipur Palace
                </h3>
                <p className="text-xs sm:text-sm text-text-muted-dark max-w-lg mb-4 line-clamp-2">
                  Live acoustic Shehnai recorded on Lake Pichola, quiet dawn letters, and sunset pheras.
                </p>
                <div>
                  <Button href="/wedding-films" variant="marigold" size="sm">
                    <Play className="w-3.5 h-3.5 mr-1.5 fill-current" />
                    Watch Film Details
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button href="/wedding-films" variant="outline" className="border-border-dark text-warm-ivory hover:bg-deep-aubergine">
              View All 4 Featured Wedding Cinema Reels
            </Button>
          </div>
        </div>
      </section>

      {/* 5. SERVICES & PACKAGES (Concise Framework) */}
      <section className="section-padding bg-warm-ivory">
        <div className="site-container">
          <SectionHeader
            eyebrow="Coverage Collections"
            title="Every Celebration. Every Emotion."
            description="Clear, transparent frameworks designed for grand celebrations, traditional weddings, and intimate pheras."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteContent.servicePackages.map((pkg) => (
              <div
                key={pkg.id}
                className="p-6 rounded-card bg-white border border-border-subtle shadow-card flex flex-col justify-between hover:border-terracotta/40 transition-colors"
              >
                <div>
                  <span className="text-xs font-bold text-terracotta tracking-wider uppercase block mb-1">
                    {pkg.investment}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-deep-aubergine mb-1">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-text-muted mb-4 font-medium">
                    {pkg.coverage}
                  </p>
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-6">
                    {pkg.description}
                  </p>

                  <ul className="space-y-2 mb-6 pt-4 border-t border-border-subtle text-xs text-text-muted">
                    {pkg.deliverables.slice(0, 4).map((d) => (
                      <li key={d} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-soft-sage shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button href="/services-packages" variant="outline" className="w-full">
                  View Full Package Inclusions
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ PREVIEW */}
      <section className="section-padding bg-ivory-card border-t border-border-subtle">
        <div className="site-container">
          <SectionHeader
            eyebrow="Common Questions"
            title="Answers For Your Planning"
            description="Clear details on booking timelines, travel, and our candid approach."
            align="center"
          />

          <FAQAccordion items={siteContent.faqs} />

          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="text-xs sm:text-sm font-bold text-terracotta hover:underline inline-flex items-center gap-1"
            >
              <span>Have a specific wedding question? Talk with our team</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. ROYAL CTA BAND */}
      <section className="py-16 bg-aubergine-dark text-warm-ivory border-t border-border-dark text-center relative overflow-hidden">
        <div className="site-container max-w-2xl mx-auto relative z-10">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-muted-marigold mb-3 block">
            Limited 18 Commissions Per Season
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 leading-tight">
            Let&apos;s Make Your Story.
          </h2>
          <p className="text-sm sm:text-base text-text-muted-dark leading-relaxed mb-6 max-w-md mx-auto">
            Reserve our master photography and cinema artists for your upcoming wedding dates.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button href="/contact" variant="primary" size="lg">
              Check Date Availability
            </Button>
            <Button
              href={siteContent.contact.whatsappHref}
              variant="marigold"
              size="lg"
              external
            >
              WhatsApp Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
