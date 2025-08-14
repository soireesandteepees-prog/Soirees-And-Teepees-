
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ConfettiBackground } from '@/components/confettiBackground';
import {image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22, image23, image24, image25, image26, image27} from '../../public/assets/images/index';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Parties' },
    { id: 'slumber', name: 'Slumber Parties' },
    { id: 'luxe', name: 'Luxe Picnic' },
    { id: 'shower', name: 'Bridal/Baby Shower' },
    { id: 'movie', name: 'Backyard Movie Night' },
  ];

  const galleryImages = [
    { category: 'slumber', title: 'Magical Slumber Setup', image: image1 },
    { category: 'luxe', title: 'luxe Castle Dreams', image: image2 },
    { category: 'shower', title: 'Bohemian Paradise', image: image3 },
    { category: 'movie', title: 'Cinema Under Stars', image: image4 },
    { category: 'slumber', title: 'Forest Adventure', image: image5 },
    { category: 'slumber', title: 'Rainbow Magic', image: image6 },
    { category: 'shower', title: 'Zen Relaxation', image: image7 },
    { category: 'luxe', title: 'Royal Elegance', image: image8 },
    { category: 'shower', title: 'Desert Oasis', image: image9 },
    { category: 'movie', title: 'Retro Cinema', image: image10 },
    { category: 'slumber', title: 'Galaxy Dreams', image: image11 },
    { category: 'luxe', title: 'Cotton Candy Clouds', image: image12 },
    { category: 'luxe', title: 'Garden Spa', image: image13 },
    { category: 'luxe', title: 'Frozen Wonderland', image: image14 },
    { category: 'shower', title: 'Sunset Vibes', image: image15 },
    { category: 'movie', title: 'Superhero Cinema', image: image16 }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FCE5FC]">
      <ConfettiBackground/>
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Our <span className="text-[#d6665b]">Gallery</span>
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
                onClick={() => setLightboxImage(`https://readdy.ai/api/search-image?query=$%7Bitem.image%7D&width=800&height=600&seq=gallery-${index}&orientation=landscape`)}
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

      {/* Stats Section */}
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
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-shadow-lg">Ready to Create Your Own Magic?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-shadow-lg">
            Let us design a one-of-a-kind slumber party experience that your child will treasure forever
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
