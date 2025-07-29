'use client';
import Link from "next/link";
import Image from "next/image";
import {image2, image28} from '../public/assets/images/index';
import { motion } from 'framer-motion';
import { GalleryPreview } from '@/components/galleryPreview';
import { HeroImageSlider } from "./heroImageSlider";



export const Herosection = () => {
    return (
      <motion.section
        className=" text-white pt-6 pb-24 text-center px-4 bg-[url('/festive-background.svg')] bg-cover bg-repeat"
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
            className="mt-10 bg-bloomPink hover:bg-pink-500 text-white px-8 py-3 rounded-full font-semibold text-lg transition"
          >
          Book a Party
        </motion.button>

        <GalleryPreview/>
      </motion.section>
      //   <div className="relative mt-[20px]">
      //     <div className="relative flex flex-col items-center justify-center">
      //       <div className="relative w-[95%] md:w-[80%] h-[50vh] md:h-[80vh] rounded-lg">
      //         <Image 
      //           src={image28}
      //           alt='herosection'
      //           fill
      //           className="rounded-lg"
      //         />
      //       </div>

      //       <div className="container mx-auto px-6 text-center">
      //         <div className="max-w-4xl mx-auto">
      //           <h1 className="text-3xl md:text-5xl font-bold text-primary_button leading-tight italic">
      //             Magical Slumber Parties
      //             <span className="block text-primary_button text-2xl">& Teepee Dreams</span>
      //           </h1>
      //           <p className="text-lg md:text-2xl text-black/90 mb-4 leading-relaxed italic">
      //             Create unforgettable memories with our luxury slumber party experiences. 
      //           </p>
      //           <div className="flex flex-col md:flex-row gap-4 justify-center">
      //             <Link href="/booking" className="bg-primary_button text-white black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-secondary_button transition-all transform hover:scale-105 cursor-pointer blackspace-nowrap">
      //               Book Your Party
      //             </Link>
      //             <Link href="/gallery" className="bg-black/20 backdrop-blur-sm text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-black/30 transition-all border cursor-pointer whitespace-nowrap">
      //               View Gallery
      //             </Link>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      // </div>
    )
}