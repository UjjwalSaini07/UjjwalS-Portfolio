import React, { useState } from "react";
import useSound from 'use-sound';

import soundeffect from '../../../components/Assest_Used/Sounds/select-click.wav';
import dp from "../AssetPic/img2.jpg";

export default function AboutProfile() {
  const [playSound] = useSound(soundeffect);

  const flexLeft = {
    container: {
      display: 'block',
      padding: '2rem',
      flex: 1.05,
      backgroundColor: 'black',
      maxWidth: '100%',
      height: 'auto',
      background: 'transparent',
      // background: '#000',
      borderRadius: '1.5rem 0 0 1.5rem',
    },
    imgContainer: {
      textAlign: 'left',
      height: 'auto',
      // background: '#000',
      background: 'transparent',
      borderRadius: '50%',
    },
    dp: {
      borderRadius: '50%',
      textAlign: 'center',
      border: '2px solid wheat',
      width: '280px', 
      height: '230px',
      margin: '0 auto',
      display: 'block',
    },
    details: {
      display: 'block',
      textAlign: 'left',
      maxWidth: '100%',
      height: 'auto',
      color: 'white',
      // background: '#000',
      background: 'transparent',
      borderRadius: '0 1.5rem 1.5rem 0',
    },
    name: {
      color: 'white',
      marginTop: '1.8rem',
      fontSize: '28px',
      fontWeight: 'bold',
    },
    greyFont: {
      color: 'grey',
      fontSize: '1.25rem',
      margin: '0px',
    },
    desc: {
      textAlign: 'left',
      color: 'white',
      fontSize: '1.1rem',
      marginTop: '5px',
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
          Btech-IT 26' @GGSIPU | FullStack Web Developer | Open Source | Learner | Tech Enthusiast | Software Developer |  Designer | Gamer
          <div className="glowbtn">
            <a href="https://github.com/UjjwalSaini07"
              onClick={playSound}
              style={{
                padding:'12px 60px',
                borderRadius: '10px',
                backgroundColor: 'transparent',
                textDecoration: 'none',
                color: '#33f403',
                border: 'none',
                marginLeft: '1px',
                marginTop: '12px',
                fontSize:   '16px',
                fontWeight: 'bold',
                transition: 'background-color 0.3s',
                width: '100%',
                textAlign: 'center',
                cursor: 'pointer'
              }}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <button>Github</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

