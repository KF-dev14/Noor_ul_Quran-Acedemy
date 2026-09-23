import React from 'react';
import { NavLink } from 'react-router-dom';
import logoImg from '../assets/logo.png';

function Navbar() {
  const linkStyle = ({ isActive }) => ({
    textDecoration: 'none',
    color: isActive ? '#f59e0b' : '#333',
    fontWeight: 'bold',
    position: 'relative',
    paddingBottom: '4px',
    borderBottom: isActive ? '2px solid #f59e0b' : '2px solid transparent',
    transition: 'all 0.3s ease'
  });

  const socialIconStyle = {
    color: '#fff',
    textDecoration: 'none',
    background: 'rgba(255,255,255,0.2)',
    width: '28px',
    height: '28px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    transition: 'background 0.3s ease'
  };

  return (
    <header style={{ width: '100%', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
      
      {/* Top Bar with Contact Info & Social Links */}
      <div style={{ backgroundColor: '#f59e0b', color: '#fff', padding: '0.5rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', flexWrap: 'wrap', gap: '10px' }}>
        
        {/* Direct Contact Info */}
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <a 
            href="https://wa.me/923126884512" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}
          >
            WhatsApp: +92 312 6884512
          </a>
          <span style={{ opacity: 0.6 }}>|</span>
          <a 
            href="mailto:kf.dev786@gmail.com" 
            style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}
          >
            kf.dev786@gmail.com
          </a>
        </div>

        {/* Social Media Links (Twitter Removed) */}
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          {/* Facebook */}
          <a 
            href="https://facebook.com/your-page-name" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={socialIconStyle}
            aria-label="Facebook"
          >
            f
          </a>

          {/* LinkedIn */}
          <a 
            href="https://linkedin.com/in/your-page-name" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={socialIconStyle}
            aria-label="LinkedIn"
          >
            in
          </a>

          {/* YouTube/Instagram */}
          <a 
            href="https://youtube.com/your-channel-name" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={socialIconStyle}
            aria-label="YouTube"
          >
            ▶
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 5%', backgroundColor: '#fff' }}>
        <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <img src={logoImg} alt="Noor-ul-Quran Logo" style={{ height: '45px' }} />
          <span style={{ fontWeight: 'bold', fontSize: '1.3rem', color: '#111' }}>Noor-ul-Quran</span>
        </NavLink>

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <NavLink to="/" style={linkStyle}>Home</NavLink>
          <NavLink to="/courses" style={linkStyle}>Courses</NavLink>
          <NavLink to="/teachers" style={linkStyle}>Teachers</NavLink>
          <NavLink to="/about" style={linkStyle}>About Us</NavLink>
          <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
          <NavLink to="/free-trial" style={linkStyle}>Free Trial</NavLink>
        </div>
      </nav>

    </header>
  );
}

export default Navbar;