import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, CheckCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block">
              <span className="text-[#478ecc] text-sm sm:text-base font-bold uppercase tracking-wider">
                Who We Are
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2d2c2c] leading-tight">
              About our company
            </h2>

            <div className="space-y-4 text-slate-700 text-base sm:text-[17px] leading-relaxed">
              <p>
                Global IT Technology is an{" "}
                <strong className="text-[#2d2c2c] font-semibold">
                  Australian family-owned business
                </strong>{" "}
                founded in Melbourne.
              </p>

              <p>
                Our founder and director brings to the table{" "}
                <strong className="text-[#2d2c2c] font-semibold">
                  20 years&apos; experience working in telecommunications and Technology
                </strong>{" "}
                as a business analyst, project manager and system administrator
                across different industries.
              </p>

              <p>
                Global IT Technology was founded to follow her dream of
                establishing an Australia-based company that, different from other
                IT companies, could offer flexible services and count on a
                highly skilled team.
              </p>

              <p className="p-4 bg-slate-50 border-l-4 border-[#43A753] rounded-r-xl font-medium text-slate-800 italic">
                Based on her experience of seeing clients under pressure to
                purchase overpriced items that they do not necessarily need,
                Global IT Technology&apos;s mission is to create a trustworthy
                relationship with customers.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center bg-[#43A753] hover:bg-[#348842] text-white font-semibold text-base px-8 py-3.5 rounded-[10px] shadow-md hover:shadow-lg transition-all duration-200"
              >
                Read more
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100 group">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/about-video.jpg"
                  alt="Global IT Melbourne Team"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

