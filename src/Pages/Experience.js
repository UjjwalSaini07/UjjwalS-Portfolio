import React, { useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import IBM from '../components/Assest_Used/CompanyLogo/IBM_Logo.png';
import Gssoc from '../components/Assest_Used/CompanyLogo/Gssoc_Logo.png';
import GCP from '../components/Assest_Used/CompanyLogo/GCP_Logo.jpg';
import freelance from '../components/Assest_Used/CompanyLogo/WorkOnPC.png';
import curious from '../components/Assest_Used/CompanyLogo/Curious_Logo.png';
import WOB from '../components/Assest_Used/CompanyLogo/WOB24.png';
import { Helmet } from 'react-helmet';
import { motion } from "framer-motion";

const textVariant = (delay) => ({
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.25, delay: delay },
  },
});

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

const experiences = [
  {
    date: "July 2024 - Present",
    company_name: "Curious Ecosystem - Apprenticeship",
    title: "Open Source Developer",
    iconBg: "#fff",
    icon: curious,
    points: [
      "Developing and maintaining open-source projects with a focus on full-stack solutions.",
      "Optimized Frontend services for scalability.",
      "Improving integration and development workflows for better efficiency.",
      "Collaborating with backend developers to integrate frontend components with server-side logic.",
    ],
  },
  {
    date: "September 2024 - Present",
    company_name: "GirlScript Foundation - Apprenticeship",
    title: "Campus Ambassador | Contributor",
    iconBg: "#fff",
    icon: WOB,
    points: [
      "Promoted the Winter of Blockchain program across campus to increase participation.",
      "Organized workshops and events to foster a blockchain learning community.",
      "Collaborated with the GirlScript team to coordinate and execute initiatives.",
      "Enhanced technical skills by engaging in blockchain-related projects.",
    ],
  },
  {
    date: "July 2023 - Present",
    company_name: "Freelancer, Fiverr",
    title: "Freelance",
    iconBg: "#fff",
    icon: freelance,
    points: [
      "Delivering custom web development solutions for various clients.",
      "Managing end-to-end project lifecycle from requirement gathering to deployment.",
      "Creating responsive and visually appealing websites based on client specifications.",
      "Ensuring timely delivery of projects while maintaining high standards of quality.",
    ],
  },
  {
    date: "Oct 2023 - Present",
    company_name: "Google Cloud Platform - Online",
    title: "Trainee In Program",
    iconBg: "#4285F4",
    icon: GCP,
    points: [
      "Participating in arcade events and completing various GCP modules.",
      "Gaining extensive knowledge and practical skills in Google Cloud Platform technologies.",
      "Engaging in the facilitator program to enhance understanding and application of GCP concepts.",
    ],
  },
  {
    date: "June 2024 - August 2024",
    company_name: "IBM SKillsBuild - Internship",
    title: "Frontend Developer",
    iconBg: "#4285F4",
    icon: IBM,
    points: [
      "Designing and developing responsive and user-friendly web interfaces.",
      "Optimizing website performance and ensuring cross-browser compatibility.",
      "Contributing to code reviews and upholding code quality.",
    ],
  },
  {
    date: "May 2024 - July 2024",
    company_name: "GirlScript Summer of Code - Apprenticeship",
    title: "Gssoc Contributor",
    iconBg: "#fff",
    icon: Gssoc,
    points: [
      "Contributed to open-source projects as part of the GirlScript Summer of Code apprenticeship.",
      "Developed and implemented features and bug fixes in collaboration with project maintainers.",
      "Gained hands-on experience in software development and project management through active participation.",
    ],
  },
  {
    date: "Dec 2023 - Jan 2024",
    company_name: "IBM Skillbuild - Internship (As a Learner)",
    title: "Data Analyst",
    iconBg: "#B21807",
    icon: IBM,
    points: [
      "Analyzed and interpreted complex data sets to inform business decisions.",
      "Created visualizations and reports to communicate findings effectively to stakeholders.",
      "Applied statistical techniques and data modeling to extract insights from data.",
    ],
  },
];

const Experience = () => {

  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = spaceboardsFont + WorkExStyle;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <>
    <Helmet>
      <title>Experience | Portfolio - Ujjwal</title>
    </Helmet>
    <div className="mt-20">
      <motion.div
        variants={textVariant(0.3)}
        initial="hidden"
        animate="show"
      >
      <div className="Work-Ex" style={{ textAlign: 'center', marginBottom: '3.5rem', marginTop: '7.6rem'}}>
        Work & Experience
      </div>
      </motion.div>
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={`experience-${index}`}
            contentStyle={{ background: "#140b40", color: "#fff", borderRadius: "10px", boxShadow: "0 3px 5px rgba(0, 0, 0, 0.3)" }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={experience.date}
            dateClassName="date"
            iconStyle={{ background: experience.iconBg }}
            icon={<div className="flex items-center justify-center w-full h-full"><img src={experience.icon} alt={experience.company_name} className="w-full h-full object-cover rounded-full" /></div>}
          >
            <h3 className="company-title">{experience.title}</h3>
            <p className="company-name">{experience.company_name}</p>
            <ul className="mt-5 list-disc ml-5 space-y-3.5">
              {experience.points.map((point, idx) => (
                <li key={`experience-point-${idx}`} className="text-[#d4d4d8] sm:text-[15px] text-[12px] pl-1 tracking-wider">
                  {point}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      <style jsx global>{`
        .vertical-timeline-element-date {
          font-size: 18px !important;
          color: #fff !important;
          font-weight: bold !important;
        }
        
        .company-title {
          color: white;
          font-size: 25px;
          font-weight: bold;
        }

        .company-name {
          color: #e4e4e7 !important;
          font-size: 13px !important;
          font-weight: bold !important;
        }

        @media (max-width: 768px) {
          .Work-Ex {
            font-size: 34px;
            margin-right: 2.4rem;
          }
          .company-title {
          font-size: 18.5px;
          }
          .vertical-timeline-element-date {
            font-size: 14px !important;
          }
        }
      `}</style>
    </div>
    </>
  );
};

export default Experience;



// Todo: Use for Emergency 
// ! Sample 1: USe For Gradient Text Styling

// const WorkExStyle = `
//   .Work-Ex {
//     font-family: 'Spaceboards', sans-serif;
//     font-size: 5rem;
//     font-weight: bold;
//     background: linear-gradient(90deg, #0cffc5, #a939ff, #0cffc5, #a939ff);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     text-shadow: 1.5px 1.5px 3px rgba(0, 255, 197, 0.7), 1px 1.5px 10px rgba(169, 57, 255, 0.7), 10px 5.5px 30px rgba(0, 255, 197, 0.5), 0 10px 40px rgba(169, 57, 255, 0.5);
//     margin-left: 4rem;
//     animation: gradient 2s infinite;
//     letter-spacing: 0.1rem;
//     background-size: 300% 300%;
//   }

//   @keyframes gradient {
//     0% {
//       background-position: 0% 50%;
//     }
//     50% {
//       background-position: 100% 50%;
//     }
//     100% {
//       background-position: 0% 50%;
//     }
//   }
// `;

// ! Sample 2: Use for Normal FLuid Styling
// const WorkExStyle = `
//   .Work-Ex {
//     font-family: 'Spaceboards', sans-serif;
//     font-size: 5rem;
//     font-weight: bold;
//     background: linear-gradient(90deg, #0cffc5, #a939ff);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
//     margin-left: 4rem;
//     animation: gradient 3s infinite;
//     letter-spacing: 0.1rem;
//     background-size: 200% 200%;
//   }

//   @keyframes gradient {
//     0% {
//       background-position: 0% 50%;
//     }
//     50% {
//       background-position: 100% 50%;
//     }
//     100% {
//       background-position: 0% 50%;
//     }
//   }
// `;