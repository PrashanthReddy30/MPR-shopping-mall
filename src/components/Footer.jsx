import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1e2022', color: '#b0b3b8', padding: '60px 0 20px', borderTop: '4px solid var(--primary-gold)', fontSize: '14px' }}>
      <div className="container">
        
        {/* Footer Columns */}
        <div className="grid-cols-4" style={{ marginBottom: '40px', textAlign: 'left' }}>
          
          {/* Col 1: Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '36px', height: '36px', backgroundColor: 'var(--primary-red)', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', fontSize: '18px', fontWeight: 'bold', fontFamily: 'var(--serif)' }}>
                K
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '20px', fontWeight: 800, color: '#fff', fontFamily: 'var(--sans)', lineHeight: '1.1' }}>KLM</span>
                <span style={{ fontSize: '10px', color: 'var(--primary-gold)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>Shopping Mall</span>
              </div>
            </a>
            <p style={{ lineHeight: '1.7', fontSize: '13px' }}>
              The ultimate family fashion destination in Telangana. Experience luxury ethnic sarees, designer lehengas, elite festive blazers, and custom tailoring services.
            </p>
            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '4px' }}>
              {[
                { icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8H7v3h2v9h3v-9h3.3l.7-3H12V6c0-.9.2-1.2 1.1-1.2H15V2h-2.8C9.5 2 9 3.5 9 6.2V8z"/></svg>, link: '#' },
                { icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>, link: '#' },
                { icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>, link: '#' },
                { icon: <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>, link: '#' }
              ].map((s, idx) => (
                <a 
                  key={idx} 
                  href={s.link} 
                  style={{ 
                    backgroundColor: 'rgba(255,255,255,0.05)', 
                    color: '#fff', 
                    width: '36px', 
                    height: '36px', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center' 
                  }}
                  className="social-hover"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ color: '#fff', fontSize: '16px', fontWeight: 600, fontFamily: 'var(--sans)', position: 'relative', paddingBottom: '8px' }} className="footer-title-line">Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              <a href="#" className="link-hover">Home</a>
              <a href="#categories" className="link-hover">Categories</a>
              <a href="#shop" className="link-hover">Shop Fashion</a>
              <a href="#offers" className="link-hover">Special Offers</a>
              <a href="#contact" className="link-hover">Location & Contact</a>
            </div>
          </div>

          {/* Col 3: Contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ color: '#fff', fontSize: '16px', fontWeight: 600, fontFamily: 'var(--sans)', position: 'relative', paddingBottom: '8px' }} className="footer-title-line">Narsampet Branch</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <MapPin size={18} style={{ color: 'var(--primary-gold)', flexShrink: 0, marginTop: '2px' }} />
                <span>
                  <strong>KLM Shopping Mall</strong><br/>
                  Main Road, Near Bus Stand,<br/>
                  Narsampet, Warangal (Dist),<br/>
                  Telangana - 506132
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} style={{ color: 'var(--primary-gold)' }} />
                <span>+91 99001 12230</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} style={{ color: 'var(--primary-gold)' }} />
                <span>info@klmshoppingmall.com</span>
              </div>
            </div>
          </div>

          {/* Col 4: Newsletter */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ color: '#fff', fontSize: '16px', fontWeight: 600, fontFamily: 'var(--sans)', position: 'relative', paddingBottom: '8px' }} className="footer-title-line">Newsletter</h4>
            <p style={{ fontSize: '13px', lineHeight: '1.6' }}>Subscribe to get alerts on new festive arrivals, fashion shows, and weekend shopping sales.</p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing to KLM News!'); }} style={{ display: 'flex', gap: '6px' }}>
              <input 
                type="email" 
                placeholder="Your email address" 
                required 
                style={{
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '1px solid #444',
                  backgroundColor: '#2b2d31',
                  color: '#fff',
                  fontSize: '13px',
                  outline: 'none',
                  flexGrow: 1
                }}
              />
              <button 
                type="submit" 
                style={{
                  backgroundColor: 'var(--primary-gold)',
                  color: 'var(--royal-dark)',
                  padding: '8px 14px',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontWeight: 'bold'
                }}
              >
                Join
              </button>
            </form>
          </div>

        </div>

        {/* Bottom copyright */}
        <div style={{ borderTop: '1px solid #2b2d31', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', fontSize: '12px' }}>
          <span>&copy; {new Date().getFullYear()} KLM Shopping Mall. All Rights Reserved.</span>
          <span>Best Family Fashion Mall in Narsampet, Telangana</span>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .social-hover:hover {
          background-color: var(--primary-gold) !important;
          color: var(--royal-dark) !important;
          transform: translateY(-3px);
        }
        .link-hover:hover {
          color: #fff !important;
          transform: translateX(4px);
        }
        .footer-title-line::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 30px;
          height: 2px;
          background-color: var(--primary-gold);
        }
      `}} />
    </footer>
  );
}
