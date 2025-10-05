import React from 'react';
import { SearchIcon, ShoppingBagIcon, ChevronDownIcon } from './icons';
import { products } from '../data/products';
import type { Product } from '../types';

interface NavLinksProps {
    className?: string;
    onNavigate: (page: 'home' | 'shop' | 'mahra', category?: string) => void;
    onProductView: (product: Product) => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ className, onNavigate, onProductView }) => {
    const latestProducts = products.filter(p => p.showOnHome).slice(0, 3);
    const categories = ["Drop Tees", "Hoodies", "Shirts", "Sweatshirts"];

    return (
        <div className={className}>
            <button onClick={() => onNavigate('home')} className="text-base font-bold uppercase tracking-wider text-gray-600 hover:text-[var(--accent-color)] py-2 text-left">Home</button>
            
            <div className='relative group'>
                <button 
                    onClick={() => onNavigate('shop', 'All Categories')} 
                    className={`text-base font-bold uppercase tracking-wider text-gray-600 hover:text-[var(--accent-color)] flex items-center py-2 w-full`}
                >
                    <span>Shop</span>
                    <ChevronDownIcon className={`w-4 h-4 ml-1`} />
                </button>
                
                {/* Desktop Mega Menu */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 -translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-in-out z-50">
                    <div className="bg-white shadow-xl rounded-lg w-[700px] lg:w-[800px] border border-black/10 p-8">
                        <div className="flex gap-10">
                            {/* Left side: Categories */}
                            <div className="w-1/3">
                                <h4 className="font-bold text-gray-800 mb-4 text-base tracking-wider uppercase">Categories</h4>
                                <div className="space-y-3">
                                    <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('shop', 'All Categories'); }} className="block text-base text-gray-600 hover:text-[var(--accent-color)] cursor-pointer">All Categories</a>
                                    {categories.map(cat => (
                                        <a key={cat} href="#" onClick={(e) => { e.preventDefault(); onNavigate('shop', cat); }} className="block text-base text-gray-600 hover:text-[var(--accent-color)] cursor-pointer">{cat}</a>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Right side: Products */}
                            <div className="w-2/3">
                                <h4 className="font-bold text-gray-800 mb-4 text-base tracking-wider uppercase">New Arrivals</h4>
                                <div className="grid grid-cols-3 gap-6">
                                    {latestProducts.map(product => (
                                        <a href="#" key={product.id} onClick={(e) => { e.preventDefault(); onProductView(product); }} className="block group/product text-left">
                                            <div className="bg-gray-100 rounded-md overflow-hidden aspect-square">
                                                <img src={product.imageUrl} alt={product.name} loading="lazy" className="w-full h-full object-cover group-hover/product:scale-105 transition-transform duration-300"/>
                                            </div>
                                            <h5 className="mt-2 text-sm text-gray-800 group-hover/product:text-[var(--accent-color)] font-medium truncate">{product.name}</h5>
                                            <p className="text-sm font-semibold text-gray-900">BDT {product.price.toLocaleString()}</p>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button onClick={() => onNavigate('mahra')} className="text-base font-bold uppercase tracking-wider text-[var(--accent-color)] hover:text-black py-2 text-left">Mahra</button>
        </div>
    );
};


interface HeaderProps {
    onNavigate: (page: 'home' | 'shop' | 'checkout' | 'mahra', category?: string) => void;
    onCartOpen: () => void;
    onSearchOpen: () => void;
    cartItemCount: number;
    onProductView: (product: Product) => void;
}


const Header: React.FC<HeaderProps> = ({ onNavigate, onCartOpen, onSearchOpen, cartItemCount, onProductView }) => {
    return (
        <header className="bg-[#F2F0EF]/80 backdrop-blur-md sticky top-0 z-40 border-b border-black/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    
                    {/* Left: Logo */}
                    <div className="md:flex-1">
                        <button onClick={() => onNavigate('home')} aria-label="Go to homepage">
                            <span className="text-4xl font-billion-success text-[var(--accent-color)] relative top-1">Rosalee</span>
                        </button>
                    </div>

                    {/* Center: Desktop Navigation */}
                    <nav className="hidden md:flex md:justify-center md:flex-1">
                        <NavLinks className="flex items-center space-x-8" onNavigate={onNavigate} onProductView={onProductView} />
                    </nav>
                    
                    {/* Right: Icons */}
                    <div className="flex items-center justify-end md:flex-1 space-x-4 sm:space-x-6">
                        <button onClick={onSearchOpen} className="text-gray-600 hover:text-black" aria-label="Open search bar">
                            <SearchIcon className="w-6 h-6"/>
                        </button>
                        <button onClick={onCartOpen} className="relative text-gray-600 hover:text-black" aria-label={`View shopping bag - ${cartItemCount} items`}>
                            <ShoppingBagIcon className="w-6 h-6" />
                            <span className="absolute -top-1 -right-1.5 bg-[var(--accent-color)] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-semibold">{cartItemCount}</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
