import React from "react";
import { Button } from "@/components/ui/Button";
import { Compass, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 bg-warm-ivory">
      <div className="site-container max-w-lg text-center px-4">
        <div className="w-14 h-14 rounded-full bg-terracotta/10 border border-terracotta/20 text-terracotta flex items-center justify-center mx-auto mb-4">
          <Compass className="w-7 h-7" />
        </div>
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-terracotta block mb-2">
          Page Not Found • 404
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-deep-aubergine mb-3">
          This Story Page Has Moved
        </h1>
        <p className="text-text-muted text-xs sm:text-sm leading-relaxed mb-6">
          The link or celebration you are looking for is no longer at this address. Return to our curated wedding monographs or contact our Meerut studio.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/" variant="primary">
            <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
            Return to Home
          </Button>
          <Button href="/portfolio" variant="outline">
            Explore Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
}
