import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import ServiceArea from "../components/ServiceArea";
import Pricing from "../components/Pricing";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <ServiceArea />
      <Pricing />
      <Gallery />
      <Testimonials />
      <Contact />
    </div>
  );
}
