'use client';

import Link from 'next/link';
import { Header } from '@/components/header';
import { Herosection } from '@/components/herosection';
import { Services } from '@/components/services';
import { GalleryPreview } from '@/components/galleryPreview';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Herosection />
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2 italic">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We create magical experiences that your kids will remember forever</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-[#bc8783] hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#97423b] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-tent-line text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Luxury Teepees</h3>
              <p className="text-white leading-relaxed">Beautiful, comfortable teepees with premium bedding and magical lighting for the perfect sleepover experience.</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-[#bc8783] hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#97423b] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-magic-line text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Themed Experiences</h3>
              <p className="text-white leading-relaxed">From princess parties to boho chic, we customize every detail to match your child's dream theme.</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-[#bc8783] hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#97423b] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-heart-line text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Full Service</h3>
              <p className="text-white leading-relaxed">We handle everything from setup to cleanup, so you can enjoy the party stress-free.</p>
            </div>
          </div>
        </div>
      </section>

      <Services/>

      <section className="py-10 mt-10 bg-primary_background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-shadow-lg mb-6 italic ">Ready to Create Lasting Memories?</h2>
          <p className="text-xl text-shadow-lg text-white mb-8 max-w-2xl mx-auto">
            Book your dream slumber party today and give your child an unforgettable experience
          </p>
          <Link href="/booking" className="bg-primary_button text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary_button transition-colors cursor-pointer whitespace-nowrap">
            Book Your Party Now
          </Link>
        </div>
      </section>
    </div>
  );
}
