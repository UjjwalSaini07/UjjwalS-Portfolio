import React, { useEffect } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useSound from 'use-sound';
import { useMediaQuery } from 'react-responsive';

import USLogopng from '../components/Assest_Used/Us_LogoMain.png';
import sound from './Assest_Used/Sounds/base.mp3';
import '../Pages/Nav.css';

const textVariant = (delay) => ({
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.25, delay: delay },
  },
});


const About = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const [play] = useSound(sound);
  
    useEffect(() => {
      const toggleMenu = () => {
        $('#menu').toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
      };
  
      $('#menu').on('click', toggleMenu);
  
      const disableDevTools = (e) => {
        if (e.keyCode === 123 || 
            (e.ctrlKey && e.shiftKey && (e.keyCode === 'I'.charCodeAt(0) ||
            e.keyCode === 'C'.charCodeAt(0) || e.keyCode === 'J'.charCodeAt(0))) || 
            (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))) {
          e.preventDefault();
        }
      };
  
      document.addEventListener('keydown', disableDevTools);
  
      return () => {
        $('#menu').off('click', toggleMenu);
        document.removeEventListener('keydown', disableDevTools);
      };
    }, []);
  
    return (
      <div onContextMenu={(e) => e.preventDefault()}>
        <div className='Basic_Nav'>
          <header>
          <motion.div variants={textVariant(1.2)} initial="hidden" animate="show">
            <Link to="/" className="logo" onClick={play} style={{ display: 'flex', alignItems: 'center' }}>
              <img src={USLogopng} alt="Logo" style={{ height:isMobile ? '38px' : '48px', marginleft: '5px' }} />
                Ujjwal Saini
            </Link>
          </motion.div>
            <div id="menu" className="fas fa-bars"></div>

            <nav className="navbar">
              <ul>
                <motion.div variants={textVariant(1.8)} initial="hidden" animate="show">
                  <li><Link to="/" onClick={play}>Home</Link></li>
                </motion.div>
                <motion.div variants={textVariant(2.2)} initial="hidden" animate="show">
                  <li><Link to="/about" onClick={play}>About</Link></li>
                </motion.div>
                <motion.div variants={textVariant(2.6)} initial="hidden" animate="show">
                  <li><Link to="/skills" onClick={play}>Skills</Link></li>
                </motion.div>
                <motion.div variants={textVariant(3)} initial="hidden" animate="show">
                  <li><Link to="/education" onClick={play}>Education</Link></li>
                </motion.div>
                <motion.div variants={textVariant(3.4)} initial="hidden" animate="show">
                  <li><Link to="/projects" onClick={play}>Projects</Link></li>
                </motion.div>
                <motion.div variants={textVariant(3.8)} initial="hidden" animate="show">
                  <li><Link to="/experience" onClick={play}>Experience</Link></li>
                </motion.div>
                <motion.div variants={textVariant(4.2)} initial="hidden" animate="show">
                  <li><Link to="/contact" onClick={play}>Contact</Link></li>
                </motion.div>
              </ul>
            </nav>
          </header>
        </div>
        {/* <div style = {{marginBottom: '7.2rem'}}></div> */}
      </div>
    );
  };
  
  export default About;
  