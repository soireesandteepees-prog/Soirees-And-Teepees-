
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ConfettiBackground } from '@/components/confettiBackground';
import { image1, image10, image11, image12, image13, image16, image2, image22, image23, image24, image25, image26, image28, image4, image7 } from '@/public/assets/images';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const portfolioProjects = [
    {
      id: 1,
      title: "Emma's Enchanted Forest",
      category: "Slumber Party",
      age: "8th Birthday",
      guests: 6,
      theme: "Woodland Adventure",
      description: "A magical forest-themed slumber party complete with fairy lights, woodland creatures, and nature-inspired decorations. The birthday girl and her friends spent the night in a enchanted forest setting right in their living room.",
      images: [image1, image2, image4],
      highlights: ["Custom woodland backdrop", "LED fairy lights", "Plush forest animals", "Nature scavenger hunt", "S'mores station"],
      testimonial: "Emma is still talking about her magical forest party! The attention to detail was incredible.",
      client: "Jennifer M."
    },
    {
      id: 2,
      title: "Princess Sofia's Royal Celebration",
      category: "Luxe Party",
      age: "7th Birthday",
      guests: 8,
      theme: "Royal Palace",
      description: "An elegant princess-themed slumber party fit for royalty. Complete with canopy beds, golden accents, and princess accessories that made every little girl feel like true royalty for the night.",
      images: [image10, image11, image7],
      highlights: ["Canopy bed installations", "Princess dress-up station", "Royal tea party setup", "Crown making activity", "Palace backdrop"],
      testimonial: "Sofia felt like a real princess! The setup was absolutely stunning and magical.",
      client: "Maria L."
    },
    {
      id: 3,
      title: "Zoe's Bohemian Dream",
      category: "Shower Party",
      age: "10th Birthday",
      guests: 5,
      theme: "Desert Oasis",
      description: "A sophisticated boho-chic party featuring macrame decorations, earthy tones, and comfortable floor seating. Perfect for the free-spirited birthday girl who loves artistic and natural elements.",
      images: [image11, image12, image13],
      highlights: ["Macrame wall hangings", "Succulent centerpieces", "Floor cushion seating", "Dream catcher workshop", "Natural fiber textiles"],
      testimonial: "Zoe loved the artistic vibe! It perfectly matched her personality and style.",
      client: "Sarah K."
    },
    {
      id: 4,
      title: "Mia's Unicorn Wonderland",
      category: "Luxe Party",
      age: "6th Birthday",
      guests: 7,
      theme: "Rainbow Magic",
      description: "A whimsical unicorn-themed party filled with rainbows, sparkles, and magical creatures. Every detail was designed to transport the children into a fantasy world of unicorns and dreams.",
      images: [image16, image23, image24],
      highlights: ["Rainbow balloon arch", "Unicorn horn headbands", "Glitter station", "Magic potion making", "Cloud decorations"],
      testimonial: "Pure magic! Mia and her friends were in awe of the unicorn wonderland.",
      client: "Amanda R."
    },
    {
      id: 5,
      title: "Lily's Movie Marathon",
      category: "Backyard Movie Night",
      age: "9th Birthday",
      guests: 10,
      theme: "Hollywood Cinema",
      description: "A classic movie night setup with a professional projector, comfortable seating, and a full concession stand. The perfect way to bring the cinema experience home for a memorable birthday celebration.",
      images: [image12, image28, image26],
      highlights: ["HD projector setup", "Popcorn machine rental", "Movie poster decorations", "Candy bar station", "Comfortable viewing area"],
      testimonial: "Lily's movie night was a huge hit! The setup was professional and so much fun.",
      client: "Jessica T."
    },
    {
      id: 6,
      title: "Ava's Spa Retreat",
      category: "Slumber Party",
      age: "11th Birthday",
      guests: 4,
      theme: "Zen Garden",
      description: "A relaxing spa-themed party designed for ultimate pampering. Complete with DIY face masks, nail painting stations, and a peaceful zen atmosphere for the perfect girls' night in.",
      images: [image25, image23, image22],
      highlights: ["DIY face mask station", "Professional nail art", "Aromatherapy elements", "Zen garden decorations", "Healthy snack options"],
      testimonial: "Ava felt so pampered and relaxed! The spa setup was absolutely perfect.",
      client: "Rachel W."
    }
  ];

  return (
    <div className="min-h-screen">
      <ConfettiBackground/>
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Our <span className="text-[#d6665b]">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Discover the magical experiences we've created for families across Los Angeles. Each project tells a unique story of joy, creativity, and unforgettable memories.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {portfolioProjects.map((project, index) => (
              <div key={project.id} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                <div className="grid grid-cols-3 gap-2 p-2">
                  {project.images.map((image, imgIndex) => (
                    <div 
                      key={imgIndex}
                      className={`relative overflow-hidden rounded-xl cursor-pointer ${imgIndex === 0 ? 'col-span-2 row-span-2' : ''}`}
                      onClick={() => alert('added')}
                    >
                      <img 
                        src={image.src}
                        alt={`${project.title} - Image ${imgIndex + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      {imgIndex === 0 && (
                        <div className="absolute top-4 left-4 bg-[#d6665b] text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {project.category}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                    <span className="text-[#d6665b] font-semibold">{project.age}</span>
                  </div>
                  
                  <div className="flex items-center space-x-6 mb-4 text-gray-600">
                    <div className="flex items-center">
                      <i className="ri-group-line w-5 h-5 mr-2 text-[#d6665b]"></i>
                      {project.guests} guests
                    </div>
                    <div className="flex items-center">
                      <i className="ri-palette-line w-5 h-5 mr-2 text-[#d6665b]"></i>
                      {project.theme}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Party Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight, idx) => (
                        <span key={idx} className="bg-[#d6665b10] text-[#d6665b] px-3 py-1 rounded-full text-sm">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary_background to-secondary_background p-4 rounded-xl mb-6">
                    <p className="text-gray-700 italic mb-2">"{project.testimonial}"</p>
                    <p className="text-[#d6665b] font-semibold">- {project.client}</p>
                  </div>
                  
                  {/* <button 
                    onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                    className="w-full bg-peach text-white py-3 px-6 rounded-full font-semibold hover:bg-[#FFB88C] transition-colors whitespace-nowrap"
                  >
                    {selectedProject === project.id ? 'Close Details' : 'View Full Details'}
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Creative Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">How we bring your dream party to life</p>
          </div>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'We discuss your vision, theme preferences, and special requests', icon: 'ri-chat-3-line' },
              { step: '02', title: 'Design', description: 'Our team creates a custom design plan tailored to your child', icon: 'ri-palette-line' },
              { step: '03', title: 'Planning', description: 'We coordinate all details, logistics, and timeline for the perfect party', icon: 'ri-calendar-line' },
              { step: '04', title: 'Setup', description: 'Our team transforms your space into a magical wonderland', icon: 'ri-tools-line' },
              { step: '05', title: 'Memories', description: 'You enjoy the party while we capture and preserve the magical moments', icon: 'ri-camera-line' }
            ].map((item, index) => (
              <div className='flex'>
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-[#d6665b] rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className={`${item.icon} text-white text-2xl`}></i>
                  </div>
                  <div className="text-[#d6665b] font-bold text-lg mb-2">{item.step}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
                {index < 4 && <div className='hidden md:block mt-10 w-36 h-[2px] bg-primary_background'></div>}
              </div>
            
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Recognition & Awards</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Honored to be recognized for our work</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { award: "Best Party Planner 2023", organization: "Los Angeles Family Magazine", icon: 'ri-award-line' },
              { award: "Top Event Designer", organization: "Children's Party Awards", icon: 'ri-star-line' },
              { award: "Excellence in Service", organization: "LA Business Chamber", icon: 'ri-medal-line' }
            ].map((item, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-[#d6665b] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${item.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.award}</h3>
                <p className="text-gray-600">{item.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-peach">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-shadow-lg mb-6">Ready to Create Your Story?</h2>
          <p className="text-xl text-gray-600 text-shadow-lg mb-8 max-w-2xl mx-auto">
            Let us design a magical experience that will become a cherished memory for your family
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="px-8 py-4 rounded-full text-lg font-semibold  bg-[#d6665b] text-white hover:bg-[#b7534b] transition-colors cursor-pointer whitespace-nowrap">
              Start Planning
            </Link>
            <Link href="/contact" className="border-2 px-8 py-4 rounded-full text-lg font-semibold  bg-[#d6665b] text-white hover:bg-[#b7534b] transition-colors cursor-pointer whitespace-nowrap">
              Discuss Ideas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
