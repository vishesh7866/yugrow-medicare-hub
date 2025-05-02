
import { useEffect } from 'react';

interface ReCaptchaProps {
  sitekey: string;
  onChange: (token: string) => void;
}

// This is a mock implementation that doesn't actually load or display reCAPTCHA
const ReCaptcha = ({ sitekey, onChange }: ReCaptchaProps) => {
  
  // Generate a fake token and call onChange when mounted
  useEffect(() => {
    // Call onChange with a fake token
    const mockToken = "mock-recaptcha-token-for-compatibility";
    onChange(mockToken);
    
    console.log('Mock reCAPTCHA initialized. No actual verification will happen.');
  }, [onChange]);

  // Return an empty div - no actual reCAPTCHA will be displayed
  return <div className="hidden g-recaptcha" data-sitekey={sitekey} />;
};

export default ReCaptcha;
