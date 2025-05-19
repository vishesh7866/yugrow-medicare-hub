
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import App from './App.tsx';
import './index.css';
import './lib/firebase'; // Import Firebase initialization

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>
);
