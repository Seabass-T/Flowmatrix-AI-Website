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

// Blueprint Draw - self-drawing wireframe lines with dimension markers
// Simulates software being designed in real time with architectural precision
type BlueprintZone = {
  x: number;  // 0-1 fraction, center of zone
  y: number;  // 0-1 fraction
  w: number;  // 0-1 fraction, zone width
  h: number;  // 0-1 fraction, zone height
};

const DEFAULT_ZONES: BlueprintZone[] = [
  { x: 0.5, y: 0.5, w: 0.3, h: 0.2 },
];

export const BlueprintDraw = ({
  className,
  zones = DEFAULT_ZONES,
}: {
  className?: string;
  zones?: BlueprintZone[];
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

    const G = { r: 212, g: 168, b: 75 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    };

    // A stroke that draws itself from point A to point B
    interface Stroke {
      x1: number; y1: number;
      x2: number; y2: number;
      progress: number;   // 0 = not started, 0-1 = drawing, 1 = complete
      drawSpeed: number;
      holdTime: number;    // frames to hold after drawing
      fadeAlpha: number;   // 1 = full, fades to 0
      fading: boolean;
      hasDimension: boolean;
    }

    // Corner bracket at intersections
    interface Corner {
      x: number; y: number;
      alpha: number;
      fading: boolean;
      holdTime: number;
    }

    // Dimension label
    interface DimLabel {
      x: number; y: number;
      text: string;
      alpha: number;
      fading: boolean;
      holdTime: number;
      vertical: boolean;
    }

    // Grid snap dot pulse
    interface SnapPulse {
      x: number; y: number;
      radius: number;
      maxRadius: number;
      alpha: number;
    }

    const strokes: Stroke[] = [];
    const corners: Corner[] = [];
    const dimLabels: DimLabel[] = [];
    const snapPulses: SnapPulse[] = [];

    // Measurement-style text options
    const measurements = ['240px', '320px', '16rem', '1fr', '48px', '64px', '128px', '2fr', '24rem', '80px', 'auto', '1:1', '3:4', '100%', '12col'];

    // Generate a blueprint wireframe in a zone
    const spawnWireframe = (zone: BlueprintZone) => {
      const zx = zone.x * w;
      const zy = zone.y * h;
      const zw = zone.w * w;
      const zh = zone.h * h;
      const left = zx - zw / 2;
      const top = zy - zh / 2;

      // Outer rectangle (4 strokes)
      const baseDelay = 0;
      const outerPoints = [
        { x: left, y: top },
        { x: left + zw, y: top },
        { x: left + zw, y: top + zh },
        { x: left, y: top + zh },
      ];

      for (let i = 0; i < 4; i++) {
        const a = outerPoints[i];
        const b = outerPoints[(i + 1) % 4];
        strokes.push({
          x1: a.x, y1: a.y, x2: b.x, y2: b.y,
          progress: -baseDelay - i * 0.15,
          drawSpeed: 0.012 + Math.random() * 0.008,
          holdTime: 120 + Math.random() * 60,
          fadeAlpha: 1, fading: false,
          hasDimension: i < 2,
        });
      }

      // Corner brackets at all 4 corners
      for (const pt of outerPoints) {
        corners.push({
          x: pt.x, y: pt.y,
          alpha: 0, fading: false,
          holdTime: 140 + Math.random() * 40,
        });
      }

      // Internal division lines (1-3 random subdivisions)
      const divCount = 1 + Math.floor(Math.random() * 3);
      for (let d = 0; d < divCount; d++) {
        const isVertical = Math.random() > 0.5;
        if (isVertical) {
          const xOff = 0.2 + Math.random() * 0.6;
          const sx = left + zw * xOff;
          strokes.push({
            x1: sx, y1: top, x2: sx, y2: top + zh,
            progress: -0.6 - d * 0.2,
            drawSpeed: 0.015 + Math.random() * 0.01,
            holdTime: 100 + Math.random() * 60,
            fadeAlpha: 1, fading: false,
            hasDimension: false,
          });
        } else {
          const yOff = 0.2 + Math.random() * 0.6;
          const sy = top + zh * yOff;
          strokes.push({
            x1: left, y1: sy, x2: left + zw, y2: sy,
            progress: -0.6 - d * 0.2,
            drawSpeed: 0.015 + Math.random() * 0.01,
            holdTime: 100 + Math.random() * 60,
            fadeAlpha: 1, fading: false,
            hasDimension: false,
          });
        }
      }

      // Dimension labels
      // Top edge
      dimLabels.push({
        x: left + zw / 2, y: top - 14,
        text: measurements[Math.floor(Math.random() * measurements.length)],
        alpha: 0, fading: false, holdTime: 130, vertical: false,
      });
      // Left edge
      dimLabels.push({
        x: left - 14, y: top + zh / 2,
        text: measurements[Math.floor(Math.random() * measurements.length)],
        alpha: 0, fading: false, holdTime: 130, vertical: true,
      });

      // Snap pulse at a random corner
      const snapPt = outerPoints[Math.floor(Math.random() * 4)];
      snapPulses.push({
        x: snapPt.x, y: snapPt.y,
        radius: 2, maxRadius: 30,
        alpha: 0.6,
      });
    };

    // Schedule wireframe spawns staggered across zones
    let nextSpawn = 0;
    let currentZone = 0;

    // Subtle background grid dots
    const gridSpacing = 40;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      time += 1;

      // Spawn wireframes in zones
      nextSpawn -= 1;
      if (nextSpawn <= 0 && zones.length > 0) {
        spawnWireframe(zones[currentZone % zones.length]);
        currentZone++;
        nextSpawn = 80 + Math.floor(Math.random() * 100);
      }

      // --- Background grid dots ---
      for (let gx = gridSpacing; gx < w; gx += gridSpacing) {
        for (let gy = gridSpacing; gy < h; gy += gridSpacing) {
          ctx.beginPath();
          ctx.arc(gx, gy, 0.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${G.r}, ${G.g}, ${G.b}, 0.04)`;
          ctx.fill();
        }
      }

      // --- Draw strokes ---
      for (let s = strokes.length - 1; s >= 0; s--) {
        const stroke = strokes[s];

        if (stroke.progress < 0) {
          stroke.progress += stroke.drawSpeed;
          continue;
        }

        if (!stroke.fading && stroke.progress < 1) {
          stroke.progress = Math.min(1, stroke.progress + stroke.drawSpeed);
        } else if (!stroke.fading && stroke.progress >= 1) {
          stroke.holdTime -= 1;
          if (stroke.holdTime <= 0) stroke.fading = true;
        }

        if (stroke.fading) {
          stroke.fadeAlpha -= 0.008;
          if (stroke.fadeAlpha <= 0) { strokes.splice(s, 1); continue; }
        }

        const p = Math.max(0, Math.min(1, stroke.progress));
        const ex = stroke.x1 + (stroke.x2 - stroke.x1) * p;
        const ey = stroke.y1 + (stroke.y2 - stroke.y1) * p;
        const alpha = stroke.fadeAlpha;

        // Glow pass
        ctx.beginPath();
        ctx.moveTo(stroke.x1, stroke.y1);
        ctx.lineTo(ex, ey);
        ctx.strokeStyle = `rgba(${G.r}, ${G.g}, ${G.b}, ${alpha * 0.08})`;
        ctx.lineWidth = 6;
        ctx.stroke();

        // Core line
        ctx.beginPath();
        ctx.moveTo(stroke.x1, stroke.y1);
        ctx.lineTo(ex, ey);
        ctx.strokeStyle = `rgba(${G.r}, ${G.g}, ${G.b}, ${alpha * 0.3})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Drawing tip glow (bright point at the leading edge while drawing)
        if (p > 0 && p < 1) {
          const tipGlow = ctx.createRadialGradient(ex, ey, 0, ex, ey, 10);
          tipGlow.addColorStop(0, `rgba(${G.r}, ${G.g}, ${G.b}, 0.5)`);
          tipGlow.addColorStop(0.4, `rgba(${G.r}, ${G.g}, ${G.b}, 0.1)`);
          tipGlow.addColorStop(1, 'transparent');
          ctx.fillStyle = tipGlow;
          ctx.fillRect(ex - 10, ey - 10, 20, 20);
        }

        // Dimension arrows along completed strokes
        if (stroke.hasDimension && p >= 1 && alpha > 0.3) {
          const mx = (stroke.x1 + stroke.x2) / 2;
          const my = (stroke.y1 + stroke.y2) / 2;
          const isHorizontal = Math.abs(stroke.y2 - stroke.y1) < Math.abs(stroke.x2 - stroke.x1);
          const dimAlpha = alpha * 0.2;

          // Dimension line offset
          const off = isHorizontal ? -12 : 12;
          const dx1 = isHorizontal ? stroke.x1 : stroke.x1 + off;
          const dy1 = isHorizontal ? stroke.y1 + off : stroke.y1;
          const dx2 = isHorizontal ? stroke.x2 : stroke.x2 + off;
          const dy2 = isHorizontal ? stroke.y2 + off : stroke.y2;

          // Extension lines
          ctx.beginPath();
          ctx.moveTo(stroke.x1, stroke.y1);
          ctx.lineTo(dx1, dy1);
          ctx.moveTo(stroke.x2, stroke.y2);
          ctx.lineTo(dx2, dy2);
          ctx.strokeStyle = `rgba(${G.r}, ${G.g}, ${G.b}, ${dimAlpha})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();

          // Dimension line with arrows
          ctx.beginPath();
          ctx.moveTo(dx1, dy1);
          ctx.lineTo(dx2, dy2);
          ctx.strokeStyle = `rgba(${G.r}, ${G.g}, ${G.b}, ${dimAlpha})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();

          // Arrow tips
          const arrowSize = 4;
          const angle = Math.atan2(dy2 - dy1, dx2 - dx1);
          for (const [px, py, dir] of [[dx1, dy1, 1], [dx2, dy2, -1]] as [number, number, number][]) {
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(px + Math.cos(angle + 0.4) * arrowSize * dir, py + Math.sin(angle + 0.4) * arrowSize * dir);
            ctx.moveTo(px, py);
            ctx.lineTo(px + Math.cos(angle - 0.4) * arrowSize * dir, py + Math.sin(angle - 0.4) * arrowSize * dir);
            ctx.strokeStyle = `rgba(${G.r}, ${G.g}, ${G.b}, ${dimAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }

          // Midpoint marker
          const mmx = isHorizontal ? mx : mx + off;
          const mmy = isHorizontal ? my + off : my;
          ctx.beginPath();
          ctx.arc(mmx, mmy, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${G.r}, ${G.g}, ${G.b}, ${dimAlpha * 1.5})`;
          ctx.fill();
        }
      }

      // --- Draw corners ---
      for (let c = corners.length - 1; c >= 0; c--) {
        const corner = corners[c];

        // Fade in
        if (!corner.fading && corner.alpha < 0.35) {
          corner.alpha = Math.min(0.35, corner.alpha + 0.008);
        } else if (!corner.fading) {
          corner.holdTime -= 1;
          if (corner.holdTime <= 0) corner.fading = true;
        }

        if (corner.fading) {
          corner.alpha -= 0.006;
          if (corner.alpha <= 0) { corners.splice(c, 1); continue; }
        }

        const size = 8;
        const a = corner.alpha;
        ctx.strokeStyle = `rgba(${G.r}, ${G.g}, ${G.b}, ${a})`;
        ctx.lineWidth = 1;

        // Top-left bracket shape (rotated based on position)
        ctx.beginPath();
        ctx.moveTo(corner.x - size, corner.y);
        ctx.lineTo(corner.x, corner.y);
        ctx.lineTo(corner.x, corner.y - size);
        ctx.stroke();

        // Crosshair dot
        ctx.beginPath();
        ctx.arc(corner.x, corner.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${G.r}, ${G.g}, ${G.b}, ${a * 1.5})`;
        ctx.fill();
      }

      // --- Draw dimension labels ---
      for (let d = dimLabels.length - 1; d >= 0; d--) {
        const label = dimLabels[d];

        if (!label.fading && label.alpha < 0.3) {
          label.alpha = Math.min(0.3, label.alpha + 0.006);
        } else if (!label.fading) {
          label.holdTime -= 1;
          if (label.holdTime <= 0) label.fading = true;
        }

        if (label.fading) {
          label.alpha -= 0.005;
          if (label.alpha <= 0) { dimLabels.splice(d, 1); continue; }
        }

        ctx.save();
        ctx.translate(label.x, label.y);
        if (label.vertical) ctx.rotate(-Math.PI / 2);
        ctx.font = '9px ui-monospace, monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = `rgba(${G.r}, ${G.g}, ${G.b}, ${label.alpha})`;
        ctx.fillText(label.text, 0, 0);
        ctx.restore();
      }

      // --- Draw snap pulses ---
      for (let p = snapPulses.length - 1; p >= 0; p--) {
        const pulse = snapPulses[p];
        pulse.radius += 0.5;
        pulse.alpha -= 0.008;

        if (pulse.alpha <= 0 || pulse.radius >= pulse.maxRadius) {
          snapPulses.splice(p, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(pulse.x, pulse.y, pulse.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${G.r}, ${G.g}, ${G.b}, ${pulse.alpha * 0.4})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Inner dot
        ctx.beginPath();
        ctx.arc(pulse.x, pulse.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${G.r}, ${G.g}, ${G.b}, ${pulse.alpha})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [zones]);

  return (
    <canvas
      ref={canvasRef}
      className={cn('absolute inset-0 pointer-events-none', className)}
      style={{ width: '100%', height: '100%' }}
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
