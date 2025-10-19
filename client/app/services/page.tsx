'use client';
import { ConfettiBackground } from '@/components/confettiBackground';
import Link from 'next/link';
import { BsInfoCircle } from "react-icons/bs";

export default function Services() {
  const services = [
    {
      id: 'kids-sleepover',
      title: 'Kids Sleepover',
      price: 'From $415',
      duration: '24 hours',
      guests: 'Minimum of 3 children',
      info: "There will be an additional fee of $100 per additional child",
      image: 'magical+teepee+slumber+party+setup+with+fairy+lights+soft+pillows+blankets+pastel+colors+cozy+indoor+camping+dreamy+atmosphere+pink+purple+decor',
      features: [
        ' A frame teepees with fairylights',
        ' Fabric teepee cover to suite party theme or color scheme',
        ' Air Mattresses', 
        ' Fitted sheet',
        ' Soft/fleece blankets',
        ' Pillows',
        ' Themes throw pillows', 
        ' Tent Name tags',
        ' Lap Trays',
        ' Themed placemats', 
        ' Themed frames',
        ' LED table lights',
        ' Fur foot mats',
        ' Minimal balloon Garland'
      ]
    },
    {
      id: 'adult-sleepover',
      title: 'Adult Sleepover',
      price: 'From $465',
      duration: '24 hours',
      guests: 'Minimum of 3 Person',
      info: "There will be an additional fee of $100 per additional Person",
      image: 'princess+themed+slumber+party+with+pink+gold+decorations+crowns+magical+setup+fairy+tale+atmosphere+elegant+sleepover+decor+dreamy+bedroom',
      features: [
        ' A frame teepees with fairylights',
        ' Fabric teepee cover to suite party theme or color scheme', 
        ' Air Mattresses', 
        ' Fitted shee8',
        ' Soft/fleece blankets',
        ' Pillows',
        ' Themes throw pillows', 
        ' Tent Name tags',
        ' Lap Trays',
        ' Themed placemats', 
        ' Themed frames',
        ' Dinner candles',
        ' Fur foot mats', 
        ' Two bored games',
        ' Red or white wine',
        'Minimal balloon Garland'
      ]
    },

    {
      id: 'luxe-indoor-picnics',
      title: 'Luxe Indoor Picnics ',
      price: 'From $350',
      duration: '4 hours',
      guests: 'Minimum of 4 Guests',
      info: "There will be an additional fee of $100 per additional Person",
      image: 'princess+themed+slumber+party+with+pink+gold+decorations+crowns+magical+setup+fairy+tale+atmosphere+elegant+sleepover+decor+dreamy+bedroom',
      features: [
        'Picnic table',
        'Seat pads',
        'Throw pillows', 
        'Centerpieces /flowers',
        'Charger plates, plates/ tableware', 
        'Cultleries, cups and napkins,silverware', 
        'Welcome signage', 
        'One lace Teepee( complementary)',
        'Food table (small side table )',
        'Picnic rug',
        'Choose up to 3 games',
        'Bluetooth speaker(JBL)',
        'Sanitizer',
        'Paper napkins' 

      ]
    },

    {
      id: 'luxe-outdoor-picnics',
      title: 'Luxe Outdoor Picnics ',
      price: 'From $400',
      duration: '4 hours',
      guests: 'Minimum of 4 Guests',
      info: "There will be an additional fee of $100 per additional Person",
      image: 'princess+themed+slumber+party+with+pink+gold+decorations+crowns+magical+setup+fairy+tale+atmosphere+elegant+sleepover+decor+dreamy+bedroom',
      features: [
        'Outdoor Luxe Picnic',
        'Picnic table',
        'Seat pads',
        'Throw pillows', 
        'Centerpieces /flowers',
        'Charger plates, plates/ tableware', 
        'Cultleries, cups and napkins,silverware', 
        'Welcome signage', 
        'One lace Teepee( complementary)',
        'Food table (small side table )',
        'Picnic rug',
        'Outdoor Luxe Picnic',
        'Boho Umbrellas', 
        'Portable charger for phones',
        'Portable fan',
        'Choose up yo 3 games',
        'Bluetooth seaker( JBL)',
        'Sanitizer (Complementary)',
        'Paper napkins', 
        'Bug spray (Complementary)',
      ]
    },

    {
      id: 'backyard-movie-night',
      title: 'Backyard Movie Night',
      // price: 'From $400',
      duration: '4 hours',
      // guests: 'Minimum of  Guests',
      // info: "There will be an additional fee of $100 per additional Person",
      // image: 'princess+themed+slumber+party+with+pink+gold+decorations+crowns+magical+setup+fairy+tale+atmosphere+elegant+sleepover+decor+dreamy+bedroom',
      features: [
        'Inflatable movie screen',
        'HD projector',
        'Projector stand',
        'Media source (laptop)',
        'Fairy/string lights',
        'sound system',
        'Fire pit or heaters (depending on weather)',
        'Red carpet (for VIP effect)',
        'Small tables or trays for guests',
        'Mini bar cart or themed concession stand',
        'Trash and recycling bins (discreetly placed)',
        'Beverage dispenser or cooler (soda, lemonade, water)',
        'Movie-themed signage (“Now Showing”, “Concessions”)',
        'Bug repellent (spray or citronella candles)',
        'Outdoor fans or heaters (seasonal)',
        'Outdoor-safe extension cords',
        'First aid kit',
        'Personalized seating place cards',
        'Custom movie tickets or wristbands',
        'Themed favor bags',
        'Glow sticks for kids',
        'Cozy socks/slippers giveaway',
        'Surge protectors',
        'Test run BEFORE guests arrive!',
        'Teepees or luxury tents (individual lounges or decor)',
        'Cozy low seating (floor cushions, bean bags, poufs)',
        'Blankets & throws (neutral or themed colors)',
        'Outdoor rugs or ground coverings',
        'Pillows for comfort and style',
        'Decorative elements (signage, flowers)',
      ]
    },

    {
      id: 'bell-tent-glamping',
      title: 'Bell Tent Glamping',
      price: 'From $750',
      // duration: '4 hours',
      // guests: 'Minimum of 4 Guests',
      info: "Additional fee for Tent Balloon Garland ($300)",
      image: 'princess+themed+slumber+party+with+pink+gold+decorations+crowns+magical+setup+fairy+tale+atmosphere+elegant+sleepover+decor+dreamy+bedroom',
      features: [
        '4-5 Mattresses',
        'Decorative Pillows',
        'Bedding',
        'Light Blanket',
        'Outdoor Entry Rug',
        'Lap Trays',
        'Decorative Lanterns',
        'Themed Decor & Decorations',
        'Night Time Lanterns',
        'Welcome signage',
        'Tent Topper or Dream Catcher',
        'Wicker Basket for Shoes',
        'Decorative Plants'
      ]
    },

    {
      id: 'bridal/baby-shower',
      title: 'Bridal/Baby Shower',
      // price: 'From $750',
      // duration: '4 hours',
      // guests: 'Minimum of 4 Guests',
      // info: "Additional fee for Tent Balloon Garland ($300)",
      image: 'princess+themed+slumber+party+with+pink+gold+decorations+crowns+magical+setup+fairy+tale+atmosphere+elegant+sleepover+decor+dreamy+bedroom',
      features: [
        'Welcome sign',
        'Entrance balloon arch or garland',
        'Entry backdrop or draping',
        'Directional or themed signage',
        'Main backdrop or feature wall',
        'Balloon garland or floral installation',
        'Custom sign or neon sign (e.g. “Bride-to-Be” / “Mama-to-Be”)',
        'Statement chair or throne chair',
        'Couch, wicker chair, or sweetheart seating',
        'Floor decor (lanterns, flowers, crates)',
        'Dessert/cake table',
        'Cake stand(s) and risers',
        'Dessert labels or signage',
        'Centerpieces (flowers, candles, props)',
        'Table linens or tablecloths',
        'Table runners or overlays',
        'Plates, napkins, cups (coordinated with theme)',
        'Chargers or decorative place settings',
        'Place cards or name tags (optional)',
        'Confetti, petals, or table scatter',
        'Guest seating area with styled chairs or bows (optional)',
        'Gift table with sign or decor',
        'Favor table or display',
        'Personalized favor tags or labels',
        'Food/grazing table setup',
        'Beverage or mimosa bar station',
        'Signage for food/drinks',
        'Balloon columns or clusters (optional)',
        'Floral arrangements (fresh or faux)',
        'Hanging decor (lanterns, fans, tassels)',
        'Ceiling balloons or florals (optional)',
        'Lighting (string lights, fairy lights)',
        'LED candles or lanterns',
        'Photo booth or selfie station',
        'Photo props (themed)',
        'Game station or table',
        'Pens, cards, or activity items',
        '“Advice for Bride/Mom” cards or station',
        'Gift-opening area with seating',
        'Themed props (baby blocks, veil decor, etc.)',
        'Accent decor (ribbons, bows, signs)',
        'Coordinated color palette throughout',
        'Music or background ambiance',
        'Trash bin discreetly placed',
        'Extra balloons or decor for filler spaces',
        'Backup supplies and tape/hooks'
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-[#FBEDE6]">    
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-heading text-[#EE8F63] mb-6 leading-tight">
            Our <span className="text-[#EE8F63]">Signature Experiences</span>
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
            Luxury. Intimate. Unforgettable.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={service.id} className="bg-white drop-shadow-lg rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                <div className="p-8">
                  {
                    service.price && ( 
                      <>
                        <div className="relative items-center text-xl text-center mb-3 bg-[#d6665b] text-white px-4 py-2 rounded-full font-semibold">
                          {service.price}
                        </div>
                      </>
                    )
                  }
                  
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <div className="flex items-center space-x-6 mb-2 text-gray-600">
                    <div className="flex items-center">
                      {
                        service.duration && (
                          <>
                            <i className="ri-time-line w-6 h-6 mr-2 text-[#d6665b]"></i>
                            {service.duration}
                          </>
                        )
                      }
                    </div>
                    <div className="flex items-center">
                      {
                        service.guests && (
                          <>
                            <i className="ri-group-line w-5 h-5 mr-2 text-[#d6665b]"></i>
                            {service.guests}
                          </>
                        )
                      }
                    </div>
                  </div>
                  <div className="flex items-center mb-6 text-gray-600">
                    {
                      service.info && (
                        <>
                          <BsInfoCircle className="w-5 h-5 mr-2 text-[#d6665b]" />
                          {service.info}
                        </>
                      )
                    }
                    
                  </div>
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <i className="ri-check-line w-5 h-5 text-[#d6665b] mr-3"></i>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {
                    (service.id !== 'backyard-movie-night' && service.id !== 'bridal/baby-shower') ? (
                      <Link href="/booking" className="w-full bg-[#d6665b] text-white py-4 px-6 rounded-full font-semibold hover:bg-[#FFB88C] transition-colors cursor-pointer block text-center whitespace-nowrap">
                        Book This Package
                      </Link>
                    ) : (
                      <div className="w-full text-[#d6665b] text-xl  py-4 px-6 rounded-full font-semibold transition-colors block text-center whitespace-nowrap">
                        Contact us for quotes
                      </div>
                    )
                  }
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Popular Add-ons</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Enhance your party with these magical extras</p>
          </div>
          <div className="text-center flex justify-center">
            {[
              // { icon: 'ri-camera-line', title: 'Photo Booth', price: '+$49', description: 'Polaroid camera with props' },
              // { icon: 'ri-cake-2-line', title: 'Birthday Cake', price: '+$65', description: 'Custom themed birthday cake' },
              // { icon: 'ri-gift-line', title: 'Party Favors', price: '+$89', description: 'Themed goodie bags for guests' },
              // { icon: 'ri-music-line', title: 'Playlist Setup', price: '+$29', description: 'Curated music for the party' },
              // { icon: 'ri-star-line', title: 'Face Painting', price: '+$99', description: 'Professional face painting' },
              // { icon: 'ri-palette-line', title: 'Craft Station', price: '+$79', description: 'DIY craft activities' },
              // { icon: 'ri-magic-line', title: 'Magic Show', price: '+$149', description: '30-minute magic performance' },
              { icon: 'ri-moon-line', title: 'Midnight Snacks', price: '+$39', description: 'Late night treat service' }
            ].map((addon, index) => (
              <div key={index} className="text-center w-1/2 p-6 drop-shadow-lg bg-peach border-4 border-white rounded-2xl hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#d6665b] border-4 border-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${addon.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{addon.title}</h3>
                <p className="text-[#d6665b] font-semibold text-lg mb-2">{addon.price}</p>
                <p className="text-gray-600 text-sm">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">How It Works</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Book Online', description: 'Choose your package and preferred date through our easy booking system' },
              { step: '02', title: 'Plan Together', description: 'We discuss themes, colors, and special requests to customize your party' },
              { step: '03', title: 'We Setup', description: 'Our team arrives 3-4 hours before to create the magical experience' },
              { step: '04', title: 'Breakdown', description: 'You enjoy the party while we handle all the breakdown the next day' }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 bg-[#d6665b] border-4 border-white rounded-full flex items-center justify-center mx-auto mb-6">
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
      <section className="py-20 bg-peach">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-shadow-lg">Ready to Book Your Dream Party?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-shadow-lg">
            ✨ Let’s make your next celebration a Soirée to remember. ✨
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
