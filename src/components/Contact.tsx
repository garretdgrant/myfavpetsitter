"use client";
import React, { useState } from "react";
import { PawPrint, Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    serviceStart: "",
    serviceEnd: "",
    visitsPerDay: "",
    visitTime: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const today = new Date().toISOString().split("T")[0];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const startDate = new Date(formData.serviceStart);
    const endDate = new Date(formData.serviceEnd);

    if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) {
      toast({
        title: "Invalid dates",
        description: "Please provide valid start and end dates.",
        variant: "destructive",
      });
      return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (startDate < today) {
      toast({
        title: "Start date in the past",
        description: "Please pick a start date that is today or later.",
        variant: "destructive",
      });
      return;
    }

    if (startDate > endDate) {
      toast({
        title: "Invalid date range",
        description: "End date cannot be before the start date.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    console.log(formData);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast({
          title: "Message sent!",
          description: "We’ll get back to you as soon as possible.",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          serviceStart: "",
          serviceEnd: "",
          visitsPerDay: "",
          visitTime: "",
          message: "",
        });
      } else {
        const data = await res.json();
        toast({
          title: "Oops!",
          description: data?.error || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Server error",
        description:
          "There was a problem submitting your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-pet-blue/5">
      <div className="container mx-auto px-4">
        <div className="paw-print-divider mb-12">
          <PawPrint className="text-pet-brown/60" size={24} />
        </div>

        <h2 className="section-heading mb-16 pb-3">Get In Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-pet-blue/10 p-3 rounded-full mr-4">
                  <Phone className="text-pet-blue h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">(916) 990-3911</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-pet-blue/10 p-3 rounded-full mr-4">
                  <Mail className="text-pet-blue h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">
                    sandy@myfavpetsitter.org
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-pet-blue/10 p-3 rounded-full mr-4">
                  <MapPin className="text-pet-blue h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Service Area</p>
                  <p className="text-muted-foreground">Folsom</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-pet-orange/10 rounded-xl">
              <h4 className="font-semibold mb-2 text-pet-orange">
                Ready to book?
              </h4>
              <p className="text-muted-foreground">
                Fill out the form to discuss your pet&apos;s needs, or give us a
                call directly. We&apos;re looking forward to meeting you and
                your furry family members!
              </p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ position: "absolute", left: "-10000px" }}
                />

                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block mb-2 font-medium">
                  Service Address
                </label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="123 Pet Lane, Folsom, CA"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="serviceStart"
                    className="block mb-2 font-medium"
                  >
                    Service Start Date
                  </label>
                  <Input
                    id="serviceStart"
                    name="serviceStart"
                    type="date"
                    value={formData.serviceStart}
                    onChange={handleChange}
                    required
                    min={today}
                    className="w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="serviceEnd"
                    className="block mb-2 font-medium"
                  >
                    Service End Date
                  </label>
                  <Input
                    id="serviceEnd"
                    name="serviceEnd"
                    type="date"
                    value={formData.serviceEnd}
                    onChange={handleChange}
                    required
                    min={formData.serviceStart || today}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="visitsPerDay"
                    className="block mb-2 font-medium"
                  >
                    Visits Per Day
                  </label>
                  <Input
                    id="visitsPerDay"
                    name="visitsPerDay"
                    type="number"
                    min={1}
                    max={6}
                    value={formData.visitsPerDay}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="2"
                  />
                </div>
                <div>
                  <label htmlFor="visitTime" className="block mb-2 font-medium">
                    Preferred Visit Time
                  </label>
                  <select
                    id="visitTime"
                    name="visitTime"
                    value={formData.visitTime}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="" disabled>
                      Select a time
                    </option>
                    <option value="Morning">Morning (7-10 AM)</option>
                    <option value="Midday">Midday (11 AM-2 PM)</option>
                    <option value="Afternoon">Afternoon (3-6 PM)</option>
                    <option value="Evening">Evening (After 6 PM)</option>
                    <option value="Overnight">Overnight</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Tell us about your pets
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full min-h-32"
                  placeholder="Let us know about your pets and what services you're interested in."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-pet-orange hover:bg-pet-orange/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
