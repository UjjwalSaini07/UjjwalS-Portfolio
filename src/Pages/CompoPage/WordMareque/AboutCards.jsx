import React from "react";
import { Link } from "react-router-dom";
import useSound from 'use-sound';
import { useInView } from 'react-intersection-observer';

import soundeffect from '../../../components/Assest_Used/Sounds/base.mp3';
import AboutCard from "./AboutCard";

export default function AboutCards() {
  const [playSound] = useSound(soundeffect);

  const education = {
    title: "Education",
    description: "College and Degree",
    points: ["Engineering College, GGSIPU-26, ", "Information & Technology"],
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
    gridTemplateColumns: "1fr",
    gridGap: "10px",
  };

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: false,
    threshold: 0.1, 
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: false,
    threshold: 0.2, 
  });

  return (
    <div style={container}>
      <div style={cards} className="more-details">
        <Link to="/education" onClick={playSound} ref={ref1} style={{ textDecoration: "none", opacity: inView1 ? 1 : 0, transform: inView1 ? 'translateY(0) scale(1)' : 'translateY(60px) scale(0.9)', transition: 'opacity 0.5s ease-out, transform 3s ease-out'}}>
          <AboutCard {...education} />
        </Link>
        <Link to="/skills" onClick={playSound} ref={ref1} style={{ textDecoration: "none", opacity: inView1 ? 1 : 0, transform: inView1 ? 'translateY(0) scale(1)' : 'translateY(60px) scale(0.9)', transition: 'opacity 1.5s ease-out, transform 5s ease-out'}}>
          <AboutCard {...skills} />
        </Link>
        <Link to="/certifications" onClick={playSound} ref={ref2} style={{ textDecoration: "none", opacity: inView2 ? 1 : 0, transform: inView2 ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)', transition: 'opacity 0.5s ease-out, transform 4s ease-out'}}>
          <AboutCard {...certifications} />
        </Link>
        <Link to="/about" onClick={playSound} ref={ref2} style={{ textDecoration: "none", opacity: inView2 ? 1 : 0, transform: inView2 ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)', transition: 'opacity 1.5s ease-out, transform 6s ease-out'}}>
          <AboutCard {...achievements} />
        </Link>
      </div>
    </div>
  );
}