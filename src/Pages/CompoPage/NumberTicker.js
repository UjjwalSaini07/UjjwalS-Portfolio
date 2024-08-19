import React, { useState, useEffect, useRef } from 'react';

const NumberTicker = () => {
  const [projectCount, setProjectCount] = useState(0);
  const [happyClientCount, setHappyClientCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);
  const [hoursSupportCount, setHoursSupportCount] = useState(0);
  const [additionalStatCount, setAdditionalStatCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  // Define maximum values for each statistic
  const maxValues = {
    projectCount: 15,
    happyClientCount: 3,
    experienceCount: 2,
    hoursSupportCount: 1320,
    additionalStatCount: 12,
  };

  useEffect(() => {
    // IntersectionObserver to check if the component is visible
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Function to handle ticker updates
    const updateTicker = () => {
      setProjectCount(prev => (prev < maxValues.projectCount ? prev + 1 : prev));
      setHappyClientCount(prev => (prev < maxValues.happyClientCount ? prev + 1 : prev));
      setExperienceCount(prev => (prev < maxValues.experienceCount ? prev + 1 : prev));
      setHoursSupportCount(prev => (prev < maxValues.hoursSupportCount ? prev + 6 : prev)); // 2x speed
      setAdditionalStatCount(prev => (prev < maxValues.additionalStatCount ? prev + 1 : prev));
    };

    const interval = isVisible && document.visibilityState === 'visible'
      ? setInterval(updateTicker, 100) 
      : null;

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && isVisible) {
        setInterval(updateTicker, 100);
      } else {
        clearInterval(interval);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isVisible]);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#020214',
    color: '#fff',
    minHeight: '100vh',
    overflow: 'hidden',
  };

  const rowStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '70%',
    maxWidth: '1000px',
    flexWrap: 'wrap',
    marginTop: '58px',
  };

    const itemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10px',
    padding: '15px',
    borderRadius: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0)', // Fully transparent background
    color: '#fff',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0)', 
    width: '160px',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  };
  

  const itemHoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
  };

  const labelStyle = {
    fontSize: '16.5px',
    fontWeight: 'bold',
    marginBottom: '5px',
  };

  const valueStyle = {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#ff4500',
  };

  return (
    <div style={containerStyle} ref={containerRef}>
      <div style={rowStyle}>
        <div style={{ ...itemStyle, ':hover': itemHoverStyle }}>
          <div style={labelStyle}>Projects:</div>
          <div style={valueStyle}>{projectCount}+</div>
        </div>
        <div style={{ ...itemStyle, ':hover': itemHoverStyle }}>
          <div style={labelStyle}>Happy Clients:</div>
          <div style={valueStyle}>{happyClientCount}</div>
        </div>
        <div style={{ ...itemStyle, ':hover': itemHoverStyle }}>
          <div style={labelStyle}>Experience:</div>
          <div style={valueStyle}>{experienceCount}+ yrs</div>
        </div>
        <div style={{ ...itemStyle, ':hover': itemHoverStyle }}>
          <div style={labelStyle}>Support Hours:</div>
          <div style={valueStyle}>{hoursSupportCount}+</div>
        </div>
        <div style={{ ...itemStyle, ':hover': itemHoverStyle }}>
          <div style={labelStyle}>Languages:</div>
          <div style={valueStyle}>{additionalStatCount}+</div>
        </div>
      </div>
    </div>
  );
};

export default NumberTicker;