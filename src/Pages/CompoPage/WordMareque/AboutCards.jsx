import React from "react";
import { Link } from "react-router-dom";
import useSound from 'use-sound';

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
    gridGap: "10x",
  };

  return (
    <div style={container}>
      <div style={cards} className="more-details">
        <Link to="/education" onClick={playSound} style={{ textDecoration: "none" }}>
          <AboutCard {...education} />
        </Link>
        <Link to="/skills" onClick={playSound} style={{ textDecoration: "none" }}>
          <AboutCard {...skills} />
        </Link>
        <Link to="/certifications" onClick={playSound} style={{ textDecoration: "none" }}>
          <AboutCard {...certifications} />
        </Link>
        <Link to="/about" onClick={playSound} style={{ textDecoration: "none" }}>
          <AboutCard {...achievements} />
        </Link>
      </div>
    </div>
  );
}