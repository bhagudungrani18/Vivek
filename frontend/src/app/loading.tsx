export default function Loading() {
  return (
    <div className="fixed inset-0 bg-ivory z-[999] flex flex-col items-center justify-center">
      {/* Mandala spinner */}
      <div className="relative">
        <div className="loading-mandala" />
        <div className="absolute inset-0 loading-mandala" style={{ animationDirection: "reverse", opacity: 0.3 }} />
      </div>

      {/* Text */}
      <p className="mt-6 text-gold font-heading text-lg tracking-wider animate-pulse">
        Loading...
      </p>
      <p className="mt-1 gujarati-text text-text-muted text-sm">
        શુભ વિવાહ
      </p>
    </div>
  );
}
