import React, { useState, useEffect } from 'react';
import type { Product } from '../types';
import { XIcon, PlusIcon, MinusIcon, ExpandIcon, FacebookIcon, XSocialIcon, WhatsAppIcon, TelegramIcon, InformationCircleIcon } from './icons';
import ImageViewer from './ImageViewer';

interface ProductDetailViewProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

const ProductDetailView: React.FC<ProductDetailViewProps> = ({ product, onClose, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('Materials');
  const [isVisible, setIsVisible] = useState(false);
  const [imagesVisible, setImagesVisible] = useState(false);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const galleryImages = product.gallery || [];
  
  const isMahraProduct = product.brand === 'Mahra';
  const sizeGuideUrl = isMahraProduct 
    ? 'https://ik.imagekit.io/f8opwyddtv/Images/Mahra%20Page/3c92c272-a935-47bc-a384-f49424000eb7.jpg?updatedAt=1759676758712'
    : 'https://ik.imagekit.io/f8opwyddtv/Images/Footer%20&%20Size/ba26f97f-baa8-4ac9-af7c-1fdfce611cb8.opti.webp?updatedAt=1759521921550';

  useEffect(() => {
    const animationFrameId = requestAnimationFrame(() => {
      setIsVisible(true);
    });

    const timer = setTimeout(() => {
        setImagesVisible(true);
    }, 300); 

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timer);
    };
  }, []);
  
  const handleClose = () => {
      setIsVisible(false);
      setTimeout(onClose, 300); 
  }

  const handleQuantityChange = (amount: number) => {
    setQuantity(prev => Math.max(1, prev + amount));
  };

  const handleAddToCartClick = () => {
      if (product.isSoldOut) return;
      onAddToCart(product, quantity);
      handleClose();
  }
  
  const tabs = ['Materials', 'Description', 'Additional information'];

  const renderTabContent = () => {
      switch(activeTab) {
          case 'Materials':
              return (
                  <ul className="list-disc list-outside pl-5 space-y-2 text-gray-600">
                      {product.materials.map((item, index) => <li key={index}>{item}</li>)}
                  </ul>
              );
          case 'Description':
               return <p className="text-gray-600">{product.description}</p>;
          case 'Additional information':
              return (
                  <div className="space-y-4">
                      {product.additionalInfo.map((info, index) => (
                          (info.title !== 'Shipping & Returns') && <div key={index}>
                              <h4 className="font-semibold text-gray-800">{info.title}</h4>
                              <p className="text-gray-600">{info.content}</p>
                          </div>
                      ))}
                  </div>
              );
          default:
              return null;
      }
  }

  return (
    <>
      <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true">
        {/* Backdrop */}
        <div 
          className={`fixed inset-0 bg-black/30 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          onClick={handleClose}
        ></div>

        {/* Panel */}
        <div className={`relative w-full max-w-6xl h-full bg-[#F2F0EF] shadow-2xl transform transition-transform duration-300 ease-in-out ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}>
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-gray-600 hover:text-black z-20"
            aria-label="Close product details"
          >
            <XIcon className="w-7 h-7" />
          </button>

          <div className="h-full overflow-y-auto hide-scrollbar">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-12">
              
              {/* Image Gallery */}
              <div className="grid grid-cols-2 gap-4 h-[600px]">
                  {galleryImages.length > 0 && (
                      <div 
                          className={`relative group rounded-lg overflow-hidden opacity-0 ${galleryImages.length === 1 ? 'col-span-2 row-span-2' : 'col-span-1 row-span-2'}`} 
                          style={imagesVisible ? { animation: 'fade-zoom-in 0.5s ease-out 0ms forwards' } : {}}
                      >
                          <img src={galleryImages[0]} alt={product.name} loading="lazy" className="w-full h-full object-cover" />
                          <button onClick={() => setExpandedImage(galleryImages[0])} className="absolute top-3 right-3 bg-white/80 p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity" aria-label="Expand image">
                              <ExpandIcon className="w-5 h-5"/>
                          </button>
                      </div>
                  )}
                  {galleryImages.length > 1 && (
                      <div 
                          className={`relative group rounded-lg overflow-hidden opacity-0 ${galleryImages.length === 2 ? 'col-span-1 row-span-2' : 'col-span-1'}`}
                          style={imagesVisible ? { animation: 'fade-zoom-in 0.5s ease-out 100ms forwards' } : {}}
                      >
                          <img src={galleryImages[1]} alt={`${product.name} detail`} loading="lazy" className="w-full h-full object-cover" />
                          <button onClick={() => setExpandedImage(galleryImages[1])} className="absolute top-3 right-3 bg-white/80 p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity" aria-label="Expand image">
                              <ExpandIcon className="w-5 h-5"/>
                          </button>
                      </div>
                  )}
                  {galleryImages.length > 2 && (
                      <div className="col-span-1 relative group rounded-lg overflow-hidden opacity-0" style={imagesVisible ? { animation: 'fade-zoom-in 0.5s ease-out 200ms forwards' } : {}}>
                          <img src={galleryImages[2]} alt={`${product.name} detail`} loading="lazy" className="w-full h-full object-cover" />
                          <button onClick={() => setExpandedImage(galleryImages[2])} className="absolute top-3 right-3 bg-white/80 p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity" aria-label="Expand image">
                              <ExpandIcon className="w-5 h-5"/>
                          </button>
                      </div>
                  )}
              </div>

              {/* Product Info */}
              <div className="flex items-center">
                <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 w-full">
                  <div className="flex justify-between items-start mb-3">
                    <h1 className="text-3xl font-playfair font-bold text-gray-900 pr-4">{product.name}</h1>
                    <p className="text-2xl font-semibold text-gray-800 flex-shrink-0">BDT {product.price.toLocaleString()}</p>
                  </div>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  
                  {product.sizes && product.sizes.length > 0 && (
                       <div className="mb-6">
                          <p className="text-sm font-medium text-gray-800 mb-2">Size : <span className="font-bold">{selectedSize}</span></p>
                          <div className="flex flex-wrap gap-2">
                          {product.sizes.map(size => (
                               <button key={size} onClick={() => setSelectedSize(size)} className={`px-4 py-2 rounded-lg border text-sm font-semibold transition-colors ${selectedSize === size ? 'bg-black text-white border-black' : 'bg-transparent text-gray-700 border-black/20 hover:bg-black/5'}`}>{size}</button>
                          ))}
                          </div>
                      </div>
                  )}

                  <div className="mb-6">
                      <div className="flex items-center">
                          <p className="text-sm font-medium text-gray-800 mr-4">Quantity:</p>
                          <div className="flex items-center border border-black/20 rounded-lg">
                              <button onClick={() => handleQuantityChange(-1)} className="p-2.5 text-gray-500 hover:text-black"><MinusIcon className="w-4 h-4"/></button>
                              <span className="px-4 font-semibold text-gray-800">{quantity}</span>
                              <button onClick={() => handleQuantityChange(1)} className="p-2.5 text-gray-500 hover:text-black"><PlusIcon className="w-4 h-4"/></button>
                          </div>
                      </div>
                  </div>

                  {product.brand === 'Mahra' && (
                      <div className="mt-6 p-3 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 rounded-r-lg">
                          <div className="flex">
                              <div className="flex-shrink-0">
                                  <InformationCircleIcon className="h-5 w-5 text-yellow-500" />
                              </div>
                              <div className="ml-3">
                                  <p className="text-sm">
                                      <strong>A Note on Availability:</strong> Mahra pieces are crafted with exceptional care. If your selected size is not in stock, we will personally contact you via email to discuss pre-order options and delivery timelines.
                                  </p>
                              </div>
                          </div>
                      </div>
                  )}

                  <div className="mt-8">
                      <button 
                        onClick={handleAddToCartClick} 
                        disabled={product.isSoldOut}
                        className="w-full bg-black text-white font-bold py-4 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                      >
                        {product.isSoldOut ? 'SOLD OUT' : 'ADD TO CART'}
                      </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Details Section */}
            <div className="p-6 md:px-12 md:pb-12">
              <div className="border-b border-black/20 mb-6">
                  <nav className="flex space-x-8 -mb-px">
                      {tabs.map(tab => (
                          <button key={tab} onClick={() => setActiveTab(tab)} className={`py-4 px-1 text-base font-medium transition-colors ${activeTab === tab ? 'border-b-2 border-black text-black' : 'border-b-2 border-transparent text-gray-500 hover:text-black hover:border-black/30'}`}>
                              {tab}
                          </button>
                      ))}
                  </nav>
              </div>
              <div className="min-h-[150px]">
                  {renderTabContent()}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t mt-8">
                  <div>
                      <h4 className="font-semibold text-black mb-2">SIZE GUIDE</h4>
                      <a href="#" onClick={(e) => { e.preventDefault(); setExpandedImage(sizeGuideUrl); }} className="text-sm text-gray-600 hover:text-black underline">View guide</a>
                  </div>
                   <div>
                      <h4 className="font-semibold text-black mb-2">SHARE ON:</h4>
                      <div className="flex space-x-4 text-gray-600">
                          <a href="#" className="hover:text-black"><FacebookIcon className="w-5 h-5"/></a>
                          <a href="#" className="hover:text-black"><XSocialIcon className="w-5 h-5"/></a>
                          <a href="#" className="hover:text-black"><WhatsAppIcon className="w-5 h-5"/></a>
                          <a href="#" className="hover:text-black"><TelegramIcon className="w-5 h-5"/></a>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {expandedImage && (
        <ImageViewer imageUrl={expandedImage} onClose={() => setExpandedImage(null)} />
      )}
    </>
  );
};

export default ProductDetailView;
