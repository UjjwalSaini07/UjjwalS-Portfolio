import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import BIRDS from 'vanta/dist/vanta.birds.min';
import useSound from 'use-sound';

import soundeffect from '../../../components/Assest_Used/Sounds/base.mp3';
import soundeffect2 from '../../../components/Assest_Used/Sounds/select-click.wav';
import bgref from '../../../components/Assest_Used/textures/Bg_Shades/CubeBgAbout.png';
import img1 from '../AssetPic/img2.jpg';
import Homeback from '../WordMareque/HomeMobBack';
import Aboutcard from '../WordMareque/About';

const Home = () => {
  const vantaRef = useRef(null);
  const [playSound] = useSound(soundeffect);
  const [playSoundAlert] = useSound(soundeffect2);
  const [homebackVisible, setHomebackVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) { // Adjust the scroll threshold as needed
        setHomebackVisible(false);
      } else {
        setHomebackVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const vantaEffect = BIRDS({
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      quantity: 3.50,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      backgroundColor: 0x0,
      // backgroundImage: `url(${bgref})`,
      // backgroundPosition: 'center',
      colorMode: "variance",
      birdSize: 1.20,
      speedLimit: 3.50,
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
      <div className={`homeback-container ${homebackVisible ? 'visible' : 'hidden'}`}>
        <Homeback />
      </div>
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
    backgroundImage: `url(${bgref})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // backgroundColor: '#080424',
    overflow: 'hidden',
    zIndex: 1,
  },
};

const style = `
.homeback-container {
  transition: opacity 0.5s ease, visibility 0.5s ease;
}

.homeback-container.hidden {
  opacity: 0;
  visibility: hidden;
}

.homeback-container.visible {
  opacity: 1;
  visibility: visible;
}
`;

export default Home;


// ! Previous Code - of HomeBack at background
// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import BIRDS from 'vanta/dist/vanta.birds.min';
// import useSound from 'use-sound';

// import soundeffect from '../components/Assest_Used/Sounds/base.mp3';
// import soundeffect2 from '../components/Assest_Used/Sounds/select-click.wav';
// import img1 from './CompoPage/AssetPic/img2.jpg';
// import Homeback from './CompoPage/WordMareque/HomeMobBack';
// import Aboutcard from './CompoPage/WordMareque/About';

// const Home = () => {
//   const vantaRef = useRef(null);
//   const [playSound] = useSound(soundeffect);
//   const [playSoundAlert] = useSound(soundeffect2);

//   useEffect(() => {
//     const vantaEffect = BIRDS({
//       el: vantaRef.current,
//       THREE: THREE,
//       mouseControls: true,
//       touchControls: true,
//       gyroControls: false,
//       minHeight: 200.00,
//       minWidth: 200.00,
//       scale: 1.00,
//       scaleMobile: 1.00,
//       backgroundColor: 0x030321,
//       colorMode: "variance",
//       birdSize: 1.60,
//       speedLimit: 4.00,
//       separation: 87.00,
//       alignment: 44.00,
//       cohesion: 38.00
//     });
  
//     return () => {
//       if (vantaEffect) vantaEffect.destroy();
//     };
//   }, []);

//   return (
//     <section style={Lowerstyles.home} id="home" ref={vantaRef}>
//       <Homeback />
//       <Aboutcard />
//     </section>
//   );
// };

// const Lowerstyles = {
//   home: {
//     position: 'relative',
//     height: 'auto',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#080424',
//     overflow: 'hidden',
//     zindex: 1,
//   },
// };

// export default Home;
