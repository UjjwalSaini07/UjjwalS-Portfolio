import React, { useEffect, useState } from 'react';
import gif from '../components/Assest_Used/GIFs/Gif_Basic.gif';
import './Contact.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from "framer-motion";
import { useSpring, animated } from '@react-spring/web';

const textVariant = (delay) => ({
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.5, delay: delay },
  },
});

const ContactUs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [sendingMsg, setSendingMsg] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    if (!sendingMsg) {
      console.log("Button clicked, setting sendingMsg to true");
      setSendingMsg(true);

      // Simulate a sending action and reset after a delay
      setTimeout(() => {
        console.log("Resetting sendingMsg to false");
        setSendingMsg(false);
      }, 3800); // Adjust the delay as needed
    }
  };

  const spaceboardsFont = `
    @font-face {
      font-family: 'Spaceboards';
      src: url('/fonts/Spaceboards.otf') format('opentype');
    }
  `;

  const ContactStyle = `
  .Cont {
    font-family: 'Spaceboards', sans-serif;
    font-size: 5rem;
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
    animation: gradient 1.5s infinite, glow 1.2s infinite alternate;
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

  @media (max-width: 767px) {
    .map {
      display: none;
    }
    .Cont{
      font-size: 3.2rem;
      margin-right: -2px;
      align-items: center;
    }
  }
`;

const bounce = useSpring({
  from: { transform: 'translate3d(0, -180px, 0)' },
  to: { transform: 'translate3d(0, 0, 0)' },
  config: { tension: 150, friction: 3 },
});

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 767);
  };

  handleResize();
  window.addEventListener('resize', handleResize);

  const styleElement = document.createElement('style');
  styleElement.innerHTML = spaceboardsFont + ContactStyle;
  document.head.appendChild(styleElement);

  return () => {
    window.removeEventListener('resize', handleResize);
    document.head.removeChild(styleElement);
  };
}, []);

  const contactInfoData = [
    {
        icon: <i className="fa-solid fa-envelopes-bulk"></i>,
        description: 'ujjwalsaini0007@gmail.com',
        href: 'mailto:ujjwalsaini0007@gmail.com'
    },
    {
        icon: <i className="fa-solid fa-mobile"></i>,
        description: '+91-9717-899079',
        href: 'tel:+919717899079'
    },
    {
        icon: <i className="fa-brands fa-linkedin"></i>,
        description: 'My Profile',
        href: 'https://www.linkedin.com/in/ujjwalsaini07'
    },
    {
        icon: <i className="fa-brands fa-github"></i>,
        description: 'My Profile',
        href: 'https://github.com/UjjwalSaini07'
    }
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setSendingMsg(true);
    // Implement email sending logic here
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  return (
    <>
    <Helmet>
        <title>Contact Me | Portfolio - Ujjwal</title>
    </Helmet>
      <section style={{
        position: 'relative',
        padding: '60px 20px',
        fontFamily: 'Arial, sans-serif',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#e2e8f0',
        overflow: 'hidden',
        backgroundImage: `url(${gif})`, // Use GIF as background
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div style={{marginTop: '3rem'}}></div>
        <div style={{
          backdropFilter: 'blur(1px)',
          borderRadius: '30px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          border: isMobile ? 'none' : '1px solid rgba(255, 255, 255, 0.3)',
          padding:isMobile ? '0' : '30px',
          maxWidth:isMobile ?'1600px' :  '1250px',
          width:isMobile ? '105%' : '90%',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: isMobile ? 'left' : 'center',
          gap: '10px'
        }}>
          <div style={{ textAlign: 'left', marginBottom: '30px', width: '100%' }}>
            <div className="Cont" style={{ textAlign: 'left', marginBottom: '1rem',marginLeft: '5rem', marginTop:isMobile ? '1rem' : '0' }}>
            <motion.div
              variants={textVariant(0.4)}
              initial="hidden"
              animate="show"
            >
              Contact Me
            </motion.div>
            </div>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            width: '100%',
            gap: '20px'
          }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <form
                id="form"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  backdropFilter: 'blur(1px)',
                  padding: '30px',
                  borderRadius: '15px',
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                  marginTop: '-25px',
                  width: '100%'
                }}
                onSubmit={sendEmail}
              >
                <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
                  <label
                    htmlFor="name"
                    style={{
                      position: 'absolute',
                      top: '10px',
                      left: '15px',
                      color: '#e2e8f0',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      transition: 'all 0.2s ease',
                      pointerEvents: 'none',
                      transform: 'translateY(0)',
                      transformOrigin: 'top left',
                      opacity: 0.7,
                    }}
                  >
                    <motion.div
                      variants={textVariant(0.64)}
                      initial="hidden"
                      animate="show"
                    >
                    Name*
                    </motion.div>
                  </label>
                  <input
                    style={{
                      padding: '12px 15px',
                      borderRadius: '10px', // Remove border radius
                      border: 'none', // Remove all borders
                      borderBottom: '2px solid rgba(255, 255, 255, 0.3)', // Add only the bottom border
                      fontSize: '16px',
                      backgroundColor: 'transparent', // Make background transparent
                      color: '#e2e8f0',
                      outline: 'none',
                      transition: 'border-color 0.3s',
                      minHeight: '40px',
                      width: '100%',
                      boxSizing: 'border-box',
                      paddingBottom: '2px', // Adjust padding to align with the border
                    }}
                    type="text"
                    id="name"
                    name="name"
                    onFocus={(e) => e.target.previousElementSibling.style.transform = 'translateY(-32px)'}
                    onBlur={(e) => {
                      if (!e.target.value) {
                        e.target.previousElementSibling.style.transform = 'translateY(0)';
                      }
                    }}
                  />
                </div>
                <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
                  <label
                    htmlFor="email"
                    style={{
                      position: 'absolute',
                      top: '10px',
                      left: '15px',
                      color: '#e2e8f0',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      transition: 'all 0.2s ease',
                      pointerEvents: 'none',
                      transform: 'translateY(0)',
                      transformOrigin: 'top left',
                      opacity: 0.7,
                    }}
                  >
                    <motion.div
                      variants={textVariant(0.64)}
                      initial="hidden"
                      animate="show"
                    >
                    Email*
                    </motion.div>
                  </label>
                  <input
                    style={{
                      padding: '12px 15px',
                      borderRadius: '10px',
                      border: 'none',
                      borderBottom: '2px solid rgba(255, 255, 255, 0.3)',
                      fontSize: '16px',
                      backgroundColor: 'transparent',
                      color: '#e2e8f0',
                      outline: 'none',
                      transition: 'border-color 0.3s',
                      minHeight: '40px',
                      width: '100%',
                      boxSizing: 'border-box',
                      paddingBottom: '5px',
                    }}
                    type="email"
                    id="email"
                    name="email"
                    onFocus={(e) => e.target.previousElementSibling.style.transform = 'translateY(-35px)'}
                    onBlur={(e) => {
                      if (!e.target.value) {
                        e.target.previousElementSibling.style.transform = 'translateY(0)';
                      }
                    }}
                  />
                </div>
                <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
                  <label
                    htmlFor="message"
                    style={{
                      position: 'absolute',
                      top: '10px',
                      left: '15px',
                      color: '#e2e8f0',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      transition: 'all 0.2s ease',
                      pointerEvents: 'none',
                      transform: 'translateY(0)',
                      transformOrigin: 'top left',
                      opacity: 0.7,
                    }}
                  >
                    <motion.div
                      variants={textVariant(0.64)}
                      initial="hidden"
                      animate="show"
                    >
                    Message*
                    </motion.div>
                  </label>
                  <textarea
                    style={{
                      padding: '15px 20px',
                      borderRadius: '10px',
                      border: 'none',
                      fontSize: '12.5px',
                      backgroundColor: 'transparent',
                      borderBottom: '2px solid rgba(255, 255, 255, 0.3)',
                      color: '#e2e8f0',
                      outline: 'none',
                      transition: 'border-color 0.3s, background-color 0.3s, box-shadow 0.3s',
                      minHeight: '100px',
                      resize: 'vertical',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      width: '100%',
                      boxSizing: 'border-box'
                    }}
                    id="message"
                    name="message"
                    rows={4}
                    onFocus={(e) => e.target.previousElementSibling.style.transform = 'translateY(-36px)'}
                    onBlur={(e) => {
                      if (!e.target.value) {
                        e.target.previousElementSibling.style.transform = 'translateY(0)';
                      }
                    }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', width: '100%' }}>
                  <div className="glowbtn">
                    <animated.h1 style={bounce}>
                      <a
                        style={{
                          padding: isMobile ? '10px 50px' : '12px 60px',
                          borderRadius: '10px',
                          backgroundColor: 'transparent',
                          textDecoration: 'none',
                          color: '#33f403',
                          border: 'none',
                          marginBottom: isMobile ? '-5px' : '-10px',
                          marginLeft: '1px',
                          marginTop: isMobile ? '-22px' : '-10px',
                          fontSize: isMobile ? '13.5px' : '16px',
                          fontWeight: 'bold',
                          transition: 'background-color 0.3s',
                          width: '100%',
                          textAlign: 'center',
                          cursor: 'pointer'
                        }}
                        onClick={handleClick}
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        {sendingMsg ? 'Sending...' : 'Send'}
                      </a>
                    </animated.h1>
                  </div>

                  <div className="flex w-full gap-5 items-center"  style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <div className="bg-white w-1/2 h-1 hr"></div>
                      <div className="text-white font-weight-bold" style={{fontSize:'12px'}}>OR</div>
                      <div className="bg-white w-1/2 h-1 hr"></div>
                  </div>
                  <div className="glowbtn">
                  <animated.h1 style={bounce} >
                  <a
                    href="#"
                    style={{
                      padding: '15px',
                      borderRadius: '12px',
                      backgroundColor: 'transparent',
                      color: '#33f403',
                      textDecoration: 'none',
                      fontSize: isMobile ? '11px' : '16px',
                      fontWeight: 'bold',
                      transition: 'color 0.3s',
                      width: '100%',
                      marginLeft: isMobile ? '3px' : '0',
                      marginTop: isMobile ? '-1px' : '0',
                      marginBottom: isMobile ? '50px' : '0',
                      textAlign: 'center',
                      cursor: 'pointer'
                    }}
                    onClick={() => {
                      setShowModal(true);
                      // Implement playConfirm function here if needed
                    }}
                  >
                    
                    Schedule a Meet with me...
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </a>
                  </animated.h1>
                  </div>
                </div>
              </form>
            </div>
            
            <div style={{ flex: 1 }}>
              <div style={{ flexDirection: 'column', alignItems: 'center', gap: '20px', marginTop: isMobile ? '-70px' : '-75px' }}>
                  {contactInfoData.map((info, index) => (
                      <div key={index} style={{ fontFamily: 'arial', display: 'flex', alignItems: 'center', gap: '15px', fontSize: isMobile ? '16px' : '17px', marginLeft: isMobile ? '40px' : '20px', marginTop: isMobile ? '8px' : '0', marginBottom: '8px' }}>
                          <motion.div
                              variants={textVariant(0.84)}
                              initial="hidden"
                              animate="show"
                          >
                              {info.icon}
                          </motion.div>
                          <motion.div
                              variants={textVariant(1.4)}
                              initial="hidden"
                              animate="show"
                          >
                            <a
                                href={info.href}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                style={{
                                    textDecoration: 'none',
                                    color: hoveredIndex === index ? '#0a4ff0' : 'inherit',
                                    transition: 'color 0.18s ease'
                                }}
                            >
                              <span>{info.description}</span>
                            </a>
                          </motion.div>
                      </div>
                    ))}
                </div>

              <div className="map" style={{
                width: '95%',
                height: '380px',
                padding: '1px',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                marginTop: '40px',
                marginLeft: '12px',
              }}>
                
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5393826342255!2d77.14058945079842!3d28.66222527921225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03009e810ffd%3A0xcf2bda6f1a9acec6!2sNew%20Moti%20Nagar%2C%20Moti%20Nagar%2C%20Delhi%2C%20110015!5e0!3m2!1sen!2sin!4v1636631965111!5m2!1sen!2sin"
                  style={{
                    border: 0,
                    width: '100%',
                    height: '100%',
                    filter: 'invert(90%)' // Inverts the colors to simulate dark mode
                  }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
