"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Details", href: "#personal" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Family", href: "#family" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
    );

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Observe sections
    const sectionIds = ["hero", "personal", "gallery", "about", "family", "maternal", "contact"];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-ivory/80 backdrop-blur-xl shadow-[0_2px_20px_rgba(197,165,90,0.1)] border-b border-gold/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo / Name */}
            <button
              onClick={() => scrollTo("#hero")}
              className="flex items-center gap-2 group"
            >
              <span className="font-heading text-xl sm:text-2xl font-bold text-maroon group-hover:text-maroon-dark transition-colors">
                VR
              </span>
              <span className="hidden sm:inline text-sm text-text-muted font-body">
                |
              </span>
              <span className="hidden sm:inline text-sm text-text-muted font-body tracking-wide">
                Rupani Family
              </span>
            </button>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                      isActive
                        ? "text-maroon"
                        : "text-text-muted hover:text-text-dark"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-maroon/8 rounded-full border border-maroon/15"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-text-dark hover:text-maroon transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-text-dark/30 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-ivory shadow-2xl"
            >
              <div className="pt-20 px-6">
                <div className="space-y-1">
                  {navLinks.map((link, i) => {
                    const isActive = activeSection === link.href.slice(1);
                    return (
                      <motion.button
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        onClick={() => scrollTo(link.href)}
                        className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                          isActive
                            ? "text-maroon bg-maroon/8 border-l-3 border-maroon"
                            : "text-text-body hover:text-maroon hover:bg-cream"
                        }`}
                      >
                        {link.label}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Decorative footer in mobile menu */}
                <div className="mt-8 pt-6 border-t border-gold/20">
                  <p className="text-sm text-text-muted text-center font-heading italic">
                    Rupani Family
                  </p>
                  <p className="text-xs text-gold text-center mt-1 gujarati-text">
                    ગુજરાતી સંસ્કાર
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
