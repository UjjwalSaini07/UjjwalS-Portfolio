import React, { useEffect } from 'react';
import Img1 from '../components/Assest_Used/UjjwalImg1.jpg';
import './AboutPC.css'; 
import gif from '../components/Assest_Used/GIFs/Gif_2.gif';

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
  
  .about-me{
    font-size: 6.2rem;
  }
`;
const About = () => {

  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = spaceboardsFont + aboutMeStyle;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <section className="about" style={{
      position: 'relative',
      padding: '35px 10px',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: '#e2e8f0',
      overflow: 'hidden',
      backgroundImage: `url(${gif})`, // Use GIF as background
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }} id="about">
      <div style={{
        backdropFilter: 'blur(1px)',
        borderRadius: '30px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        padding: '20px',
        maxWidth: '1200px',
        width: '100%',
        margin: '5px auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '5px'
      }}>
      <div className="about-me" style={{ textAlign: 'left', marginRight: '3.4rem', marginLeft: '4rem', marginBottom: '-2rem'}}>
        About Me
      </div>
      <div className="row">
        <div className="image">
            <img
                className={"tilt"}
                src={Img1}
                alt="Image"
            />
        </div>
        <div className="content">
          <h3>I'm Ujjwal Saini</h3>
          <span className="tag">Full Stack Developer | Designer </span>
          
          <p>I am Ujjwal, an IT Engineering student passionate about computers and aiming to kickstart a career in Software Development and Web Development. Currently based in Delhi, India, I am pursuing my undergraduate studies in Information Technology at GGSIPU. My enthusiasm lies in enhancing my coding abilities and crafting applications and websites. As Well-organised & collaborative individual,<br/> I thrive in team environemnts and enjoy broinging inovative solutions to table.<br/><br/> Awesome!! Let's Build the Next Big Thing...
          </p>
          
          <div className="box-container">
            <div className="box">
              <p><span> age: </span> 21</p>
              <p><span> phone : </span> +91 97178-99079</p>
              <p><span> Birthday : </span> 7th Feburary</p>
            </div>
            <div className="box">
              <p><span> email : </span> ujjwalsaini0007@gmail.com</p>
              <p><span> place : </span> Delhi, India - 110015</p>
              <p><span> Language Known : </span> English, Hindi, Punjabi</p>
            </div>
            <div className="box">
              <p><span> Hobbies : </span> Cube Solving, Gardening, Learning New Skills, Travelling, Listening Music</p>
            </div>
          </div>
          
          <div className="glowbtnAbt">
            <a href="https://drive.google.com/file/d/1dUp-F4kjgafGYs9xX6DUDbi6crlxQqjt/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn"
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
              width: '40%',
              textAlign: 'center',
              cursor: 'pointer'
            }}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Resume
            </a>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;
