import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/logo.png';

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
      {/* Top Orange Bar */}
      <div style={{ backgroundColor: '#f59e0b', padding: '6px 5%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          
          {/* WhatsApp Icon */}
          <a 
            href="https://wa.me/923126884512" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={socialIconStyle} 
            title="WhatsApp"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
            </svg>
          </a>

          {/* Email Icon */}
          <a 
            href="mailto:kf.dev786@gmail.com" 
            style={socialIconStyle} 
            title="Email"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
            </svg>
          </a>

          {/* Facebook Icon */}
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={socialIconStyle} 
            title="Facebook"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
          </a>

        </div>
      </div>

      {/* Main White Header */}
      <div style={{ backgroundColor: '#ffffff', padding: '1rem 5%', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Logo & Title */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <img 
              src={logoImg} 
              alt="Noor-ul-Quran Logo" 
              style={{ height: '48px', width: 'auto' }} 
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