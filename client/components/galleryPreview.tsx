'use client';
import Link from "next/link";
import {image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22, image23, image24, image25, image26, image27} from '../public/assets/images/index';

  const galleryImages = [
    { category: 'teepee', title: 'Magical Teepee Setup', image: image1 },
    { category: 'princess', title: 'Princess Castle Dreams', image: image2 },
    { category: 'boho', title: 'Bohemian Paradise', image: image3 },
    { category: 'movie', title: 'Cinema Under Stars', image: image4 }
  ];


export const GalleryPreview = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Recent Parties</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">See the magic we create for our clients</p>
                </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {galleryImages.map((item, index) => (
                <div 
                    key={index}
                    className="group cursor-pointer relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                    // onClick={() => setLightboxImage(`https://readdy.ai/api/search-image?query=$%7Bitem.image%7D&width=800&height=600&seq=gallery-${index}&orientation=landscape`)}
                >
                    <div className="aspect-square">
                    <img 
                        src={item.image.src}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                        <p className="text-white/80 text-sm capitalize">{item.category} Party</p>
                    </div>
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <i className="ri-zoom-in-line text-white text-lg"></i>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <Link href="/gallery" className="bg-primary_button text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary_button transition-colors cursor-pointer whitespace-nowrap">
                View Full Gallery
                </Link>
            </div>
            </div>
      </section>
    )
}