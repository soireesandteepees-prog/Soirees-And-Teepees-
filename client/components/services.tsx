'use client';
import Link from "next/link";
import { image1, image2, image28, image4 } from '../public/assets/images/index';

export const Services = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-primary_background to-secondary_background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Services</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need for the perfect slumber party</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                    { title: "Teepee Parties", price: "From $299", image: image1, icon: "ri-tent-line" },
                    { title: "Princess Parties", price: "From $349", image: image2, icon: "ri-crown-line" },
                    { title: "Boho Parties", price: "From $329", image: image28, icon: "ri-leaf-line" },
                    { title: "Movie Nights", price: "From $279", image: image4, icon: "ri-film-line" }
                    ].map((service, index) => (
                    <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                        <div 
                        className="h-48 bg-cover bg-center relative"
                        style={{
                            backgroundImage: `url(${service.image.src})`
                        }}
                        >
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>

                        </div>
                        <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                        <p className="text-primary_button font-semibold text-lg mb-4">{service.price}</p>
                        <Link href="/services" className="text-primary_button hover:text-secondary_button font-medium cursor-pointer">
                            Learn More →
                        </Link>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
      </section>
    )
}