import React, { useState } from 'react';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent successfully to Noor-ul-Quran Academy.');
    setFormData({ name: '', email: '', phone: '', country: '', message: '' });
  };

  const socialIconStyle = {
    width: '38px',
    height: '38px',
    background: '#f8fafc',
    border: '1px solid #e2e8f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: '#333',
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'all 0.2s ease'
  };

  return (
    <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh', paddingBottom: '5rem' }}>
      
      {/* Top Banner */}
      <div style={{ backgroundColor: '#111', color: '#fff', padding: '5rem 5% 6rem 5%', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.8rem', fontWeight: 'bold', marginBottom: '1rem', letterSpacing: '1px' }}>
          CONTACT US
        </h1>
        <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.05rem', color: '#ccc', lineHeight: '1.6' }}>
          Communicate with us through email, call, WhatsApp or our social media channels.
        </p>
      </div>

      {/* Main Content Card Container */}
      <div style={{ maxWidth: '1200px', margin: '-3rem auto 0', padding: '0 5%' }}>
        <div style={{ backgroundColor: '#fff', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', padding: '3.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
          
          {/* Left Side: Ask a Question Form */}
          <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#111', marginBottom: '0.5rem' }}>
              Ask a question
            </h2>
            <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '2rem' }}>
              Fill in the contact form & We'll be back to you.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', color: '#444', marginBottom: '0.4rem' }}>Name</label>
                <input 
                  type="text" 
                  placeholder="Your Full Name" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #ddd', fontSize: '0.95rem', outline: 'none' }} 
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', color: '#444', marginBottom: '0.4rem' }}>Email</label>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #ddd', fontSize: '0.95rem', outline: 'none' }} 
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', color: '#444', marginBottom: '0.4rem' }}>Phone Number</label>
                  <input 
                    type="text" 
                    placeholder="e.g. +92 312 6884512" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #ddd', fontSize: '0.95rem', outline: 'none' }} 
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', color: '#444', marginBottom: '0.4rem' }}>Your Country</label>
                <input 
                  type="text" 
                  placeholder="Enter Country Name" 
                  value={formData.country}
                  onChange={(e) => setFormData({...formData, country: e.target.value})}
                  style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #ddd', fontSize: '0.95rem', outline: 'none' }} 
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', color: '#444', marginBottom: '0.4rem' }}>Message</label>
                <textarea 
                  rows="4" 
                  placeholder="How can we help you?" 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #ddd', fontSize: '0.95rem', outline: 'none', resize: 'vertical' }} 
                ></textarea>
              </div>

              <button type="submit" style={{ backgroundColor: '#f59e0b', color: '#fff', border: 'none', padding: '0.9rem', borderRadius: '8px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', transition: 'background 0.3s' }}>
                SUBMIT MESSAGE
              </button>
            </form>
          </div>

          {/* Right Side: Communicate with us info */}
          <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#111', marginBottom: '2.2rem' }}>
              Communicate with us
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2.5rem' }}>
              
              {/* Email Box */}
              <a 
                href="mailto:kf.dev786@gmail.com" 
                style={{ textDecoration: 'none', color: 'inherit', background: '#fff', border: '1px solid #eaeaea', borderRadius: '12px', padding: '1.1rem 1.4rem', display: 'flex', alignItems: 'center', gap: '18px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}
              >
                <span style={{ fontSize: '1.3rem', background: '#fffbeb', color: '#d97706', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', flexShrink: '0' }}>✉️</span>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#333', letterSpacing: '0.8px', marginBottom: '2px' }}>EMAIL ADDRESS</div>
                  <div style={{ fontSize: '0.98rem', fontWeight: 'normal', color: '#444' }}>kf.dev786@gmail.com</div>
                </div>
              </a>

              {/* Call Us Box */}
              <a 
                href="tel:+923126884512" 
                style={{ textDecoration: 'none', color: 'inherit', background: '#fff', border: '1px solid #eaeaea', borderRadius: '12px', padding: '1.1rem 1.4rem', display: 'flex', alignItems: 'center', gap: '18px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}
              >
                <span style={{ fontSize: '1.3rem', background: '#eff6ff', color: '#2563eb', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', flexShrink: '0' }}>📞</span>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#333', letterSpacing: '0.8px', marginBottom: '2px' }}>CALL US</div>
                  <div style={{ fontSize: '0.98rem', fontWeight: 'normal', color: '#444' }}>+92 312 6884512</div>
                </div>
              </a>

              {/* WhatsApp Us Box */}
              <a 
                href="https://wa.me/923126884512" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ textDecoration: 'none', color: 'inherit', background: '#fff', border: '1px solid #eaeaea', borderRadius: '12px', padding: '1.1rem 1.4rem', display: 'flex', alignItems: 'center', gap: '18px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}
              >
                <span style={{ fontSize: '1.3rem', background: '#f0fdf4', color: '#16a34a', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', flexShrink: '0' }}>💬</span>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#333', letterSpacing: '0.8px', marginBottom: '2px' }}>WHATSAPP US</div>
                  <div style={{ fontSize: '0.98rem', fontWeight: 'normal', color: '#444' }}>+92 312 6884512</div>
                </div>
              </a>

            </div>

            {/* Connect With Us Social Icons (Twitter Removed) */}
            <h3 style={{ fontSize: '1rem', fontWeight: 'bold', color: '#111', marginBottom: '1rem' }}>
              Connect With Us:
            </h3>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a href="https://facebook.com/your-page-name" target="_blank" rel="noopener noreferrer" style={socialIconStyle}>f</a>
              <a href="https://linkedin.com/in/your-page-name" target="_blank" rel="noopener noreferrer" style={socialIconStyle}>in</a>
              <a href="https://youtube.com/your-channel-name" target="_blank" rel="noopener noreferrer" style={socialIconStyle}>▶</a>
              <a href="https://instagram.com/your-page-name" target="_blank" rel="noopener noreferrer" style={socialIconStyle}>📷</a>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}

export default ContactPage;