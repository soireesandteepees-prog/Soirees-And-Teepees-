
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {picnic1} from '@/public/assets/picnic'
import {babyShower1} from '@/public/assets/babyShower';
import {briderShower3} from '@/public/assets/briderShower'
import {backyard1} from '@/public/assets/backyardMovie'
import {bellTent1} from '@/public/assets/bellTent'
import {slumber20} from '@/public/assets/slumber'

export default function Portfolio() {
  // const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const router = useRouter();

  const portfolioProjects = [
    {
      id: 1,
      title: "Dreamy Nights, Beautiful Memories",
      category: "Slumber Party",
      description: "Transform your living room into a dreamy sleepover paradise! Our signature Teepee-style slumber setups come complete with themed décor, plush bedding, cozy lighting, and fun accessories that turn bedtime into an adventure. Perfect for kids, teens, or even grown-up girls’ nights, our slumber parties create unforgettable memories full of laughter, giggles, and comfort.Why book with us? Because we handle every detail—from setup to styling—so all you have to do is say “sweet dreams.” ",
      images: slumber20,
      href: '/portfolio/slumber'
    },
    {
      id: 2,
      title: "Luxury Meets The Outdoors/indoors",
      category: "Luxe Picnic",
      description: "Imagine lounging in style on lush blankets and plush cushions, sipping bubbly, and enjoying a beautifully styled picnic spread in the park, your backyard, or even indoors. Our Luxe Picnics are designed to bring elegance and comfort to the outdoors. With stunning tablescapes, floral accents, candles, and tailored themes, we set the perfect scene for proposals, birthdays, date nights, or brunch with friends. Why book with us? Because every picnic we create is Pinterest-perfect and effort-free—you show up, and we handle the magic.",
      images: picnic1,
      href: '/portfolio/luxe_picnic'
    },
    {
      id: 3,
      title: "Create New Beginnings in Style",
      category: "Baby Shower",
      description: "Celebrate the upcoming arrival of your little one in style! Our Baby Showers are designed to reflect warmth, excitement, and love, blending soft pastels or bold themes with elegant backdrops, balloon garlands, florals, and photo-worthy décor. Whether you’re going for classic charm or modern chic, we’ll design a space that feels like a warm embrace. Why book with us? Because we turn your baby shower into a heartfelt, picture-perfect experience that guests will talk about long after the confetti settles",
      images: babyShower1,
      href: '/portfolio/baby_shower'
    },
    {
      id: 4,
      title: "Because Every Bride Deserves a Beautiful Beginning",
      category: "Bridal Shower",
      description: "Every bride deserves a pre-wedding celebration as stunning as her love story. Our Bridal Showers are the epitome of sophistication and fun—filled with luxe décor, custom tablescapes, elegant floral designs, and that perfect balance of romance and celebration. Whether it’s boho-chic, glam, or timeless elegance, we’ll make sure every detail matches the bride’s unique vibe. Why book with us? Because we take your vision and elevate it into an experience that feels tailored, timeless, and totally unforgettable.",
      images: briderShower3,
      href: '/portfolio/brider_shower'
    },
    {
      id: 5,
      title: "Your Own Private Cinema Under the Stars",
      category: "Backyard Movie Night",
      description: "Bring the cinema home! Our Backyard Movie Night setups turn your outdoor space into a cozy private theater with large screens, ambient lighting, plush seating, and snack stations. Perfect for birthdays, date nights, or family gatherings, it’s all the fun of the movies—without leaving your yard. Why book with us? Because we combine comfort, creativity, and technology to create a one-of-a-kind, starry-night movie experience right in your backyard.",
      images: backyard1,
      href: '/portfolio/backyard_movie_night'
    },
    {
      id: 6,
      title: "Adventure, Elevated",
      category: "Bell Tent Glamping",
      description: "Who says adventure can’t be glamorous? Our Bell Tent Glamping service is a luxurious escape into nature—without sacrificing comfort. We provide fully furnished, beautifully styled tents with soft bedding, boho décor, fairy lights, and chic lounge touches. Ideal for romantic getaways, birthdays, or family weekends, it’s outdoor living at its finest. Why book with us? Because we bring the wonder of the outdoors together with the elegance of a boutique hotel—creating an experience that feels both magical and indulgent.",
      images: bellTent1,
      href: '/portfolio/bell_tent'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FBEDE6]">
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-heading text-[#EE8F63] mb-6 leading-tight">
            Our <span className="text-[#EE8F63] tracking-widest">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Explore our portfolio to see how we turn simple spaces into stunning celebrations. Each setup is thoughtfully designed with creativity, love, and attention to detail. ✨ Every photo tells the story of a moment made unforgettable.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {portfolioProjects.map((project, index) => (
              <div key={project.id} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow cursor-pointer" onClick={() => router.push(project.href)}>
                <div className="grid grid-cols-2 gap-2 p-2">
                  <div 
                    className={`relative overflow-hidden col-span-2 rounded-xl cursor-pointer`}
                    // onClick={() => alert('added')}
                  >
                    <img 
                      src={project.images.src}
                      alt={`${project.title}`}
                      height={50}
                      className="object-cover max-h-96 w-full hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                <div className="bg-[#d6665b] text-white px-3 py-1 text-center text-lg font-semibold">
                  {project.category}
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                  </div>
                  
                  {/* <div className="flex items-center space-x-6 mb-4 text-gray-600">
                    <div className="flex items-center">
                      <i className="ri-group-line w-5 h-5 mr-2 text-[#d6665b]"></i>
                      {project.guests} guests
                    </div>
                    <div className="flex items-center">
                      <i className="ri-palette-line w-5 h-5 mr-2 text-[#d6665b]"></i>
                      {project.theme}
                    </div>
                  </div> */}
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  
                  {/* <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Party Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight, idx) => (
                        <span key={idx} className="bg-[#d6665b10] text-[#d6665b] px-3 py-1 rounded-full text-sm">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div> */}
                  
                  {/* <div className="bg-gradient-to-r from-primary_background to-secondary_background p-4 rounded-xl mb-6">
                    <p className="text-gray-700 italic mb-2">"{project.testimonial}"</p>
                    <p className="text-[#d6665b] font-semibold">- {project.client}</p>
                  </div> */}
                  
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
      {/* <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Recognition & Awards</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Honored to be recognized for our work</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { award: "Best Party Planner 2023", color:'[#EE8F63]', organization: "Los Angeles Family Magazine", icon: 'ri-award-line' },
              { award: "Top Event Designer", color:'[#D5666D]', organization: "Children's Party Awards", icon: 'ri-star-line' },
              { award: "Excellence in Service", color:'[#EAB3C6]', organization: "LA Business Chamber", icon: 'ri-medal-line' }
            ].map((item, index) => (
              <div key={index} className="text-center bg-peach border-4 border-white p-8 rounded-2xl shadow-lg">
                <div className={`w-16 h-16 bg-${item.color} rounded-full border-4 border-white flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${item.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.award}</h3>
                <p className="text-gray-600">{item.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-peach">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-shadow-lg mb-6">Ready to Create Your Story?</h2>
          <p className="text-xl text-gray-600 text-shadow-lg mb-8 max-w-2xl mx-auto">
            Let’s help you create a celebration full of joy, colors, and unforgettable memories!
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





    // {
    //   id: 5,
    //   title: "Lily's Movie Marathon",
    //   category: "Backyard Movie Night",
    //   age: "9th Birthday",
    //   guests: 10,
    //   theme: "Hollywood Cinema",
    //   description: "A classic movie night setup with a professional projector, comfortable seating, and a full concession stand. The perfect way to bring the cinema experience home for a memorable birthday celebration.",
    //   images: image12,
    //   highlights: ["HD projector setup", "Popcorn machine rental", "Movie poster decorations", "Candy bar station", "Comfortable viewing area"],
    //   testimonial: "Lily's movie night was a huge hit! The setup was professional and so much fun.",
    //   client: "Jessica T."
    // },
