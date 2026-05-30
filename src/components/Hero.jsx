import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    title: "Bridal Silk Sarees",
    subtitle: "The Ultimate Kanchipuram Weaves",
    description: "Discover timeless heritage silk sarees crafted for your most auspicious celebrations. Handwoven with authentic zari details.",
    badge: "New Wedding Arrivals",
    image: "https://www.southindiaeshop.com/cdn/shop/files/home-page-creative-69804b7775ab1.webp?v=1770015630&width=1200",
    gradient: "linear-gradient(135deg, #fff5f6 0%, #ffeef1 100%)",
    themeColor: "var(--primary-red)"
  },
  {
    id: 2,
    title: "Indo-Western Styles",
    subtitle: "Glamorous Gowns & Kurtis",
    description: "Step into modern elegance with our contemporary fusion gowns and designer sky-blue Georgette kurtis.",
    badge: "Trending Collections",
    image: "https://www.southindiaeshop.com/cdn/shop/files/iw-dr-5337-firo-bo-3-68edf9fbe2ae6_55df0c68-c342-40a5-9173-a280ba419bd5.webp?v=1760426757&width=1200",
    gradient: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
    themeColor: "#0284c7"
  },
  {
    id: 3,
    title: "Elite Men's Festive",
    subtitle: "Blazers, Sherwanis & Kurtas",
    description: "Premium fits and textured fabrics designed to make a statement this festive season. Style tailored to perfection.",
    badge: "Exclusive Men's Edition",
    image: "https://www.southindiaeshop.com/cdn/shop/files/maroon-textured-polyester-viscose-blazer-359481.webp?v=1751013478&width=1200",
    gradient: "linear-gradient(135deg, #fdf6b2 0%, #fef9c3 100%)",
    themeColor: "var(--primary-gold)"
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div style={{ position: 'relative', height: '620px', width: '100%', overflow: 'hidden', backgroundColor: '#fff' }}>
      {/* Slide Display Area */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{ 
            position: 'absolute', 
            width: '100%', 
            height: '100%', 
            background: slides[current].gradient, 
            display: 'flex', 
            alignItems: 'center' 
          }}
        >
          <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', alignItems: 'center', width: '100%', gap: '24px' }}>
            {/* Left Texts */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left', zIndex: 10 }}>
              <motion.span 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={{ 
                  alignSelf: 'flex-start',
                  backgroundColor: slides[current].themeColor, 
                  color: '#fff', 
                  padding: '6px 16px', 
                  borderRadius: '30px', 
                  fontSize: '13px', 
                  fontWeight: 600, 
                  textTransform: 'uppercase', 
                  letterSpacing: '1px' 
                }}
              >
                {slides[current].badge}
              </motion.span>
              
              <motion.h1 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                style={{ 
                  fontFamily: 'var(--serif)', 
                  fontSize: '64px', 
                  fontWeight: 700, 
                  color: 'var(--royal-dark)', 
                  lineHeight: 1.1,
                  margin: 0
                }}
              >
                {slides[current].title} <br/>
                <span style={{ color: slides[current].themeColor, fontStyle: 'italic' }}>{slides[current].subtitle}</span>
              </motion.h1>
              
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                style={{ fontSize: '16px', color: 'var(--royal-gray)', maxWidth: '500px', margin: 0 }}
              >
                {slides[current].description}
              </motion.p>
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                style={{ display: 'flex', gap: '16px', marginTop: '10px' }}
              >
                <a href="#shop" className="luxury-btn" style={{ backgroundColor: slides[current].themeColor }}>
                  <ShoppingBag size={18} /> Shop the Collection
                </a>
                <a href="#offers" className="luxury-btn-outline" style={{ borderColor: slides[current].themeColor, color: slides[current].themeColor }}>
                  View Offers
                </a>
              </motion.div>
            </div>

            {/* Right Images */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 50 }}
              style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
            >
              {/* Gold Ring Aesthetic Background Decoration */}
              <div style={{
                position: 'absolute',
                width: '380px',
                height: '380px',
                borderRadius: '50%',
                border: '2px dashed var(--primary-gold)',
                opacity: 0.3,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) rotate(0deg)',
                animation: 'spin 40s linear infinite',
                zIndex: 1
              }} />
              
              {/* Product Saree/Suit Model Image */}
              <img 
                src={slides[current].image} 
                alt={slides[current].title} 
                style={{ 
                  height: '480px', 
                  objectFit: 'contain', 
                  borderRadius: '24px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  zIndex: 2
                }} 
              />
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button onClick={prevSlide} style={{ position: 'absolute', left: '24px', top: '50%', transform: 'translateY(-50%)', backgroundColor: '#fff', border: '1px solid #eee', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10, boxShadow: 'var(--shadow-sm)' }}>
        <ChevronLeft size={24} />
      </button>
      <button onClick={nextSlide} style={{ position: 'absolute', right: '24px', top: '50%', transform: 'translateY(-50%)', backgroundColor: '#fff', border: '1px solid #eee', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10, boxShadow: 'var(--shadow-sm)' }}>
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 10 }}>
        {slides.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrent(index)}
            style={{ 
              width: index === current ? '36px' : '12px', 
              height: '12px', 
              borderRadius: '6px', 
              backgroundColor: index === current ? slides[current].themeColor : '#ccc',
              transition: 'all 0.3s ease'
            }} 
          />
        ))}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @media (max-width: 900px) {
          .container {
            grid-template-columns: 1fr !important;
            padding-top: 40px !important;
          }
          img {
            height: 300px !important;
            margin-top: 20px;
          }
        }
      `}} />
    </div>
  );
}
