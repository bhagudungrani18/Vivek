"use client";

import { useState } from "react";
import { biodata } from "@/lib/data";
import { submitContactForm } from "@/lib/api";
import AnimatedSection from "@/components/AnimatedSection";
import SectionDivider from "@/components/SectionDivider";
import { Phone, MessageCircle, Mail, Send, CheckCircle, Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        setStatus("success");
        setResponseMessage(result.message);
        setFormData({ name: "", phone: "", message: "" });
      } else {
        setStatus("error");
        setResponseMessage("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setResponseMessage("Something went wrong. Please try again.");
    }

    // Reset status after 5 seconds
    setTimeout(() => {
      setStatus("idle");
      setResponseMessage("");
    }, 5000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-ivory relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 hero-bg-pattern opacity-50" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <AnimatedSection className="text-center mb-12 sm:mb-16">
          <p className="gujarati-text text-gold text-sm sm:text-base mb-2 tracking-wider">
            સંપર્ક કરો
          </p>
          <h2 className="section-heading text-3xl sm:text-4xl md:text-5xl text-text-dark mb-3">
            Get In <span className="text-maroon-gradient">Touch</span>
          </h2>
          <p className="text-text-muted text-sm sm:text-base max-w-md mx-auto">
            We would be delighted to hear from you. Reach out to the family.
          </p>
        </AnimatedSection>

        <SectionDivider />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mt-8 sm:mt-12">
          {/* Contact Info */}
          <AnimatedSection direction="left">
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="space-y-4">
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-text-dark mb-4">
                  Quick Connect
                </h3>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${biodata.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl premium-card group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <MessageCircle size={22} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-text-muted text-xs uppercase tracking-wider mb-0.5">
                      WhatsApp
                    </p>
                    <p className="text-text-dark font-semibold">{biodata.contact.phone}</p>
                  </div>
                </a>

                {/* Call */}
                <a
                  href={`tel:${biodata.contact.phone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl premium-card group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-maroon/10 flex items-center justify-center group-hover:bg-maroon/20 transition-colors">
                    <Phone size={22} className="text-maroon" />
                  </div>
                  <div>
                    <p className="text-text-muted text-xs uppercase tracking-wider mb-0.5">
                      Call Us
                    </p>
                    <p className="text-text-dark font-semibold">{biodata.contact.phone}</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${biodata.contact.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl premium-card group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Mail size={22} className="text-gold-dark" />
                  </div>
                  <div>
                    <p className="text-text-muted text-xs uppercase tracking-wider mb-0.5">
                      Email
                    </p>
                    <p className="text-text-dark font-semibold">{biodata.contact.email}</p>
                  </div>
                </a>
              </div>

              {/* Family Note */}
              <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-maroon/5 border border-maroon/10">
                <p className="text-text-body text-sm sm:text-base italic font-heading leading-relaxed">
                  &ldquo;We welcome your enquiry with open hearts. Feel free to reach out to the
                  Rupani family for any further details.&rdquo;
                </p>
                <p className="text-gold text-xs mt-3 uppercase tracking-widest font-semibold">
                  — Rupani Family, {biodata.family.nativePlace}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
