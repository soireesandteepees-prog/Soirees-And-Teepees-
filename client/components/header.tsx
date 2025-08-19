'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {logo} from '../public/assets/images/index'
import { MdOutlineCancel } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleModal = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 w-full bg-[#fce7e3] backdrop-blur-sm shadow-lg py-3 px-4 md:px-10"
    >
      <nav className="flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-12 h-12 rounded-xl bg-[#fce7e3] shadow-inner flex items-center justify-center">
            <Image src={logo} alt="Logo" className="w-10 h-10 rounded-xl" />
          </div>
          <span className="font-playfair italic text-[#4c1d18] font-bold text-sm leading-tight">
            SOIRÉES <br /> <span className="text-xs tracking-wider">& TEEPEES</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-[#4c1d18] font-medium italic">
          {['Home', 'About', 'Services', 'Gallery', 'Portfolio', 'Contact'].map((text, idx) => (
            <Link
              key={idx}
              href={`/${text.toLowerCase() === 'home' ? '' : text.toLowerCase()}`}
              className="hover:text-[#d6665b] transition-colors duration-300"
            >
              {text}
            </Link>
          ))}
          <Link
            href="/booking"
            className="bg-[#d6665b] text-white px-6 py-2 rounded-full hover:bg-[#b7534b] transition-colors"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={handleModal} className="md:hidden text-2xl text-[#b7534b]">
          {isMenuOpen ? <MdOutlineCancel /> : <i className="ri-menu-line"></i>}
        </button>
      </nav>

      {/* Mobile Nav Links */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-3 pb-4 md:hidden flex flex-col items-center gap-6 font-medium italic text-lg text-[#4c1d18]"
          >
            {['Home', 'About', 'Services', 'Gallery', 'Portfolio', 'Contact'].map((text, idx) => (
              <Link
                key={idx}
                href={`/${text.toLowerCase() === 'home' ? '' : text.toLowerCase()}`}
                onClick={handleModal}
                className="hover:text-[#d6665b] transition-colors duration-300"
              >
                {text}
              </Link>
            ))}
            <Link
              href="/booking"
              onClick={handleModal}
              className="bg-[#d6665b] text-white px-6 py-2 rounded-full hover:bg-[#b7534b] transition-colors"
            >
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
