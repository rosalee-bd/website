

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon } from '../icons';

type SortOption = 'featured' | 'best-selling' | 'price-asc' | 'price-desc';

interface FilterBarProps {
    sortOption: SortOption;
    onSortChange: (option: SortOption) => void;
    sortOptions: { [key in SortOption]: string };
}

const useDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return { isOpen, setIsOpen, dropdownRef };
};

const FilterDropdown: React.FC<{ title: string; options?: string[] }> = ({ title, options }) => {
    const { isOpen, setIsOpen, dropdownRef } = useDropdown();

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1.5 text-sm border border-gray-300 rounded px-3 py-1.5 bg-white hover:border-gray-400 transition-colors"
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                <span>{title}</span>
                <ChevronDownIcon className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {options && (
                <div className={`absolute top-full mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-black/10 origin-top-left transition-all duration-200 ease-in-out ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                    <ul className="py-1" role="menu">
                        {options.map(option => (
                            <li key={option} role="none">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-black/5"
                                    role="menuitem"
                                >
                                    {option}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};


const FilterBar: React.FC<FilterBarProps> = ({ sortOption, onSortChange, sortOptions }) => {
    const { isOpen: isSortOpen, setIsOpen: setIsSortOpen, dropdownRef: sortDropdownRef } = useDropdown();

    return (
        <div className="flex items-center justify-between mb-8">
            {/* Left side: Filters */}
            <div className="flex items-center gap-2">
                <span className="text-xl font-semibold text-gray-900 font-playfair mr-2">Filter:</span>
                <FilterDropdown title="Availability" options={['In Stock', 'On Sale']} />
                <FilterDropdown title="Price" options={['Under $50', '$50 - $100', 'Over $100']} />
                <FilterDropdown title="Size" options={['S', 'M', 'L', 'XL']} />
            </div>

            {/* Right side: Sorting */}
            <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <div className="relative" ref={sortDropdownRef}>
                    <button
                        onClick={() => setIsSortOpen(!isSortOpen)}
                        className="flex items-center gap-1.5 text-sm border border-gray-300 rounded px-3 py-1.5 bg-white hover:border-gray-400 transition-colors"
                        aria-haspopup="true"
                        aria-expanded={isSortOpen}
                    >
                        <span>{sortOptions[sortOption]}</span>
                        <ChevronDownIcon className={`w-4 h-4 text-gray-500 transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
                    </button>
                     <div className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-black/10 origin-top-right transition-all duration-200 ease-in-out ${isSortOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                        <ul className="py-1" role="menu">
                            {Object.entries(sortOptions).map(([key, value]) => (
                                <li key={key} role="none">
                                    <button
                                        onClick={() => { onSortChange(key as SortOption); setIsSortOpen(false); }}
                                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-black/5"
                                        role="menuitem"
                                    >
                                        {value}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterBar;
