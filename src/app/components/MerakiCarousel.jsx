"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { src: "/meraki-slide-1.jpg", alt: "Hybrid Work with Cisco Meraki" },
  { src: "/meraki-slide-2.jpg", alt: "Smart Spaces Solutions" },
  { src: "/meraki-slide-3.jpg", alt: "Secure Networking Overview" },
  { src: "/meraki-slide-4.jpg", alt: "Modern Remote Workforce" },
  { src: "/meraki-slide-5.jpg", alt: "Cloud Managed IT Solutions" },
  { src: "/meraki-slide-6.jpg", alt: "Safe Workplace Environments" },
  { src: "/meraki-slide-7.jpg", alt: "Executive Briefing Insights" },
  { src: "/meraki-slide-8.jpg", alt: "Cisco Meraki Practical Ebook" },
];

const MerakiCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-2xl overflow-hidden shadow-lg bg-slate-50 border border-slate-200">
          <div className="relative aspect-[16/6] min-h-[220px] sm:min-h-[280px] w-full">
            <Image
              src={slides[current].src}
              alt={slides[current].alt}
              fill
              className="object-cover transition-opacity duration-500"
              priority={current === 0}
            />
          </div>

          {/* Navigation Controls */}
          <button
            onClick={prev}
            type="button"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-all hover:scale-105 cursor-pointer z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={next}
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-all hover:scale-105 cursor-pointer z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  current === i
                    ? "w-7 bg-[#43A753]"
                    : "w-2.5 bg-white/70 hover:bg-white"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MerakiCarousel;

