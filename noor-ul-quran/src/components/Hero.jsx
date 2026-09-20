import React from 'react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-amber-700 to-amber-900 text-white py-20">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Online Quran Academy | Learn Quran Online with Expert Tutors
        </h1>
        <p className="text-lg md:text-xl mb-8 text-amber-100">
          Join our Online Quran Academy to learn Quran online with expert tutors. Offering live classes, tajweed, memorization, and Islamic studies.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/contact" className="bg-white text-amber-900 font-bold px-6 py-3 rounded-lg shadow hover:bg-amber-100 transition">
            Book Free Trial
          </a>
          <a href="/courses" className="border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-amber-900 transition">
            Browse Courses
          </a>
        </div>
      </div>
    </section>
  );
}