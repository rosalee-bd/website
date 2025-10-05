import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from '../icons';

interface FilterSectionProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

const FilterSection: React.FC<FilterSectionProps> = ({ title, children, defaultOpen = true }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border-b pb-6">
            <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <h3 className="text-md font-semibold text-black">{title}</h3>
                {isOpen ? <MinusIcon className="w-5 h-5 text-gray-500" /> : <PlusIcon className="w-5 h-5 text-gray-500" />}
            </button>
            <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                    <div className="pt-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterSection;
