"use client";
import React, { useState } from "react";
import { PawPrint, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface GalleryImage {
  url: string;
  alt: string;
  caption?: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const images: GalleryImage[] = [
    {
      url: "/cats/cat3.jpeg",
      alt: "Fluffy dog enjoying outdoor time",
    },
    {
      url: "/dogs/dog3.jpeg",
      alt: "Beautiful dog portrait",
    },
    {
      url: "/cats/cat2.jpeg",
      alt: "Cute kitten",
    },
    {
      url: "/cats/cat5.jpeg",
      alt: "Beautiful dog portrait",
    },
    {
      url: "/dogs/dog1.jpeg",
      alt: "Fluffy dog enjoying outdoor time",
    },
    {
      url: "/cats/cat7.jpeg",
      alt: "Playful cat",
    },
    {
      url: "/cats/cat8.jpeg",
      alt: "Energetic puppy",
    },
    {
      url: "/dogs/dog2.jpeg",
      alt: "Cute kitten",
    },
    {
      url: "/cats/cat9.jpeg",
      alt: "Senior dog relaxing",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="paw-print-divider mb-12">
          <PawPrint className="text-pet-brown/60" size={24} />
        </div>

        <h2 className="section-heading mb-16 pb-3">Pet Gallery</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={cn(
                "cursor-pointer overflow-hidden rounded-xl shadow-md relative group",
                "transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
              )}
              onClick={() => setSelectedImage(image)}
            >
              {/* Image container with fixed height for `fill` to work */}
              <div className="relative w-full h-64">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white font-medium text-sm">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Dialog
          open={!!selectedImage}
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogContent className="max-w-3xl p-0 overflow-hidden">
            <button
              className="absolute right-4 top-4 z-50 bg-black/50 text-white p-1 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <X size={20} />
            </button>
            {selectedImage && (
              <div>
                <img
                  src={selectedImage.url}
                  alt={selectedImage.alt}
                  className="w-full max-h-[80vh] object-contain"
                />
                {selectedImage.caption && (
                  <div className="p-4 bg-white">
                    <p className="text-center font-medium">
                      {selectedImage.caption}
                    </p>
                  </div>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
