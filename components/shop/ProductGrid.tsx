

import React from 'react';
import type { Product } from '../../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
    products: Product[];
    onProductView: (product: Product) => void;
    onAddToCart: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onProductView, onAddToCart }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
            {products.map(product => (
                <ProductCard 
                    key={product.id} 
                    product={product} 
                    onViewDetails={onProductView} 
                    onAddToCart={onAddToCart} 
                />
            ))}
        </div>
    );
};

export default ProductGrid;
