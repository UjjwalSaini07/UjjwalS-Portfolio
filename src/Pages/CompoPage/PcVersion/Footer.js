import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useSound from 'use-sound';
import { useInView } from 'react-intersection-observer';

import UsLogo from '../../../components/Assest_Used/Us_LogoMain.png';
import rocket from '../../../components/Assest_Used/GIFs/rocketemoji.gif';
import handshake from '../../../components/Assest_Used/GIFs/handshake.gif';
import soundeffect1 from '../../../components/Assest_Used/Sounds/base.mp3';
import soundeffect2 from '../../../components/Assest_Used/Sounds/select-click.wav';
import bgref from '../../../components/Assest_Used/textures/Bg_Shades/CubeBgAbout.png';

const footerStyles = {
  padding: "2rem 4rem",
  // background: "#020214",
  backgroundImage: `url(${bgref})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: "#fff",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  boxShadow: "0 -5px 15px rgba(0, 0, 0, 0.5)",
};

const leftSectionStyles = {
  display: "flex",
  alignItems: "center",
  maxWidth: "50%",
};

const paragraphContainerStyles = {
  display: "flex",
  flexDirection: "column", // Stack paragraph below heading
  justifyContent: "center", // Center paragraph content
};

const shareStyles = {
  display: "flex",
  gap: "1.5rem",
  flexDirection: "column",  // Ensure the text and icons are stacked vertically
  alignItems: "center",
  marginRight: "2rem",
};

const shareLinkStyles = {
  height: "3.5rem",
  width: "3.5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  fontSize: "1.9rem",
  background: "linear-gradient(135deg, #ffae00, #ffcc33)",
  color: "#020213",
  boxShadow: "0 0 10px rgba(255, 174, 0, 0.7)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
};

const shareLinkHoverStyles = {
  transform: "scale(1.1)",
  boxShadow: "0 0 15px rgba(255, 174, 0, 0.5)",
  backgroundColor: "transparent",
  color: "#fff",
};

const creditStyles = {
  textAlign: "center",
  fontSize: "1.5rem",
  fontFamily: "'Nunito', sans-serif",
  fontWeight: "600",
  borderTop: ".1rem solid #fff3",
  paddingTop: "1rem",
  marginTop: "2rem",
  width: "100%",
};

const creditLinkStyles = {
  color: "#ffae00",
  textDecoration: "none",
  transition: "color 0.3s ease",
};

const iconStyles = {
  color: "#E90606",
  margin: "0 .3rem",
  fontSize: "1.5rem",
  animation: "pound .35s infinite alternate",
  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
};

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  const [playSound1] = useSound(soundeffect1);
  const [playSound2] = useSound(soundeffect2);

  const { ref: ref0, inView: inView0 } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

  const logoStyles = {
    height: "auto",
    width: "51px",
    marginRight: "1.2rem",
    opacity: inView0 ? 1 : 0,
    transform: inView0 ? 'translateY(0)' : 'translateY(-50px)',
    transition: `opacity 1.25s ease-out 5.2s, transform 1.25s ease-out 5.2s`,
  };

  const boxHeadingStyles = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#ffcc33",
    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
    opacity: inView0 ? 1 : 0,
    transform: inView0 ? 'translateY(0)' : 'translateY(-50px)',
    transition: `opacity 1.25s ease-out 5.8s, transform 1.25s ease-out 5.8s`,
  };

  const ParagraphStyles = {
    fontSize: "1.35rem",
    color: "#e0e0e0",
    marginRight: "1rem",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
    opacity: inView0 ? 1 : 0,
    transform: inView0 ? 'translateY(0)' : 'translateY(-50px)',
    transition: `opacity 1.25s ease-out 6.4s, transform 1.25s ease-out 6.4s`,
  };

  const boxParagraphStyles = {
    fontSize: "1.8rem",
    color: "#e0e0e0",
    marginRight: "1rem",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
    opacity: inView0 ? 1 : 0,
    transform: inView0 ? 'translateY(0)' : 'translateY(-50px)',
    transition: `opacity 1.25s ease-out 7.3s, transform 1.25s ease-out 7.3s`,
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer style={footerStyles}>
      <div style={leftSectionStyles}>
        <img src={UsLogo} alt="UjjwalS Portfolio Logo" onClick={playSound1} ref={ref0} style={logoStyles} />
        <div style={paragraphContainerStyles}>
          <h3 ref={ref0} style={boxHeadingStyles} onClick={() => { playSound1(); handleScrollToTop(); }}>UjjwalS Portfolio</h3>
          <p ref={ref0} style={ParagraphStyles}>
            Thanks for visiting! Let's connect and elevate together.{' '}
            <img src={rocket} alt="Rocket Emoji" ref={ref0} style={{ width: '20px', verticalAlign: 'middle', display: 'inline',opacity: inView0 ? 1 : 0, transform: inView0 ? 'translateY(0)' : 'translateY(-50px)', transition: `opacity 1.25s ease-out 6.8s, transform 1.25s ease-out 6.8s` }} />
          </p>
        </div>
      </div>
      <div style={shareStyles}>
        <p style={boxParagraphStyles}>
          Let's Connect {' '}
          <img src={handshake} alt="HandShake Emoji" ref={ref0} style={{ width: '24px', verticalAlign: 'middle', display: 'inline', opacity: inView0 ? 1 : 0, transform: inView0 ? 'translateY(0)' : 'translateY(-50px)', transition: `opacity 1.25s ease-out 7.6s, transform 1.25s ease-out 7.6s` }} />
        </p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a
            href="https://www.linkedin.com/in/ujjwalsaini07"
            className="fab fa-linkedin"
            ref={ref0}
            style={{...shareLinkStyles,
              opacity: inView0 ? 1 : 0,
              transform: inView0 ? 'translateY(0)' : 'translateY(-50px)',
              transition: 'opacity 1.25s ease-out 8s, transform 1.25s ease-out 8s'}}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={(e) =>
              Object.assign(e.target.style, shareLinkHoverStyles)
            }
            onMouseLeave={(e) =>
              Object.assign(e.target.style, shareLinkStyles)
            }
            onClick={playSound2}
          ></a>
          <a
            href="https://github.com/UjjwalSaini07"
            className="fab fa-github"
            ref={ref0}
            style={{...shareLinkStyles,
              opacity: inView0 ? 1 : 0,
              transform: inView0 ? 'translateY(0)' : 'translateY(-50px)',
              transition: 'opacity 1.25s ease-out 8.4s, transform 1.25s ease-out 8.4s'}}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={(e) =>
              Object.assign(e.target.style, shareLinkHoverStyles)
            }
            onMouseLeave={(e) =>
              Object.assign(e.target.style, shareLinkStyles)
            }
            onClick={playSound2}
          ></a>
          <a
            href="mailto:ujjwalsaini0007@gmail.com"
            className="fas fa-envelope"
            ref={ref0}
            style={{...shareLinkStyles,
              opacity: inView0 ? 1 : 0,
              transform: inView0 ? 'translateY(0)' : 'translateY(-50px)',
              transition: 'opacity 1.25s ease-out 8.8s, transform 1.25s ease-out 8.8s'}}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={(e) =>
              Object.assign(e.target.style, shareLinkHoverStyles)
            }
            onMouseLeave={(e) =>
              Object.assign(e.target.style, shareLinkStyles)
            }
            onClick={playSound2}
          ></a>
          <a
            href="https://x.com/UjjwalSaini0007"
            className="fab fa-twitter"
            ref={ref0}
            style={{...shareLinkStyles,
              opacity: inView0 ? 1 : 0,
              transform: inView0 ? 'translateY(0)' : 'translateY(-50px)',
              transition: 'opacity 1.25s ease-out 9.2s, transform 1.25s ease-out 9.2s'}}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={(e) =>
              Object.assign(e.target.style, shareLinkHoverStyles)
            }
            onMouseLeave={(e) =>
              Object.assign(e.target.style, shareLinkStyles)
            }
            onClick={playSound2}
          ></a>
          <a
            href="tel:+919717899079"
            className="fas fa-phone"
            ref={ref0}
            style={{...shareLinkStyles,
              opacity: inView0 ? 1 : 0,
              transform: inView0 ? 'translateY(0)' : 'translateY(-50px)',
              transition: 'opacity 1.25s ease-out 9.6s, transform 1.25s ease-out 9.6s'}}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={(e) =>
              Object.assign(e.target.style, shareLinkHoverStyles)
            }
            onMouseLeave={(e) =>
              Object.assign(e.target.style, shareLinkStyles)
            }
            onClick={playSound2}
          ></a>
        </div>
      </div>
      <h1 className="credit" ref={ref0} style={{...creditStyles, opacity: inView0 ? 1 : 0, transform: inView0 ? 'translateY(0)' : 'translateY(-50px)', transition: 'opacity 1.25s ease-out 10.1s, transform 1.25s ease-out 10.1s'}}>
        Designed with <i className="fa fa-heart pulse" style={iconStyles}></i>{" "}
        by{" "}
        <a
          href="https://www.linkedin.com/in/ujjwalsaini07"
          ref={ref0}
          style={{...creditLinkStyles, opacity: inView0 ? 1 : 0, transform: inView0 ? 'translateY(0)' : 'translateY(-50px)', transition: 'opacity 1.25s ease-out 10.5s, transform 1.25s ease-out 10.5s'}}
          onMouseEnter={(e) => (e.target.style.color = "#ffcc33")}
          onMouseLeave={(e) => (e.target.style.color = "#ffae00")}
          onClick={playSound1}
        >
          Ujjwal Saini
        </a>
      </h1>
    </footer>
  );
};

export default Home;
