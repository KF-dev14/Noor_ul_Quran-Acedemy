import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop'; // <-- Yahan import kar liya hai
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CoursesPage from './pages/CoursesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TeachersPage from './pages/TeachersPage';
import FreeTrialPage from './pages/FreeTrialPage';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* <-- Yahan component ko laga diya hai */}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/teachers" element={<TeachersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/free-trial" element={<FreeTrialPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;