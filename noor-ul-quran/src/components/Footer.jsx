import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#111827', color: '#fff', padding: '50px 5% 30px 5%', marginTop: 'auto' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>
        
        {/* Column 1: About Academy */}
        <div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#f59e0b', marginBottom: '15px' }}>
            Noor-ul-Quran Academy
          </h3>
          <p style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: '1.6' }}>
            Aapka apna trusted platform online Quran, Tajweed, Hifz, aur Arabic language seekhne ke liye. Har umar ke students ke liye qualified teachers dastiyab hain.
          </p>
        </div>

        {/* Column 2: Quick Links (Sare Pages) */}
        <div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#fff', marginBottom: '15px' }}>
            Quick Links
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>
              <Link to="/" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#f59e0b'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>
                → Home
              </Link>
            </li>
            <li>
              <Link to="/courses" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#f59e0b'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>
                → Courses
              </Link>
            </li>
            <li>
              <Link to="/teachers" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#f59e0b'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>
                → Teachers
              </Link>
            </li>
            <li>
              <Link to="/free-trial" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#f59e0b'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>
                → Free Trial Classes
              </Link>
            </li>
            <li>
              <Link to="/about" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#f59e0b'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>
                → About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#f59e0b'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>
                → Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#fff', marginBottom: '15px' }}>
            Contact Info
          </h3>
          <p style={{ color: '#9ca3af', fontSize: '0.9rem', marginBottom: '10px' }}>
            Email: info@noorulanquran.com
          </p>
          <p style={{ color: '#9ca3af', fontSize: '0.9rem', marginBottom: '10px' }}>
            WhatsApp: +92 300 1234567
          </p>
          <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>
            Available 24/7 for Online Classes
          </p>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div style={{ borderTop: '1px solid #374151', paddingTop: '20px', textAlign: 'center', color: '#9ca3af', fontSize: '0.85rem' }}>
        &copy; {new Date().getFullYear()} Noor-ul-Quran Academy. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;