"use client";

import { biodata } from "@/lib/data";
import AnimatedSection from "@/components/AnimatedSection";
import SectionDivider from "@/components/SectionDivider";
import { User, MapPin } from "lucide-react";

export default function MaternalDetails() {
  return (
    <section id="maternal" className="py-16 sm:py-20 bg-cream/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <AnimatedSection className="text-center mb-10 sm:mb-12">
          <p className="gujarati-text text-gold text-sm sm:text-base mb-2 tracking-wider">
            મામાનું ઘર
          </p>
          <h2 className="section-heading text-3xl sm:text-4xl md:text-5xl text-text-dark mb-3">
            Maternal <span className="text-maroon-gradient">Details</span>
          </h2>
        </AnimatedSection>

        <SectionDivider />

        {/* Maternal Info Card */}
        <AnimatedSection className="mt-8 sm:mt-10">
          <div className="premium-card rounded-3xl p-6 sm:p-8 md:p-10 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
              {/* Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-maroon/10 via-cream to-gold/10 flex items-center justify-center border-2 border-gold/20 flex-shrink-0">
                <User size={28} className="text-maroon" />
              </div>

              {/* Details */}
              <div className="text-center sm:text-left space-y-4 flex-1">
                {/* Uncle */}
                <div>
                  <p className="text-gold text-xs uppercase tracking-widest font-semibold mb-1">
                    {biodata.maternal.uncle.relation}
                  </p>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-text-dark">
                    {biodata.maternal.uncle.name}
                  </h3>
                </div>

                {/* Place */}
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <MapPin size={16} className="text-maroon" />
                  <p className="text-text-body text-sm sm:text-base">
                    {biodata.maternal.place}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
