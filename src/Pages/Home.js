import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import HomeMobi from './CompoPage/MobiVersion/HomeMobi';
import HomePc from './CompoPage/PcVersion/HomePc';
import { Helmet } from 'react-helmet';

const About = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
    <Helmet>
        <title>Home | Portfolio - Ujjwal</title>
    </Helmet>
    
      <div>
        {isMobile ? <HomeMobi /> : <HomePc />}
      </div>
    </>
  );
};

export default About;
