import React, { useState } from "react";
import useSound from "use-sound";

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
      fontSize: "22.5px",
      fontWeight: "bold",
    },
    greyFont: {
      color: "grey",
      fontSize: "1.25rem",
      marginRight: "6rem",
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

  return (
    <div style={flexLeft.container}>
      <div style={flexLeft.imgContainer}>
        <img src={dp} alt="Profile" style={flexLeft.dp} />
      </div>
      <div style={flexLeft.details}>
        <div style={flexLeft.name}>Ujjwal Saini</div>
        <h3 style={flexLeft.greyFont}>ujjwalsaini07</h3>
        <div style={flexLeft.desc}>
          Btech-IT 26' @GGSIPU | FullStack Web Developer | Learner | Designer
        </div>
        <div className="glowbtn">
          <a
            // href="https://github.com/UjjwalSaini07"
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
      </div>
      <div style={flexLeft.socials}>
        <ul className="social-icons" style={flexLeft.socialIcons}>
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
        </ul>
      </div>
    </div>
  );
}