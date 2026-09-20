import React from 'react';

// Apni save ki hui images ko import kar rahe hain
import qaidaImg from '../assets/qaida.png';
import nazraImg from '../assets/nazra.png';
import tajweedImg from '../assets/tajweed.png';
import hifzImg from '../assets/hifz.png';
import namazImg from '../assets/namaz.png';
import arabicImg from '../assets/arabic.png';

function CoursesPage() {
  const coursesList = [
    {
      title: "Noorani Qaida Course",
      desc: "The fundamental first step for beginners and children to learn Arabic alphabet recognition, proper pronunciation, and basic reading rules.",
      img: qaidaImg
    },
    {
      title: "Quran Reading (Nazra) Course",
      desc: "Learn to read the Holy Quran fluently with basic rules of recitation, designed for students who have completed Noorani Qaida.",
      img: nazraImg
    },
    {
      title: "Tajweed & Qirat Course",
      desc: "Master the art of correct Quranic pronunciation, articulation points (Makharij), and rules of Tajweed with certified expert teachers.",
      img: tajweedImg
    },
    {
      title: "Quran Memorization (Hifz) Course",
      desc: "A structured program for kids and adults to memorize the Holy Quran step-by-step with regular revision and proper guidance.",
      img: hifzImg
    },
    {
      title: "Namaz & Daily Prayers Course",
      desc: "Step-by-step guidance on performing Salah correctly, Wazu, Masnoon Duain, and essential daily Islamic practices.",
      img: namazImg
    },
    {
      title: "Arabic Language & Islamic Studies",
      desc: "Learn spoken and classical Arabic grammar along with essential Islamic teachings, manners, and daily prayers.",
      img: arabicImg
    }
  ];

  return (
    <div style={{ padding: '4rem 5%', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', fontWeight: 'bold', color: '#111' }}>
        Our Courses
      </h2>

      {/* Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
        {coursesList.map((course, index) => (
          <div key={index} style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid #eee', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            
            {/* Course Image */}
            <div style={{ height: '220px', overflow: 'hidden' }}>
              <img src={course.img} alt={course.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* Course Content */}
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: '1', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 'bold', color: '#111', lineHeight: '1.4' }}>
                  {course.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  {course.desc}
                </p>
              </div>

              {/* Bottom Action */}
              <div>
                <a href="#more" style={{ color: '#d97706', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.95rem' }}>
                  more →
                </a>
              </div>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursesPage;