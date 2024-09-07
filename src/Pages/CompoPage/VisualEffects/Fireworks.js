import React, { useEffect, useRef } from 'react';
import Fireworks from 'fireworks-js';

const Firework = () => {
  const canvasRef = useRef(null);
  const fireworksRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      fireworksRef.current = new Fireworks(canvasRef.current, {
        opacity: 0.9,
        acceleration: 1.05,
        friction: 0.98,
        gravity: 1.5,
        particles: 100,
        traceLength: 3,
        traceSpeed: 10,
        explosion: 5,
        hue: { min: 0, max: 360 },
        delay: { min: 20, max: 60 },
        sound: {
          enable: true,
          files: ['path/to/sound.mp3'],
          volume: 0.5,
        },
      });

      fireworksRef.current.start();

      // Stop fireworks after 8 seconds
      const timer = setTimeout(() => {
        fireworksRef.current.stop();
      }, 8000);

      return () => {
        clearTimeout(timer);
        fireworksRef.current.stop();
      };
    }
  }, []);

  return (
    <div style={{ position: 'absolute', width: '100vw', height: '100vh' }}>
      <canvas
        ref={canvasRef}
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          backgroundColor: 'rgba(0, 0, 0, 0)' // Transparent background
        }}
      />
    </div>
  );
};

export default Firework;
