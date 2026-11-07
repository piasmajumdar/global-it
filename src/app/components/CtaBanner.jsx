import React from "react";
import { PhoneCall } from "lucide-react";

const CtaBanner = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-[#478ecc] text-white text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h3 className="text-2xl sm:text-3xl font-semibold mb-4 tracking-tight">
          Contact our team now:
        </h3>
        <a
          href="tel:0390708103"
          className="inline-flex items-center gap-4 text-3xl sm:text-5xl font-extrabold hover:text-slate-900 transition-colors tracking-wide"
        >
          <PhoneCall className="w-8 h-8 sm:w-12 sm:h-12" />
          <span>03 9070 8103</span>
        </a>
      </div>
    </section>
  );
};

export default CtaBanner;

