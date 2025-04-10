
import React, { createContext, useState, useContext, useEffect } from 'react';
import { setAnalyticsCollectionEnabled } from 'firebase/analytics';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { analytics, db } from '@/lib/firebase';
import { useToast } from "@/hooks/use-toast";

type ConsentOptions = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

type CookieConsentContextType = {
  cookieConsent: ConsentOptions | null;
  showConsentBanner: boolean;
  setShowConsentBanner: (show: boolean) => void;
  acceptAllCookies: () => void;
  declineAllCookies: () => void;
  savePreferences: (preferences: ConsentOptions) => void;
  openPreferences: () => void;
};

const defaultConsent: ConsentOptions = {
  necessary: true, // Always true as these are essential
  analytics: false,
  marketing: false,
};

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export const CookieConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cookieConsent, setCookieConsent] = useState<ConsentOptions | null>(null);
  const [showConsentBanner, setShowConsentBanner] = useState(false);
  const { toast } = useToast();

  // Load consent from localStorage on initial load
  useEffect(() => {
    const loadConsent = async () => {
      const savedConsent = localStorage.getItem('cookie-consent');
      
      if (savedConsent) {
        const parsedConsent = JSON.parse(savedConsent) as ConsentOptions;
        setCookieConsent(parsedConsent);
        
        // Enable/disable analytics based on saved preferences
        setAnalyticsCollectionEnabled(analytics, parsedConsent.analytics);
        return;
      }
      
      // If no saved consent, show the banner
      setShowConsentBanner(true);
    };
    
    loadConsent();
  }, []);

  // Save consent to Firestore
  const saveConsentToFirestore = async (userId: string, preferences: ConsentOptions) => {
    try {
      // Create a unique ID for anonymous users based on a hash of their info
      const anonymousId = userId || `anon-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
      
      await setDoc(doc(db, "cookieConsent", anonymousId), {
        ...preferences,
        timestamp: new Date(),
        userAgent: navigator.userAgent,
        language: navigator.language,
        screenSize: {
          width: window.screen.width,
          height: window.screen.height
        },
        referrer: document.referrer || "direct"
      });
      
      console.log("Consent saved to Firestore");
    } catch (error) {
      console.error("Error saving consent to Firestore:", error);
    }
  };

  // Save consent preferences locally and to Firestore
  const savePreferences = (preferences: ConsentOptions) => {
    // Always enable necessary cookies
    const fullPreferences = { ...preferences, necessary: true };
    
    // Save to localStorage
    localStorage.setItem('cookie-consent', JSON.stringify(fullPreferences));
    setCookieConsent(fullPreferences);
    setShowConsentBanner(false);
    
    // Update analytics collection
    setAnalyticsCollectionEnabled(analytics, fullPreferences.analytics);
    
    // Save to Firestore
    const userId = localStorage.getItem('user-id') || '';
    saveConsentToFirestore(userId, fullPreferences);
    
    toast({
      title: "Preferences Saved",
      description: "Your cookie preferences have been updated.",
      duration: 3000,
    });
  };

  const acceptAllCookies = () => {
    const allConsent: ConsentOptions = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    savePreferences(allConsent);
  };

  const declineAllCookies = () => {
    savePreferences({
      necessary: true,
      analytics: false,
      marketing: false
    });
  };

  const openPreferences = () => {
    setShowConsentBanner(true);
  };

  return (
    <CookieConsentContext.Provider
      value={{
        cookieConsent,
        showConsentBanner,
        setShowConsentBanner,
        acceptAllCookies,
        declineAllCookies,
        savePreferences,
        openPreferences,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
};
