import React, { useState } from 'react';
import { X, Scissors, Info, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TailoringModal({ isOpen, onClose }) {
  const [styleType, setStyleType] = useState('blouse');
  const [fallPico, setFallPico] = useState(true);
  const [measureMethod, setMeasureMethod] = useState('standard');
  
  // Custom measurements inputs state
  const [measurements, setMeasurements] = useState({
    bust: '',
    waist: '',
    hip: '',
    length: '',
    specialInstructions: ''
  });

  const [bookingSuccess, setBookingSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      onClose();
    }, 4000);
  };

  return (
    <AnimatePresence>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 170, padding: '24px' }}>
        
        {/* Overlay click to close */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} onClick={onClose} />

        {/* Modal Panel */}
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
            maxWidth: '550px',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '40px 32px',
            boxShadow: 'var(--shadow-lg)',
            zIndex: 180,
            textAlign: 'left'
          }}
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

          {/* Icon Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid var(--border-light)', paddingBottom: '16px', marginBottom: '24px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#fdf2f8', color: 'var(--primary-red)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Scissors size={22} />
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: '22px', fontWeight: 600, color: 'var(--royal-dark)', margin: 0 }}>Custom Tailoring Desk</h3>
              <p style={{ color: 'var(--royal-gray)', fontSize: '13px', margin: 0 }}>Premium Stitching & Fitting by KLM Designers</p>
            </div>
          </div>

          {bookingSuccess ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '30px 0', textAlign: 'center', gap: '16px' }}>
              <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: '#dcfce7', color: '#16a34a', fontSize: '32px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                ✓
              </div>
              <h4 style={{ fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 600 }}>Stitching Slot Booked!</h4>
              <p style={{ color: 'var(--royal-gray)', fontSize: '14px' }}>
                Our designer will call you within 24 hours to finalize your style, collect fabric (or measurements), and arrange fitting. 
                <br/><strong>Location Drop-off:</strong> KLM Mall, Main Road, Narsampet.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Type Select */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: 600, color: 'var(--royal-dark)' }}>Choose Stitching Style:</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr 0.8fr', gap: '10px' }}>
                  {[
                    { id: 'blouse', label: 'Saree Blouse' },
                    { id: 'lehenga', label: 'Lehenga Choli' },
                    { id: 'kurti', label: 'Kurti' }
                  ].map(style => (
                    <button
                      key={style.id}
                      type="button"
                      onClick={() => setStyleType(style.id)}
                      style={{
                        padding: '10px',
                        borderRadius: '8px',
                        border: styleType === style.id ? '2px solid var(--primary-red)' : '1px solid #ccc',
                        backgroundColor: styleType === style.id ? '#fef2f2' : '#fff',
                        color: styleType === style.id ? 'var(--primary-red)' : 'var(--royal-dark)',
                        fontWeight: 600,
                        fontSize: '13px'
                      }}
                    >
                      {style.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Saree Addons */}
              {styleType === 'blouse' && (
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'var(--bg-light)', padding: '12px 16px', borderRadius: '12px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 500 }}>Include Saree Fall, Pico & Tassels (+ ₹199):</span>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button 
                      type="button" 
                      onClick={() => setFallPico(true)}
                      style={{ padding: '4px 12px', fontSize: '12px', borderRadius: '4px', border: fallPico ? '1px solid var(--primary-red)' : '1px solid #ccc', backgroundColor: fallPico ? 'var(--primary-red)' : '#fff', color: fallPico ? '#fff' : 'var(--royal-dark)' }}
                    >
                      Yes
                    </button>
                    <button 
                      type="button" 
                      onClick={() => setFallPico(false)}
                      style={{ padding: '4px 12px', fontSize: '12px', borderRadius: '4px', border: !fallPico ? '1px solid var(--primary-red)' : '1px solid #ccc', backgroundColor: !fallPico ? 'var(--primary-red)' : '#fff', color: !fallPico ? '#fff' : 'var(--royal-dark)' }}
                    >
                      No
                    </button>
                  </div>
                </div>
              )}

              {/* Measurement Method selector */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: 600, color: 'var(--royal-dark)' }}>Measurement Mode:</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <button
                    type="button"
                    onClick={() => setMeasureMethod('standard')}
                    style={{
                      padding: '10px',
                      borderRadius: '8px',
                      border: measureMethod === 'standard' ? '2px solid var(--primary-red)' : '1px solid #ccc',
                      backgroundColor: measureMethod === 'standard' ? '#fef2f2' : '#fff',
                      color: measureMethod === 'standard' ? 'var(--primary-red)' : 'var(--royal-dark)',
                      fontWeight: 600,
                      fontSize: '13px'
                    }}
                  >
                    Use Standard Size
                  </button>
                  <button
                    type="button"
                    onClick={() => setMeasureMethod('custom')}
                    style={{
                      padding: '10px',
                      borderRadius: '8px',
                      border: measureMethod === 'custom' ? '2px solid var(--primary-red)' : '1px solid #ccc',
                      backgroundColor: measureMethod === 'custom' ? '#fef2f2' : '#fff',
                      color: measureMethod === 'custom' ? 'var(--primary-red)' : 'var(--royal-dark)',
                      fontWeight: 600,
                      fontSize: '13px'
                    }}
                  >
                    Enter Measurements
                  </button>
                </div>
              </div>

              {/* Measurement Form details */}
              {measureMethod === 'standard' ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontSize: '13px', color: 'var(--royal-gray)' }}>Select Standard Fitting:</span>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {['XS (34)', 'S (36)', 'M (38)', 'L (40)', 'XL (42)', 'XXL (44)'].map(s => (
                      <span key={s} style={{ border: '1px solid #ddd', padding: '6px 10px', borderRadius: '6px', fontSize: '12px', cursor: 'pointer', backgroundColor: '#fafafa' }}>{s}</span>
                    ))}
                  </div>
                </div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', animation: 'fadeIn 0.2s' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label style={{ fontSize: '12px', color: 'var(--royal-gray)' }}>Bust (Inches):</label>
                    <input type="number" required value={measurements.bust} onChange={(e) => setMeasurements({...measurements, bust: e.target.value})} style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '6px' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label style={{ fontSize: '12px', color: 'var(--royal-gray)' }}>Waist (Inches):</label>
                    <input type="number" required value={measurements.waist} onChange={(e) => setMeasurements({...measurements, waist: e.target.value})} style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '6px' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label style={{ fontSize: '12px', color: 'var(--royal-gray)' }}>Hip (Inches):</label>
                    <input type="number" required value={measurements.hip} onChange={(e) => setMeasurements({...measurements, hip: e.target.value})} style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '6px' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label style={{ fontSize: '12px', color: 'var(--royal-gray)' }}>Shoulder to Length (Inches):</label>
                    <input type="number" required value={measurements.length} onChange={(e) => setMeasurements({...measurements, length: e.target.value})} style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '6px' }} />
                  </div>
                </div>
              )}

              {/* Special instructions */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '14px', fontWeight: 600, color: 'var(--royal-dark)' }}>Styling Instructions (Neck design, sleeve type etc.):</label>
                <textarea 
                  rows={3} 
                  placeholder="e.g. Back open with hooks, Elbow length sleeves with golden border piping..."
                  value={measurements.specialInstructions}
                  onChange={(e) => setMeasurements({...measurements, specialInstructions: e.target.value})}
                  style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '8px', fontSize: '13px', resize: 'none', outline: 'none' }}
                />
              </div>

              {/* Notice */}
              <div style={{ display: 'flex', gap: '8px', backgroundColor: '#eff6ff', padding: '10px 14px', borderRadius: '8px', color: '#1d4ed8', fontSize: '12px' }}>
                <Info size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Our stitching service takes 5-7 days. Fabric collection and fitting drop-offs are available at Narsampet Mall branch.</span>
              </div>

              {/* Submit */}
              <button type="submit" className="luxury-btn" style={{ justifyContent: 'center', width: '100%', gap: '8px' }}>
                <Send size={16} /> Confirm Stitching Booking
              </button>

            </form>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
