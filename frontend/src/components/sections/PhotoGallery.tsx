"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { biodata } from "@/lib/data";
import AnimatedSection from "@/components/AnimatedSection";
import SectionDivider from "@/components/SectionDivider";
import Lightbox from "@/components/Lightbox";
import { Expand } from "lucide-react";

export default function PhotoGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % biodata.gallery.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + biodata.gallery.length) % biodata.gallery.length
    );
  }, []);

  return (
    <>
      <section id="gallery" className="py-16 sm:py-24 bg-ivory">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section heading */}
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <p className="gujarati-text text-gold text-sm sm:text-base mb-2 tracking-wider">
              ફોટો ગેલેરી
            </p>
            <h2 className="section-heading text-3xl sm:text-4xl md:text-5xl text-text-dark mb-3">
              Photo <span className="text-maroon-gradient">Gallery</span>
            </h2>
            <p className="text-text-muted text-sm sm:text-base max-w-md mx-auto">
              A glimpse into the life of Vivek
            </p>
          </AnimatedSection>

          <SectionDivider />

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 mt-8 sm:mt-12">
            {biodata.gallery.map((image, index) => (
              <AnimatedSection
                key={image.src}
                delay={index * 0.1}
                className={`${index === 0 ? "col-span-2 md:col-span-1 md:row-span-2" : ""
                  }`}
              >
                <div
                  className="group relative cursor-pointer img-hover-zoom rounded-2xl overflow-hidden gold-frame"
                  onClick={() => openLightbox(index)}
                >
                  <div
                    className={`relative ${index === 0
                      ? "aspect-[3/4] md:aspect-[3/4]"
                      : "aspect-square"
                      }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes={
                        index === 0
                          ? "(max-width: 768px) 100vw, 33vw"
                          : "(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
                      }
                      priority={index === 0}
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-text-dark/70 via-text-dark/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end justify-between p-4">
                      <p className="text-white font-heading text-sm sm:text-base font-medium">
                        {image.caption}
                      </p>
                      <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
                        <Expand size={16} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        images={biodata.gallery}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </>
  );
}
