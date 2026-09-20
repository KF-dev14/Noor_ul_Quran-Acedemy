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

  return (
    <header style={{ width: '100%', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
      
      {/* Top Bar */}
      <div style={{ backgroundColor: '#f59e0b', color: '#fff', padding: '0.5rem 5%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', fontSize: '0.85rem' }}>
        <div style={{ display: 'flex', gap: '12px' }}>
          <span style={{ cursor: 'pointer', background: 'rgba(255,255,255,0.2)', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>f</span>
          <span style={{ cursor: 'pointer', background: 'rgba(255,255,255,0.2)', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>in</span>
          <span style={{ cursor: 'pointer', background: 'rgba(255,255,255,0.2)', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>𝕏</span>
          <span style={{ cursor: 'pointer', background: 'rgba(255,255,25,0.2)', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>▶</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 5%', backgroundColor: '#fff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src={logoImg} alt="Logo" style={{ height: '45px' }} />
          <span style={{ fontWeight: 'bold', fontSize: '1.3rem', color: '#111' }}>Noor-ul-Quran</span>
        </div>

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