
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Settings } from 'lucide-react';
import { useCookieConsent } from '@/contexts/CookieConsentContext';

type CookieSettingsProps = {
  children?: React.ReactNode;
  triggerClassName?: string;
};

const CookieSettings = ({ children, triggerClassName }: CookieSettingsProps) => {
  const { cookieConsent, savePreferences } = useCookieConsent();
  const [open, setOpen] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: cookieConsent?.analytics || false,
    marketing: cookieConsent?.marketing || false,
  });

  const togglePreference = (key: 'necessary' | 'analytics' | 'marketing') => {
    if (key === 'necessary') return; // Necessary cookies can't be disabled
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    savePreferences(preferences);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button variant="outline" size="sm" className={triggerClassName}>
            <Settings className="h-4 w-4 mr-2" />
            Cookie Settings
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Cookie Preferences</DialogTitle>
        </DialogHeader>
        <div className="py-4 space-y-6">
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
          
          <div className="text-sm text-muted-foreground">
            <p>You can change your cookie preferences at any time by returning to this dialog from the footer of the website.</p>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            Save Preferences
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CookieSettings;
