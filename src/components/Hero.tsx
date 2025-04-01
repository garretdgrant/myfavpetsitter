"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { PawPrint } from "lucide-react";

const Hero = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 bg-pet-cream"
    >
      {/* Background decorative elements */}
      <div className="absolute right-0 top-20 w-48 h-48 bg-pet-blue/10 rounded-full -z-10"></div>
      <div className="absolute left-10 bottom-20 w-24 h-24 bg-pet-orange/10 rounded-full -z-10"></div>

      <div className="container mx-auto px-4 py-12 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex flex-col items-start space-y-6">
            <div className="flex items-center">
              <PawPrint className="text-pet-orange mr-2" size={28} />
              <span className="text-pet-brown font-medium">
                Reliable & Loving Care
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Loving Pet Care in Folsom
            </h1>

            <p className="text-lg text-muted-foreground">
              Professional in-home pet sitting and dog walking services in
              Folsom, CA. Peace of mind for you, comfort and care for your pets.
            </p>

            <div className="flex space-x-4 pt-4">
              <Button
                onClick={scrollToContact}
                className="bg-pet-orange hover:bg-pet-orange/90 text-white"
              >
                Book Now
              </Button>
              <Button
                variant="outline"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#services")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="border-pet-blue text-pet-blue hover:bg-pet-blue/10"
              >
                Our Services
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl transform transition-transform hover:scale-[1.01] duration-500">
                <img
                  src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1"
                  alt="Happy cat with owner"
                  className="w-full h-auto object-cover aspect-4/3"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-md animate-bounce-slow hidden md:block">
                <div className="flex items-center space-x-2">
                  <PawPrint className="text-pet-orange" size={20} />
                  <span className="font-medium text-pet-blue">
                    Trusted by 100+ families
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
