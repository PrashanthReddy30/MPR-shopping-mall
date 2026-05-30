import React, { useState } from 'react';
import { X, Star, ShoppingBag, Truck, Scissors, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductModal({ product, onClose, onAddToCart, onOpenTailoring }) {
  const [selectedSize, setSelectedSize] = useState('M');
  const [pincode, setPincode] = useState('');
  const [pincodeStatus, setPincodeStatus] = useState(null);

  if (!product) return null;

  // Calculate discount percentage
  const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  // Check delivery availability
  const checkDelivery = () => {
    if (pincode.length === 6 && /^\d+$/.test(pincode)) {
      setPincodeStatus({
        success: true,
        message: "✅ Delivery available! Free delivery within 2-3 working days."
      });
    } else {
      setPincodeStatus({
        success: false,
        message: "❌ Invalid pincode. Please enter a 6-digit number."
      });
    }
  };

  return (
    <AnimatePresence>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 110, padding: '24px' }}>
        
        {/* Semi-transparent Overlay click to close */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} onClick={onClose} />

        {/* Modal Container */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'relative',
            backgroundColor: '#fff',
            borderRadius: '24px',
            width: '100%',
            maxWidth: '900px',
            maxHeight: '90vh',
            overflowY: 'auto',
            zIndex: 120,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            boxShadow: 'var(--shadow-lg)'
          }}
          className="modal-grid"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              backgroundColor: 'var(--bg-light)',
              color: 'var(--royal-dark)',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 10
            }}
          >
            <X size={20} />
          </button>

          {/* Left: Product Image */}
          <div style={{ position: 'relative', width: '100%', height: '500px', backgroundColor: 'var(--bg-light)' }}>
            <img 
              src={product.image} 
              alt={product.name} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>

          {/* Right: Product Details */}
          <div style={{ padding: '40px 32px', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <span style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--primary-gold)', fontWeight: 700, letterSpacing: '1px' }}>
                {product.category}
              </span>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: '28px', color: 'var(--royal-dark)', margin: '4px 0 8px', fontWeight: 600 }}>
                {product.name}
              </h2>
              
              {/* Rating */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ display: 'flex', color: 'var(--primary-gold)' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill={i < Math.floor(product.rating) ? 'var(--primary-gold)' : 'none'} />
                  ))}
                </div>
                <span style={{ fontSize: '13px', color: 'var(--royal-gray)', fontWeight: 500 }}>
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Pricing Details */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', borderBottom: '1px solid var(--border-light)', paddingBottom: '16px' }}>
              <span style={{ fontSize: '28px', fontWeight: 700, color: 'var(--primary-red)' }}>
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              <span style={{ fontSize: '16px', color: '#999', textDecoration: 'line-through' }}>
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
              <span style={{ fontSize: '14px', backgroundColor: '#fee2e2', color: 'var(--primary-red)', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>
                {discountPercent}% OFF
              </span>
            </div>

            {/* Product Info Description */}
            <p style={{ fontSize: '14px', color: 'var(--royal-gray)', margin: 0 }}>
              {product.description}
            </p>

            {/* Size Selector */}
            {product.category !== "sarees" && (
              <div>
                <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--royal-dark)', display: 'block', marginBottom: '8px' }}>Select Size:</span>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '8px',
                        border: selectedSize === size ? '2px solid var(--primary-red)' : '1px solid #ccc',
                        backgroundColor: selectedSize === size ? '#fef2f2' : '#fff',
                        color: selectedSize === size ? 'var(--primary-red)' : 'var(--royal-dark)',
                        fontWeight: 'bold',
                        fontSize: '13px'
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Stitching Service Promo */}
            {(product.category === "lehengas" || product.category === "sarees" || product.category === "kurtis") && (
              <div style={{ backgroundColor: '#fdfaf2', border: '1px dashed var(--primary-gold)', borderRadius: '12px', padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Scissors size={18} style={{ color: 'var(--primary-gold)' }} />
                  <div style={{ fontSize: '13px', color: 'var(--royal-dark)' }}>
                    <strong>Custom Fitting & Stitching</strong><br/>
                    Get this outfit customized to your size!
                  </div>
                </div>
                <button 
                  onClick={() => { onClose(); onOpenTailoring(); }} 
                  style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', fontWeight: 600, color: 'var(--primary-red)' }}
                >
                  Book <ArrowRight size={14} />
                </button>
              </div>
            )}

            {/* Pincode Delivery Checker */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--royal-dark)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Truck size={16} /> Check Delivery Pincode:
              </span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input 
                  type="text" 
                  placeholder="Enter 6-digit pincode" 
                  value={pincode}
                  maxLength={6}
                  onChange={(e) => setPincode(e.target.value)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    border: '1px solid #ccc',
                    fontSize: '13px',
                    outline: 'none',
                    flexGrow: 1
                  }}
                />
                <button 
                  onClick={checkDelivery}
                  style={{
                    backgroundColor: 'var(--royal-dark)',
                    color: '#fff',
                    padding: '8px 20px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: 600
                  }}
                >
                  Check
                </button>
              </div>
              {pincodeStatus && (
                <span style={{ fontSize: '12px', color: pincodeStatus.success ? '#16a34a' : 'var(--primary-red)', fontWeight: 500 }}>
                  {pincodeStatus.message}
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '10px' }}>
              <button 
                onClick={() => { onAddToCart(product, selectedSize); onClose(); }}
                className="luxury-btn" 
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <ShoppingBag size={18} /> Add To Bag
              </button>
              <button 
                onClick={() => { onAddToCart(product, selectedSize); onClose(); }}
                className="luxury-btn-outline" 
                style={{ width: '100%', justifyContent: 'center', border: '2px solid var(--royal-dark)', fontWeight: 700 }}
              >
                Buy Now
              </button>
            </div>

          </div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .modal-grid {
            grid-template-columns: 1fr !important;
          }
          img {
            height: 300px !important;
          }
        }
      `}} />
    </AnimatePresence>
  );
}
