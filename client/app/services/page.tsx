'use client';
import { ConfettiBackground } from '@/components/confettiBackground';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      id: 'slumber-parties',
      title: 'Slumber Parties',
      price: 'From $299',
      duration: '24 hours',
      guests: 'Up to 8 children',
      image: 'magical+teepee+slumber+party+setup+with+fairy+lights+soft+pillows+blankets+pastel+colors+cozy+indoor+camping+dreamy+atmosphere+pink+purple+decor',
      features: [
        'Luxury teepees with premium bedding',
        'Fairy lights and ambient lighting',
        'Cozy pillows and blankets',
        'Setup and breakdown included',
        'Themed decorations',
        'Breakfast tray setup'
      ]
    },
    {
      id: 'bridal/baby shower',
      title: 'Bridal/Baby Shower',
      price: 'From $349',
      duration: '24 hours',
      guests: 'Up to 6 children',
      image: 'princess+themed+slumber+party+with+pink+gold+decorations+crowns+magical+setup+fairy+tale+atmosphere+elegant+sleepover+decor+dreamy+bedroom',
      features: [
        'Royal themed decorations',
        'Princess crowns and accessories',
        'Elegant canopy beds',
        'Rose petals and flowers',
        'Pink and gold color scheme',
        'Royal breakfast service'
      ]
    },
    {
      id: 'luxe picnic',
      title: 'Luxe Picnic',
      price: 'From $329',
      duration: '24 hours',
      guests: 'Up to 8 children',
      image: 'boho+chic+slumber+party+setup+with+macrame+dreamcatchers+natural+textures+earth+tones+cozy+bohemian+decor+relaxed+sleepover+atmosphere',
      features: [
        'Macrame and dreamcatcher decor',
        'Natural textures and materials',
        'Earth tone color palette',
        'Floor cushions and poufs',
        'Bohemian tapestries',
        'Organic breakfast options'
      ]
    },
    {
      id: 'backyard movie-night',
      title: 'Backyard Movie Night',
      price: 'From $279',
      duration: '6-8 hours',
      guests: 'Up to 10 children',
      image: 'cozy+movie+night+slumber+party+setup+with+projector+popcorn+blankets+pillows+cinema+atmosphere+comfortable+viewing+area+snacks',
      features: [
        'HD projector and screen setup',
        'Comfortable seating arrangement',
        'Popcorn and movie snacks',
        'Cozy blankets and pillows',
        'Movie selection assistance',
        'Late night snack service'
      ]
    },
  ];

  return (
    <div className="min-h-screen">
      <ConfettiBackground/>
    
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Our <span className="text-[#d6665b]">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Choose from our carefully crafted slumber party packages, each designed to create magical memories that will last a lifetime. Every package includes setup, styling, and cleanup.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={service.id} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow group">
                <div className="relative">
                  <img 
                    src={`https://readdy.ai/api/search-image?query=$%7Bservice.image%7D&width=600&height=400&seq=service-${index}&orientation=landscape`}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-6 left-6 bg-[#d6665b] text-white px-4 py-2 rounded-full font-semibold">
                    {service.price}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <div className="flex items-center space-x-6 mb-6 text-gray-600">
                    <div className="flex items-center">
                      <i className="ri-time-line w-5 h-5 mr-2 text-[#d6665b]"></i>
                      {service.duration}
                    </div>
                    <div className="flex items-center">
                      <i className="ri-group-line w-5 h-5 mr-2 text-[#d6665b]"></i>
                      {service.guests}
                    </div>
                  </div>
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <i className="ri-check-line w-5 h-5 text-[#d6665b] mr-3"></i>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/booking" className="w-full bg-[#d6665b] text-white py-4 px-6 rounded-full font-semibold hover:bg-[#FFB88C] transition-colors cursor-pointer block text-center whitespace-nowrap">
                    Book This Package
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Popular Add-ons</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Enhance your party with these magical extras</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'ri-camera-line', title: 'Photo Booth', price: '+$49', description: 'Polaroid camera with props' },
              { icon: 'ri-cake-2-line', title: 'Birthday Cake', price: '+$65', description: 'Custom themed birthday cake' },
              { icon: 'ri-gift-line', title: 'Party Favors', price: '+$89', description: 'Themed goodie bags for guests' },
              { icon: 'ri-music-line', title: 'Playlist Setup', price: '+$29', description: 'Curated music for the party' },
              { icon: 'ri-star-line', title: 'Face Painting', price: '+$99', description: 'Professional face painting' },
              { icon: 'ri-palette-line', title: 'Craft Station', price: '+$79', description: 'DIY craft activities' },
              { icon: 'ri-magic-line', title: 'Magic Show', price: '+$149', description: '30-minute magic performance' },
              { icon: 'ri-moon-line', title: 'Midnight Snacks', price: '+$39', description: 'Late night treat service' }
            ].map((addon, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-primary_background to-secondary_background rounded-2xl hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#d6665b] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${addon.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{addon.title}</h3>
                <p className="text-[#d6665b] font-semibold text-lg mb-2">{addon.price}</p>
                <p className="text-gray-600 text-sm">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Simple steps to your perfect slumber party</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Book Online', description: 'Choose your package and preferred date through our easy booking system' },
              { step: '02', title: 'Plan Together', description: 'We discuss themes, colors, and special requests to customize your party' },
              { step: '03', title: 'We Setup', description: 'Our team arrives 2-3 hours before to create the magical experience' },
              { step: '04', title: 'Enjoy & Cleanup', description: 'You enjoy the party while we handle all the cleanup the next day' }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 bg-[#d6665b] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 -right-12 w-24 h-0.5 bg-[#d6665b] opacity-30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-peach to-secondary_background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-shadow-lg">Ready to Book Your Dream Party?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-shadow-lg">
            Let us create an unforgettable slumber party experience for your child and their friends
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="bg-[#d6665b] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap">
              Book Now
            </Link>
            <Link href="/contact" className="bg-[#d6665b] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary_button transition-colors cursor-pointer whitespace-nowrap">
              Ask Questions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
