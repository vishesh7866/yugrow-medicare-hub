
import { useRef, useEffect, useState } from 'react';

interface ReCaptchaProps {
  sitekey: string;
  onChange: (token: string) => void;
}

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (sitekey: string, options: { action: string }) => Promise<string>;
      render: (container: HTMLElement, options: any) => number;
      reset: (widgetId?: number) => void;
      getResponse: (widgetId?: number) => string;
    };
    onRecaptchaLoad: () => void;
  }
}

const ReCaptcha = ({ sitekey, onChange }: ReCaptchaProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  // Listen for the recaptchaLoaded event
  useEffect(() => {
    const handleRecaptchaLoaded = () => {
      setIsScriptLoaded(true);
    };

    window.addEventListener('recaptchaLoaded', handleRecaptchaLoaded);
    
    // Check if grecaptcha is already available
    if (window.grecaptcha) {
      setIsScriptLoaded(true);
    }

    return () => {
      window.removeEventListener('recaptchaLoaded', handleRecaptchaLoaded);
    };
  }, []);

  useEffect(() => {
    if (!isScriptLoaded || !sitekey) {
      return;
    }

    // Clear any existing reCAPTCHA instances
    if (widgetIdRef.current !== null && window.grecaptcha) {
      try {
        window.grecaptcha.reset(widgetIdRef.current);
      } catch (e) {
        console.error("Error resetting reCAPTCHA:", e);
      }
      widgetIdRef.current = null;
    }

    // Initialize reCAPTCHA
    const renderRecaptcha = () => {
      if (!containerRef.current || !window.grecaptcha) {
        return;
      }

      try {
        widgetIdRef.current = window.grecaptcha.render(containerRef.current, {
          sitekey: sitekey,
          theme: 'dark', // Apply dark theme
          callback: onChange,
          'expired-callback': () => onChange(''),
          'error-callback': () => onChange('')
        });
      } catch (error) {
        console.error('reCAPTCHA initialization error:', error);
      }
    };

    renderRecaptcha();

    // Clean up when component unmounts
    return () => {
      if (widgetIdRef.current !== null && window.grecaptcha) {
        try {
          window.grecaptcha.reset(widgetIdRef.current);
        } catch (error) {
          console.error('Error resetting reCAPTCHA:', error);
        }
      }
    };
  }, [isScriptLoaded, sitekey, onChange]);

  return <div ref={containerRef} className="g-recaptcha mb-4" data-sitekey={sitekey} />;
};

export default ReCaptcha;
