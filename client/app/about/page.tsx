
'use client';

import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                About Our 
                <span className="text-primary_button block">Magical Story</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Founded with a passion for creating unforgettable childhood memories, SOIREES & TEEPEES transforms ordinary sleepovers into extraordinary magical experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/booking" className="bg-primary_button text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary_button transition-colors cursor-pointer whitespace-nowrap">
                  Start Planning
                </Link>
                <Link href="/portfolio" className="border-2 border-primary_button text-primary_button px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary_button hover:text-white transition-colors cursor-pointer whitespace-nowrap">
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
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary_button rounded-full flex items-center justify-center">
                <i className="ri-heart-line text-white text-3xl"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-br from-primary_background to-secondary_background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">Our Story</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              It all started when our founder, Sarah, wanted to create the perfect slumber party for her daughter's 8th birthday. What began as a simple idea quickly blossomed into a passion for creating magical experiences that children treasure forever.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary_button rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-lightbulb-line text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">The Idea</h3>
                <p className="text-gray-600">Born from a desire to create something truly special for children's celebrations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary_button rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-heart-line text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">The Passion</h3>
                <p className="text-gray-600">Driven by love for creating joy and wonder in children's lives</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary_button rounded-full flex items-center justify-center mx-auto mb-4">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">The creative minds behind every magical experience</p>
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
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-primary_button font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-primary_background to-secondary_background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "ri-magic-line", title: "Creativity", description: "Every party is uniquely designed to spark imagination" },
              { icon: "ri-shield-check-line", title: "Safety", description: "Child safety is our top priority in every setup" },
              { icon: "ri-heart-line", title: "Love", description: "We pour love into every detail of your celebration" },
              { icon: "ri-star-line", title: "Excellence", description: "We strive for perfection in every experience we create" }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary_button rounded-full flex items-center justify-center mx-auto mb-4">
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
      <section className="py-20 bg-white">
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
              <div className="text-5xl font-bold mb-2">5</div>
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
      <section className="py-20 bg-gradient-to-r from-primary_background to-secondary_background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-shadow-lg mb-6">Join Our Magical Journey</h2>
          <p className="text-xl text-shadow-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're planning a birthday party or a special celebration, we're here to make it unforgettable
          </p>
          <Link href="/contact" className="bg-primary_button text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary_button transition-colors cursor-pointer whitespace-nowrap">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
