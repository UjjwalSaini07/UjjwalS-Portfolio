// TOdo: Try 1
import React from 'react';
import Spline from '@splinetool/react-spline';
import styled from 'styled-components';

const HomePcContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
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

const division_overlay = styled.div`
  position: absolute;
  top: 20px;
  width: 60%;
  font-size: large;
  left: 30px;
  z-index: 4;
  color: rgb(240, 2, 149);
  background: transparent;
  padding: 10px;
  border-radius: 8px;
`;

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
  background: linear-gradient(145deg, #ffffff, #f0f0f0); /* Gradient background */
  border-radius: 16px;
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

  &:hover {
    transform: rotateY(10deg) rotateX(10deg) scale(1.1);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.4);
    background: linear-gradient(145deg, #ffffff, #e0e0e0); /* Gradient on hover */
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
  color: #555;
`;

const CardLink = styled.a`
  color: #0212f0;
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

  return (
    <HomePcContainer>
      <Spline style={spline_model} scene="https://prod.spline.design/rnK7SZJPgrRw-DL9/scene.splinecode" />
      <division_overlay>
        {/* Other content can be added here */}
      </division_overlay>
      <CardsContainer>
        {cardDetails.map((cardDetail, index) => (
          <Card key={index}>
            <CardName>{cardDetail.name}</CardName>
            <CardDescription>{cardDetail.description}</CardDescription>
            <CardLink href={cardDetail.link}>Learn More</CardLink>
          </Card>
        ))}
      </CardsContainer>
    </HomePcContainer>
  );
}

export default HomeP2;


// TOdo: Try2

