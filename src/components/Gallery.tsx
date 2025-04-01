import React, { useState } from "react";
import { PawPrint, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface GalleryImage {
  url: string;
  alt: string;
  caption?: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const images: GalleryImage[] = [
    {
      url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/418505483_10233049644202475_8079810846874632600_n.jpg?stp=cp6_dst-jpg_p843x403_tt6&_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=urATEghkQToQ7kNvgElOEOw&_nc_zt=23&_nc_ht=scontent-sjc3-1.xx&_nc_gid=K9JrVtIMmdJ2istrrcQBQg&oh=00_AYFh4zswcmoyBM0jA24O_baQYyLasVIuFhexCrAkPEMvXQ&oe=67F142B2",
      alt: "Fluffy dog enjoying outdoor time",
      caption: "Cooper enjoying his walk at Folsom Lake",
    },
    {
      url: "https://images.unsplash.com/photo-1583840024136-64e17a1f9c56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Cute kitten",
      caption: "Baby Lucy relaxing after playtime",
    },
    {
      url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/468846044_10236524477711141_2778219222641403646_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=CcvZUZYwOYoQ7kNvgHHXI45&_nc_zt=23&_nc_ht=scontent-sjc3-1.xx&_nc_gid=usTCwUPMSemT5-1gUJ9D9Q&oh=00_AYENGV3R3Ktyg5b3VIlVSywB3iccMeoioCqhvwHk_camMQ&oe=67F1327C",
      alt: "Beautiful dog portrait",
      caption: "Max is all smiles after his walk",
    },
    {
      url: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Playful cat",
      caption: "Mittens enjoys window watching during visits",
    },
    {
      url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/421071989_10233095930639607_1397786276482781649_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=I_RoNBgdfk4Q7kNvgG3y4Ye&_nc_zt=23&_nc_ht=scontent-sjc3-1.xx&_nc_gid=k4daTz8-2ej1r6jLmyRw1A&oh=00_AYF7WwP0stoW_jQbbDnUzogSoIh5HdO7gpBBPnG-jImFyw&oe=67F159BF",
      alt: "Energetic puppy",
      caption: "Bella's first adventure at the park",
    },
    {
      url: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2",
      alt: "Senior dog relaxing",
      caption: "Old Charlie enjoying his sunny spot",
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
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />

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
