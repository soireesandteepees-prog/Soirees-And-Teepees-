'use client';
import Link from "next/link";
import { useEffect, useState } from "react";

export const Herosection = () => {
    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateScreen = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    updateScreen(); // Run on mount
    window.addEventListener('resize', updateScreen);

    return () => window.removeEventListener('resize', updateScreen);

  }, [])
    return (
        <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-no-repeat md:bg-top md:bg-repeat-round md:size-[50% auto]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 211, 184, 0.01), rgba(255, 211, 184, 0.2)), url('/assets/images/herosection.jpg')`,
          backgroundSize: isMobile ? '' : "50% auto"
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Magical Slumber Parties
              <span className="block text-primary_button">& Teepee Dreams</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Create unforgettable memories with our luxury slumber party experiences. 
              From dreamy teepees to magical setups, we make every sleepover extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking" className="bg-primary_button text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-secondary_button transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap">
                Book Your Party
              </Link>
              <Link href="/gallery" className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/30 transition-all border border-white/30 cursor-pointer whitespace-nowrap">
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
}