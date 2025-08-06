'use client';
import Link from 'next/link'
import { motion } from 'framer-motion';
import { GalleryPreview } from '@/components/galleryPreview';
import { HeroImageSlider } from "./heroImageSlider";

export const Herosection = () => {
    return (
      <motion.section
        className=" text-white pt-6 pb-5 text-center px-4 bg-[url('/festive-background.svg')] bg-cover bg-repeat"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="pb-5 relative flex justify-center">
          <HeroImageSlider />
        </div>
        <h1 className="text-5xl text-bloomPink md:text-6xl font-heading drop-shadow-lg">Make Every Party Magical ✨</h1>
        <p className="mt-6 text-skyBlue text-lg md:text-xl max-w-2xl mx-auto font-body">
          Discover beautiful teepee setups, fun-filled themes, and unforgettable moments.
        </p>
        <motion.button
            whileHover={{ scale: 1.1 }}
            className="mt-5 bg-bloomPink hover:bg-pink-500 text-white px-8 py-3 rounded-full font-semibold text-lg transition"
          >
            <Link href='/booking'>
                Book a Party
            </Link>
        </motion.button>

        <GalleryPreview/>
      </motion.section>
    )
}