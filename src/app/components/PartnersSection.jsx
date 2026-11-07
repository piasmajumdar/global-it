import React from "react";
import Image from "next/image";

const partners = [
  { name: "Cisco Partner", src: "/partner-cisco.png" },
  { name: "Cisco Meraki", src: "/partner-meraki.png" },
  { name: "Dicker Data", src: "/partner-dicker-data.png" },
  { name: "Leader", src: "/partner-leader.png" },
  { name: "Check Point", src: "/partner-checkpoint.png" },
  { name: "Ingram", src: "/partner-ingram.png" },
  { name: "Microsoft", src: "/partner-microsoft.png" },
  { name: "Business NBN", src: "/partner-nbn.png" },
  { name: "Poly", src: "/partner-poly.png" },
  { name: "Ekahau", src: "/partner-ekahau.png" },
  { name: "Duo", src: "/partner-duo.png" },
  { name: "Microsoft Surface Modern Solutions", src: "/partner-surface.png" },
];

const PartnersSection = () => {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2d2c2c] tracking-tight">
            Our Partners
          </h2>
          <div className="w-16 h-1 bg-[#43A753] mx-auto mt-4 rounded-full" />
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-white p-4 sm:p-5 rounded-xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 w-full h-24 flex items-center justify-center hover:-translate-y-1"
            >
              <div className="relative w-full h-14 flex items-center justify-center">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={150}
                  height={60}
                  className="max-h-12 w-auto object-contain opacity-75 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

