"use client";

import React, { useState } from "react";
import { siteContent, FilmItem } from "@/content/site";
import { SmartImage } from "@/components/ui/SmartImage";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Play, Music, Clock, MapPin, X, Film, CheckCircle } from "lucide-react";

export default function WeddingFilmsPage() {
  const [activeFilm, setActiveFilm] = useState<FilmItem | null>(null);

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-royal-indigo-dark text-warm-ivory py-16 md:py-20 border-b border-border-dark relative overflow-hidden">
        <div className="absolute inset-0 mandap-pattern-dark pointer-events-none" />
        <div className="site-container max-w-4xl text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-marigold mb-3 block">
            Cinematic Heirlooms
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-warm-ivory mb-6 leading-tight">
            Wedding Films That Stir The Soul
          </h1>
          <p className="text-base sm:text-lg text-text-muted-dark leading-relaxed max-w-2xl mx-auto">
            Shot on cinema cameras with pristine live sound recording, custom orchestral arrangements, and deep reverence for Vedic ceremonies.
          </p>
        </div>
      </section>

      {/* Main Films Showcase */}
      <section className="section-padding bg-warm-ivory">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {siteContent.weddingFilms.map((film) => (
              <article
                key={film.id}
                className="group flex flex-col bg-ivory-surface rounded-card overflow-hidden border border-border-subtle shadow-card hover:shadow-raised transition-all"
              >
                {/* 16:9 Cinema Thumbnail with interactive Play trigger */}
                <div
                  className="relative aspect-video cursor-pointer overflow-hidden"
                  onClick={() => setActiveFilm(film)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setActiveFilm(film);
                    }
                  }}
                  aria-label={`Open details and synopsis for film ${film.title}`}
                >
                  <SmartImage
                    src={film.thumbnail.src}
                    alt={film.thumbnail.alt}
                    aspectRatio="16/9"
                    rounded="none"
                  />
                  {/* Subtle dark gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-indigo-dark/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Play Button Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-sindoor-red/90 text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                      <Play className="w-7 h-7 ml-1 fill-current" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-royal-indigo-dark/90 text-marigold text-xs font-bold tracking-wide">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{film.duration}</span>
                  </div>
                </div>

                {/* Film Metadata */}
                <div className="p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-sindoor-red uppercase tracking-wider mb-2">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{film.location}</span>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-royal-indigo mb-3 group-hover:text-sindoor-red transition-colors">
                      {film.title}
                    </h2>

                    <p className="text-sm text-text-muted leading-relaxed mb-6">
                      {film.description}
                    </p>

                    <div className="p-4 rounded-xl bg-warm-ivory border border-border-subtle mb-6">
                      <div className="flex items-start gap-2.5 text-xs text-royal-indigo font-medium">
                        <Music className="w-4 h-4 text-peacock-teal shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-royal-indigo block mb-0.5">Original Sound Scoring:</strong>
                          <span className="text-text-muted">{film.musicNote}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border-subtle">
                    <div className="flex flex-wrap gap-1.5">
                      {film.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded bg-royal-indigo/5 text-[11px] font-semibold text-royal-indigo"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveFilm(film)}
                      className="text-xs font-bold text-sindoor-red hover:underline inline-flex items-center gap-1"
                    >
                      <span>Film Notes</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Behind The Sound & Cinema Craft */}
      <section className="section-padding bg-ivory-surface border-y border-border-subtle">
        <div className="site-container max-w-4xl text-center">
          <SectionHeader
            eyebrow="The Craft of Cinema"
            title="Why Audio Defines An Indian Wedding Film"
            description="Visuals capture what the day looked like. Sound captures how the day felt."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-card bg-warm-ivory border border-border-subtle">
              <h3 className="font-serif text-xl font-bold text-royal-indigo mb-2">
                Discreet Audio Lavaliers
              </h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                We mic the groom and panditji with miniature wireless mics to record every Sanskrit vow with warm, studio clarity.
              </p>
            </div>
            <div className="p-6 rounded-card bg-warm-ivory border border-border-subtle">
              <h3 className="font-serif text-xl font-bold text-royal-indigo mb-2">
                Folk &amp; Classical Scoring
              </h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Rather than generic royalty-free electronic music, we commission authentic regional instruments: Shehnai, Sarangi, and Sitar.
              </p>
            </div>
            <div className="p-6 rounded-card bg-warm-ivory border border-border-subtle">
              <h3 className="font-serif text-xl font-bold text-royal-indigo mb-2">
                Color Grading for Indian Textiles
              </h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Custom cinematic LUTs tuned for crimson zardozi, real gold jewellery, and deep night sangeet festivities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Film Detail Modal (Static, Accessible, Zero Motion) */}
      {activeFilm && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={activeFilm.title}
        >
          <div className="bg-ivory-surface rounded-hero max-w-2xl w-full p-8 border border-border-subtle relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setActiveFilm(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-royal-indigo hover:bg-warm-ivory focus-visible:ring-2 focus-visible:ring-marigold"
              aria-label="Close film synopsis"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-widest text-sindoor-red block mb-1">
              Director&apos;s Cut Synopsis
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-royal-indigo mb-2">
              {activeFilm.title}
            </h3>
            <p className="text-xs text-text-muted mb-4 font-semibold">
              {activeFilm.couple} • {activeFilm.location} • {activeFilm.duration}
            </p>

            <div className="rounded-card overflow-hidden mb-6 aspect-video relative">
              <SmartImage
                src={activeFilm.thumbnail.src}
                alt={activeFilm.thumbnail.alt}
                aspectRatio="16/9"
                rounded="none"
              />
              <div className="absolute inset-0 bg-royal-indigo-dark/40 flex items-center justify-center text-center p-4">
                <div className="bg-warm-ivory/95 text-royal-indigo p-4 rounded-xl max-w-xs shadow-md">
                  <Film className="w-6 h-6 text-sindoor-red mx-auto mb-1" />
                  <p className="text-xs font-semibold">
                    Private client film archived in 4K resolution. Full screenings available at our Meerut studio or via private link.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-text-muted leading-relaxed mb-6">
              {activeFilm.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                href="/contact"
                variant="primary"
                className="flex-1"
                onClick={() => setActiveFilm(null)}
              >
                Inquire For Wedding Film Coverage
              </Button>
              <Button
                onClick={() => setActiveFilm(null)}
                variant="outline"
                className="flex-1"
              >
                Close Preview
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Band */}
      <section className="py-16 bg-royal-indigo-dark text-warm-ivory border-t border-border-dark text-center">
        <div className="site-container max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            Commission Your Wedding Film
          </h2>
          <p className="text-text-muted-dark text-sm sm:text-base mb-8">
            Let us capture your vows, laughter, and sacred rituals in high definition 4K cinema.
          </p>
          <Button href="/contact" variant="marigold" size="lg">
            Consult With Our Cinematographer
          </Button>
        </div>
      </section>
    </div>
  );
}

