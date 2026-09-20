import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Noor-ul-Quran</h3>
          <p className="text-sm text-gray-400">Dedicated to spreading the light of Quranic education globally with certified professional teachers.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-amber-500">Home</a></li>
            <li><a href="/courses" className="hover:text-amber-500">Courses</a></li>
            <li><a href="/about" className="hover:text-amber-500">About Us</a></li>
            <li><a href="/contact" className="hover:text-amber-500">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
          <p className="text-sm text-gray-400 mb-2">Email: info@nooralquran.com</p>
          <p className="text-sm text-gray-400">Phone: +92 300 0000000</p>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-6 text-center text-xs text-gray-500">
        © 2026 Noor-ul-Quran. All Rights Reserved.
      </div>
    </footer>
  );
}