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
    up: 'translate3d(0, 24px, 0)',
    left: 'translate3d(-24px, 0, 0)',
    right: 'translate3d(24px, 0, 0)',
    scale: 'scale(0.97)',
  };

  return (
    <div
      className={cn('transition-all duration-500 ease-out', className)}
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
      className="absolute w-[900px] h-[900px] rounded-full blur-[160px] animate-aurora-1"
      style={{
        background: 'radial-gradient(circle, hsla(43, 59%, 55%, 0.12) 0%, transparent 70%)',
        top: '-25%',
        right: '-15%',
      }}
    />
    {/* Secondary cool blue-white wash */}
    <div
      className="absolute w-[700px] h-[700px] rounded-full blur-[140px] animate-aurora-2"
      style={{
        background: 'radial-gradient(circle, hsla(220, 40%, 70%, 0.06) 0%, transparent 70%)',
        bottom: '-15%',
        left: '-10%',
      }}
    />
    {/* Tertiary warm accent - mid section */}
    <div
      className="absolute w-[600px] h-[600px] rounded-full blur-[120px] animate-aurora-3"
      style={{
        background: 'radial-gradient(circle, hsla(43, 59%, 55%, 0.07) 0%, transparent 60%)',
        top: '30%',
        left: '25%',
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
    let cachedWidth = 0;
    let cachedHeight = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      const rect = canvas.getBoundingClientRect();
      cachedWidth = rect.width;
      cachedHeight = rect.height;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - canvas.offsetLeft) / cachedWidth;
      mouseY = (e.clientY - canvas.offsetTop) / cachedHeight;
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
      const w = cachedWidth;
      const h = cachedHeight;
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
      ctx.clearRect(0, 0, cachedWidth, cachedHeight);

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

// Data flow particles - nodes connected by paths with particles flowing between them
type FlowNode = {
  x: number;  // 0-1 fraction of canvas width
  y: number;  // 0-1 fraction of canvas height
  size?: number; // node radius multiplier (default 1)
};

const DEFAULT_FLOW_NODES: FlowNode[] = [
  { x: 0.5, y: 0.5, size: 1 },
  { x: 0.2, y: 0.3, size: 0.8 },
  { x: 0.8, y: 0.7, size: 0.8 },
];

export const DataFlow = ({
  className,
  nodes = DEFAULT_FLOW_NODES,
}: {
  className?: string;
  nodes?: FlowNode[];
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;
    let w = 0, h = 0;
    let targetMouseX = 0.5, targetMouseY = 0.5;
    let mouseX = 0.5, mouseY = 0.5;

    const G = { r: 212, g: 168, b: 75 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX / window.innerWidth;
      targetMouseY = e.clientY / window.innerHeight;
    };

    // Build connection pairs (nodes within distance threshold)
    const connectionDist = 0.55;
    const connections: [number, number][] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < connectionDist) {
          connections.push([i, j]);
        }
      }
    }

    // Particle system
    interface Particle {
      fromIdx: number;
      toIdx: number;
      progress: number;
      speed: number;
      ctrlOffX: number;
      ctrlOffY: number;
    }

    const maxParticles = Math.min(connections.length * 3, 60);
    const particles: Particle[] = [];

    const spawnParticle = () => {
      if (connections.length === 0) return;
      const connIdx = Math.floor(Math.random() * connections.length);
      const [a, b] = connections[connIdx];
      const reversed = Math.random() > 0.5;
      const fromIdx = reversed ? b : a;
      const toIdx = reversed ? a : b;

      // Random perpendicular offset for bezier control point
      const perpScale = (Math.random() - 0.5) * 0.25;
      const dx = nodes[toIdx].x - nodes[fromIdx].x;
      const dy = nodes[toIdx].y - nodes[fromIdx].y;

      particles.push({
        fromIdx,
        toIdx,
        progress: 0,
        speed: 0.004 + Math.random() * 0.006,
        ctrlOffX: -dy * perpScale,
        ctrlOffY: dx * perpScale,
      });
    };

    // Seed initial particles
    for (let i = 0; i < Math.min(maxParticles, 30); i++) {
      spawnParticle();
      particles[particles.length - 1].progress = Math.random();
    }

    // Node pulse state
    const nodePulse = new Float32Array(nodes.length);

    // Node drift offsets (gentle floating)
    const nodeDriftPhase = nodes.map(() => Math.random() * Math.PI * 2);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      time += 0.004;

      mouseX += (targetMouseX - mouseX) * 0.03;
      mouseY += (targetMouseY - mouseY) * 0.03;

      // Calculate node screen positions with drift
      const nodePos = nodes.map((n, i) => ({
        x: w * (n.x + Math.sin(time * 0.5 + nodeDriftPhase[i]) * 0.008 + (mouseX - 0.5) * 0.02),
        y: h * (n.y + Math.cos(time * 0.7 + nodeDriftPhase[i] * 1.3) * 0.005 + (mouseY - 0.5) * 0.02),
        size: n.size ?? 1,
      }));

      // Draw connections
      for (const [i, j] of connections) {
        const a = nodePos[i];
        const b = nodePos[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = connectionDist * Math.max(w, h);
        const alpha = Math.max(0, (1 - dist / maxDist)) * 0.14;

        // Wide glow pass
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(${G.r}, ${G.g}, ${G.b}, ${alpha * 0.35})`;
        ctx.lineWidth = 6;
        ctx.stroke();

        // Mid glow pass
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(${G.r}, ${G.g}, ${G.b}, ${alpha * 0.6})`;
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // Sharp pass
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(${G.r}, ${G.g}, ${G.b}, ${alpha})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      // Update and draw particles
      for (let p = particles.length - 1; p >= 0; p--) {
        const particle = particles[p];
        particle.progress += particle.speed;

        if (particle.progress >= 1) {
          // Pulse target node
          nodePulse[particle.toIdx] = 1;
          // Remove and respawn
          particles.splice(p, 1);
          if (particles.length < maxParticles) spawnParticle();
          continue;
        }

        const from = nodePos[particle.fromIdx];
        const to = nodePos[particle.toIdx];
        const midX = (from.x + to.x) / 2 + particle.ctrlOffX * w;
        const midY = (from.y + to.y) / 2 + particle.ctrlOffY * h;

        const t = particle.progress;
        const invT = 1 - t;
        const px = invT * invT * from.x + 2 * invT * t * midX + t * t * to.x;
        const py = invT * invT * from.y + 2 * invT * t * midY + t * t * to.y;

        // Trail (6 positions behind for longer comet tail)
        for (let trail = 6; trail >= 1; trail--) {
          const tt = Math.max(0, t - trail * 0.025);
          const invTT = 1 - tt;
          const tx = invTT * invTT * from.x + 2 * invTT * tt * midX + tt * tt * to.x;
          const ty = invTT * invTT * from.y + 2 * invTT * tt * midY + tt * tt * to.y;
          const trailAlpha = (1 - trail / 7) * 0.45;
          const trailSize = 2.5 * (1 - trail / 7);

          // Trail glow
          ctx.beginPath();
          ctx.arc(tx, ty, trailSize + 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${G.r}, ${G.g}, ${G.b}, ${trailAlpha * 0.15})`;
          ctx.fill();

          // Trail dot
          ctx.beginPath();
          ctx.arc(tx, ty, trailSize, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${G.r}, ${G.g}, ${G.b}, ${trailAlpha})`;
          ctx.fill();
        }

        // Particle outer glow
        const pGlow = ctx.createRadialGradient(px, py, 0, px, py, 14);
        pGlow.addColorStop(0, `rgba(${G.r}, ${G.g}, ${G.b}, 0.25)`);
        pGlow.addColorStop(0.5, `rgba(${G.r}, ${G.g}, ${G.b}, 0.06)`);
        pGlow.addColorStop(1, 'transparent');
        ctx.fillStyle = pGlow;
        ctx.fillRect(px - 14, py - 14, 28, 28);

        // Particle mid ring
        ctx.beginPath();
        ctx.arc(px, py, 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${G.r}, ${G.g}, ${G.b}, 0.3)`;
        ctx.fill();

        // Particle core (bright)
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${G.r}, ${G.g}, ${G.b}, 0.75)`;
        ctx.fill();
      }

      // Maintain particle count
      while (particles.length < maxParticles * 0.8) {
        spawnParticle();
      }

      // Draw nodes
      for (let i = 0; i < nodePos.length; i++) {
        const n = nodePos[i];
        const pulse = nodePulse[i];

        // Decay pulse
        nodePulse[i] = Math.max(0, pulse - 0.012);

        const baseAlpha = 0.18 + pulse * 0.45;
        const baseSize = 4.5 * n.size;
        const pulseSize = baseSize + pulse * 14;

        // Wide outer glow
        const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, pulseSize * 6);
        glow.addColorStop(0, `rgba(${G.r}, ${G.g}, ${G.b}, ${baseAlpha * 0.35})`);
        glow.addColorStop(0.4, `rgba(${G.r}, ${G.g}, ${G.b}, ${baseAlpha * 0.1})`);
        glow.addColorStop(1, 'transparent');
        ctx.fillStyle = glow;
        ctx.fillRect(n.x - pulseSize * 6, n.y - pulseSize * 6, pulseSize * 12, pulseSize * 12);

        // Outer ring
        ctx.beginPath();
        ctx.arc(n.x, n.y, pulseSize * 1.5, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${G.r}, ${G.g}, ${G.b}, ${0.04 + pulse * 0.08})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();

        // Inner ring
        ctx.beginPath();
        ctx.arc(n.x, n.y, pulseSize, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${G.r}, ${G.g}, ${G.b}, ${0.12 + pulse * 0.25})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Mid fill
        ctx.beginPath();
        ctx.arc(n.x, n.y, baseSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${G.r}, ${G.g}, ${G.b}, ${0.12 + pulse * 0.2})`;
        ctx.fill();

        // Core dot (bright)
        ctx.beginPath();
        ctx.arc(n.x, n.y, baseSize * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${G.r}, ${G.g}, ${G.b}, ${0.55 + pulse * 0.4})`;
        ctx.fill();
      }

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
  }, [nodes]);

  return (
    <canvas
      ref={canvasRef}
      className={cn('absolute inset-0 pointer-events-none', className)}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

// Neural pulse network - cascading fire with expanding ripple rings and spark bursts
// Visually distinct from DataFlow: no persistent connections, ripple-based propagation
type NeuronNode = {
  x: number;  // 0-1 fraction
  y: number;  // 0-1 fraction
  size?: number; // radius multiplier (default 1)
};

const DEFAULT_NEURONS: NeuronNode[] = [
  { x: 0.5, y: 0.5, size: 1 },
  { x: 0.3, y: 0.3, size: 0.8 },
  { x: 0.7, y: 0.7, size: 0.8 },
];

export const NeuralPulse = ({
  className,
  neurons = DEFAULT_NEURONS,
}: {
  className?: string;
  neurons?: NeuronNode[];
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;
    let w = 0, h = 0;
    let targetMouseX = 0.5, targetMouseY = 0.5;
    let mouseX = 0.5, mouseY = 0.5;

    const G = { r: 212, g: 168, b: 75 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX / window.innerWidth;
      targetMouseY = e.clientY / window.innerHeight;
    };

    // Build axon connections (neurons within range) - used only for cascade propagation
    const axonDist = 0.55;
    const axons: [number, number][] = [];
    for (let i = 0; i < neurons.length; i++) {
      for (let j = i + 1; j < neurons.length; j++) {
        const dx = neurons[i].x - neurons[j].x;
        const dy = neurons[i].y - neurons[j].y;
        if (Math.sqrt(dx * dx + dy * dy) < axonDist) {
          axons.push([i, j]);
        }
      }
    }

    // Neuron fire state
    const neuronFire = new Float32Array(neurons.length);
    const neuronPhase = neurons.map(() => Math.random() * Math.PI * 2);

    // Expanding ripple rings - the signature visual of this effect
    interface Ripple {
      x: number; y: number;
      radius: number;
      maxRadius: number;
      speed: number;
      intensity: number;
    }
    const ripples: Ripple[] = [];

    // Electric flash connections - appear briefly when pulse propagates
    interface Flash {
      fromX: number; fromY: number;
      toX: number; toY: number;
      life: number;
      intensity: number;
      // Jagged path points
      points: { x: number; y: number }[];
    }
    const flashes: Flash[] = [];

    // Generate jagged lightning path between two points
    const buildLightningPath = (x1: number, y1: number, x2: number, y2: number, segments = 8): { x: number; y: number }[] => {
      const points: { x: number; y: number }[] = [{ x: x1, y: y1 }];
      const dx = x2 - x1;
      const dy = y2 - y1;
      const len = Math.sqrt(dx * dx + dy * dy);
      const perpX = -dy / len;
      const perpY = dx / len;
      for (let s = 1; s < segments; s++) {
        const t = s / segments;
        const jitter = (Math.random() - 0.5) * len * 0.15;
        points.push({
          x: x1 + dx * t + perpX * jitter,
          y: y1 + dy * t + perpY * jitter,
        });
      }
      points.push({ x: x2, y: y2 });
      return points;
    };

    // Fire a neuron: creates ripples and cascading flashes
    const fireNeuron = (neuronIdx: number, screenX: number, screenY: number, intensity = 1) => {
      neuronFire[neuronIdx] = intensity;

      // Spawn ripple rings (2-3 per fire, larger reach)
      const rippleCount = intensity > 0.5 ? 3 : 2;
      for (let r = 0; r < rippleCount; r++) {
        ripples.push({
          x: screenX, y: screenY,
          radius: 3 + r * 4,
          maxRadius: 80 + intensity * 120 + r * 40,
          speed: 1.2 + r * 0.4 + Math.random() * 0.5,
          intensity: intensity * (1 - r * 0.15),
        });
      }
    };

    // Random cascade timer
    let nextCascade = 0;
    const driftPhase = neurons.map(() => Math.random() * Math.PI * 2);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      time += 0.005;

      mouseX += (targetMouseX - mouseX) * 0.03;
      mouseY += (targetMouseY - mouseY) * 0.03;

      // Calculate neuron screen positions
      const nPos = neurons.map((n, i) => ({
        x: w * (n.x + Math.sin(time * 0.4 + driftPhase[i]) * 0.006 + (mouseX - 0.5) * 0.015),
        y: h * (n.y + Math.cos(time * 0.6 + driftPhase[i] * 1.3) * 0.004 + (mouseY - 0.5) * 0.015),
        size: n.size ?? 1,
      }));

      // Trigger random cascades
      nextCascade -= 1;
      if (nextCascade <= 0) {
        const startIdx = Math.floor(Math.random() * neurons.length);
        fireNeuron(startIdx, nPos[startIdx].x, nPos[startIdx].y, 0.8 + Math.random() * 0.2);

        // Create flash connections to nearby neurons (cascade with delay via flash life)
        for (const [i, j] of axons) {
          if (i === startIdx || j === startIdx) {
            const fromIdx = i === startIdx ? i : j;
            const toIdx = i === startIdx ? j : i;
            const from = nPos[fromIdx];
            const to = nPos[toIdx];
            flashes.push({
              fromX: from.x, fromY: from.y,
              toX: to.x, toY: to.y,
              life: 1,
              intensity: 0.7 + Math.random() * 0.3,
              points: buildLightningPath(from.x, from.y, to.x, to.y),
            });
            // Delayed cascade fire for target neuron
            setTimeout(() => {
              const targetPos = nPos[toIdx];
              if (targetPos) {
                fireNeuron(toIdx, targetPos.x, targetPos.y, 0.5 + Math.random() * 0.3);
                // Second-hop cascade
                for (const [ii, jj] of axons) {
                  if ((ii === toIdx || jj === toIdx) && ii !== fromIdx && jj !== fromIdx) {
                    const nextFrom = nPos[ii === toIdx ? ii : jj];
                    const nextTo = nPos[ii === toIdx ? jj : ii];
                    if (nextFrom && nextTo) {
                      flashes.push({
                        fromX: nextFrom.x, fromY: nextFrom.y,
                        toX: nextTo.x, toY: nextTo.y,
                        life: 1,
                        intensity: 0.4 + Math.random() * 0.2,
                        points: buildLightningPath(nextFrom.x, nextFrom.y, nextTo.x, nextTo.y),
                      });
                      const hopTarget = ii === toIdx ? jj : ii;
                      fireNeuron(hopTarget, nextTo.x, nextTo.y, 0.3 + Math.random() * 0.2);
                    }
                  }
                }
              }
            }, 200 + Math.random() * 150);
          }
        }

        nextCascade = 30 + Math.floor(Math.random() * 60);
      }

      // --- Draw ripple rings ---
      for (let r = ripples.length - 1; r >= 0; r--) {
        const ripple = ripples[r];
        ripple.radius += ripple.speed;
        const progress = ripple.radius / ripple.maxRadius;

        if (progress >= 1) {
          ripples.splice(r, 1);
          continue;
        }

        const alpha = ripple.intensity * (1 - progress) * 0.5;

        // Outer glow ring
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${G.r}, ${G.g}, ${G.b}, ${alpha * 0.3})`;
        ctx.lineWidth = 4 + (1 - progress) * 4;
        ctx.stroke();

        // Core ring
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${G.r}, ${G.g}, ${G.b}, ${alpha})`;
        ctx.lineWidth = 1 + (1 - progress) * 1.5;
        ctx.stroke();
      }

      // --- Draw electric flash connections (jagged lightning) ---
      for (let f = flashes.length - 1; f >= 0; f--) {
        const flash = flashes[f];
        flash.life -= 0.025;

        if (flash.life <= 0) {
          flashes.splice(f, 1);
          continue;
        }

        const alpha = flash.life * flash.intensity;
        const pts = flash.points;

        // Wide glow pass
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let p = 1; p < pts.length; p++) {
          ctx.lineTo(pts[p].x, pts[p].y);
        }
        ctx.strokeStyle = `rgba(${G.r}, ${G.g}, ${G.b}, ${alpha * 0.15})`;
        ctx.lineWidth = 8;
        ctx.stroke();

        // Mid glow
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let p = 1; p < pts.length; p++) {
          ctx.lineTo(pts[p].x, pts[p].y);
        }
        ctx.strokeStyle = `rgba(${G.r}, ${G.g}, ${G.b}, ${alpha * 0.4})`;
        ctx.lineWidth = 3;
        ctx.stroke();

        // Sharp core
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let p = 1; p < pts.length; p++) {
          ctx.lineTo(pts[p].x, pts[p].y);
        }
        ctx.strokeStyle = `rgba(${G.r}, ${G.g}, ${G.b}, ${alpha * 0.8})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // --- Draw neurons (minimal when idle, dramatic on fire) ---
      for (let i = 0; i < nPos.length; i++) {
        const n = nPos[i];
        const fire = neuronFire[i];
        const ambient = Math.sin(time * 1.2 + neuronPhase[i]) * 0.5 + 0.5;

        // Decay fire
        neuronFire[i] = Math.max(0, fire - 0.02);

        const baseSize = 3 * n.size;

        // Fire bloom
        if (fire > 0.05) {
          const bloomR = baseSize + fire * 25;
          const bloom = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, bloomR);
          bloom.addColorStop(0, `rgba(${G.r}, ${G.g}, ${G.b}, ${fire * 0.45})`);
          bloom.addColorStop(0.3, `rgba(${G.r}, ${G.g}, ${G.b}, ${fire * 0.12})`);
          bloom.addColorStop(1, 'transparent');
          ctx.fillStyle = bloom;
          ctx.fillRect(n.x - bloomR, n.y - bloomR, bloomR * 2, bloomR * 2);
        }

        // Subtle ambient glow (very faint when idle)
        const ambAlpha = 0.04 + ambient * 0.03 + fire * 0.15;
        const ambGlow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, baseSize * 4);
        ambGlow.addColorStop(0, `rgba(${G.r}, ${G.g}, ${G.b}, ${ambAlpha})`);
        ambGlow.addColorStop(1, 'transparent');
        ctx.fillStyle = ambGlow;
        ctx.fillRect(n.x - baseSize * 4, n.y - baseSize * 4, baseSize * 8, baseSize * 8);

        // Core dot (small and dim when idle, bright on fire)
        ctx.beginPath();
        ctx.arc(n.x, n.y, baseSize * (0.4 + fire * 0.6), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${G.r}, ${G.g}, ${G.b}, ${0.2 + fire * 0.7 + ambient * 0.05})`;
        ctx.fill();
      }

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
  }, [neurons]);

  return (
    <canvas
      ref={canvasRef}
      className={cn('absolute inset-0 pointer-events-none', className)}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

// Tessellation Mesh - living triangle mesh that continuously deforms
// Vertices drift and shift, triangles pulse with color waves, mouse warps nearby vertices
export const TessellationMesh = ({
  className,
  cols = 14,
  rows = 40,
}: {
  className?: string;
  cols?: number;
  rows?: number;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;
    let w = 0, h = 0;
    let targetMouseX = -1, targetMouseY = -1;
    let mouseX = -1, mouseY = -1;

    const G = { r: 212, g: 168, b: 75 };

    // Vertex data
    interface Vertex {
      baseX: number; baseY: number;   // grid position (pixels)
      x: number; y: number;            // current animated position
      phaseX: number; phaseY: number;  // unique oscillation phases
      ampX: number; ampY: number;      // oscillation amplitude
      speedX: number; speedY: number;  // oscillation speed
    }

    let vertices: Vertex[] = [];
    let triangles: [number, number, number][] = [];

    // Color wave sources
    interface Wave {
      cx: number; cy: number;  // center (pixels)
      radius: number;
      speed: number;
      intensity: number;
      maxRadius: number;
    }
    const waves: Wave[] = [];
    let nextWave = 0;

    // Active vertex highlights
    const vertexGlow = new Float32Array(0);
    let vGlow: Float32Array;

    const buildMesh = () => {
      vertices = [];
      triangles = [];

      const spacingX = w / (cols - 1);
      const spacingY = h / (rows - 1);

      // Create grid vertices with jitter
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const isOddRow = r % 2 === 1;
          const bx = c * spacingX + (isOddRow ? spacingX * 0.5 : 0);
          const by = r * spacingY;

          vertices.push({
            baseX: bx, baseY: by,
            x: bx, y: by,
            phaseX: Math.random() * Math.PI * 2,
            phaseY: Math.random() * Math.PI * 2,
            ampX: 8 + Math.random() * 18,
            ampY: 6 + Math.random() * 14,
            speedX: 0.3 + Math.random() * 0.6,
            speedY: 0.4 + Math.random() * 0.5,
          });
        }
      }

      // Build triangles from grid
      for (let r = 0; r < rows - 1; r++) {
        for (let c = 0; c < cols - 1; c++) {
          const i = r * cols + c;
          const isOddRow = r % 2 === 1;

          if (isOddRow) {
            // Odd row: offset triangulation
            triangles.push([i, i + 1, i + cols]);
            triangles.push([i + 1, i + cols + 1, i + cols]);
          } else {
            triangles.push([i, i + 1, i + cols + 1]);
            triangles.push([i, i + cols + 1, i + cols]);
          }
        }
      }

      vGlow = new Float32Array(vertices.length);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
      buildMesh();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      targetMouseX = -1;
      targetMouseY = -1;
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      time += 0.014;

      // Smooth mouse
      if (targetMouseX >= 0) {
        mouseX = mouseX < 0 ? targetMouseX : mouseX + (targetMouseX - mouseX) * 0.08;
        mouseY = mouseY < 0 ? targetMouseY : mouseY + (targetMouseY - mouseY) * 0.08;
      } else {
        mouseX = -1;
        mouseY = -1;
      }

      // Spawn color waves
      nextWave -= 1;
      if (nextWave <= 0) {
        waves.push({
          cx: Math.random() * w,
          cy: Math.random() * h,
          radius: 0,
          speed: 4 + Math.random() * 5,
          intensity: 0.8 + Math.random() * 0.2,
          maxRadius: 400 + Math.random() * 500,
        });
        nextWave = 20 + Math.floor(Math.random() * 40);
      }

      // Update waves
      for (let wv = waves.length - 1; wv >= 0; wv--) {
        waves[wv].radius += waves[wv].speed;
        if (waves[wv].radius > waves[wv].maxRadius) {
          waves.splice(wv, 1);
        }
      }

      // Update vertex positions
      const mouseRadius = 120;
      for (let i = 0; i < vertices.length; i++) {
        const v = vertices[i];
        // Oscillation
        v.x = v.baseX + Math.sin(time * v.speedX + v.phaseX) * v.ampX;
        v.y = v.baseY + Math.cos(time * v.speedY + v.phaseY) * v.ampY;

        // Mouse warp: push vertices away from cursor
        if (mouseX >= 0) {
          const dx = v.x - mouseX;
          const dy = v.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseRadius && dist > 0) {
            const force = (1 - dist / mouseRadius) * 25;
            v.x += (dx / dist) * force;
            v.y += (dy / dist) * force;
          }
        }

        // Decay vertex glow
        vGlow[i] = Math.max(0, vGlow[i] - 0.008);
      }

      // Apply wave effects to vertex glow
      for (const wave of waves) {
        const waveWidth = 70;
        for (let i = 0; i < vertices.length; i++) {
          const v = vertices[i];
          const dx = v.x - wave.cx;
          const dy = v.y - wave.cy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const diff = Math.abs(dist - wave.radius);
          if (diff < waveWidth) {
            const waveFade = 1 - wave.radius / wave.maxRadius;
            const proximity = 1 - diff / waveWidth;
            vGlow[i] = Math.min(1, vGlow[i] + proximity * wave.intensity * waveFade * 0.35);
          }
        }
      }

      // Draw triangles
      for (const [a, b, c] of triangles) {
        const va = vertices[a], vb = vertices[b], vc = vertices[c];

        // Triangle brightness based on vertex glow average
        const glow = (vGlow[a] + vGlow[b] + vGlow[c]) / 3;
        const fillAlpha = 0.025 + glow * 0.18;
        const strokeAlpha = 0.07 + glow * 0.28;

        // Fill
        ctx.beginPath();
        ctx.moveTo(va.x, va.y);
        ctx.lineTo(vb.x, vb.y);
        ctx.lineTo(vc.x, vc.y);
        ctx.closePath();
        ctx.fillStyle = `rgba(${G.r}, ${G.g}, ${G.b}, ${fillAlpha})`;
        ctx.fill();

        // Edges
        ctx.strokeStyle = `rgba(${G.r}, ${G.g}, ${G.b}, ${strokeAlpha})`;
        ctx.lineWidth = 0.7 + glow * 0.5;
        ctx.stroke();
      }

      // Draw vertex dots (only bright ones)
      for (let i = 0; i < vertices.length; i++) {
        const v = vertices[i];
        const glow = vGlow[i];
        if (glow < 0.03) continue;

        // Vertex glow halo
        const vg = ctx.createRadialGradient(v.x, v.y, 0, v.x, v.y, 10 + glow * 16);
        vg.addColorStop(0, `rgba(${G.r}, ${G.g}, ${G.b}, ${glow * 0.5})`);
        vg.addColorStop(0.5, `rgba(${G.r}, ${G.g}, ${G.b}, ${glow * 0.12})`);
        vg.addColorStop(1, 'transparent');
        ctx.fillStyle = vg;
        const haloR = 10 + glow * 16;
        ctx.fillRect(v.x - haloR, v.y - haloR, haloR * 2, haloR * 2);

        // Vertex dot
        ctx.beginPath();
        ctx.arc(v.x, v.y, 1.8 + glow * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${G.r}, ${G.g}, ${G.b}, ${0.3 + glow * 0.65})`;
        ctx.fill();
      }

      // Draw wave rings (subtle)
      for (const wave of waves) {
        const waveFade = 1 - wave.radius / wave.maxRadius;
        if (waveFade < 0.05) continue;
        ctx.beginPath();
        ctx.arc(wave.cx, wave.cy, wave.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${G.r}, ${G.g}, ${G.b}, ${waveFade * wave.intensity * 0.12})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cols, rows]);

  return (
    <canvas
      ref={canvasRef}
      className={cn('absolute inset-0', className)}
      style={{ width: '100%', height: '100%', pointerEvents: 'auto' }}
    />
  );
};

// Radar sweep - concentric rings with rotating scan line and detection blips
// Supports multiple scan centers for a "scanning across the page" effect
type RadarCenter = {
  x: number;       // 0-1 fraction of canvas width
  y: number;       // 0-1 fraction of canvas height
  scale?: number;  // radius multiplier (default 1)
  speed?: number;  // rotation speed multiplier (default 1)
  offset?: number; // initial angle offset in radians
};

const DEFAULT_CENTERS: RadarCenter[] = [{ x: 0.5, y: 0.42, scale: 1, speed: 1, offset: 0 }];

export const RadarSweep = ({
  className,
  centers = DEFAULT_CENTERS,
}: {
  className?: string;
  centers?: RadarCenter[];
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;
    let w = 0, h = 0;
    let targetMouseX = 0.5, targetMouseY = 0.5;
    let mouseX = 0.5, mouseY = 0.5;

    const G = { r: 212, g: 168, b: 75 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX / window.innerWidth;
      targetMouseY = e.clientY / window.innerHeight;
    };

    // Per-center detection blip sets (seeded by center position)
    const centerBlips = centers.map((c) => {
      const seed = (c.x * 7 + c.y * 13 + (c.offset || 0)) * 1000;
      const blips = [];
      for (let i = 0; i < 6; i++) {
        const pseudoRand = ((seed + i * 137.5) % 1000) / 1000;
        blips.push({
          angle: pseudoRand * Math.PI * 2,
          ring: 1 + Math.floor(((seed + i * 73) % 5)),
          size: 2 + ((seed + i * 41) % 2),
        });
      }
      return blips;
    });

    const drawRadar = (center: RadarCenter, blips: { angle: number; ring: number; size: number }[]) => {
      const scale = center.scale ?? 1;
      const speed = center.speed ?? 1;
      const offset = center.offset ?? 0;
      const parallax = 0.03 * scale;

      const cx = w * (center.x + (mouseX - 0.5) * parallax);
      const cy = h * (center.y + (mouseY - 0.5) * parallax);
      const baseRadius = Math.min(w, h) * 0.35;
      const maxRadius = baseRadius * scale;
      const staticRings = 6;

      // Crosshair lines
      ctx.strokeStyle = `rgba(${G.r}, ${G.g}, ${G.b}, 0.06)`;
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(cx - maxRadius * 1.15, cy);
      ctx.lineTo(cx + maxRadius * 1.15, cy);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx, cy - maxRadius * 1.15);
      ctx.lineTo(cx, cy + maxRadius * 1.15);
      ctx.stroke();

      // Static concentric rings
      for (let i = 1; i <= staticRings; i++) {
        const radius = (i / staticRings) * maxRadius;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${G.r}, ${G.g}, ${G.b}, 0.07)`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }

      // Pulsing rings
      const pulseCount = 3;
      for (let i = 0; i < pulseCount; i++) {
        const progress = ((time * 0.35 * speed + i / pulseCount) % 1);
        const radius = progress * maxRadius;
        const alpha = (1 - progress) * 0.18;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${G.r}, ${G.g}, ${G.b}, ${alpha})`;
        ctx.lineWidth = 1.5 * (1 - progress) + 0.5;
        ctx.stroke();
      }

      // Sweep
      const sweepAngle = time * 1.8 * speed + offset;
      const trailAngle = Math.PI * 0.4;
      const trailSegments = 25;

      for (let i = 0; i < trailSegments; i++) {
        const t = i / trailSegments;
        const angle = sweepAngle - t * trailAngle;
        const segEndX = cx + Math.cos(angle) * maxRadius * 1.08;
        const segEndY = cy + Math.sin(angle) * maxRadius * 1.08;
        const alpha = Math.pow(1 - t, 2.5) * 0.07;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(segEndX, segEndY);
        ctx.strokeStyle = `rgba(${G.r}, ${G.g}, ${G.b}, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Main sweep line
      const sweepEndX = cx + Math.cos(sweepAngle) * maxRadius * 1.08;
      const sweepEndY = cy + Math.sin(sweepAngle) * maxRadius * 1.08;

      const grad = ctx.createLinearGradient(cx, cy, sweepEndX, sweepEndY);
      grad.addColorStop(0, `rgba(${G.r}, ${G.g}, ${G.b}, 0.5)`);
      grad.addColorStop(0.5, `rgba(${G.r}, ${G.g}, ${G.b}, 0.2)`);
      grad.addColorStop(1, `rgba(${G.r}, ${G.g}, ${G.b}, 0.04)`);

      // Glow pass
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(sweepEndX, sweepEndY);
      ctx.strokeStyle = `rgba(${G.r}, ${G.g}, ${G.b}, 0.08)`;
      ctx.lineWidth = 6;
      ctx.stroke();

      // Sharp pass
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(sweepEndX, sweepEndY);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Detection blips
      for (const det of blips) {
        const detRadius = (det.ring / staticRings) * maxRadius;
        const angleDiff = ((sweepAngle - det.angle) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);

        if (angleDiff < Math.PI * 0.8) {
          const blipAlpha = Math.max(0, (1 - angleDiff / (Math.PI * 0.8))) * 0.55;
          const dx = cx + Math.cos(det.angle) * detRadius;
          const dy = cy + Math.sin(det.angle) * detRadius;

          // Outer glow
          ctx.beginPath();
          ctx.arc(dx, dy, det.size * 4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${G.r}, ${G.g}, ${G.b}, ${blipAlpha * 0.1})`;
          ctx.fill();

          // Inner glow
          ctx.beginPath();
          ctx.arc(dx, dy, det.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${G.r}, ${G.g}, ${G.b}, ${blipAlpha * 0.2})`;
          ctx.fill();

          // Core dot
          ctx.beginPath();
          ctx.arc(dx, dy, det.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${G.r}, ${G.g}, ${G.b}, ${blipAlpha})`;
          ctx.fill();
        }
      }

      // Center glow
      const centerGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, maxRadius * 0.15);
      centerGlow.addColorStop(0, `rgba(${G.r}, ${G.g}, ${G.b}, 0.2)`);
      centerGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = centerGlow;
      ctx.fillRect(cx - maxRadius * 0.15, cy - maxRadius * 0.15, maxRadius * 0.3, maxRadius * 0.3);

      // Center dot
      ctx.beginPath();
      ctx.arc(cx, cy, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${G.r}, ${G.g}, ${G.b}, 0.6)`;
      ctx.fill();
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      time += 0.004;

      mouseX += (targetMouseX - mouseX) * 0.03;
      mouseY += (targetMouseY - mouseY) * 0.03;

      // Draw each radar center
      centers.forEach((center, i) => {
        drawRadar(center, centerBlips[i]);
      });

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
  }, [centers]);

  return (
    <canvas
      ref={canvasRef}
      className={cn('absolute inset-0 pointer-events-none', className)}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

// 3D Perspective grid - canvas-based with true perspective projection
export const PerspectiveGrid = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;
    let w = 0, h = 0;
    let targetMouseX = 0.5, targetMouseY = 0.5;
    let mouseX = 0.5, mouseY = 0.5;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX / window.innerWidth;
      targetMouseY = e.clientY / window.innerHeight;
    };

    const G = { r: 212, g: 168, b: 75 }; // gold accent

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      time += 0.004;

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Vanishing point with mouse parallax
      const vpX = w * (0.5 + (mouseX - 0.5) * 0.06);
      const vpY = h * 0.40;
      const floorBottom = h * 1.15;
      const floorSpan = floorBottom - vpY;

      // --- Horizon glow ---
      const hGlow = ctx.createRadialGradient(vpX, vpY, 0, vpX, vpY, w * 0.5);
      hGlow.addColorStop(0, `rgba(${G.r}, ${G.g}, ${G.b}, 0.10)`);
      hGlow.addColorStop(0.3, `rgba(${G.r}, ${G.g}, ${G.b}, 0.04)`);
      hGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = hGlow;
      ctx.fillRect(0, 0, w, h);

      // --- Horizontal lines (floor receding into distance) ---
      const hLineCount = 30;
      for (let i = 0; i < hLineCount; i++) {
        // Flowing animation: offset index by time
        const rawT = ((i + 0.5) / hLineCount + time * 0.4) % 1;
        // Perspective foreshortening: quadratic maps evenly-spaced 3D lines
        // to bunched-near-horizon screen positions
        const t = rawT * rawT;
        const y = vpY + t * floorSpan;
        if (y > h || y < vpY) continue;

        // Width spreads as lines get closer to viewer
        const spread = t * w * 0.9;
        const x1 = vpX - spread;
        const x2 = vpX + spread;

        // Opacity: invisible at horizon, strong near bottom
        const baseAlpha = t * 0.25;
        // Fade out lines near bottom edge of viewport
        const bottomFade = y > h * 0.9 ? 1 - (y - h * 0.9) / (h * 0.1) : 1;
        const alpha = Math.max(0, baseAlpha * bottomFade);
        if (alpha <= 0) continue;

        // Subtle wave deformation
        const wave = Math.sin(i * 0.4 + time * 6) * t * 2.5;

        // Glow pass (wider, softer)
        ctx.beginPath();
        ctx.strokeStyle = `rgba(${G.r}, ${G.g}, ${G.b}, ${alpha * 0.35})`;
        ctx.lineWidth = 3 + t * 4;
        ctx.moveTo(x1, y + wave);
        ctx.lineTo(x2, y + wave);
        ctx.stroke();

        // Sharp pass
        ctx.beginPath();
        ctx.strokeStyle = `rgba(${G.r}, ${G.g}, ${G.b}, ${alpha})`;
        ctx.lineWidth = 0.6 + t * 0.8;
        ctx.moveTo(x1, y + wave);
        ctx.lineTo(x2, y + wave);
        ctx.stroke();
      }

      // --- Vertical lines (converging to vanishing point) ---
      const vLineCount = 24;
      for (let i = 0; i < vLineCount; i++) {
        const t = i / (vLineCount - 1); // 0 to 1 across bottom
        const bottomX = w * (t * 1.5 - 0.25); // wider than viewport

        // Opacity: strongest near center, fading at edges
        const centerDist = Math.abs(t - 0.5) * 2;
        const alpha = Math.max(0, (1 - centerDist * 0.8)) * 0.15;
        if (alpha <= 0) continue;

        // Glow pass
        ctx.beginPath();
        ctx.strokeStyle = `rgba(${G.r}, ${G.g}, ${G.b}, ${alpha * 0.3})`;
        ctx.lineWidth = 2.5;
        ctx.moveTo(vpX, vpY);
        ctx.lineTo(bottomX, floorBottom);
        ctx.stroke();

        // Sharp pass
        ctx.beginPath();
        ctx.strokeStyle = `rgba(${G.r}, ${G.g}, ${G.b}, ${alpha})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(vpX, vpY);
        ctx.lineTo(bottomX, floorBottom);
        ctx.stroke();
      }

      // --- Horizon line ---
      ctx.beginPath();
      const hlGrad = ctx.createLinearGradient(0, vpY, w, vpY);
      hlGrad.addColorStop(0, 'transparent');
      hlGrad.addColorStop(0.15, `rgba(${G.r}, ${G.g}, ${G.b}, 0.06)`);
      hlGrad.addColorStop(0.5, `rgba(${G.r}, ${G.g}, ${G.b}, 0.2)`);
      hlGrad.addColorStop(0.85, `rgba(${G.r}, ${G.g}, ${G.b}, 0.06)`);
      hlGrad.addColorStop(1, 'transparent');
      ctx.strokeStyle = hlGrad;
      ctx.lineWidth = 1;
      ctx.moveTo(0, vpY);
      ctx.lineTo(w, vpY);
      ctx.stroke();

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
