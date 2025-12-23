import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  onClick?: () => void;
}

export const MagneticButton = ({
  children,
  className,
  variant = 'default',
  size = 'default',
  onClick,
}: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'relative transition-all duration-200 ease-out font-medium',
        variant === 'default' && 'bg-white text-black hover:bg-white/90',
        variant === 'outline' && 'bg-transparent border border-white text-white hover:bg-white/10',
        size === 'sm' && 'px-4 py-2 text-sm rounded',
        size === 'default' && 'px-6 py-3 rounded-lg',
        size === 'lg' && 'px-8 py-4 text-lg rounded-lg',
        className
      )}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {children}
    </button>
  );
};
