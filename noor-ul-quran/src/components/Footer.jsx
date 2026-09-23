import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const socialStyle = {
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    backgroundColor: '#222',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    fontSize: '0.85rem',
    fontWeight: 'bold',
    border: '1px solid #333'
  };

  return (
    <footer style={{ backgroundColor: '#0a0a0a', color: '#888', padding: '3rem 5% 1.5rem 5%', borderTop: '1px solid #222' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
        
        {/* Col 1: About */}
        <div>
          <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}>Noor-ul-Quran Academy</h3>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#aaa' }}>
            Providing high-quality online Quranic education with Tajweed to students worldwide.
          </p>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '1rem' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
            <li><Link to="/" style={{ color: '#aaa', textDecoration: 'none' }}>Home</Link></li>
            <li><Link to="/about" style={{ color: '#aaa', textDecoration: 'none' }}>About Us</Link></li>
            <li><Link to="/courses" style={{ color: '#aaa', textDecoration: 'none' }}>Courses</Link></li>
            <li><Link to="/contact" style={{ color: '#aaa', textDecoration: 'none' }}>Contact</Link></li>
          </ul>
        </div>

        {/* Col 3: Contact Details */}
        <div>
          <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '1rem' }}>Get in Touch</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
            <a href="mailto:kf.dev786@gmail.com" style={{ color: '#aaa', textDecoration: 'none' }}>✉️ kf.dev786@gmail.com</a>
            <a href="tel:+923126884512" style={{ color: '#aaa', textDecoration: 'none' }}>📞 +92 312 6884512</a>
            <a href="https://wa.me/923126884512" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', textDecoration: 'none', fontWeight: 'bold' }}>💬 WhatsApp Support</a>
          </div>
        </div>

        {/* Col 4: Social Icons (Twitter Removed) */}
        <div>
          <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '1rem' }}>Follow Us</h4>
          <div style={{ display: 'flex', gap: '10px' }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={socialStyle}>f</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={socialStyle}>in</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={socialStyle}>▶</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={socialStyle}>📷</a>
          </div>
        </div>

      </div>

      <div style={{ borderTop: '1px solid #222', paddingTop: '1.5rem', textAlign: 'center', fontSize: '0.85rem', color: '#666' }}>
        © {new Date().getFullYear()} Noor-ul-Quran Academy. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;