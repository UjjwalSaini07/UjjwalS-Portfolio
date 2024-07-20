// import React from 'react';

// const Project = () => {
//   return (
//     <div style={{ textAlign: 'center' }}>
//       <h1 style={{ color: 'white', fontWeight: 'bold', fontSize: '50px'}}>Projects</h1>
//       <p style={{ color: 'white', fontWeight: 'bold' }} >Here are some of the projects we've worked on.</p>
//     </div>
//   );
// };

// export default Project;

// TOdo: adding the chnage 
import React, { useEffect } from 'react';
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  // heroHeadText:
  //   "font-black text-white lg:text-[80px] sm:text-[60px] text-[40px] lg:leading-[98px] mt-2",
  // heroSubText:
  //   "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] text-[16px] lg:leading-[40px]",
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

const projects = [
  {
    name: "Price Watch",
    description:
      "A web application that tracks Amazon product prices using web scraping, notifying users of price drops and alerting competitors when products go out of stock using cron jobs.",
    tags: [
      {
        name: "next.js",
        color: "bg-blue-500",
      },
      {
        name: "webscraping",
        color: "bg-green-500",
      },
      {
        name: "tailwindcss",
        color: "bg-pink-500",
      },
    ],
    image: "https://w7.pngwing.com/pngs/105/958/png-transparent-formula-d-drifting-logo-car-drift-cdr-text-trademark-thumbnail.png",
    live_link: "#",
    source_code_link: "#",
  },
  {
    name: "Get Social",
    description:
      "Fully functional social-media web application with features like post, follow/unfollow, like/unlike posts, user register and login, chat and much more.",
    tags: [
      {
        name: "mern",
        color: "bg-blue-500",
      },
      {
        name: "socket.io",
        color: "bg-green-500",
      },
      {
        name: "css",
        color: "bg-pink-500",
      },
    ],
    image: "https://w7.pngwing.com/pngs/105/958/png-transparent-formula-d-drifting-logo-car-drift-cdr-text-trademark-thumbnail.png",
    live_link: "#",
    source_code_link: "#",
  },
  {
    name: "Image Gallery",
    description:
      "Image gallery in which users can browse images. Search specific topic of images.",
    tags: [
      {
        name: "react",
        color: "bg-blue-500",
      },
      {
        name: "tailwindcss",
        color: "bg-green-500",
      },
      {
        name: "unsplashapi",
        color: "bg-pink-500",
      },
    ],
    image: "https://w7.pngwing.com/pngs/105/958/png-transparent-formula-d-drifting-logo-car-drift-cdr-text-trademark-thumbnail.png",
    live_link: "#",
    source_code_link: "#",
  },
  {
    name: "Blog Page",
    description:
      "Express app that enables users to save blogs and their daily journal.",
    tags: [
      {
        name: "express.js",
        color: "bg-blue-500",
      },
      {
        name: "mongodb",
        color: "bg-green-500",
      },
      {
        name: "css",
        color: "bg-pink-500",
      },
    ],
    image: "https://w7.pngwing.com/pngs/105/958/png-transparent-formula-d-drifting-logo-car-drift-cdr-text-trademark-thumbnail.png",
    live_link: "#",
    source_code_link: "#",
  },
];

const spaceboardsFont = `
  @font-face {
    font-family: 'Spaceboards';
    src: url('/fonts/Spaceboards.otf') format('opentype');
  }
`;

const WorkExStyle = `
  .Work-Ex {
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
    className="w-full sm:w-[380px] flex justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-3xl shadow-lg transition-transform transform hover:scale-105"
  >
    <Tilt
      options={{
        max: 25,
        scale: 1,
        speed: 400,
      }}
    >
      <div className="relative w-full h-[235px] mb-8">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-3xl"
        />
        <div className="absolute inset-0 flex gap-2 justify-end m-3 card-img_hover">
          <div
            title="Check Live Site!!"
            onClick={() => window.open(live_link, "_blank")}
            className="w-14 h-14 bg-black bg-opacity-60 rounded-full flex justify-center items-center cursor-pointer transition-transform transform hover:scale-110"
          >
            <img
              src={"https://github.com/sanyam542/portfolio-2/blob/main/src/assets/link.png?raw=true"} // Placeholder link icon URL
              alt="live link"
              className="w-10 h-10 object-contain"
            />
          </div>
          <div
            title="Github Repository"
            onClick={() => window.open(source_code_link, "_blank")}
            className="w-14 h-14 bg-black bg-opacity-60 p-2 rounded-full flex justify-center items-center cursor-pointer transition-transform transform hover:scale-110"
          >
            <img
              src={"https://github.com/sanyam542/portfolio-2/blob/main/src/assets/github.png?raw=true"} // Placeholder github icon URL
              alt="source code"
              className="w-10 h-10 object-contain"
            />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-white font-bold text-[22px] mb-3">{name}</h3>
        <p className="text-white text-[13.5px] mb-8">{description}</p>
        {/* Tags Used in Tech Stack */}
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
  // This USeEffect is Used for Custom Fonting
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = spaceboardsFont + WorkExStyle;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <motion.section
      variants={staggerContainer(0.5, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-10xl`}
    >
      <span className="hash-span" id="works">
        &nbsp;
      </span>
      <motion.div variants={textVariant(0.1)}>
        <div className="Work-Ex" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        My Projects
      </div>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-gray-300 text-[20px] max-w-6xl">
          
        </motion.p>
      </div>
      {/* <div className="mt-20 flex flex-wrap gap-4"> */}
      <div className="mt-10 flex sm:flex-nowrap flex-wrap gap-5">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </motion.section>
  );
};

export default Works;

// TOdo: Changes Additional Up
