import React from "react";

import AboutMe from "./AboutMe";
import AboutCards from "./AboutCards";

export default function AboutDetails({ isExpanded, setExpanded }) {
  const container = {
    flex: 4,
    padding: '1rem',
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
    background: 'transparent',
    borderRadius: '0 1.5rem 1.5rem 0',
    overflow: 'hidden',
    zIndex: 2,
  };
  
  return (
    <div style={container} onMouseLeave={() => setExpanded(false)}>
      <AboutMe isExpanded={isExpanded} />
      <AboutCards isExpanded={isExpanded} setExpanded={setExpanded} />
    </div>
  );
};
