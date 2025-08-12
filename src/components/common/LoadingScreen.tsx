import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    // Start with a small scale and grow as the counter increases - faster and bigger
    const interval = setInterval(() => {
      setCount((c) => {
        if (c >= 100) {
          clearInterval(interval);
          document.body.classList.add('loaded');

          // Add a slight delay before completing the animation
          setTimeout(() => {
            setDone(true);
          }, 300);

          return 100;
        }

        // Update scale based on count (from 1.0 to 4.0) - bigger scaling
        const newScale = 1.0 + (c / 100) * 3;
        setScale(newScale);

        // Increase counter faster as it progresses
        const increment = Math.max(1, Math.floor(c / 20) + 1);
        return Math.min(c + increment, 100);
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  if (done) return null;

  return (
    <div className="rhizome-loader flex items-center justify-center bg-gradient-to-br from-teal-900 via-indigo-900 to-purple-900 fixed inset-0 z-50">
      <motion.div
        animate={{
          scale: scale,
          opacity: count < 100 ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
        className="counter-container text-center"
      >
        <div className="text-white text-7xl md:text-9xl font-bold tracking-wider">
          {count}
          <span className="text-5xl md:text-7xl">%</span>
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
