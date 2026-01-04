import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface VideoBackgroundProps {
  src: string;
  fallback?: string;
  className?: string;
  loop?: boolean;
  muted?: boolean;
  autoPlay?: boolean;
  loading?: 'eager' | 'lazy';
}

export const VideoBackground = ({
  src,
  fallback,
  className,
  loop = true,
  muted = true,
  autoPlay = true,
  loading = 'lazy',
}: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(loading === 'eager');

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (loading === 'eager') return; // Skip observer for eager loading

    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before entering viewport
      }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, [loading]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoaded = () => setIsLoaded(true);
    const handleError = () => setHasError(true);

    video.addEventListener('loadeddata', handleLoaded);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadeddata', handleLoaded);
      video.removeEventListener('error', handleError);
    };
  }, []);

  if (hasError && fallback) {
    return (
      <img
        src={fallback}
        alt=""
        className={cn('object-cover', className)}
      />
    );
  }

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      className={cn(
        'object-cover transition-opacity duration-500',
        isLoaded ? 'opacity-100' : 'opacity-0',
        className
      )}
      loop={loop}
      muted={muted}
      autoPlay={autoPlay}
      playsInline
    />
  );
};
