'use client';
import Link from "next/link";
import Image from "next/image";
import {logo} from '../public/assets/images/index'


export const Footer = () => {
  return (
    <footer className="bg-[#97423b] text-[#fdf5f2] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/festive-background.svg')] bg-cover bg-no-repeat bg-blend-multiply opacity-20"></div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo Section */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-[#FFD3B8] rounded-full flex items-center justify-center shadow-md">
                <Image src={logo} alt="Logo" className="w-10 h-10 rounded-xl" />
              </div>
              <span className="text-2xl font-pacifico text-[#FFD3B8]">SOIREES & TEEPEES</span>
            </div>
            <p className="text-[#fdf5f2]/80 leading-relaxed">
              Creating memorable slumber party experiences you’ll treasure forever.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFD3B8]">Services</h3>
            <ul className="space-y-2 text-sm text-[#fdf5f2]/80">
              <li>Slumber Parties</li>
              <li>Luxe Picnic</li>
              <li>Bridal/Baby Shower</li>
              <li>Backyard Movie Night</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFD3B8]">Contact</h3>
            <ul className="space-y-3 text-sm text-[#fdf5f2]/80">
              <li className="flex items-center gap-2">
                <i className="ri-phone-line text-[#FFD3B8]"></i> 240-930-4524
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-mail-line text-[#FFD3B8]"></i> soireesandteepees@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-map-pin-line text-[#FFD3B8]"></i> Hanover, Maryland 21076
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-[#fdf5f2]/20 mt-12 pt-8 text-center text-sm text-[#fdf5f2]/60">
          © 2025 Soirees & Teepees. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
