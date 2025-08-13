'use client';

import Link from 'next/link';
import Header  from '@/components/header';
import { Herosection } from '@/components/herosection';
import { Services } from '@/components/services';
import { GalleryPreview } from '@/components/galleryPreview';
import { Footer } from '@/components/footer';
import { ConfettiBackground } from '@/components/confettiBackground';
import { WhyChooseUs } from '@/components/why_choose_us';
import { CallToAction } from '@/components/call_to_action';

export default function Home() {
  return (
    <div className="relative bg-[#FBEDE6] min-h-screen">
      <ConfettiBackground/>
      <Herosection />
      <WhyChooseUs/>
      {/* <GalleryPreview/> */}
      <CallToAction/>
    </div>
  );
}
