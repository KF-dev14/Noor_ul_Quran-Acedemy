import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaFacebookF, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

function Navbar() {
  const location = useLocation();

  const socialIconStyle = {
    color: '#f59e0b',
    backgroundColor: '#ffffff',
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.85rem',
    textDecoration: 'none',
    transition: 'all 0.2s ease-in-out'
  };

  const navLinkStyle = (path) => ({
    color: location.pathname === path ? '#f59e0b' : '#1f2937',
    fontWeight: 'bold',
    textDecoration: 'none',
    fontSize: '1rem',
    borderBottom: location.pathname === path ? '2px solid #f59e0b' : 'none',
    paddingBottom: '4px',
    transition: 'color 0.2s ease-in-out'
  });

  return (
    <header style={{ width: '100%', fontFamily: 'sans-serif' }}>
      {/* Top Orange Bar (Only WhatsApp, Email, & Facebook) */}
      <div style={{ backgroundColor: '#f59e0b', padding: '6px 5%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <a 
            href="https://wa.me/923126884512" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={socialIconStyle} 
            title="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a 
            href="mailto:kf.dev786@gmail.com" 
            style={socialIconStyle} 
            title="Email"
          >
            <FaEnvelope />
          </a>
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={socialIconStyle} 
            title="Facebook"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>

      {/* Main White Header */}
      <div style={{ backgroundColor: '#ffffff', padding: '1rem 5%', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Logo & Title */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <img 
              src="/logo.png" 
              alt="Noor-ul-Quran Logo" 
              style={{ height: '42px', width: 'auto' }} 
              onError={(e) => { e.target.style.display = 'none'; }} 
            />
            <span style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#111827' }}>
              Noor-ul-Quran
            </span>
          </Link>

          {/* Navigation Links */}
          <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <Link to="/" style={navLinkStyle('/')}>Home</Link>
            <Link to="/courses" style={navLinkStyle('/courses')}>Courses</Link>
            <Link to="/about" style={navLinkStyle('/about')}>About Us</Link>
            <Link to="/contact" style={navLinkStyle('/contact')}>Contact</Link>
          </nav>

        </div>
      </div>
    </header>
  );
}

export default Navbar;