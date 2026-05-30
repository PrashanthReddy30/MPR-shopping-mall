import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, Tag, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQty, onRemoveItem, onClearCart }) {
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0); // in percent
  const [promoMessage, setPromoMessage] = useState('');
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  if (!isOpen) return null;

  // Calculate prices
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = Math.round((subtotal * appliedDiscount) / 100);
  const total = subtotal - discountAmount;

  // Apply promo code
  const applyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'MPR10') {
      setAppliedDiscount(10);
      setPromoMessage('🎉 Promocode MPR10 applied! 10% Discount saved.');
    } else {
      setPromoMessage('❌ Invalid promocode. Try code MPR10.');
    }
  };

  // Perform checkout
  const handleCheckout = () => {
    setCheckoutSuccess(true);
    setTimeout(() => {
      onClearCart();
      setCheckoutSuccess(false);
      onClose();
    }, 4000);
  };

  return (
    <AnimatePresence>
      <div style={{ position: 'fixed', top: 0, right: 0, width: '100%', height: '100%', zIndex: 150, display: 'flex', justifyContent: 'flex-end' }}>
        
        {/* Transparent Overlay click to close */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)' }} onClick={onClose} />

        {/* Drawer Panel */}
        <motion.div 
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
          style={{
            position: 'relative',
            backgroundColor: '#fff',
            width: '100%',
            maxWidth: '450px',
            height: '100%',
            boxShadow: 'var(--shadow-lg)',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 160
          }}
        >
          {/* Header */}
          <div style={{ padding: '24px', borderBottom: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '18px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShoppingBag size={20} /> Shopping Bag ({cartItems.length})
            </span>
            <button 
              onClick={onClose}
              style={{
                backgroundColor: 'var(--bg-light)',
                color: 'var(--royal-dark)',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Cart Items List */}
          <div style={{ flexGrow: 1, overflowY: 'auto', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {checkoutSuccess ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center', gap: '16px' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#dcfce7', color: '#16a34a', fontSize: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  ✓
                </div>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '24px', fontWeight: 600 }}>Order Placed!</h3>
                <p style={{ color: 'var(--royal-gray)', fontSize: '14px' }}>
                  Thank you for shopping with **MPR Shopping Mall**! Your order has been registered successfully. A confirmation text was sent to your phone.
                </p>
              </div>
            ) : cartItems.length === 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#999', gap: '12px' }}>
                <ShoppingBag size={48} strokeWidth={1} />
                <span>Your shopping bag is empty</span>
                <button onClick={onClose} className="luxury-btn" style={{ padding: '8px 20px', fontSize: '12px', marginTop: '10px' }}>Shop Now</button>
              </div>
            ) : (
              cartItems.map((item, idx) => (
                <div key={`${item.id}-${item.size || 'default'}`} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '16px', borderBottom: '1px solid var(--border-light)', paddingBottom: '16px' }}>
                  <img src={item.image} alt={item.name} style={{ width: '80px', height: '100px', objectFit: 'cover', borderRadius: '8px' }} />
                  
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'left' }}>
                    <div>
                      <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--royal-dark)', margin: 0 }}>{item.name}</h4>
                      {item.size && (
                        <span style={{ fontSize: '11px', color: 'var(--primary-gold)', fontWeight: 600, textTransform: 'uppercase' }}>Size: {item.size}</span>
                      )}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      {/* Qty Selector */}
                      <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '30px', padding: '2px 8px', gap: '12px' }}>
                        <button onClick={() => onUpdateQty(item.id, item.size, item.quantity - 1)} style={{ color: 'var(--royal-gray)' }}><Minus size={12} /></button>
                        <span style={{ fontSize: '13px', fontWeight: 600 }}>{item.quantity}</span>
                        <button onClick={() => onUpdateQty(item.id, item.size, item.quantity + 1)} style={{ color: 'var(--royal-gray)' }}><Plus size={12} /></button>
                      </div>
                      
                      {/* Price & Delete */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--primary-red)' }}>₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                        <button onClick={() => onRemoveItem(item.id, item.size)} style={{ color: '#999' }}><Trash2 size={16} /></button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary block */}
          {cartItems.length > 0 && !checkoutSuccess && (
            <div style={{ padding: '24px', backgroundColor: 'var(--bg-light)', borderTop: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              {/* Promo Code Input */}
              <div style={{ display: 'flex', gap: '8px' }}>
                <input 
                  type="text" 
                  placeholder="Enter Promo Code (MPR10)" 
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  style={{
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: '1px solid #ccc',
                    fontSize: '13px',
                    flexGrow: 1,
                    outline: 'none'
                  }}
                />
                <button 
                  onClick={applyPromo}
                  style={{
                    backgroundColor: 'var(--royal-dark)',
                    color: '#fff',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <Tag size={12} /> Apply
                </button>
              </div>
              {promoMessage && (
                <span style={{ fontSize: '11px', color: appliedDiscount > 0 ? '#16a34a' : 'var(--primary-red)', fontWeight: 500, textAlign: 'left' }}>
                  {promoMessage}
                </span>
              )}

              {/* Price Details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', borderTop: '1px solid #ddd', paddingTop: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Subtotal:</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {discountAmount > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#16a34a' }}>
                    <span>Discount:</span>
                    <span>- ₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Delivery Charges:</span>
                  <span style={{ color: '#16a34a', fontWeight: 600 }}>FREE</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '18px', fontWeight: 700, borderTop: '1px dotted #ccc', paddingTop: '8px', marginTop: '4px' }}>
                  <span>Total Payable:</span>
                  <span style={{ color: 'var(--primary-red)' }}>₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button 
                onClick={handleCheckout}
                className="luxury-btn" 
                style={{ width: '100%', justifyContent: 'center', marginTop: '4px' }}
              >
                Proceed To Checkout
              </button>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
