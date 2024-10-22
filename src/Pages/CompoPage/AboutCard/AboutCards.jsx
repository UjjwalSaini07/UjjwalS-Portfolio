import React from "react";
import { Link } from "react-router-dom";
import useSound from 'use-sound';
import { useInView } from 'react-intersection-observer';

import soundeffect from '../../../components/Assest_Used/Sounds/base.mp3';
import AboutCard from "./AboutCard";

export default function AboutCards() {
  const [playSound] = useSound(soundeffect);

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

  const education = {
    title: "My Education",
    description: "College and Degree",
    points: ["Engineering College, GGSIPU-26, ", "IT"],
    content: [],
  };

  const skills = {
    title: "My Technical Skills",
    description: "",
    points: ["React, ","Javascript, ","Python, ","Django, ","Tailwind, ","C/C++, ","Sass/Scss, ","MySql, ","ExpressJs, ","Others... ",],
    content: [],
  };

  const certifications = {
    title: "My Certifications",
    description: "",
    points: ["GSsoc Appreciation, ", "Cyber Security Analyst, ", "Azure Fundamental ,", "GCP Arcade, ","Postman API, ", "Others..."],
    content: [],
  };

  const achievements = {
    title: "My Achievements",
    description: "",
    points: ["Branch Topper, ", "Tech & Github Advocate, ", "GSsoc Ranker, ", "WOB'24 Campus Ambassador, ","Others..."],
    content: [],
  };

  const container = {
    overflow: "hidden",
  };

  const cards = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "20px",
  };

  return (
    <div style={container}>
      <div style={cards} className="more-details">
        <Link to="/education" onClick={playSound} ref={ref1} 
          style={{ 
            textDecoration: "none", 
            opacity: inView1 ? 1 : 0, 
            transform: inView1 ? 'translateY(0)' : 'translateY(-50px)', 
            transition: `opacity 1.25s ease-out 5.5s, transform 1.25s ease-out 5.5s`, 
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
          <AboutCard {...education} />
        </Link>
        <Link to="/skills" onClick={playSound} ref={ref1} 
          style={{ 
            textDecoration: "none", 
            opacity: inView1 ? 1 : 0, 
            transform: inView1 ? 'translateY(0)' : 'translateY(-50px)', 
            transition: `opacity 1.25s ease-out 7s, transform 1.25s ease-out 7s`,
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
          <AboutCard {...skills} />
        </Link>
        <Link to="/certifications" onClick={playSound} ref={ref1} 
          style={{ 
            textDecoration: "none", 
            opacity: inView1 ? 1 : 0, 
            transform: inView1 ? 'translateY(0)' : 'translateY(-50px)', 
            transition: `opacity 1.25s ease-out 9.4s, transform 1.25s ease-out 9.4s`,
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
          <AboutCard {...certifications} />
        </Link>
        <Link to="/about" onClick={playSound} ref={ref1} 
          style={{ 
            textDecoration: "none", 
            opacity: inView1 ? 1 : 0, 
            transform: inView1 ? 'translateY(0)' : 'translateY(-50px)', 
            transition: `opacity 1.25s ease-out 11s, transform 1.25s ease-out 11s`,
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
          <AboutCard {...achievements} />
        </Link>
      </div>
    </div>
  );
}

// ? add this whole section above return section
// todo: use this, when u hold to be the start state of total section page: Means this come at start whenever page is open
  // const topElement = useRef(null);

  // useEffect(() => {
  //   if (topElement.current) {
  //     topElement.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
  //   }
  // }, []);

  // // Change the active card every 2 seconds
  // const [active, setActive] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActive((active) => (active + 1) % 4);
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, []);


