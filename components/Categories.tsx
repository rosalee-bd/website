import React, { useState, useEffect } from 'react';

const slideshowImages = [
    'https://ik.imagekit.io/f8opwyddtv/Images/Home%20Page/Elegence/DSC05528%20(1).opti.webp?updatedAt=1759471801602',
    'https://ik.imagekit.io/f8opwyddtv/Images/Home%20Page/Elegence/DSC03440%20(1).opti.webp?updatedAt=1759471801411',
    'https://ik.imagekit.io/f8opwyddtv/Images/Home%20Page/Elegence/DSC02593%20(1).opti.webp?updatedAt=1759471801102',
    'https://ik.imagekit.io/f8opwyddtv/Images/Home%20Page/Grids/DSC03221%20(1).opti.webp?updatedAt=1759494486467',
];

interface CategoriesProps {
    onNavigate: (page: 'home' | 'shop' | 'about' | 'mahra', category?: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({ onNavigate }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % slideshowImages.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="py-16 bg-[#F2F0EF]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* The Crimson Shadow */}
                    <div className="relative group overflow-hidden rounded-lg h-[500px] md:h-auto">
                        <img src="https://ik.imagekit.io/f8opwyddtv/Images/Home%20Page/Grids/mini_DSC03374%20(1).opti.webp?updatedAt=1759484903724" alt="The Crimson Shadow Collection" loading="lazy" className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center p-6">
                            <p className="text-sm">Explore our featured collection</p>
                            <h2 className="text-3xl font-bold my-2">The Crimson Shadow</h2>
                            <p className="text-sm mb-4">Bold styles, dark aesthetics</p>
                            <button
                                onClick={() => onNavigate('shop', 'All Categories')}
                                className="bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-[var(--accent-color)] hover:text-white transition duration-300"
                            >
                                SHOP NOW
                            </button>
                        </div>
                    </div>

                    {/* Right Column Container */}
                    <div className="grid grid-rows-2 gap-8">
                        {/* Mahra */}
                        <div
                            className="relative group overflow-hidden rounded-lg cursor-pointer"
                            onClick={() => onNavigate('mahra')}
                        >
                            <img src="https://ik.imagekit.io/f8opwyddtv/Images/Home%20Page/Grids/M%20(2).opti.webp?updatedAt=1759493829643" alt="Mahra fashion" loading="lazy" className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" />
                            <div className="absolute bottom-6 left-6 right-6 bg-black/50 backdrop-blur-sm p-4 rounded-md text-center text-white">
                                <h3 className="text-xl font-semibold">Explore MAHRA</h3>
                                <p className="text-sm text-gray-200">4 items</p>
                            </div>
                        </div>

                        {/* The new home */}
                        <div className="relative group overflow-hidden rounded-lg">
                             {slideshowImages.map((src, index) => (
                                <img
                                    key={src}
                                    src={src}
                                    alt="Fashion model"
                                    loading="lazy"
                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out transition-transform duration-300 group-hover:scale-110 ${
                                        index === currentIndex ? 'opacity-100' : 'opacity-0'
                                    }`}
                                />
                            ))}
                            <div className="absolute bottom-6 left-6 right-6 bg-black/50 backdrop-blur-sm p-4 rounded-md text-center text-white">
                                <h3 className="text-xl font-semibold">THE NEW HOME. NOW IN YOUR BROWSER</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Categories;
