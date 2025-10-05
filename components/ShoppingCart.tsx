
import React, { useState, useEffect } from 'react';
import type { Product } from '../types';
import { XIcon, MinusIcon, PlusIcon, OrderNoteIcon, ShippingBoxIcon, ShoppingBagIcon } from './icons';

type CartItem = Product & { quantity: number };

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
  onRemoveItem: (productId: number) => void;
  onAddToCart: (product: Product, quantity?: number) => void;
  onCheckout: () => void;
  onOpenShippingInfoModal: () => void;
  onOpenTermsModal: () => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ 
    isOpen, 
    onClose, 
    cartItems, 
    onUpdateQuantity, 
    onRemoveItem, 
    onCheckout,
    onOpenShippingInfoModal,
    onOpenTermsModal
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const animationFrameId = requestAnimationFrame(() => {
        setIsVisible(true);
      });
      return () => cancelAnimationFrame(animationFrameId);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);
  
  const handleClose = () => {
      setIsVisible(false);
      setTimeout(onClose, 300); 
  }

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className={`fixed inset-0 z-50 flex justify-end ${isOpen ? '' : 'pointer-events-none'}`} role="dialog" aria-modal="true">
      <div 
        className={`fixed inset-0 bg-black/30 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        onClick={handleClose}
      ></div>
      <div className={`relative w-full max-w-xl bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-3xl font-semibold text-gray-800">Shopping Cart</h2>
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-800" aria-label="Close cart">
            <XIcon className="w-6 h-6" />
          </button>
        </div>

        {cartItems.length > 0 ? (
          <div className="flex-grow overflow-y-auto hide-scrollbar p-6">
            <ul className="divide-y divide-gray-200">
              {cartItems.map(item => (
                <li key={item.id} className="py-6 flex">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img src={item.imageUrl} alt={item.name} loading="lazy" className="h-full w-full object-cover object-center" />
                  </div>
                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>{item.name}</h3>
                        <p className="ml-4">BDT. {(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 text-gray-500 hover:text-black"><MinusIcon className="w-4 h-4" /></button>
                        <span className="px-3 text-gray-700">{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 text-gray-500 hover:text-black"><PlusIcon className="w-4 h-4" /></button>
                      </div>
                      <button onClick={() => onRemoveItem(item.id)} type="button" className="font-medium text-gray-500 hover:text-gray-800 underline">Remove</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
              <ShoppingBagIcon className="w-16 h-16 text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Your cart is empty</h3>
              <p className="text-gray-500 mt-2">Looks like you haven't added anything to your cart yet.</p>
          </div>
        )}

        <div className="p-6 mt-auto border-t border-gray-200 bg-white">
            <div className="flex justify-around items-center border-b border-gray-200 pb-6 mb-6 text-sm font-medium text-gray-700">
                <button onClick={onOpenTermsModal} className="flex items-center space-x-2 hover:text-black"><OrderNoteIcon className="w-5 h-5" /><span>Terms & Conditions</span></button>
                <div className="h-6 w-px bg-gray-200"></div>
                <button onClick={onOpenShippingInfoModal} className="flex items-center space-x-2 hover:text-black"><ShippingBoxIcon className="w-5 h-5" /><span>Shipping Information</span></button>
            </div>

            <div className="flex justify-between text-lg font-bold text-gray-900">
                <p>Total</p>
                <p>BDT. {subtotal.toFixed(2)}</p>
            </div>
            <p className="mt-1 text-xs text-gray-500">Taxes and <a href="#" className="underline">shipping</a> calculated at checkout</p>
            <div className="mt-6">
                <button 
                    onClick={onCheckout}
                    className="w-full bg-black border border-transparent rounded-md py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-gray-800"
                    disabled={cartItems.length === 0}
                >
                  PROCEED TO CHECKOUT
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
