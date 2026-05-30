import React, { useState } from 'react';
import { Search, ShoppingBag, Heart, Scissors, MapPin, Phone, Menu, X } from 'lucide-react';

export default function Navbar({ cartCount, wishlistCount, onCartClick, onTailoringClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header style={{ width: '100%', position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'var(--bg-white)', boxShadow: 'var(--shadow-sm)' }}>
      {/* Top Announcement Bar */}
      <div style={{ backgroundColor: 'var(--royal-dark)', color: 'var(--bg-white)', fontSize: '12px', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Phone size={12} style={{ color: 'var(--primary-gold)' }} /> +91 99001 12230</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={12} style={{ color: 'var(--primary-gold)' }} /> Narsampet, Telangana</span>
          </div>
          <div style={{ color: 'var(--primary-gold)', fontWeight: 500, letterSpacing: '0.5px' }}>
            🎉 SPECIAL OFFER: Flat 10% OFF on Wedding Silk Sarees! Code: MPR10
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <div style={{ height: '80px', display: 'flex', alignItems: 'center', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          
          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ display: 'none', color: 'var(--royal-dark)' }} className="mobile-menu-btn-style">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--primary-red)', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', fontSize: '20px', fontWeight: 'bold', fontFamily: 'var(--serif)' }}>
              K
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '22px', fontWeight: 800, letterSpacing: '1px', color: 'var(--royal-dark)', fontFamily: 'var(--sans)', lineHeight: '1.1' }}>MPR</span>
              <span style={{ fontSize: '11px', color: 'var(--primary-gold)', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: 600 }}>Shopping Mall</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" style={{ display: 'flex', gap: '28px', fontSize: '14px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            <a href="#" style={{ color: 'var(--primary-red)' }}>Home</a>
            <a href="#sarees" className="nav-hover">Silk Sarees</a>
            <a href="#lehengas" className="nav-hover">Lehengas</a>
            <a href="#kurtis" className="nav-hover">Kurtis</a>
            <a href="#men" className="nav-hover">Men's Wear</a>
            <a href="#kids" className="nav-hover">Kids</a>
            <a href="#offers" className="nav-hover">Offers</a>
          </nav>

          {/* Header Action Items */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {/* Custom Stitching Button */}
            <button onClick={onTailoringClick} className="luxury-btn-outline" style={{ padding: '8px 18px', fontSize: '12px', border: '1px solid var(--primary-gold)', color: 'var(--primary-gold)' }}>
              <Scissors size={14} /> Stitching
            </button>

            {/* Search Bar */}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }} className="search-container">
              <input 
                type="text" 
                placeholder="Search sarees, kurtas..." 
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                style={{
                  width: searchFocused ? '200px' : '150px',
                  padding: '8px 12px 8px 36px',
                  borderRadius: '30px',
                  border: '1px solid #ccc',
                  fontSize: '13px',
                  transition: 'all 0.3s ease',
                  backgroundColor: 'var(--bg-light)',
                  outline: 'none'
                }}
              />
              <Search size={16} style={{ position: 'absolute', left: '12px', color: '#999' }} />
            </div>

            {/* Wishlist */}
            <a href="#wishlist" style={{ position: 'relative', color: 'var(--royal-dark)' }}>
              <Heart size={22} className="nav-hover" />
              {wishlistCount > 0 && (
                <span style={{ position: 'absolute', top: '-6px', right: '-8px', backgroundColor: 'var(--primary-gold)', color: 'var(--royal-dark)', fontSize: '10px', fontWeight: 'bold', width: '18px', height: '18px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  {wishlistCount}
                </span>
              )}
            </a>

            {/* Shopping Bag (Cart) */}
            <button onClick={onCartClick} style={{ position: 'relative', color: 'var(--royal-dark)' }}>
              <ShoppingBag size={22} className="nav-hover" />
              {cartCount > 0 && (
                <span style={{ position: 'absolute', top: '-6px', right: '-8px', backgroundColor: 'var(--primary-red)', color: '#fff', fontSize: '10px', fontWeight: 'bold', width: '18px', height: '18px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div style={{ backgroundColor: 'var(--bg-white)', borderBottom: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column', padding: '16px 24px', gap: '12px', animation: 'fadeIn 0.3s ease-out' }}>
          <a href="#" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600 }}>Home</a>
          <a href="#sarees" onClick={() => setMobileMenuOpen(false)}>Silk Sarees</a>
          <a href="#lehengas" onClick={() => setMobileMenuOpen(false)}>Lehengas</a>
          <a href="#kurtis" onClick={() => setMobileMenuOpen(false)}>Kurtis</a>
          <a href="#men" onClick={() => setMobileMenuOpen(false)}>Men's Wear</a>
          <a href="#kids" onClick={() => setMobileMenuOpen(false)}>Kids</a>
          <a href="#offers" onClick={() => setMobileMenuOpen(false)}>Offers</a>
          <button 
            onClick={() => { setMobileMenuOpen(false); onTailoringClick(); }} 
            style={{ alignSelf: 'flex-start', border: '1px solid var(--primary-gold)', color: 'var(--primary-gold)', padding: '8px 16px', borderRadius: '30px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}
          >
            <Scissors size={14} /> Stitching / Custom Fitting
          </button>
        </div>
      )}

      {/* Nav hover styling injection */}
      <style dangerouslySetInnerHTML={{__html: `
        .nav-hover:hover {
          color: var(--primary-red) !important;
          transform: scale(1.05);
        }
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn-style {
            display: block !important;
          }
        }
        @media (max-width: 550px) {
          .search-container {
            display: none !important;
          }
        }
      `}} />
    </header>
  );
}
