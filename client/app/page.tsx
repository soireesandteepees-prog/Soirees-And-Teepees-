'use client';

import Link from 'next/link';
import Header  from '@/components/header';
import { Herosection } from '@/components/herosection';
import { Services } from '@/components/services';
import { GalleryPreview } from '@/components/galleryPreview';
import { Footer } from '@/components/footer';
import { ConfettiBackground } from '@/components/confettiBackground';
import { WhyChooseUs } from '@/components/why_choose_us';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <ConfettiBackground/>
      <Herosection />
      <WhyChooseUs/>

      {/* <GalleryPreview/> */}

      <section className="relative py-24 text-white text-center px-6 bg-[linear-gradient(to_right,#FF6FA3,#FFDD57),url('/festive-background.svg')] bg-cover bg-blend-overlay bg-repeat">
      <h3 className="text-4xl font-heading">Ready to Plan Something Magical?</h3>
      <p className="mt-4 max-w-xl mx-auto text-lg font-body">Let’s help you create a celebration full of joy, colors, and unforgettable memories!</p>
      <button className="mt-8 bg-white text-bloomPink font-semibold px-8 py-3 rounded-full hover:scale-105 transition">
        Get Started 🎉
      </button>
    </section>
    </div>
  );
}
