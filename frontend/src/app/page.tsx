"use client";

import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import PersonalDetails from "@/components/sections/PersonalDetails";
import PhotoGallery from "@/components/sections/PhotoGallery";
import AboutHim from "@/components/sections/AboutHim";
import FamilyDetails from "@/components/sections/FamilyDetails";
import MaternalDetails from "@/components/sections/MaternalDetails";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PersonalDetails />
        <PhotoGallery />
        <AboutHim />
        <FamilyDetails />
        <MaternalDetails />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
