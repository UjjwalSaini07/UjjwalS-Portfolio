import React, { useEffect, useState } from 'react';
import gif from '../components/Assest_Used/GIFs/Gif_Basic.gif';
import './Contact.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ContactUs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [sendingMsg, setSendingMsg] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
      description: '+91-9717-xxxxx',
      href: 'tel:+919717xxxxx'
    },
    {
      icon: <i className="fa-brands fa-linkedin"></i>,
      description: 'LinkedIn Profile',
      href: 'https://www.linkedin.com/in/ujjwal-saini-220960256/'
    },
    {
      icon: <i className="fa-brands fa-github"></i>,
      description: 'Profile',
      href: 'https://github.com/UjjwalSaini07'
    }
  ];

  // ! Part Of problematic Code
  // const contactInfoData = [
  //   {
  //     iconClass: "fas fa-envelope",
  //     description: 'ujjwalsaini0007@gmail.com',
  //     href: 'mailto:ujjwalsaini0007@gmail.com'
  //   },
  //   {
  //     iconClass: "fas fa-mobile-alt",
  //     description: '+91-9717-xxxxx',
  //     href: 'tel:+919717xxxxx'
  //   },
  //   {
  //     iconClass: "fab fa-linkedin",
  //     description: 'LinkedIn Profile',
  //     href: '/linkedin' // Example internal route
  //   },
  //   {
  //     iconClass: "fab fa-github",
  //     description: 'Profile',
  //     href: '/github' // Example internal route
  //   }
  // ];

  const sendEmail = (e) => {
    e.preventDefault();
    setSendingMsg(true);
    // Implement email sending logic here
  };

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
              Contact Me
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
                    Name*
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
                    Email*
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
                    Message*
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
                    <a
                      style={{
                        padding:isMobile ? '10px 50px' : '12px 60px',
                        borderRadius: '10px',
                        backgroundColor: 'transparent',
                        textDecoration: 'none',
                        color: '#33f403',
                        border: 'none',
                        marginBottom:isMobile ? '-5px' : '-10px',
                        marginLeft: '1px',
                        marginTop:isMobile ? '-22px' : '-10px',
                        fontSize: isMobile ? '13.5px' : '16px',
                        fontWeight: 'bold',
                        transition: 'background-color 0.3s',
                        width: '100%',
                        textAlign: 'center',
                        cursor: 'pointer'
                      }}
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      {sendingMsg ? 'Sending...' : 'Send'}
                    </a>
                  </div>

                  <div className="flex w-full gap-5 items-center"  style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <div className="bg-white w-1/2 h-1 hr"></div>
                      <div className="text-white font-weight-bold" style={{fontSize:'12px'}}>OR</div>
                      <div className="bg-white w-1/2 h-1 hr"></div>
                  </div>
                  <div className="glowbtn">
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
                  </div>
                </div>
              </form>
            </div>
            <div style={{ flex: 1 }}>

              <div style={{ flexDirection: 'column', alignItems: 'center', gap: '20px', marginTop: isMobile ? '-70px' : '-75px' }}>
                {contactInfoData.map((info, index) => (
                  <div key={index} style={{ fontFamily: 'arial', display: 'flex', alignItems: 'center', gap: '15px', fontSize:isMobile ? '16px' : '17px', marginLeft:isMobile ? '50px' : '20px', marginTop:isMobile ? '8px' : '0', marginBottom: '8px'}}>
                    {info.icon}
                    <span>{info.description}</span>
                  </div>
                ))}
              </div>

              {/* //! Problematic Code Only Show Icons */}
              {/* <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '28px', marginTop: '-75px',marginLeft: '16px' }}>
                {contactInfoData.map((info, index) => (
                  <Link
                    key={index}
                    to={info.href}
                    style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '20px', textDecoration: 'none', color: 'inherit' }}
                  >
                    <i className={info.iconClass} style={{ fontSize: '30px' }}></i>
                    <span style={{ fontSize: '17px', color: 'inherit' }}>{info.description}</span>
                  </Link>
                ))}
              </div> */}
              {/* Ends Here */}

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

// TOdo: Not Responsive
// import React, { useEffect, useState } from 'react';
// import gif from '../components/Assest_Used/GIFs/Gif_Basic.gif';
// import './Contact.css';
// import { Link } from 'react-router-dom';

// const ContactUs = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [sendingMsg, setSendingMsg] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   const spaceboardsFont = `
//     @font-face {
//       font-family: 'Spaceboards';
//       src: url('/fonts/Spaceboards.otf') format('opentype');
//     }
//   `;

//   const ContactStyle = `
//     .Cont {
//       font-family: 'Spaceboards', sans-serif;
//       font-size: 5rem;
//       font-weight: bold;
//       background: linear-gradient(90deg, #0cffc5, #a939ff, #0cffc5, #a939ff);
//       -webkit-background-clip: text;
//       -webkit-text-fill-color: transparent;
//       text-shadow: 
//         0 0 3px rgba(0, 255, 197, 0.7), 
//         0 0 5px rgba(0, 255, 197, 0.7), 
//         0 0 7px rgba(169, 57, 255, 0.7), 
//         0 0 9px rgba(169, 57, 255, 0.7), 
//         0 0 12px rgba(0, 255, 197, 0.5), 
//         0 0 15px rgba(169, 57, 255, 0.5);
//       margin-left: 4rem;
//       animation: gradient 1.5s infinite, glow 1.2s infinite alternate;
//       letter-spacing: 0.1rem;
//       background-size: 200% 200%;
//     }

//     @keyframes gradient {
//       0% {
//         background-position: 0% 50%;
//       }
//       50% {
//         background-position: 100% 50%;
//       }
//       100% {
//         background-position: 0% 50%;
//       }
//     }

//     @keyframes glow {
//       0% {
//         text-shadow: 
//           0 0 0 rgba(0, 255, 197, 0.7), 
//           0 0 0 rgba(0, 255, 197, 0.7), 
//           0 0 0 rgba(169, 57, 255, 0.7), 
//           0 0 0 rgba(169, 57, 255, 0.7), 
//           0 0 0 rgba(0, 255, 197, 0.5), 
//           0 0 0 rgba(169, 57, 255, 0.5);
//       }
//       100% {
//         text-shadow: 
//           0 0 1px rgba(0, 255, 197, 1), 
//           0 0 2px rgba(0, 255, 197, 1), 
//           0 0 5px rgba(169, 57, 255, 1), 
//           0 0 8px rgba(169, 57, 255, 1), 
//           0 0 12px rgba(0, 255, 197, 0.7), 
//           0 0 15px rgba(169, 57, 255, 0.7);
//       }
//     }
//   `;

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 767);
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);

//     const styleElement = document.createElement('style');
//     styleElement.innerHTML = spaceboardsFont + ContactStyle;
//     document.head.appendChild(styleElement);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//       document.head.removeChild(styleElement);
//     };
//   }, []);

//   const contactInfoData = [
//     {
//       icon: <i className="fa-solid fa-envelopes-bulk"></i>,
//       description: 'ujjwalsaini0007@gmail.com',
//       href: 'mailto:ujjwalsaini0007@gmail.com'
//     },
//     {
//       icon: <i className="fa-solid fa-mobile"></i>,
//       description: '+91-9717-xxxxx',
//       href: 'tel:+919717xxxxx'
//     },
//     {
//       icon: <i className="fa-brands fa-linkedin"></i>,
//       description: 'LinkedIn Profile',
//       href: 'https://www.linkedin.com/in/ujjwal-saini-220960256/'
//     },
//     {
//       icon: <i className="fa-brands fa-github"></i>,
//       description: 'Profile',
//       href: 'https://github.com/UjjwalSaini07'
//     }
//   ];

//   // ! Part Of problematic Code
//   // const contactInfoData = [
//   //   {
//   //     iconClass: "fas fa-envelope",
//   //     description: 'ujjwalsaini0007@gmail.com',
//   //     href: 'mailto:ujjwalsaini0007@gmail.com'
//   //   },
//   //   {
//   //     iconClass: "fas fa-mobile-alt",
//   //     description: '+91-9717-xxxxx',
//   //     href: 'tel:+919717xxxxx'
//   //   },
//   //   {
//   //     iconClass: "fab fa-linkedin",
//   //     description: 'LinkedIn Profile',
//   //     href: '/linkedin' // Example internal route
//   //   },
//   //   {
//   //     iconClass: "fab fa-github",
//   //     description: 'Profile',
//   //     href: '/github' // Example internal route
//   //   }
//   // ];

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setSendingMsg(true);
//     // Implement email sending logic here
//   };

//   return (
//     <section style={{
//       position: 'relative',
//       padding: '60px 20px',
//       fontFamily: 'Arial, sans-serif',
//       minHeight: '100vh',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       color: '#e2e8f0',
//       overflow: 'hidden',
//       backgroundImage: `url(${gif})`, // Use GIF as background
//       backgroundSize: 'cover',
//       backgroundPosition: 'center'
//     }}>
//       <div style={{
//         backdropFilter: 'blur(1px)',
//         borderRadius: '30px',
//         boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
//         border: '1px solid rgba(255, 255, 255, 0.3)',
//         padding: '30px',
//         maxWidth: '1250px',
//         width: '90%',
//         margin: '0 auto',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         gap: '10px'
//       }}>
//         <div style={{ textAlign: 'left', marginBottom: '30px', width: '100%' }}>
//           <div className="Cont" style={{ textAlign: 'left', marginBottom: '1rem',marginLeft: '5rem' }}>
//             Contact Me
//           </div>
//         </div>
//         <div style={{
//           display: 'flex',
//           flexDirection: isMobile ? 'column' : 'row',
//           justifyContent: 'space-between',
//           width: '100%',
//           gap: '20px'
//         }}>
//           <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
//             <form
//               id="form"
//               style={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: '20px',
//                 backdropFilter: 'blur(1px)',
//                 padding: '30px',
//                 borderRadius: '15px',
//                 boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
//                 marginTop: '-25px',
//                 width: '100%'
//               }}
//               onSubmit={sendEmail}
//             >
//               <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
//                 <label
//                   htmlFor="name"
//                   style={{
//                     position: 'absolute',
//                     top: '10px',
//                     left: '15px',
//                     color: '#e2e8f0',
//                     fontSize: '16px',
//                     fontWeight: 'bold',
//                     transition: 'all 0.2s ease',
//                     pointerEvents: 'none',
//                     transform: 'translateY(0)',
//                     transformOrigin: 'top left',
//                     opacity: 0.7,
//                   }}
//                 >
//                   Name*
//                 </label>
//                 <input
//                   style={{
//                     padding: '12px 15px',
//                     borderRadius: '10px', // Remove border radius
//                     border: 'none', // Remove all borders
//                     borderBottom: '2px solid rgba(255, 255, 255, 0.3)', // Add only the bottom border
//                     fontSize: '16px',
//                     backgroundColor: 'transparent', // Make background transparent
//                     color: '#e2e8f0',
//                     outline: 'none',
//                     transition: 'border-color 0.3s',
//                     minHeight: '40px',
//                     width: '100%',
//                     boxSizing: 'border-box',
//                     paddingBottom: '2px', // Adjust padding to align with the border
//                   }}
//                   type="text"
//                   id="name"
//                   name="name"
//                   onFocus={(e) => e.target.previousElementSibling.style.transform = 'translateY(-32px)'}
//                   onBlur={(e) => {
//                     if (!e.target.value) {
//                       e.target.previousElementSibling.style.transform = 'translateY(0)';
//                     }
//                   }}
//                 />
//               </div>
//               <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
//                 <label
//                   htmlFor="email"
//                   style={{
//                     position: 'absolute',
//                     top: '10px',
//                     left: '15px',
//                     color: '#e2e8f0',
//                     fontSize: '16px',
//                     fontWeight: 'bold',
//                     transition: 'all 0.2s ease',
//                     pointerEvents: 'none',
//                     transform: 'translateY(0)',
//                     transformOrigin: 'top left',
//                     opacity: 0.7,
//                   }}
//                 >
//                   Email*
//                 </label>
//                 <input
//                   style={{
//                     padding: '12px 15px',
//                     borderRadius: '10px',
//                     border: 'none',
//                     borderBottom: '2px solid rgba(255, 255, 255, 0.3)',
//                     fontSize: '16px',
//                     backgroundColor: 'transparent',
//                     color: '#e2e8f0',
//                     outline: 'none',
//                     transition: 'border-color 0.3s',
//                     minHeight: '40px',
//                     width: '100%',
//                     boxSizing: 'border-box',
//                     paddingBottom: '5px',
//                   }}
//                   type="email"
//                   id="email"
//                   name="email"
//                   onFocus={(e) => e.target.previousElementSibling.style.transform = 'translateY(-35px)'}
//                   onBlur={(e) => {
//                     if (!e.target.value) {
//                       e.target.previousElementSibling.style.transform = 'translateY(0)';
//                     }
//                   }}
//                 />
//               </div>
//               <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
//                 <label
//                   htmlFor="message"
//                   style={{
//                     position: 'absolute',
//                     top: '10px',
//                     left: '15px',
//                     color: '#e2e8f0',
//                     fontSize: '16px',
//                     fontWeight: 'bold',
//                     transition: 'all 0.2s ease',
//                     pointerEvents: 'none',
//                     transform: 'translateY(0)',
//                     transformOrigin: 'top left',
//                     opacity: 0.7,
//                   }}
//                 >
//                   Message*
//                 </label>
//                 <textarea
//                   style={{
//                     padding: '15px 20px',
//                     borderRadius: '10px',
//                     border: 'none',
//                     fontSize: '12.5px',
//                     backgroundColor: 'transparent',
//                     borderBottom: '2px solid rgba(255, 255, 255, 0.3)',
//                     color: '#e2e8f0',
//                     outline: 'none',
//                     transition: 'border-color 0.3s, background-color 0.3s, box-shadow 0.3s',
//                     minHeight: '100px',
//                     resize: 'vertical',
//                     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//                     width: '100%',
//                     boxSizing: 'border-box'
//                   }}
//                   id="message"
//                   name="message"
//                   rows={4}
//                   onFocus={(e) => e.target.previousElementSibling.style.transform = 'translateY(-36px)'}
//                   onBlur={(e) => {
//                     if (!e.target.value) {
//                       e.target.previousElementSibling.style.transform = 'translateY(0)';
//                     }
//                   }}
//                 />
//               </div>
//               <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', width: '100%' }}>
//                 <div className="glowbtn">
//                   <a
//                     style={{
//                       padding: '12px',
//                       borderRadius: '10px',
//                       backgroundColor: 'transparent',
//                       textDecoration: 'none',
//                       color: '#33f403',
//                       border: 'none',
//                       marginBottom: '-10px',
//                       marginLeft: '1px',
//                       marginTop: '-10px',
//                       fontSize: '16px',
//                       fontWeight: 'bold',
//                       transition: 'background-color 0.3s',
//                       width: '100%',
//                       textAlign: 'center',
//                       cursor: 'pointer'
//                     }}
//                   >
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                     {sendingMsg ? 'Sending...' : 'Send'}
//                   </a>
//                 </div>

//                 <div className="flex w-full gap-5 items-center"  style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
//                     <div className="bg-white w-1/2 h-1 hr"></div>
//                     <div className="text-white font-weight-bold" style={{fontSize:'12px'}}>OR</div>
//                     <div className="bg-white w-1/2 h-1 hr"></div>
//                 </div>
//                 <div className="glowbtn">
//                 <a
//                   href="#"
//                   style={{
//                     padding: '12px',
//                     borderRadius: '10px',
//                     backgroundColor: 'transparent',
//                     color: '#33f403',
//                     // color: '#00bcd4',
//                     textDecoration: 'none',
//                     fontSize: '16px',
//                     fontWeight: 'bold',
//                     transition: 'color 0.3s',
//                     width: '100%',
//                     textAlign: 'center',
//                     cursor: 'pointer'
//                   }}
//                   onClick={() => {
//                     setShowModal(true);
//                     // Implement playConfirm function here if needed
//                   }}
//                 >
                  
//                   Schedule a Meet with me...
//                   <span></span>
//                   <span></span>
//                   <span></span>
//                   <span></span>
//                 </a>
//                 </div>
//               </div>
//             </form>
//           </div>
//           <div style={{ flex: 1 }}>

//             <div style={{ flexDirection: 'column', alignItems: 'center', gap: '20px', marginTop: '-75px' }}>
//               {contactInfoData.map((info, index) => (
//                 <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '17px', marginLeft: '20px', marginBottom: '8px'}}>
//                   {info.icon}
//                   <span>{info.description}</span>
//                 </div>
//               ))}
//             </div>

//             {/* //! Problematic Code Only Show Icons */}
//             {/* <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '28px', marginTop: '-75px',marginLeft: '16px' }}>
//               {contactInfoData.map((info, index) => (
//                 <Link
//                   key={index}
//                   to={info.href}
//                   style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '20px', textDecoration: 'none', color: 'inherit' }}
//                 >
//                   <i className={info.iconClass} style={{ fontSize: '30px' }}></i>
//                   <span style={{ fontSize: '17px', color: 'inherit' }}>{info.description}</span>
//                 </Link>
//               ))}
//             </div> */}
//             {/* Ends Here */}

//             <div style={{
//               width: '95%',
//               height: '380px',
//               padding: '1px',
//               borderRadius: '20px',
//               overflow: 'hidden',
//               boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
//               marginTop: '40px',
//               marginLeft: '12px',
//             }}>
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5393826342255!2d77.14058945079842!3d28.66222527921225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03009e810ffd%3A0xcf2bda6f1a9acec6!2sNew%20Moti%20Nagar%2C%20Moti%20Nagar%2C%20Delhi%2C%20110015!5e0!3m2!1sen!2sin!4v1636631965111!5m2!1sen!2sin"
//                 style={{
//                   border: 0,
//                   width: '100%',
//                   height: '100%',
//                   filter: 'invert(90%)' // Inverts the colors to simulate dark mode
//                 }}
//                 allowFullScreen=""
//                 loading="lazy"
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;


// TOdo: Make CHnages- Basic Synthectic Having Visime Form Styling
// import React, { useEffect, useState } from 'react';

// const ContactUs = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 767);
//     };

//     // Check initial screen size
//     handleResize();

//     // Add event listener to handle screen resize
//     window.addEventListener('resize', handleResize);

//     // Cleanup event listener on unmount
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const contactInfoData = [
//     {
//       icon: <i className="fa-solid fa-location-dot"></i>,
//       title: 'Address',
//       description: 'New Delhi-110015'
//     },
//     {
//       icon: <i className="fa-solid fa-envelope"></i>,
//       title: 'E-Mail',
//       description: 'xxxx@gmail.com'
//     },
//     {
//       icon: <i className="fa-solid fa-phone"></i>,
//       title: 'Phone',
//       description: 'xxx079'
//     }
//   ];

//   return (
//     <section style={styles.contact}>
//       <div style={styles.content}>
//         <h2 style={styles.h2}>Contact Us</h2>
//       </div>
//       <div style={styles.container}>
//         <div style={styles.visimeForm}>
//           {isMobile ? (
//             <>
//               <div className="visme_d" data-title="PortfolioContact" data-url="jwy9jzyq-portfoliocontact?sidebar=true" data-domain="forms" data-full-page="false" data-min-height="600px" data-form-id="84002"></div>
//               <script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></script>
//             </>
//           ) : (
//             <>
//               <div className="visme_d" data-title="PortfolioContact" data-url="jwy9jzyq-portfoliocontact" data-domain="forms" data-full-page="false" data-min-height="500px" data-form-id="84002"></div>
//               <script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></script>
//             </>
//           )}
//         </div>
//         <div style={styles.mapAndContactForm}>
//           <div style={styles.mapSection}>
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5393826342255!2d77.14058945079842!3d28.66222527921225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03009e810ffd%3A0xcf2bda6f1a9acec6!2sNew%20Moti%20Nagar%2C%20Moti%20Nagar%2C%20Delhi%2C%20110015!5e0!3m2!1sen!2sin!4v1636631965111!5m2!1sen!2sin"
//               width="100%"
//               height="100%"
//               style={styles.iframe}
//               allowFullScreen=""
//               loading="lazy"
//               title="Google Map"
//             ></iframe>
//           </div>
//           <div style={styles.contactInfo}>
//             {contactInfoData.map((info, index) => (
//               <div key={index} style={styles.box}>
//                 <div style={styles.icon}>{info.icon}</div>
//                 <div style={styles.text}>
//                   <h3 style={styles.h3}>{info.title}</h3>
//                   <p style={styles.p}>{info.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const styles = {
//   contact: {
//     padding: '60px 80px',
//     backgroundColor: '#020213',
//     fontFamily: 'Arial, sans-serif'
//   },
//   content: {
//     textAlign: 'center',
//     marginBottom: '50px'
//   },
//   h2: {
//     fontSize: '36px',
//     color: '#e2e8f0',
//     marginBottom: '10px',
//     fontWeight: 'bold'
//   },
//   p: {
//     fontSize: '18px',
//     color: '#cbd5e0',
//     lineHeight: '1.6',
//     maxWidth: '600px',
//     margin: '0 auto'
//   },
//   container: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     flexWrap: 'wrap'
//   },
//   visimeForm: {
//     width: 'calc(50% - 20px)',
//     height: '100%',
//     marginBottom: '30px',
//     textAlign: 'center',
//     borderRadius: '10px',
//     padding: '20px',
//     backgroundColor: '#1a202c',
//     boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
//     transition: 'transform 0.3s ease, boxShadow 0.3s ease',
//     transform: 'scale(1)',
//     ':hover': {
//       transform: 'scale(1.05)',
//       boxShadow: '0 15px 25px rgba(0, 0, 0, 0.3)'
//     }
//   },
//   mapAndContactForm: {
//     width: 'calc(50% - 20px)',
//     marginBottom: '30px',
//     display: 'flex',
//     flexDirection: 'column'
//   },
//   mapSection: {
//     height: '270px',
//     borderRadius: '10px',
//     overflow: 'hidden',
//     marginBottom: '20px',
//     boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
//   },
//   iframe: {
//     border: 0
//   },
//   contactInfo: {
//     display: 'flex',
//     flexDirection: 'column'
//   },
//   box: {
//     display: 'flex',
//     alignItems: 'center',
//     marginBottom: '2px',
//     backgroundColor: '#020213',
//     padding: '10px',
//     borderRadius: '10px',
//     transition: 'transform 0.3s ease, boxShadow 0.3s ease',
//     boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
//     transform: 'scale(1)',
//     ':hover': {
//       transform: 'scale(1.05)',
//       boxShadow: '0 15px 25px rgba(0, 0, 0, 0.3)'
//     }
//   },
//   icon: {
//     fontSize: '24px',
//     color: '#00bcd4',
//     marginRight: '12px'
//   },
//   text: {
//     h3: {
//       fontSize: '20px',
//       color: '#e2e8f0',
//       marginBottom: '8px',
//       fontWeight: 'bold'
//     },
//     p: {
//       fontSize: '16px',
//       color: '#cbd5e0'
//     }
//   }
// };

// export default ContactUs;
