import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Spline from '@splinetool/react-spline';
import Hero from './CompoPage/HomeHero';
import Home2 from './CompoPage/HomeP2';

import Footer from './CompoPage/Footer';

const homefooter = {
  position: "absolute",
  bottom: 20,
  width: "100%",
};

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
  
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Home | Portfolio - Ujjwal</title>
      </Helmet>

      {/* <Hero /> */}

      <Footer className="homefooter"/>

      {/* <Home2 /> */}
      
    </>
  );
};

export default Home;