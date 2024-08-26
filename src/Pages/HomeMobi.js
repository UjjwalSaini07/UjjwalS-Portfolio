import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import BIRDS from 'vanta/dist/vanta.birds.min';
import useSound from 'use-sound';

import soundeffect from '../components/Assest_Used/Sounds/base.mp3';
import soundeffect2 from '../components/Assest_Used/Sounds/select-click.wav';
import img1 from './CompoPage/AssetPic/img2.jpg';
import Homeback from './CompoPage/WordMareque/HomeMobBack';
import Aboutcard from './CompoPage/WordMareque/About';

const Home = () => {
  const vantaRef = useRef(null);
  const [playSound] = useSound(soundeffect);
  const [playSoundAlert] = useSound(soundeffect2);

  useEffect(() => {
    const vantaEffect = BIRDS({
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      backgroundColor: 0x030321,
      colorMode: "variance",
      birdSize: 1.60,
      speedLimit: 4.00,
      separation: 87.00,
      alignment: 44.00,
      cohesion: 38.00
    });
  
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <section style={Lowerstyles.home} id="home" ref={vantaRef}>
      <Homeback />
      <Aboutcard />
    </section>
  );
};

const Lowerstyles = {
  home: {
    position: 'relative',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#080424',
    overflow: 'hidden',
    zindex: 1,
  },
};

export default Home;
