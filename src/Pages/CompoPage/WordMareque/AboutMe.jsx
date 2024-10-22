import React, {useEffect} from "react";
import { motion } from "framer-motion";

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

export default function AboutMe({ isExpanded }) {
  const content = {
    container: {
      font: `monospace`,
      fontSize: '14px',
      color: 'white',
      padding: '1rem',
      marginLeft: '0',
      marginBottom: '1rem',
      textAlign: 'left',
      display: 'block',
      backgroundColor: 'transparent',
      backdropFilter: 'blur(7px)',
      WebkitBackdropFilter: 'blur(7px)',
      maxWidth: '100%',
      height: 'auto',
      aspectRatio: 'attr(width) / attr(height)',
      border: '0.1px solid rgb(100, 100, 100)',
      borderRadius: '10px',
    },
    }

    const textVariant = (delay) => ({
      hidden: { y: -50, opacity: 0 },
      show: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", duration: 1.25, delay: delay },
      },
    });

    useEffect(() => {
      const styleElement = document.createElement('style');
      styleElement.innerHTML = spaceboardsFont + Home3Style;
      document.head.appendChild(styleElement);
      
      return () => {
        document.head.removeChild(styleElement);
      };
    }, []);

  return (
    <>
      <motion.div
        variants={textVariant(8)}
        initial="hidden"
        animate="show"
      >
      <div style={isExpanded ? {display: "none"} : content.container}>
        <motion.div
          variants={textVariant(8.4)}
          initial="hidden"
          animate="show"
        >
        <div className="home3">
          About Me
        </div>
        </motion.div>
        <motion.div
          variants={textVariant(8.8)}
          initial="hidden"
          animate="show"
        >
        <div>
          <br />
          I pursuing my graduation with a degree in Information & Technology, from University GGSIPU. After realizing that programming is where my passion lies, I decided to pursue in Cs related field and I'm currently a 3rd year student at the College of Engineering, Delhi. <br/>
          I have acquired skills in Web Development using React, TypeScript, Django and I'm currently expanding my knowledge in various areas.
        </div>
        </motion.div>
      </div>
      </motion.div>
    </>
  );
};

