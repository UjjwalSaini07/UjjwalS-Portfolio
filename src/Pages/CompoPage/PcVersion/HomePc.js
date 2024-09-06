import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import useSound from 'use-sound';

import Hero from '../HomeSec/HomeHero';
import Home2 from '../HomeSec/HomeP2';
import Home3 from '../HomeSec/HomeP3';
import NumberTicker from '../ExtraComponents/NumberTicker';
import Footer from './Footer';
import { MarqueeDemo } from '../ExtraComponents/Marquee';
import soundeffect from '../../../components/Assest_Used/Sounds/snap.wav';

const Home = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isFooterInView, setIsFooterInView] = useState(false);
  const heroRef = useRef(null);
  const home2Ref = useRef(null);
  const home3Ref = useRef(null);
  const footerRef = useRef(null);
  const [playSound] = useSound(soundeffect);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const footerOffsetTop = footerRef.current.offsetTop;

      setIsAtTop(scrollY < windowHeight / 2);
      setIsFooterInView(scrollY + windowHeight >= footerOffsetTop);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (direction) => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
  
    if (direction === 'down') {
      if (scrollY < home2Ref.current.offsetTop - windowHeight / 2) {
        home2Ref.current.scrollIntoView({ behavior: 'smooth' });
      } else if (scrollY >= home2Ref.current.offsetTop - windowHeight / 2 && scrollY < home3Ref.current.offsetTop - windowHeight / 2) {
        home3Ref.current.scrollIntoView({ behavior: 'smooth' });
      } else if (scrollY >= home3Ref.current.offsetTop - windowHeight / 2) {
        footerRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (direction === 'up') {
      if (scrollY >= footerRef.current.offsetTop) {
        home3Ref.current.scrollIntoView({ behavior: 'smooth' });
      } else if (scrollY >= home3Ref.current.offsetTop - windowHeight / 2) {
        home2Ref.current.scrollIntoView({ behavior: 'smooth' });
      } else if (scrollY >= home2Ref.current.offsetTop - windowHeight / 2) {
        heroRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };  

  return (
    <>
      <Helmet>
        <title>Home | Portfolio - Ujjwal</title>
      </Helmet>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          ref={heroRef}
          style={{ height: '100vh', border: 'none', margin: '0', padding: '0' }}
        >
          <Hero />
        </div>
        <div
          ref={home2Ref}
          style={{ height: '100vh', border: 'none', margin: '0', padding: '0' }}
        >
          <Home3 />
        </div>
        <div
          ref={home3Ref}
          style={{ height: '100vh', border: 'none', margin: '0', padding: '0' }}
        >
          <Home2 />
        </div>
        <div
          ref={footerRef}
          style={{ height: '30vh', border: 'none', margin: '0', padding: '0' }}
        >
          <NumberTicker />
        </div>
        <div
          ref={footerRef}
          style={{ height: '46vh', border: 'none', margin: '0', padding: '0' }}
        >
          <MarqueeDemo />
        </div>
        <div
          ref={footerRef}
          style={{ height: '24vh', border: 'none', margin: '0', padding: '0' }}
        >
          <Footer />
        </div>
      </div>

      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          left: isFooterInView ? '-40%' : '50%',
          transform: isFooterInView ? 'none' : 'translateX(-50%)',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <motion.i
          className={`fa-solid fa-arrow-up ${isAtTop || isFooterInView ? 'hidden' : ''}`}
          onClick={() => {
            scrollToSection('up');
            playSound();
          }}
          style={{
            fontSize: '30px',
            color: '#fff',
            cursor: 'pointer',
            marginBottom: '10px',
            transition: 'transform 0.3s ease',
          }}
          whileHover={{ scale: 1.2, rotate: -10 }}
          whileTap={{ scale: 0.9 }}
        />
        <motion.i
          className={`fa-solid fa-arrow-down ${!isAtTop || isFooterInView ? 'hidden' : ''}`}
          onClick={() => {
            scrollToSection('down');
            playSound();
          }}
          style={{
            fontSize: '30px',
            color: '#fff',
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
          }}
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
        />
      </div>
    </>
  );
};

export default Home;
