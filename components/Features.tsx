import React from 'react';
import { HeadphonesIcon, ShieldCheckIcon, StarIcon, BoltIcon } from './icons';

const features = [
    { 
        icon: <HeadphonesIcon className="w-8 h-8 text-gray-800" />, 
        title: "Premium Support", 
        description: "Outstanding premium support, available 24/7" 
    },
    { 
        icon: <ShieldCheckIcon className="w-8 h-8 text-gray-800" />, 
        title: "Secure Payment", 
        description: "Your data is safe with our advanced encryption" 
    },
    { 
        icon: <StarIcon className="w-8 h-8 text-gray-800" filled={false} />, 
        title: "Top Quality", 
        description: "Built to last using only the finest materials" 
    },
    { 
        icon: <BoltIcon className="w-8 h-8 text-gray-800" />, 
        title: "Fast Delivery", 
        description: "Get your order quickly with expedited shipping" 
    },
];

const Features: React.FC = () => {
    return (
        <section className="py-20 bg-[#F2F0EF]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col md:flex-row items-center">
                            <div className="flex-shrink-0 w-16 h-16 mb-4 md:mb-0 md:mr-5 flex items-center justify-center rounded-full border-2 border-black/10">
                                {feature.icon}
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg text-gray-900">{feature.title}</h4>
                                <p className="text-sm text-gray-500">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
