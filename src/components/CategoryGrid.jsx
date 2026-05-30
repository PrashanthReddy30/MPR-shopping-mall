import React from 'react';

const categories = [
  {
    name: "Kanchipuram Silk",
    image: "https://www.southindiaeshop.com/cdn/shop/files/home-page-creative-69804b7775ab1.webp?v=1770015630&width=300",
    link: "#sarees",
    bg: "#fff5f6"
  },
  {
    name: "Designer Lehengas",
    image: "https://www.southindiaeshop.com/cdn/shop/files/iw-dr-5337-firo-bo-3-68edf9fbe2ae6_55df0c68-c342-40a5-9173-a280ba419bd5.webp?v=1760426757&width=300",
    link: "#lehengas",
    bg: "#f0f9ff"
  },
  {
    name: "Trendy Kurtis",
    image: "https://www.southindiaeshop.com/cdn/shop/files/ku-dr-cp1879c-sky-ge-2-686bdbb349982_4018ccf2-6a7a-49ac-a46e-8545776a3007.webp?v=1751957433&width=300",
    link: "#kurtis",
    bg: "#fdf2f8"
  },
  {
    name: "Men's Festive",
    image: "https://www.southindiaeshop.com/cdn/shop/files/maroon-textured-polyester-viscose-blazer-359481.webp?v=1751013478&width=300",
    link: "#men",
    bg: "#fef9c3"
  },
  {
    name: "Kids Collection",
    image: "https://www.southindiaeshop.com/cdn/shop/files/favicon-PhotoRoom.png-PhotoRoom-1.png?crop=center&height=128&v=1726462048&width=128",
    link: "#kids",
    bg: "#ecfdf5"
  }
];

export default function CategoryGrid({ onSelectCategory }) {
  return (
    <section style={{ padding: '60px 0', backgroundColor: 'var(--bg-white)' }} id="categories">
      <div className="container">
        <div className="section-title">
          <p>Explore Collections</p>
          <h2>Shop By Category</h2>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '40px' }}>
          {categories.map((cat, i) => (
            <div 
              key={i} 
              onClick={() => onSelectCategory(cat.link.substring(1))}
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                gap: '16px',
                cursor: 'pointer'
              }}
              className="cat-card"
            >
              {/* Image Circle */}
              <div style={{ 
                position: 'relative',
                width: '150px', 
                height: '150px', 
                borderRadius: '50%', 
                overflow: 'hidden', 
                border: '3px solid transparent',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.3s ease',
                backgroundColor: cat.bg
              }} className="cat-img-wrap">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    transition: 'all 0.5s ease'
                  }} 
                />
              </div>

              {/* Title */}
              <span style={{ 
                fontWeight: 600, 
                fontSize: '15px', 
                color: 'var(--royal-dark)',
                fontFamily: 'var(--sans)',
                letterSpacing: '0.5px'
              }}>
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .cat-card:hover .cat-img-wrap {
          border-color: var(--primary-gold) !important;
          transform: translateY(-8px);
          box-shadow: var(--shadow-md) !important;
        }
        .cat-card:hover img {
          transform: scale(1.1);
        }
      `}} />
    </section>
  );
}
