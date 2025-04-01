import React from "react";
import { PawPrint, MapPin } from "lucide-react";

const ServiceArea = () => {
  return (
    <section className="py-16 bg-pet-blue/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <div className="bg-white p-4 rounded-full shadow-md mb-6">
            <MapPin className="text-pet-blue h-8 w-8" />
          </div>

          <h2 className="text-3xl font-bold mb-6">Service Area</h2>

          <p className="text-xl text-center mb-8">
            Proudly serving Folsom, El Dorado Hills, and nearby areas.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Folsom",
              "El Dorado Hills",
              "Granite Bay",
              "Cameron Park",
              "Fair Oaks",
              "Orangevale",
            ].map((area) => (
              <div
                key={area}
                className="bg-white px-4 py-2 rounded-full shadow-sm border border-pet-blue/20 flex items-center"
              >
                <PawPrint className="text-pet-orange h-4 w-4 mr-2" />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
