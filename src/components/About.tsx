import React from "react";
import { PawPrint, Heart, Home, Shield, Award } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const AboutFeature = ({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left mb-8">
      <div className="bg-pet-blue/10 p-3 rounded-full mb-4">
        <Icon className="text-pet-blue" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="paw-print-divider mb-12">
          <PawPrint className="text-pet-brown/60" size={24} />
        </div>

        <h2 className="section-heading mb-16 pb-3">About the Sitter</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-pet-blue">
                Meet Sandy Zaboukos
              </h3>
              <p className="text-lg text-muted-foreground">
                Sandy Zaboukos has over 18 years experience as a professional
                pet sitter. She began working for My Favorite Pet Sitter in 2007
                and took over the business in 2011. Sandy has always had pets of
                her own, mostly dogs and cats, but has also had hamsters, guinea
                pigs, rats, and even a chinchilla. Sandy has also worked in cat
                rescue since 2017 and is well known in the city of Folsom for
                her volunteer work in TNR and feral cats. She received the
                Folsom Spirit Award in 2024, where she was recognized by the
                city for her cat rescue work in the community.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <AboutFeature
                  icon={Award}
                  title="Folsom Spirit Award"
                  description="Recognized by the Folsom City Council for outstanding service and dedication to improving the community."
                />
                <AboutFeature
                  icon={Heart}
                  title="Passionate"
                  description="Genuine love and passion for animals of all kinds"
                />
                <AboutFeature
                  icon={Shield}
                  title="Trustworthy"
                  description="Insured, background-checked, and highly recommended"
                />
                <AboutFeature
                  icon={Home}
                  title="Local"
                  description="Proudly serving the Folsom community since 2007"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="order-1 md:order-2">
            <div className="relative">
              <div
                className={cn(
                  "rounded-2xl overflow-hidden shadow-lg",
                  "transform transition-all duration-500 hover:shadow-xl",
                )}
              >
                <Image
                  src="/sandy.jpeg"
                  alt="Sandy with pets"
                  width={400} // or whatever makes sense for your layout
                  height={533} // maintain 3:4 aspect ratio
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>

              <div className="absolute -bottom-5 -right-5 bg-pet-orange rounded-lg p-4 shadow-lg transform rotate-3 hidden md:block">
                <span className="text-white font-medium">
                  Certified Pet First Aid
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
