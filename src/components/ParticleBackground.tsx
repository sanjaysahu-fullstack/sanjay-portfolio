import { useEffect, useRef } from 'react';

interface ParticleBackgroundProps {
  theme?: 'dark' | 'light';
}

export default function ParticleBackground({ theme = 'dark' }: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isLight = theme === 'light';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Highly sparse, slowly drifting colorful dust
    const colors = isLight
      ? [
          'rgba(147, 51, 234, ',  // Purple
          'rgba(8, 145, 178, ',   // Cyan
          'rgba(219, 39, 119, ',  // Pink/Rose
          'rgba(202, 138, 4, ',   // Amber
        ]
      : [
          'rgba(168, 85, 247, ', // Purple
          'rgba(6, 182, 212, ',  // Cyan
          'rgba(244, 63, 94, ',  // Rose
          'rgba(234, 179, 8, ',  // Amber
        ];

    const particles: { x: number; y: number; size: number; speedY: number; opacity: number; colorPrefix: string }[] = [];
    const count = 45;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.4,
        speedY: - (Math.random() * 0.12 + 0.04),
        opacity: Math.random() * (isLight ? 0.35 : 0.4) + (isLight ? 0.1 : 0.15),
        colorPrefix: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const render = () => {
      // Cosmic background space colors
      ctx.fillStyle = isLight ? '#f8fafc' : '#070513';
      ctx.fillRect(0, 0, width, height);

      // Soft colorful ambient glow effects (Nebula effects)
      const grad1 = ctx.createRadialGradient(width * 0.2, height * 0.3, 10, width * 0.2, height * 0.3, Math.max(width, height) * 0.4);
      if (isLight) {
        grad1.addColorStop(0, 'rgba(124, 58, 237, 0.025)'); // subtle violet
      } else {
        grad1.addColorStop(0, 'rgba(124, 58, 237, 0.05)'); // subtle violet
      }
      grad1.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const grad2 = ctx.createRadialGradient(width * 0.8, height * 0.7, 10, width * 0.8, height * 0.7, Math.max(width, height) * 0.35);
      if (isLight) {
        grad2.addColorStop(0, 'rgba(6, 182, 212, 0.02)'); // subtle cyan
      } else {
        grad2.addColorStop(0, 'rgba(6, 182, 212, 0.035)'); // subtle cyan
      }
      grad2.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Simple grid lines with extreme low opacity
      ctx.strokeStyle = isLight ? 'rgba(139, 92, 246, 0.025)' : 'rgba(139, 92, 246, 0.015)';
      ctx.lineWidth = 1;
      const gridSize = 64;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Render drifting stars elegantly
      particles.forEach((p) => {
        p.y += p.speedY;
        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }

        ctx.fillStyle = `${p.colorPrefix}${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add dynamic light flare to the brightest stars
        if (p.size > 1.3 && Math.random() > 0.98) {
          ctx.fillStyle = isLight ? `rgba(168, 85, 247, ${p.opacity + 0.1})` : `rgba(255, 255, 255, ${p.opacity + 0.2})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isLight]);

  return (
    <canvas
      id="space-ambient"
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-50 pointer-events-none"
    />
  );
}
