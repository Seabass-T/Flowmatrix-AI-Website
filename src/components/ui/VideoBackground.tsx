import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface VideoBackgroundProps {
  src: string;
  fallback?: string;
  className?: string;
  loop?: boolean;
  muted?: boolean;
  autoPlay?: boolean;
}

export const VideoBackground = ({
  src,
  fallback,
  className,
  loop = true,
  muted = true,
  autoPlay = true,
}: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

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
      src={src}
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
