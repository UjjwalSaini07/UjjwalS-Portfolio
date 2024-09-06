import React from 'react';
import { useMediaQuery } from 'react-responsive';
import AboutMobi from './CompoPage/MobiVersion/AboutMobi';
import AboutPc from './CompoPage/PcVersion/AboutPC';
import { Helmet } from 'react-helmet';

const About = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
    <Helmet>
        <title>About Me | Portfolio - Ujjwal</title>
    </Helmet>
    
      <div>
        {isMobile ? <AboutMobi /> : <AboutPc />}
      </div>

    </>
  );
};

export default About;
