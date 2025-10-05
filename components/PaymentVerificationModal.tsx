import React, { useState, useEffect } from 'react';
import { XIcon } from './icons';
import type { Product } from '../types';

type CartItem = Product & { quantity: number };

interface PaymentVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (details: {
    senderName: string;
    senderNumber: string;
    paymentDate: string;
    trxId: string;
    notes: string;
  }) => void;
  paymentMethod: 'bKash' | 'Nagad';
  cartItems: CartItem[];
  subtotal: number;
  shippingCost: number | null;
  onlinePaymentFee: number;
  totalAmount: number;
}

const FormInput: React.FC<React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> & { label: string, as?: 'input' | 'textarea' }> = ({ label, id, as = 'input', ...props }) => (
    <div>
        <label htmlFor={id} className="block text-base font-medium text-gray-700">{label}</label>
        {as === 'textarea' ? (
             <textarea id={id} {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>} rows={3} className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-lg text-gray-900 shadow-sm placeholder-gray-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black" />
        ) : (
            <input id={id} {...props as React.InputHTMLAttributes<HTMLInputElement>} className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-lg text-gray-900 shadow-sm placeholder-gray-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black" />
        )}
    </div>
);

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

const PaymentVerificationModal: React.FC<PaymentVerificationModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  paymentMethod,
  cartItems,
  subtotal,
  shippingCost,
  onlinePaymentFee,
  totalAmount,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [step, setStep] = useState(1);
  const [isStepChanging, setIsStepChanging] = useState(false);

  // Form state
  const [senderName, setSenderName] = useState('');
  const [senderNumber, setSenderNumber] = useState('');
  const [paymentDate, setPaymentDate] = useState(new Date().toISOString().split('T')[0]);
  const [trxId, setTrxId] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => setIsVisible(true));
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
        onClose();
        setTimeout(() => {
            setStep(1);
            setSenderName('');
            setSenderNumber('');
            setPaymentDate(new Date().toISOString().split('T')[0]);
            setTrxId('');
            setNotes('');
        }, 100);
    }, 300);
  };
  
  const changeStep = (newStep: number) => {
    setIsStepChanging(true);
    setTimeout(() => {
        setStep(newStep);
        setIsStepChanging(false);
    }, 150)
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ senderName, senderNumber, paymentDate, trxId, notes });
    handleClose();
  };

  if (!isOpen && !isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div 
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        onClick={handleClose}
        aria-hidden="true"
      ></div>

      <div 
        className={`relative bg-white rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] md:min-h-[650px] flex flex-col transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      >
        <div className="flex items-center justify-between p-5 border-b flex-shrink-0">
          <h2 className="text-2xl font-semibold text-gray-800">After Payment Verification</h2>
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-800" aria-label="Close">
            <XIcon className="w-6 h-6" />
          </button>
        </div>

        <div className={`p-8 overflow-y-auto hide-scrollbar flex-grow transition-opacity duration-150 ${isStepChanging ? 'opacity-0' : 'opacity-100'}`}>
            {step === 1 && (
                <div className="grid md:grid-cols-2 gap-16 h-full">
                    <div className="flex flex-col items-center justify-center text-center p-4 md:p-8">
                        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Step 1: Send Money</h3>
                        <p className="text-xl text-gray-600 mb-8 max-w-md">Please send the total amount to the number below using your {paymentMethod} account.</p>
                        <div className="bg-gray-100 p-6 rounded-lg border-2 border-dashed w-full max-w-sm">
                            <p className="text-xl text-gray-600 mb-2">The {paymentMethod} Number:</p>
                            <p className="text-4xl font-bold text-gray-900 tracking-wider whitespace-nowrap">+880 1743-606364</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">Order Summary</h4>
                            <div className="space-y-3 max-h-48 overflow-y-auto hide-scrollbar pr-2 mb-4 border-b pb-4">
                                {cartItems.map(item => (
                                    <div key={item.id} className="flex justify-between items-start text-sm">
                                        <div>
                                            <p className="font-medium text-gray-800">{item.name} <span className="text-gray-500">x{item.quantity}</span></p>
                                            <p className="text-gray-500">{item.sizes?.[0] || 'One Size'}</p>
                                        </div>
                                        <p className="font-medium text-gray-800">BDT. {(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="font-medium text-gray-800">BDT. {subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Shipping</span>
                                    <span className="font-medium text-gray-800">BDT. {(shippingCost ?? 0).toFixed(2)}</span>
                                </div>
                                {onlinePaymentFee > 0 && (
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Online Payment Fee</span>
                                        <span className="font-medium text-gray-800">BDT. {onlinePaymentFee.toFixed(2)}</span>
                                    </div>
                                )}
                            </div>
                            <div className="flex justify-between items-center mt-4 pt-4 border-t">
                                <span className="text-base font-semibold text-gray-800">Total</span>
                                <span className="text-2xl font-bold text-[var(--accent-color)]">BDT. {totalAmount.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {step === 2 && (
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Step 2: Submit Details</h3>
                    <form id="verification-form" onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormInput label={`${paymentMethod} Name`} id="senderName" type="text" value={senderName} onChange={e => setSenderName(e.target.value)} required />
                            <FormInput label={`${paymentMethod} Number`} id="senderNumber" type="text" value={senderNumber} onChange={e => setSenderNumber(e.target.value)} required />
                        </div>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormInput label="Date of Payment" id="paymentDate" type="date" value={paymentDate} onChange={e => setPaymentDate(e.target.value)} required />
                             <div>
                                <label htmlFor="trxId" className="block text-base font-medium text-gray-700">Transaction ID (TrxID)</label>
                                <div className="relative mt-1">
                                    <input 
                                        id="trxId" 
                                        type="text" 
                                        value={trxId} 
                                        onChange={e => setTrxId(e.target.value)}
                                        className="block w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-lg text-gray-900 shadow-sm placeholder-gray-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black pr-10"
                                        required 
                                        maxLength={10}
                                        placeholder="Enter TrxID"
                                    />
                                    {trxId.length === 10 && (
                                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                            <CheckIcon className="h-5 w-5 text-green-500" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <FormInput as="textarea" label="Additional Notes (optional)" id="notes" value={notes} onChange={e => setNotes(e.target.value)} />
                    </form>
                </div>
            )}
        </div>

        <div className="p-5 border-t flex-shrink-0 flex items-center justify-between bg-gray-50 rounded-b-lg">
            <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full transition-colors ${step === 1 ? 'bg-black' : 'bg-gray-300'}`}></div>
                <div className={`w-3 h-3 rounded-full transition-colors ${step === 2 ? 'bg-black' : 'bg-gray-300'}`}></div>
            </div>

            <div>
            {step === 1 && (
                <button 
                    onClick={() => changeStep(2)}
                    className="bg-black text-white py-3 px-8 text-lg rounded-md font-semibold transition-colors hover:bg-gray-800"
                >
                    Next
                </button>
            )}
            {step === 2 && (
                <div className="flex gap-3">
                    <button 
                        onClick={() => changeStep(1)}
                        className="bg-gray-200 text-gray-800 py-3 px-8 text-lg rounded-md font-semibold transition-colors hover:bg-gray-300"
                    >
                        Back
                    </button>
                    <button 
                        type="submit"
                        form="verification-form"
                        className="bg-black text-white py-3 px-8 text-lg rounded-md font-semibold transition-colors hover:bg-gray-800 disabled:bg-gray-400"
                        disabled={!senderName || !senderNumber || !paymentDate || trxId.length !== 10}
                    >
                        Confirm Payment
                    </button>
                </div>
            )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentVerificationModal;
