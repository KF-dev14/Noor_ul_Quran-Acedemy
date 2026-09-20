import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh', paddingBottom: '5rem' }}>
      
      {/* Top Banner Section */}
      <div style={{ backgroundColor: '#d97706', color: '#fff', padding: '5rem 5%', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          About Noor-ul-Quran Academy
        </h1>
        <p style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.8' }}>
          We established Noor-ul-Quran Academy with a mission to make Quranic education accessible to Muslims worldwide. From the beginning, our goal has been to provide high-quality online learning for students of all ages. Now, our qualified teachers are educating students in different languages across the globe.
        </p>
      </div>

      {/* Main Description Content */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 5%', background: '#fff', marginTop: '-3rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
        
        <p style={{ fontSize: '1rem', color: '#444', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Thousands of students have completed their Quranic & Islamic education with us and received certificates. Currently, hundreds of students are enrolled in our courses. Noor-ul-Quran Academy is proud to serve students based in the United States, the UK, Canada, Australia, UAE, and Pakistan, alongside many other European and Asian countries.
        </p>

        <p style={{ fontSize: '1rem', color: '#444', lineHeight: '1.8', marginBottom: '2rem' }}>
          We believe that learning the Quran is essential for every Muslim to follow the commands of Allah. We provide live classes with expert tutors. Our Quran teachers offer all major Islamic and Quranic courses, including <strong>Quran Memorization, Recitation, Tajweed, Namaz & Daily Prayers, Arabic Language, and Noorani Qaida</strong>.
        </p>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/courses" style={{ display: 'inline-block', backgroundColor: '#d97706', color: '#fff', padding: '0.75rem 2rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold' }}>
            Explore Our Courses
          </Link>
        </div>

      </div>

    </div>
  );
}

export default AboutPage;