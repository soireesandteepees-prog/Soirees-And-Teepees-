
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ConfettiBackground } from '@/components/confettiBackground';
import {image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22, image23, image24, image25, image26, image27} from '../../public/assets/images/index';
import { slumber1, slumber2, slumber3, slumber4, slumber5, slumber6, slumber7, slumber8, slumber9, slumber10, slumber11, slumber12, slumber13, slumber14, slumber15, slumber16, slumber17, slumber18, slumber20 } from '@/public/assets/slumber';
import { picnic1, picnic2, picnic3, picnic4, picnic5, picnic6, picnic7, picnic8, picnic9, picnic10, picnic11, picnic12, picnic13, picnic14, picnic15, picnic16, picnic17, picnic18, picnic19, picnic20, picnic21, picnic22, picnic23, picnic24, picnic25, picnic26, picnic27, picnic28, picnic29, picnic30, picnic31, picnic32, picnic33, picnic34, picnic35, picnic36, picnic37, picnic38, picnic39 } from '@/public/assets/picnic';
import { briderShower1, briderShower2, briderShower3, briderShower4, briderShower5, briderShower6, briderShower7 } from '@/public/assets/briderShower';
import { babyShower1, babyShower2, babyShower3, babyShower4, babyShower5, babyShower6, babyShower7 } from '@/public/assets/babyShower';
import { bellTent1, bellTent2, bellTent3 } from '@/public/assets/bellTent';
import { backyard1, backyard2, backyard3, backyard4, backyard5, backyard6 } from '@/public/assets/backyardMovie';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Parties' },
    { id: 'slumber', name: 'Slumber Parties' },
    { id: 'luxe', name: 'Luxe Picnic' },
    { id: 'shower', name: 'Bridal/Baby Shower' },
    { id: 'movie', name: 'Backyard Movie Night' },
    { id: 'tent', name: 'Bell Tent' },
  ];

  const galleryImages = [
    { category: 'slumber', title: 'Magical Slumber Setup', image: image1 },
    { category: 'slumber', title: 'slumber Castle Dreams', image: image2 },
    { category: 'slumber', title: 'Bohemian Paradise', image: image3 },
    { category: 'slumber', title: 'Cinema Under Stars', image: image4 },
    { category: 'slumber', title: 'Forest Adventure', image: image5 },
    { category: 'slumber', title: 'Rainbow Magic', image: image6 },
    { category: 'slumber', title: 'Zen Relaxation', image: image7 },
    { category: 'slumber', title: 'Royal Elegance', image: image8 },
    { category: 'slumber', title: 'Desert Oasis', image: image9 },
    { category: 'slumber', title: 'Retro Cinema', image: image10 },
    { category: 'slumber', title: 'Galaxy Dreams', image: image11 },
    // { category: 'slumber', title: 'Cotton Candy Clouds', image: image12 },
    { category: 'slumber', title: 'Garden Spa', image: image13 },
    { category: 'slumber', title: 'Frozen Wonderland', image: image14 },
    { category: 'slumber', title: 'Sunset Vibes', image: image15 },
    { category: 'slumber', title: 'Superhero Cinema', image: image16 },
    { category: 'slumber', title: '', image: slumber1 },
    { category: 'slumber', title: '', image: slumber2 },
    { category: 'slumber', title: '', image: slumber3 },
    { category: 'slumber', title: '', image: slumber4 },
    { category: 'slumber', title: '', image: slumber5 },
    { category: 'slumber', title: '', image: slumber6 },
    { category: 'slumber', title: '', image: slumber7 },
    { category: 'slumber', title: '', image: slumber8 },
    { category: 'slumber', title: '', image: slumber9 },
    { category: 'slumber', title: '', image: slumber10 },
    { category: 'slumber', title: '', image: slumber11 },
    { category: 'slumber', title: '', image: slumber12 },
    { category: 'slumber', title: '', image: slumber13 },
    { category: 'slumber', title: '', image: slumber14 },
    { category: 'slumber', title: '', image: slumber15 },
    { category: 'slumber', title: '', image: slumber16 },
    { category: 'slumber', title: '', image: slumber17 },
    { category: 'slumber', title: '', image: slumber18 },
    { category: 'slumber', title: '', image: slumber20 },

    { category: 'luxe', title: '', image: picnic1 },
    { category: 'luxe', title: '', image: picnic2 },
    { category: 'luxe', title: '', image: picnic3 },
    { category: 'luxe', title: '', image: picnic4 },
    { category: 'luxe', title: '', image: picnic5 },
    { category: 'luxe', title: '', image: picnic6 },
    { category: 'luxe', title: '', image: picnic7 },
    { category: 'luxe', title: '', image: picnic8 },
    { category: 'luxe', title: '', image: picnic9 },
    { category: 'luxe', title: '', image: picnic10 },
    { category: 'luxe', title: '', image: picnic11 },
    { category: 'luxe', title: '', image: picnic12 },
    { category: 'luxe', title: '', image: picnic13 },
    { category: 'luxe', title: '', image: picnic14 },
    { category: 'luxe', title: '', image: picnic15 },
    { category: 'luxe', title: '', image: picnic16 },
    { category: 'luxe', title: '', image: picnic17 },
    { category: 'luxe', title: '', image: picnic18 },
    { category: 'luxe', title: '', image: picnic19 },
    { category: 'luxe', title: '', image: picnic20 },
    { category: 'luxe', title: '', image: picnic21 },
    { category: 'luxe', title: '', image: picnic22 },
    { category: 'luxe', title: '', image: picnic23 },
    { category: 'luxe', title: '', image: picnic24 },
    { category: 'luxe', title: '', image: picnic25 },
    { category: 'luxe', title: '', image: picnic26 },
    { category: 'luxe', title: '', image: picnic27 },
    { category: 'luxe', title: '', image: picnic28 },
    { category: 'luxe', title: '', image: picnic29 },
    { category: 'luxe', title: '', image: picnic30 },
    { category: 'luxe', title: '', image: picnic31 },
    { category: 'luxe', title: '', image: picnic32 },
    { category: 'luxe', title: '', image: picnic33 },
    { category: 'luxe', title: '', image: picnic34 },
    { category: 'luxe', title: '', image: picnic35 },
    { category: 'luxe', title: '', image: picnic36 },
    { category: 'luxe', title: '', image: picnic37 },
    { category: 'luxe', title: '', image: picnic38 },
    { category: 'luxe', title: '', image: picnic39},

    { category: 'shower', title: '', image: briderShower1 },
    { category: 'shower', title: '', image: briderShower2 },
    { category: 'shower', title: '', image: briderShower3 },
    { category: 'shower', title: '', image: briderShower4 },
    { category: 'shower', title: '', image: briderShower5 },
    { category: 'shower', title: '', image: briderShower6 },
    { category: 'shower', title: '', image: briderShower7 },
    { category: 'shower', title: '', image: babyShower1 },
    { category: 'shower', title: '', image: babyShower2 },
    { category: 'shower', title: '', image: babyShower3 },
    { category: 'shower', title: '', image: babyShower4 },
    { category: 'shower', title: '', image: babyShower5 },
    { category: 'shower', title: '', image: babyShower6 },
    { category: 'shower', title: '', image: babyShower7 },

    { category: 'tent', title: '', image: bellTent1 },
    { category: 'tent', title: '', image: bellTent2 },
    { category: 'tent', title: '', image: bellTent3 },

    { category: 'movie', title: '', image: backyard1 },
    { category: 'movie', title: '', image: backyard2 },
    { category: 'movie', title: '', image: backyard3 },
    { category: 'movie', title: '', image: backyard4 },
    { category: 'movie', title: '', image: backyard5 },
    { category: 'movie', title: '', image: backyard6 },

  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FBEDE6]">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-heading text-[#EE8F63] mb-6 leading-tight">
            Our <span className="text-[#EE8F63]">Gallery</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Explore our collection of magical slumber parties and see the joy we create for families across Los Angeles. Each party is uniquely designed to make dreams come true.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-pink-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-[#d6665b] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-[#d6665b] hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20 pt-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((item, index) => (
              <div 
                key={index}
                className="group cursor-pointer relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => setLightboxImage(item.image.src)}
              >
                <div className="aspect-square">
                  <img 
                    src={item.image.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={lightboxImage}
              alt="Gallery Image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button 
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <i className="ri-close-line text-xl"></i>
            </button>
          </div>
        </div>
      )}

      {/* Stats Section
      <section className="py-20 bg-[#d6665b]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-xl">Parties Created</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">1000+</div>
              <div className="text-xl">Happy Memories</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-xl">Unique Themes</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-xl">Smiles Guaranteed</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-shadow-lg">Ready to Create Your Own Magic?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-shadow-lg">
            ✨ Let’s make your next celebration a Soirée to remember. ✨
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="bg-[#d6665b] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#b7534b] transition-colors cursor-pointer whitespace-nowrap">
              Book Your Party
            </Link>
            <Link href="/portfolio" className="border-2 border-[#d6665b] text-[#d6665b] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#d6665b] hover:text-white transition-colors cursor-pointer whitespace-nowrap">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
