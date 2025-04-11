
import { initializeApp } from 'firebase/app';
import { getAnalytics, setAnalyticsCollectionEnabled } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCndyrRpZX1ftzjlJcZGatGs-ava2UuVG0",
  authDomain: "yugrow-dd1d5.firebaseapp.com",
  projectId: "yugrow-dd1d5",
  storageBucket: "yugrow-dd1d5.firebasestorage.app",
  messagingSenderId: "259652623521",
  appId: "1:259652623521:web:a190cc711ffd949abce4e0",
  measurementId: "G-MV5Q9MWTLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Enable analytics by default (user can disable later if needed)
setAnalyticsCollectionEnabled(analytics, true);

export { app, analytics, db };
