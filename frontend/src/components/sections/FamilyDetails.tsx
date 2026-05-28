"use client";

import { biodata } from "@/lib/data";
import AnimatedSection from "@/components/AnimatedSection";
import SectionDivider from "@/components/SectionDivider";
import { User, Heart, Users, MapPin } from "lucide-react";

const familyMembers = [
  {
    ...biodata.family.father,
    icon: User,
    description: "Head of the family, guiding with wisdom and love",
  },
  {
    ...biodata.family.mother,
    icon: Heart,
    description: "The heart of the home, nurturing with care",
  },
  {
    ...biodata.family.brother,
    icon: Users,
    description: "Supportive brother, partner in all walks of life",
  },
];

export default function FamilyDetails() {
  return (
    <section id="family" className="py-16 sm:py-24 bg-ivory">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <AnimatedSection className="text-center mb-12 sm:mb-16">
          <p className="gujarati-text text-gold text-sm sm:text-base mb-2 tracking-wider">
            પરિવાર
          </p>
          <h2 className="section-heading text-3xl sm:text-4xl md:text-5xl text-text-dark mb-3">
            Family <span className="text-maroon-gradient">Details</span>
          </h2>
          <p className="text-text-muted text-sm sm:text-base max-w-md mx-auto">
            Meet the Rupani family — rooted in values and tradition
          </p>
        </AnimatedSection>

        <SectionDivider />

        {/* Family Members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 mt-8 sm:mt-12">
          {familyMembers.map((member, index) => (
            <AnimatedSection key={member.name} delay={index * 0.15}>
              <div className="premium-card rounded-3xl p-6 sm:p-8 text-center h-full group">
                {/* Icon circle */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-5 rounded-full bg-gradient-to-br from-maroon/10 via-cream to-gold/10 flex items-center justify-center border-2 border-gold/20 group-hover:border-gold/40 transition-all duration-300">
                  <member.icon
                    size={28}
                    className="text-maroon group-hover:text-maroon-dark transition-colors"
                  />
                </div>

                {/* Relation */}
                <p className="text-gold text-xs sm:text-sm uppercase tracking-widest font-semibold mb-2">
                  {member.relation}
                </p>

                {/* Name */}
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-text-dark mb-3 leading-tight">
                  {member.name}
                </h3>

                {/* Description */}
                <p className="text-text-muted text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Native Place */}
        <AnimatedSection className="mt-8 sm:mt-10" delay={0.45}>
          <div className="premium-card rounded-2xl p-5 sm:p-6 flex items-center justify-center gap-3 max-w-md mx-auto">
            <MapPin size={20} className="text-maroon flex-shrink-0" />
            <div>
              <p className="text-text-muted text-xs uppercase tracking-wider mb-0.5">
                Native Place
              </p>
              <p className="text-text-dark font-heading text-lg font-semibold">
                {biodata.family.nativePlace}
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
