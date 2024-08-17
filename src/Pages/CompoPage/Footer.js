import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UsLogo from '../../components/Assest_Used/Us_LogoMain.png';
import rocket from '../../components/Assest_Used/GIFs/rocketemoji.gif';
import handshake from '../../components/Assest_Used/GIFs/handshake.gif';

const footerStyles = {
  padding: "2rem 4rem",
  background: "#020214",
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

const logoStyles = {
  height: "auto",
  width: "51px",
  marginRight: "1.2rem",
};

const paragraphContainerStyles = {
  display: "flex",
  flexDirection: "column", // Stack paragraph below heading
  justifyContent: "center", // Center paragraph content
};


const boxHeadingStyles = {
  fontSize: "2.5rem",
  fontWeight: "bold",
  color: "#ffcc33",
  textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
};

const ParagraphStyles = {
  fontSize: "1.35rem",
  color: "#e0e0e0",
  marginRight: "1rem",
  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
};

const boxParagraphStyles = {
  fontSize: "1.8rem",
  color: "#e0e0e0",
  marginRight: "1rem",
  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
};

const shareStyles = {
  display: "flex",
  gap: "1.5rem",
  flexDirection: "column",  // Ensure the text and icons are stacked vertically
  alignItems: "center",    // Center the text and icons
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
        <img src={UsLogo} alt="UjjwalS Portfolio Logo" style={logoStyles} />
        <div style={paragraphContainerStyles}>
          <h3 style={boxHeadingStyles}>UjjwalS Portfolio</h3>
          <p style={ParagraphStyles}>
            Thanks for visiting! Let's connect and elevate together.{' '}
            <img src={rocket} alt="Rocket Emoji" style={{ width: '20px', verticalAlign: 'middle', display: 'inline' }} />
          </p>
        </div>
      </div>
      <div style={shareStyles}>
        <p style={boxParagraphStyles}>
          Let's Connect {' '}
          <img src={handshake} alt="HandShake Emoji" style={{ width: '24px', verticalAlign: 'middle', display: 'inline' }} />
        </p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a
            href="https://www.linkedin.com/in/ujjwalsaini07"
            className="fab fa-linkedin"
            style={shareLinkStyles}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={(e) =>
              Object.assign(e.target.style, shareLinkHoverStyles)
            }
            onMouseLeave={(e) =>
              Object.assign(e.target.style, shareLinkStyles)
            }
          ></a>
          <a
            href="https://github.com/UjjwalSaini07"
            className="fab fa-github"
            style={shareLinkStyles}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={(e) =>
              Object.assign(e.target.style, shareLinkHoverStyles)
            }
            onMouseLeave={(e) =>
              Object.assign(e.target.style, shareLinkStyles)
            }
          ></a>
          <a
            href="mailto:ujjwalsaini0007@gmail.com"
            className="fas fa-envelope"
            style={shareLinkStyles}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={(e) =>
              Object.assign(e.target.style, shareLinkHoverStyles)
            }
            onMouseLeave={(e) =>
              Object.assign(e.target.style, shareLinkStyles)
            }
          ></a>
          <a
            href="https://x.com/UjjwalSaini0007"
            className="fab fa-twitter"
            style={shareLinkStyles}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={(e) =>
              Object.assign(e.target.style, shareLinkHoverStyles)
            }
            onMouseLeave={(e) =>
              Object.assign(e.target.style, shareLinkStyles)
            }
          ></a>
          <a
            href="tel:+919717899079"
            className="fas fa-phone"
            style={shareLinkStyles}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={(e) =>
              Object.assign(e.target.style, shareLinkHoverStyles)
            }
            onMouseLeave={(e) =>
              Object.assign(e.target.style, shareLinkStyles)
            }
          ></a>
        </div>
      </div>
      <h1 className="credit" style={creditStyles}>
        Designed with <i className="fa fa-heart pulse" style={iconStyles}></i>{" "}
        by{" "}
        <a
          href="https://www.linkedin.com/in/ujjwal-saini-220960256/"
          style={creditLinkStyles}
          onMouseEnter={(e) => (e.target.style.color = "#ffcc33")}
          onMouseLeave={(e) => (e.target.style.color = "#ffae00")}
        >
          Ujjwal Saini
        </a>
      </h1>
    </footer>
  );
};

export default Home;
