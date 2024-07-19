import React, { useEffect } from 'react';
import { motion } from "framer-motion";

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
  { name: "React JS", icon: "https://www.openxcell.com/wp-content/uploads/2021/11/reactjs-inner.svg" },
  { name: "Tailwind CSS", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk03fpMxbjzvgaDz2z3gu5G-9UeqgnNfUdd7gzSo9-er843XxKIG3g46lO1GRUF-L9UWs&usqp=CAU" },
  { name: "Python", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968286.png" },
  { name: "Django", icon: "https://www.opengis.ch/wp-content/uploads/2020/04/django-python-logo.png" },
  { name: "Cpp", icon: "https://cpp-lang.net/img/cpp.svg" },
  { name: "C Sharp", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk0LQoEffBJcfDkSDSgOusJAqyTFxqMC1dCzwm0KgB0cMeGzVg3sGoON5Gn0m6H0_p73o&usqp=CAU" },
  { name: "Ardiuno", icon: "https://siminnovations.com/wiki/images/7/7a/Arduino_logo_round.png" },
  { name: "Node JS", icon: "https://academyclass.com/wp-content/uploads/2021/11/ACCL-NodeJS-1200x1200.png" },
  { name: "MySQL", icon: "https://wallpapers.com/images/hd/my-s-q-l-development-services-circle-logo-xkzj685lk8e3zego.jpg" },
  { name: "Three JS", icon: "https://pbs.twimg.com/profile_images/1390736294666506242/_D_h6aWq_400x400.png", dark: true },
  { name: "Git", icon: "https://cdn-icons-png.flaticon.com/512/4494/4494740.png" },
  { name: "Github", icon: "https://cdn-icons-png.flaticon.com/256/25/25231.png" },
  { name: "VS Code", icon: "https://e1.pngegg.com/pngimages/947/906/png-clipart-clay-os-6-a-macos-icon-visual-studio-code-blue-and-white-illustration.png" },
  { name: "Java", icon: "https://banner2.cleanpng.com/20180504/obw/kisspng-java-programming-language-computer-programming-obj-java-5aecd0e57187f9.7147867015254694134651.jpg" },
  { name: "Bootstrap", icon: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" },
  { name: "Google Cloud", icon: "https://bcassetcdn.com/public/blog/wp-content/uploads/2022/08/29150705/Google-Cloud.png" },
];

const Tech = () => {

  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = spaceboardsFont + SkillStyle;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <>
      <motion.div
        variants={textVariant(0.1)}
        initial="hidden"
        animate="show"
        className="text-center mb-16 px-4"
      >
        <div className="Tech Tech-PC" style={{ textAlign: 'center', marginBottom: '3rem', marginTop: '4rem' }}>
          My Techincal Skills
        </div>
        <div className="Tech Tech-Mobile" style={{ textAlign: 'center', marginBottom: '3.5rem', marginTop: '2.5rem', marginRight: '2.8rem' }}>
          My Tech Stack
        </div>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-12 px-4">
        {technologies.map((technology, index) => (
          <motion.div
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
            />
            <h3 className="relative text-white mt-4 text-center text-xl font-semibold tracking-tight">
              {technology.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Tech;



//Todo: Change3
// import React from "react";
// import { motion } from "framer-motion";

// // Define motion variants
// const textVariant = (delay) => ({
//   hidden: { y: -50, opacity: 0 },
//   show: {
//     y: 0,
//     opacity: 1,
//     transition: { type: "spring", duration: 1.25, delay: delay },
//   },
// });

// const fadeIn = (direction, type, delay, duration) => ({
//   hidden: {
//     x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
//     y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
//     opacity: 0,
//   },
//   show: {
//     x: 0,
//     y: 0,
//     opacity: 1,
//     transition: { type: type, delay: delay, duration: duration, ease: "easeOut" },
//   },
// });

// // Define technologies array
// const technologies = [
//   { name: "HTML 5", icon: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_640.png" },
//   { name: "CSS 3", icon: "https://example.com/css-icon.png" },
//   { name: "JavaScript", icon: "https://example.com/javascript-icon.png" },
//   { name: "TypeScript", icon: "https://example.com/typescript-icon.png" },
//   { name: "React JS", icon: "https://example.com/reactjs-icon.png" },
//   { name: "Redux Toolkit", icon: "https://example.com/redux-icon.png" },
//   { name: "Next Js", icon: "https://example.com/nextjs-icon.png", dark: true },
//   { name: "Tailwind CSS", icon: "https://example.com/tailwind-icon.png" },
//   { name: "Node JS", icon: "https://example.com/nodejs-icon.png" },
//   { name: "MongoDB", icon: "https://example.com/mongodb-icon.png" },
//   { name: "Express JS", icon: "https://example.com/express-icon.png" },
//   { name: "MySQL", icon: "https://example.com/mysql-icon.png" },
//   { name: "Three JS", icon: "https://example.com/threejs-icon.png", dark: true },
//   { name: "Git", icon: "https://example.com/git-icon.png" },
//   { name: "Docker", icon: "https://example.com/docker-icon.png" },
// ];

// const Tech = () => {
//   return (
//     <>
//       <motion.div
//         variants={textVariant(0.1)}
//         initial="hidden"
//         animate="show"
//         className="text-center mb-12"
//       >
//         <p className="text-gray-400 text-lg">Technologies I have worked on</p>
//         <h2 className="text-4xl font-bold text-white">Skills</h2>
//       </motion.div>

//       <div className="flex flex-row flex-wrap justify-center gap-8 mt-8">
//         {technologies.map((technology, index) => (
//           <motion.div
//             key={technology.name}
//             variants={fadeIn("", "", index * 0.1, 0.75)}
//             className="relative w-64 h-64 p-4 rounded-lg bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 shadow-lg flex flex-col items-center justify-center transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-xl overflow-hidden"
//           >
//             <motion.img
//               src={technology.icon}
//               alt={technology.name}
//               className={`w-24 h-24 object-contain ${technology.dark ? "bg-gray-700 rounded-full p-2" : ""}`}
//               initial={{ scale: 1 }}
//               whileHover={{ scale: 1.2 }}
//               transition={{ duration: 0.3 }}
//             />
//             <h3 className="text-white mt-4 text-center text-xl font-semibold">
//               {technology.name}
//             </h3>
//             <motion.div
//               className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-300"
//             />
//           </motion.div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Tech;

// Todo: Use in Case of Emergency
// ! - bg-gradient-to-br from-blue-500 to-green-500