
import React, { useEffect, useState } from 'react';
import { XIcon } from './icons';

interface TermsModalProps {
  onClose: () => void;
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">{children}</h3>
);

const Paragraph: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <p className="text-base text-gray-700 leading-relaxed mb-3">{children}</p>
);

const TermsModal: React.FC<TermsModalProps> = ({ onClose }) => {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="terms-modal-title">
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
          <h2 id="terms-modal-title" className="text-2xl font-semibold text-gray-800">Terms & Conditions</h2>
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-800" aria-label="Close Terms & Conditions">
            <XIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="p-8 overflow-y-auto hide-scrollbar">
            <p className="text-sm text-gray-500 mb-4">Last Updated: 2024-05-20</p>
            <Paragraph>
                Welcome to Rosalee. By accessing or using our website, you agree to comply with and be bound by the following Terms & Conditions. Please read them carefully before using our services. If you do not agree with any part of these terms, you must not use our website or services.
            </Paragraph>

            <SectionTitle>1. General Terms</SectionTitle>
            <Paragraph>
                <strong>1.1. Acceptance of Terms:</strong> These Terms & Conditions constitute a legally binding agreement between you ("User," "you") and Rosalee ("we," "us," "our"). They govern your use of the Rosalee website and all products and services offered by us.
            </Paragraph>
            <Paragraph>
                <strong>1.2. Changes to Terms:</strong> We reserve the right to modify these Terms & Conditions at any time. Any changes will be effective immediately upon posting on the website. Your continued use of the website following the posting of changes constitutes your acceptance of those changes.
            </Paragraph>
            <Paragraph>
                <strong>1.3. Eligibility:</strong> You must be at least 18 years of age to make a purchase on our website. By using our services, you confirm that you meet this age requirement.
            </Paragraph>

            <SectionTitle>2. Product Information and Pricing</SectionTitle>
            <Paragraph>
                <strong>2.1. Product Accuracy:</strong> We make every effort to display the colors, features, and details of our products as accurately as possible. However, the actual colors you see may vary depending on your monitor settings. We do not guarantee that the product images on our website are 100% accurate.
            </Paragraph>
            <Paragraph>
                <strong>2.2. Pricing:</strong> All prices are listed in Bangladeshi Taka (BDT) unless otherwise specified. We reserve the right to change prices at any time without prior notice. The price charged to you will be the price in effect at the time of your order placement.
            </Paragraph>

            <SectionTitle>3. Order Placement and Acceptance</SectionTitle>
            <Paragraph>
                <strong>3.1. Order Confirmation:</strong> After you place an order, you will receive an email or SMS confirming the details of your purchase. This confirmation does not signify our acceptance of your order, but rather an acknowledgment that we have received it.
            </Paragraph>
            <Paragraph>
                <strong>3.2. Order Acceptance:</strong> Our acceptance of your order and the completion of the contract will occur when we dispatch the products to you. We reserve the right to refuse or cancel any order for any reason, including but not to limited to product availability, errors in pricing or product description, or issues with payment.
            </Paragraph>

            <SectionTitle>4. Payment Rules</SectionTitle>
             <Paragraph>
                <strong>4.1. Online Payments via bKash and Nagad:</strong>
            </Paragraph>
            <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700 mb-3">
                <li><strong>Payment Process:</strong> To pay with bKash or Nagad, you must first complete the transaction using your chosen mobile banking app.</li>
                <li><strong>Transaction ID (TrxID) Submission:</strong> After a successful transaction on your mobile, you will receive a unique Transaction ID (TrxID) from bKash or Nagad. You must then enter this TrxID into the designated "After Payment Verification" window on our website to confirm your payment.</li>
                <li><strong>Verification:</strong> The TrxID is your proof of payment and is mandatory for order processing. Your order will only be processed after we successfully verify the TrxID. Failure to provide the correct TrxID upon request may lead to your order being delayed or canceled.</li>
            </ul>
             <Paragraph>
                <strong>4.2. Cash on Delivery (COD) Feature:</strong>
            </Paragraph>
            <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700 mb-3">
                <li><strong>Availability:</strong> COD is available for specific locations and may be subject to a nominal service fee, which will be specified at checkout.</li>
                <li><strong>Payment at Delivery:</strong> You must pay the full order amount in cash to the delivery agent at the time of delivery. The delivery agent is not authorized to accept any other form of payment.</li>
                <li><strong>Exact Change:</strong> It is your responsibility to have the exact amount of cash ready for payment. The delivery agent may not have change.</li>
            </ul>

            <SectionTitle>5. Shipping and Delivery</SectionTitle>
             <Paragraph>
                <strong>5.1. Delivery Time:</strong> We will make every effort to deliver your order within the estimated timeframe. However, delivery times are not guaranteed and may vary due to unforeseen circumstances such as traffic, weather, or other logistical issues.
            </Paragraph>
             <Paragraph>
                <strong>5.2. No Return Facility After Delivery Man Leaves:</strong>
            </Paragraph>
             <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700 mb-3">
                <li><strong>Inspection at Time of Delivery:</strong> You have the right to inspect the product(s) at the time of delivery, in the presence of the delivery agent.</li>
                <li><strong>Immediate Return:</strong> If you find any issues with the product (e.g., wrong item, damaged item, incorrect size), you MUST inform the delivery agent and return the product(s) to them immediately.</li>
                <li><strong>Finality of Delivery:</strong> Once the delivery agent leaves your premises, the delivery is considered complete and final. No returns, exchanges, or refunds will be accepted for any reason, as per our strict policy. This includes, but is not limited to, issues discovered after the delivery agent has departed.</li>
                <li><strong>Reasoning for Policy:</strong> This policy is in place to ensure the integrity of our products and to prevent misuse of our return process.</li>
            </ul>

            <SectionTitle>6. User Responsibilities</SectionTitle>
            <Paragraph>
                <strong>6.1. Accurate Information:</strong> You are responsible for providing accurate and complete information during the registration and checkout process, including your name, address, and contact details.
            </Paragraph>
             <Paragraph>
                <strong>6.2. Website Use:</strong> You agree not to use the website for any unlawful purpose or in any way that could damage, disable, or impair the website's functionality or security.
            </Paragraph>

            <SectionTitle>7. Limitation of Liability</SectionTitle>
            <Paragraph>
                Rosalee, its directors, employees, and affiliates shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our products or services.
            </Paragraph>

            <SectionTitle>8. Governing Law</SectionTitle>
            <Paragraph>
                These Terms & Conditions are governed by and construed in accordance with the laws of Bangladesh. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Bangladesh.
            </Paragraph>

            <SectionTitle>9. Contact Information</SectionTitle>
            <Paragraph>
                If you have any questions about these Terms & Conditions, please contact us at:
                <br />
                Email: rosaleebd@gmail.com
                <br />
                Phone: +880 1643-566938
            </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
