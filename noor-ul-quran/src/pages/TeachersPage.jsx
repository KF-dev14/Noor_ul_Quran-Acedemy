import React from 'react';

const TeachersPage = () => {
  const teachers = [
    {
      name: "Zainab Tariq",
      expertise: "Tajweed",
      languages: "English, Urdu, Pashto",
      description: "Enthusiastic about making Nazra simple, using visual aids and interactive methods for international students."
    },
    {
      name: "Sadia Mehmood",
      expertise: "Arabic Language",
      languages: "English, Urdu, Pashto",
      description: "Combines modern teaching tools with classical methodologies to deliver comprehensive Arabic and Quran courses."
    },
    {
      name: "Ayesha Siddiqa",
      expertise: "Arabic Language",
      languages: "English, Urdu, Pashto",
      description: "A Hafiz-e-Quran who excels in helping students revise and retain their memorized chapters with customized plans."
    },
    {
      name: "Qari Abdullah Khan",
      expertise: "Qirat",
      languages: "English, Urdu, Pashto",
      description: "Dedicated to nurturing a deep love for the Quran in children through storytelling and practical Islamic lessons."
    },
    {
      name: "Hassan Ali",
      expertise: "Nazra",
      languages: "English, Urdu, Pashto",
      description: "An experienced educator with a deep understanding of Hadith, providing holistic Islamic guidance to learners."
    },
    {
      name: "Hira Ali",
      expertise: "Nazra",
      languages: "English, Urdu, Pashto",
      description: "Known for her calm demeanor and structured lesson plans that guarantee steady progress for absolute beginners."
    }
  ];

  return (
    <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ backgroundColor: '#fef3c7', color: '#d97706', padding: '6px 16px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Premium Tutors
          </span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#111827', margin: '15px 0 10px 0' }}>
            Meet Our Expert Quran Teachers
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#4b5563', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
            Learn from our highly qualified, native-like Arabic speaking, and verified Quran tutors from Pakistan. We have both male and female teachers available 24/7 for you and your kids.
          </p>
        </div>

        {/* Teachers Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {teachers.map((teacher, index) => (
            <div 
              key={index} 
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                overflow: 'hidden',
                border: '1px solid #e5e7eb',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Empty Image Placeholder Box */}
              <div style={{ width: '100%', height: '260px', backgroundColor: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af', fontSize: '0.9rem', fontWeight: '500' }}>
                [Teacher Photo Placeholder]
              </div>

              {/* Card Body */}
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                <div>
                  {/* Name and Badge */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', margin: 0 }}>
                      {teacher.name}
                    </h3>
                    <span style={{ color: '#f59e0b', fontSize: '1.1rem' }} title="Verified Teacher">🟠</span>
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: '0.95rem', color: '#4b5563', lineHeight: '1.5', marginBottom: '20px' }}>
                    {teacher.description}
                  </p>
                </div>

                <div>
                  {/* Expertise Tag */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', fontSize: '0.85rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#6b7280', letterSpacing: '0.5px' }}>EXPERTISE:</span>
                    <span style={{ backgroundColor: '#fffbeb', color: '#b45309', padding: '4px 10px', borderRadius: '6px', border: '1px solid #fde68a', fontWeight: '500' }}>
                      {teacher.expertise}
                    </span>
                  </div>

                  {/* Languages */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '12px', borderTop: '1px solid #f3f4f6', fontSize: '0.85rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#6b7280', letterSpacing: '0.5px' }}>LANGUAGES:</span>
                    <span style={{ color: '#374151', fontWeight: '500' }}>
                      {teacher.languages}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TeachersPage;