import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import BIRDS from 'vanta/dist/vanta.birds.min';
import { Typewriter } from "react-simple-typewriter";
import { useSpring, animated } from '@react-spring/web';

import img1 from './CompoPage/AssetPic/img2.jpg';

const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText: "font-black text-white text-[30px] leading-[32px] mt-12",
};

const typerStyle = {
  width: "100%",
  marginTop: "6px",
  fontSize: "2.6rem",
  color: "#02f202",
  fontWeight: "500",
  display: "inline-block",
};

const Home = () => {
  const vantaRef = useRef(null);

  const bounce = useSpring({
    from: { transform: 'translate3d(0, -80px, 0)' },
    to: { transform: 'translate3d(0, 0, 0)' },
    config: { tension: 100, friction: 7 },
  });

  const typewriterBounce = useSpring({
    from: { transform: 'translate3d(0, -50px, 0)' },
    to: { transform: 'translate3d(0, 0, 0)' },
    config: { tension: 120, friction: 2 },
  });

  useEffect(() => {
    const vantaEffect = BIRDS({
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      backgroundColor: 0x030321,
      colorMode: "variance",
      birdSize: 1.60,
      speedLimit: 4.00,
      separation: 87.00,
      alignment: 44.00,
      cohesion: 38.00
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <section style={Lowerstyles.home} id="home" ref={vantaRef}>
      <div style={Lowerstyles.image}>
        <img draggable="false" style={Lowerstyles.tilt} src={img1} alt="Profile" />
      </div>
      <div>
        <animated.h1 style={bounce} className={`${styles.heroHeadText} text-white`}>
          Hi, I'm <span className="text-[#e73e0d]">Ujjwal</span>
        </animated.h1>
        <animated.p style={typewriterBounce}>
          <div style={typerStyle}>
            <Typewriter
              words={['Designer', 'Developer', 'Freelancer', 'Gamer']}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={180}
              deleteSpeed={100}
              delaySpeed={1000}
            /> 
          </div>
        </animated.p>
      </div>
      <div style={Lowerstyles.content}>
        <div className="glowbtn">
          <a href="https://drive.google.com/file/d/1dUp-F4kjgafGYs9xX6DUDbi6crlxQqjt/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn"
            style={Lowerstyles.button}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            About Me
          </a>
        </div>
        <div style={Lowerstyles.socials}>
          <ul className="social-icons" style={Lowerstyles.socialIcons}>
            <li><a href="https://www.linkedin.com/in/ujjwal-saini-220960256/" className="fab fa-linkedin" target="_blank" rel="noopener noreferrer"
              style={Lowerstyles.icon}></a></li>
            <li><a href="https://github.com/UjjwalSaini07" className="fab fa-github" target="_blank" rel="noopener noreferrer"
              style={Lowerstyles.icon}></a></li>
            <li><a href="mailto:ujjwalsaini0007@gmail.com" className="fas fa-envelope" target="_blank" rel="noopener noreferrer"
              style={Lowerstyles.icon}></a></li>
            <li><a href="https://x.com/UjjwalSaini0007" className="fab fa-twitter" target="_blank" rel="noopener noreferrer"
              style={Lowerstyles.icon}></a></li>
            <li><a href="tel:+919717899079" className="fas fa-phone" target="_blank" rel="noopener noreferrer"
              style={Lowerstyles.icon}></a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const Lowerstyles = {
  home: {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#080424',
    overflow: 'hidden',
  },
  content: {
    zIndex: 1,
    textAlign: 'center',
    color: '#fff',
  },
  socials: {
    marginTop: '2rem',
  },
  socialIcons: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    padding: 0,
  },
  icon: {
    fontSize: '2.2rem',
    color: '#fff',
    textDecoration: 'none',
    transition: 'transform 0.3s, color 0.3s',
    padding: '8px',
    borderRadius: '50%',
    background: 'transparent',
  },
  iconHover: {
    transform: 'scale(1.2)',
  },
  button: {
    padding: '15px',
    borderRadius: '8px',
    backgroundColor: 'transparent',
    textDecoration: 'none',
    color: '#2abf0a',
    // border: '2px solid #2abf0a',
    border: 'none',
    fontSize: '14px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s, color 0.3s, transform 0.3s',
    textAlign: 'center',
    cursor: 'pointer',
    overflow: 'hidden',
    position: 'relative',
    zIndex: 1,
  },
  image: {
    zIndex: 1,
    marginTop: '30px',
    borderRadius: '50%',
    overflow: 'hidden',
    width: '170px',
    height: '170px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '5px solid #2abf0a',
  },
  tilt: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    objectFit: 'cover',
  },
};

export default Home;
