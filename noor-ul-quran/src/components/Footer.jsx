import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  const linkStyle = {
    color: '#9ca3af',
    textDecoration: 'none',
    transition: 'color 0.2s'
  };

  const socialIconStyle = {
    color: '#9ca3af',
    fontSize: '1.2rem',
    transition: 'color 0.2s'
  };

  return (
    <footer style={{ backgroundColor: '#111827', color: '#fff', padding: '50px 5% 30px 5%', marginTop: 'auto' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>
        
        {/* Column 1: About Academy & Social Media */}
        <div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#f59e0b', marginBottom: '15px' }}>
            Noor-ul-Quran Academy
          </h3>
          <p style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>
            Aapka apna trusted platform online Quran, Tajweed, Hifz, aur Arabic language seekhne ke liye. Har umar ke students ke liye qualified teachers dastiyab hain.
          </p>

          {/* Social Media Links (Twitter Removed) */}
          <div style={{ display: 'flex', gap: '15px' }}>
            <a 
              href="https://facebook.com/your-page-name" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={socialIconStyle}
              onMouseOver={(e) => e.currentTarget.style.color = '#f59e0b'} 
              onMouseOut={(e) => e.currentTarget.style.color = '#9ca3af'}
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a 
              href="https://instagram.com/your-page-name" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={socialIconStyle}
              onMouseOver={(e) => e.currentTarget.style.color = '#f59e0b'} 
              onMouseOut={(e) => e.currentTarget.style.color = '#9ca3af'}
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a 
              href="https://linkedin.com/in/your-page-name" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={socialIconStyle}
              onMouseOver={(e) => e.currentTarget.style.color = '#f59e0b'} 
              onMouseOut={(e) => e.currentTarget.style.color = '#9ca3af'}
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#fff', marginBottom: '15px' }}>
            Quick Links
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>
              <Link to="/" style={linkStyle} onMouseOver={(e) => e.target.style.color = '#f59e0b'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>
                → Home
              </Link>
            </li>
            <li>
              <Link to="/courses" style={linkStyle} onMouseOver={(e) => e.target.style.color = '#f59e0b'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>
                → Courses
              </Link>
            </li>
            <li>
              <Link to="/teachers" style={linkStyle} onMouseOver={(e) => e.target.style.color = '#f59e0b'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>
                → Teachers
              </Link>
            </li>
            <li>
              <Link to="/free-trial" style={linkStyle} onMouseOver={(e) => e.target.style.color = '#f59e0b'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>
                → Free Trial Classes
              </Link>
            </li>
            <li>
              <Link to="/about" style={linkStyle} onMouseOver={(e) => e.target.style.color = '#f59e0b'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>
                → About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" style={linkStyle} onMouseOver={(e) => e.target.style.color = '#f59e0b'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>
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
          
          {/* Real Clickable Email */}
          <p style={{ color: '#9ca3af', fontSize: '0.9rem', marginBottom: '10px' }}>
            Email:{' '}
            <a 
              href="mailto:kf.dev786@gmail.com" 
              style={{ color: '#f59e0b', textDecoration: 'none' }}
            >
              kf.dev786@gmail.com
            </a>
          </p>

          {/* Real Clickable WhatsApp Link */}
          <p style={{ color: '#9ca3af', fontSize: '0.9rem', marginBottom: '10px' }}>
            WhatsApp:{' '}
            <a 
              href="https://wa.me/923126884512" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: '#f59e0b', textDecoration: 'none' }}
            >
              +92 312 6884512
            </a>
          </p>

          <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>
            Available 24/7 for Online Classes
          </p>
        </div>

      </div>

      <div style={{ borderTop: '1px solid #374151', paddingTop: '20px', textAlign: 'center', color: '#9ca3af', fontSize: '0.85rem' }}>
        &copy; {new Date().getFullYear()} Noor-ul-Quran Academy. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;