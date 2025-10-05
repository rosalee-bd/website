

import React from 'react';
import FilterSection from './FilterSection';
import { XIcon } from '../icons';
import { products } from '../../data/products';

const categories = ["All Categories", "Drop Tees", "Hoodies", "Shirts", "Sweatshirts", "Panjabi"];
const sizes = ["S (15)", "M (16)", "L (16)", "XL (7)"];


const featuredProducts = products.slice(0, 3);

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
}

const PriceRangeSlider: React.FC = () => {
    const [price, setPrice] = React.useState(599);

    return (
        <div>
            <input 
                type="range" 
                min="2" 
                max="1000" 
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-maroon"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>Price: BDT {price} — BDT 1000</span>
            </div>
        </div>
    );
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, selectedCategory, onCategoryChange }) => {
    return (
        <>
            <div
                className={`fixed inset-0 bg-black/40 z-40 transition-opacity lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
                aria-hidden="true"
            ></div>

            <aside
                id="filter-sidebar"
                className={`fixed top-0 left-0 z-50 h-full w-[300px] bg-[#F2F0EF] 
                           transition-transform duration-300 ease-in-out
                           lg:static lg:h-auto lg:shrink-0 lg:transform-none
                           ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                           lg:translate-x-0`}
                role="dialog"
                aria-modal={isOpen}
                aria-labelledby="filter-sidebar-title"
            >
                <div className="p-6 h-full overflow-y-auto">
                     <div className="flex items-center justify-between lg:hidden mb-6">
                        <h2 id="filter-sidebar-title" className="text-lg font-semibold text-black">FILTER</h2>
                        <button onClick={onClose} className="p-2 -mr-2" aria-label="Close filters">
                            <XIcon className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="space-y-8">
                        <FilterSection title="Product Categories">
                            <ul className="space-y-3">
                                {categories.map(cat => (
                                    <li key={cat}>
                                        <a href="#" onClick={(e) => { e.preventDefault(); onCategoryChange(cat); }} className={`flex justify-between items-center text-gray-600 hover:text-black ${cat === selectedCategory ? 'font-bold text-black' : ''}`}>
                                            <span>{cat}</span>
                                            <span className="text-xs">({cat === 'All Categories' ? products.length : products.filter(p=>p.category === cat).length})</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </FilterSection>

                        <FilterSection title="Availability">
                            <div className="space-y-3">
                                <label className="flex items-center text-gray-600">
                                    <input type="checkbox" className="h-4 w-4 rounded border-black/20 text-black focus:ring-black" />
                                    <span className="ml-2">On sale</span>
                                </label>
                                <label className="flex items-center text-gray-600">
                                    <input type="checkbox" className="h-4 w-4 rounded border-black/20 text-black focus:ring-black" />
                                    <span className="ml-2">In stock</span>
                                </label>
                                <label className="flex items-center text-gray-600">
                                    <input type="checkbox" className="h-4 w-4 rounded border-black/20 text-black focus:ring-black" />
                                    <span className="ml-2">Out of stock</span>
                                </label>
                            </div>
                        </FilterSection>

                        <FilterSection title="Price">
                            <PriceRangeSlider />
                        </FilterSection>

                        <FilterSection title="Size" defaultOpen={false}>
                            <ul className="space-y-3">
                                {sizes.map(size => (
                                     <li key={size} className="flex justify-between items-center text-gray-600">
                                        <label className="flex items-center">
                                            <input type="checkbox" className="h-4 w-4 rounded border-black/20 text-black focus:ring-black" />
                                            <span className="ml-2">{size.split(' ')[0]}</span>
                                        </label>
                                        <span className="text-xs">{size.split(' ')[1]}</span>
                                    </li>
                                ))}
                            </ul>
                        </FilterSection>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
