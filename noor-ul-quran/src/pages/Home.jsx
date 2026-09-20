import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../assets/banner.png';
import quranImg from '../assets/quran.png';
import feature1 from '../assets/feature1.png';
import feature2 from '../assets/feature2.png';
import feature3 from '../assets/feature3.png';
import feature4 from '../assets/feature4.png';
import feature5 from '../assets/feature5.png';
import feature6 from '../assets/feature6.png';

function Home() {
  // State to manage open/close for FAQs
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      q: "What is the Quran Academy?",
      a: "Our Quran Academy is an online platform dedicated to providing quality Quranic and Islamic education to students of all ages across the globe with certified tutors."
    },
    {
      q: "How to Learn Quran Online?",
      a: "You can learn easily by booking a free trial class, selecting your preferred schedule, and connecting with your teacher through our dedicated online classroom or Zoom/Skype."
    },
    {
      q: "What courses are offered?",
      a: "We offer Noorani Qaida, Quran Reading with Tajweed, Hifz-ul-Quran, Translation & Tafseer, and basic Islamic Studies for kids and adults."
    },
    {
      q: "Are Instructors Qualified?",
      a: "Yes, all our instructors are highly qualified, well-trained, and verified scholars (both male and female) with years of experience in teaching Quran online."
    },
    {
      q: "What Age Groups Are Taught?",
      a: "We teach students of all age groups, starting from kids as young as 4 years old to adults and seniors."
    },
    {
      q: "Can I schedule my lessons?",
      a: "Yes! We provide complete flexibility. You can choose your own days and timings according to your busy daily routine."
    },
    {
      q: "Is There a Trial Period?",
      a: "Yes, we offer completely free trial classes so you can evaluate our teaching style before enrolling in regular classes."
    },
    {
      q: "How do I get started?",
      a: "Simply fill out our Free Trial form on the website, and our support team will contact you shortly to confirm your schedule."
    }
  ];

  return (
    <div>
      {/* 1. Banner / Hero Section */}
      <header style={{ padding: '7rem 5%', textAlign: 'center', background: 'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(' + bannerImg + ') center/cover no-repeat', color: '#fff' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1.2rem', fontWeight: 'bold', maxWidth: '900px', margin: '0 auto 1.2rem auto', lineHeight: '1.2' }}>
          Master Tajweed with Certified Quran Teachers
        </h1>
        <p style={{ fontSize: '1.15rem', maxWidth: '750px', margin: '0 auto', lineHeight: '1.6', color: '#f1f1f1' }}>
          Learn to recite the Holy Quran with clarity, precision, and beauty. Our Tajweed program is designed to strengthen your foundation in Quranic Arabic.
        </p>
      </header>

      {/* 2. Welcome & Sample Layout Section */}
      <section style={{ padding: '5rem 5%', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: '3rem', color: '#111', fontWeight: 'bold' }}>
          Welcome to International Online Quran Academy
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          
          {/* Left Side Text */}
          <div>
            <p style={{ fontSize: '0.95rem', color: '#444', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Welcome to International Online Quran Academy. Here you can learn all Islamic and Quranic education at one place. Our online Quran academy has made learning & teaching the Quran very simple. Because we are using latest technology, including our dedicated online classroom. So you can take <span style={{ color: '#d97706' }}>online Quran classes</span> anywhere and at any time. And start learn Quran online. We are not just a religious school but now an online Quran academy. We want all Muslims to learn how to <span style={{ color: '#d97706' }}>read the Quran</span>.
            </p>
            <p style={{ fontSize: '0.95rem', color: '#444', lineHeight: '1.8' }}>
              Reading & understanding the Quran are both crucial. You need to <span style={{ color: '#d97706' }}>understand the Quran</span> to know why Allah revealed it and which path leads to guidance. Allah has said in the Quran that seeking knowledge is necessary for every man & woman. In today's busy life, making time for <span style={{ color: '#d97706' }}>Islamic education</span> is extremely challenging. And some countries have very few Islamic institutions and mosques, especially us UK australia europe, etc. But now, you can get Quran education from your home. You and your <span style={{ color: '#d97706' }}>children</span> can learn through online classes from anywhere in the world.
            </p>
          </div>

          {/* Right Side Image Box */}
          <div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1.0rem', color: '#111', textAlign: 'center', fontWeight: 'bold' }}>
              Watch How Our Online Quran Classes Work!
            </h3>
            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', background: '#000', height: '280px' }}>
              <img src={quranImg} alt="Classes Work" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>

        </div>
      </section>

      {/* ==================== 3. KEY FEATURES SECTION ==================== */}
      <section style={{ padding: '80px 5%', maxWidth: '1200px', margin: '0 auto', backgroundColor: '#f9fafb' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#111', marginBottom: '15px' }}>
            Online Quran Academy Key Features
          </h2>
          <p style={{ color: '#6b7280', fontSize: '1.1rem' }}>
            Explore our full list of Quran courses online to get started today
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          
          {/* Card 1 */}
          <div style={{ backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
            <div style={{ height: '220px', width: '100%', overflow: 'hidden' }}>
              <img src={feature1} alt="Flexible Schedule" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '25px' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#111', marginBottom: '15px' }}>Flexible Schedule</h3>
              <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.6' }}>
                As you know that time is extremely valuable, & managing it in our busy life can be not easy. That is why we provide a flexible cla...
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div style={{ backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
            <div style={{ height: '220px', width: '100%', overflow: 'hidden' }}>
              <img src={feature2} alt="Personalized Learning" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '25px' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#111', marginBottom: '15px' }}>Personalized Learning</h3>
              <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Our one-to-one classes certify that every student gets the teacher's full attention. This strategy makes it very easier to learn more...
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div style={{ backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
            <div style={{ height: '220px', width: '100%', overflow: 'hidden' }}>
              <img src={feature3} alt="Try Free Before You Start" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '25px' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#111', marginBottom: '15px' }}>Try Free Before You Start</h3>
              <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.6' }}>
                We offer free trial classes to help you get started easily. Select a teacher, book your trial, and see how we teach the Quran to ki...
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div style={{ backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
            <div style={{ height: '220px', width: '100%', overflow: 'hidden' }}>
              <img src={feature4} alt="Choose Your Teacher" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '25px' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#111', marginBottom: '15px' }}>Choose Your Teacher</h3>
              <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Most parents prefer female teachers for their kids. At Quran school, we provide both male & female tutors. So you can choose t...
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div style={{ backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
            <div style={{ height: '220px', width: '100%', overflow: 'hidden' }}>
              <img src={feature5} alt="Learn Quran Online in Your Own Language" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '25px' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#111', marginBottom: '15px' }}>Learn Quran Online in Your Own Language</h3>
              <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Muslims live all over the world, & each country having its own language. To make Quranic education accessible to everyon...
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div style={{ backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
            <div style={{ height: '220px', width: '100%', overflow: 'hidden' }}>
              <img src={feature6} alt="Anywhere, Any Device" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '25px' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#111', marginBottom: '15px' }}>Anywhere, Any Device</h3>
              <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Now learn Quran online is very easy. You just keep a high-speed internet connection & a mobile or laptop. With our flexible schedul...
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ==================== 4. 3 EASY STEPS SECTION ==================== */}
      <section style={{ backgroundColor: '#fff', padding: '80px 5%', borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#111' }}>
              3 Easy Steps To Learn Quran Online At Noor-ul-Quran Academy
            </h2>
          </div>

          {/* 3 Step Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            
            {/* Step 1 */}
            <div style={{ backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.08)', border: '1px solid #e5e7eb' }}>
              <div style={{ backgroundColor: '#111827', color: '#fff', padding: '20px', textAlign: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>
                STEP 1
              </div>
              <div style={{ padding: '30px' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#111', marginBottom: '15px' }}>Fill Out the Free Trial Form</h3>
                <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '25px' }}>
                  Start your journey at the international online Quran academy by filling out our free trial form. This form allows our support team to reach out to you and confirm the appointment you've selected for your complimentary trial session.
                </p>
                <Link 
                  to="/free-trial" 
                  style={{ backgroundColor: '#f59e0b', color: '#fff', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold', display: 'block', textAlign: 'center' }}
                >
                  BOOK FREE TRIAL
                </Link>
              </div>
            </div>

            {/* Step 2 (Highlighted) */}
            <div style={{ backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(245,158,11,0.15)', border: '2px solid #f59e0b' }}>
              <div style={{ backgroundColor: '#f59e0b', color: '#fff', padding: '20px', textAlign: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>
                STEP 2
              </div>
              <div style={{ padding: '30px' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#111', marginBottom: '15px' }}>Confirm Your Appointment</h3>
                <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Once you've submitted your free trial form, an assigned tutor from International Quran Academy will reach out to you within hour via email, phone call, or WhatsApp to confirm the appointment and provide further details.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div style={{ backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.08)', border: '1px solid #e5e7eb' }}>
              <div style={{ backgroundColor: '#111827', color: '#fff', padding: '20px', textAlign: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>
                STEP 3
              </div>
              <div style={{ padding: '30px' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#111', marginBottom: '15px' }}>Access Your Online Classroom</h3>
                <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Our supervisor will create your a personal classroom ID. And then you can log in through our mobile app, PC app, or directly through the website to take classes with your teacher. Plus you can also call or message your teacher anytime to discuss your lessons.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==================== 5. ONLINE QURAN ACADEMY (FAQS) SECTION ==================== */}
      <section style={{ padding: '80px 5%', maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#111' }}>
            Online Quran Academy (FAQs)
          </h2>
        </div>

        {/* 2-Column Grid Layout for FAQs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '20px' }}>
          {faqData.map((faq, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <div 
                onClick={() => toggleFaq(index)}
                style={{ 
                  backgroundColor: '#f59e0b', 
                  color: '#fff', 
                  padding: '18px 22px', 
                  borderRadius: '8px', 
                  cursor: 'pointer', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  fontWeight: 'bold',
                  fontSize: '1.05rem',
                  boxShadow: '0 4px 10px rgba(245, 158, 11, 0.2)'
                }}
              >
                <span>» {faq.q}</span>
                <span style={{ fontSize: '1.2rem', transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}>▼</span>
              </div>

              {/* Answer Dropdown */}
              {openFaq === index && (
                <div style={{ 
                  backgroundColor: '#fff', 
                  color: '#444', 
                  padding: '20px', 
                  border: '1px solid #e5e7eb', 
                  borderTop: 'none', 
                  borderBottomLeftRadius: '8px', 
                  borderBottomRightRadius: '8px',
                  lineHeight: '1.6',
                  fontSize: '0.95rem'
                }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </section>

    </div>
  );
}

export default Home;