"use client";

import React, { useState } from "react";
import { siteContent, JournalArticle } from "@/content/site";
import { SmartImage } from "@/components/ui/SmartImage";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Clock, X, ArrowRight, Check } from "lucide-react";

export default function JournalPage() {
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(null);

  return (
    <div className="flex flex-col">
      {/* Compact Page Header */}
      <section className="bg-ivory-card py-12 md:py-16 border-b border-border-subtle">
        <div className="site-container max-w-3xl text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-terracotta mb-2 block">
            Studio Journal
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-deep-aubergine mb-3 leading-tight">
            Notes On Light &amp; Memory
          </h1>
          <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-xl mx-auto">
            Practical advice on muhurat lighting, album preservation, and documentary storytelling from our Meerut studio.
          </p>
        </div>
      </section>

      {/* Main Magazine Layout */}
      <section className="section-padding bg-warm-ivory">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteContent.journalArticles.map((article) => (
              <article
                key={article.id}
                className="group flex flex-col bg-white rounded-card overflow-hidden border border-border-subtle shadow-card hover:shadow-raised transition-all"
              >
                <div
                  className="cursor-pointer relative overflow-hidden"
                  onClick={() => setActiveArticle(article)}
                >
                  <SmartImage
                    src={article.image.src}
                    alt={article.image.alt}
                    aspectRatio="16/9"
                    rounded="none"
                  />
                </div>

                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] text-text-muted font-medium mb-2">
                      <Clock className="w-3.5 h-3.5 text-muted-marigold" />
                      <span>{article.readTime}</span>
                    </div>

                    <h2
                      onClick={() => setActiveArticle(article)}
                      className="font-serif text-xl sm:text-2xl font-bold text-deep-aubergine mb-2 group-hover:text-terracotta transition-colors cursor-pointer leading-snug"
                    >
                      {article.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-4">
                      {article.summary}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveArticle(article)}
                    className="pt-3 border-t border-border-subtle text-xs font-bold text-terracotta hover:underline flex items-center justify-between"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Article Modal (Preserves 7 Strict Routes) */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={activeArticle.title}
        >
          <div className="bg-white rounded-card max-w-2xl w-full p-6 sm:p-8 border border-border-subtle relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-deep-aubergine hover:bg-warm-ivory focus-visible:ring-2 focus-visible:ring-terracotta"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[10px] font-bold uppercase tracking-widest text-terracotta block mb-1">
              Studio Editorial Guide • {activeArticle.readTime}
            </span>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-deep-aubergine mb-3 leading-tight">
              {activeArticle.title}
            </h2>

            <div className="rounded-input overflow-hidden mb-4 aspect-video">
              <SmartImage
                src={activeArticle.image.src}
                alt={activeArticle.image.alt}
                aspectRatio="16/9"
                rounded="none"
              />
            </div>

            <p className="text-sm font-serif italic text-deep-aubergine border-l-2 border-terracotta pl-3 mb-4">
              &ldquo;{activeArticle.summary}&rdquo;
            </p>

            <div className="space-y-3 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-deep-aubergine block">
                Key Considerations:
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-text-muted">
                {activeArticle.tips.map((tip) => (
                  <li key={tip} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-soft-sage shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-4 border-t border-border-subtle">
              <Button href="/contact" variant="primary" className="flex-1" onClick={() => setActiveArticle(null)}>
                Discuss With Our Team
              </Button>
              <Button onClick={() => setActiveArticle(null)} variant="outline" className="flex-1">
                Close Guide
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
            Consult with our photographers about your wedding schedule and lighting.
          </p>
          <Button href="/contact" variant="marigold">
            Connect With Our Team
          </Button>
        </div>
      </section>
    </div>
  );
}
