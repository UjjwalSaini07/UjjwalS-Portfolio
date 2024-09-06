import React from 'react';
import Spline from '@splinetool/react-spline';
import styled from 'styled-components';
import useSound from 'use-sound';
import { useInView } from 'react-intersection-observer';

import soundeffect from '../../../components/Assest_Used/Sounds/base.mp3';

const HomePcContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  background: #020215;
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
  position: relative;
  top: 25px;
  right: 50px;
  width: 45%;
  z-index: 3;
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
  
  // &:before {
  //   content: '';
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   border-radius: 16px;
  //   background: linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.3));
  //   opacity: 0.5; /* Slightly opaque gradient overlay */
  //   z-index: 0; /* Ensure it is behind the content */
  // }

  * {
    position: relative;
    z-index: 1; /* Ensure content is above the overlay */
  }
`;

const CardName = styled.div`
  font-size: 2.2em;
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
  font-size: 1.2em;
  margin-top: 10px;
`;

function HomeP2() {
  const cardDetails = [
    { name: 'About Me', description: 'Passionate and innovative developer with a creative flair, dedicated to crafting visually appealing and functional web solutions.', link: '/about' },
    { name: 'Skills', description: 'Explore the diverse skills and cutting-edge technologies I work with to create innovative and impactful digital solutions.', link: '/skills' },
    { name: 'Education', description: 'Explore my educational qualifications and achievements to see the foundation of my expertise and growth.', link: '/education' },
    { name: 'Projects', description: 'Discover the projects I’ve worked on to see my creativity and technical skills in action and impact fully.', link: '/projects' },
    { name: 'Experience', description: 'See my professional experience and work history to understand my journey and the skills I’ve developed.', link: '/experience' },
    { name: 'Contact', description: 'Get in touch with me for any inquiries or collaboration opportunities—I’d love to hear from you soon!', link: '/contact' },
  ];

  const [playSound] = useSound(soundeffect);

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

  return (
    <HomePcContainer>
      <Spline ref={ref1} style={{...spline_model, opacity: inView1 ? 1 : 0, transform: inView1 ? 'translateY(0)' : 'translateY(-50px)', transition: 'opacity 1.25s ease-out 0.7s, transform 1.25s ease-out 0.7s'}} scene="https://prod.spline.design/rnK7SZJPgrRw-DL9/scene.splinecode" />
      <CardsContainer ref={ref1}>
        {cardDetails.map((cardDetail, index) => (
          <Card
            key={index}
            style={{
              opacity: inView1 ? 1 : 0,
              transform: inView1 ? 'translateY(0)' : 'translateY(-50px)',
              transition: `opacity 1.25s ease-out ${1.2 + index}s, transform 1.25s ease-out ${1.2 + index}s`,
            }}
          >
            <CardName>{cardDetail.name}</CardName>
            <CardDescription>{cardDetail.description}</CardDescription>
            <CardLink href={cardDetail.link} onClick={playSound}>Learn More</CardLink>
          </Card>
        ))}
      </CardsContainer>
    </HomePcContainer>
  );
}

export default HomeP2;
