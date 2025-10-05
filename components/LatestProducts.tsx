import React from 'react';
import type { Product } from '../types';
import { products as allProducts } from '../data/products';
import ProductCard from './shop/ProductCard';

const products: Product[] = allProducts.filter(p => p.showOnHome);

interface LatestProductsProps {
    onProductView: (product: Product) => void;
    onAddToCart: (product: Product) => void;
}

const LatestProducts: React.FC<LatestProductsProps> = ({ onProductView, onAddToCart }) => {
    return (
        <section className="py-10 bg-[#F2F0EF]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-5xl font-playfair font-semibold text-center mb-10 text-gray-900">Latest Products</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
                    {products.map(product => 
                        <ProductCard 
                            key={product.id} 
                            product={product} 
                            onViewDetails={onProductView} 
                            onAddToCart={onAddToCart} 
                        />
                    )}
                </div>
            </div>
        </section>
    );
};

export default LatestProducts;
