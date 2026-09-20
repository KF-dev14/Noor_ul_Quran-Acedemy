import React, { useState } from 'react';

const FreeTrialPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    course: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Free Trial request submitted successfully! We will contact you soon.");
  };

  return (
    <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh', paddingBottom: '60px' }}>
      
      {/* Hero Header Section */}
      <div style={{ backgroundColor: '#111827', color: '#fff', padding: '60px 20px 80px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '10px' }}>
          Get Your 3-Day Free Trial
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#9ca3af', maxWidth: '600px', margin: '0 auto' }}>
          Start your journey to learn Quran online with expert tutors. No credit card required.
        </p>
      </div>

      {/* Form Container with proper top margin so it doesn't overlap */}
      <div style={{ maxWidth: '800px', margin: '30px auto 0 auto', padding: '0 20px' }}>
        <div style={{ backgroundColor: '#fff', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', padding: '40px', border: '1px solid #e5e7eb' }}>
          
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
              
              {/* Full Name */}
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 'bold', color: '#374151', marginBottom: '8px' }}>
                  Full Name *
                </label>
                <input 
                  type="text" 
                  name="fullName"
                  placeholder="Your Name" 
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '1rem', outline: 'none' }}
                />
              </div>

              {/* Email Address */}
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 'bold', color: '#374151', marginBottom: '8px' }}>
                  Email Address *
                </label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="email@example.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '1rem', outline: 'none' }}
                />
              </div>

            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '30px' }}>
              
              {/* WhatsApp Number */}
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 'bold', color: '#374151', marginBottom: '8px' }}>
                  WhatsApp Number *
                </label>
                <input 
                  type="text" 
                  name="whatsapp"
                  placeholder="+1 xxx xxxx xxx" 
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '1rem', outline: 'none' }}
                />
              </div>

              {/* Select Course */}
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 'bold', color: '#374151', marginBottom: '8px' }}>
                  Select Course *
                </label>
                <select 
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '1rem', outline: 'none', backgroundColor: '#fff' }}
                >
                  <option value="">-- Choose Course --</option>
                  <option value="Nazra Quran">Nazra Quran</option>
                  <option value="Tajweed Quran">Tajweed Quran</option>
                  <option value="Hifz-e-Quran">Hifz-e-Quran</option>
                  <option value="Arabic Language">Arabic Language</option>
                  <option value="Islamic Studies">Islamic Studies</option>
                </select>
              </div>

            </div>

            {/* Submit Button */}
            <div style={{ textAlign: 'center' }}>
              <button 
                type="submit"
                style={{ backgroundColor: '#f59e0b', color: '#fff', border: 'none', padding: '14px 40px', fontSize: '1rem', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer', transition: 'background 0.3s' }}
              >
                Submit Free Trial Request
              </button>
            </div>

          </form>

        </div>
      </div>

    </div>
  );
};

export default FreeTrialPage;