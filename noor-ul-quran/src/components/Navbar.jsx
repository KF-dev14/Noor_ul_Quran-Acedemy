import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#111', color: '#fff', padding: '0.8rem 5%', borderBottom: '1px solid #222' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        
        {/* Logo / Title */}
        <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.4rem', fontWeight: 'bold', letterSpacing: '0.5px' }}>
          NOOR-UL-QURAN ACADEMY
        </Link>

        {/* Top Contact Info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.9rem', flexWrap: 'wrap' }}>
          <a href="mailto:kf.dev786@gmail.com" style={{ color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>✉️</span> kf.dev786@gmail.com
          </a>
          <a href="https://wa.me/923126884512" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', textDecoration: 'none', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>💬</span> +92 312 6884512
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;