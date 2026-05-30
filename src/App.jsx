import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import ProductList from './components/ProductList';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import TailoringModal from './components/TailoringModal';
import Footer from './components/Footer';
import SplashIntro from './components/SplashIntro';

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Shopping Cart state
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  
  // Wishlist state
  const [wishlist, setWishlist] = useState([]);
  
  // Modal states
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [tailoringOpen, setTailoringOpen] = useState(false);

  // Add item to cart
  const handleAddToCart = (product, size = 'M') => {
    setCart((prevCart) => {
      // For sarees, we don't have sizing
      const itemSize = product.category === 'sarees' ? null : size;
      
      const existingIdx = prevCart.findIndex(
        (item) => item.id === product.id && item.size === itemSize
      );

      if (existingIdx > -1) {
        const newCart = [...prevCart];
        newCart[existingIdx].quantity += 1;
        return newCart;
      } else {
        return [...prevCart, { ...product, size: itemSize, quantity: 1 }];
      }
    });
    // Open cart drawer automatically
    setCartOpen(true);
  };

  // Update item quantity in cart
  const handleUpdateQty = (productId, size, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(productId, size);
      return;
    }
    setCart((prevCart) => 
      prevCart.map((item) => 
        (item.id === productId && item.size === size) 
          ? { ...item, quantity: newQty } 
          : item
      )
    );
  };

  // Remove item from cart
  const handleRemoveItem = (productId, size) => {
    setCart((prevCart) => 
      prevCart.filter((item) => !(item.id === productId && item.size === size))
    );
  };

  // Clear all items in cart after order completion
  const handleClearCart = () => {
    setCart([]);
  };

  // Add / Remove from Wishlist
  const handleAddToWishlist = (productId) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.includes(productId)) {
        return prevWishlist.filter(id => id !== productId);
      } else {
        return [...prevWishlist, productId];
      }
    });
  };

  if (!introComplete) {
    return <SplashIntro onComplete={() => setIntroComplete(true)} />;
  }

  return (
    <>
      {/* Navigation Header */}
      <Navbar 
        activeCategory={activeCategory}
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        wishlistCount={wishlist.length}
        onCartClick={() => setCartOpen(true)}
        onTailoringClick={() => setTailoringOpen(true)}
        onSelectCategory={(category) => {
          setActiveCategory(category);
          // Scroll smoothly to shop section
          setTimeout(() => {
            document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
          }, 50);
        }}
      />

      {/* Hero Banner Slider */}
      <Hero />

      {/* Circular Categories Grid */}
      <CategoryGrid 
        onSelectCategory={(category) => {
          setActiveCategory(category);
          // Scroll smoothly to shop section
          document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Dynamic Products Catalog */}
      <ProductList 
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        onProductClick={(product) => setSelectedProduct(product)}
        onAddToCart={handleAddToCart}
        onAddToWishlist={handleAddToWishlist}
        wishlistedIds={wishlist}
      />

      {/* Quick View Modal */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
          onOpenTailoring={() => setTailoringOpen(true)}
        />
      )}

      {/* Cart Slider Drawer */}
      <CartDrawer 
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cart}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Custom Fitting / Stitching Modal */}
      <TailoringModal 
        isOpen={tailoringOpen}
        onClose={() => setTailoringOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </>
  );
}
