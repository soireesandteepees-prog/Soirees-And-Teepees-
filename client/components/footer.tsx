'use client';
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                    <div className="flex items-center space-x-2 mb-6">
                        <div className="w-8 h-8 bg-[#FFD3B8] rounded-full flex items-center justify-center">
                        <i className="ri-tent-line text-white text-lg"></i>
                        </div>
                        <span className="text-xl font-pacifico text-[#FFD3B8]">SOIREES & TEEPEES</span>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                        Creating memorable slumber party experiences that you will treasure forever.
                    </p>
                    </div>
                    <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <div className="space-y-2">
                        <Link href="/about" className="block text-gray-400 hover:text-[#FFD3B8] transition-colors cursor-pointer">About Us</Link>
                        <Link href="/services" className="block text-gray-400 hover:text-[#FFD3B8] transition-colors cursor-pointer">Services</Link>
                        <Link href="/gallery" className="block text-gray-400 hover:text-[#FFD3B8] transition-colors cursor-pointer">Gallery</Link>
                        <Link href="/booking" className="block text-gray-400 hover:text-[#FFD3B8] transition-colors cursor-pointer">Book Now</Link>
                    </div>
                    </div>
                    <div>
                    <h3 className="text-lg font-semibold mb-4">Services</h3>
                    <div className="space-y-2">
                        <p className="text-gray-400">Slumber Parties</p>
                        <p className="text-gray-400">Luxe Picnic</p>
                        <p className="text-gray-400">Bridal/Baby Shower</p>
                        <p className="text-gray-400">Backyard Movie Night</p>
                    </div>
                    </div>
                    <div>
                    <h3 className="text-lg font-semibold mb-4">Contact</h3>
                    <div className="space-y-2 text-gray-400">
                        <p className="flex items-center">
                        <i className="ri-phone-line w-5 h-5 mr-2"></i>
                         240-930-4524
                        </p>
                        <p className="flex items-center">
                        <i className="ri-mail-line w-5 h-5 mr-2"></i>
                        soireesandteepees@gmail.com
                        </p>
                        <p className="flex items-center">
                        <i className="ri-map-pin-line w-5 h-5 mr-2"></i>
                        Hanover, Maryland  21076
                        </p>
                    </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                    <p className="text-gray-400">© 2024 Soirees & Teepees. All rights reserved.</p>
                </div>
            </div>
      </footer>
    )
}