import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  SlidersHorizontal,
  Cloud,
  Wrench,
  PackageCheck,
  PieChart,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Managed Services",
    icon: SlidersHorizontal,
    desc: "Global IT ensures your systems are properly maintained at a mutually agreed upon price. Proactive management puts your business in safe hands.",
    href: "#contact",
    image: "/managed-services.jpg",
  },
  {
    title: "Cloud Services",
    icon: Cloud,
    desc: "Global IT provides leading cloud services to enable you and your employees to access your business files from anywhere securely on any device.",
    href: "#contact",
    image: null,
  },
  {
    title: "Maintenance Solutions",
    icon: Wrench,
    desc: "Our network cabling technicians are fully registered and certified by ACMA, the Australian Communications and Media Authority, and help ensure zero downtime.",
    href: "#contact",
    image: null,
  },
  {
    title: "Procurement",
    icon: PackageCheck,
    desc: "Our team offers end-to-end solutions, including project planning, procurement, ICT hardware deployment, zero-touch deployment, and fleet management.",
    href: "#contact",
    image: "/procurement.jpg",
  },
  {
    title: "Consultancy",
    icon: PieChart,
    desc: "Whether it’s strategy, planning and execution, architecture, business transformation, risk management or business continuity, we offer expert ICT consultation.",
    href: "#contact",
    image: "/consulting.jpg",
  },
  {
    title: "Security Solutions",
    icon: ShieldCheck,
    desc: "We help selecting the right platform and with architecting and designing a solution that meets your business and technical security compliance requirements.",
    href: "#contact",
    image: "/security-solutions.jpg",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="pt-24 pb-20 bg-[#eff1f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2d2c2c] leading-tight mb-4">
            A full range of tech services <br className="hidden sm:inline" />
            to support your business growth
          </h2>
          <p className="text-slate-600 text-lg">
            Six comprehensive service areas, one trusted Australian team.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between"
              >
                {/* Accent top border on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#43A753] transition-all duration-300" />

                <div>
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-[#eff1f4] group-hover:bg-[#43A753] text-[#478ecc] group-hover:text-white flex items-center justify-center mb-6 transition-all duration-300 shadow-inner">
                    <Icon className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#2d2c2c] group-hover:text-[#43A753] transition-colors duration-200 mb-3">
                    <Link href={item.href}>{item.title}</Link>
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-[15px] leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Learn More link */}
                <div className="pt-4 border-t border-slate-100 mt-auto">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-[#478ecc] group-hover:text-[#43A753] font-semibold text-sm transition-colors duration-200"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

