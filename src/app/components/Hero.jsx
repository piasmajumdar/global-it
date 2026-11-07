"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const slides = [
  {
    tagline: "We Provide IT-Services",
    title: "One Business -\nMultiple IT Services",
    text: "We help businesses in many ways, tailoring technology solutions to fit Organisations' needs.\nWith the constant changes in technology, we proud ourselves for listening to our clients' needsand offer a wide range of the most updated solutions",
    btnText: "Services we provide",
    btnLink: "#services",
    bgImage: "/bg-banner.png",
  },
  {
    tagline: "We offer expert IT consultation",
    title: "Consulting",
    text: "Expert IT consultation to leverage technology investments.",
    btnText: "Read more",
    btnLink: "#services",
    bgImage: "/bg-consulting.png",
  },
  {
    tagline: "Fulfill your business’ needs",
    title: "Procurement",
    text: "Up to date IT procurement practices and systems.",
    btnText: "Read more",
    btnLink: "#services",
    bgImage: "/bg-procurement.png",
  },
  {
    tagline: "Make your IT management simpler",
    title: "Managed Services",
    text: "IT infrastructure managed, optimised and made simpler for you.",
    btnText: "Read more",
    btnLink: "#services",
    bgImage: "/bg-managed-services.png",
  },
  {
    tagline: "Information access, anywhere",
    title: "Cloud Services",
    text: "Leading cloud Services for easy and sharable information access.",
    btnText: "Read more",
    btnLink: "#services",
    bgImage: "/bg-cloud-services.png",
  },
  {
    tagline: "An experienced team supervising the system",
    title: "Maintenance Solutions",
    text: "Hassle-free system maintenance.",
    btnText: "Read more",
    btnLink: "#services",
    bgImage: "/bg-maintenance-solutions.png",
  },
  {
    tagline: "Implement actionable IT security compliance",
    title: "Security Solutions",
    text: "End-to-end security solutions for today’s cyber threats.",
    btnText: "Read more",
    btnLink: "#services",
    bgImage: "/bg-security-solutions.png",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);

  // Totally automated rotation every 3 seconds (3000ms)
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const slide = slides[currentSlide];

  return (
    <section
      id="top"
      className="relative min-h-[700px] lg:min-h-[850px] flex items-center bg-[#070c1e] overflow-hidden"
    >
      {/* Background Images with smooth automated crossfade */}
      {slides.map((s, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-no-repeat bg-right lg:bg-center transition-opacity duration-700 ease-in-out pointer-events-none ${
            index === currentSlide ? "opacity-100 z-0" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${s.bgImage})`,
          }}
          aria-hidden={index !== currentSlide}
        />
      ))}

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#070b1f]/95 via-[#070b1f]/75 to-transparent pointer-events-none lg:from-[#070b1f]/90 lg:via-[#070b1f]/40 z-1" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-24 lg:pt-40 lg:pb-36">
        <div key={currentSlide} className="max-w-2xl lg:max-w-3xl">
          {/* Subtitle / Tagline */}
          <div className="inline-block mb-3 hero-anim-tagline">
            <span className="text-[#478ecc] text-base sm:text-[18px] font-semibold tracking-wide uppercase">
              {slide.tagline}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-white text-3xl sm:text-5xl lg:text-[54px] font-bold leading-[1.15] tracking-tight mb-6 whitespace-pre-line hero-anim-title">
            {slide.title}
          </h1>

          {/* Description */}
          <p className="text-slate-200 text-base sm:text-[17px] leading-relaxed mb-9 whitespace-pre-line max-w-2xl font-normal opacity-95 hero-anim-text">
            {slide.text}
          </p>

          {/* Button */}
          <div className="flex flex-wrap items-center gap-4 hero-anim-btn">
            <Link
              href={slide.btnLink}
              className="inline-flex items-center justify-center bg-[#43A753] hover:bg-[#348842] text-white font-semibold text-[17px] px-8 py-3.5 rounded-[10px] shadow-lg hover:shadow-green-500/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              {slide.btnText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
