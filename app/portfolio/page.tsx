"use client";

import React, { useState } from "react";
import { siteContent } from "@/content/site";
import { SmartImage } from "@/components/ui/SmartImage";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MapPin, ArrowRight } from "lucide-react";

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Frames");

  const filteredItems =
    selectedCategory === "All Frames"
      ? siteContent.portfolioItems
      : siteContent.portfolioItems.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <div className="flex flex-col">
      {/* Compact Page Header */}
      <section className="bg-ivory-card py-12 md:py-16 border-b border-border-subtle">
        <div className="site-container max-w-3xl text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-terracotta mb-2 block">
            Curated Collections
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-deep-aubergine mb-3 leading-tight">
            Love, Through Our Lens.
          </h1>
          <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-xl mx-auto">
            Honest emotions, sacred rituals, and candid family moments captured across Rajasthan, North India, and worldwide destinations.
          </p>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section className="section-padding bg-warm-ivory">
        <div className="site-container">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 md:mb-12">
            {siteContent.portfolioCategories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-150 focus-visible:ring-2 focus-visible:ring-terracotta ${
                    isSelected
                      ? "bg-deep-aubergine text-warm-ivory shadow-subtle"
                      : "bg-white text-deep-aubergine border border-border-subtle hover:bg-warm-ivory"
                  }`}
                  aria-pressed={isSelected}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Dynamic Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col bg-white rounded-card overflow-hidden border border-border-subtle shadow-card hover:shadow-raised transition-all"
              >
                <div className="relative overflow-hidden">
                  <SmartImage
                    src={item.image.src}
                    alt={item.image.alt}
                    aspectRatio={item.aspect}
                    rounded="none"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-aubergine-dark/85 backdrop-blur-sm text-warm-ivory text-[9px] font-bold uppercase tracking-wider">
                    {item.category}
                  </div>
                </div>

                <div className="p-4 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-[10px] text-terracotta font-semibold uppercase tracking-wider mb-0.5">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-deep-aubergine group-hover:text-terracotta transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-text-muted">{item.couple}</p>
                  </div>
                  <span className="text-muted-marigold group-hover:translate-x-1 transition-transform text-sm font-bold">
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-text-muted text-sm">
                No frames found under this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Nuptial Story Highlights */}
      <section className="section-padding bg-ivory-card border-t border-border-subtle">
        <div className="site-container">
          <SectionHeader
            eyebrow="Complete Stories"
            title="Celebrations We Loved Documenting"
            description="Multi-day monographs covering everything from the welcome lunch to the sunrise bidaai."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteContent.featuredStories.map((story) => (
              <div
                key={story.id}
                className="p-5 rounded-card bg-white border border-border-subtle flex flex-col justify-between shadow-subtle"
              >
                <div>
                  <span className="text-[10px] uppercase font-bold text-soft-sage tracking-wider block mb-1">
                    {story.tag}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-deep-aubergine mb-1">
                    {story.couple}
                  </h3>
                  <p className="text-xs text-terracotta font-semibold mb-3">
                    {story.location}
                  </p>
                  <div className="rounded-input overflow-hidden aspect-[4/5] relative mb-4">
                    <SmartImage
                      src={story.image.src}
                      alt={story.image.alt}
                      aspectRatio="4/5"
                      rounded="card"
                    />
                  </div>
                </div>

                <Button href="/contact" variant="outline" size="sm" className="w-full">
                  Request Similar Coverage
                </Button>
              </div>
            ))}
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
            Tell us about your wedding dates and venue. We will confirm our calendar availability.
          </p>
          <Button href="/contact" variant="primary">
            Check Date Availability
          </Button>
        </div>
      </section>
    </div>
  );
}
