'use client';
import Link from "next/link";
import Image from "next/image";
import { MdOutlineCancel } from "react-icons/md";
import logo from "../public/assets/images/logo.jpg"; // Adjust the path as necessary
import { useState } from "react";
      
export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleModal = () => {
      setIsMenuOpen(!isMenuOpen); 
    }

return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-50">
        <div className="container mx-auto px-2 py-2">
            <nav className="flex items-center justify-between">
            <div >
                <Link href='/' className="flex items-center space-x-1">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                        <Image src={logo} alt="Logo" className="w-10 h-10 rounded-xl" />
                    </div>
                    <span className="text-sm font-semibold font-cinzel">SOIREES & TEEPEES</span>
                </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-gray-700 hover:text-primary_button transition-colors cursor-pointer">Home</Link>
                <Link href="/about" className="text-gray-700 hover:text-primary_button transition-colors cursor-pointer">About</Link>
                <Link href="/services" className="text-gray-700 hover:text-primary_button transition-colors cursor-pointer">Services</Link>
                <Link href="/gallery" className="text-gray-700 hover:text-primary_button transition-colors cursor-pointer">Gallery</Link>
                <Link href="/portfolio" className="text-gray-700 hover:text-primary_button transition-colors cursor-pointer">Portfolio</Link>
                <Link href="/contact" className="text-gray-700 hover:text-primary_button transition-colors cursor-pointer">Contact</Link>
                <Link href="/booking" className="bg-primary_button text-white px-6 py-2 rounded-full hover:bg-secondary_button transition-colors cursor-pointer whitespace-nowrap">Book Now</Link>
            </div>
            <button onClick={handleModal} className="md:hidden w-8 h-8 flex items-center justify-center">
                {isMenuOpen ? <MdOutlineCancel className="text-2xl text-gray-700"/> : <i className="ri-menu-line text-xl text-gray-700"></i>}
            </button>
            </nav>
        </div>


        {
            isMenuOpen &&
        <div onClick={handleModal} className="flex justify-center py-2">
            <nav className="flex items-center text-center justify-between align-middle">
                <div className="flex flex-col items-center space-y-6 space-x-8">
                    <button onClick={handleModal}>
                        <Link href="/" className="text-gray-700 hover:text-primary_button pl-6 transition-colors cursor-pointer">Home</Link>
                    </button>

                    <button onClick={handleModal}>
                        <Link href="/about" className="text-gray-700 hover:text-primary_button transition-colors cursor-pointer">About</Link>
                    </button>

                    <button onClick={handleModal}>
                        <Link href="/services" className="text-gray-700 hover:text-primary_button transition-colors cursor-pointer">Services</Link>
                    </button>

                    <button onClick={handleModal}>
                        <Link href="/gallery" className="text-gray-700 hover:text-primary_button transition-colors cursor-pointer">Gallery</Link>
                    </button>

                    <button onClick={handleModal}>
                        <Link href="/portfolio" className="text-gray-700 hover:text-primary_button transition-colors cursor-pointer">Portfolio</Link>
                    </button>

                    <button onClick={handleModal}>
                        <Link href="/contact" className="text-gray-700 hover:text-primary_button transition-colors cursor-pointer">Contact</Link>
                    </button>
                </div>
            </nav>
        </div>
        }
    </header>
)}