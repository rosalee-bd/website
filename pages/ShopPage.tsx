

import React, { useState, useMemo, useEffect } from 'react';
import ProductGrid from '../components/shop/ProductGrid';
import { products as allProducts } from '../data/products';
import type { Product } from '../types';
import { categoryDetails } from '../data/categories';
import FilterBar from '../components/shop/FilterBar';

type SortOption = 'featured' | 'best-selling' | 'price-asc' | 'price-desc';

const sortOptions: { [key in SortOption]: string } = {
  'featured': 'Featured',
  'best-selling': 'Alphabetically, A-Z',
  'price-asc': 'Price: Low to High',
  'price-desc': 'Price: High to Low',
};

interface ShopPageProps {
  initialCategory: string;
  onNavigate: (page: 'home' | 'shop' | 'checkout', category?: string) => void;
  onProductView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

const products = allProducts.filter(p => p.brand !== 'Mahra');

const ShopPage: React.FC<ShopPageProps> = ({ initialCategory, onNavigate, onProductView, onAddToCart }) => {
    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [sortOption, setSortOption] = useState<SortOption>('featured');

    useEffect(() => {
      setSelectedCategory(initialCategory);
    }, [initialCategory]);

    const currentCategoryInfo = useMemo(() => {
        const nonMahraCategoryDetails = categoryDetails.filter(c => c.name !== 'Panjabi');
        return nonMahraCategoryDetails.find(cat => cat.name === selectedCategory) || nonMahraCategoryDetails.find(cat => cat.name === 'All Categories') || nonMahraCategoryDetails[0];
    }, [selectedCategory]);

    const filteredProducts = useMemo(() => {
        if (selectedCategory === 'All Categories') {
            return products;
        }
        return products.filter(p => p.category === selectedCategory);
    }, [selectedCategory]);

    const sortedProducts = useMemo(() => {
        const sortableProducts = [...filteredProducts];
        switch (sortOption) {
            case 'price-asc':
                return sortableProducts.sort((a, b) => a.price - b.price);
            case 'price-desc':
                return sortableProducts.sort((a, b) => b.price - a.price);
            case 'best-selling':
                return sortableProducts.sort((a, b) => a.name.localeCompare(b.name));
            case 'featured':
            default:
                return sortableProducts;
        }
    }, [filteredProducts, sortOption]);

    return (
        <div className="bg-[#F2F0EF]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <main className="w-full">
                    <div className="bg-[var(--accent-color)] text-center py-20 px-6 rounded-lg mb-8">
                        <h1 className="text-white text-5xl font-playfair font-semibold">
                            {currentCategoryInfo.name}
                        </h1>
                        <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">{currentCategoryInfo.description}</p>
                    </div>

                    <FilterBar 
                        sortOption={sortOption}
                        onSortChange={setSortOption}
                        sortOptions={sortOptions}
                    />

                    <ProductGrid 
                        products={sortedProducts} 
                        onProductView={onProductView} 
                        onAddToCart={onAddToCart} 
                    />
                </main>
            </div>
        </div>
    );
};

export default ShopPage;
