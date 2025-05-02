
interface ReCaptchaInstance {
  ready: (callback: () => void) => void;
  execute: (sitekey?: string, options?: { action?: string }) => Promise<string>;
  render: (container: string | HTMLElement, options?: { sitekey?: string; theme?: string; size?: string }) => number;
  reset: (widgetId?: number) => void;
  getResponse: (widgetId?: number) => string;
}

interface Window {
  grecaptcha: ReCaptchaInstance;
  onRecaptchaLoad: () => void;
}
