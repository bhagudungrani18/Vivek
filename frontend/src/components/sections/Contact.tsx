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

          {/* Contact Form */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="premium-card rounded-3xl p-6 sm:p-8">
              <h3 className="font-heading text-xl sm:text-2xl font-semibold text-text-dark mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-text-muted text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl bg-ivory border border-cream-dark focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-text-dark placeholder:text-text-muted/50"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-text-muted text-sm font-medium mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, phone: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl bg-ivory border border-cream-dark focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-text-dark placeholder:text-text-muted/50"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-text-muted text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, message: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl bg-ivory border border-cream-dark focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-text-dark placeholder:text-text-muted/50 resize-none"
                    placeholder="Write your message here..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full btn-royal flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle size={18} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status message */}
                {responseMessage && (
                  <p
                    className={`text-sm text-center ${
                      status === "success" ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {responseMessage}
                  </p>
                )}
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
