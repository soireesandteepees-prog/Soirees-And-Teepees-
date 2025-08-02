
'use client';

import Link from 'next/link';
import { ConfettiBackground } from '@/components/confettiBackground';

export default function About() {
  return (
    <div className="min-h-screen bg-black ">
      <ConfettiBackground/>
      <section className="py-20">
      <div className="absolute inset-0 bg-[url('/festive-background.svg')] bg-cover bg-no-repeat bg-blend-multiply opacity-60"></div>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-bloomPink mb-6 leading-tight font-heading">
                About Our 
                <span className="text-primary_button block">Magical Story</span>
              </h1>
              <p className="text-lg text-skyBlue mb-8 leading-relaxed italic font-semibold">
                Founded with a passion for creating unforgettable childhood memories, SOIREES & TEEPEES transforms ordinary sleepovers into extraordinary magical experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/booking" className="border-2 border-peach text-primary_button px-8 py-4 rounded-full text-lg font-semibold bg-[#d6665b] text-white hover:bg-[#b7534b] transition-colors cursor-pointer whitespace-nowrap">
                  Start Planning
                </Link>
                <Link href="/portfolio" className="border-2 border-peach text-primary_button px-8 py-4 rounded-full text-lg font-semibold bg-[#d6665b] text-white hover:bg-[#b7534b] transition-colors cursor-pointer whitespace-nowrap">
                  View Our Work
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=beautiful%20mother%20daughter%20setting%20up%20dreamy%20slumber%20party%20with%20teepees%20fairy%20lights%20cozy%20pillows%20warm%20family%20moment%20magical%20sleepover%20preparation%20pastel%20colors%20loving%20atmosphere%20bonding%20experience%20happy%20family&width=600&height=500&seq=about-hero&orientation=landscape"
                alt="About Us"
                className="rounded-2xl shadow-xl object-cover w-full h-96"
              />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-peach rounded-full flex items-center justify-center">
                <i className="ri-heart-line text-bloomPink text-3xl"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 relative">
        <div className="absolute inset-0 bg-[url('/festive-background.svg')] bg-cover bg-no-repeat bg-blend-multiply opacity-60"></div>
        <div className=" mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-sunshine mb-8 font-heading">Our Story</h2>
            <p className="text-lg text-minty mb-12 leading-relaxed">
              It all started when our founder, Sarah, wanted to create the perfect slumber party for her daughter's 8th birthday. What began as a simple idea quickly blossomed into a passion for creating magical experiences that children treasure forever.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-peach w-full p-2 rounded-xl border-4 border-white">
                <div className="w-16 h-16 bg-sunshine rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-lightbulb-line text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">The Idea</h3>
                <p className="text-gray-600">Born from a desire to create something truly special for children's celebrations</p>
              </div>
              <div className="text-center bg-peach w-full p-2 rounded-xl border-4 border-white">
                <div className="w-16 h-16 bg-pastelYellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-heart-line text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">The Passion</h3>
                <p className="text-gray-600">Driven by love for creating joy and wonder in children's lives</p>
              </div>
              <div className="text-center bg-peach w-full p-2 rounded-xl border-4 border-white">
                <div className="w-16 h-16 bg-minty rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-star-line text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">The Magic</h3>
                <p className="text-gray-600">Every party is crafted with attention to detail and genuine care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[url('/festive-background.svg')] bg-cover bg-no-repeat bg-blend-multiply opacity-60"></div>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-pastelYellow font-heading mb-4">Meet Our Team</h2>
            <p className="text-xl text-skyBlue max-w-2xl mx-auto">The creative minds behind every magical experience</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", role: "Founder & Creative Director", bio: "Mother of two with 8+ years of event planning experience" },
              { name: "Emma Davis", role: "Event Coordinator", bio: "Specializes in themed parties and children's entertainment" },
              { name: "Lisa Chen", role: "Design Specialist", bio: "Interior designer passionate about creating magical spaces" }
            ].map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img 
                    src={`https://readdy.ai/api/search-image?query=professional%20friendly%20woman%20event%20planner%20smiling%20warm%20portrait%20creative%20team%20member%20party%20planning%20specialist%20approachable%20confident%20business%20professional&width=300&height=300&seq=team-${index}&orientation=squarish`}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow"
                  />
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary_button rounded-full flex items-center justify-center">
                    <i className="ri-star-line text-white text-lg"></i>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-peach mb-0">{member.name}</h3>
                <p className="text-peach font-semibold mb-3">{member.role}</p>
                <p className="text-peach">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[url('/festive-background.svg')] bg-cover bg-no-repeat bg-blend-multiply opacity-60"></div>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-bloomPink mb-4 font-heading">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "ri-magic-line", title: "Creativity", description: "Every party is uniquely designed to spark imagination" },
              { icon: "ri-shield-check-line", title: "Safety", description: "Child safety is our top priority in every setup" },
              { icon: "ri-heart-line", title: "Love", description: "We pour love into every detail of your celebration" },
              { icon: "ri-star-line", title: "Excellence", description: "We strive for perfection in every experience we create" }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-skyBlue rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-bloomPink rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${value.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative text-bloomPink">
        <div className="absolute inset-0 bg-[url('/festive-background.svg')] bg-cover bg-no-repeat bg-blend-multiply opacity-60"></div>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-xl">Magical Parties</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">1000+</div>
              <div className="text-xl">Happy Children</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">6+</div>
              <div className="text-xl">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-xl">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative rounded-tl-[150px] py-24 text-white text-center px-6 bg-[linear-gradient(to_right,#FF6FA3,#FFDD57),url('/festive-background.svg')] bg-cover bg-blend-overlay bg-repeat">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-shadow-lg mb-6">Join Our Magical Journey</h2>
          <p className="text-xl text-shadow-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're planning a birthday party or a special celebration, we're here to make it unforgettable
          </p>
          <Link href="/contact" className="mt-8 bg-white text-bloomPink font-semibold px-8 py-3 rounded-full hover:scale-105 transition">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
