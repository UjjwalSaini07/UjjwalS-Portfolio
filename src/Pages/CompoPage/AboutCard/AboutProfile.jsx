import React, { useState } from "react";
import useSound from 'use-sound';
import { useInView } from 'react-intersection-observer';

import soundeffect from '../../../components/Assest_Used/Sounds/select-click.wav';
import dp from "../AssetPic/img2.jpg";

export default function AboutProfile() {
  const [playSound] = useSound(soundeffect);

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

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
      // fontSize: '28px',
      fontSize: '4rem',
      marginLeft: '-5px',
      fontWeight: 'bold',
    },
    greyFont: {
      color: 'grey',
      fontSize: '1.6rem',
      fontFamily: "'Vidaloka', serif",
      marginTop: '-5px',
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
      <div ref={ref1} style={{ ...flexLeft.imgContainer, opacity: inView1 ? 1 : 0, transform: inView1 ? 'translateY(0)' : 'translateY(-50px)', transition: `opacity 1.25s ease-out 0.4s, transform 1.25s ease-out 0.4s` }}>
        <img src={dp} alt="Profile" style={flexLeft.dp} 
          onMouseEnter={(e) => {
            e.currentTarget.style.border = '2.8px solid #22d3ee';
            e.currentTarget.style.boxShadow = '0 0 10px #22d3ee';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.border = '2.8px solid transparent';
            e.currentTarget.style.boxShadow = 'none';
          }}/>
      </div>
      <div style={flexLeft.details}>
        <div ref={ref1} style={{ ...flexLeft.name, opacity: inView1 ? 1 : 0, transform: inView1 ? 'translateY(0)' : 'translateY(-50px)', transition: `opacity 1.25s ease-out 1.1s, transform 1.25s ease-out 1.1s`, fontFamily:  "'Tangerine', cursive",}}>Ujjwal Saini</div>
        <h3 ref={ref1} style={{ ...flexLeft.greyFont, opacity: inView1 ? 1 : 0, transform: inView1 ? 'translateY(0)' : 'translateY(-50px)', transition: `opacity 1.25s ease-out 1.8s, transform 1.25s ease-out 1.8s` }}>ujjwalsaini07</h3>
        <div ref={ref1} style={{ ...flexLeft.desc, opacity: inView1 ? 1 : 0, transform: inView1 ? 'translateY(0)' : 'translateY(-50px)', transition: `opacity 1.25s ease-out 2.4s, transform 1.25s ease-out 2.4s` }}>
          Btech-IT 26' @GGSIPU | FullStack Web Developer | Open Source | Learner | Tech Enthusiast | Software Developer |  Designer
        </div>
          <div className="glowbtn">
            <a href="https://github.com/UjjwalSaini07"
              onClick={playSound}
              ref={ref1}
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
                cursor: 'pointer',
                opacity: inView1 ? 1 : 0,
                transform: inView1 ? 'translateY(0)' : 'translateY(-50px)',
                transition: `opacity 1.25s ease-out 3s, transform 1.25s ease-out 3s`
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
  );
}

