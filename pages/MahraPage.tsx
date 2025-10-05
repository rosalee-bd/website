import React from 'react';
import { ShoppingBagIcon } from '../components/icons';
import { products } from '../data/products';
import type { Product } from '../types';

interface MahraPageProps {
    onProductView: (product: Product) => void;
    onAddToCart: (product: Product) => void;
}

const mahraProducts: Product[] = products.filter(p => p.category === 'Panjabi');

const PromoCard: React.FC<{ product: Product; onProductView: (product: Product) => void; onAddToCart: (product: Product) => void; }> = ({ product, onProductView, onAddToCart }) => {
    const handleAddToCartClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onAddToCart(product);
    };
    
    return (
        <div className="group text-center">
            <div 
                className="relative bg-gray-100 overflow-hidden aspect-[4/5] cursor-pointer"
                onClick={() => onProductView(product)}
            >
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out flex justify-center items-center">
                    <button onClick={handleAddToCartClick} className="h-12 flex-grow flex items-center justify-center bg-white rounded-md text-gray-700 hover:text-white hover:bg-black transition-colors shadow-lg border border-black/10 text-sm font-bold uppercase px-4" aria-label="Add to cart">
                        <ShoppingBagIcon className="w-5 h-5 mr-2" />
                        <span>ADD TO CART</span>
                    </button>
                </div>
            </div>
            <div className="pt-4 px-1" onClick={() => onProductView(product)} role="button">
                <h3 className="text-xl font-medium text-gray-800 leading-tight mb-1">
                    {product.name}
                </h3>
                <p className="text-3xl font-bold text-gray-900">
                    BDT {product.price.toLocaleString()}
                </p>
            </div>
        </div>
    );
};


const MahraPage: React.FC<MahraPageProps> = ({ onProductView, onAddToCart }) => {
  return (
    <div className="bg-[var(--bg-color)] text-black animate-fade-in">
        {/* Hero Section */}
        <section id="mahra-hero" className="relative h-[80vh]">
            <img 
                src="https://ik.imagekit.io/f8opwyddtv/Images/Mahra%20Page/M%20(2).opti.webp?updatedAt=1759502472230" 
                alt="Elegant Panjabi collection by Mahra"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center text-white">
                <p className="text-xl md:text-2xl font-playfair animate-fade-in" style={{ animationDelay: '200ms' }}>
                    An Ode to Heritage
                </p>
                <h1 className="text-7xl md:text-8xl font-cinzel my-4 text-[var(--bg-color)] animate-fade-in" style={{ animationDelay: '400ms' }}>
                    M A H R A
                </h1>
                <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-200 mb-8 animate-fade-in" style={{ animationDelay: '600ms' }}>
                    Experience the pinnacle of Panjabi craftsmanship. Each piece in the Mahra collection is a testament to timeless style, designed for the modern connoisseur.
                </p>
                <button 
                    onClick={() => document.getElementById('mahra-products')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-white text-black font-semibold py-3 px-10 rounded-full hover:bg-[var(--accent-color)] hover:text-white transition duration-300 animate-fade-in" style={{ animationDelay: '800ms' }}>
                    Explore The Collection
                </button>
            </div>
        </section>

        {/* Section: Shop Mahra CTA */}
        <section className="bg-[var(--accent-color)] text-[var(--bg-color)] py-16 lg:py-20 flex items-center justify-center">
            <h2 className="text-5xl lg:text-6xl font-extrabold uppercase tracking-tight">SHOP MAHRA</h2>
        </section>


        {/* Section: Product Cards */}
        <section id="mahra-products" className="bg-[var(--bg-color)] py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
                    {mahraProducts.map(product => (
                        <PromoCard
                            key={product.id}
                            product={product}
                            onProductView={onProductView}
                            onAddToCart={onAddToCart}
                        />
                    ))}
                </div>
            </div>
        </section>
    </div>
  );
};

export default MahraPage;
