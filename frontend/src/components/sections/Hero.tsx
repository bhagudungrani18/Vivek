"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { biodata } from "@/lib/data";
import { ChevronDown, Download, Phone, ScrollText } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ivory"
    >
      {/* Background decorative patterns */}
      <div className="absolute inset-0 hero-bg-pattern" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mounted &&
          [...Array(12)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${8 + Math.random() * 12}s`,
                animationDelay: `${Math.random() * 5}s`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                opacity: 0.2 + Math.random() * 0.3,
              }}
            />
          ))}
      </div>

      {/* Decorative corner ornaments */}
      <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 opacity-10">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-gold">
          <path
            d="M0 0 L200 0 L200 20 Q100 20 20 100 L20 200 L0 200 Z"
            fill="currentColor"
          />
          <path
            d="M0 0 L160 0 L160 10 Q80 10 10 80 L10 160 L0 160 Z"
            fill="currentColor"
            opacity="0.5"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-48 sm:h-48 opacity-10 rotate-180">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-gold">
          <path
            d="M0 0 L200 0 L200 20 Q100 20 20 100 L20 200 L0 200 Z"
            fill="currentColor"
          />
          <path
            d="M0 0 L160 0 L160 10 Q80 10 10 80 L10 160 L0 160 Z"
            fill="currentColor"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-20 pb-16 text-center">
        {/* Portrait Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8 sm:mb-10 flex justify-center"
        >
          <div className="relative">
            {/* Outer decorative ring */}
            <div className="absolute -inset-3 sm:-inset-4 rounded-full border-2 border-gold/30 animate-spin-slow" />
            <div className="absolute -inset-1.5 sm:-inset-2 rounded-full border border-gold/50" />

            {/* Image container */}
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden gold-frame">
              <Image
                src={biodata.gallery[0].src}
                alt={biodata.name}
                fill
                className="object-cover"
                priority
                loading="eager"
                sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, 288px"
              />
            </div>

            {/* Decorative dots */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-gold rounded-full animate-pulse-gold" />
            <div className="absolute -bottom-1 -left-3 w-3 h-3 bg-maroon/60 rounded-full animate-pulse-gold" style={{ animationDelay: "1s" }} />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6"
        >
          <span className="text-gold-gradient">{biodata.name}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="space-y-2 mb-8 sm:mb-10"
        >
          <p className="text-text-body text-base sm:text-lg md:text-xl font-light tracking-wide">
            Marriage Biodata
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <button
            onClick={() => scrollTo("personal")}
            className="btn-royal flex items-center gap-2 text-sm sm:text-base w-full sm:w-auto justify-center"
          >
            <ScrollText size={18} />
            View Biodata
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="btn-gold-outline flex items-center gap-2 text-sm sm:text-base w-full sm:w-auto justify-center"
          >
            <Phone size={18} />
            Contact Family
          </button>
          <a
            href="/Vivek Rupani.pdf.pdf"
            download
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 text-sm sm:text-base text-text-muted hover:text-maroon border border-cream-dark hover:border-maroon/30 rounded-full transition-all hover:bg-cream w-full sm:w-auto justify-center"
          >
            <Download size={18} />
            Download PDF
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-gold/60 cursor-pointer"
          onClick={() => scrollTo("personal")}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
