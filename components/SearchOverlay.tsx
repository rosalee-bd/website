import React, { useState, useEffect } from 'react';
import { XIcon, SearchIcon, ChevronLeftIcon, ChevronRightIcon } from './icons';
import { products } from '../data/products';
import ProductCard from './shop/ProductCard';
import type { Product } from '../types';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onProductView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onNavigate: (page: 'home' | 'shop' | 'mahra', category?: string) => void;
  onOpenTermsModal: () => void;
  onOpenFAQModal: () => void;
  onOpenShippingInfoModal: () => void;
}

const inspirationProducts = products.filter(p => p.showInSearch && p.brand !== 'Mahra');

const SearchOverlay: React.FC<SearchOverlayProps> = ({ 
  isOpen, 
  onClose, 
  onProductView, 
  onAddToCart,
  onNavigate,
  onOpenTermsModal,
  onOpenFAQModal,
  onOpenShippingInfoModal
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filtered);
  }, [searchQuery]);

  const handleProductSelect = (product: Product) => {
    onProductView(product);
    onClose();
  };

  return (
    <div 
        className={`fixed inset-0 bg-[#F2F0EF] z-50 transform transition-transform duration-300 ease-in-out will-change-transform ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
        role="dialog"
        aria-modal="true"
    >
      <button onClick={onClose} aria-label="Close search" className="absolute top-6 right-6 z-20 p-2 text-gray-600 hover:text-black">
        <XIcon className="w-6 h-6" />
      </button>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col pt-20 pb-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Search our site</h2>
        
        <div className="relative mb-10 max-w-2xl mx-auto w-full z-20">
            <div className="relative w-full rounded-full border border-black/10 bg-white/50 backdrop-blur-sm focus-within:ring-2 focus-within:ring-black/50 transition-all duration-300 z-10">
                <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                    <SearchIcon className="w-5 h-5 text-gray-500" />
                </div>
                <input 
                    type="text" 
                    placeholder="Search for products..." 
                    className="w-full bg-transparent py-3 pl-14 pr-6 text-lg rounded-full focus:outline-none placeholder-gray-500 text-gray-800"
                    autoFocus
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {/* Search results dropdown */}
            <div className={`absolute top-full -mt-4 pt-4 w-full transition-all duration-300 ease-in-out transform ${searchQuery.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-black/5">
                    <ul className="max-h-80 overflow-y-auto divide-y divide-black/5 hide-scrollbar">
                        {searchResults.length > 0 ? (
                            searchResults.map(product => (
                                <li key={product.id}>
                                    <a href="#" onClick={(e) => { e.preventDefault(); handleProductSelect(product); }} className="flex items-center px-4 py-3 hover:bg-black/5 transition-colors">
                                        <img src={product.imageUrl} alt={product.name} className="w-12 h-12 object-cover rounded-md mr-4 flex-shrink-0"/>
                                        <div>
                                            <p className="font-medium text-gray-800">{product.name}</p>
                                            <p className="text-sm text-gray-600">BDT {product.price.toLocaleString()}</p>
                                        </div>
                                    </a>
                                </li>
                            ))
                        ) : (
                            <li className="px-4 py-3 text-gray-500">No products found.</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 flex-grow overflow-y-auto hide-scrollbar">
          <div className="lg:col-span-1">
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><button onClick={() => { onNavigate('shop', 'All Categories'); onClose(); }} className="text-gray-600 hover:text-black">All Categories</button></li>
              <li><button onClick={() => { onNavigate('mahra'); onClose(); }} className="text-gray-600 hover:text-black">Mahra</button></li>
            </ul>
            <h3 className="text-lg font-medium mb-4 mt-8">Information</h3>
            <ul className="space-y-3">
                <li><button onClick={() => { onClose(); onOpenTermsModal(); }} className="text-gray-600 hover:text-black">Terms & Conditions</button></li>
                <li><button onClick={() => { onClose(); onOpenShippingInfoModal(); }} className="text-gray-600 hover:text-black">Shipping Information</button></li>
                <li><button onClick={() => { onClose(); onOpenFAQModal(); }} className="text-gray-600 hover:text-black">FAQ</button></li>
            </ul>
          </div>
          <div className="lg:col-span-4">
            <h3 className="text-lg font-medium mb-4">Need some inspiration?</h3>
            <div className="relative">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {inspirationProducts.map(product => (
                        <ProductCard 
                            key={product.id}
                            product={product}
                            onViewDetails={(p) => {
                                onProductView(p);
                                onClose();
                            }}
                            onAddToCart={(p) => onAddToCart(p)}
                        />
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
