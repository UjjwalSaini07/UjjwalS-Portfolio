import React, { useState } from "react";
import AboutDetails from "./AboutDetails";
import AboutProfile from "./AboutProfile";

export default function About() {
  const styles = {
    about: {
      margin: 0,
      padding: 0,
    },
    mobileStyle: {
      display: 'block',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      margin: '0 auto',
      width: '100%',
      maxWidth: '100%', 
      overflow: 'hidden',
    },
    mobileScreenStyle: {
      display: 'block',
      position: 'relative',
      zIndex: 1,
      padding: '6px',
      minHeight: '70vh',
      width: '100%',
      marginTop: '40px',
      borderRadius: '1rem',
      background: 'transparent',
      boxShadow: '0 0.1rem 0 #cfcfcf',
      border: '1px solid wheat',
    },
    mobileShadowStyle: {
      position: 'absolute',
      right: '0',
      bottom: '-2.5rem',
      left: '0',
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
        <div className="mobile" style={styles.mobileStyle}>
          <div className="mobile__screen" style={styles.mobileScreenStyle}>
            <AboutProfile />
            <AboutDetails isExpanded={isExpanded} setExpanded={setExpanded} />
          </div>
          <div className="mobile__shadow" style={styles.mobileShadowStyle}></div>
        </div>
      </div>
    </main>
  );
}