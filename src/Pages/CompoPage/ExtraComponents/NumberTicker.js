import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import bgref from '../../../components/Assest_Used/textures/Bg_Shades/CubeBgAbout.png';

const NumberTicker = () => {
  const [projectCount, setProjectCount] = useState(0);
  const [happyClientCount, setHappyClientCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);
  const [hoursSupportCount, setHoursSupportCount] = useState(0);
  const [additionalStatCount, setAdditionalStatCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const maxValues = {
    projectCount: 15,
    happyClientCount: 3,
    experienceCount: 2,
    hoursSupportCount: 1320,
    additionalStatCount: 12,
  };

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

  useEffect(() => {
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
    const updateTicker = () => {
      setProjectCount(prev => (prev < maxValues.projectCount ? prev + 1 : prev));
      setHappyClientCount(prev => (prev < maxValues.happyClientCount ? prev + 1 : prev));
      setExperienceCount(prev => (prev < maxValues.experienceCount ? prev + 1 : prev));
      setHoursSupportCount(prev => (prev < maxValues.hoursSupportCount ? prev + 6 : prev));
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
    backgroundImage: `url(${bgref})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    minHeight: '100vh',
    overflow: 'hidden',
  };

  const rowStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    maxWidth: '1000px',
    flexWrap: 'wrap',
    marginTop: '5.5rem',
  };

  const itemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10px',
    padding: '15px',
    borderRadius: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0)',
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
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '0.2rem',
    fontFamily: "'Tangerine', cursive",
  };

  const valueStyle = {
    fontSize: '2.2rem',
    fontWeight: 'bold',
    color: '#ff4500',
    fontFamily: "'Vidaloka', serif",
  };

  // Responsive media query for smaller screens
  const responsiveStyle = `
    @media (max-width: 1024px) {
      .ticker-row {
        flex-wrap: nowrap;
        justify-content: space-between;
      }
      .ticker-item {
        width: 120px;
        margin: 5px;
        padding: 10px;
      }
      .ticker-label {
        font-size: 14px;
      }
      .ticker-value {
        font-size: 18px;
      }
    }

    @media (max-width: 768px) {
      .ticker-row {
        justify-content: space-around;
      }
      .ticker-item {
        width: 100px;
        margin: 3px;
        padding: 8px;
      }
      .ticker-label {
        font-size: 12px;
      }
      .ticker-value {
        font-size: 16px;
      }
    }
  `;

  return (
    <div style={containerStyle} ref={containerRef}>
      <style>{responsiveStyle}</style>
      <div className="ticker-row" style={rowStyle}>
        <div ref={ref1} className="ticker-item" style={{ ...itemStyle, ':hover': itemHoverStyle, opacity: inView1 ? 1 : 0, transform: inView1 ? 'translateY(0)' : 'translateY(-50px)', transition: `opacity 1.25s ease-out 0.4s, transform 1.25s ease-out 0.4s` }}>
          <div className="ticker-label" style={labelStyle}>Projects:</div>
          <div className="ticker-value" style={valueStyle}>{projectCount}+</div>
        </div>
        <div className="ticker-item" style={{ ...itemStyle, ':hover': itemHoverStyle, opacity: inView1 ? 1 : 0, transform: inView1 ? 'translateY(0)' : 'translateY(-50px)', transition: `opacity 1.25s ease-out 0.9s, transform 1.25s ease-out 0.9s` }}>
          <div className="ticker-label" style={labelStyle}>Happy Clients:</div>
          <div className="ticker-value" style={valueStyle}>{happyClientCount}</div>
        </div>
        <div className="ticker-item" style={{ ...itemStyle, ':hover': itemHoverStyle, opacity: inView1 ? 1 : 0, transform: inView1 ? 'translateY(0)' : 'translateY(-50px)', transition: `opacity 1.25s ease-out 1.4s, transform 1.25s ease-out 1.4s` }}>
          <div className="ticker-label" style={labelStyle}>Experience:</div>
          <div className="ticker-value" style={valueStyle}>{experienceCount}+ yrs</div>
        </div>
        <div className="ticker-item" style={{ ...itemStyle, ':hover': itemHoverStyle, opacity: inView1 ? 1 : 0, transform: inView1 ? 'translateY(0)' : 'translateY(-50px)', transition: `opacity 1.25s ease-out 1.9s, transform 1.25s ease-out 1.9s` }}>
          <div className="ticker-label" style={labelStyle}>Support Hours:</div>
          <div className="ticker-value" style={valueStyle}>{hoursSupportCount}+</div>
        </div>
        <div className="ticker-item" style={{ ...itemStyle, ':hover': itemHoverStyle, opacity: inView1 ? 1 : 0, transform: inView1 ? 'translateY(0)' : 'translateY(-50px)', transition: `opacity 1.25s ease-out 2.4s, transform 1.25s ease-out 2.4s` }}>
          <div className="ticker-label" style={labelStyle}>Languages:</div>
          <div className="ticker-value" style={valueStyle}>{additionalStatCount}+</div>
        </div>
      </div>
    </div>
  );
};

export default NumberTicker;
