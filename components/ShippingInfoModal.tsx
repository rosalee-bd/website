
import React, { useEffect, useState } from 'react';
import { XIcon } from './icons';

interface ShippingInfoModalProps {
  onClose: () => void;
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">{children}</h3>
);

const Paragraph: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <p className="text-base text-gray-700 leading-relaxed mb-3">{children}</p>
);

const ShippingInfoModal: React.FC<ShippingInfoModalProps> = ({ onClose }) => {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="shipping-info-modal-title">
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
          <h2 id="shipping-info-modal-title" className="text-2xl font-semibold text-gray-800">Shipping & Delivery Policy</h2>
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-800" aria-label="Close Shipping & Delivery Policy">
            <XIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="p-8 overflow-y-auto hide-scrollbar">
            <Paragraph>
                This summary outlines the key policies regarding the delivery of your Rosalee order, focusing especially on timelines and the strict return procedure.
            </Paragraph>

            <SectionTitle>Delivery Timeline</SectionTitle>
            <Paragraph>
                We will make every effort to deliver your order within the estimated timeframe provided during checkout. However, please note:
            </Paragraph>
            <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700 mb-3">
                <li>Delivery times are not guaranteed.</li>
                <li>Timelines may vary and be affected by unforeseen circumstances such as traffic, weather conditions, or other logistical issues.</li>
            </ul>

            <SectionTitle>Strict Return Policy: Inspection is Mandatory</SectionTitle>
            <Paragraph>
                Rosalee operates under a strict "No Return Facility After Delivery Man Leaves" policy. Your actions at the time of delivery are final.
            </Paragraph>

            <h4 className="font-bold text-gray-800 mt-4 mb-2">1. Inspection Requirement</h4>
            <Paragraph>
                You have the absolute right and responsibility to inspect the product(s) thoroughly in the presence of the delivery agent.
            </Paragraph>

            <h4 className="font-bold text-gray-800 mt-4 mb-2">2. Immediate Return for Issues</h4>
            <Paragraph>
                If you find any issue with the product (e.g., wrong item, damaged item, incorrect size), you MUST inform the delivery agent and return the product(s) to them immediately at that time.
            </Paragraph>
            
            <h4 className="font-bold text-gray-800 mt-4 mb-2">3. Finality of Delivery</h4>
            <Paragraph>
                Once the delivery agent leaves your premises, the delivery is considered complete and final.
            </Paragraph>
            <Paragraph>
                No returns, exchanges, or refunds will be accepted for any reason, including issues discovered moments after the agent departs. This policy is strictly enforced to ensure product integrity.
            </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfoModal;
