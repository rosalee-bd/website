import React from 'react';
import { FacebookIcon, InstagramIcon } from './icons';

interface FooterProps {
    onOpenTermsModal: () => void;
    onOpenFAQModal: () => void;
    onOpenShippingInfoModal: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenTermsModal, onOpenFAQModal, onOpenShippingInfoModal }) => {
    return (
        <footer className="bg-white text-gray-600">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Contact us */}
                    <div>
                        <h3 className="text-lg font-bold text-black mb-4">Contact us</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start">
                                <span className="mt-1 mr-3">📞</span>
                                <span>Phone: +880 1643-566938</span>
                            </li>
                            <li className="flex items-start">
                                 <span className="mt-1 mr-3">✉️</span>
                                <span>Email: rosaleebd@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h3 className="text-lg font-bold text-black mb-4">Information</h3>
                        <ul className="space-y-3 text-sm">
                            <li><button onClick={onOpenTermsModal} className="hover:text-black transition-colors">Terms & Conditions</button></li>
                            <li><button onClick={onOpenShippingInfoModal} className="hover:text-black transition-colors">Shipping Information</button></li>
                            <li><button onClick={onOpenFAQModal} className="hover:text-black transition-colors">Frequently Asked Questions</button></li>
                        </ul>
                    </div>

                    {/* Rosalee Info */}
                    <div>
                        <h3 className="text-4xl font-billion-success text-[var(--accent-color)] mb-2 flex items-center">
                            Rosalee
                        </h3>
                        <p className="text-sm italic text-gray-500 mb-4">A brand with purpose</p>
                        <div className="flex items-center space-x-4 mb-6">
                            <a href="https://www.facebook.com/profile.php?id=61568031170196" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="text-gray-500 hover:text-black transition-colors">
                                <FacebookIcon className="w-6 h-6" />
                            </a>
                            <a href="https://www.instagram.com/rosalee.bd/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="text-gray-500 hover:text-black transition-colors">
                                <InstagramIcon className="w-6 h-6" />
                            </a>
                        </div>
                        <a href="https://www.instagram.com/zaidrender/" target="_blank" rel="noopener noreferrer" aria-label="Designed by zaidrender">
                            <img src="https://ik.imagekit.io/f8opwyddtv/Images/Footer%20&%20Size/mini_invoicepdflogo.opti.webp?updatedAt=1759521901725" alt="Designed by Zaid" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-white py-4 border-t border-black/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center text-sm text-gray-500">
                    <p>Copyright © 2025 Rosalee creative. all rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
