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




// TOdo: Changes try:Logicsally
// import React, { useEffect, useState } from 'react';
// import gif from '../components/Assest_Used/ContactBG.gif'; // Import the GIF

// const ContactUs = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [sendingMsg, setSendingMsg] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 767);
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const contactInfoData = [
//     {
//       icon: <i className="fa-solid fa-envelope"></i>,
//       description: 'bsuvraneel@gmail.com'
//     },
//     {
//       icon: <i className="fa-solid fa-phone"></i>,
//       description: 'suvraneel.bio.link'
//     }
//   ];

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
//         borderRadius: '20px',
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
//         <div style={{ textAlign: 'center', marginBottom: '30px', width: '100%' }}>
//           <h2 style={{ fontSize: '36px', color: '#00bcd4', marginBottom: '10px', fontWeight: 'bold' }}>Contact Me</h2>
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
//                     paddingBottom: '5px', // Adjust padding to align with the border
//                   }}
//                   type="text"
//                   id="name"
//                   name="name"
//                   onFocus={(e) => e.target.previousElementSibling.style.transform = 'translateY(-36px)'}
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
//                     fontSize: '16px',
//                     backgroundColor: 'transparent',
//                     borderBottom: '2px solid rgba(255, 255, 255, 0.3)',
//                     color: '#e2e8f0',
//                     outline: 'none',
//                     transition: 'border-color 0.3s, background-color 0.3s, box-shadow 0.3s',
//                     minHeight: '120px',
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
//                 <button
//                   type="submit"
//                   style={{
//                     padding: '12px',
//                     borderRadius: '10px',
//                     backgroundColor: '#7f00ff',
//                     color: '#e2e8f0',
//                     border: 'none',
//                     cursor: 'pointer',
//                     fontSize: '16px',
//                     fontWeight: 'bold',
//                     transition: 'background-color 0.3s',
//                     width: '100%',
//                     textAlign: 'center'
//                   }}
//                 >
//                   {sendingMsg ? 'Sending...' : 'Send'}
//                 </button>
//                 <div style={{ display: 'flex', gap: '5px', alignItems: 'center', color: '#e2e8f0' }}>
//                   <div style={{ backgroundColor: '#fff', height: '0.5px', flex: 1 }}></div>
//                   <div>OR</div>
//                   <div style={{ backgroundColor: '#fff', height: '0.5px', flex: 1 }}></div>
//                 </div>
//                 <a
//                   href="#"
//                   style={{
//                     padding: '12px',
//                     borderRadius: '10px',
//                     backgroundColor: 'transparent',
//                     color: '#00bcd4',
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
//                 </a>
//               </div>
//             </form>
//           </div>
//           <div style={{ flex: 1 }}>
//             <div style={{ flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
//               {contactInfoData.map((info, index) => (
//                 <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', marginLeft: '20px', marginBottom: '5px' }}>
//                   {info.icon}
//                   <span>{info.description}</span>
//                 </div>
//               ))}
//             </div>
//             <div style={{
//               width: '100%',
//               height: '370px',
//               padding: '1px',
//               borderRadius: '20px',
//               overflow: 'hidden',
//               boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
//               marginTop: '20px'
//             }}>
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.887055606147!2d2.2922927156746867!3d48.85884407928754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdcb20a2a67%3A0x40c2f823dfeb9b0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1633068390928!5m2!1sen!2sus"
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



// TOdo: Change 2
import React, { useEffect, useState } from 'react';
import gif from '../components/Assest_Used/ContactBG.gif'; // Import the GIF

const ContactUs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [sendingMsg, setSendingMsg] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const contactInfoData = [
    {
      icon: <i className="fa-solid fa-envelope"></i>,
      description: 'ujjwalsaini0007@gmail.com'
    },
    {
      icon: <i className="fa-solid fa-phone"></i>,
      description: '+91-9717-xxxxx'
    }
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setSendingMsg(true);
    // Implement email sending logic here
  };

  return (
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
      <div style={{
        backdropFilter: 'blur(1px)',
        borderRadius: '30px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        padding: '30px',
        maxWidth: '1250px',
        width: '90%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '30px', width: '100%' }}>
          <h2 style={{ fontSize: '36px', color: '#00bcd4', marginBottom: '10px', fontWeight: 'bold' }}>Contact Me</h2>
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
                    paddingBottom: '5px', // Adjust padding to align with the border
                  }}
                  type="text"
                  id="name"
                  name="name"
                  onFocus={(e) => e.target.previousElementSibling.style.transform = 'translateY(-36px)'}
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
                    fontSize: '16px',
                    backgroundColor: 'transparent',
                    borderBottom: '2px solid rgba(255, 255, 255, 0.3)',
                    color: '#e2e8f0',
                    outline: 'none',
                    transition: 'border-color 0.3s, background-color 0.3s, box-shadow 0.3s',
                    minHeight: '120px',
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
                <button
                  type="submit"
                  style={{
                    padding: '12px',
                    borderRadius: '10px',
                    backgroundColor: '#7f00ff',
                    color: '#e2e8f0',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    transition: 'background-color 0.3s',
                    width: '100%',
                    textAlign: 'center'
                  }}
                >
                  {sendingMsg ? 'Sending...' : 'Send'}
                </button>

                <div className="flex w-full gap-5 items-center"  style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <div className="bg-white w-1/2 h-0.5 hr"></div>
                    <div className="text-white font-weight-bold" style={{fontSize:'12px'}}>OR</div>
                    <div className="bg-white w-1/2 h-0.5 hr"></div>
                </div>

                <a
                  href="#"
                  style={{
                    padding: '12px',
                    borderRadius: '10px',
                    backgroundColor: 'transparent',
                    color: '#00bcd4',
                    textDecoration: 'none',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    transition: 'color 0.3s',
                    width: '100%',
                    textAlign: 'center',
                    cursor: 'pointer'
                  }}
                  onClick={() => {
                    setShowModal(true);
                    // Implement playConfirm function here if needed
                  }}
                >
                  Schedule a Meet with me...
                </a>
              </div>
            </form>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
              {contactInfoData.map((info, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '16px', marginLeft: '20px', marginBottom: '8px' }}>
                  {info.icon}
                  <span>{info.description}</span>
                </div>
              ))}
            </div>
            <div style={{
              width: '100%',
              height: '380px',
              padding: '1px',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
              marginTop: '40px'
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
  );
};

export default ContactUs;
