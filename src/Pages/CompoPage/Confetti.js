import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

const ConfettiComponent = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    setShowConfetti(true);

    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 8000);

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    }; // Cleanup the timer and resize listener on component unmount
  }, []);

  return (
    <div style={{ 
      position: 'absolute',
      top: 0, 
      left:0,
      width: '100vw', 
      height: '120vh', 
    //   zIndex: 1, 
      pointerEvents: 'none'
    }}>
      {showConfetti && <Confetti width={windowSize.width} height={windowSize.height} />}
    </div>
  );
};

export default ConfettiComponent;
