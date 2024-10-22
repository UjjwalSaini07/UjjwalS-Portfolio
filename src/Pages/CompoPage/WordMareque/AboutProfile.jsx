import React, { useState } from "react";
import useSound from "use-sound";
import { motion } from "framer-motion";
import { useSpring, animated } from '@react-spring/web';

import soundeffect from "../../../components/Assest_Used/Sounds/base.mp3";
import soundeffect2 from "../../../components/Assest_Used/Sounds/select-click.wav";
import dp from "../AssetPic/img2.jpg";
import { AlignCenter } from "lucide-react";

export default function AboutProfile() {
  const [playSound] = useSound(soundeffect);
  const [playSoundAlert] = useSound(soundeffect2);

  const flexLeft = {
    container: {
      display: "block",
      padding: "2rem",
      flex: 1.05,
      maxWidth: "100%",
      height: "auto",
      background: "transparent",
      borderRadius: "1.5rem 0 0 1.5rem",
    },
    imgContainer: {
      textAlign: "left",
      height: "auto",
      background: "transparent",
      borderRadius: "50%",
    },
    dp: {
      borderRadius: "50%",
      textAlign: "left",
      border: "2px solid wheat",
      width: "140px",
      height: "140px",
      float: "left",
      marginLeft: "-1.6rem",
      marginRight: "8px",
      padding: "2px",
    },
    details: {
      display: "block",
      textAlign: "left",
      maxWidth: "100%",
      height: "auto",
      color: "white",
      background: "transparent",
      borderRadius: "0 1.5rem 1.5rem 0",
    },
    name: {
      color: "white",
      marginTop: "3.8rem",
      fontSize: "3rem",
      fontWeight: "bold",
    },
    greyFont: {
      color: "grey",
      fontSize: "1.5rem",
      fontFamily: "'Vidaloka', serif",
    },
    desc: {
      textAlign: "left",
      color: "white",
      fontSize: "1.2rem",
      marginTop: "5px",
    },
    socials: {
      marginTop: "0",
    },
    socialIcons: {
      listStyle: "none",
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      padding: 0,
    },
    icon: {
      fontSize: "2.4rem",
      color: "#fff",
      textDecoration: "none",
      transition: "transform 0.3s, color 0.3s",
      padding: "8px",
      borderRadius: "50%",
      background: "transparent",
    },
    iconHover: {
      transform: "scale(1.2)",
    },
  };

  const [isHovered, setIsHovered] = useState(false);

  const textVariant = (delay) => ({
    hidden: { y: -50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", duration: 1.25, delay: delay },
    },
  });

  const bounce = useSpring({
    from: { transform: 'translate3d(0, -80px, 0)' },
    to: { transform: 'translate3d(0, 0, 0)' },
    config: { tension: 100, friction: 2, duration: 2500 },
  });

  return (
    <div style={flexLeft.container}>
      <motion.div
        variants={textVariant(2)}
        initial="hidden"
        animate="show"
      >
      <div style={flexLeft.imgContainer}>
        <img src={dp} alt="Profile" style={flexLeft.dp} />
      </div>
      </motion.div>
      <div style={flexLeft.details}>
        <motion.div
          variants={textVariant(2.6)}
          initial="hidden"
          animate="show"
        >
        <div style={{...flexLeft.name, fontFamily:  "'Tangerine', cursive",}}>Ujjwal Saini</div>
        </motion.div>
        <motion.div
          variants={textVariant(3.5)}
          initial="hidden"
          animate="show"
        >
        <h3 style={flexLeft.greyFont}>ujjwalsaini07</h3>
        </motion.div>
        <motion.div
          variants={textVariant(4.2)}
          initial="hidden"
          animate="show"
        >
        <div style={flexLeft.desc}>
          Btech-IT 26' @GGSIPU | FullStack Web Developer | Learner | Designer
        </div>
        </motion.div>
        <motion.div
          variants={textVariant(4.8)}
          initial="hidden"
          animate="show"
        >
        <div className="glowbtn">
          <a
            href="https://drive.google.com/file/d/1dUp-F4kjgafGYs9xX6DUDbi6crlxQqjt/view?usp=drive_link" target="_blank" rel="noopener noreferrer"
            onClick={playSound}
            style={{
              padding: "12px 60px",
              borderRadius: "10px",
              backgroundColor: "transparent",
              textDecoration: "none",
              color: "#33f403",
              border: "none",
              marginLeft: "1px",
              marginTop: "18px",
              fontSize: "16px",
              fontWeight: "bold",
              transition: "background-color 0.3s",
              width: "100%",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <button>About Me</button>
          </a>
        </div>
        </motion.div>
      </div>
      <div style={flexLeft.socials}>
        <ul className="social-icons" style={flexLeft.socialIcons}>
          <motion.div
            variants={textVariant(5.6)}
            initial="hidden"
            animate="show"
          >
          <li>
            <a
              href="https://www.linkedin.com/in/ujjwal-saini-220960256/"
              className="fab fa-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playSoundAlert}
              style={flexLeft.icon}
            ></a>
          </li>
          </motion.div>
          <motion.div
            variants={textVariant(6.1)}
            initial="hidden"
            animate="show"
          >
          <li>
            <a
              href="https://github.com/UjjwalSaini07"
              className="fab fa-github"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playSoundAlert}
              style={flexLeft.icon}
            ></a>
          </li>
          </motion.div>
          <motion.div
            variants={textVariant(6.6)}
            initial="hidden"
            animate="show"
          >
          <li>
            <a
              href="mailto:ujjwalsaini0007@gmail.com"
              className="fas fa-envelope"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playSoundAlert}
              style={flexLeft.icon}
            ></a>
          </li>
          </motion.div>
          <motion.div
            variants={textVariant(7.1)}
            initial="hidden"
            animate="show"
          >
          <li>
            <a
              href="https://x.com/UjjwalSaini0007"
              className="fab fa-twitter"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playSoundAlert}
              style={flexLeft.icon}
            ></a>
          </li>
          </motion.div>
          <motion.div
            variants={textVariant(7.6)}
            initial="hidden"
            animate="show"
          >
          <li>
            <a
              href="tel:+919717899079"
              className="fas fa-phone"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playSoundAlert}
              style={flexLeft.icon}
            ></a>
          </li>
          </motion.div>
        </ul>
      </div>
    </div>
  );
}
