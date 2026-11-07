import React from "react";
import Hero from "./components/Hero";
import AppointmentBanner from "./components/AppointmentBanner";
import ServicesSection from "./components/ServicesSection";
import MerakiCarousel from "./components/MerakiCarousel";
import FunFacts from "./components/FunFacts";
import AboutSection from "./components/AboutSection";
import PartnersSection from "./components/PartnersSection";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero section with bg-banner.png matching screenshot */}
      <Hero />

      {/* Sales / Appointment CTA banner */}
      <AppointmentBanner />

      {/* Services Grid Section */}
      <ServicesSection />

      {/* Cisco & Meraki Carousel */}
      <MerakiCarousel />

      {/* Fun Facts Counters */}
      <FunFacts />

      {/* About Company */}
      <AboutSection />

      {/* Partners Section */}
      <PartnersSection />

      {/* Phone Contact CTA */}
      <CtaBanner />

      {/* Footer */}
      <Footer />
    </main>
  );
}
