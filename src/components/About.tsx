import React from "react";
import { PawPrint, Heart, Home, Shield } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

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
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-pet-blue">
                Hi, I&apos;m Sandy
              </h3>
              <p className="text-lg text-muted-foreground">
                A Folsom native with over 8 years of experience caring for pets
                of all kinds. My mission is to provide the highest quality care
                for your furry family members when you can&apos;t be there.
              </p>
              <p className="text-muted-foreground">
                As a lifelong animal lover and pet owner myself, I understand
                the importance of finding someone trustworthy to care for your
                pets. I treat each animal as if they were my own, with
                individualized attention, plenty of exercise, and lots of
                affection.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
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
                  description="Proudly serving the Folsom community since 2015"
                />
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div
                className={cn(
                  "rounded-2xl overflow-hidden shadow-lg",
                  "transform transition-all duration-500 hover:shadow-xl",
                )}
              >
                <img
                  src="https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/448332904_10233928643936919_1790417268591473858_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=2Q8_f3OhKu0Q7kNvgGG0SPt&_nc_zt=23&_nc_ht=scontent-sjc3-1.xx&_nc_gid=r2Xudd8OA8c8BBorYvRm3g&oh=00_AYH0ce4iharlc-hgeKHmKvDZeUmVAd9TQSO3TaWJQeJMzQ&oe=67F12528"
                  alt="Sarah with pets"
                  className="w-full h-auto object-cover aspect-[3/4]"
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
