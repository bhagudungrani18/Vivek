"use client";

import { biodata } from "@/lib/data";
import AnimatedSection from "@/components/AnimatedSection";
import SectionDivider from "@/components/SectionDivider";
import {
  User,
  Calendar,
  Ruler,
  Weight,
  GraduationCap,
  Briefcase,
  Music,
  MapPin,
  Home,
  Sparkles,
} from "lucide-react";

const details = [
  { icon: User, label: "Full Name", value: biodata.name },
  { icon: Calendar, label: "Date of Birth", value: biodata.dob },
  { icon: Sparkles, label: "Caste", value: biodata.caste },
  { icon: Ruler, label: "Height", value: biodata.height },
  { icon: Weight, label: "Weight", value: biodata.weight },
  { icon: GraduationCap, label: "Qualification", value: biodata.qualification },
  { icon: Briefcase, label: "Occupation", value: biodata.occupation },
  { icon: Music, label: "Hobbies", value: biodata.hobbies.join(", ") },
  { icon: MapPin, label: "Address", value: biodata.address },
  { icon: Home, label: "Native Place", value: biodata.nativePlace },
];

export default function PersonalDetails() {
  return (
    <section id="personal" className="py-16 sm:py-24 bg-cream/50 mandala-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <AnimatedSection className="text-center mb-12 sm:mb-16">
          <p className="gujarati-text text-gold text-sm sm:text-base mb-2 tracking-wider">
            વ્યક્તિગત વિગતો
          </p>
          <h2 className="section-heading text-3xl sm:text-4xl md:text-5xl text-text-dark mb-3">
            Personal <span className="text-maroon-gradient">Details</span>
          </h2>
          <p className="text-text-muted text-sm sm:text-base max-w-md mx-auto">
            Know more about Vivek — his background, education, and interests
          </p>
        </AnimatedSection>

        <SectionDivider />

        {/* Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12">
          {details.map((detail, index) => (
            <AnimatedSection
              key={detail.label}
              delay={index * 0.08}
              className="group"
            >
              <div className="premium-card rounded-2xl p-5 sm:p-6 flex items-start gap-4 h-full">
                {/* Icon */}
                <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-maroon/10 to-gold/10 flex items-center justify-center group-hover:from-maroon/20 group-hover:to-gold/20 transition-all duration-300">
                  <detail.icon
                    size={20}
                    className="text-maroon group-hover:text-maroon-dark transition-colors"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-text-muted text-xs sm:text-sm uppercase tracking-wider mb-1 font-medium">
                    {detail.label}
                  </p>
                  <p className="text-text-dark text-base sm:text-lg font-semibold font-heading leading-snug">
                    {detail.value}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
