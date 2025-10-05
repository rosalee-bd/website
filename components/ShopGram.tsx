import React from 'react';
import { BookmarkSquareIcon } from './icons';

const images = [
    { src: 'https://ik.imagekit.io/f8opwyddtv/Images/Home%20Page/Elegence/DSC05528%20(1).opti.webp?updatedAt=1759471801602', alt: 'Man in a blue sweatshirt' },
    { src: 'https://ik.imagekit.io/f8opwyddtv/Images/Home%20Page/Elegence/DSC03221%20(1).opti.webp?updatedAt=1759471801519', alt: 'Man in a white button-up shirt' },
    { src: 'https://ik.imagekit.io/f8opwyddtv/Images/Home%20Page/Elegence/DSC03440%20(1).opti.webp?updatedAt=1759471801411', alt: 'Man posing in a beige t-shirt' },
    { src: 'https://ik.imagekit.io/f8opwyddtv/Images/Home%20Page/Elegence/DSC02593%20(1).opti.webp?updatedAt=1759471801102', alt: 'Man wearing a black short-sleeve shirt' },
];

const ShopGram: React.FC = () => {
    return (
        <section className="py-16 bg-[#F2F0EF]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-5xl font-playfair font-semibold text-gray-900">Effortless Elegance for Every Day.</h2>
                    <p className="mt-4 text-lg text-gray-600">Discover timeless pieces designed for modern living, perfect for any occasion.</p>
                </div>
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {images.map((image, index) => (
                            <div key={index} className="relative group overflow-hidden rounded-xl">
                                <img src={image.src} alt={image.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 aspect-square" />
                                {index === 0 && (
                                    <button className="absolute top-4 left-4 w-9 h-9 flex items-center justify-center bg-white/90 rounded-full border border-black/10" aria-label="View product">
                                        <BookmarkSquareIcon className="w-5 h-5 text-gray-800" />
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopGram;
