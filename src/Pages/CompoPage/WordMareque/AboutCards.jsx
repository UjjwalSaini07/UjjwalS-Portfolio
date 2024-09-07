import React from "react";
import { Link } from "react-router-dom";
import useSound from 'use-sound';
import { useInView } from 'react-intersection-observer';

import soundeffect from '../../../components/Assest_Used/Sounds/base.mp3';
import AboutCard from "./AboutCard";

export default function AboutCards() {
  const [playSound] = useSound(soundeffect);

  const education = {
    title: "My Education",
    description: "College and Degree",
    points: ["Engineering College, GGSIPU-26, ", "IT"],
    content: [],
  };

  const skills = {
    title: "My Technical Skills",
    description: "",
    points: ["React, ","Javascript, ","Python, ","Django, ","Tailwind, ","C/C++, ","Java-Basic, ","MySql, ","Three.js, ","Others... ",],
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
        <Link to="/education" onClick={playSound} ref={ref1} 
          style={{ textDecoration: "none", opacity: inView1 ? 1 : 0, transform: inView1 ? 'translateY(0) scale(1)' : 'translateY(60px) scale(0.9)', transition: 'opacity 0.5s ease-out, transform 3s ease-out'}}
          onMouseEnter={(e) => {
            if (window.innerWidth <= 768) { // Adjust the width as per your mobile breakpoint
              e.currentTarget.style.border = '2px solid #22d3ee';
              e.currentTarget.style.borderRadius = '14px';
              e.currentTarget.style.boxShadow = '0 0 10px #22d3ee';
            }
          }}
          onMouseLeave={(e) => {
            if (window.innerWidth <= 768) {
              e.currentTarget.style.border = '2px solid transparent';
              e.currentTarget.style.boxShadow = 'none';
            }
          }}>          
          <AboutCard {...education} />
        </Link>
        <Link to="/skills" onClick={playSound} ref={ref1} 
          style={{ textDecoration: "none", opacity: inView1 ? 1 : 0, transform: inView1 ? 'translateY(0) scale(1)' : 'translateY(60px) scale(0.9)', transition: 'opacity 1.5s ease-out, transform 5s ease-out'}}
          onMouseEnter={(e) => {
            e.currentTarget.style.border = '2px solid #22d3ee';
            e.currentTarget.style.borderRadius = '14px';
            e.currentTarget.style.boxShadow = '0 0 10px #22d3ee';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.border = '2px solid transparent';
            e.currentTarget.style.boxShadow = 'none';
          }}>
          <AboutCard {...skills} />
        </Link>
        <Link to="/certifications" onClick={playSound} ref={ref2} 
          style={{ textDecoration: "none", opacity: inView2 ? 1 : 0, transform: inView2 ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)', transition: 'opacity 0.5s ease-out, transform 4s ease-out'}}
          onMouseEnter={(e) => {
            e.currentTarget.style.border = '2px solid #22d3ee';
            e.currentTarget.style.borderRadius = '14px';
            e.currentTarget.style.boxShadow = '0 0 10px #22d3ee';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.border = '2px solid transparent';
            e.currentTarget.style.boxShadow = 'none';
          }}>
          <AboutCard {...certifications} />
        </Link>
        <Link to="/about" onClick={playSound} ref={ref2} 
          style={{ textDecoration: "none", opacity: inView2 ? 1 : 0, transform: inView2 ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)', transition: 'opacity 1.5s ease-out, transform 6s ease-out'}}
          onMouseEnter={(e) => {
            e.currentTarget.style.border = '2px solid #22d3ee';
            e.currentTarget.style.borderRadius = '14px';
            e.currentTarget.style.boxShadow = '0 0 10px #22d3ee';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.border = '2px solid transparent';
            e.currentTarget.style.boxShadow = 'none';
          }}>
          <AboutCard {...achievements} />
        </Link>
      </div>
    </div>
  );
}