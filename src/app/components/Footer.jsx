import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0b132b] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand Info */}
          <div className="space-y-5">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Global IT Technology"
                width={200}
                height={48}
                className="h-11 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Our solutions are designed to increase the efficiency and
              reliability of your systems so that you can focus on the aspects
              of your business that really matter to you.
            </p>
            <div className="pt-2">
              <a
                href="https://www.facebook.com/Global-IT-Technology-101908881958345"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800/80 hover:bg-[#43A753] text-white flex items-center justify-center transition-all duration-200"
                aria-label="Facebook Page"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-5 tracking-tight border-b border-slate-800 pb-2 inline-block">
              Quick links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#top"
                  className="hover:text-[#43A753] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-[#43A753] transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-[#43A753] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-[#43A753] transition-colors"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white text-lg font-bold mb-5 tracking-tight border-b border-slate-800 pb-2 inline-block">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#services"
                  className="hover:text-[#43A753] transition-colors"
                >
                  Consultancy
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-[#43A753] transition-colors"
                >
                  Procurement
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-[#43A753] transition-colors"
                >
                  Managed Services
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-[#43A753] transition-colors"
                >
                  Cloud Services
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-[#43A753] transition-colors"
                >
                  Maintenance Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-[#43A753] transition-colors"
                >
                  Security Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-white text-lg font-bold mb-5 tracking-tight border-b border-slate-800 pb-2 inline-block">
              Contact info
            </h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#43A753] shrink-0 mt-0.5" />
                <span>PO Box 298 Batman, Melbourne, VIC 3058</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#43A753] shrink-0" />
                <a
                  href="tel:0390708103"
                  className="hover:text-[#43A753] transition-colors font-medium"
                >
                  03 9070 8103
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#43A753] shrink-0" />
                <a
                  href="mailto:info@globalit.technology"
                  className="hover:text-[#43A753] transition-colors"
                >
                  info@globalit.technology
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Global IT Technology. All rights reserved.</p>
          <a
            href="https://globalit.technology/wp-content/uploads/2021/11/GlobalIT-GDPR-privacy-policy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors underline"
          >
            Privacy Policy (PDF)
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
