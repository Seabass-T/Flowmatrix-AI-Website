import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

// Film grain overlay for premium texture
export const GrainOverlay = () => (
  <div
    className="pointer-events-none fixed inset-0 z-[100] opacity-[0.03]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'repeat',
      backgroundSize: '128px 128px',
    }}
  />
);

// Ambient glow orb
export const GlowOrb = ({
  className,
  color = 'accent',
  size = 'lg',
}: {
  className?: string;
  color?: 'accent' | 'white' | 'blue';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}) => {
  const sizeMap = { sm: 'w-48 h-48', md: 'w-72 h-72', lg: 'w-96 h-96', xl: 'w-[600px] h-[600px]' };
  const colorMap = {
    accent: 'bg-accent/20',
    white: 'bg-white/10',
    blue: 'bg-blue-500/15',
  };

  return (
    <div
      className={cn(
        'absolute rounded-full blur-[120px] pointer-events-none',
        sizeMap[size],
        colorMap[color],
        className
      )}
    />
  );
};

// Dot grid pattern
export const DotGrid = ({ className }: { className?: string }) => (
  <div
    className={cn('absolute inset-0 pointer-events-none opacity-[0.04]', className)}
    style={{
      backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
      backgroundSize: '24px 24px',
    }}
  />
);

// Animated line separator
export const LineSeparator = ({
  className,
  animated = true,
}: {
  className?: string;
  animated?: boolean;
}) => (
  <div className={cn('relative h-px w-full overflow-hidden', className)}>
    <div className="absolute inset-0 bg-white/10" />
    {animated && (
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-accent/60 to-transparent animate-shimmer" />
    )}
  </div>
);

// Reveal wrapper with stagger support
export const Reveal = ({
  children,
  isVisible,
  delay = 0,
  direction = 'up',
  className,
}: {
  children: React.ReactNode;
  isVisible: boolean;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'scale';
  className?: string;
}) => {
  const transforms = {
    up: 'translate3d(0, 40px, 0)',
    left: 'translate3d(-40px, 0, 0)',
    right: 'translate3d(40px, 0, 0)',
    scale: 'scale(0.95)',
  };

  return (
    <div
      className={cn('transition-all duration-700 ease-out', className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate3d(0, 0, 0) scale(1)' : transforms[direction],
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// Aurora gradient background - slowly drifting color fields
export const Aurora = ({ className }: { className?: string }) => (
  <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
    {/* Primary gold wash - large, slow drift */}
    <div
      className="absolute w-[800px] h-[800px] rounded-full blur-[160px] animate-aurora-1"
      style={{
        background: 'radial-gradient(circle, hsla(43, 59%, 55%, 0.07) 0%, transparent 70%)',
        top: '-20%',
        right: '-10%',
      }}
    />
    {/* Secondary cool blue-white wash */}
    <div
      className="absolute w-[600px] h-[600px] rounded-full blur-[140px] animate-aurora-2"
      style={{
        background: 'radial-gradient(circle, hsla(220, 40%, 70%, 0.04) 0%, transparent 70%)',
        bottom: '-10%',
        left: '-5%',
      }}
    />
    {/* Tertiary warm accent - smaller, offset */}
    <div
      className="absolute w-[500px] h-[500px] rounded-full blur-[120px] animate-aurora-3"
      style={{
        background: 'radial-gradient(circle, hsla(43, 59%, 55%, 0.04) 0%, transparent 60%)',
        top: '40%',
        left: '30%',
      }}
    />
  </div>
);

// Topology lines - flowing SVG paths rendered on canvas
export const TopologyLines = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;
    let mouseX = 0.5;
    let mouseY = 0.5;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) / rect.width;
      mouseY = (e.clientY - rect.top) / rect.height;
    };

    const drawLine = (
      yBase: number,
      amplitude: number,
      frequency: number,
      speed: number,
      opacity: number,
      isGold: boolean,
      width: number
    ) => {
      const w = canvas.getBoundingClientRect().width;
      const h = canvas.getBoundingClientRect().height;
      const y = yBase * h;

      ctx.beginPath();
      ctx.strokeStyle = isGold
        ? `rgba(212, 168, 75, ${opacity})`
        : `rgba(255, 255, 255, ${opacity})`;
      ctx.lineWidth = width;

      for (let x = 0; x <= w; x += 2) {
        const normalX = x / w;
        // Base wave
        const wave = Math.sin(normalX * frequency + time * speed) * amplitude;
        // Mouse influence - subtle pull toward cursor
        const mouseDist = Math.abs(normalX - mouseX);
        const mouseInfluence = Math.max(0, 1 - mouseDist * 3) * 15 * (mouseY - 0.5);
        // Secondary harmonic
        const harmonic = Math.sin(normalX * frequency * 2.3 + time * speed * 0.7) * (amplitude * 0.3);

        const finalY = y + wave + harmonic + mouseInfluence;

        if (x === 0) {
          ctx.moveTo(x, finalY);
        } else {
          ctx.lineTo(x, finalY);
        }
      }
      ctx.stroke();
    };

    const draw = () => {
      const w = canvas.getBoundingClientRect().width;
      const h = canvas.getBoundingClientRect().height;
      ctx.clearRect(0, 0, w, h);

      time += 0.003;

      // Multiple flowing lines at different positions
      // White lines - subtle
      drawLine(0.20, 18, 3.0, 0.8, 0.04, false, 0.8);
      drawLine(0.30, 22, 2.5, 0.6, 0.03, false, 0.6);
      drawLine(0.45, 15, 3.5, 1.0, 0.035, false, 0.7);
      drawLine(0.55, 20, 2.8, 0.7, 0.03, false, 0.5);
      drawLine(0.65, 25, 2.2, 0.9, 0.04, false, 0.8);
      drawLine(0.75, 18, 3.2, 0.5, 0.03, false, 0.6);
      drawLine(0.85, 12, 4.0, 1.1, 0.025, false, 0.5);

      // Gold accent line - slightly more visible
      drawLine(0.40, 20, 2.7, 0.65, 0.06, true, 1.0);

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn('absolute inset-0 pointer-events-none', className)}
      style={{ width: '100%', height: '100%' }}
    />
  );
};
