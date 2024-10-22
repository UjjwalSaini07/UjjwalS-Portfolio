import React, { useState } from "react";
import { useInView } from 'react-intersection-observer';

import AboutDetails from "./AboutDetails";
import AboutProfile from "./AboutProfile";

export default function About() {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: false,
    threshold: 0.1, 
  });

  const styles = {
    about: {
      margin: 0,
      padding: 0,
    },
    laptopStyle: {
      display: 'flex',
      top: "50%", 
      left: "50%",   
      transform: "translate(-50%, -50%)", 
      position: 'absolute',
      margin: 'auto',
      width: '100%',
      maxWidth: '120rem',
      overflow: 'hidden',
      zIndex: 10,
    },
    laptopScreenStyle: {
      display: 'flex',
      position: 'relative',
      zIndex: 10,
      padding: '12px',
      minHeight: '78vh',
      width: '100vw',
      marginTop: '50px',
      borderRadius: '2rem',
      background: 'transparent',
      boxShadow: '0 0.1rem 0 #cfcfcf',
      border: '1px solid wheat',
    },
    laptopShadowStyle: {
      position: 'absolute',
      right: '-10%',
      bottom: '-2.5rem',
      left: '-10%',
      zIndex: 10,
      height: '2rem',
      background: 'radial-gradient(ellipse closest-side,#000,transparent)',
      opacity: 0.5,
    },
  };

  const [isExpanded, setExpanded] = useState(false);

  return (
    <main style={styles.about}>
      <div className="container" id="about">
        <div className="laptop" style={styles.laptopStyle}>
          <div className="laptop__screen" style={styles.laptopScreenStyle}>
            <AboutProfile />
            <AboutDetails isExpanded={isExpanded} setExpanded={setExpanded} />
          </div>
          <div className="laptop__shadow" style={styles.laptopShadowStyle}></div>
        </div>
      </div>
    </main>
  );
}
