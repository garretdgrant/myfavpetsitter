import React from "react";
import {
  PawPrint,
  Heart,
  Dog,
  Cat,
  Clock,
  Pill,
  Home,
  Coffee,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const ServiceCard = ({
  title,
  description,
  icon: Icon,
  color,
}: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 border border-gray-100">
      <div
        className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center mb-4",
          color === "blue" ? "bg-pet-blue/10" : "bg-pet-orange/10",
        )}
      >
        <Icon
          className={cn(
            "w-8 h-8",
            color === "blue" ? "text-pet-blue" : "text-pet-orange",
          )}
        />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Pet Sitting",
      description:
        "In-home pet sitting while you&apos;re away, including feeding, playtime, and plenty of love.",
      icon: Home,
      color: "blue",
    },
    {
      title: "Dog Walking",
      description:
        "Regular walks to keep your dog healthy, happy, and properly exercised.",
      icon: Dog,
      color: "orange",
    },
    {
      title: "Drop-in Visits",
      description:
        "Quick visits for feeding, bathroom breaks, or just to check in on your pet.",
      icon: Clock,
      color: "blue",
    },
    {
      title: "Feeding & Medication",
      description:
        "Careful administration of meals and any required medications on schedule.",
      icon: Pill,
      color: "orange",
    },
    {
      title: "Cat Care",
      description:
        "Specialized attention for cats including litter box maintenance and play time.",
      icon: Cat,
      color: "blue",
    },
    {
      title: "Overnight Stays",
      description:
        "Extended care with overnight stays to provide company and security for your pets.",
      icon: Coffee,
      color: "orange",
    },
  ];

  return (
    <section id="services" className="py-20 bg-pet-tan/20">
      <div className="container mx-auto px-4">
        <div className="paw-print-divider mb-12">
          <PawPrint className="text-pet-brown/60" size={24} />
        </div>

        <h2 className="section-heading mb-16 pb-3">Our Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-md">
            <Heart className="text-pet-orange mr-2" size={20} />
            <span className="text-lg font-medium">
              Tailored care plans for your pet&apos;s unique needs
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
