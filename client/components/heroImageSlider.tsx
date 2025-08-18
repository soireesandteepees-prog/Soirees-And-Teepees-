// components/HeroImageSlider.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ConfettiBackground } from '@/components/confettiBackground';
import {image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22, image23, image24, image25, image26, image27, image28} from '../public/assets/images/index';
  const images = [
    image13,
    image28,
    image10,
    image4
  ]

export const HeroImageSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full md:w-1/2 h-[400px] rounded-3xl overflow-hidden shadow-xl">
      <ConfettiBackground/>
      <AnimatePresence mode="wait">
        <motion.img
          key={images[current].blurDataURL}
          src={images[current].src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
    </div>
  );
};
