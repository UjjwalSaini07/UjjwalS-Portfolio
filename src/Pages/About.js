import React from 'react';
import { useMediaQuery } from 'react-responsive';
import AboutMobi from './AboutMobi';
import AboutPc from './AboutPC';

const About = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div>
      {isMobile ? <AboutMobi /> : <AboutPc />}
    </div>
  );
};

export default About;
