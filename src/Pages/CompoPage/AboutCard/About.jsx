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
      // background: '#ecf1f7',
      backgroundImage: 'linear-gradient(to bottom, #333, #111)',
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

// Todo: Basic Center out template
// import React, { useState, useEffect } from "react";
// import AboutDetails from "./AboutDetails";
// import AboutProfile from "./AboutProfile";

// export default function About() {
//   const styles = {
//     about: {
//       margin: 0,
//       padding: 0,
//     },
//     closeBtn: {
//       position: 'absolute',
//       top: '20px',
//       left: '90%',
//       color: 'white',
//       cursor: 'pointer',
//       transition: 'all 0.5s cubic-bezier(0.23, 1, 0.320, 1)',
//     },
//     closeBtnHover: {
//       color: 'wheat',
//       paddingLeft: '3px',
//     },
//     svgEdu: {
//       display: 'flex',
//     },
//     achievementsList: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       justifyContent: 'center',
//     },
//     achievementCard: {
//       margin: '5px',
//       borderRadius: '0px',
//       width: '100%',
//       overflow: 'hidden',
//       position: 'relative',
//       cursor: 'pointer',
//       transformStyle: 'preserve-3d',
//       perspective: '1000px',
//       transition: 'all 0.5s cubic-bezier(0.23, 1, 0.320, 1)',
//     },
//     achievementCardHover: {
//       transform: 'rotateY(10deg) rotateX(10deg) scale(1.05)',
//       boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
//     },
//     achievementCardBefore: {
//       content: '""',
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       width: '100%',
//       height: '100%',
//       transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.320, 1)',
//       zIndex: 1,
//     },
//     achievementCardAfter: {
//       content: '""',
//       position: 'absolute',
//       top: 0,
//       right: 0,
//       width: '100%',
//       height: '100%',
//       transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.320, 1)',
//       zIndex: 1,
//     },
//     certificationCard: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       justifyContent: 'center',
//       alignItems: 'center',
//       fontFamily: "'Times New Roman', Times, serif",
//       fontWeight: 'bold',
//     },
//     card: {
//       overflow: 'hidden',
//       position: 'relative',
//       height: '160px',
//       width: '280px',
//       textAlign: 'center',
//       margin: '5px',
//       padding: '3px',
//     },
//     cardContent: {
//       padding: '5px',
//       paddingBottom: '0',
//       margin: '0px',
//       overflow: 'visible',
//     },
//     cardSide: {
//       height: 'auto',
//       transition: 'all 0.8s ease',
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       width: '100%',
//       height: '100%',
//       backfaceVisibility: 'hidden',
//       borderRadius: '3px',
//       overflow: 'hidden',
//       boxShadow: '0 1.5rem 4rem rgba(0, 0, 0, 0.15)',
//     },
//     cardSideFront1: {
//       backgroundSize: 'cover',
//       display: 'flex',
//       flexWrap: 'wrap',
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     cardSideBack: {
//       margin: '0',
//       padding: '0',
//       transform: 'rotateY(180deg)',
//       display: 'flex',
//       flexWrap: 'wrap',
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     cardSideBack1: {
//       background: 'white',
//     },
//     cardHoverFront1: {
//       transform: 'rotateY(-180deg)',
//     },
//     cardHoverBack: {
//       transform: 'rotateY(0)',
//     },
//     laptopStyle: {
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       position: 'relative',
//       margin: 'auto',
//       width: '100%',
//       maxWidth: '110rem',
//       overflow: 'hidden',
//     },
//     laptopScreenStyle: {
//       display: 'flex',
//       position: 'relative',
//       zIndex: 1,
//       padding: '10px',
//       minHeight: '80vh',
//       width: '100vw',
//       marginTop: '78px',
//       borderRadius: '2rem',
//       background: '#ecf1f7',
//       backgroundImage: 'linear-gradient(to bottom, #333, #111)',
//       boxShadow: '0 0.1rem 0 #cfcfcf',
//       border: '1px solid wheat',
//     },
//     laptopShadowStyle: {
//       position: 'absolute',
//       right: '-10%',
//       bottom: '-2.5rem',
//       left: '-10%',
//       zIndex: 0,
//       height: '2rem',
//       background: 'radial-gradient(ellipse closest-side,#000,transparent)',
//       opacity: 0.5,
//     },
//   };

//   const bigScreen = {
//     ...styles
//   };

//   const [currentStyles, setCurrentStyles] = useState(bigScreen);
//   const [isExpanded, setExpanded] = useState(false);

//   return (
//     <main style={styles.about}>
//       <div className="container" id="about">
//         <div className="laptop" style={currentStyles.laptopStyle}>
//           <div className="laptop__screen" style={currentStyles.laptopScreenStyle}>
//             <AboutProfile />
//             <AboutDetails isExpanded={isExpanded} setExpanded={setExpanded} />
//           </div>
//           <div className="laptop__shadow" style={currentStyles.laptopShadowStyle}></div>
//         </div>
//       </div>
//     </main>
//   );
// }
