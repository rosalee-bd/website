import React from 'react';
import { HomeIcon, BuildingStorefrontIcon, SparklesIcon } from './icons';

interface BottomNavBarProps {
    onNavigate: (page: 'home' | 'shop' | 'mahra', category?: string) => void;
    currentPage: 'home' | 'shop' | 'mahra';
}

const BottomNavBar: React.FC<BottomNavBarProps> = ({ onNavigate, currentPage }) => {

    const navItems = [
        { page: 'home', label: 'Home', icon: HomeIcon },
        { page: 'shop', label: 'Shop', icon: BuildingStorefrontIcon },
        { page: 'mahra', label: 'Mahra', icon: SparklesIcon },
    ];

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#F2F0EF]/90 backdrop-blur-md border-t border-black/10 z-40">
            <div className="flex justify-around items-center h-16">
                {navItems.map(item => {
                    const isMahra = item.page === 'mahra';
                    const isActive = currentPage === item.page;
                    const color = isMahra ? (isActive ? 'text-black' : 'text-[var(--accent-color)]') : (isActive ? 'text-black' : 'text-gray-500');

                    const handleClick = () => {
                         if (item.page === 'shop') {
                             onNavigate('shop', 'All Categories');
                         } else {
                            onNavigate(item.page as 'home' | 'shop' | 'mahra');
                         }
                    };

                    const ButtonContent = (
                        <>
                            <item.icon className={`w-6 h-6 mb-0.5 transition-colors group-hover:text-black`} />
                            <span className={`text-[11px] font-semibold transition-colors group-hover:text-black`}>{item.label}</span>
                        </>
                    );

                    return (
                        <button 
                            key={item.page}
                            onClick={handleClick}
                            className={`flex flex-col items-center justify-center w-full h-full group ${color}`}
                            aria-current={isActive ? 'page' : undefined}
                        >
                            {ButtonContent}
                        </button>
                    )
                })}
            </div>
        </nav>
    );
};

export default BottomNavBar;
