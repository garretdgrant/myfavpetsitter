"use client";
import React from "react";
import { PawPrint, Heart } from "lucide-react";
import Link from "next/link";

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
              <p>(916) 990-3911</p>
              <p>sandy@myfavpetsitter.org</p>
              <p>Folsom, CA</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <div className="flex flex-col items-center space-y-2">
            <p className="text-white/60 text-sm">
              © {year} My Favorite Pet Sitter. All rights reserved.
            </p>
            <Link
              href="https://www.edcwebdesign.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 group transition-colors"
            >
              <img
                src="/edcLogo.webp"
                alt="EDC Web Design Logo"
                className="h-8 w-auto"
              />
              <p className="text-white font-semibold group-hover:text-yellow-400 transition-colors">
                Designed by EDC Web Design
              </p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
