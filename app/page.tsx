import React from "react";
import Link from "next/link";
import { siteContent } from "@/content/site";
import { SmartImage } from "@/components/ui/SmartImage";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import {
  Sparkles,
  Camera,
  Film,
  Award,
  BookOpen,
  Compass,
  ArrowRight,
  Heart,
  Clock,
  Play,
  CheckCircle,
} from "lucide-react";

export default function HomePage() {
  const iconMap: Record<string, React.ReactNode> = {
    Flame: <Sparkles className="w-6 h-6 text-sindoor-red" />,
    Camera: <Camera className="w-6 h-6 text-marigold" />,
    BookOpen: <BookOpen className="w-6 h-6 text-peacock-teal" />,
    Compass: <Compass className="w-6 h-6 text-sindoor-red" />,
  };

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION (Layout A - Editorial Split Grid) */}
      <section className="relative overflow-hidden pt-8 md:pt-14 pb-16 md:pb-24 border-b border-border-subtle bg-warm-ivory">
        {/* Subtle decorative background motif */}
        <div className="absolute inset-0 mandap-pattern pointer-events-none" />

        <div className="site-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left 6 Columns: Editorial Copy & Actions */}
            <div className="lg:col-span-6 flex flex-col items-start">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sindoor-red/10 border border-sindoor-red/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-sindoor-red animate-pulse" />
                <span className="text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-sindoor-red">
                  Meerut • Royal Weddings &amp; Cinema
                </span>
              </div>

              {/* Fluid H1 Heading */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-bold leading-[1.08] text-royal-indigo mb-6 tracking-tight">
                Where Sacred Indian Matrimony Becomes Timeless Cinema.
              </h1>

              {/* Supporting Editorial Paragraph */}
              <p className="text-base sm:text-lg lg:text-xl text-text-muted leading-relaxed mb-8 max-w-xl">
                Rooted in Meerut, Atelier Rangrez preserves the raw emotional heartbeat, sacred Vedic rituals, and royal splendor of Indian weddings across the subcontinent and worldwide destinations.
              </p>

              {/* Dual Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
                <Button href="/contact" variant="primary" size="lg">
                  Check Wedding Dates
                </Button>
                <Button href="/portfolio" variant="outline" size="lg">
                  Explore Wedding Stories
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-border-subtle w-full flex items-center gap-8 text-xs font-semibold text-text-muted">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-peacock-teal" />
                  <span>Unscripted Candids</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-peacock-teal" />
                  <span>4K Cinema Sound</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-peacock-teal" />
                  <span>Handcrafted Albums</span>
                </div>
              </div>
            </div>

            {/* Right 6 Columns: Featured 4:5 Royal Couple Visual */}
            <div className="lg:col-span-6 relative">
              {/* Decorative offset frame */}
              <div className="absolute -inset-3 rounded-hero border border-marigold/30 -rotate-1 hidden sm:block pointer-events-none" />
              
              <div className="relative rounded-hero overflow-hidden shadow-raised">
                <SmartImage
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80"
                  alt="Traditional Indian bride in magnificent red zardozi lehenga during palace wedding rituals"
                  aspectRatio="4/5"
                  priority={true}
                  rounded="hero"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Floating Editorial Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-royal-indigo-dark/90 backdrop-blur-md border border-border-dark text-warm-ivory flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-marigold block">
                      Featured Monograph
                    </span>
                    <span className="font-serif text-sm sm:text-base font-bold text-warm-ivory">
                      Ananya &amp; Vikram — Jagmandir Palace, Udaipur
                    </span>
                  </div>
                  <Link
                    href="/portfolio"
                    className="text-xs text-marigold hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>View Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SACRED RITUALS TRUST STRIP */}
      <section className="bg-ivory-surface py-10 border-b border-border-subtle">
        <div className="site-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteContent.trustStrip.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-4 rounded-card hover:bg-warm-ivory/60 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-warm-ivory flex items-center justify-center border border-border-subtle shrink-0">
                  {iconMap[item.iconName]}
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-royal-indigo mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EDITORIAL BRAND INTRODUCTION & PHILOSOPHY (The Rangrez Ethos) */}
      <section className="section-padding bg-warm-ivory relative overflow-hidden">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 5 Columns: Visual Monograph */}
            <div className="lg:col-span-5 relative">
              <SmartImage
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80"
                alt="Intimate Indian wedding couple holding hands during sacred agni pheras"
                aspectRatio="4/5"
                rounded="hero"
              />
              {/* Handwritten style quote caption */}
              <div className="mt-4 text-center">
                <span className="font-serif italic text-base text-sindoor-red font-medium">
                  &ldquo;A wedding is not a photo shoot; it is a sacred pilgrimage of love.&rdquo;
                </span>
              </div>
            </div>

            {/* Right 7 Columns: Editorial Story */}
            <div className="lg:col-span-7 flex flex-col items-start lg:pl-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-sindoor-red mb-3 px-3 py-1 rounded-full bg-sindoor-red/10 border border-sindoor-red/20">
                The Rangrez Ethos
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-royal-indigo leading-[1.15] mb-6">
                Har Pal Mein Ek Kahaani. Authentic, Unhurried &amp; Sacred.
              </h2>
              <p className="text-base sm:text-lg text-text-muted leading-relaxed mb-5">
                Indian weddings are a tempest of sensory joy—the intoxicating aroma of fresh genda phool, the thunderous rhythm of dholaks echoing in the night, the quiet tear in a mother&apos;s eye as the bidaai doli departs.
              </p>
              <p className="text-base sm:text-lg text-text-muted leading-relaxed mb-8">
                At Rangrez, we reject artificial poses and heavy directing. Our artists blend quietly into the background with long prime lenses, recording authentic moments that unfold naturally so that decades later, your children can touch the heartbeat of your wedding day.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
                <div className="p-4 rounded-xl bg-ivory-surface border border-border-subtle">
                  <h4 className="font-serif text-lg font-bold text-royal-indigo mb-1">
                    Candid &amp; Reverent
                  </h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Zero interference with Vedic rituals or sacred family prayers.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-ivory-surface border border-border-subtle">
                  <h4 className="font-serif text-lg font-bold text-royal-indigo mb-1">
                    Fine Art Mastery
                  </h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Tuned for genuine Indian skin tones, rich zardozi textiles, and soft evening candlelight.
                  </p>
                </div>
              </div>

              <Button href="/our-story" variant="secondary">
                Read Our Story &amp; Philosophy
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CURATED WEDDING STORIES (Asymmetric Editorial Showcase) */}
      <section className="section-padding bg-ivory-surface border-y border-border-subtle">
        <div className="site-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeader
              eyebrow="Recent Celebrations"
              title="Curated Love Stories From Across India"
              description="From grand Rajputana palace celebrations in Udaipur to intimate ancestral farmhouse pheras in Meerut."
              className="mb-0"
            />
            <Link
              href="/portfolio"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-sindoor-red hover:underline"
            >
              <span>View All Collections</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteContent.featuredStories.map((story) => (
              <article
                key={story.id}
                className="group flex flex-col bg-warm-ivory rounded-card overflow-hidden border border-border-subtle shadow-card transition-all hover:shadow-raised"
              >
                <div className="relative overflow-hidden">
                  <SmartImage
                    src={story.image.src}
                    alt={story.image.alt}
                    aspectRatio="4/5"
                    rounded="none"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-royal-indigo/85 text-warm-ivory text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                    {story.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="text-xs font-semibold text-sindoor-red tracking-wider uppercase mb-1">
                    {story.location}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-royal-indigo mb-3 group-hover:text-sindoor-red transition-colors">
                    {story.couple}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-6 flex-1">
                    {story.summary}
                  </p>

                  <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
                    <span className="text-xs text-text-muted font-medium">
                      {story.season}
                    </span>
                    <Link
                      href="/portfolio"
                      className="text-xs font-bold text-royal-indigo group-hover:text-sindoor-red inline-flex items-center gap-1"
                    >
                      <span>Explore Gallery</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CINEMATIC WEDDING FILMS SPOTLIGHT (Midnight Royal Indigo Band) */}
      <section className="section-padding bg-royal-indigo-dark text-warm-ivory relative overflow-hidden">
        <div className="absolute inset-0 mandap-pattern-dark pointer-events-none" />

        <div className="site-container relative z-10">
          <SectionHeader
            eyebrow="Cinematic Films"
            title="Moving Pictures With A Timeless Soul"
            description="Our wedding cinema is driven by live ceremony audio, original folk scores, and unscripted visual poetry."
            align="center"
            theme="dark"
          />

          <div className="max-w-4xl mx-auto rounded-hero overflow-hidden border border-border-dark bg-royal-indigo shadow-dark-card mb-12">
            <div className="relative aspect-video group">
              <SmartImage
                src="https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1400&q=80"
                alt="Cinematic still from royal Indian wedding film"
                aspectRatio="16/9"
                rounded="none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-indigo-dark/90 via-royal-indigo-dark/40 to-transparent flex flex-col justify-end p-6 sm:p-10">
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-3 h-3 rounded-full bg-sindoor-red" />
                  <span className="text-xs uppercase tracking-widest text-marigold font-bold">
                    Featured Film Feature
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-warm-ivory mb-2">
                  Kesariya Phool — The Royal Vows of Udaipur
                </h3>
                <p className="text-xs sm:text-sm text-text-muted-dark max-w-xl mb-4">
                  Featuring live Shehnai scoring recorded at Lake Pichola and the couple&apos;s dawn audio letters.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Button href="/wedding-films" variant="marigold" size="sm">
                    <Play className="w-4 h-4 mr-2 fill-current" />
                    Watch Film Details
                  </Button>
                  <span className="text-xs text-text-muted-dark">
                    14 Min 4K Master Grade
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button href="/wedding-films" variant="outline" className="border-border-dark text-warm-ivory hover:bg-royal-indigo">
              View All 4 Featured Wedding Cinema Reels
            </Button>
          </div>
        </div>
      </section>

      {/* 6. SERVICES & COVERAGE OVERVIEW */}
      <section className="section-padding bg-warm-ivory">
        <div className="site-container">
          <SectionHeader
            eyebrow="Our Offerings"
            title="Bespoke Wedding Photography &amp; Cinema Packages"
            description="Designed with uncompromising attention to detail for grand destination affairs, traditional celebrations, and intimate family gatherings."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteContent.servicePackages.map((pkg) => (
              <div
                key={pkg.id}
                className="p-8 rounded-card bg-ivory-surface border border-border-subtle shadow-card flex flex-col justify-between hover:border-marigold/40 transition-colors"
              >
                <div>
                  {pkg.badge && (
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-sindoor-red bg-sindoor-red/10 px-2.5 py-1 rounded-full mb-4">
                      {pkg.badge}
                    </span>
                  )}
                  <h3 className="font-serif text-2xl font-bold text-royal-indigo mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-xs font-semibold text-marigold tracking-wide uppercase mb-4">
                    {pkg.coverage}
                  </p>
                  <p className="text-sm text-text-muted leading-relaxed mb-6">
                    {pkg.description}
                  </p>

                  <div className="space-y-2 mb-8 pt-4 border-t border-border-subtle">
                    {pkg.deliverables.slice(0, 4).map((d) => (
                      <div key={d} className="flex items-start gap-2 text-xs text-text-muted">
                        <CheckCircle className="w-3.5 h-3.5 text-peacock-teal shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button href="/services-packages" variant="outline" className="w-full">
                  Explore Full Inclusions
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ PREVIEW ACCORDION */}
      <section className="section-padding bg-ivory-surface border-t border-border-subtle">
        <div className="site-container">
          <SectionHeader
            eyebrow="Common Questions"
            title="Everything You Need To Know"
            description="Honest answers to the most frequent queries couples ask before securing their wedding dates."
            align="center"
          />

          <FAQAccordion items={siteContent.faqs.slice(0, 4)} />

          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="text-sm font-bold text-sindoor-red hover:underline"
            >
              Have a specific question about your muhurat? Reach out directly →
            </Link>
          </div>
        </div>
      </section>

      {/* 8. ROYAL INVITATION CALL-TO-ACTION BAND */}
      <section className="py-20 bg-royal-indigo-dark text-warm-ivory border-t border-border-dark relative overflow-hidden">
        <div className="site-container text-center relative z-10 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-marigold mb-4 block">
            Limited Commissions Per Season
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            Let Us Weave Your Wedding Story Into An Heirloom.
          </h2>
          <p className="text-base sm:text-lg text-text-muted-dark leading-relaxed mb-8 max-w-xl mx-auto">
            Our dates for upcoming winter and spring muhurats fill rapidly. Reach out today to reserve our master artists for your sacred celebrations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Reserve Your Dates
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

