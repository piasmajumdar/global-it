import React from "react";
import { Mail } from "lucide-react";

const AppointmentBanner = () => {
  return (
    <section className="relative -mt-10 sm:-mt-14 z-20 max-w-6xl mx-auto px-4 sm:px-6">
      <div
        className="rounded-2xl shadow-xl overflow-hidden bg-cover bg-center text-white relative p-6 sm:p-10 border border-blue-400/20"
        style={{
          backgroundImage: `linear-gradient(rgba(57, 127, 189, 0.94), rgba(57, 127, 189, 0.94)), url('/bg-contact-experts.jpg')`,
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold leading-snug">
              Our dedicated sales team is here to help you find the right IT solution.
            </h3>
          </div>

          <div className="flex items-center gap-3.5 bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20 hover:bg-white/15 transition-all">
            <div className="w-10 h-10 rounded-full bg-white text-[#397fbd] flex items-center justify-center shrink-0 shadow-md">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-blue-100 font-semibold">
                Sales
              </p>
              <a
                href="mailto:sales@globalit.technology"
                className="text-base sm:text-lg font-bold hover:underline text-white block"
              >
                sales@globalit.technology
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;

