import React,{useEffect} from "react";
import Certificate from "./BaseCertificate";

import gssoc from "../../components/Assest_Used/Certifications/Ujjwal_GSSoC2024.png";
import postman from "../../components/Assest_Used/Certifications/PostMan Certificate.png";
import tatacyber from "../../components/Assest_Used/Certifications/Ujjwal_CyberSuraksha.jpg";
import isro from "../../components/Assest_Used/Certifications/Isro_Certificate.jpg";
import ibmskillbuild from "../../components/Assest_Used/Certifications/IBM SkillsBuild Data Visualization Micro Internship.jpg";
import microachievement from "../../components/Assest_Used/Certifications/Achievements-ujjwalsaini-0007.jpg";
import forage from "../../components/Assest_Used/Certifications/ForageCerti.jpg";
import gdsc from "../../components/Assest_Used/Certifications/Ujjwal Saini_GENAI_StudyJam.jpg";

const spaceboardsFont = `
  @font-face {
    font-family: 'Spaceboards';
    src: url('/fonts/Spaceboards.otf') format('opentype');
  }
`;

const CertifiStyle = `
  .cert {
    font-family: 'Spaceboards', sans-serif;
    font-size: 4.6rem;
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
    animation: gradient 1.5s infinite;
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
`;

export default function Certifications() {
  const certifications = {
    title: "Certifications",
    content: [
      { certification: "GSsoc'24: Recognizes open-source contribution to significant projects", year: "2024", institution: "GirlScript Summer of Code", image: gssoc },
      { certification: "Postman certification validates expertise in API testing and development skills", year: "2024", institution: "Postman", image: postman },
      { certification: "Tata Strive Cybersecurity certification demonstrates skills in intermediate security practices", year: "2024", institution: "Tata Strive ion", image: tatacyber },
      { certification: "ISRO Space Science Training certifies expertise and passion for space studies", year: "2024", institution: "ISRO LMS", image: isro },
      { certification: "Microsoft Azure Fundamentals certification demonstrates foundational knowledge in cloud computing", year: "2024", institution: "Microsoft", image: microachievement },
      { certification: "Forage Cybersecurity Job Simulation offers practical experience in cybersecurity roles and tasks", year: "2024", institution: "Forage", image: forage },
      { certification: "GDSC Google Cloud Study Jam provides hands-on learning in cloud technology", year: "2024", institution: "GDSC", image: gdsc },
      { certification: "IBM SkillBuild Data Analysis Micro-Internship certifies Python proficiency and analytical skills", year: "2023", institution: "IBM SkillBuild", image: ibmskillbuild },
    ],
  };

  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = spaceboardsFont + CertifiStyle;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: 'transaprent',
        padding: '12px',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '20px',
        maxWidth: '1800px',
        height: 'auto',
        margin: 'auto',
        color: 'white',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
      }}
    >
      <div className="cert" style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '6.4rem' }}>
        My Certifications
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '15px',
          marginTop: '20px',
          justifyContent: 'center',
        }}
      >
        {certifications.content.map((certification, index) => (
          <Certificate key={index} index={index} certification={certification} />
        ))}
      </div>
    </div>
  );
}
