
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Info, Settings, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { useCookieConsent } from '@/contexts/CookieConsentContext';

const CookieConsent = () => {
  const {
    cookieConsent,
    showConsentBanner,
    setShowConsentBanner,
    acceptAllCookies,
    declineAllCookies,
    savePreferences,
  } = useCookieConsent();

  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: cookieConsent?.analytics || false,
    marketing: cookieConsent?.marketing || false,
  });

  const bannerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    exit: { y: 100, opacity: 0, transition: { duration: 0.3 } }
  };

  const detailsVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.3 } }
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
    setShowDetails(false);
  };

  const togglePreference = (key: 'necessary' | 'analytics' | 'marketing') => {
    if (key === 'necessary') return; // Necessary cookies can't be disabled
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <AnimatePresence>
      {showConsentBanner && (
        <motion.div 
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={bannerVariants}
        >
          <div className="mx-auto max-w-4xl bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-800 backdrop-blur-sm overflow-hidden">
            <div className="p-4 md:p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Info className="h-6 w-6 text-primary shrink-0" />
                  <h3 className="text-xl font-semibold">Cookie Consent</h3>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="rounded-full h-8 w-8 p-0" 
                  onClick={() => setShowConsentBanner(false)}
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </Button>
              </div>
              
              <p className="text-muted-foreground">
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
              </p>
              
              <AnimatePresence mode="wait">
                {showDetails ? (
                  <motion.div 
                    className="space-y-4 border-t pt-4 mt-4"
                    key="details"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={detailsVariants}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Necessary Cookies</p>
                          <p className="text-sm text-muted-foreground">Essential for website functionality</p>
                        </div>
                        <Switch 
                          checked={true} 
                          disabled
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Analytics Cookies</p>
                          <p className="text-sm text-muted-foreground">Help us improve our website</p>
                        </div>
                        <Switch 
                          checked={preferences.analytics} 
                          onCheckedChange={() => togglePreference('analytics')}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Marketing Cookies</p>
                          <p className="text-sm text-muted-foreground">Used for targeted advertising</p>
                        </div>
                        <Switch 
                          checked={preferences.marketing} 
                          onCheckedChange={() => togglePreference('marketing')}
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-end space-x-3 pt-2">
                      <Button 
                        variant="outline" 
                        onClick={() => setShowDetails(false)}
                      >
                        Cancel
                      </Button>
                      <Button 
                        onClick={handleSavePreferences}
                      >
                        Save Preferences
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 pt-2"
                    key="actions"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={detailsVariants}
                  >
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={declineAllCookies}
                    >
                      Decline All
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => setShowDetails(true)}
                    >
                      <Settings className="mr-2 h-4 w-4" />
                      Customize
                    </Button>
                    <Button 
                      className="flex-1"
                      onClick={acceptAllCookies}
                    >
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Accept All
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
