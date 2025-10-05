
import React from 'react';
import { ArrowUpRightIcon } from './icons';

const categories = ["Shirts", "Drop Tees", "Hoodies", "Sweatshirts", "Panjabi"];

interface SustainableStyleProps {
    onNavigate: (page: 'home' | 'shop' | 'mahra', category?: string) => void;
}

const SustainableStyle: React.FC<SustainableStyleProps> = ({ onNavigate }) => {
    
    const handleCategoryClick = (category: string) => {
        if (category === 'Panjabi') {
            onNavigate('mahra');
        } else {
            onNavigate('shop', category);
        }
    };

    return (
        <section className="py-20 bg-[var(--accent-color)] text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-5xl font-playfair font-semibold">Sustainable Style</h2>
                <p className="mt-4 text-lg">Not just for sustainable style, but for all.</p>
                <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
                    {categories.map(category => (
                        <button 
                            key={category} 
                            onClick={() => handleCategoryClick(category)}
                            className="bg-white text-black font-semibold py-2 px-6 rounded-md hover:bg-black/10 transition-colors"
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="mt-8">
                    <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('shop', 'All Categories'); }} className="inline-flex items-center gap-2 text-white hover:underline">
                        View all categories
                        <ArrowUpRightIcon className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SustainableStyle;
