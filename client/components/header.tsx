'use client';
import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/images/logo.jpg"; // Adjust the path as necessary
      
export const Header = () => {
return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-2">
            <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                    <Image src={logo} alt="Logo" className="w-10 h-10 rounded-xl" />
                </div>
                <span className="text-sm font-semibold font-cinzel">SOIREES & TEEPEES</span>
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
            <button className="md:hidden w-8 h-8 flex items-center justify-center">
                <i className="ri-menu-line text-xl text-gray-700"></i>
            </button>
            </nav>
        </div>
    </header>
)}