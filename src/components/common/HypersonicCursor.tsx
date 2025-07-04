import React, { useEffect, useRef } from 'react';

interface Shockwave {
  x: number;
  y: number;
  startTime: number;
  id: number;
}

const HypersonicCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shockwaves = useRef<Shockwave[]>([]);
  const animationFrame = useRef<number>();
  const nextId = useRef(0);

  // Configuration
  const config = {
    maxRadius: 400,
    duration: 600, // milliseconds
    thickness: 6,
    falloff: 0.02,
    color: '#17d5FF',
    speed: 3.0,
    opacity: 0.8
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Handle pointer movement
    const handlePointerMove = (e: PointerEvent) => {
      // Check if user prefers reduced motion
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      
      // Add new shockwave
      shockwaves.current.push({
        x: e.clientX,
        y: e.clientY,
        startTime: performance.now(),
        id: nextId.current++
      });

      // Limit number of active shockwaves for performance
      if (shockwaves.current.length > 10) {
        shockwaves.current = shockwaves.current.slice(-10);
      }
    };

    // Animation loop
    const animate = (currentTime: number) => {
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);

      // Update and draw shockwaves
      shockwaves.current = shockwaves.current.filter(shockwave => {
        const elapsed = currentTime - shockwave.startTime;
        const progress = elapsed / config.duration;

        if (progress >= 1) return false; // Remove completed shockwaves

        // Calculate current radius
        const radius = progress * config.maxRadius * config.speed;
        
        // Calculate opacity with steep falloff
        const opacity = config.opacity * (1 - progress) * Math.exp(-progress * 5);

        if (opacity < 0.01) return false; // Remove nearly invisible shockwaves

        // Draw the shockwave ring
        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.strokeStyle = config.color;
        ctx.lineWidth = config.thickness * (1 - progress * 0.5); // Taper thickness
        ctx.shadowColor = config.color;
        ctx.shadowBlur = 10;
        
        ctx.beginPath();
        ctx.arc(shockwave.x, shockwave.y, radius, 0, Math.PI * 2);
        ctx.stroke();
        
        // Add inner glow effect
        ctx.globalAlpha = opacity * 0.3;
        ctx.lineWidth = config.thickness * 2;
        ctx.shadowBlur = 20;
        ctx.stroke();
        
        ctx.restore();

        return true;
      });

      animationFrame.current = requestAnimationFrame(animate);
    };

    // Start animation loop
    animationFrame.current = requestAnimationFrame(animate);

    // Add event listeners
    document.addEventListener('pointermove', handlePointerMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('pointermove', handlePointerMove);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="hypersonic-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'screen'
      }}
    />
  );
};

export default HypersonicCursor;