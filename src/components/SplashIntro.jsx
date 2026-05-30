import React, { useState, useEffect } from 'react';

const ZipperPuller = () => (
  <svg width="45" height="65" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0px 4px 8px rgba(0,0,0,0.4))' }}>
    {/* Zipper body */}
    <path d="M6 2H34V16L28 26V38L20 44L12 38V26L6 16V2Z" fill="url(#gold-grad-pull)" stroke="#d4af37" strokeWidth="2"/>
    {/* Pull tab */}
    <rect x="14" y="24" width="12" height="32" rx="6" fill="url(#gold-grad-pull)" stroke="#b8860b" strokeWidth="2"/>
    {/* Inner hole */}
    <circle cx="20" cy="44" r="4" fill="#1e1215"/>
    <defs>
      <linearGradient id="gold-grad-pull" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ffe680" />
        <stop offset="30%" stopColor="#f9b32e" />
        <stop offset="70%" stopColor="#d4af37" />
        <stop offset="100%" stopColor="#8a6d1c" />
      </linearGradient>
    </defs>
  </svg>
);

export default function SplashIntro({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [logoVisible, setLogoVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Phase 1: Animate Zipper from Left to Right
    const duration = 1600; // 1.6 seconds
    const intervalTime = 16; // ~60fps
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return Math.min(prev + step, 100);
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress >= 80) {
      setLogoVisible(true);
    }
    
    if (progress === 100) {
      // Phase 2: Show logo name, then fade out the entire splash screen
      const exitTimer = setTimeout(() => {
        setExiting(true);
      }, 2500); // Wait for logo display

      const completeTimer = setTimeout(() => {
        onComplete();
      }, 3300); // Complete animation

      return () => {
        clearTimeout(exitTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [progress, onComplete]);

  // Polygon shapes for diagonal unzipping
  const topClipPath = `polygon(0 0, 100% 0, 100% 100%, ${progress}% 100%, 0 0)`;
  const bottomClipPath = `polygon(0 100%, 100% 100%, 100% 0, ${progress}% 0, 0 100%)`;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#121315', // Background behind panels
        zIndex: 99999,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: exiting ? 0 : 1,
        transition: 'opacity 0.8s ease-in-out',
        pointerEvents: exiting ? 'none' : 'auto'
      }}
    >
      {/* ------------------------------------------------------------- */}
      {/* BRAND REVEAL CONTENT (Underneath the panels)                  */}
      {/* ------------------------------------------------------------- */}
      <div 
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'radial-gradient(circle, #2d0b11 0%, #120305 100%)',
          padding: '20px',
          textAlign: 'center',
          boxSizing: 'border-box'
        }}
      >
        {/* Luxury Gold Border Frame */}
        <div style={{
          position: 'absolute',
          top: '30px',
          bottom: '30px',
          left: '30px',
          right: '30px',
          border: '2px solid rgba(249, 179, 46, 0.25)',
          outline: '10px double rgba(249, 179, 46, 0.1)',
          pointerEvents: 'none',
          zIndex: 1
        }} />

        {/* Branding elements */}
        <div 
          style={{
            zIndex: 2,
            opacity: logoVisible ? 1 : 0,
            transform: logoVisible ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(20px)',
            transition: 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '15px'
          }}
        >
          {/* Logo Emblem Icon */}
          <div 
            className="logo-emblem"
            style={{
              width: '80px',
              height: '80px',
              backgroundColor: 'var(--primary-red)',
              borderRadius: '16px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
              fontSize: '44px',
              fontWeight: 'bold',
              fontFamily: 'var(--serif)',
              border: '3px solid var(--primary-gold)',
              boxShadow: '0 0 20px rgba(249,179,46,0.4)',
              animation: 'goldGlow 2s infinite alternate'
            }}
          >
            M
          </div>

          {/* Mall Name */}
          <h1 
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '48px',
              color: 'var(--primary-gold)',
              fontWeight: 700,
              letterSpacing: '4px',
              margin: '10px 0 5px',
              textTransform: 'uppercase',
              backgroundImage: 'linear-gradient(to right, #ffe066, #f9b32e, #ffe066)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0px 4px 15px rgba(0,0,0,0.5)',
              animation: 'textShine 6s ease-in-out infinite'
            }}
          >
            MPR Shopping Mall
          </h1>

          {/* Subtitle */}
          <div 
            style={{
              width: '80px',
              height: '2px',
              backgroundColor: 'var(--primary-gold)',
              margin: '5px auto 10px'
            }} 
          />
          
          <p 
            style={{
              fontFamily: 'var(--sans)',
              color: '#faf7f6',
              fontSize: '14px',
              letterSpacing: '6px',
              textTransform: 'uppercase',
              opacity: 0.8,
              fontWeight: 500
            }}
          >
            Narsampet • Telangana
          </p>

          <p 
            style={{
              fontFamily: 'var(--serif)',
              color: 'var(--primary-gold)',
              fontStyle: 'italic',
              fontSize: '16px',
              letterSpacing: '1px',
              marginTop: '5px',
              opacity: 0.9
            }}
          >
            Where Heritage Meets Luxury
          </p>

          {/* Loading Indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '30px' }}>
            <div className="spinner" />
            <span style={{ fontSize: '11px', color: '#999', letterSpacing: '2px', textTransform: 'uppercase' }}>Opening Store...</span>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* ZIPPER PANELS (Top and Bottom red silk covers)                */}
      {/* ------------------------------------------------------------- */}
      {/* Top Panel (Slides up and unzips) */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '50%',
          background: 'linear-gradient(135deg, #cc1034 0%, #ff1948 100%)',
          boxShadow: 'inset 0 -10px 20px rgba(0,0,0,0.25)',
          clipPath: topClipPath,
          zIndex: 10,
          transform: progress === 100 ? 'translateY(-100%)' : 'translateY(0)',
          opacity: progress === 100 ? 0 : 1,
          transition: progress === 100 ? 'transform 1.2s cubic-bezier(0.7, 0, 0.3, 1), opacity 1.2s ease-in-out' : 'none'
        }}
      >
        {/* Subtle Silk Pattern texture overlay */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          opacity: 0.05,
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 0), radial-gradient(rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '8px 8px',
          backgroundPosition: '0 0, 4px 4px'
        }} />
      </div>

      {/* Bottom Panel (Slides down and unzips) */}
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          width: '100%',
          height: '50%',
          background: 'linear-gradient(135deg, #ff1948 0%, #990c28 100%)',
          boxShadow: 'inset 0 10px 20px rgba(0,0,0,0.25)',
          clipPath: bottomClipPath,
          zIndex: 10,
          transform: progress === 100 ? 'translateY(100%)' : 'translateY(0)',
          opacity: progress === 100 ? 0 : 1,
          transition: progress === 100 ? 'transform 1.2s cubic-bezier(0.7, 0, 0.3, 1), opacity 1.2s ease-in-out' : 'none'
        }}
      >
        {/* Texture overlay */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          opacity: 0.05,
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 0), radial-gradient(rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '8px 8px',
          backgroundPosition: '0 0, 4px 4px'
        }} />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* ZIPPER TRACK & SLIDER                                         */}
      {/* ------------------------------------------------------------- */}
      {/* Closed Zipper Teeth Line (Disappears from left to right) */}
      {progress < 100 && (
        <div 
          style={{
            position: 'absolute',
            top: 'calc(50% - 4px)',
            left: `${progress}%`,
            width: `${100 - progress}%`,
            height: '8px',
            backgroundImage: 'repeating-linear-gradient(90deg, #d4af37, #d4af37 3px, transparent 3px, transparent 6px)',
            borderTop: '1px solid #8a6d1c',
            borderBottom: '1px solid #8a6d1c',
            zIndex: 11
          }} 
        />
      )}

      {/* Zipper Puller Slider */}
      {progress < 100 && (
        <div 
          style={{
            position: 'absolute',
            top: '50%',
            left: `${progress}%`,
            transform: 'translate(-50%, -50%)',
            zIndex: 12,
            transition: 'left 0.016s linear'
          }}
        >
          <ZipperPuller />
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* INJECTED ANIMATIONS CSS                                       */}
      {/* ------------------------------------------------------------- */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes textShine {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes goldGlow {
          0% { box-shadow: 0 0 15px rgba(249,179,46,0.3); }
          100% { box-shadow: 0 0 30px rgba(249,179,46,0.6), 0 0 40px rgba(255,25,72,0.3); }
        }
        .spinner {
          width: 14px;
          height: 14px;
          border: 2px solid rgba(249, 179, 46, 0.25);
          border-top-color: var(--primary-gold);
          border-radius: 50%;
          animation: spin 1s infinite linear;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
}
