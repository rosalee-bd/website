import React, { useEffect, useState } from 'react';
import { XIcon } from './icons';

interface FAQModalProps {
  onClose: () => void;
}

const Question: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h3 className="text-lg font-bold text-[var(--accent-color)] mt-4 mb-2">{children}</h3>
);

const Answer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <p className="text-base text-gray-700 leading-relaxed">{children}</p>
);

const FAQModal: React.FC<FAQModalProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const animationFrameId = requestAnimationFrame(() => {
      setIsVisible(true);
    });
    
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="faq-modal-title">
      <div 
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        onClick={handleClose}
        aria-hidden="true"
      ></div>
      <div 
        className={`relative bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col transition-all duration-300 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        style={{ animation: isVisible ? 'fade-zoom-in 0.3s ease-out forwards' : 'none' }}
      >
        <div className="flex items-center justify-between p-6 border-b flex-shrink-0">
          <h2 id="faq-modal-title" className="text-2xl font-semibold text-gray-800">Frequently Asked Questions</h2>
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-800" aria-label="Close Frequently Asked Questions">
            <XIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="p-8 overflow-y-auto hide-scrollbar">
            <h3 className="text-xl font-bold text-gray-900 mb-4">General Questions</h3>
            
            <Question>Q1: What are the terms of use for the Rosalee website?</Question>
            <Answer>A: By using our website, you agree to comply with our Terms & Conditions. These terms govern your use of the website and all services, and we reserve the right to update them at any time.</Answer>

            <Question>Q2: Do I need to be a certain age to make a purchase?</Question>
            <Answer>A: Yes, you must be at least 18 years of age to place an order on the Rosalee website.</Answer>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-4">Ordering and Products</h3>

            <Question>Q3: How accurate are the product images and descriptions?</Question>
            <Answer>A: We make every effort to display products as accurately as possible, but the colors you see may vary depending on your screen settings. We do not guarantee 100% accuracy.</Answer>

            <Question>Q4: Can prices change after I place an order?</Question>
            <Answer>A: The price charged to you will be the price that was listed at the time you placed your order. However, we reserve the right to change our prices at any time without prior notice.</Answer>

            <Question>Q5: What happens after I place an order?</Question>
            <Answer>A: You will receive an email or SMS to confirm that we have received your order. The contract is considered complete and accepted once we dispatch the products to you. We reserve the right to cancel any order for various reasons.</Answer>
            
            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-4">Payment Information</h3>

            <Question>Q6: How do I pay using bKash or Nagad?</Question>
            <Answer>A: You must first complete the transaction using your bKash or Nagad mobile app. Afterwards, you will receive a unique Transaction ID (TrxID). You must then enter this TrxID into the designated "After Payment Verification" window on our website to confirm your payment.</Answer>
            
            <Question>Q7: Is a Transaction ID (TrxID) required?</Question>
            <Answer>A: Yes, the TrxID is your proof of payment and is mandatory. Your order will only be processed after we successfully verify the TrxID.</Answer>
            
            <Question>Q8: What are the rules for Cash on Delivery (COD)?</Question>
            <Answer>A: COD is available in specific locations. You must pay the full amount in cash to the delivery agent at the time of delivery. Please have the exact amount ready as the agent may not have change.</Answer>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-4">Shipping, Delivery, and Returns</h3>
            
            <Question>Q9: How long will it take to receive my order?</Question>
            <Answer>A: We will do our best to deliver within the estimated timeframe, but please note that delivery times are not guaranteed and may be affected by external factors like traffic or weather.</Answer>
            
            <Question>Q10: Can I return a product after the delivery agent has left?</Question>
            <Answer>A: No. Our policy is "no return facility after delivery man leaves." You are required to inspect the product in the presence of the delivery agent. If there is an issue, you must return the product to them immediately. Once the agent departs, the delivery is considered final.</Answer>
        </div>
      </div>
    </div>
  );
};

export default FAQModal;
