import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Hero from './CompoPage/HomeHero';
import Home2 from './CompoPage/HomeP2';
import Footer from './CompoPage/Footer';
import { MarqueeDemo } from './Marquee';

const Home = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isFooterInView, setIsFooterInView] = useState(false);
  const heroRef = useRef(null);
  const home2Ref = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      setIsAtTop(scrollY < windowHeight / 2);
      setIsFooterInView(scrollY >= windowHeight * 1.5);
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
      if (scrollY < windowHeight / 2) {
        home2Ref.current.scrollIntoView({ behavior: 'smooth' });
      } else if (scrollY >= windowHeight / 2 && scrollY < windowHeight * 1.5) {
        footerRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (direction === 'up') {
      if (scrollY >= windowHeight * 1.5) {
        home2Ref.current.scrollIntoView({ behavior: 'smooth' });
      } else if (scrollY >= windowHeight / 2 && scrollY < windowHeight * 1.5) {
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
          <Home2 />
        </div>
        <div
          ref={footerRef}
          style={{ height: '50vh', border: 'none', margin: '0', padding: '0' }}
        >
          <MarqueeDemo />
        </div>
        <div
          ref={footerRef}
          style={{ height: '42vh', border: 'none', margin: '0', padding: '0' }}
        >
          <Footer />
        </div>
      </div>

      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          left: isFooterInView ? '4%' : '50%',
          transform: isFooterInView ? 'none' : 'translateX(-50%)',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <motion.i
          className={`fa-solid fa-arrow-up ${isAtTop ? 'hidden' : ''}`}
          onClick={() => scrollToSection('up')}
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
          className={`fa-solid fa-arrow-down ${!isAtTop ? 'hidden' : ''}`}
          onClick={() => scrollToSection('down')}
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


// todo: Basic Without Scrollig Feature
// import React, { useState, useEffect } from 'react';
// import { Helmet } from 'react-helmet';
// import Hero from './CompoPage/HomeHero';
// import Home2 from './CompoPage/HomeP2';
// // import Home3 from './CompoPage/HomeP3';
// import { MarqueeDemo } from './Mreque';
// import Footer from './CompoPage/Footer';

// const Home = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 767);
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <>
//       <Helmet>
//         <title>Home | Portfolio - Ujjwal</title>
//       </Helmet>

//       <div style={{ display: "flex", flexDirection: "column" }}>
//         <div style={{ height: "100vh" , border: 'none', margin: "0", padding: "0"}}>
//           <Hero />
//         </div>
//         <div style={{ height: "100vh" , border: 'none', margin: "0", padding: "0"}}>
//           <Home2 />
//         </div>
//         {/* <div style={{ height: "100vh" , border: 'none', margin: "0", padding: "0"}}>
//           <Home3 />
//         </div> */}
//         <div style={{ height: "50vh" , border: 'none', margin: "0", padding: "0"}}>
//           <MarqueeDemo />
//         </div>
//         <div style={{ height: "42vh", border: 'none' }}>
//           <Footer />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;
