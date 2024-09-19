import React from 'react';
import Spline from '@splinetool/react-spline';
import styled from 'styled-components';
import useSound from 'use-sound';
import { useInView } from 'react-intersection-observer';

import soundeffect from '../../../components/Assest_Used/Sounds/base.mp3';
import bgref from '../../../components/Assest_Used/textures/Bg_Shades/CubeBgAbout.png';

const isTablet = window.innerWidth <= 1023;
const isPcshort = window.innerWidth <= 1330;

const spaceboardsFont = `
  @font-face {
    font-family: 'Spaceboards';
    src: url('/fonts/Spaceboards.otf') format('opentype');
  }
`;

const TestoStyle = `
  .Test {
    font-family: 'Spaceboards', sans-serif;
    font-weight: bold;
    background: linear-gradient(90deg, #0cffc5, #a939ff, #0cffc5, #a939ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-left: 4rem;
    animation: gradient 1.5s infinite;
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
`;

const HomePcContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  background-Image: url(${bgref});
  background-size: cover;
  z-index: 1;
`;

const spline_model = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  zIndex: '1',
};

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 24% ;
  right: 50px;
  width: 45%;
  z-index: 3;

  @media (max-width: 1330px) {
    top: 16% ;
  }
`;

const Card = styled.div`
  width: 30%;
  min-height: 200px;
  margin: 22px 10px 10px; /* Adjusted bottom margin to reduce space between rows */
  padding: 20px;
  background: rgba(255, 255, 255, 0.1); /* Semi-transparent background */
  border-radius: 18px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s, background 0.3s;
  cursor: pointer;
  perspective: 1000px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  backdrop-filter: blur(8px); /* Glassmorphism blur effect */
  border: 1px solid rgba(255, 255, 255, 0.7); /* Optional border for added effect */
  
  &:hover {
    transform: rotateY(0deg) rotateX(8deg) scale(1.1);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
    background: rgba(255, 255, 255, 0.2); /* Slightly more opaque on hover */
  }

  * {
    position: relative;
    z-index: 1; /* Ensure content is above the overlay */
  }
`;

const CardName = styled.div`
  font-size: 2.3rem;
  font-weight: bold;
  margin-bottom: 5px;
  color: rgb(240, 2, 149);
`;

const CardDescription = styled.div`
  margin: 10px 0;
  font-size: 1.2em;
  color: #fff;
`;

const CardLink = styled.a`
  color: #ff3705;
  text-decoration: none;
  font-weight: bold;
  // font-size: 1.2em;
  font-size: 2.2em;
  margin-top: 6px;
`;

function HomeP2() {
  const cardDetails = [
    { name: 'About Me', description: 'Passionate and innovative developer with a creative flair, dedicated to crafting visually appealing and functional web solutions.', link: '/about' },
    { name: 'Tech Skills', description: 'Explore the diverse skills and cutting-edge technologies I work with to create innovative and impactful digital solutions.', link: '/skills' },
    { name: 'Education', description: 'Explore my educational qualifications and achievements to see the foundation of my expertise and growth.', link: '/education' },
    { name: 'My Projects', description: 'Discover the projects I’ve worked on to see my creativity and technical skills in action and impact fully.', link: '/projects' },
    { name: 'Experience', description: 'See my professional experience and work history to understand my journey and the skills I’ve developed.', link: '/experience' },
    { name: 'Certifications', description: 'Showcasing my accomplishments and expertise in various fields—explore my certifications and the skills I’ve gained!', link: '/certifications' },
    // { name: 'Contact', description: 'Get in touch with me for any inquiries or collaboration opportunities—I’d love to hear from you soon!', link: '/contact' },
  ];

  const [playSound] = useSound(soundeffect);

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

  return (
    <HomePcContainer>
      <Spline ref={ref1} style={{...spline_model, opacity: inView1 ? 1 : 0, transform: inView1 ? 'translateY(0)' : 'translateY(-50px)', transition: 'opacity 1.25s ease-out 0.7s, transform 1.25s ease-out 0.7s'}} scene="https://prod.spline.design/rnK7SZJPgrRw-DL9/scene.splinecode" />
      {/* <Spline ref={ref1} style={{...spline_model, opacity: inView1 ? 1 : 0, transform: inView1 ? 'translateY(0)' : 'translateY(-50px)', transition: 'opacity 1.25s ease-out 0.7s, transform 1.25s ease-out 0.7s'}} scene="https://prod.spline.design/vyBJML2ZgR2CVUbJ/scene.splinecode" /> */}
      {/* <Spline ref={ref1} style={{...spline_model, opacity: inView1 ? 1 : 0, transform: inView1 ? 'translateY(0)' : 'translateY(-50px)', transition: 'opacity 1.25s ease-out 0.7s, transform 1.25s ease-out 0.7s'}} scene="https://prod.spline.design/rnK7SZJPgrRw-DL9/scene.splinecode" /> */}
      <div className="Test" style={{ fontSize: isTablet ? '2.8rem' : isPcshort ? '3.7rem' : '5rem', textAlign: 'center', zIndex: '2', marginRight: isTablet ? '1.5rem' : isPcshort ? '2.2rem' : '3rem', marginTop: isPcshort ? '5rem' : '10rem', marginBottom: isPcshort ? '0.5rem' : '2rem',  opacity: inView1 ? 1 : 0, transform: inView1 ? 'translateY(0)' : 'translateY(-50px)', transition: `opacity 1.25s ease-out 1s, transform 1.25s ease-out 1s`}}>
        Portfolio Overview
      </div>
      <CardsContainer ref={ref1}>
        
        {cardDetails.map((cardDetail, index) => (
          <Card
            key={index}
            style={{
              opacity: inView1 ? 1 : 0,
              transform: inView1 ? 'translateY(0)' : 'translateY(-50px)',
              transition: `opacity 1.25s ease-out ${1.4 + index}s, transform 1.25s ease-out ${1.4 + index}s`,
              border: '2px solid transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.border = '2px solid #22d3ee';
              e.currentTarget.style.borderRadius = '14px';
              e.currentTarget.style.boxShadow = '0 0 10px #22d3ee';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.border = '2px solid transparent';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <CardName style={{ fontFamily: "'Vidaloka', serif",}}>{cardDetail.name}</CardName>
            <CardDescription>{cardDetail.description}</CardDescription>
            <CardLink href={cardDetail.link} onClick={playSound} style={{ fontFamily: "'Tangerine', cursive", }}>Learn More</CardLink>
          </Card>
        ))}
      </CardsContainer>
    </HomePcContainer>
  );
}

export default HomeP2;
