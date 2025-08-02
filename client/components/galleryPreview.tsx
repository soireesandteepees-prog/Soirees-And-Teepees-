'use client';
import Link from "next/link";
import {image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22, image23, image24, image25, image26, image27} from '../public/assets/images/index';

  const galleryImages = [
    { category: 'teepee', title: 'Magical Teepee Setup', image: image1 },
    { category: 'princess', title: 'Princess Castle Dreams', image: image2 },
    { category: 'boho', title: 'Bohemian Paradise', image: image3 },
    { category: 'movie', title: 'Cinema Under Stars', image: image4 }
  ];

  const images = [
    image1,
    image17,
    image24,
    image4
  ]


export const GalleryPreview = () => {
    return (
        <section className="bg-[url('/festive-background.svg')] bg-cover bg-repeat pt-12 pb-20 px-6 text-center">
      <h2 className="text-4xl font-heading text-bloomPink mb-12 ">Peek Into The Fun!</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {images.map((src, i) => (
          <div key={i} className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition">
            <img src={src.src} alt={`party ${i}`} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>
    </section>
    )
}