import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Footer.css';

const footer = {
  position: "relative",
  top: "20px",
  width: "62%",
  fontSize: "large",
  left: "30px",
  zIndex: "5",
  color: "rgb(240, 2, 149)",
  background: "transparent",
  padding: "10px",
  borderRadius: "8px",
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
    <section className="footerHome">
      <div className="box-container">
        <div className="box">
          <h3 className="MainPort">UjjwalS Portfolio</h3>
          <p>
            Thank you for visiting. Let's connect over socials and elevate
            together. 🚀 <br /> <br /> Keep Rising 🚀
            <br />
            Connect with me over live Meeting!
          </p>
        </div>
        <div className="box">
          <h3>Quick Links</h3>
          <Link to="/">
            <i className="fas fa-chevron-circle-right"></i> Home
          </Link>
          <Link to="/about">
            <i className="fas fa-chevron-circle-right"></i> About
          </Link>
          <Link to="/skills">
            <i className="fas fa-chevron-circle-right"></i> Skills
          </Link>
          <Link to="/education">
            <i className="fas fa-chevron-circle-right"></i> Education
          </Link>
          <Link to="/projects">
            <i className="fas fa-chevron-circle-right"></i> Project
          </Link>
          <Link to="/experience">
            <i className="fas fa-chevron-circle-right"></i> Experience
          </Link>
        </div>
        <div className="box">
          <h3>Contact Info</h3>
          <p>
            <i className="fas fa-phone"></i> +91 97178-99079
          </p>
          <p>
            <i className="fas fa-envelope"></i> ujjwalsaini0007@gmail.com
          </p>
          <p>
            <i className="fas fa-map-marked-alt"></i> Delhi, India-110015
          </p>
          <div className="share">
            <a
              href="https://www.linkedin.com/in/ujjwal-saini-220960256/"
              className="fab fa-linkedin fa-bounce"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              href="https://github.com/UjjwalSaini07"
              className="fab fa-github fa-bounce"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              href="mailto:ujjwalsaini0007@gmail.com"
              className="fas fa-envelope  fa-bounce"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              href="https://x.com/UjjwalSaini0007"
              className="fab fa-twitter fa-bounce"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              href="tel:+919717899079"
              className="fas fa-phone fa-bounce"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </div>
        </div>
      </div>
      <h1 className="credit">
        Designed with <i className="fa fa-heart pulse"></i> by{" "}
        <a href="https://www.linkedin.com/in/ujjwal-saini-220960256/">
          {" "}
          Ujjwal Saini
        </a>
      </h1>
    </section>
  );
};

export default Home;
