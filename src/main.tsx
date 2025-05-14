
import { createRoot } from 'react-dom/client';
import { StrictMode, lazy, Suspense } from 'react';
import App from './App.tsx';
import './index.css';

// Defer Firebase initialization
const loadFirebase = () => {
  import('./lib/firebase').catch(err => 
    console.error('Error loading Firebase:', err)
  );
};

// Create the root and render App
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<div className="min-h-screen bg-white dark:bg-gray-900"></div>}>
      <App />
    </Suspense>
  </StrictMode>
);

// Defer Firebase initialization until after page load
if (document.readyState === 'complete') {
  loadFirebase();
} else {
  window.addEventListener('load', loadFirebase);
}
