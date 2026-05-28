"use client";

export default function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center py-8 ${className}`}>
      <div className="flex items-center gap-4 max-w-md w-full px-4">
        {/* Left decorative line */}
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/40 to-gold/60" />

        {/* Center ornament — stylized mandala/flower */}
        <div className="relative flex items-center justify-center">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gold"
          >
            {/* Outer petals */}
            <path
              d="M24 4C24 4 28 12 28 16C28 18.2 26.2 20 24 20C21.8 20 20 18.2 20 16C20 12 24 4 24 4Z"
              fill="currentColor"
              opacity="0.6"
            />
            <path
              d="M24 44C24 44 20 36 20 32C20 29.8 21.8 28 24 28C26.2 28 28 29.8 28 32C28 36 24 44 24 44Z"
              fill="currentColor"
              opacity="0.6"
            />
            <path
              d="M4 24C4 24 12 20 16 20C18.2 20 20 21.8 20 24C20 26.2 18.2 28 16 28C12 28 4 24 4 24Z"
              fill="currentColor"
              opacity="0.6"
            />
            <path
              d="M44 24C44 24 36 28 32 28C29.8 28 28 26.2 28 24C28 21.8 29.8 20 32 20C36 20 44 24 44 24Z"
              fill="currentColor"
              opacity="0.6"
            />
            {/* Diagonal petals */}
            <path
              d="M10 10C10 10 16 14 18 16C19.6 17.6 19.6 20.2 18 21.8C16.4 23.4 13.8 23.4 12.2 21.8C10.2 19.8 10 10 10 10Z"
              fill="currentColor"
              opacity="0.4"
            />
            <path
              d="M38 38C38 38 32 34 30 32C28.4 30.4 28.4 27.8 30 26.2C31.6 24.6 34.2 24.6 35.8 26.2C37.8 28.2 38 38 38 38Z"
              fill="currentColor"
              opacity="0.4"
            />
            <path
              d="M38 10C38 10 34 16 32 18C30.4 19.6 27.8 19.6 26.2 18C24.6 16.4 24.6 13.8 26.2 12.2C28.2 10.2 38 10 38 10Z"
              fill="currentColor"
              opacity="0.4"
            />
            <path
              d="M10 38C10 38 14 32 16 30C17.6 28.4 20.2 28.4 21.8 30C23.4 31.6 23.4 34.2 21.8 35.8C19.8 37.8 10 38 10 38Z"
              fill="currentColor"
              opacity="0.4"
            />
            {/* Center circle */}
            <circle cx="24" cy="24" r="5" fill="currentColor" opacity="0.8" />
            <circle cx="24" cy="24" r="3" fill="currentColor" />
          </svg>
        </div>

        {/* Right decorative line */}
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gold/40 to-gold/60" />
      </div>
    </div>
  );
}
