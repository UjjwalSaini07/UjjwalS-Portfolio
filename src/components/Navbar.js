import React, { useEffect } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import USLogopng from '../components/Assest_Used/Us_LogoMain.png';
import '../Pages/Nav.css';

const About = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
  
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
          <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={USLogopng} alt="Logo" style={{ height:isMobile ? '38px' : '48px', marginleft: '5px' }} />
              Ujjwal Saini
          </Link>
            <div id="menu" className="fas fa-bars"></div>
            <nav className="navbar">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
          </header>
        </div>
        {/* <div style = {{marginBottom: '7.2rem'}}>
        </div> */}
      </div>
    );
  };
  
  export default About;
  