import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import IconCloud from "../@/components/magicui/icon-cloud";
import { Helmet } from 'react-helmet';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';
import Spline from '@splinetool/react-spline';

import bgref from '../components/Assest_Used/textures/Bg_Shades/CubeBgAbout.png'

// Define motion variants
const textVariant = (delay) => ({
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.25, delay: delay },
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
    transition: { type: type, delay: delay, duration: duration, ease: "easeOut" },
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

const spaceboardsFont = `
  @font-face {
    font-family: 'Spaceboards';
    src: url('/fonts/Spaceboards.otf') format('opentype');
  }
`;

const SkillStyle = `
  .Tech {
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
  .Tech-PC {
    display: none;
  }

  .Tech-Mobile {
    display: block;
  }

  @media (min-width: 768px) {
    .Tech-PC {
      display: block;
    }
    .Tech-Mobile {
      display: none;
    }
  }
`;

// Define technologies array
const technologies = [
  { name: "HTML 5", icon: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" },
  { name: "CSS 3", icon: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_640.png" },
  { name: "JavaScript", icon: "https://i.pinimg.com/736x/b4/de/20/b4de205cb6d4e7cad43c2971f780cfd9.jpg" },
  { name: "React JS", icon: "https://www.svgrepo.com/show/355190/reactjs.svg" },
  { name: "Tailwind CSS", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk03fpMxbjzvgaDz2z3gu5G-9UeqgnNfUdd7gzSo9-er843XxKIG3g46lO1GRUF-L9UWs&usqp=CAU" },
  { name: "Python", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968286.png" },
  { name: "Django", icon: "https://www.opengis.ch/wp-content/uploads/2020/04/django-python-logo.png" },
  { name: "Cpp", icon: "https://cpp-lang.net/img/cpp.svg" },
  // { name: "C Sharp", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk0LQoEffBJcfDkSDSgOusJAqyTFxqMC1dCzwm0KgB0cMeGzVg3sGoON5Gn0m6H0_p73o&usqp=CAU" },
  { name: "Ardiuno*", icon: "https://siminnovations.com/wiki/images/7/7a/Arduino_logo_round.png" },
  { name: "Node JS", icon: "https://academyclass.com/wp-content/uploads/2021/11/ACCL-NodeJS-1200x1200.png" },
  { name: "MySQL", icon: "https://wallpapers.com/images/hd/my-s-q-l-development-services-circle-logo-xkzj685lk8e3zego.jpg" },
  { name: "MongoDB*", icon: "https://x5h8w2v3.rocketcdn.me/wp-content/uploads/2021/10/Logo-MongoDB.png" },
  { name: "Mongoose", icon: "https://w7.pngwing.com/pngs/948/837/png-transparent-mongoose-hd-logo.png" },
  { name: "Express", icon: "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png" },
  { name: "Three JS*", icon: "https://pbs.twimg.com/profile_images/1390736294666506242/_D_h6aWq_400x400.png", dark: true },
  { name: "Git", icon: "https://cdn-icons-png.flaticon.com/512/4494/4494740.png" },
  { name: "Github", icon: "https://cdn-icons-png.flaticon.com/256/25/25231.png" },
  { name: "VS Code", icon: "https://e1.pngegg.com/pngimages/947/906/png-clipart-clay-os-6-a-macos-icon-visual-studio-code-blue-and-white-illustration.png" },
  // { name: "Java", icon: "https://banner2.cleanpng.com/20180504/obw/kisspng-java-programming-language-computer-programming-obj-java-5aecd0e57187f9.7147867015254694134651.jpg" },
  { name: "Bootstrap", icon: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" },
  { name: "Google Cloud*", icon: "https://bcassetcdn.com/public/blog/wp-content/uploads/2022/08/29150705/Google-Cloud.png" },
];

const slugs = [
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "vercel",
  "git",
  "github",
  "visualstudiocode",
  "bootstrap",
  "cpp",
  "python",
  "django",
  "arduinoc",
  "threejs",
  "mysql",
  "GoogleCloud",
  "figma",
];

const Tech = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  
  const handleTouchStart = () => setIsHovered(true);
  const handleTouchEnd = () => setIsHovered(false);

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = spaceboardsFont + SkillStyle;
    document.head.appendChild(styleElement);

    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <>
    <Helmet>
        <title>My Skills | Portfolio - Ujjwal</title>
    </Helmet>
    {/* <div style={{backgroundImage: `url(${bgref})`}}> */}
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
        <motion.div
          variants={textVariant(0.8)}
          initial="hidden"
          animate="show"
          className="text-center mb-16 px-4"
        >
          <div className="Tech Tech-PC" style={{ textAlign: 'center', marginBottom: '3rem', marginTop: '7.2rem' }}>
            My Techincal Skills
          </div>
          <div className="Tech Tech-Mobile" style={{ textAlign: 'center', marginBottom: '3.5rem', marginTop: '8rem', marginRight: '2.8rem' }}>
            My Tech Stack
          </div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-10 mt-12 px-4">
          {technologies.map((technology, index) => (
            <motion.div
              variants={textVariant(0.8)}
              initial="hidden"
              animate="show"
              key={technology.name}
              variants={fadeIn("", "", index * 0.1, 0.75)}
              className="relative w-64 h-64 p-6 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 shadow-lg flex flex-col items-center justify-center transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-tl from-transparent to-black opacity-30"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.5 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img
                src={technology.icon}
                alt={technology.name}
                className={`relative w-24 h-24 object-contain rounded-full shadow-lg border-4 border-white ${technology.dark ? "bg-gray-700" : ""}`}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2, rotate: 15 }}
                transition={{ duration: 0.3 }}
                style={{pointerEvents: "auto",}}
              />
              <h3 className="relative text-white mt-4 text-center text-xl font-semibold tracking-tight">
                {technology.name}
              </h3>
            </motion.div>
          ))}
        </div>

        <div className="Tech Tech-Mobile" ref={ref1} style={{ textAlign: 'center', marginBottom: '1rem', marginTop: '3.5rem', marginRight: '3rem' , fontSize: '5.2rem', opacity: inView1 ? 1 : 0, transform: inView1 ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)', transition: 'opacity 1.5s ease-out, transform 2.5s ease-out'}}>
            Skills in CLoud
        </div>

        <div className="block md:hidden px-4 py-6 flex items-center justify-center" ref={ref1} style={{opacity: inView1 ? 1 : 0, transform: inView1 ? 'translateY(0) scale(1)' : 'translateY(-50px) scale(0.9)', transition: 'opacity 3s ease-out, transform 4.5s ease-out', pointerEvents: "auto",}}>
          <div className="relative w-full max-w-[90%] mx-auto bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg shadow-xl p-4">
            <div className="bg-white rounded-lg border border-gray-300 shadow-md p-6 flex items-center justify-center">
              <div className="text-blue-600 font-bold" ref={ref1} style={{ fontSize: '2rem', alignItems: 'center', justifyContent: 'center', opacity: inView1 ? 1 : 0, transform: inView1 ? 'translateY(0) scale(1)' : 'translateY(-50px) scale(0.9)', transition: 'opacity 5s ease-out, transform 7.5s ease-out'}}><IconCloud iconSlugs={slugs} /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Tech;

// Todo: Use in Case of Emergency
// ! - bg-gradient-to-br from-blue-500 to-green-500
// ! - bg-gradient-to-br from-purple-400 via-pink-500 to-red-500