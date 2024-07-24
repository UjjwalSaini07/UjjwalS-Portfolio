import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import USLogopng from '../components/Assest_Used/US_LogoTransparent.png';
import './Error404.css';
import { Helmet } from 'react-helmet';

const Error404 = () => {
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
    <>
    <Helmet>
      <title>Error 404 | Portfolio - Ujjwal</title>
    </Helmet>
    <div onContextMenu={(e) => e.preventDefault()}>
      <header>
      <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={USLogopng} alt="Logo" style={{ height: '45px', marginleft: '5px' }} />
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

      <section className="page_404">
        <div className="container">
          <div className="wrapper">
            <h1 className="text-center">Error 404</h1>
          </div>
          <div className="msg">
            <h3>Looks like you're lost</h3>
            <p>Enter the Celestial Realm: Error 404, Lost in Cosmic Beauty</p>
            <div className="backbtn">
              <Link to="/" className="btn">
                <i className="fas fa-arrow-left"></i>
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3 className='MainPort'>UjjwalS Portfolio</h3>
            <p>Thank you for visiting. Let's connect over socials and elevate together. 🚀 <br /> <br /> Keep Rising 🚀<br/>Connect with me over live Meeting!</p>
          </div>
          <div className="box">
            <h3>Quick Links</h3>
            <Link to="/"><i className="fas fa-chevron-circle-right"></i> Home</Link>
            <Link to="/about"><i className="fas fa-chevron-circle-right"></i> About</Link>
            <Link to="/skills"><i className="fas fa-chevron-circle-right"></i> Skills</Link>
            <Link to="/education"><i className="fas fa-chevron-circle-right"></i> Education</Link>
            <Link to="/projects"><i className="fas fa-chevron-circle-right"></i> Project</Link>
            <Link to="/experience"><i className="fas fa-chevron-circle-right"></i> Experience</Link>
          </div>
          <div className="box">
            <h3>Contact Info</h3>
            <p><i className="fas fa-phone"></i> +91 97178-99079</p>
            <p><i className="fas fa-envelope"></i> ujjwalsaini0007@gmail.com</p>
            <p><i className="fas fa-map-marked-alt"></i> Delhi, India-110015</p>
            <div className="share">
              <a href="https://www.linkedin.com/in/ujjwal-saini-220960256/" className="fab fa-linkedin fa-bounce" target="_blank" rel="noopener noreferrer"></a>
              <a href="https://github.com/UjjwalSaini07" className="fab fa-github fa-bounce" target="_blank" rel="noopener noreferrer"></a>
              <a href="mailto:ujjwalsaini0007@gmail.com" className="fas fa-envelope  fa-bounce" target="_blank" rel="noopener noreferrer"></a>
              <a href="https://x.com/UjjwalSaini0007" className="fab fa-twitter fa-bounce" target="_blank" rel="noopener noreferrer"></a>
              <a href="tel:+919717899079" className="fas fa-phone fa-bounce" target="_blank" rel="noopener noreferrer"></a>
            </div>
          </div>
        </div>
        <h1 className="credit">Designed with <i className="fa fa-heart pulse"></i> by <a href="https://www.linkedin.com/in/ujjwal-saini-220960256/"> Ujjwal Saini</a></h1>
      </section>
    </div>
    </>
  );
};

export default Error404;


// Todo: For Emergency
// import React from 'react';

// const Error404 = () => {
//   return (
//     <div style={{ textAlign: 'center' }}>
//       <h1 style={{ color: 'white', fontWeight: 'bold', fontSize: '50px'}}>Error</h1>
//       <p style={{ color: 'white', fontWeight: 'bold' }} >404 Not Found.</p>
//     </div>
//   );
// };

// export default Error404;
