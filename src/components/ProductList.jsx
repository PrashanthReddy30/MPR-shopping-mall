import React, { useState } from 'react';
import { Eye, ShoppingBag, Heart, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { productsData } from '../data/productsData';

export { productsData };

export default function ProductList({ activeCategory, setActiveCategory, onProductClick, onAddToCart, onAddToWishlist, wishlistedIds }) {
  const [sortBy, setSortBy] = useState("popular");

  // Filter products by category
  const filteredProducts = activeCategory === "all" 
    ? productsData 
    : activeCategory === "offers"
      ? productsData.filter(p => p.price < p.originalPrice)
      : productsData.filter(p => p.category === activeCategory);

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return b.reviews - a.reviews; // popularity fallback
  });

  return (
    <section style={{ padding: '80px 0' }} id="shop">
      <div className="container">
        
        {/* Category Filter Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: '40px', borderBottom: '1px solid var(--border-light)', paddingBottom: '20px' }}>
          {/* Navigation Filter Tabs */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {["all", "sarees", "lehengas", "kurtis", "men", "kids", "offers"].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                style={{
                  padding: '8px 24px',
                  borderRadius: '30px',
                  fontSize: '14px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  backgroundColor: activeCategory === tab ? 'var(--primary-red)' : 'var(--bg-white)',
                  color: activeCategory === tab ? '#fff' : 'var(--royal-gray)',
                  border: activeCategory === tab ? '1px solid var(--primary-red)' : '1px solid var(--border-light)',
                  boxShadow: activeCategory === tab ? 'var(--shadow-sm)' : 'none',
                  cursor: 'pointer'
                }}
              >
                {tab === "men" ? "Men's Wear" : tab === "all" ? "All Fashion" : tab === "offers" ? "Special Offers" : tab}
              </button>
            ))}
          </div>

          {/* Sort Selection Box */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '14px', color: 'var(--royal-gray)', fontWeight: 500 }}>Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: '8px 16px',
                borderRadius: '30px',
                border: '1px solid var(--border-light)',
                fontSize: '14px',
                outline: 'none',
                backgroundColor: 'var(--bg-white)',
                cursor: 'pointer',
                fontWeight: 500
              }}
            >
              <option value="popular">Popularity</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Product Cards Grid Layout */}
        <div className="grid-cols-4">
          {sortedProducts.map(product => {
            const isWishlisted = wishlistedIds.includes(product.id);
            return (
              <div 
                key={product.id}
                style={{
                  backgroundColor: 'var(--bg-white)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-sm)',
                  border: '1px solid rgba(0,0,0,0.03)',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
                className="prod-card"
              >
                {/* Wishlist Button Overlay */}
                <button 
                  onClick={() => onAddToWishlist(product.id)}
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    color: isWishlisted ? 'var(--primary-red)' : 'var(--royal-dark)',
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    boxShadow: 'var(--shadow-sm)',
                    zIndex: 5,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Heart size={18} fill={isWishlisted ? 'var(--primary-red)' : 'none'} style={{ transition: 'all 0.2s ease' }} />
                </button>

                {/* Rating Badge Overlay */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  backgroundColor: 'rgba(18, 19, 21, 0.8)',
                  color: 'var(--primary-gold)',
                  padding: '4px 10px',
                  borderRadius: '30px',
                  fontSize: '12px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  zIndex: 5
                }}>
                  <Star size={12} fill="var(--primary-gold)" /> {product.rating}
                </div>

                {/* Image and Hover Actions */}
                <div style={{ position: 'relative', width: '100%', height: '340px', overflow: 'hidden', backgroundColor: 'var(--bg-light)' }} className="img-container">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'all 0.5s ease'
                    }}
                  />
                  {/* Quick View Button overlay on Hover */}
                  <div className="hover-actions" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.25)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '12px',
                    opacity: 0,
                    transition: 'all 0.3s ease',
                    zIndex: 4
                  }}>
                    <button 
                      onClick={() => onProductClick(product)}
                      style={{
                        backgroundColor: '#fff',
                        color: 'var(--royal-dark)',
                        padding: '10px 18px',
                        borderRadius: '30px',
                        fontWeight: 600,
                        fontSize: '13px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: 'var(--shadow-md)'
                      }}
                    >
                      <Eye size={16} /> Quick View
                    </button>
                  </div>
                </div>

                {/* Details Section */}
                <div style={{ padding: '20px', textAlign: 'left' }}>
                  <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--primary-gold)', fontWeight: 700, letterSpacing: '1px' }}>
                    {product.category === "men" ? "Men's Collection" : product.category}
                  </span>
                  
                  <h3 
                    onClick={() => onProductClick(product)}
                    style={{
                      fontSize: '16px',
                      fontWeight: 600,
                      color: 'var(--royal-dark)',
                      margin: '6px 0 12px',
                      cursor: 'pointer',
                      height: '42px',
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical'
                    }}
                    className="prod-title"
                  >
                    {product.name}
                  </h3>

                  {/* Price and Cart Action */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--primary-red)' }}>
                        ₹{product.price.toLocaleString('en-IN')}
                      </span>
                      <span style={{ fontSize: '13px', color: '#999', textDecoration: 'line-through' }}>
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <button 
                      onClick={() => onAddToCart(product)}
                      style={{
                        backgroundColor: 'var(--royal-dark)',
                        color: '#fff',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                      className="cart-icon-btn"
                    >
                      <ShoppingBag size={18} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .prod-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
        }
        .prod-card:hover .hover-actions {
          opacity: 1 !important;
        }
        .prod-card:hover img {
          transform: scale(1.05);
        }
        .prod-title:hover {
          color: var(--primary-red) !important;
        }
        .cart-icon-btn:hover {
          background-color: var(--primary-red) !important;
          transform: scale(1.1);
        }
      `}} />
    </section>
  );
}
