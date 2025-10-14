
'use client';

import Link from 'next/link';
import { ConfettiBackground } from '@/components/confettiBackground';
import { admin, logo } from '@/public/assets/images';

export default function About() {
  return (
    <div className="min-h-screen bg-[#FBEDE6]">
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#EE8F63] mb-6 leading-tight font-heading">
                ✨ Welcome to 
                <span className="text-[#EE8F63] block">Soirées and Teepees ✨</span>
              </h1>
              <p className="text-lg text-black mb-8 leading-relaxed italic">
                Where celebrations become unforgettable experiences. At Soirées and Teepees, we believe every occasion deserves to feel magical. We don’t just decorate—we curate experiences that inspire joy, connection, and wonder. Whether you’re hosting a slumber party, celebrating love, or creating a cozy night under the stars, we handle every detail so you can relax, enjoy, and make beautiful memories.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/booking" className="border-2 border-peach px-8 py-4 rounded-full text-lg font-semibold bg-[#d6665b] text-white hover:bg-[#b7534b] transition-colors whitespace-nowrap">
                  Start Planning
                </Link>
                <Link href="/portfolio" className="border-2 border-peach px-8 py-4 rounded-full text-lg font-semibold bg-[#d6665b] text-white hover:bg-[#b7534b] transition-colors whitespace-nowrap">
                  View Our Work
                </Link>
              </div>
            </div>
            <img 
              src={logo.src}
              alt="About Us"
              className="rounded-2xl object-contain w-full h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 relative">
        <div className=" mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#EE8F63] mb-8 font-heading">Our Story</h2>
            <p className="text-lg text-black mb-12 leading-relaxed">
              Soirées and Teepees began shortly after the world slowly started finding its way back to joy after COVID-19. At the time, large gatherings were still restricted, and so many families longed to celebrate life’s special moments but couldn’t do it the way they used to.

              That’s when the idea was born — to create beautiful, intimate celebrations right at home. A cozy sleepover for kids who missed their friends. A backyard picnic for couples who wanted to feel close again. A small but stunning baby shower for moms-to-be who deserved something magical.

              What started as a creative way to bring connection, comfort, and celebration into smaller spaces soon grew into a full event styling experience. Each teepee, picnic, and tent setup became more than just décor — it became a reminder that joy can bloom anywhere, even in the simplest settings.

              Today, Soirées and Teepees continues to craft unforgettable moments that bring people together — proving that magic isn’t found in the size of a party, but in the love and laughter shared within it. 

              <br></br>
               ✨ From our heart to your home — we’re here to help you celebrate beautifully, no matter the season.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="pb-20 pt-10 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#EE8F63] font-heading mb-4">Meet the creative director</h2>
            <p className="text-xl text-black max-w-2xl mx-auto">The creative mind behind every magical experience</p>
          </div>
          <div>
            {[
              { name: "Ruke Osuhor", role: "Founder & Creative", bio: "Mother of two with 6+ years of event styling experience" }
            ].map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img 
                    src={admin.src}
                    alt={member.name}
                    className="w-72 h-72 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow"
                  />
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-peach rounded-full flex items-center justify-center">
                    <i className="ri-star-line text-white text-lg"></i>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-black mb-0">{member.name}</h3>
                <p className="text-black text-xl font-bold mb-2">{member.role}</p>
                <p className="text-black">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#EE8F63] mb-4 font-heading">Our Values</h2>
            <p className="text-xl text-black max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "ri-magic-line", color:'[#EE8F63]', title: "Creativity", description: "Every event tells its own story. We transform ordinary spaces into unforgettable experiences with thoughtful design and imagination." },
              { icon: "ri-shield-check-line", color:'[#EAB3C6]', title: "Safety", description: "Your peace of mind comes first. Every detail is handled with care to ensure a clean, safe, and stress-free celebration." },
              
              { icon: "ri-heart-line", color:'[#D5666D]', title: "Love", description: "Love inspires everything we do — from the way we design to the joy we help create for families and friends." },
              { icon: "ri-star-line", color:'[#E89C62]', title: "Excellence", description: "We aim for perfection in every detail, delivering a seamless, beautiful experience from start to finish." }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-peach rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 bg-${value.color} border-4 border-white rounded-full flex items-center justify-center mx-auto mb-4`}>
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
      <section className="py-20 relative text-black">
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
      <section className="relative rounded-tl-[150px] py-24 text-white text-center px-6 bg-peach">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-shadow-lg mb-6">Join Our Magical Journey</h2>
          <p className="text-xl text-shadow-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're planning a birthday party or a special celebration, we're here to make it unforgettable
          </p>
          <Link href="/contact" className="mt-8 bg-[#d6665b] text-white font-semibold px-8 py-3 rounded-full hover:scale-105 transition">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
