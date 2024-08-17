import React, { useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import {AnimatedListDemo} from './AnimatedListDemo';

const homePcContainer = {
  position: "absolute",
  width: "100%",
  height: "100vh",
  overflow: "hidden",
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

const rightSideContainer = {
  position: "absolute",
  top: "20px",
  right: "30px",
  height: "68%",
  width: "26%",
  fontSize: "large",
  zIndex: 5,
  color: "rgb(240, 2, 149)",
  background: "transparent",
  // background: "#ff3636",
  padding: "4px",
  marginTop: "120px",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const spaceboardsFont = `
  @font-face {
    font-family: 'Spaceboards';
    src: url('/fonts/Spaceboards.otf') format('opentype');
  }
`;

const Home3Style = `
  .home3 {
    font-family: 'Spaceboards', sans-serif;
    font-size: 3rem;
    font-weight: bold;
    background: linear-gradient(90deg, #ff7f00, #ff0000, #ff7f00, #ff0000);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient 1.5s infinite;
    letter-spacing: 0.1rem;
    background-size: 200% 200%;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes glow {
    0% {
      text-shadow: 
        0 0 0 rgba(255, 127, 0, 0.7), 
        0 0 0 rgba(255, 127, 0, 0.7), 
        0 0 0 rgba(255, 0, 0, 0.7), 
        0 0 0 rgba(255, 0, 0, 0.7), 
        0 0 0 rgba(255, 127, 0, 0.5), 
        0 0 0 rgba(255, 0, 0, 0.5);
    }
    100% {
      text-shadow: 
        0 0 1px rgba(255, 127, 0, 1), 
        0 0 2px rgba(255, 127, 0, 1), 
        0 0 5px rgba(255, 0, 0, 1), 
        0 0 8px rgba(255, 0, 0, 1), 
        0 0 12px rgba(255, 127, 0, 0.7), 
        0 0 15px rgba(255, 0, 0, 0.7);
    }
  }
`;

function Home() {
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = spaceboardsFont + Home3Style;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div style={homePcContainer}>
      <Spline style={splineModel} scene="https://prod.spline.design/yF0tNNwe0CsgeJWs/scene.splinecode" />
      {/* This is an Iron Suited Man Pointed towards the polarized side */}
      {/* <Spline style={splineModel} scene="https://prod.spline.design/e-hwKBI8zlLCial1/scene.splinecode" /> */}
      <div style={rightSideContainer}>  
        <div className="home3" style={{ textAlign: 'center'}}>
          Show-Casing
        </div> 
        <AnimatedListDemo />
      </div>
    </div>
  );
}

export default Home;
