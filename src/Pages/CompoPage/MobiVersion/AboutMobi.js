import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { useSpring, animated } from '@react-spring/web';
import useSound from 'use-sound';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useInView } from 'react-intersection-observer';

import Img1 from '../../../components/Assest_Used/UjjwalImg2.jpg';
import soundeffect from '../../../components/Assest_Used/Sounds/base.mp3';
import bgref from '../../../components/Assest_Used/textures/Bg_Shades/CubeBgAbout.png';
import '../../Styles/AboutMobi.css'; 

const textVariant = (delay) => ({
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.25, delay: delay },
  },
});

// const textVariant = (delay = 0) => ({
//   hidden: { opacity: 0, y: 20 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { delay, duration: 0.5 },
//   },
// });

const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { type: type, delay: delay, duration: duration, ease: "easeOut" },
  },
});

const spaceboardsFont = `
  @font-face {
    font-family: 'Spaceboards';
    src: url('/fonts/Spaceboards.otf') format('opentype');
  }
`;

const aboutMeStyle = `
  .about-me {
    font-family: 'Spaceboards', sans-serif;
    font-weight: bold;
    background: linear-gradient(90deg, #0cffc5, #a939ff, #0cffc5, #a939ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 
      0 0 3px rgba(0, 255, 197, 0.7), 
      0 0 5px rgba(0, 255, 197, 0.7), 
      0 0 7px rgba(169, 57, 255, 0.7), 
      0 0 9px rgba(169, 57, 255, 0.7), 
      0 0 12px rgba(0, 255, 197, 0.5), 
      0 0 15px rgba(169, 57, 255, 0.5);
    margin-left: 4rem;
    animation: gradient 1.8s infinite, glow 1.5s infinite alternate;
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
        0 0 0 rgba(0, 255, 197, 0.7), 
        0 0 0 rgba(0, 255, 197, 0.7), 
        0 0 0 rgba(169, 57, 255, 0.7), 
        0 0 0 rgba(169, 57, 255, 0.7), 
        0 0 0 rgba(0, 255, 197, 0.5), 
        0 0 0 rgba(169, 57, 255, 0.5);
    }
    100% {
      text-shadow: 
        0 0 1px rgba(0, 255, 197, 1), 
        0 0 2px rgba(0, 255, 197, 1), 
        0 0 5px rgba(169, 57, 255, 1), 
        0 0 8px rgba(169, 57, 255, 1), 
        0 0 12px rgba(0, 255, 197, 0.7), 
        0 0 15px rgba(169, 57, 255, 0.7);
    }
  }
`;

const skillsData = [
  { name: 'Python', width: '70%' },
  { name: 'React', width: '75%' },
  { name: 'C++', width: '60%' },
  { name: 'UI/UX', width: '50%' },
  { name: 'SQL', width: '65%' },
  { name: 'Web Dev', width: '88%' },
  { name: 'Django', width: '70%' },
  { name: 'DSA', width: '40%' },
];

const AboutMobi = () => {

  const [playSound] = useSound(soundeffect);

  const bounce = useSpring({
    from: { transform: 'translate3d(0, -180px, 0)' },
    to: { transform: 'translate3d(0, 0, 0)' },
    config: { tension: 150, friction: 3 },
  });

  const [isClicked, setIsClicked] = useState(false);
  const imageContainerRef = useRef(null);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleOutsideClick = (event) => {
    if (imageContainerRef.current && !imageContainerRef.current.contains(event.target)) {
      setIsClicked(false);
    }
  };

  const { ref: ref0, inView: inView0 } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: false,
    threshold: 0.1, 
  });

  const circlePointerStyle = {
    width: '8px',
    height: '8px',
    backgroundColor: '#fff',
    borderRadius: '50%',
    marginRight: '10px',
    opacity: inView2 ? 1 : 0,
    transform: inView2 ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
    transition: 'opacity 1.6s ease-out, transform 2.2s ease-out',
  };

  const progressBarContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '5px',
    marginBottom: '10px',
  };
  
  const progressBarWrapStyle = {
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '5px',
    height: '10px',
    flex: '1',
    position: 'relative',
    marginLeft: '-5px',
    overflow: 'hidden',
    marginRight: '10px',
    opacity: inView2 ? 1 : 0,
    transform: inView2 ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
    transition: 'opacity 4s ease-out, transform 4.5s ease-out',
  };

  const progressBarStyleBase = {
    height: '100%',
    backgroundColor: '#ff00ff',
    borderRadius: '5px',
    position: 'relative',
    opacity: inView2 ? 1 : 0,
    transform: inView2 ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
    transition: 'opacity 4.2s ease-out, transform 6s ease-out',
  };
  
  const pointerStyle = {
    width: '10px',
    height: '10px',
    backgroundColor: '#ff00ff',
    borderRadius: '50%',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: '-5px',
  };
  const aboutinline = {
    backgroundImage: `url(${bgref})`,
    // backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = spaceboardsFont + aboutMeStyle;
    document.head.appendChild(styleElement);

    document.addEventListener('click', handleOutsideClick);
    
    return () => {
      document.head.removeChild(styleElement);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <section className="about" id="about" style={aboutinline}>
      <motion.div
        variants={textVariant(0.8)}
        initial="hidden"
        animate="show"
      >
        <div className="about-me" style={{ textAlign: 'center', marginRight: '3.5rem', fontSize: '4rem', marginBottom: '1.2rem' }}>
          About Me
        </div>
      </motion.div>
      <div className="row">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '70% 0%',
            marginTop: '1.6rem',
            marginBottom: '1.6rem',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <motion.div
            variants={textVariant(1.8)}
            initial="hidden"
            animate="show"
          >
          <div
            ref={imageContainerRef}
            style={{
              width: '100%',
              aspectRatio: '1/1',
              borderRadius: '2rem',
              background: 'linear-gradient(45deg, transparent, #6C63FF, transparent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.3s ease-in-out',
              transform: isClicked ? 'scale(1.05)' : 'scale(1)',
            }}
          >
            <div
              style={{
                borderRadius: '2rem',
                overflow: 'hidden',
                transform: isClicked ? 'rotate(0deg)' : 'rotate(15deg)',
                transition: 'transform 0.6s ease-in-out',
                cursor: 'pointer',
                position: 'relative',
                boxShadow: isClicked ? '0 15px 30px rgba(0, 0, 0, 0.3)' : '0 5px 10px rgba(0, 0, 0, 0.15)',
              }}
              onClick={handleClick}
            >
              <motion.div
                variants={textVariant(3)}
                initial="hidden"
                animate="show"
              >
              <img
                src={Img1}
                alt="Profile"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: isClicked ? 'grayscale(0%)' : 'grayscale(50%)',
                  transform: isClicked ? 'scale(1.1)' : 'scale(1)',
                  transition: 'filter 0.3s ease-in-out, transform 0.6s ease-in-out',
                  borderRadius: '2rem',
                  position: 'relative',
                }}
              />
              </motion.div>
            </div>
          </div>
          </motion.div>
        </div>
        <div className="content">
            <motion.div
              variants={textVariant(3.8)}
              initial="hidden"
              animate="show"
            >
              <h3 style={{
                fontSize: '3.2rem',
              }}>
                Hi, I'm Ujjwal Saini</h3>
              <span className="tag" style={{
                fontSize: '1.9rem',
                color: '#ff00ff',
                fontFamily: "'Vidaloka', serif"
              }}>
                Full Stack Developer | Designer </span>
              <motion.div
                variants={textVariant(4.5)}
                initial="hidden"
                animate="show"
              >
              <p style={{
                fontSize: '1.7rem',
                color: '#ffffff',
                marginTop: '1.6rem',
                fontFamily: "'Open Sans', sans-serif",
                fontStyle: 'italic',
                fontWeight: 400,
                lineHeight: 1.7,
              }}>
                I am Ujjwal, an IT Engineering student passionate about computers and aiming to kickstart a career in Software Development and Web Development. Currently based in Delhi, India, I am pursuing my undergraduate studies in Information Technology at GGSIPU. My enthusiasm lies in enhancing my coding abilities and crafting applications and websites. As a well-organised & collaborative individual,
                I thrive in team environments and enjoy bringing innovative solutions to the table.
                <br/><br/>
                Awesome!! Let's Build the Next Big Thing...
              </p>
              </motion.div>
            </motion.div>
          
          <div className="box-container">
            <motion.div
              variants={textVariant(1.0)}
              initial="hidden"
              animate="show"
            >
              <div className="box">
                <p ref={ref0} style={{opacity: inView0 ? 1 : 0, transform: inView0 ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)', transition: 'opacity 1.5s ease-out, transform 1.5s ease-out'}}><i className="bi bi-person-badge-fill" style={{ fontSize: '1.7rem', color: '#ff00ff', marginRight: '0.5rem'}}></i>
                <span style={{color: '#ff00ff', fontFamily: "'Vidaloka', serif", fontWeight: 500, marginTop: '1rem'}}> Age : </span> 21</p>
                <p  ref={ref0} style={{opacity: inView0 ? 1 : 0, transform: inView0 ? 'translateY(0) scale(1)' : 'translateY(70px) scale(0.7)', transition: 'opacity 4.5s ease-out, transform 3.5s ease-out'}}><i className="bi bi-telephone-fill" style={{ fontSize: '1.7rem', color: '#ff00ff', marginRight: '0.5rem' }}></i>
                <span  style={{color: '#ff00ff', fontFamily: "'Vidaloka', serif", fontWeight: 500, marginTop: '1rem'}}> Phone : </span>
                <a href="tel:+919717899079" target="_blank" rel="noopener noreferrer" style={{ color: '#fcfcfc' }}>+91 97178-99079</a></p>
                <p  ref={ref0} style={{opacity: inView0 ? 1 : 0, transform: inView0 ? 'translateY(0) scale(1)' : 'translateY(70px) scale(0.7)', transition: 'opacity 5s ease-out, transform 4.5s ease-out'}}><i className="bi bi-cake-fill" style={{ fontSize: '1.7rem', color: '#ff00ff', marginRight: '0.5rem' }}></i>
                <span  style={{color: '#ff00ff', fontFamily: "'Vidaloka', serif", fontWeight: 500, marginTop: '1rem'}}> Birthday : </span> 7th Feburary</p>
              </div>
              <div className="box">
                <p  ref={ref0} style={{opacity: inView0 ? 1 : 0, transform: inView0 ? 'translateY(0) scale(1)' : 'translateY(70px) scale(0.7)', transition: 'opacity 6s ease-out, transform 5.5s ease-out'}}><i className="bi bi-envelope-at-fill" style={{ fontSize: '1.7rem', color: '#ff00ff', marginRight: '0.5rem' }}></i>
                <span  style={{color: '#ff00ff', fontFamily: "'Vidaloka', serif", fontWeight: 500, marginTop: '1rem'}}> Email : </span>
                <a href="mailto:ujjwalsaini0007@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fcfcfc' }}>ujjwalsaini0007@gmail.com</a></p>
                <p  ref={ref0} style={{opacity: inView0 ? 1 : 0, transform: inView0 ? 'translateY(0) scale(1)' : 'translateY(70px) scale(0.6)', transition: 'opacity 6s ease-out, transform 6.5s ease-out'}}><i className="bi bi-geo-alt-fill" style={{ fontSize: '1.7rem', color: '#ff00ff', marginRight: '0.5rem' }}></i>
                <span  style={{color: '#ff00ff', fontFamily: "'Vidaloka', serif", fontWeight: 500, marginTop: '1rem'}}> Place : </span> Delhi, India - 110015</p>
                <p  ref={ref0} style={{opacity: inView0 ? 1 : 0, transform: inView0 ? 'translateY(0) scale(1)' : 'translateY(70px) scale(0.6)', transition: 'opacity 6s ease-out, transform 7.5s ease-out'}}><i className="bi bi-globe" style={{ fontSize: '1.7rem', color: '#ff00ff', marginRight: '0.5rem' }}></i>
                <span  style={{color: '#ff00ff', fontFamily: "'Vidaloka', serif", fontWeight: 500, marginTop: '1rem'}}> Language Known : </span> English, Hindi, Punjabi</p>
              </div>
              <div className="box">
                <p  ref={ref1} style={{opacity: inView1 ? 1 : 0, transform: inView1 ? 'translateY(0) scale(1)' : 'translateY(70px) scale(0.6)', transition: 'opacity 6s ease-out, transform 5.5s ease-out'}}><i className="bi bi-star-fill" style={{ fontSize: '1.7rem', color: '#ff00ff', marginRight: '0.5rem' }}></i>
                <span  style={{color: '#ff00ff', fontFamily: "'Vidaloka', serif", fontWeight: 500, marginTop: '1rem'}}> Hobbies : </span> Cube Solving, Gardening, Learning New SKills, Travelling, Listening Music</p>
                <p  ref={ref1} style={{opacity: inView1 ? 1 : 0, transform: inView1 ? 'translateY(0) scale(1)' : 'translateY(70px) scale(0.6)', transition: 'opacity 6s ease-out, transform 6.5s ease-out'}}><i className="bi bi-linkedin" style={{ fontSize: '1.7rem', color: '#ff00ff', marginRight: '0.5rem' }}></i>
                <span  style={{color: '#ff00ff', fontFamily: "'Vidaloka', serif", fontWeight: 500, marginTop: '1rem'}}> Linkedin : </span>
                <a href="https://www.linkedin.com/in/ujjwalsaini07/" target="_blank" rel="noopener noreferrer" style={{ color: '#fcfcfc' }}>Connect Here</a></p>
                <p  ref={ref1} style={{opacity: inView1 ? 1 : 0, transform: inView1 ? 'translateY(0) scale(1)' : 'translateY(70px) scale(0.6)', transition: 'opacity 6s ease-out, transform 7.5s ease-out'}}><i className="bi bi-mortarboard-fill" style={{ fontSize: '1.7rem', color: '#ff00ff', marginRight: '0.5rem' }}></i>
                <span  style={{color: '#ff00ff', fontFamily: "'Vidaloka', serif", fontWeight: 500, marginTop: '1rem'}}> Degree : </span> Bachelor's of Technology - Information Technology'2026</p>
                <p  ref={ref1} style={{opacity: inView1 ? 1 : 0, transform: inView1 ? 'translateY(0) scale(1)' : 'translateY(70px) scale(0.6)', transition: 'opacity 6s ease-out, transform 8.5s ease-out'}}><i className="bi bi-bank2" style={{ fontSize: '1.7rem', color: '#ff00ff', marginRight: '0.5rem' }}></i>
                <span  style={{color: '#ff00ff', fontFamily: "'Vidaloka', serif", fontWeight: 500, marginTop: '1rem'}}> University : </span> GGSIPU</p>
              </div>
            </motion.div>
          </div>

          <div style={{ marginTop: '20px', marginBottom: '12px', color: '#fff' }}>
            <div ref={ref2} style={{ marginBottom: '20px', textAlign: 'left', borderBottom: '1px solid #ff00ff', width: '100px', opacity: inView2 ? 1 : 0, transform: inView2 ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
                      transition: 'opacity 1.6s ease-out, transform 0.8s ease-out' }}>
              <h2 ref={ref2} style={{ fontFamily: "'Vidaloka', serif", textTransform: 'uppercase', margin: 0, fontSize: '18px', opacity: inView2 ? 1 : 0, transform: inView2 ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
                      transition: 'opacity 2s ease-out, transform 1.8s ease-out' }}>Skills</h2>
            </div>

            {/* Skills Section */}
            <div style={{ flex: '1', marginLeft: '20px' }}>
              <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                {skillsData.map((skill, index) => (
                  <li key={index} style={progressBarContainerStyle}>
                    <div ref={ref2} style={circlePointerStyle}></div>
                    <div ref={ref2} style={{ fontFamily: "'Vidaloka', serif", fontSize: '13.5px', width: '80px', flexShrink: 0, opacity: inView2 ? 1 : 0, transform: inView2 ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
                      transition: 'opacity 2s ease-out, transform 3s ease-out'}}>{skill.name}</div>
                    <div ref={ref2} style={progressBarWrapStyle}>
                      <div ref={ref2} style={{ ...progressBarStyleBase, width: skill.width }}>
                        <div style={pointerStyle}></div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="glowbtnAbt">
            <motion.div
              variants={textVariant(1.2)}
              initial="hidden"
              animate="show"
            >
              <a href="https://drive.google.com/file/d/1dUp-F4kjgafGYs9xX6DUDbi6crlxQqjt/view?usp=drive_link" target="_blank" rel="noopener noreferrer" onClick={playSound} className="btn"
              ref={ref2}
              style={{
                padding: '12px',
                borderRadius: '10px',
                backgroundColor: 'transparent',
                textDecoration: 'none',
                color: '#f40388',
                border: 'none',
                marginBottom: '-10px',
                marginLeft: '1px',
                marginTop: '25px',
                fontSize: '16px',
                fontWeight: 'bold',
                transition: 'background-color 0.3s',
                width: '50%',
                textAlign: 'center',
                cursor: 'pointer',
                opacity: inView2 ? 1 : 0,
                transform: inView2 ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
                transition: 'opacity 1.6s ease-out, transform 4s ease-out',
              }}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Resume
              </a>
            </motion.div>
          </div>
          <div className="glowbtnAbt">
            <motion.div
              variants={textVariant(2.5)}
              initial="hidden"
              animate="show"
            >
              <a href="/certifications" onClick={playSound} className="btn"
              ref={ref2}
              style={{
                padding: '12px',
                borderRadius: '10px',
                backgroundColor: 'transparent',
                textDecoration: 'none',
                color: '#f40388',
                border: 'none',
                marginBottom: '-10px',
                marginLeft: '1px',
                marginTop: '25px',
                fontSize: '16px',
                fontWeight: 'bold',
                transition: 'background-color 0.3s',
                width: '90%',
                textAlign: 'center',
                cursor: 'pointer',
                opacity: inView2 ? 1 : 0,
                transform: inView2 ? 'translateY(0)' : 'translateY(-70px)',
                transition: 'transform 2s ease-out',
              }}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                My Certifications
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMobi;



