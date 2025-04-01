import React from "react";
import { PawPrint, Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  rating: number;
}

const Testimonial = ({ quote, name, role, rating }: TestimonialProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={16}
            className={cn(
              index < rating
                ? "text-pet-orange fill-pet-orange"
                : "text-gray-300",
            )}
          />
        ))}
      </div>

      <Quote className="text-pet-blue/30 mb-3 h-8 w-8" />

      <p className="text-muted-foreground italic mb-6">{quote}</p>

      <div className="flex items-center">
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Sarah is amazing with our two cats! They're normally shy with strangers, but they warmed up to her right away. We can truly relax on vacation knowing they're in great hands.",
      name: "Emily Johnson",
      role: "Cat Owner, Folsom",
      rating: 5,
    },
    {
      quote:
        "I'm always nervous leaving my elderly dog with anyone, but Sarah's attention to detail and genuine care put me at ease. She gave him his medication exactly as scheduled and sent updates throughout the day.",
      name: "Michael Rodriguez",
      role: "Dog Owner, El Dorado Hills",
      rating: 5,
    },
    {
      quote:
        "As a first-time pet parent, I was anxious about leaving my puppy. Sarah not only took great care of him but also gave me tips that helped with his training. She's now our go-to sitter!",
      name: "Jessica Williams",
      role: "Puppy Owner, Folsom",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-pet-cream">
      <div className="container mx-auto px-4">
        <div className="paw-print-divider mb-12">
          <PawPrint className="text-pet-brown/60" size={24} />
        </div>

        <h2 className="section-heading mb-16 pb-3">What Pet Parents Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
