import React, { useState } from "react";
import AboutDetails from "./AboutDetails";
import AboutProfile from "./AboutProfile";

export default function About() {
  const styles = {
    about: {
      margin: 0,
      padding: 0,
    },
    closeBtn: {
      position: 'absolute',
      top: '20px',
      left: '90%',
      color: 'white',
      cursor: 'pointer',
      transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
    },
    laptopStyle: {
      display: 'flex',
      justifyContent: 'left',
      alignItems: 'left',
      // position: 'relative',
      position: 'absolute',
      margin: 'auto',
      width: '100%',
      maxWidth: '110rem',
      overflow: 'hidden',
    },
    laptopScreenStyle: {
      display: 'flex',
      position: 'relative',
      zIndex: 1,
      padding: '10px',
      minHeight: '80vh',
      width: '100vw',
      marginTop: '94px',
      borderRadius: '2rem',
      background: 'transparent',
      // backgroundImage: 'linear-gradient(to bottom, #333, #111)',
      boxShadow: '0 0.1rem 0 #cfcfcf',
      border: '1px solid wheat',
    },
    laptopShadowStyle: {
      position: 'absolute',
      right: '-10%',
      bottom: '-2.5rem',
      left: '-10%',
      zIndex: 0,
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
