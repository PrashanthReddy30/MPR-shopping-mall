import React, { useState } from 'react';
import { Eye, ShoppingBag, Heart, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export const productsData = [
  {
    id: 1,
    name: "Classic Kanchipuram Crimson Zari Saree",
    category: "sarees",
    price: 14999,
    originalPrice: 18999,
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80",
    description: "Authentic handwoven Crimson red Kanchipuram silk saree with rich gold zari brocade work. Made of 100% pure mulberry silk, perfect for grand weddings and heritage ceremonies.",
    colors: ["Crimson Red", "Gold"]
  },
  {
    id: 2,
    name: "Royal Golden Brocade Kanchipuram Saree",
    category: "sarees",
    price: 18499,
    originalPrice: 22999,
    rating: 4.9,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80",
    description: "Magnificent pure gold zari brocade body with contrast crimson borders, exhibiting classic South Indian heritage. Handcrafted with traditional mango motifs.",
    colors: ["Antique Gold", "Crimson Red"]
  },
  {
    id: 3,
    name: "Emerald Green Peacock Motif Silk Saree",
    category: "sarees",
    price: 12999,
    originalPrice: 15999,
    rating: 4.7,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1610030470298-40384be08efd?auto=format&fit=crop&w=600&q=80",
    description: "Splendid emerald green silk body featuring gold zari peacock motifs and a broad traditional purple border. Features a grand woven pallu.",
    colors: ["Emerald Green", "Purple"]
  },
  {
    id: 4,
    name: "Bridal Fuchsia Pink Kanchipuram Saree",
    category: "sarees",
    price: 24999,
    originalPrice: 29999,
    rating: 4.9,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1610030469668-93535c17b6b3?auto=format&fit=crop&w=600&q=80",
    description: "Exquisite heavy bridal weight silk saree in vibrant fuchsia pink, fully adorned with intricate silver and gold zari jaal work.",
    colors: ["Fuchsia Pink", "Gold"]
  },
  {
    id: 5,
    name: "Midnight Blue & Gold Zari Heritage Saree",
    category: "sarees",
    price: 15999,
    originalPrice: 19999,
    rating: 4.6,
    reviews: 74,
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80",
    description: "Traditional midnight blue Kanchipuram saree featuring classic checks pattern with gold zari borders and temple design.",
    colors: ["Midnight Blue", "Gold"]
  },
  {
    id: 6,
    name: "Vibrant Mustard Yellow Temple Border Saree",
    category: "sarees",
    price: 11499,
    originalPrice: 14500,
    rating: 4.7,
    reviews: 83,
    image: "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?auto=format&fit=crop&w=600&q=80",
    description: "Elegant mustard yellow silk saree with a traditional temple border design in rich red and gold. Ideal for festivals and puja functions.",
    colors: ["Mustard Yellow", "Crimson Red"]
  },
  {
    id: 7,
    name: "Pastel Peach Pearl-Weave Silk Saree",
    category: "sarees",
    price: 9999,
    originalPrice: 12999,
    rating: 4.5,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1610030470407-33e33e8ca32a?auto=format&fit=crop&w=600&q=80",
    description: "Modern pastel peach Kanchipuram silk saree with fine silver zari border, perfect for daytime wedding rituals and celebrations.",
    colors: ["Pastel Peach", "Silver"]
  },
  {
    id: 8,
    name: "Royal Purple Floral Jaal Kanchipuram",
    category: "sarees",
    price: 16999,
    originalPrice: 20999,
    rating: 4.8,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1610030470352-be20857321eb?auto=format&fit=crop&w=600&q=80",
    description: "Stunning royal purple silk saree featuring all-over gold floral jaal work on the body and matching rich pallu with heavy tassels.",
    colors: ["Deep Purple", "Gold"]
  },
  {
    id: 9,
    name: "Classic Off-White & Red Wedding Saree",
    category: "sarees",
    price: 19999,
    originalPrice: 24999,
    rating: 4.9,
    reviews: 134,
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=600&q=80",
    description: "Elegant cream and white body with a heavy contrast maroon and gold zari border. A timeless South Indian bridal classic.",
    colors: ["Off-White", "Maroon"]
  },
  {
    id: 10,
    name: "Rich Wine Burgundy Silk Saree",
    category: "sarees",
    price: 13499,
    originalPrice: 16999,
    rating: 4.7,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1610030470298-40384be08efd?auto=format&fit=crop&w=600&q=80",
    description: "Beautiful wine burgundy Kanchipuram silk saree with subtle antique zari details and an elegant contrasting green pallu.",
    colors: ["Wine Burgundy", "Antique Gold"]
  },
  {
    id: 11,
    name: "Tangy Orange Festive Kanchipuram Saree",
    category: "sarees",
    price: 10999,
    originalPrice: 13999,
    rating: 4.6,
    reviews: 49,
    image: "https://images.unsplash.com/photo-1610030470381-11a5113d7cfa?auto=format&fit=crop&w=600&q=80",
    description: "Bright festive orange silk saree contrasted beautifully with a dark bottle green border featuring elephant and horse motifs.",
    colors: ["Tangy Orange", "Bottle Green"]
  },
  {
    id: 12,
    name: "Magnificent Gold Brocade Heritage Saree",
    category: "sarees",
    price: 28999,
    originalPrice: 35000,
    rating: 5.0,
    reviews: 95,
    image: "https://images.unsplash.com/photo-1583391265517-35bbdad01209?auto=format&fit=crop&w=600&q=80",
    description: "Premium bridal Kanchipuram silk saree with all-over heavy gold zari weave and beautiful floral bootis. Represents unmatched luxury.",
    colors: ["Solid Gold"]
  },
  {
    id: 13,
    name: "Aqua Blue Silver Zari Border Saree",
    category: "sarees",
    price: 12499,
    originalPrice: 15499,
    rating: 4.5,
    reviews: 61,
    image: "https://images.unsplash.com/photo-1610030469974-9b16ea98858e?auto=format&fit=crop&w=600&q=80",
    description: "Refreshing aqua blue body with fine silver zari weave patterns along the borders and diamond-weave pallu.",
    colors: ["Aqua Blue", "Silver"]
  },
  {
    id: 14,
    name: "Peacock Green Floral Border Saree",
    category: "sarees",
    price: 14299,
    originalPrice: 17999,
    rating: 4.8,
    reviews: 79,
    image: "https://images.unsplash.com/photo-1610030469976-b6329fe737c0?auto=format&fit=crop&w=600&q=80",
    description: "Gorgeous peacock green silk body with a contrast coral pink border featuring intricate mango motifs and traditional design.",
    colors: ["Peacock Green", "Coral Pink"]
  },
  {
    id: 15,
    name: "Blushing Pink Geometric Weave Saree",
    category: "sarees",
    price: 15499,
    originalPrice: 18999,
    rating: 4.6,
    reviews: 82,
    image: "https://images.unsplash.com/photo-1610030470129-e4cb14f24ef7?auto=format&fit=crop&w=600&q=80",
    description: "Fine Kanchipuram silk saree in blush pink featuring modern geometric zari checks and delicate floral creepers.",
    colors: ["Blushing Pink", "Gold"]
  },
  {
    id: 16,
    name: "Traditional Maroon Checkered Silk Saree",
    category: "sarees",
    price: 11999,
    originalPrice: 14999,
    rating: 4.7,
    reviews: 73,
    image: "https://images.unsplash.com/photo-1610030470438-e6d87e07a3f4?auto=format&fit=crop&w=600&q=80",
    description: "Vintage-inspired checkered body in maroon with signature traditional gold zari borders. Made for standard rituals.",
    colors: ["Maroon", "Antique Gold"]
  },
  {
    id: 17,
    name: "Sleek Violet Gold Border Saree",
    category: "sarees",
    price: 13999,
    originalPrice: 16999,
    rating: 4.6,
    reviews: 58,
    image: "https://images.unsplash.com/photo-1610030470217-1f4fdf07dbf0?auto=format&fit=crop&w=600&q=80",
    description: "Elegant royal violet body with sleek gold borders and geometric pallu lines, suited for wedding guests and celebrations.",
    colors: ["Violet", "Gold"]
  },
  {
    id: 18,
    name: "Mango Yellow Kanchipuram Silk Saree",
    category: "sarees",
    price: 12899,
    originalPrice: 15999,
    rating: 4.7,
    reviews: 69,
    image: "https://images.unsplash.com/photo-1610030470417-91bc62b489d2?auto=format&fit=crop&w=600&q=80",
    description: "Radiant mango yellow silk saree paired with a contrasting teal blue border and gold zari elephant design.",
    colors: ["Mango Yellow", "Teal Blue"]
  },
  {
    id: 19,
    name: "Rose Gold Contemporary Silk Saree",
    category: "sarees",
    price: 21999,
    originalPrice: 26999,
    rating: 4.8,
    reviews: 104,
    image: "https://images.unsplash.com/photo-1610030470442-f8b8098d5c7f?auto=format&fit=crop&w=600&q=80",
    description: "A modern twist to the heritage weave, featuring stunning rose gold tones and silver metallic thread work.",
    colors: ["Rose Gold", "Silver"]
  },
  {
    id: 20,
    name: "Forest Green & Ruby Red Classic Saree",
    category: "sarees",
    price: 16499,
    originalPrice: 19999,
    rating: 4.9,
    reviews: 118,
    image: "https://images.unsplash.com/photo-1610030470453-e8a3ffb1db9d?auto=format&fit=crop&w=600&q=80",
    description: "Authentic forest green silk body with a classic contrast ruby red temple border and gold zari pallu.",
    colors: ["Forest Green", "Ruby Red"]
  },
  {
    id: 21,
    name: "Turquoise Indo-Western Flared Gown",
    category: "lehengas",
    price: 5999,
    originalPrice: 7999,
    rating: 4.6,
    reviews: 86,
    image: "https://www.southindiaeshop.com/cdn/shop/files/iw-dr-5337-firo-bo-3-68edf9fbe2ae6_55df0c68-c342-40a5-9173-a280ba419bd5.webp?v=1760426757&width=600",
    description: "Stunning flared georgette gown featuring embroidery work and a modern silhouette. A perfect choice for cocktail parties and sangeet ceremonies.",
    colors: ["Turquoise", "Mint Green", "Peach"]
  },
  {
    id: 22,
    name: "Sky Blue Georgette Designer Kurti",
    category: "kurtis",
    price: 2499,
    originalPrice: 3499,
    rating: 4.5,
    reviews: 58,
    image: "https://www.southindiaeshop.com/cdn/shop/files/ku-dr-cp1879c-sky-ge-2-686bdbb349982_4018ccf2-6a7a-49ac-e46e-8545776a3007.webp?v=1751957433&width=600",
    description: "Flowy georgette A-line kurti with delicate self-thread work. Comfort meets style, ideal for casual and semi-formal wear.",
    colors: ["Sky Blue", "Lilac", "Soft Yellow"]
  },
  {
    id: 23,
    name: "Maroon Textured Viscose Blazer",
    category: "men",
    price: 4999,
    originalPrice: 6499,
    rating: 4.7,
    reviews: 92,
    image: "https://www.southindiaeshop.com/cdn/shop/files/maroon-textured-polyester-viscose-blazer-359481.webp?v=1751013478&width=600",
    description: "Premium single-breasted blazer in textured polyester-viscose blend. Features a tailored fit, notch lapel, and dual vents for a classy appearance.",
    colors: ["Maroon", "Navy Blue", "Slate Gray"]
  },
  {
    id: 24,
    name: "Silk Lehenga for Girls (Pattu Pavadai)",
    category: "kids",
    price: 3999,
    originalPrice: 4999,
    rating: 4.7,
    reviews: 43,
    image: "https://www.southindiaeshop.com/cdn/shop/files/favicon-PhotoRoom.png-PhotoRoom-1.png?crop=center&height=300&v=1726462048&width=300",
    description: "Traditional pattu pavadai silk skirt and blouse set for young girls. Made with premium silk fabric that is gentle on skin with vibrant festive borders.",
    colors: ["Magenta/Gold", "Green/Orange"]
  },
  {
    id: 25,
    name: "Designer Floral Printed Lehenga Choli",
    category: "lehengas",
    price: 8999,
    originalPrice: 10999,
    rating: 4.8,
    reviews: 65,
    image: "https://www.southindiaeshop.com/cdn/shop/files/iw-dr-5337-firo-bo-3-68edf9fbe2ae6_55df0c68-c342-40a5-9173-a280ba419bd5.webp?v=1760426757&width=600",
    description: "Fully stitched digital floral print lehenga with elegant sequin and thread borders. Includes custom net dupatta.",
    colors: ["Peach-Pink", "Sky-Blue"]
  },
  {
    id: 26,
    name: "Tuxedo Styling Navy Blazer",
    category: "men",
    price: 5499,
    originalPrice: 6999,
    rating: 4.6,
    reviews: 73,
    image: "https://www.southindiaeshop.com/cdn/shop/files/maroon-textured-polyester-viscose-blazer-359481.webp?v=1751013478&width=600",
    description: "Navy blue textured blazer styled with satin lapel details for a contemporary tuxedo touch. Perfect for weddings and formal parties.",
    colors: ["Navy Blue", "Jet Black"]
  }
];

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
