import React from 'react';

interface HeroProps {
    onNavigate: (page: 'shop', category?: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
    return (
        <section className="relative h-[80vh]">
            <img 
                src="https://ik.imagekit.io/f8opwyddtv/Images/Home%20Page/mini_DSC03364%20(1).opti.webp?updatedAt=1759080567795" 
                alt="Autumn'25 collection"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center text-white">
                <p className="text-xl tracking-widest flex items-baseline justify-center animate-fade-in" style={{ animationDelay: '100ms' }}>
                    <span className="uppercase">Welcome to</span>
                    <span className="font-billion-success normal-case text-4xl ml-2">Rosalee</span>
                </p>
                <p className="text-2xl mt-4 animate-fade-in" style={{ animationDelay: '200ms' }}>Introducing</p>
                <h1 className="text-7xl md:text-8xl font-billion-success my-0 py-8 leading-normal tracking-wide crimson-shadow-text animate-fade-in" style={{ animationDelay: '300ms' }}>Autumn'25</h1>
                <button 
                    onClick={() => onNavigate('shop', 'All Categories')}
                    className="mt-6 bg-white text-black font-semibold py-3 px-10 rounded-full hover:bg-[var(--accent-color)] hover:text-white transition duration-300 animate-fade-in" style={{ animationDelay: '400ms' }}>
                    SHOP NOW
                </button>
            </div>
        </section>
    );
};

export default Hero;
