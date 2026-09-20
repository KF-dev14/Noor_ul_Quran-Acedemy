import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Agar Tailwind ya custom CSS use kar rahe hain
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);