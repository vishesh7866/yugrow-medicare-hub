
import { useRef, useEffect } from 'react';

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

  useEffect(() => {
    // Clear any existing reCAPTCHA instances
    if (widgetIdRef.current !== null && window.grecaptcha) {
      window.grecaptcha.reset(widgetIdRef.current);
      widgetIdRef.current = null;
    }

    // Initialize reCAPTCHA when component mounts
    const initializeRecaptcha = () => {
      if (containerRef.current && window.grecaptcha) {
        try {
          console.log("Initializing reCAPTCHA with site key:", sitekey);
          widgetIdRef.current = window.grecaptcha.render(containerRef.current, {
            sitekey: sitekey,
            callback: onChange,
            'expired-callback': () => onChange(''),
            'error-callback': () => onChange('')
          });
          console.log("reCAPTCHA initialized successfully with widget ID:", widgetIdRef.current);
        } catch (error) {
          console.error('reCAPTCHA initialization error:', error);
        }
      } else {
        console.warn("Container ref or grecaptcha not available:", { 
          containerRef: containerRef.current ? "available" : "not available", 
          grecaptcha: window.grecaptcha ? "available" : "not available" 
        });
      }
    };

    // Check if grecaptcha is already loaded
    if (window.grecaptcha && window.grecaptcha.ready) {
      console.log("grecaptcha is already loaded, initializing...");
      window.grecaptcha.ready(initializeRecaptcha);
    } else {
      // If not loaded yet, set up a callback for when it loads
      console.log("grecaptcha not loaded yet, setting up onRecaptchaLoad callback");
      window.onRecaptchaLoad = initializeRecaptcha;
    }

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
  }, [sitekey, onChange]);

  return <div ref={containerRef} className="g-recaptcha mb-4" />;
};

export default ReCaptcha;
