import React from "react";
import { Link } from "react-router-dom";
import useSound from 'use-sound';
import { useInView } from 'react-intersection-observer';

import soundeffect from '../../../components/Assest_Used/Sounds/base.mp3';
import AboutCard from "./AboutCard";

export default function AboutCards() {
  const [playSound] = useSound(soundeffect);

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: false,
    threshold: 0.1, 
  });

  const education = {
    title: "Education",
    description: "College and Degree",
    points: ["Engineering College, GGSIPU-26, ", "IT"],
    content: [],
  };

  const skills = {
    title: "Skills",
    description: "",
    points: ["React, ","Javascript, ","Python, ","Django, ","Tailwind, ","C/C++, ","Java, ","MySql, ","Three.js, ","Other... ",],
    content: [],
  };

  const certifications = {
    title: "Certifications",
    description: "",
    points: ["Cyber Security Analyst ,","GCP Arcade Certification ,","Postman API ,","GSsoc ,","Other..."],
    content: [],
  };

  const achievements = {
    title: "Achievements",
    description: "",
    points: ["Branch Topper, ", "Tech Advocate, ", "Github Achiever, ", "GSsoc Ranker, ", "Other..."],
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
        <Link to="/education" onClick={playSound} ref={ref1} style={{ textDecoration: "none", opacity: inView1 ? 1 : 0, transform: inView1 ? 'translateY(0)' : 'translateY(-50px)', transition: `opacity 1.25s ease-out 10.5s, transform 1.25s ease-out 10.5s` }}>
          <AboutCard {...education} />
        </Link>
        <Link to="/skills" onClick={playSound} ref={ref1} style={{ textDecoration: "none", opacity: inView1 ? 1 : 0, transform: inView1 ? 'translateY(0)' : 'translateY(-50px)', transition: `opacity 1.25s ease-out 14.5s, transform 1.25s ease-out 14.5s` }}>
          <AboutCard {...skills} />
        </Link>
        <Link to="/certifications" onClick={playSound} ref={ref1} style={{ textDecoration: "none", opacity: inView1 ? 1 : 0, transform: inView1 ? 'translateY(0)' : 'translateY(-50px)', transition: `opacity 1.25s ease-out 18.5s, transform 1.25s ease-out 18.5s` }}>
          <AboutCard {...certifications} />
        </Link>
        <Link to="/about" onClick={playSound} ref={ref1} style={{ textDecoration: "none", opacity: inView1 ? 1 : 0, transform: inView1 ? 'translateY(0)' : 'translateY(-50px)', transition: `opacity 1.25s ease-out 20.5s, transform 1.25s ease-out 20.5s` }}>
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


