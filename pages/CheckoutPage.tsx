

import React, { useState, useMemo } from 'react';
import type { Product } from '../types';
import { XIcon } from '../components/icons';
import PaymentVerificationModal from '../components/PaymentVerificationModal';

type CartItem = Product & { quantity: number };

interface CheckoutPageProps {
  cartItems: CartItem[];
  onNavigateHome: () => void;
  onOpenTermsModal: () => void;
  onOpenShippingInfoModal: () => void;
}

type VerificationDetails = {
    method: 'bKash' | 'Nagad';
    senderName: string;
    senderNumber: string;
    paymentDate: string;
    trxId: string;
    notes: string;
} | null;

const FormInput: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label: string }> = ({ label, id, ...props }) => (
    <div>
        <label htmlFor={id} className="text-base text-gray-600">{label}</label>
        <input id={id} {...props} className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-lg text-gray-900 shadow-sm placeholder-gray-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black" />
    </div>
);

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

const CheckoutPage: React.FC<CheckoutPageProps> = ({ cartItems, onNavigateHome, onOpenTermsModal, onOpenShippingInfoModal }) => {
    const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [apartment, setApartment] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [couponCode, setCouponCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [couponMessage, setCouponMessage] = useState('');
    const [termsAgreed, setTermsAgreed] = useState(false);
    const [shippingAgreed, setShippingAgreed] = useState(false);
    const [isPaymentVerified, setIsPaymentVerified] = useState(false);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionSuccess, setSubmissionSuccess] = useState(false);
    const [submissionError, setSubmissionError] = useState<string | null>(null);
    
    const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);
    const [verificationMethod, setVerificationMethod] = useState<'bKash' | 'Nagad' | null>(null);
    const [paymentVerificationDetails, setPaymentVerificationDetails] = useState<VerificationDetails>(null);


    const subtotal = useMemo(() => cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0), [cartItems]);
    
    const shippingCost = useMemo(() => {
        const trimmedCity = city.trim().toLowerCase();
        if (trimmedCity === '') return null;
        if (trimmedCity === 'dhaka') return 80;
        return 120; // Outside Dhaka
    }, [city]);

    const onlinePaymentFee = useMemo(() => {
        if (paymentMethod === 'bkash' || paymentMethod === 'nagad') {
            const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
            return totalItems * 20;
        }
        return 0;
    }, [paymentMethod, cartItems]);

    const handleApplyCoupon = () => {
        if (couponCode.trim().toUpperCase() === 'FARMERMURGI10') {
            const calculatedDiscount = subtotal * 0.10;
            setDiscount(calculatedDiscount);
            setCouponMessage('✓ Coupon applied successfully!');
        } else {
            setDiscount(0);
            setCouponMessage('Invalid coupon code.');
        }
    };
    
    const total = subtotal - discount + (shippingCost ?? 0) + onlinePaymentFee;
    
    const canOrder = 
        firstName.trim() !== '' &&
        lastName.trim() !== '' &&
        address.trim() !== '' &&
        city.trim() !== '' &&
        email.trim() !== '' &&
        phone.trim() !== '' &&
        paymentMethod !== null &&
        isPaymentVerified &&
        termsAgreed &&
        shippingAgreed &&
        !isSubmitting;

    const handlePaymentSelect = (method: string) => {
        if (!!paymentVerificationDetails) return;

        if (paymentMethod !== method) {
            setPaymentVerificationDetails(null);
        }
        setPaymentMethod(method);

        if (method === 'cod') {
            setIsPaymentVerified(true);
        } else {
            setIsPaymentVerified(false);
        }
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!canOrder) return;

        setIsSubmitting(true);
        setSubmissionError(null);

        const orderData = {
            firstName,
            lastName,
            address,
            apartment,
            city,
            email,
            phone: `+880${phone}`,
            paymentMethod,
            cart: cartItems.map(item => ({
                id: item.id,
                name: item.name,
                quantity: item.quantity,
                price: item.price,
            })),
            subtotal,
            shippingCost,
            discount,
            onlinePaymentFee,
            total,
            couponCode: couponCode || 'N/A',
            ...(paymentVerificationDetails && {
                payment_senderName: paymentVerificationDetails.senderName,
                payment_senderNumber: paymentVerificationDetails.senderNumber,
                payment_date: paymentVerificationDetails.paymentDate,
                payment_trxId: paymentVerificationDetails.trxId,
                payment_notes: paymentVerificationDetails.notes,
            })
        };

        try {
            const response = await fetch('https://submit-form.com/n0AvJERDu', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(orderData),
            });

            if (!response.ok) {
                throw new Error('Something went wrong. Please try again.');
            }

            setSubmissionSuccess(true);
        } catch (error) {
            setSubmissionError(error instanceof Error ? error.message : 'An unknown error occurred.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submissionSuccess) {
        return (
            <div className="font-sans bg-white animate-fade-in min-h-screen flex items-center justify-center">
                <div className="text-center p-8">
                     <span className="text-9xl font-billion-success text-black relative top-1">Rosalee</span>
                     <h2 className="text-4xl font-semibold text-gray-800 mt-8 mb-4">Thank you for your order!</h2>
                     <p className="text-lg text-gray-600 mb-8">Your order has been placed successfully. We'll send you a confirmation email shortly.</p>
                     <button
                        onClick={onNavigateHome}
                        className="bg-black text-white py-4 px-10 text-lg rounded-md font-semibold transition-colors hover:bg-[var(--accent-color)]"
                     >
                        Continue Shopping
                     </button>
                </div>
            </div>
        )
    }

    return (
        <div className="font-sans bg-white animate-fade-in">
            {/* Mobile Header */}
            <header className="lg:hidden p-4 flex justify-between items-center border-b border-gray-200">
                <button onClick={onNavigateHome} aria-label="Go to homepage">
                    <span className="text-4xl font-billion-success text-black relative top-1">Rosalee</span>
                </button>
                <button onClick={onNavigateHome} className="text-gray-500 hover:text-black p-1" aria-label="Close checkout">
                    <XIcon className="w-6 h-6" />
                </button>
            </header>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 min-h-screen">
                {/* Left Side: Form */}
                <main className="order-2 lg:order-1 bg-white px-4 sm:px-6 lg:px-20 xl:px-28 py-12">
                    <div className="max-w-2xl mx-auto">
                        <div className="hidden lg:block text-center">
                            <button onClick={onNavigateHome}>
                                <span className="text-8xl font-billion-success text-black relative top-1">Rosalee</span>
                            </button>
                        </div>

                        <form className="mt-8" onSubmit={handleSubmit}>
                            <section>
                                 <h2 className="text-2xl font-semibold mb-4">Shipping address</h2>
                                 <div className="space-y-4">
                                     <div className="grid grid-cols-2 gap-4">
                                         <FormInput label="First name" type="text" id="first-name" value={firstName} onChange={e => setFirstName(e.target.value)} required/>
                                         <FormInput label="Last name" type="text" id="last-name" value={lastName} onChange={e => setLastName(e.target.value)} required/>
                                     </div>
                                     <FormInput label="Address" type="text" id="address" value={address} onChange={e => setAddress(e.target.value)} required/>
                                     <FormInput label="Apartment, suite, etc. (optional)" type="text" id="apartment" value={apartment} onChange={e => setApartment(e.target.value)} />
                                     <FormInput label="City" type="text" id="city" value={city} onChange={e => setCity(e.target.value)} required/>
                                     <FormInput label="Email" type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required/>
                                     <div>
                                        <label htmlFor="phone" className="text-base text-gray-600">Phone number</label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-lg">+880</span>
                                            <input 
                                                type="tel" 
                                                id="phone" 
                                                className="block w-full px-4 py-3 bg-white border border-gray-300 rounded-r-md text-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
                                                value={phone}
                                                onChange={e => setPhone(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                 </div>
                            </section>

                             <section className="mt-8 border-t pt-6">
                                <h2 className="text-2xl font-semibold mb-4">Payment</h2>
                                <p className="text-base text-gray-600 mb-4">All transactions are secure and encrypted.</p>
                                <div className="border rounded-md">
                                    <PaymentMethodOption 
                                        label="Cash on Delivery"
                                        value="cod"
                                        selected={paymentMethod === 'cod'}
                                        onSelect={() => handlePaymentSelect('cod')}
                                        verificationDetails={paymentVerificationDetails}
                                        disabled={!!paymentVerificationDetails}
                                    />
                                    <PaymentMethodOption 
                                        label="bKash"
                                        value="bkash"
                                        selected={paymentMethod === 'bkash'}
                                        onSelect={() => handlePaymentSelect('bkash')}
                                        onVerifyClick={() => {
                                            setVerificationMethod('bKash');
                                            setIsVerificationModalOpen(true);
                                        }}
                                        verificationDetails={paymentVerificationDetails}
                                        disabled={!!paymentVerificationDetails}
                                    />
                                     <PaymentMethodOption 
                                        label="Nagad"
                                        value="nagad"
                                        selected={paymentMethod === 'nagad'}
                                        onSelect={() => handlePaymentSelect('nagad')}
                                        onVerifyClick={() => {
                                            setVerificationMethod('Nagad');
                                            setIsVerificationModalOpen(true);
                                        }}
                                        verificationDetails={paymentVerificationDetails}
                                        isLast
                                        disabled={!!paymentVerificationDetails}
                                    />
                                </div>
                            </section>
                            
                            <div className="mt-6 space-y-3">
                                <label className="flex items-center text-base text-gray-600">
                                    <input 
                                        type="checkbox" 
                                        checked={termsAgreed}
                                        onChange={() => setTermsAgreed(!termsAgreed)}
                                        className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black" 
                                    />
                                    <span className="ml-2">I agree with the <button type="button" onClick={(e) => { e.preventDefault(); onOpenTermsModal(); }} className="underline hover:text-black font-medium">Terms and Conditions</button></span>
                                </label>
                                <label className="flex items-center text-base text-gray-600">
                                    <input 
                                        type="checkbox" 
                                        checked={shippingAgreed}
                                        onChange={() => setShippingAgreed(!shippingAgreed)}
                                        className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black" 
                                    />
                                    <span className="ml-2">I've seen the <button type="button" onClick={(e) => { e.preventDefault(); onOpenShippingInfoModal(); }} className="underline hover:text-black font-medium">Shipping/Delivery Information</button></span>
                                </label>
                            </div>

                            {submissionError && (
                                <p className="mt-4 text-sm text-red-600">{submissionError}</p>
                            )}

                            <div className="mt-8">
                                <button 
                                    type="submit" 
                                    disabled={!canOrder}
                                    className="w-full bg-black text-white text-lg py-4 px-4 rounded-md font-semibold transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-[var(--accent-color)]"
                                >
                                    {isSubmitting ? 'Placing Order...' : 'ORDER NOW'}
                                </button>
                            </div>
                        </form>
                    </div>
                </main>

                {/* Right Side: Order Summary */}
                <aside className="order-1 lg:order-2 bg-[#F2F0EF] px-4 sm:px-6 lg:px-12 pt-6 pb-12 lg:py-12 border-b lg:border-b-0 lg:border-l border-gray-200">
                    <div className="max-w-2xl mx-auto relative lg:pt-8">
                        <button onClick={onNavigateHome} className="absolute -top-6 -right-2 hidden lg:block text-gray-500 hover:text-black z-20 p-1 rounded-full border border-gray-300" aria-label="Close checkout">
                            <XIcon className="w-6 h-6" />
                        </button>
                        <ul className="space-y-6">
                            {cartItems.map(item => (
                                <li key={item.id} className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="relative">
                                            <img src={item.imageUrl} alt={item.name} loading="lazy" className="w-24 h-24 rounded-md object-cover border border-gray-200"/>
                                            <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-base w-7 h-7 rounded-full flex items-center justify-center">{item.quantity}</span>
                                        </div>
                                        <div className="ml-4">
                                            <p className="font-medium text-gray-800 text-lg">{item.name}</p>
                                            <p className="text-gray-500 text-base">{item.sizes?.[0] || 'One Size'}</p>
                                        </div>
                                    </div>
                                    <p className="text-lg font-medium text-gray-800">BDT. {(item.price * item.quantity).toFixed(2)}</p>
                                </li>
                            ))}
                        </ul>

                        <div className="py-8 my-8 border-y border-gray-300">
                            <div className="flex space-x-4">
                                <input
                                    type="text"
                                    id="discount"
                                    placeholder="Coupon code"
                                    value={couponCode}
                                    onChange={(e) => {
                                        setCouponCode(e.target.value);
                                        setDiscount(0);
                                        setCouponMessage('');
                                    }}
                                    className="flex-grow block w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-lg text-gray-900 shadow-sm placeholder-gray-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
                                />
                                <button type="button" onClick={handleApplyCoupon} className="bg-gray-300 text-gray-600 px-8 rounded-md font-semibold text-base hover:bg-gray-400 transition-colors">Apply</button>
                            </div>
                            {couponMessage && (
                                <p className={`mt-2 text-base ${discount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                    {couponMessage}
                                </p>
                            )}
                        </div>

                        <div className="space-y-3 text-lg">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Subtotal</span>
                                <span className="font-medium text-gray-800">BDT. {subtotal.toFixed(2)}</span>
                            </div>
                             {discount > 0 && (
                                <div className="flex justify-between">
                                    <span className="font-medium text-green-600">Discount (10%)</span>
                                    <span className="font-medium text-green-600">-BDT. {discount.toFixed(2)}</span>
                                </div>
                            )}
                             <div className="flex justify-between">
                                <span className="text-gray-600">Shipping</span>
                                <span className="text-gray-500">
                                    {shippingCost !== null ? `BDT. ${shippingCost.toFixed(2)}` : 'Enter shipping address'}
                                </span>
                            </div>
                             {onlinePaymentFee > 0 && (
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Online Payment Fee</span>
                                    <span className="font-medium text-gray-800">BDT. {onlinePaymentFee.toFixed(2)}</span>
                                </div>
                            )}
                        </div>

                        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-300">
                            <span className="text-2xl font-semibold text-[var(--accent-color)]">Total</span>
                            <span className="text-4xl font-bold text-[var(--accent-color)]">BDT. {total.toFixed(2)} <span className="text-base text-gray-500 font-normal">BDT</span></span>
                        </div>
                    </div>
                </aside>
            </div>
            {isVerificationModalOpen && verificationMethod && (
                <PaymentVerificationModal
                    isOpen={isVerificationModalOpen}
                    onClose={() => setIsVerificationModalOpen(false)}
                    onSubmit={(details) => {
                        setPaymentVerificationDetails({ method: verificationMethod, ...details });
                        setIsVerificationModalOpen(false);
                        setIsPaymentVerified(true);
                    }}
                    paymentMethod={verificationMethod}
                    cartItems={cartItems}
                    subtotal={subtotal}
                    shippingCost={shippingCost}
                    onlinePaymentFee={onlinePaymentFee}
                    totalAmount={total}
                />
            )}
        </div>
    );
};

const PaymentMethodOption: React.FC<{
    label: string;
    value: string;
    selected: boolean;
    onSelect: () => void;
    onVerifyClick?: () => void;
    verificationDetails: VerificationDetails;
    isLast?: boolean;
    disabled: boolean;
}> = ({ label, value, selected, onSelect, onVerifyClick, verificationDetails, isLast, disabled }) => {
    const showVerification = (value === 'bkash' || value === 'nagad') && selected;
    const isVerified = verificationDetails?.method.toLowerCase() === value;

    const handleSelect = () => {
        if (disabled) return;
        onSelect();
    }

    return (
        <div className={!isLast ? 'border-b border-gray-200' : ''}>
            <div 
                onClick={handleSelect}
                className={`p-4 flex items-center ${disabled ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}`}
            >
                <input 
                    type="radio" 
                    name="paymentMethod" 
                    value={value} 
                    checked={selected} 
                    onChange={handleSelect}
                    disabled={disabled}
                    className="h-4 w-4 text-black focus:ring-black border-gray-400"
                />
                <label className="ml-3 text-base font-medium text-gray-800">{label}</label>
                 {selected && disabled && (
                    <div className="ml-auto flex items-center gap-1 text-sm font-semibold text-green-600">
                        <CheckIcon className="w-5 h-5" />
                        <span>Verified</span>
                    </div>
                )}
            </div>
            <div className={`transition-all duration-500 ease-in-out grid ${showVerification ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                 <div className="overflow-hidden">
                    <div className="bg-gray-50 mx-4 mb-4 p-4 rounded-md border">
                        <p className="text-sm text-center mb-3 text-gray-600">Please complete the payment verification.</p>
                        {isVerified ? (
                             <div className="w-full bg-green-100 text-green-800 py-3 rounded-md text-sm font-semibold flex items-center justify-center gap-2">
                                <CheckIcon className="h-5 w-5" />
                                Details Submitted
                            </div>
                        ) : (
                            <button 
                                type="button"
                                onClick={onVerifyClick}
                                disabled={disabled}
                                className="w-full bg-black text-white py-3 rounded-md text-sm font-semibold hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                            >
                                Verify {label} Payment
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default CheckoutPage;
