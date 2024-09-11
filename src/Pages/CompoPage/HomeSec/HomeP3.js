import React, { useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from "framer-motion";

import AboutCardSty from '../AboutCard/About';
import {AnimatedListDemo} from '../ExtraComponents/AnimatedListDemo';
import { cover } from 'three/src/extras/TextureUtils';
import bgref from '../../../components/Assest_Used/textures/Bg_Shades/CubeBgAbout.png';

const homePcContainer = {
  position: "absolute",
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  backgroundImage: `url(${bgref})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative', 
  zIndex: 1,
};

const splineModel = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  zIndex: 1,
};

const AboutCard = {
  position: "absolute",
  zIndex: 10,
  marginBottom: '15rem',
};

// const AboutCard = {
//   position: "absolute",
//   zIndex: 2,
//   marginRight: "30px",
//   marginTop: "50px",
//   top: "20px",
//   right: "30px",
//   height: "74%",
//   width: "26%",
// };

// const rightSideContainer = {
//   position: "absolute",
//   top: "20px",
//   right: "20px",
//   height: "74%",
//   width: "26%",
//   fontSize: "large",
//   zIndex: 5,
//   color: "rgb(240, 2, 149)",
//   background: "transparent",
//   pointerEvents: "none",
//   padding: "4px",
//   marginTop: "100px",
//   borderRadius: "8px",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   alignItems: "center",
// };

// const spaceboardsFont = `
//   @font-face {
//     font-family: 'Spaceboards';
//     src: url('/fonts/Spaceboards.otf') format('opentype');
//   }
// `;

// const Home3Style = `
//   .home3 {
//     font-family: 'Spaceboards', sans-serif;
//     font-size: 3rem;
//     font-weight: bold;
//     background: linear-gradient(90deg, #ff7f00, #ff0000, #ff7f00, #ff0000);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     animation: gradient 1.5s infinite;
//     letter-spacing: 0.1rem;
//     background-size: 200% 200%;
//   }

//   @keyframes gradient {
//     0% {
//       background-position: 0% 50%;
//     }
//     50% {
//       background-position: 100% 50%;
//     }
//     100% {
//       background-position: 0% 50%;
//     }
//   }

//   @keyframes glow {
//     0% {
//       text-shadow: 
//         0 0 0 rgba(255, 127, 0, 0.7), 
//         0 0 0 rgba(255, 127, 0, 0.7), 
//         0 0 0 rgba(255, 0, 0, 0.7), 
//         0 0 0 rgba(255, 0, 0, 0.7), 
//         0 0 0 rgba(255, 127, 0, 0.5), 
//         0 0 0 rgba(255, 0, 0, 0.5);
//     }
//     100% {
//       text-shadow: 
//         0 0 1px rgba(255, 127, 0, 1), 
//         0 0 2px rgba(255, 127, 0, 1), 
//         0 0 5px rgba(255, 0, 0, 1), 
//         0 0 8px rgba(255, 0, 0, 1), 
//         0 0 12px rgba(255, 127, 0, 0.7), 
//         0 0 15px rgba(255, 0, 0, 0.7);
//     }
//   }
// `;

const textVariant = (delay) => ({
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.25, delay: delay },
  },
});

function Home() {
  // useEffect(() => {
  //   const styleElement = document.createElement('style');
  //   styleElement.innerHTML = spaceboardsFont + Home3Style;
  //   document.head.appendChild(styleElement);
    
  //   return () => {
  //     document.head.removeChild(styleElement);
  //   };
  // }, []);

  return (
    <div style={homePcContainer}>
      <Spline style={splineModel} scene="https://prod.spline.design/QhiTZ1nWiX-4y93c/scene.splinecode" />
      {/* <Spline style={splineModel} scene="https://prod.spline.design/yF0tNNwe0CsgeJWs/scene.splinecode" /> */}
      {/* <div style={rightSideContainer}> 
        <motion.div variants={textVariant(2.5)} initial="hidden" animate="show"> 
          <div className="home3" style={{ textAlign: 'center'}}>
            Show-Casing
          </div> 
        </motion.div>
        <motion.div variants={textVariant(4)} initial="hidden" animate="show">
          <AnimatedListDemo />
        </motion.div>
      </div> */}
      <div className='AboutCard'>
      <motion.div variants={textVariant(1)} initial="hidden" animate="show"> 
        <AboutCardSty />
      </motion.div>
      </div>
    </div>
  );
}

export default Home;
