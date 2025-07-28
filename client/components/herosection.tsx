'use client';
import Link from "next/link";
import Image from "next/image";
import {image2, image28} from '../public/assets/images/index';

export const Herosection = () => {
    return (
        <div className="relative mt-[20px]">
          <div className="relative flex flex-col items-center justify-center">
            <div className="relative w-[95%] md:w-[80%] h-[50vh] md:h-[80vh] rounded-lg">
              <Image 
                src={image28}
                alt='herosection'
                fill
                className="rounded-lg"
              />
            </div>

            <div className="container mx-auto px-6 text-center">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-bold text-primary_button leading-tight italic">
                  Magical Slumber Parties
                  <span className="block text-primary_button text-2xl">& Teepee Dreams</span>
                </h1>
                <p className="text-lg md:text-2xl text-black/90 mb-4 leading-relaxed italic">
                  Create unforgettable memories with our luxury slumber party experiences. 
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <Link href="/booking" className="bg-primary_button text-white black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-secondary_button transition-all transform hover:scale-105 cursor-pointer blackspace-nowrap">
                    Book Your Party
                  </Link>
                  <Link href="/gallery" className="bg-black/20 backdrop-blur-sm text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-black/30 transition-all border cursor-pointer whitespace-nowrap">
                    View Gallery
                  </Link>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
}