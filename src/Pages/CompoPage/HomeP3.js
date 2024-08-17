import React from 'react';
import Spline from '@splinetool/react-spline';
import { useSpring, animated } from '@react-spring/web';

const HomePcContainer = {
  position: "absolute",
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  zindex: "1",
};

const spline_model = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  zIndex: "1",
};

const division_overlay = {
  position: "absolute",
  top: "20px",
  width: "62%",
  fontSize: "large",
  left: "30px",
  zIndex: "5",
  color: "rgb(240, 2, 149)",
  background: "transparent",
  padding: "10px",
  borderRadius: "8px",
}

function Home() {
  
  return (
    <div style={HomePcContainer}>
      <Spline style={spline_model} scene="https://prod.spline.design/yF0tNNwe0CsgeJWs/scene.splinecode" />
      {/* This is a Iron Suited Man Pointed towards the polarized side */}
      {/* <Spline style={spline_model} scene="https://prod.spline.design/e-hwKBI8zlLCial1/scene.splinecode" /> */}
      <div style={division_overlay}>   
          <div>

          </div>
      </div>
    </div>
  );
}

export default Home;

