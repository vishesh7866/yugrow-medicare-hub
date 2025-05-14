
import { useState, useEffect, useRef, RefObject } from 'react';
import { debounce } from '@/lib/performance';

type UseAnimationOnScrollOptions = {
  threshold?: number;  // Intersection threshold (0-1)
  rootMargin?: string; // Root margin for intersection observer
  delay?: number;      // Delay before animation in ms
  once?: boolean;      // Only trigger once
};

/**
 * Hook for efficiently handling scroll-based animations
 * Uses IntersectionObserver for better performance than scroll listeners
 */
export function useAnimationOnScroll<T extends HTMLElement>(
  options: UseAnimationOnScrollOptions = {}
): [RefObject<T>, boolean] {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    delay = 0,
    once = true,
  } = options;
  
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<T>(null);
  
  useEffect(() => {
    // Mark document as JS loaded for CSS animations
    document.documentElement.classList.add('js-loaded');
    
    const currentElement = elementRef.current;
    if (!currentElement) return;
    
    // Skip animation for users who prefer reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }
    
    let timeoutId: number;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Clear any existing timeout
        if (timeoutId) window.clearTimeout(timeoutId);
        
        if (entry.isIntersecting) {
          timeoutId = window.setTimeout(() => {
            setIsVisible(true);
            if (once && currentElement) {
              observer.unobserve(currentElement);
            }
          }, delay);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );
    
    observer.observe(currentElement);
    
    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
      if (currentElement) observer.unobserve(currentElement);
    };
  }, [threshold, rootMargin, delay, once]);
  
  return [elementRef, isVisible];
}

/**
 * Hook to optimize mouse move tracking for performance
 */
export function useOptimizedMouseTracking(): void {
  useEffect(() => {
    // Debounced mouse move handler for performance
    const handleMouseMove = debounce((e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      document.documentElement.style.setProperty('--mouse-x', x.toString());
      document.documentElement.style.setProperty('--mouse-y', y.toString());
    }, 10);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
}

export default useAnimationOnScroll;
