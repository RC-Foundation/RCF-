import React, { useEffect, useRef } from 'react';

interface ParticleSystemProps {
  trigger?: boolean;
  x?: number;
  y?: number;
}

const ParticleSystem: React.FC<ParticleSystemProps> = ({ trigger, x = 0, y = 0 }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const createParticle = (clientX: number, clientY: number) => {
    if (!containerRef.current) return;

    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = `${clientX + (Math.random() - 0.5) * 20}px`;
    particle.style.top = `${clientY + (Math.random() - 0.5) * 20}px`;
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
      particle.remove();
    }, 2000);
  };

  useEffect(() => {
    if (trigger && x && y) {
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          createParticle(x, y);
        }, i * 100);
      }
    }
  }, [trigger, x, y]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      createParticle(e.clientX, e.clientY);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-50" />;
};

export default ParticleSystem;