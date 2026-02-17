import { useState, useEffect } from 'react';

export type PerformanceMode = 'full' | 'lite' | 'static';

interface PerformanceModeResult {
  mode: PerformanceMode;
  isMobile: boolean;
}

const MOBILE_BREAKPOINT = 768;

function detectMode(): PerformanceModeResult {
  if (typeof window === 'undefined') {
    return { mode: 'full', isMobile: false };
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    return { mode: 'static', isMobile: window.innerWidth < MOBILE_BREAKPOINT };
  }

  const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
  if (!isMobile) {
    return { mode: 'full', isMobile: false };
  }

  const cores = navigator.hardwareConcurrency || 4;
  const memory = (navigator as any).deviceMemory || 4;
  const isHighEnd = cores >= 8 && memory >= 4;

  return {
    mode: isHighEnd ? 'lite' : 'static',
    isMobile: true,
  };
}

export function usePerformanceMode(): PerformanceModeResult {
  const [result, setResult] = useState<PerformanceModeResult>(detectMode);

  useEffect(() => {
    const handleResize = () => {
      setResult(detectMode());
    };

    const motionMql = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = () => {
      setResult(detectMode());
    };

    window.addEventListener('resize', handleResize);
    motionMql.addEventListener('change', handleMotionChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      motionMql.removeEventListener('change', handleMotionChange);
    };
  }, []);

  return result;
}
