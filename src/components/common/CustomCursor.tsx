import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Check if device is mobile/touch
    const isMobile = window.matchMedia('(max-width: 768px)').matches || 'ontouchstart' in window;
    if (isMobile) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let followerX = 0;
    let followerY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateCursor = () => {
      // Main cursor - faster follow
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;
      cursorX += dx * 0.3;
      cursorY += dy * 0.3;
      
      // Follower - slower follow
      const fdx = mouseX - followerX;
      const fdy = mouseY - followerY;
      followerX += fdx * 0.15;
      followerY += fdy * 0.15;

      // Update CSS custom properties for the pseudo-elements
      document.documentElement.style.setProperty('--cursor-x', cursorX + 'px');
      document.documentElement.style.setProperty('--cursor-y', cursorY + 'px');
      document.documentElement.style.setProperty('--follower-x', followerX + 'px');
      document.documentElement.style.setProperty('--follower-y', followerY + 'px');

      requestAnimationFrame(animateCursor);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null; // No DOM elements needed, using CSS pseudo-elements
};

export default CustomCursor;