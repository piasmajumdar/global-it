"use client";

import React from "react";

const stats = [
  { value: "120", label: "Projects Completed" },
  { value: "175", label: "Satisfied Clients" },
  { value: "15", label: "Experienced Staff" },
  { value: "9.1", label: "Customer NPS" },
];

const FunFacts = () => {
  return (
    <section className="py-20 bg-[#0f1d56] text-white relative overflow-hidden">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#478ecc]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#43A753]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-4xl sm:text-6xl font-extrabold text-[#43A753] tracking-tight mb-2">
                {stat.value}
              </span>
              <span className="text-slate-200 text-sm sm:text-base font-semibold tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFacts;

