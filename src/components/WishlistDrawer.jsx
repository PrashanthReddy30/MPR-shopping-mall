import React from 'react';
import { X, Heart, Trash2, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WishlistDrawer({ isOpen, onClose, wishlistItems, onRemoveItem, onAddToCart }) {
  if (!isOpen) return null;

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
              <Heart size={20} style={{ color: 'var(--primary-red)' }} fill="var(--primary-red)" /> My Wishlist ({wishlistItems.length})
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

          {/* Wishlist Items List */}
          <div style={{ flexGrow: 1, overflowY: 'auto', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {wishlistItems.length === 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#999', gap: '12px' }}>
                <Heart size={48} strokeWidth={1} />
                <span>Your wishlist is empty</span>
                <button onClick={onClose} className="luxury-btn" style={{ padding: '8px 20px', fontSize: '12px', marginTop: '10px' }}>Shop Now</button>
              </div>
            ) : (
              wishlistItems.map((item) => (
                <div key={item.id} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '16px', borderBottom: '1px solid var(--border-light)', paddingBottom: '16px' }}>
                  <img src={item.image} alt={item.name} style={{ width: '80px', height: '100px', objectFit: 'cover', borderRadius: '8px' }} />
                  
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'left' }}>
                    <div>
                      <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--royal-dark)', margin: 0 }}>{item.name}</h4>
                      <span style={{ fontSize: '11px', color: 'var(--primary-gold)', fontWeight: 600, textTransform: 'uppercase' }}>{item.category}</span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '16px', fontWeight: 700, color: 'var(--primary-red)' }}>₹{item.price.toLocaleString('en-IN')}</span>
                      
                      <div style={{ display: 'flex', gap: '8px' }}>
                        {/* Add to Bag */}
                        <button 
                          onClick={() => {
                            onAddToCart(item);
                            onRemoveItem(item.id); // Option to remove from wishlist when moved to cart
                          }}
                          style={{
                            backgroundColor: 'var(--royal-dark)',
                            color: '#fff',
                            padding: '6px 12px',
                            borderRadius: '20px',
                            fontSize: '11px',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          <ShoppingBag size={12} /> Add to Bag
                        </button>
                        
                        {/* Remove from wishlist */}
                        <button 
                          onClick={() => onRemoveItem(item.id)} 
                          style={{ 
                            color: '#999',
                            backgroundColor: 'var(--bg-light)',
                            width: '28px',
                            height: '28px',
                            borderRadius: '50%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                          }}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
