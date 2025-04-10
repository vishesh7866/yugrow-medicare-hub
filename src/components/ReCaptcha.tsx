
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
    // Initialize reCAPTCHA when component mounts
    if (containerRef.current && window.grecaptcha) {
      window.grecaptcha.ready(() => {
        widgetIdRef.current = window.grecaptcha.render(containerRef.current!, {
          sitekey: sitekey,
          callback: onChange,
          'expired-callback': () => onChange(''),
          'error-callback': () => onChange('')
        });
      });
    }

    // Clean up when component unmounts
    return () => {
      if (widgetIdRef.current !== null && window.grecaptcha) {
        window.grecaptcha.reset(widgetIdRef.current);
      }
    };
  }, [sitekey, onChange]);

  return <div ref={containerRef} className="g-recaptcha mb-4" />;
};

export default ReCaptcha;
