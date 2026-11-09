"use client";

import React, { useState } from "react";
import { siteContent, FilmItem } from "@/content/site";
import { SmartImage } from "@/components/ui/SmartImage";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Play, Music, Clock, MapPin, X, Film } from "lucide-react";

export default function WeddingFilmsPage() {
  const [activeFilm, setActiveFilm] = useState<FilmItem | null>(null);

  return (
    <div className="flex flex-col">
      {/* Compact Page Header */}
      <section className="bg-aubergine-dark text-warm-ivory py-12 md:py-16 border-b border-border-dark relative overflow-hidden">
        <div className="absolute inset-0 studio-dark-pattern pointer-events-none" />
        <div className="site-container max-w-3xl text-center relative z-10">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-marigold mb-2 block">
            Cinematic Heirlooms
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-warm-ivory mb-3 leading-tight">
            Some Moments Deserve to Move.
          </h1>
          <p className="text-sm sm:text-base text-text-muted-dark leading-relaxed max-w-xl mx-auto">
            Shot on cinema cameras with live multi-track audio, original acoustic instruments, and deep reverence for Vedic ceremonies.
          </p>
        </div>
      </section>

      {/* Main Films Grid */}
      <section className="section-padding bg-warm-ivory">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteContent.weddingFilms.map((film) => (
              <article
                key={film.id}
                className="group flex flex-col bg-white rounded-card overflow-hidden border border-border-subtle shadow-card hover:shadow-raised transition-all"
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
                  aria-label={`Open details and film notes for ${film.title}`}
                >
                  <SmartImage
                    src={film.thumbnail.src}
                    alt={film.thumbnail.alt}
                    aspectRatio="16/9"
                    rounded="none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-aubergine-dark/75 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Play Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-terracotta/90 text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                      <Play className="w-6 h-6 ml-0.5 fill-current" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-aubergine-dark/90 text-muted-marigold text-[10.5px] font-bold tracking-wide">
                    <Clock className="w-3 h-3" />
                    <span>{film.duration}</span>
                  </div>
                </div>

                {/* Film Information */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-[10px] font-semibold text-terracotta uppercase tracking-wider mb-1">
                      <MapPin className="w-3 h-3" />
                      <span>{film.location}</span>
                    </div>

                    <h2 className="font-serif text-2xl font-bold text-deep-aubergine mb-2 group-hover:text-terracotta transition-colors">
                      {film.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-4">
                      {film.description}
                    </p>

                    <div className="p-3 rounded-input bg-warm-ivory border border-border-subtle mb-4">
                      <div className="flex items-start gap-2 text-xs text-deep-aubergine font-medium">
                        <Music className="w-3.5 h-3.5 text-soft-sage shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-deep-aubergine block mb-0.5 text-[11px]">Original Audio Score:</strong>
                          <span className="text-text-muted text-[11px]">{film.audioTrack}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-border-subtle flex items-center justify-between">
                    <span className="text-xs text-text-muted font-medium">{film.couple}</span>
                    <button
                      type="button"
                      onClick={() => setActiveFilm(film)}
                      className="text-xs font-bold text-terracotta hover:underline inline-flex items-center gap-1"
                    >
                      <span>Read Director Notes</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cinema Craft Overview */}
      <section className="section-padding bg-ivory-card border-y border-border-subtle">
        <div className="site-container max-w-3xl text-center">
          <SectionHeader
            eyebrow="Sound &amp; Cinema"
            title="Why Audio Defines An Indian Wedding Film"
            description="Images show what it looked like. Live sound captures how it truly felt."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
            <div className="p-5 rounded-card bg-white border border-border-subtle shadow-subtle">
              <h3 className="font-serif text-lg font-bold text-deep-aubergine mb-1">
                Discreet Microphones
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Miniature wireless mics on groom and panditji to capture every Sanskrit vow clearly.
              </p>
            </div>
            <div className="p-5 rounded-card bg-white border border-border-subtle shadow-subtle">
              <h3 className="font-serif text-lg font-bold text-deep-aubergine mb-1">
                Acoustic Instruments
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Original Shehnai, Sarangi, and Sitar recorded live on location rather than stock digital audio.
              </p>
            </div>
            <div className="p-5 rounded-card bg-white border border-border-subtle shadow-subtle">
              <h3 className="font-serif text-lg font-bold text-deep-aubergine mb-1">
                Textile Color Grading
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Color-graded specifically for red zardozi, real gold jewellery, and warm night lights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Film Detail Modal (Accessible, Clean) */}
      {activeFilm && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={activeFilm.title}
        >
          <div className="bg-white rounded-card max-w-xl w-full p-6 sm:p-8 border border-border-subtle relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setActiveFilm(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-deep-aubergine hover:bg-warm-ivory focus-visible:ring-2 focus-visible:ring-terracotta"
              aria-label="Close film synopsis"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[10px] font-bold uppercase tracking-widest text-terracotta block mb-1">
              Director&apos;s Cut Notes
            </span>
            <h3 className="font-serif text-2xl font-bold text-deep-aubergine mb-1">
              {activeFilm.title}
            </h3>
            <p className="text-xs text-text-muted mb-4 font-medium">
              {activeFilm.couple} • {activeFilm.location} • {activeFilm.duration}
            </p>

            <div className="rounded-input overflow-hidden mb-4 aspect-video relative">
              <SmartImage
                src={activeFilm.thumbnail.src}
                alt={activeFilm.thumbnail.alt}
                aspectRatio="16/9"
                rounded="none"
              />
              <div className="absolute inset-0 bg-aubergine-dark/50 flex items-center justify-center p-4 text-center">
                <div className="bg-warm-ivory/95 text-deep-aubergine p-3 rounded-card max-w-xs shadow-md">
                  <Film className="w-5 h-5 text-terracotta mx-auto mb-1" />
                  <p className="text-xs font-semibold">
                    Client film archived in 4K resolution. Full private screenings available at our Meerut studio or via private link.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-6">
              {activeFilm.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <Button
                href="/contact"
                variant="primary"
                className="flex-1"
                onClick={() => setActiveFilm(null)}
              >
                Inquire For Film Coverage
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
      <section className="py-14 bg-aubergine-dark text-warm-ivory border-t border-border-dark text-center">
        <div className="site-container max-w-xl mx-auto">
          <h2 className="font-serif text-3xl font-semibold mb-3">
            Let&apos;s Make Your Story.
          </h2>
          <p className="text-text-muted-dark text-xs sm:text-sm mb-6">
            Reserve our cinematography crew for your upcoming wedding dates.
          </p>
          <Button href="/contact" variant="marigold">
            Inquire for Wedding Cinema
          </Button>
        </div>
      </section>
    </div>
  );
}
