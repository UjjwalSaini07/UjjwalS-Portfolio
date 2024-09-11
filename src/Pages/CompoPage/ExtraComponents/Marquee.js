import React, { useEffect, useState } from 'react';
import { Backdrop } from '@react-three/drei';
import { useInView } from 'react-intersection-observer';

import Shade1 from '../../../components/Assest_Used/textures/Gradients/Shade1.png';
import Shade2 from '../../../components/Assest_Used/textures/Gradients/Shade2.png';
import Shade3 from '../../../components/Assest_Used/textures/Gradients/Shade3.png';
import bgref from '../../../components/Assest_Used/textures/Bg_Shades/CubeBgAbout.png';

const reviews = [
  {
    name: "Ayush",
    username: "@ayush",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: Shade1,
  },
  {
    name: "Keshav",
    username: "@keshav",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: Shade2,
  },
  {
    name: "Sameer",
    username: "@sam",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: Shade3,
  },
  {
    name: "Rohit",
    username: "@rohit",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: Shade3,
  },
  {
    name: "Ansh",
    username: "@ansh",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: Shade2,
  },
  {
    name: "Jhanvi",
    username: "@jhanvi",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: Shade1,
  },
];

const spaceboardsFont = `
  @font-face {
    font-family: 'Spaceboards';
    src: url('/fonts/Spaceboards.otf') format('opentype');
  }
`;

const TestoStyle = `
  .Test {
    font-family: 'Spaceboards', sans-serif;
    font-size: 5rem;
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

const Marquee = ({ children, reverse = false, pauseOnHover = false, className = '' }) => {

  const { ref: ref0, inView: inView0 } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

  const marqueeStyle = {
    display: 'flex',
    animation: `marquee 20s linear infinite`,
    whiteSpace: 'nowrap',
    ...(reverse && { animationDirection: 'reverse' }),
    opacity: inView0 ? 1 : 0,
    transform: inView0 ? 'translateY(0)' : 'translateY(-50px)',
    transition: `opacity 1.25s ease-out 5s, transform 1.25s ease-out 5s`,
  };

  const containerStyle = {
    overflow: 'hidden',
    display: 'flex',
    opacity: inView0 ? 1 : 0,
    transform: inView0 ? 'translateY(0)' : 'translateY(-50px)',
    transition: `opacity 1.25s ease-out 5s, transform 1.25s ease-out 4.8s`,
  };

  return (
    <div style={containerStyle} className={className} ref={ref0}>
      <div  ref={ref0} style={marqueeStyle}>{children}</div>
    </div>
  );
};

const ReviewCard = ({ img, name, username, body }) => {
  const [hover, setHover] = useState(false);

  const cardStyle = {
    position: 'relative',
    width: '35rem',
    height: '8rem', 
    margin: '0.2px 0.5rem 1.2rem',
    cursor: 'pointer',
    overflow: 'hidden',
    borderRadius: '1rem',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    padding: '1.2rem',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    boxShadow: hover ? '0 8px 16px rgba(0, 0, 0, 0.2)' : '0 4px 8px rgba(0, 0, 0, 0.1)',
    transform: hover ? 'scale(1.02)' : 'scale(1)',
    backdropFilter: 'blur(5px)',
  };

  const darkModeStyle = {
    borderColor: 'rgba(255, 255, 255, 0.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  };

  return (
    <figure
      style={{ ...cardStyle, ...darkModeStyle }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5rem' }}>
        <img style={{ borderRadius: '50%' }} width="32" height="32" alt="" src={img} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <figcaption style={{ fontSize: '0.875rem', fontWeight: '500', color: 'white' }}>
            {name}
          </figcaption>
          <p style={{ fontSize: '0.75rem', fontWeight: '500', color: 'rgba(255, 255, 255, 0.4)' }}>
            {username}
          </p>
        </div>
      </div>
      <blockquote style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: 'white' }}>{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    const keyframes = `
      @keyframes marquee {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
    `;
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    // ! For Styling Font
    const styleElement = document.createElement('style');
    styleElement.innerHTML = spaceboardsFont + TestoStyle;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
  const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

  const containerStyle = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    borderRadius: '0.75rem',
    // border: '1px solid rgba(0, 0, 0, 0.1)',
    // backgroundColor: '#020214',
    backgroundImage: `url(${bgref})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
  };

  const gradientStyle = {
    pointerEvents: 'none',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: '18%', // Adjust the gradient width
    // background: 'linear-gradient(to right, #020214, rgba(2, 2, 20, 0))',
  };

  const gradientReverseStyle = {
    ...gradientStyle,
    left: 'auto',
    right: 0,
    // background: 'linear-gradient(to left, #020214, rgba(2, 2, 20, 0))',
  };

  const { ref: ref0, inView: inView0 } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

  return (
    <div style={containerStyle}>
      <div className="Test" ref={ref0} style={{ textAlign: 'center', marginBottom: '2.5rem', marginTop: '1rem',  opacity: inView0 ? 1 : 0, transform: inView0 ? 'translateY(0)' : 'translateY(50px)', transition: `opacity 1.25s ease-out 4.2s, transform 1.25s ease-out 4.2s`}}>
        Testinomails
      </div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div style={gradientStyle}></div>
      <div style={gradientReverseStyle}></div>
    </div>
  );
}

export default MarqueeDemo;


