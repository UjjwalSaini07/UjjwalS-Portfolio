import React, { useEffect, useState } from 'react';
import Img1 from '../components/Assest_Used/UjjwalImg1.jpg';
// import USresume from '../components/Assest_Used/';
import './About.css'; 

const spaceboardsFont = `
  @font-face {
    font-family: 'Spaceboards';
    src: url('/fonts/Spaceboards.otf') format('opentype');
  }
`;

const aboutMeStyle = `
  .about-me {
    font-family: 'Spaceboards', sans-serif;
    font-size: 5rem;
    font-weight: bold;
    background: linear-gradient(180deg, #e73e0d, #00FF88);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    margin-left: 4rem;
    animation: gradient 5s infinite;
    letter-spacing: 0.1rem;
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
`;

const About = () => {

    const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = spaceboardsFont + aboutMeStyle;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-me" style={{ textAlign: 'center' }}>
        About Me
      </div>
      <div className="row">
        <div className="image">
            <img
                className={isClicked ? "tilt clicked" : "tilt"}
                src={Img1}
                alt="Image"
                onClick={() => setIsClicked(!isClicked)}
            />
          {/* <img className="tilt" src={Img1} alt="Image" /> */}
        </div>
        <div className="content">
          <h3>I'm Ujjwal Saini</h3>
          <span className="tag">Full Stack Developer | Designer </span>
          
          <p>I am Ujjwal, an IT Engineering student passionate about computers and aiming to kickstart a career in Software Development and Web Development. Currently based in Delhi, India, I am pursuing my undergraduate studies in Information Technology at GGSIPU. My enthusiasm lies in enhancing my coding abilities and crafting applications and websites. As Well-organised & collaborative individual, I thrive in team environemnts and enjoy broinging inovative solutions to table.<br/><br/> Awesome!! Let's Build the Next Big Thing...
          </p>
          
          <div className="box-container">
            <div className="box">
              <p><span> age: </span> 21</p>
              <p><span> phone : </span> +91 97178-99079</p>
            </div>
            <div className="box">
              <p><span> email : </span> ujjwalsaini0007@gmail.com</p>
              <p><span> place : </span> Delhi, India - 110015</p>
            </div>
          </div>
          
          <div className="resumebtn">
            <a href="#" target="_blank" rel="noopener noreferrer" className="btn">
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
