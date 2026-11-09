import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Compass, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 bg-warm-ivory">
      <div className="site-container max-w-xl text-center px-4">
        <div className="w-16 h-16 rounded-full bg-sindoor-red/10 border border-sindoor-red/20 text-sindoor-red flex items-center justify-center mx-auto mb-6">
          <Compass className="w-8 h-8" />
        </div>
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-sindoor-red block mb-2">
          Page Not Found • 404
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-royal-indigo mb-4">
          This Story Page Has Moved
        </h1>
        <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-8">
          The link or celebration you are looking for is no longer at this address. Please return to our curated wedding monographs or contact our studio in Meerut.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/" variant="primary">
            <ArrowLeft className="w-4 h-4 mr-2" />
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

