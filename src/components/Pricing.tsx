"use client";
import React from "react";
import { PawPrint, Clock, Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

const Pricing = () => {
  const isMobile = useIsMobile();

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const pricingItems = [
    { duration: "20-minute visit", price: "$20.00" },
    { duration: "30-minute visit", price: "$25.00" },
    { duration: "45-minute visit", price: "$30.00" },
    { duration: "60-minute visit", price: "$35.00" },
  ];

  return (
    <section id="pricing" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="paw-print-divider mb-12">
          <PawPrint className="text-pet-brown/60" size={24} />
        </div>

        <h2 className="section-heading mb-16 pb-3">Transparent Pricing</h2>

        <div className="mb-12">
          {isMobile ? (
            // Mobile view - stacked cards
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:hidden">
              {pricingItems.map((item, index) => (
                <Card
                  key={index}
                  className="border border-pet-blue/20 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader className="bg-pet-blue/5 pb-4">
                    <CardTitle className="flex justify-between items-center">
                      <span className="text-lg font-semibold flex items-center">
                        <Clock className="mr-2 h-5 w-5 text-pet-blue" />
                        {item.duration}
                      </span>
                      <span className="text-xl font-bold text-pet-orange">
                        {item.price}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-sm text-muted-foreground">
                      Personal attention for your pet
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            // Desktop view - table
            <div className="rounded-xl overflow-hidden border border-pet-blue/20 shadow-md mb-8 hidden lg:block">
              <Table>
                <TableHeader>
                  <TableRow className="bg-pet-blue/10">
                    <TableHead className="w-8/12 text-left font-semibold text-foreground">
                      Service Duration
                    </TableHead>
                    <TableHead className="w-4/12 text-right font-semibold text-foreground">
                      Price
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pricingItems.map((item, index) => (
                    <TableRow
                      key={index}
                      className="hover:bg-pet-blue/5 transition-colors"
                    >
                      <TableCell className="font-medium flex items-center">
                        <Clock className="mr-2 h-4 w-4 text-pet-blue" />
                        {item.duration}
                      </TableCell>
                      <TableCell className="text-right font-semibold text-pet-orange">
                        {item.price}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <Card className="border-pet-blue/20 bg-linear-to-br from-white to-pet-blue/5">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <div className="bg-pet-blue/10 p-2 rounded-full">
                  <PawPrint className="text-pet-blue h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Trail Walks</h3>
                  <p className="text-muted-foreground">
                    Trail walks available at the same pricing as visits
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-pet-orange/20 bg-linear-to-br from-white to-pet-orange/5">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <div className="bg-pet-orange/10 p-2 rounded-full">
                  <Calendar className="text-pet-orange h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">10% Discount</h3>
                  <p className="text-muted-foreground">
                    Available for regular monthly dog walking clients
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Disclaimer Section */}
        <div className="bg-white rounded-lg p-6 border border-muted/60 mb-10 text-sm text-muted-foreground italic">
          <p>
            Additional charges may apply for visits before 9 a.m., after 10
            p.m., or on major holidays. Full payment is due before service
            begins. A fee may apply for late cancellations.
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">
            Need a custom quote? Let&apos;s talk about your pet&apos;s needs!
          </h3>
          <Button
            onClick={scrollToContact}
            className="bg-pet-orange hover:bg-pet-orange/90 text-white group"
          >
            Contact Me
            <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
