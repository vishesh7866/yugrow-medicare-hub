
/**
 * Performance utilities for optimizing application performance
 */

/**
 * Creates srcset attribute for responsive images
 * @param basePath - Base path without extension
 * @param extension - Image extension (jpg, png, webp)
 * @param sizes - Array of width sizes to include
 * @returns Formatted srcset string
 */
export function generateSrcSet(basePath: string, extension: string = 'webp', sizes: number[] = [640, 768, 1024, 1280]): string {
  return sizes.map(size => `${basePath}-${size}.${extension} ${size}w`).join(', ');
}

/**
 * Lazy loads images that are off-screen
 * Polyfills IntersectionObserver for browsers that don't support it
 */
export function setupLazyLoading(): void {
  if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    return;
  }
  
  // Polyfill lazy loading for older browsers
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target as HTMLImageElement;
          if (lazyImage.dataset.src) {
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.removeAttribute('data-src');
          }
          imageObserver.unobserve(lazyImage);
        }
      });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
  }
}

/**
 * Defers non-critical operations until after main content has loaded
 * @param callback - Function to execute after page load
 */
export function deferOperation(callback: () => void): void {
  if (document.readyState === 'complete') {
    setTimeout(callback, 1);
  } else {
    window.addEventListener('load', () => setTimeout(callback, 1));
  }
}

/**
 * Debounces a function to limit how often it's called
 * @param func - Function to debounce
 * @param wait - Time to wait in ms
 * @returns Debounced function
 */
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return function(...args: Parameters<T>): void {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}
