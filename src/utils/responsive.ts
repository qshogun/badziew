/**
 * Utility functions for responsive design
 */

export const breakpoints = {
  xs: 320,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

/**
 * Check if the current window width matches a media query
 */
export function matchesMediaQuery(query: string): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia(query).matches;
}

/**
 * Check if the current window width is at least the specified breakpoint
 */
export function isMinWidth(breakpoint: keyof typeof breakpoints): boolean {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= breakpoints[breakpoint];
}

/**
 * Check if the current window width is at most the specified breakpoint
 */
export function isMaxWidth(breakpoint: keyof typeof breakpoints): boolean {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < breakpoints[breakpoint];
}

/**
 * Add an event listener for window resize with debounce
 */
export function onResize(callback: () => void, delay = 250): () => void {
  if (typeof window === 'undefined') return () => {};
  
  let timeoutId: number | null = null;
  
  const handleResize = () => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    timeoutId = window.setTimeout(callback, delay);
  };
  
  window.addEventListener('resize', handleResize);
  
  // Return a cleanup function
  return () => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    window.removeEventListener('resize', handleResize);
  };
}
