import React, { useState, useRef, useEffect } from "react";
import AboutCard from "./AboutCard";

export default function AboutCards() {
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
        <AboutCard {...education} />
        <AboutCard {...skills} />
        <AboutCard {...certifications} />
        <AboutCard {...achievements} />
      </div>
    </div>
  );
};

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


