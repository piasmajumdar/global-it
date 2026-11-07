"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X, Phone, Mail } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const servicesList = [
    { title: "Consultancy", href: "#services" },
    { title: "Procurement", href: "#services" },
    { title: "Managed Services", href: "#services" },
    { title: "Cloud Services", href: "#services" },
    { title: "Maintenance Solutions", href: "#services" },
    { title: "Security Solutions", href: "#services" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080d24]/95 backdrop-blur-md shadow-lg border-b border-slate-800/80 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo.png"
              alt="Global IT Technology"
              width={220}
              height={50}
              priority
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#top"
              className="text-white hover:text-[#43A753] font-medium text-[16px] transition-colors duration-200"
            >
              Home
            </Link>

            {/* About Us Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 text-white hover:text-[#43A753] font-medium text-[16px] py-2 transition-colors duration-200 focus:outline-none cursor-pointer"
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
              >
                <span>About us</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    aboutDropdownOpen ? "rotate-180 text-[#43A753]" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute top-full left-0 w-48 pt-2 transition-all duration-200 ${
                  aboutDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="bg-[#0f1838] border border-slate-700/80 rounded-xl shadow-2xl py-2 overflow-hidden backdrop-blur-xl">
                  <Link
                    href="#about"
                    onClick={() => setAboutDropdownOpen(false)}
                    className="block px-4 py-2.5 text-sm text-slate-200 hover:text-white hover:bg-[#43A753]/20 hover:border-l-4 hover:border-[#43A753] transition-all"
                  >
                    How we work
                  </Link>
                </div>
              </div>
            </div>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 text-white hover:text-[#43A753] font-medium text-[16px] py-2 transition-colors duration-200 focus:outline-none cursor-pointer"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180 text-[#43A753]" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute top-full left-0 w-60 pt-2 transition-all duration-200 ${
                  servicesDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="bg-[#0f1838] border border-slate-700/80 rounded-xl shadow-2xl py-2 overflow-hidden backdrop-blur-xl">
                  {servicesList.map((service, idx) => (
                    <Link
                      key={idx}
                      href={service.href}
                      onClick={() => setServicesDropdownOpen(false)}
                      className="block px-4 py-2.5 text-sm text-slate-200 hover:text-white hover:bg-[#43A753]/20 hover:border-l-4 hover:border-[#43A753] transition-all"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Us Button */}
            <Link
              href="#contact"
              className="inline-flex items-center justify-center bg-[#43A753] hover:bg-[#388e46] text-white font-medium text-[16px] px-6 py-2.5 rounded-[10px] shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
            >
              Contact us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <Link
              href="#contact"
              className="bg-[#43A753] text-white text-xs font-semibold px-3 py-2 rounded-lg"
            >
              Contact
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="text-white hover:text-[#43A753] p-2 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-6 pt-2 border-t border-slate-800 bg-[#0a102c]/98 rounded-2xl px-4 shadow-2xl backdrop-blur-2xl">
            <div className="flex flex-col space-y-3 pt-3">
              <Link
                href="#top"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#43A753] text-base font-medium py-2 border-b border-slate-800/60"
              >
                Home
              </Link>

              <div>
                <button
                  onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                  className="flex items-center justify-between w-full text-white hover:text-[#43A753] text-base font-medium py-2 border-b border-slate-800/60"
                >
                  <span>About us</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      aboutDropdownOpen ? "rotate-180 text-[#43A753]" : ""
                    }`}
                  />
                </button>
                {aboutDropdownOpen && (
                  <div className="pl-4 py-2 space-y-2 bg-slate-900/50 rounded-lg my-1">
                    <Link
                      href="#about"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm text-slate-300 hover:text-white py-1"
                    >
                      How we work
                    </Link>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className="flex items-center justify-between w-full text-white hover:text-[#43A753] text-base font-medium py-2 border-b border-slate-800/60"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      servicesDropdownOpen ? "rotate-180 text-[#43A753]" : ""
                    }`}
                  />
                </button>
                {servicesDropdownOpen && (
                  <div className="pl-4 py-2 space-y-2 bg-slate-900/50 rounded-lg my-1">
                    {servicesList.map((service, idx) => (
                      <Link
                        key={idx}
                        href={service.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm text-slate-300 hover:text-white py-1"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 text-center bg-[#43A753] hover:bg-[#388e46] text-white font-medium py-3 rounded-lg shadow-md"
              >
                Contact us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
