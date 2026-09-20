import React from 'react';

export default function Steps() {
  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">3 Easy Steps to Learn Quran Online</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="w-12 h-12 bg-amber-600 text-white font-bold rounded-full flex items-center justify-center mx-auto mb-4 text-xl">1</div>
            <h3 className="font-bold text-lg mb-2">Fill Out Trial Form</h3>
            <p className="text-gray-600 text-sm">Submit your details to book a free trial session.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="w-12 h-12 bg-amber-600 text-white font-bold rounded-full flex items-center justify-center mx-auto mb-4 text-xl">2</div>
            <h3 className="font-bold text-lg mb-2">Confirm Appointment</h3>
            <p className="text-gray-600 text-sm">Our team will contact you via WhatsApp or email.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="w-12 h-12 bg-amber-600 text-white font-bold rounded-full flex items-center justify-center mx-auto mb-4 text-xl">3</div>
            <h3 className="font-bold text-lg mb-2">Start Learning</h3>
            <p className="text-gray-600 text-sm">Join your online classroom and start your journey.</p>
          </div>
        </div>
      </div>
    </section>
  );
}