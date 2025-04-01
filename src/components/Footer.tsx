"use client";
import React from "react";
import { PawPrint, Heart, Facebook, Instagram, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-pet-blue py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <PawPrint className="text-white mr-2" size={24} />
              <span className="text-white font-bold text-2xl">
                My Favorite Pet Sitter
              </span>
            </div>

            <p className="text-white/80 mb-6">
              Professional pet sitting and dog walking services in Folsom, CA
              and surrounding areas.
            </p>

            <div className="flex items-center">
              <span className="text-white/80 flex items-center">
                Made with{" "}
                <Heart className="text-pet-orange mx-1 h-4 w-4" size={16} /> for
                pets and their owners
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Gallery", href: "#gallery" },
                { name: "Testimonials", href: "#testimonials" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-white/80">
              <p>(916) 555-1234</p>
              <p>hello@folsomfurryfriends.com</p>
              <p>Folsom, CA</p>
            </div>

            <div className="flex mt-4 space-x-3">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={cn(
                    "bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors",
                    "flex items-center justify-center",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="text-white h-4 w-4" size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-white/60 text-sm">
            © {year} My Favorite Pet Sitter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
