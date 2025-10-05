

import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ShopPage from './pages/ShopPage';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Features from './components/Features';
import LatestProducts from './components/LatestProducts';
import ShopGram from './components/ShopGram';
import SustainableStyle from './components/SustainableStyle';
import MahraPage from './pages/MahraPage';
import ProductDetailView from './components/ProductDetailView';
import type { Product } from './types';
import BottomNavBar from './components/BottomNavBar';
import ShoppingCart from './components/ShoppingCart';
import CheckoutPage from './pages/CheckoutPage';
import SearchOverlay from './components/SearchOverlay';
import TermsModal from './components/TermsModal';
import FAQModal from './components/FAQModal';
import ShippingInfoModal from './components/ShippingInfoModal';

type CartItem = Product & { quantity: number };

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'shop' | 'checkout' | 'mahra'>('home');
  const [shopCategory, setShopCategory] = useState('All Categories');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isFAQModalOpen, setIsFAQModalOpen] = useState(false);
  const [isShippingInfoModalOpen, setIsShippingInfoModalOpen] = useState(false);
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);

  useEffect(() => {
    // Ensure the page always loads at the top
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const isModalOpen = !!activeProduct || isCartOpen || isSearchOpen || isTermsModalOpen || isFAQModalOpen || isShippingInfoModalOpen;
    // When a modal is closed, remove the inline style to let the CSS in index.html take effect (hiding scrollbar view but allowing scroll)
    document.body.style.overflow = isModalOpen ? 'hidden' : '';
  }, [activeProduct, isCartOpen, isSearchOpen, isTermsModalOpen, isFAQModalOpen, isShippingInfoModalOpen]);

  useEffect(() => {
    if (currentPage === 'mahra') {
      document.documentElement.classList.add('theme-mahra');
    } else {
      document.documentElement.classList.remove('theme-mahra');
    }
  }, [currentPage]);

  const handleNavigate = (page: 'home' | 'shop' | 'checkout' | 'mahra', category?: string) => {
    if (page === 'checkout' && currentPage !== 'checkout') {
        setIsCheckoutLoading(true);
        setTimeout(() => {
            setCurrentPage('checkout');
            setIsCheckoutLoading(false);
            window.scrollTo({ top: 0, behavior: 'auto' });
        }, 1500); // 1.5 second loading
        return;
    }

    setCurrentPage(page);
    if (page === 'shop') {
      setShopCategory(category || 'All Categories');
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    handleNavigate('checkout');
  };

  const handleProductView = (product: Product) => {
    setActiveProduct(product);
  };

  const handleCloseProductView = () => {
    setActiveProduct(null);
  };
  
  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCartItems(prevItems => {
        const existingItem = prevItems.find(item => item.id === product.id);
        if (existingItem) {
            return prevItems.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
            );
        }
        return [...prevItems, { ...product, quantity }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (productId: number) => {
      setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const handleUpdateCartQuantity = (productId: number, newQuantity: number) => {
      if (newQuantity < 1) {
          handleRemoveFromCart(productId);
          return;
      }
      setCartItems(prevItems =>
          prevItems.map(item =>
              item.id === productId ? { ...item, quantity: newQuantity } : item
          )
      );
  };
  
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  const renderPage = () => {
      switch (currentPage) {
        case 'home':
            return (
                <>
                    <Hero onNavigate={handleNavigate} />
                    <Categories onNavigate={handleNavigate} />
                    <ShopGram />
                    <Features />
                    <LatestProducts 
                        onProductView={handleProductView} 
                        onAddToCart={handleAddToCart} 
                    />
                    <SustainableStyle onNavigate={handleNavigate} />
                </>
            );
        case 'shop':
             return (
                <ShopPage 
                    initialCategory={shopCategory} 
                    onNavigate={handleNavigate} 
                    onProductView={handleProductView}
                    onAddToCart={handleAddToCart}
                />
            );
        case 'checkout':
            return (
                <CheckoutPage 
                    cartItems={cartItems}
                    onNavigateHome={() => handleNavigate('home')}
                    onOpenTermsModal={() => setIsTermsModalOpen(true)}
                    onOpenShippingInfoModal={() => setIsShippingInfoModalOpen(true)}
                />
            );
        case 'mahra':
            return <MahraPage onProductView={handleProductView} onAddToCart={handleAddToCart} />;
        default:
            return null;
      }
  }
  
  if (isCheckoutLoading) {
      return (
          <div className="fixed inset-0 bg-[#F2F0EF] flex items-center justify-center z-[100]">
              <div className="text-center animate-fade-in">
                  <span className="text-9xl font-billion-success text-[var(--accent-color)] animate-pulse">Rosalee</span>
              </div>
          </div>
      );
  }

  if (currentPage === 'checkout') {
      return (
        <>
            <CheckoutPage 
                cartItems={cartItems}
                onNavigateHome={() => handleNavigate('home')}
                onOpenTermsModal={() => setIsTermsModalOpen(true)}
                onOpenShippingInfoModal={() => setIsShippingInfoModalOpen(true)}
            />
            {isTermsModalOpen && <TermsModal onClose={() => setIsTermsModalOpen(false)} />}
            {isShippingInfoModalOpen && <ShippingInfoModal onClose={() => setIsShippingInfoModalOpen(false)} />}
        </>
      );
  }

  return (
    <div className="bg-[#F2F0EF] font-sans text-gray-800 pb-16 md:pb-0">
      <Header 
        onNavigate={handleNavigate} 
        onCartOpen={() => setIsCartOpen(true)}
        onSearchOpen={() => setIsSearchOpen(true)}
        cartItemCount={cartItemCount}
        onProductView={handleProductView} 
      />
      <main>
        {renderPage()}
      </main>
      <Footer 
        onOpenTermsModal={() => setIsTermsModalOpen(true)} 
        onOpenFAQModal={() => setIsFAQModalOpen(true)}
        onOpenShippingInfoModal={() => setIsShippingInfoModalOpen(true)}
      />
      <ScrollToTop />
      {activeProduct && 
        <ProductDetailView 
          product={activeProduct} 
          onClose={handleCloseProductView} 
          onAddToCart={handleAddToCart}
        />
      }
      <ShoppingCart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveFromCart}
        onAddToCart={handleAddToCart}
        onCheckout={handleCheckout}
        onOpenShippingInfoModal={() => setIsShippingInfoModalOpen(true)}
        onOpenTermsModal={() => setIsTermsModalOpen(true)}
      />
      <SearchOverlay 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        onProductView={handleProductView} 
        onAddToCart={handleAddToCart}
        onNavigate={handleNavigate}
        onOpenTermsModal={() => setIsTermsModalOpen(true)}
        onOpenFAQModal={() => setIsFAQModalOpen(true)}
        onOpenShippingInfoModal={() => setIsShippingInfoModalOpen(true)}
      />
      {isTermsModalOpen && <TermsModal onClose={() => setIsTermsModalOpen(false)} />}
      {isFAQModalOpen && <FAQModal onClose={() => setIsFAQModalOpen(false)} />}
      {isShippingInfoModalOpen && <ShippingInfoModal onClose={() => setIsShippingInfoModalOpen(false)} />}
      <BottomNavBar onNavigate={handleNavigate} currentPage={currentPage as 'home' | 'shop' | 'mahra'} />
    </div>
  );
};

export default App;