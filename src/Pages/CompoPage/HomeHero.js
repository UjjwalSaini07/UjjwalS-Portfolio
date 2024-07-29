import React from 'react';
import Spline from '@splinetool/react-spline';
import { Typewriter } from "react-simple-typewriter";
import { useSpring, animated } from '@react-spring/web';
import { Flipper, Flipped } from 'react-flip-toolkit';

const HomePcContainer = {
  position: "absolute",
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  zindex: "1",
};

const spline_model = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  zIndex: "1",
};

const division_overlay = {
  position: "absolute",
  top: "20px",
  width: "62%",
  fontSize: "large",
  left: "30px",
  zIndex: "5",
  color: "rgb(240, 2, 149)",
  background: "transparent",
  padding: "10px",
  borderRadius: "8px",
}

const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-white lg:text-[78px] lg:leading-[110px] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[35px] lg:leading-[40px]",
};

const typerStyle = {
  width: "100%",
  marginTop: "6px",
  fontSize: "5rem",
  color: "#02f202",
  fontWeight: "500",
  display: "inline-block",
};

function Home() {
  const bounce = useSpring({
    from: { transform: 'translate3d(0, -80px, 0)' },
    to: { transform: 'translate3d(0, 0, 0)' },
    config: { tension: 100, friction: 7 },
  });

  const paragraphBounce = useSpring({
    from: { transform: 'translate3d(0, -50px, 0)' },
    to: { transform: 'translate3d(0, 0, 0)' },
    config: { tension: 120, friction: 4 },
  });
  const typewriterBounce = useSpring({
    from: { transform: 'translate3d(0, -50px, 0)' },
    to: { transform: 'translate3d(0, 0, 0)' },
    config: { tension: 120, friction: 2 },
  });

  return (
    <div style={HomePcContainer}>
      <Spline style={spline_model} scene="https://prod.spline.design/q1ibVol4H9yif8LF/scene.splinecode" />
      <div style={division_overlay}>
        <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
          <div>
            <animated.h1 style={bounce} className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#e73e0d]">Ujjwal</span>
            </animated.h1>
            <animated.p style={paragraphBounce} className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop web <br /> and mobile applications
            </animated.p>
              <animated.p style={typewriterBounce}>
                <div style={typerStyle}>
                  <Typewriter
                    words={['Creative Designer', 'Frontend Developer', 'Backend Developer', 'Freelancer', 'Gamer']}
                    loop={true}
                    cursor
                    cursorStyle='_'
                    typeSpeed={180}
                    deleteSpeed={100}
                    delaySpeed={1000}
                  /> 
                </div>
              </animated.p>
          </div>
        </div>
        <div style={{ marginTop: '425px', marginLeft: '100px' }}>
          <div className="glowbtnAbt">
          <animated.p style={paragraphBounce}>
            <a href="https://drive.google.com/file/d/1dUp-F4kjgafGYs9xX6DUDbi6crlxQqjt/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn"
              style={{
                padding: '15px',
                borderRadius: '20px',
                backgroundColor: 'transparent',
                textDecoration: 'none',
                color: '#f40388',
                border: 'none',
                marginBottom: '-10px',
                marginLeft: '1px',
                marginTop: '-20px',
                fontSize: '18px',
                fontWeight: 'bold',
                transition: 'background-color 0.3s',
                width: '25%',
                textAlign: 'center',
                cursor: 'pointer'
              }}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              About Me
            </a>
            </animated.p>
          </div>
          <div className="home-socials" style={{ marginTop: '20px', fontSize: '25px', marginLeft: '15px' }}>
          <animated.p style={paragraphBounce}>
            <ul className="social-icons" style={{ listStyle: 'none', padding: '0', display: 'flex', gap: '10px' }}>
                <a href="https://www.linkedin.com/in/ujjwal-saini-220960256/" className="fab fa-linkedin  fa-bounce" target="_blank" rel="noopener noreferrer"
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} ></a>
                <a href="https://github.com/UjjwalSaini07" className="fab fa-github fa-bounce" target="_blank" rel="noopener noreferrer"
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} ></a>
                <a href="mailto:ujjwalsaini0007@gmail.com" className="fas fa-envelope  fa-bounce" target="_blank" rel="noopener noreferrer"
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} ></a>
                <a href="https://x.com/UjjwalSaini0007" className="fab fa-twitter fa-bounce" target="_blank" rel="noopener noreferrer"
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} ></a>
                <a href="tel:+919717899079" className="fas fa-phone fa-bounce" target="_blank" rel="noopener noreferrer"
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} ></a>
            </ul>
            </animated.p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;



// TOdo: Workflow of Spline 3d Model - Rocket, Physics 3d Ball set
// import React from 'react';
// import Spline from '@splinetool/react-spline';

// export default function Home() {

//   return (
//     // ! Physics Ball
//       <Spline scene="https://prod.spline.design/Tfdc6K3kNGz2mv64/scene.splinecode"/>

//     // ! Rocket
//       // <Spline scene="https://prod.spline.design/dsRG-ONMgP6dcNnS/scene.splinecode" />
//   );
// }
