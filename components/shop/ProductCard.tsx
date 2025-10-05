
import React from 'react';
import type { Product } from '../../types';
import { ShoppingBagIcon } from '../icons';

interface ProductCardProps {
    product: Product;
    onViewDetails: (product: Product) => void;
    onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails, onAddToCart }) => {
    const hasSale = product.originalPrice && product.originalPrice > product.price;
    
    const handleAddToCartClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (product.isSoldOut) return;
        onAddToCart(product);
    }

    return (
        <div className="group text-center">
            <div 
                className="relative bg-gray-100 rounded-md overflow-hidden aspect-[4/5] mb-2 cursor-pointer"
                onClick={() => onViewDetails(product)}
            >
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {product.isSoldOut && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
                        <span className="text-white text-sm font-bold uppercase tracking-wider border-2 border-white px-4 py-2">
                            Sold Out
                        </span>
                    </div>
                )}
                
                {product.tag && product.tag.startsWith('-') && (
                    <span className="absolute top-4 right-4 text-xs font-semibold px-2 py-1 rounded-full text-white bg-[var(--accent-color)] z-10">
                        {product.tag}
                    </span>
                )}
                
                {product.saleEnds && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm text-gray-800 text-xs font-medium px-3 py-1.5 rounded-md z-10">
                        {product.saleEnds}
                    </div>
                )}

                {/* Hover Actions */}
                <div className="absolute bottom-0 left-0 right-0 p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out flex justify-center items-center z-20">
                    <button 
                        onClick={handleAddToCartClick} 
                        disabled={product.isSoldOut}
                        className="h-10 flex-grow flex items-center justify-center bg-white rounded-md text-gray-700 hover:text-white hover:bg-black transition-colors shadow-sm border border-black/10 text-xs font-bold uppercase px-3 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed" 
                        aria-label={product.isSoldOut ? "Product is sold out" : "Add to cart"}
                    >
                        <ShoppingBagIcon className="w-5 h-5 mr-2" />
                        <span>{product.isSoldOut ? 'Sold Out' : 'Add to Cart'}</span>
                    </button>
                </div>
            </div>
            
            <div className="px-1" onClick={() => onViewDetails(product)} role="button">
                <h3 className="text-lg font-medium text-gray-800 hover:text-black leading-tight mt-3 mb-1">
                    {product.name}
                </h3>
                
                <p className="text-xl font-bold text-[var(--accent-color)]">
                    {hasSale ? (
                        <>
                            <span>BDT {product.price.toLocaleString()}</span>
                            <span className="ml-2 line-through text-gray-400 font-normal text-base">BDT {product.originalPrice?.toLocaleString()}</span>
                        </>
                    ) : (
                        <span>BDT {product.price.toLocaleString()}</span>
                    )}
                </p>
            </div>
        </div>
    );
};

export default ProductCard;
