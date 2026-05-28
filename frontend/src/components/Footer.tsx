"use client";

import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-cream border-t border-gold/20">
      {/* Gold top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="text-center space-y-4">
          {/* Decorative SVG */}
          <div className="flex justify-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              className="text-gold opacity-60"
            >
              <path
                d="M20 4L22.5 15H34L24.5 22L27 33L20 26L13 33L15.5 22L6 15H17.5L20 4Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <p className="text-text-muted text-sm sm:text-base font-heading italic">
            With Blessings of the Almighty
          </p>

          {/* Made with love */}
          <div className="flex items-center justify-center gap-2 text-text-muted text-sm pt-4">
            <span>Made with</span>
            <Heart size={14} className="text-maroon fill-maroon" />
            <span>for the Rupani Family</span>
          </div>

          {/* Year */}
          <p className="text-text-muted/50 text-xs">
            © {new Date().getFullYear()} — All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
