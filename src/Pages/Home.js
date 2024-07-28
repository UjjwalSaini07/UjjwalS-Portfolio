import React from 'react';
import { useMediaQuery } from 'react-responsive';
import HomeMobi from './HomeMobi';
import HomePc from './HomePc';
import { Helmet } from 'react-helmet';

const About = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

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
