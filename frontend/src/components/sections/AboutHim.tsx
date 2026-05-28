"use client";

import { biodata } from "@/lib/data";
import AnimatedSection from "@/components/AnimatedSection";
import SectionDivider from "@/components/SectionDivider";
import {
  Heart,
  Home,
  Music,
  Compass,
  Handshake,
  Sparkles,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  heart: Heart,
  home: Home,
  music: Music,
  compass: Compass,
  handshake: Handshake,
  sparkles: Sparkles,
};

export default function AboutHim() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-cream/50 mandala-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <AnimatedSection className="text-center mb-12 sm:mb-16">
          <p className="gujarati-text text-gold text-sm sm:text-base mb-2 tracking-wider">
            વ્યક્તિત્વ
          </p>
          <h2 className="section-heading text-3xl sm:text-4xl md:text-5xl text-text-dark mb-3">
            About <span className="text-maroon-gradient">Vivek</span>
          </h2>
          <p className="text-text-muted text-sm sm:text-base max-w-md mx-auto">
            A glimpse into his personality and values
          </p>
        </AnimatedSection>

        <SectionDivider />

        {/* Quote Card */}
        <AnimatedSection className="mt-8 sm:mt-12 mb-12 sm:mb-16">
          <div className="relative max-w-3xl mx-auto">
            {/* Decorative quotes */}
            <div className="absolute -top-4 -left-2 sm:-top-6 sm:-left-4 text-gold/20 font-heading text-6xl sm:text-8xl leading-none select-none">
              &ldquo;
            </div>
            <div className="absolute -bottom-8 -right-2 sm:-bottom-10 sm:-right-4 text-gold/20 font-heading text-6xl sm:text-8xl leading-none select-none">
              &rdquo;
            </div>

            <div className="premium-card rounded-3xl p-6 sm:p-10 text-center">
              <p className="font-heading text-lg sm:text-xl md:text-2xl text-text-dark italic leading-relaxed">
                {biodata.about.quote}
              </p>
              <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2">
                <div className="h-px w-8 bg-gold/40" />
                <span className="text-gold text-sm font-medium tracking-widest uppercase">
                  Vivek
                </span>
                <div className="h-px w-8 bg-gold/40" />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Description */}
        <AnimatedSection className="max-w-3xl mx-auto mb-12 sm:mb-16" delay={0.2}>
          <p className="text-text-body text-base sm:text-lg leading-relaxed sm:leading-loose text-center">
            {biodata.about.description}
          </p>
        </AnimatedSection>

        {/* Personality Traits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {biodata.about.traits.map((trait, index) => {
            const IconComponent = iconMap[trait.icon] || Sparkles;
            return (
              <AnimatedSection key={trait.label} delay={index * 0.1}>
                <div className="premium-card rounded-2xl p-5 sm:p-6 text-center h-full group">
                  {/* Icon */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-maroon/8 to-gold/8 flex items-center justify-center group-hover:from-maroon/15 group-hover:to-gold/15 transition-all duration-300">
                    <IconComponent
                      size={24}
                      className="text-maroon group-hover:text-maroon-dark transition-colors"
                    />
                  </div>

                  {/* Label */}
                  <h3 className="font-heading text-lg sm:text-xl font-semibold text-text-dark mb-2">
                    {trait.label}
                  </h3>

                  {/* Description */}
                  <p className="text-text-muted text-sm leading-relaxed">
                    {trait.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
