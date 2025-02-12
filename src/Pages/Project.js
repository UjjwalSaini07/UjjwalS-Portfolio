// Todo:  Try Chnages
import React, { useEffect, useState } from 'react';
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet';
import useSound from 'use-sound';
import link from '../components/Assest_Used/link.png';
import github from '../components/Assest_Used/github.png';
import Spline from '@splinetool/react-spline';
import { useMediaQuery } from 'react-responsive';

// Project Thumbnail
import bgref from '../components/Assest_Used/textures/Bg_Shades/CubeBgAbout.png';
import VedicVani from '../components/Assest_Used/ProjectImg/VedicVani.png';
import MyPortfolio from '../components/Assest_Used/ProjectImg/USPortfolio.png';
import alwaysmine from '../components/Assest_Used/ProjectImg/AlwaysMine.png';
import mailscoutverify from '../components/Assest_Used/ProjectImg/MailScoutVerify.png';
import RK from '../components/Assest_Used/ProjectImg/RkElect.png';
import ProfileCard from '../components/Assest_Used/ProjectImg/ProfileCard.png';
import Cube from '../components/Assest_Used/ProjectImg/Cube.png';
import VoiceAss from '../components/Assest_Used/ProjectImg/VoiceAss.gif';
import Hotel from '../components/Assest_Used/ProjectImg/Hotel_Management.png';

import soundeffect1 from '../components/Assest_Used/Sounds/select-click.wav';

const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-9 sm:py-16 py-10",
};

const textVariant = (delay) => ({
  hidden: {
    y: -50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay: delay,
    },
  },
});

const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: type,
      delay: delay,
      duration: duration,
      ease: "easeOut",
    },
  },
});

const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: staggerChildren,
      delayChildren: delayChildren || 0,
    },
  },
});

const spline_model = { 
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  zIndex: "1",
};
const mainContSplinebg = {
  zIndex: '1',
  backgroundImage: `url(${bgref})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  transition: 'all 0.3s ease',
  position: 'relative', 
};

const projects = [
  {
    name: "Vedic Vani",
    description:
      "Explore the timeless wisdom of the Bhagavad Gita with in-depth shlokas, translations, and commentaries, connecting you to India's rich spiritual heritage.",
    tags: [
      {
        name: "HTML",
        color: "bg-orange-500",
      },
      {
        name: "tailwindcss",
        color: "bg-white",
      },
      {
        name: "React.js",
        color: "bg-green-500",
      },
      {
        name: "Python",
        color: "bg-orange-500",
      },
      {
        name: "Node.js",
        color: "bg-white",
      },
      {
        name: "Backend - Jsons",
        color: "bg-green-500",
      },
    ],
    image: VedicVani,
    live_link: "https://vedic-sadhana.vercel.app/",
    source_code_link: "https://github.com/UjjwalSaini07/VedicSadhana",
  },
  {
    name: "My Portfolio",
    description:
      "Explore my portfolio to see a diverse array of projects, showcasing my educational background, professional experience, and personal work. Each piece reflects a blend of creativity, skill, and dedication to excellence.",
    tags: [
      {
        name: "HTML",
        color: "bg-orange-500",
      },
      {
        name: "CSS, Tailwind",
        color: "bg-white",
      },
      {
        name: "Javascript",
        color: "bg-green-500",
      },
      {
        name: "React",
        color: "bg-orange-500",
      },
      {
        name: "Vanta.js",
        color: "bg-white",
      },
      {
        name: "Magic UI",
        color: "bg-green-500",
      },
      {
        name: "Three.js",
        color: "bg-orange-500",
      },
      {
        name: "Motion Ui",
        color: "bg-white",
      },
    ],
    image: MyPortfolio,
    live_link: "https://ujjwals-portfolio.vercel.app/",
    source_code_link: "*",
  },
  {
    name: "MailScoutVerify",
    description:
      "Ensure accurate email address verification to guarantee authenticity and reliability for seamless communication. Employ reliable tools to validate domains, detect errors, and confirm active accounts, reducing bounce rates.",
    tags: [
      {
        name: "Javascript",
        color: "bg-orange-500",
      },
      {
        name: "Nodejs",
        color: "bg-white",
      },
      {
        name: "Api",
        color: "bg-green-500",
      },
    ],
    image: mailscoutverify,
    live_link: "https://www.npmjs.com/package/mailscoutverify",
    source_code_link: "https://github.com/UjjwalSaini07/MailScoutVerify",
  },
  {
    name: "RK Electricals",
    description:
      "Explore RK Electricals website, crafted through freelancing. Discover our comprehensive electrical solutions, professional expertise and innovative projects, showcasing dedication to quality and client satisfaction.",
    tags: [
      {
        name: "HTML",
        color: "bg-orange-500",
      },
      {
        name: "TailwindCss",
        color: "bg-white",
      },
      {
        name: "unsplashapi",
        color: "bg-green-500",
      },
    ],
    image: RK,
    live_link: "https://ujjwalsaini07.github.io/RK_Electricals.github.io/",
    source_code_link: "https://github.com/UjjwalSaini07/RK_Electricals.github.io",
  },
  {
    name: "Profile Card",
    description:
      "Check out my Profile Card project, designed to showcase my skills and achievements in a sleek, interactive format. This site highlights my professional journey and personal flair with clean design and functionality.",
    tags: [
      {
        name: "HTML",
        color: "bg-orange-500",
      },
      {
        name: "css",
        color: "bg-green-500",
      },
    ],
    image: ProfileCard,
    live_link: "https://ujjwalsaini07.github.io/Profile_Card/",
    source_code_link: "https://github.com/UjjwalSaini07/Profile_Card",
  },
  {
    name: "Cube",
    description:
      "Explore my Rubik's Cube project, created out of my passion for cubing. This site features interactive solving techniques and visualizations, showcasing my love for cubes and technical skill. Dive in to see innovative problem-solving in action.",
    tags: [
      {
        name: "JavaScript",
        color: "bg-orange-500",
      },
      {
        name: "CSS",
        color: "bg-white",
      },
      {
        name: "HTML",
        color: "bg-green-500",
      },
    ],
    image: Cube,
    live_link: "https://ujjwalsaini07.github.io/RubikCube.github.io/",
    source_code_link: "https://github.com/UjjwalSaini07/RubikCube.github.io",
  },
  {
    name: "Voice Assistance IDE",
    description:
      "Explore my Voice Assistant project on GitHub. Created as an IDE project using Python, it showcases advanced functionality and cutting-edge technology. Dive into the code to see innovative features in action.",
    tags: [
      {
        name: "Python",
        color: "bg-orange-500",
      },
      {
        name: "Tkinter",
        color: "bg-white",
      },
      {
        name: "HTML",
        color: "bg-green-500",
      },
    ],
    image: VoiceAss,
    live_link: "https://github.com/UjjwalSaini07/Voice_assistant",
    source_code_link: "https://github.com/UjjwalSaini07/Voice_assistant",
  },
  {
    name: "Hotel Management IDE",
    description:
      "Check out my Hotel Management project on GitHub! Developed during my 12th class using Python, this IDE-based project demonstrates cutting-edge technology with advanced features tailored for hotel management.",
    tags: [
      {
        name: "Python",
        color: "bg-orange-500",
      },
      {
        name: "Tkinter",
        color: "bg-white",
      },
    ],
    image: Hotel,
    live_link: "https://github.com/UjjwalSaini07/Hotel_Management_System",
    source_code_link: "https://github.com/UjjwalSaini07/Hotel_Management_System",
  },

];

const spaceboardsFont = `
  @font-face {
    font-family: 'Spaceboards';
    src: url('/fonts/Spaceboards.otf') format('opentype');
  }
`;

const ProjectStyle = `
  .Proj {
    font-family: 'Spaceboards', sans-serif;
    font-size: 5rem;
    font-weight: bold;
    background: linear-gradient(90deg, #ff7f00, #ff0000, #ff7f00, #ff0000);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 
      0 0 3px rgba(255, 127, 0, 0.7), 
      0 0 5px rgba(255, 127, 0, 0.7), 
      0 0 7px rgba(255, 0, 0, 0.7), 
      0 0 9px rgba(255, 0, 0, 0.7), 
      0 0 12px rgba(255, 127, 0, 0.5), 
      0 0 15px rgba(255, 0, 0, 0.5);
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
        0 0 0 rgba(255, 127, 0, 0.7), 
        0 0 0 rgba(255, 127, 0, 0.7), 
        0 0 0 rgba(255, 0, 0, 0.7), 
        0 0 0 rgba(255, 0, 0, 0.7), 
        0 0 0 rgba(255, 127, 0, 0.5), 
        0 0 0 rgba(255, 0, 0, 0.5);
    }
    100% {
      text-shadow: 
        0 0 1px rgba(255, 127, 0, 1), 
        0 0 2px rgba(255, 127, 0, 1), 
        0 0 5px rgba(255, 0, 0, 1), 
        0 0 8px rgba(255, 0, 0, 1), 
        0 0 12px rgba(255, 127, 0, 0.7), 
        0 0 15px rgba(255, 0, 0, 0.7);
    }
  }

  .Proj-PC {
    display: none;
  }

  .Proj-Mobile {
    display: block;
  }

  @media (min-width: 768px) {
    .Proj-PC {
      display: block;
    }
    .Proj-Mobile {
      display: none;
    }
  }
`;


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  live_link,
  source_code_link,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="w-full sm:w-[350px] h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-3xl shadow-lg transition-transform transform hover:scale-150"
  >
    <Tilt
      options={{
        max: 25,
        scale: 1,
        speed: 300,
      }}
    >
      <div className="relative w-full h-[220px] sm:mb-10">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-3xl"
          style={{pointerEvents: "auto"}}
        />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(live_link, "_blank")}
            className="w-14 h-14 bg-black bg-opacity-60 p-2.5 rounded-full flex justify-center items-center cursor-pointer transition-transform transform hover:scale-110"
            style={{pointerEvents: "auto"}}
          >
            <img
              src={link}
              alt="live link"
              className="w-10 h-10 object-contain"
            />
          </div>
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="w-14 h-14 bg-black bg-opacity-60 p-1.5 rounded-full flex justify-center items-center cursor-pointer transition-transform transform hover:scale-110"
            style={{pointerEvents: "auto"}}
          >
            <img
              src={github}
              alt="source code"
              className="w-10 h-10 object-contain"
            />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-white font-bold text-[22px] mb-2 mt-5">{name}</h3>
        <p className="text-white text-[13.5px] mb-9">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={`${name}-${tag.name}`} className={`text-[12.5px] ${tag.color} px-2 py-1.5 rounded-full`}>
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </Tilt>
  </motion.div>
);

const Works = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  
  const handleTouchStart = () => setIsHovered(true);
  const handleTouchEnd = () => setIsHovered(false);

  const [playSoundAlert] = useSound(soundeffect1);

  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = spaceboardsFont + ProjectStyle;
    document.head.appendChild(styleElement);

    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <>
    <Helmet>
      <title>My Projects | Portfolio - Ujjwal</title>
    </Helmet>
    <div style={mainContSplinebg}>
      {!isMobile ? (
        <Spline 
          style={spline_model} 
          scene="https://prod.spline.design/z6sedxN3BKPCAM0N/scene.splinecode"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      ) : (
        'none'
      )}
      <div className="mt-1" style={{ zIndex: '20', position: 'relative', pointerEvents: "none", }}>
        <motion.section
          variants={staggerContainer(0.5, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className={`${styles.padding} max-w-12xl mx-auto sm:h-full h-[100vh]`}
        >
          <span className="hash-span" id="works">
            &nbsp;
          </span>

          <motion.div variants={textVariant(0.3)}>
            <div className="Proj Proj-PC" style={{ textAlign: 'center', marginBottom: '3rem', marginTop: '2.5rem' }}>
              My Innovative Development Works
            </div>
            <div className="Proj Proj-Mobile" style={{ textAlign: 'center', marginBottom: '2.4rem', marginLeft: '4rem', marginRight: '7rem', marginTop: '2.2rem' }}>
              Projects
            </div>
          </motion.div>
          
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-7 mt-3 overflow-hidden overflow-x-hidden overflow-y-hidden">
            {projects.map((project, index) => (
              <ProjectCard key={`project-${index}`} index={index} {...project} 
              onClick={() => {
                playSoundAlert(); 
              }}/>
            ))}
          </div>

          <div className="md:hidden mt-5 flex flex-col gap-4 overflow-hidden overflow-x-hidden overflow-y-hidden">
            {projects.map((project, index) => (
              <ProjectCard key={`project-${index}`} index={index} {...project} 
              onClick={() => {
                playSoundAlert();
              }}/>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
    </>
  );
};

export default Works;
