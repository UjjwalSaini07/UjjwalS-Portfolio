import React, { useState,useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Home, Info, Engineering, Work, Contacts} from '@mui/icons-material';
import PsychologyIcon from '@mui/icons-material/Psychology';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useSound from 'use-sound';

import Hamburger from './Hamburger';
import '../../Styles/Header.css';
import USLogopng from '../../../components/Assest_Used/Us_LogoMain.png';
import soundeffect from '../../../components/Assest_Used/Sounds/base.mp3';
import soundeffect2 from '../../../components/Assest_Used/Sounds/select-click.wav';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [playSound] = useSound(soundeffect);
  const [playSoundAlert] = useSound(soundeffect2);

  // const toggleNavbar = () => {
  //   document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  //   setIsOpen(!isOpen);
  // };
  const toggleNavbar = () => {
    setIsOpen(prevState => {
      document.body.style.overflow = prevState ? 'auto' : 'hidden';
      return !prevState;
    });
  };
  

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerStyle = {
    backgroundColor: isScrolled ? '#000000' : 'transparent',
    // backdropFilter: isScrolled ? 'blur(5px)' : 'blur(0)',
    boxShadow: isScrolled ? '0 6px 12px rgba(0, 0, 0, 0.5)' : 'none',
    transition: 'background-color 0.3s ease-in-out',
  };

  const iconStyle = {
    verticalAlign: 'sub',
    transition: 'transform 0.3s ease-in-out',
    transform: isOpen ? 'scale(1.1)' : 'scale(1)',
  };

  return (
    <div className="myheader" id="nav" style={headerStyle}>
      <div className="head-container">
        <span className="hamburger-icon" style={{ height:'20px'}}>
          <Hamburger isOpen={isOpen} toggle={toggleNavbar} />
        </span>
        <Link to="/" className="logoheader" onClick={playSoundAlert} style={{ display: 'flex', alignItems: 'center' }}>
            <img src={USLogopng} alt="Logo" style={{ height:'40px', marginleft: '8px' }} />
              <p style={{ fontFamily: "'Tangerine', cursive", fontSize: '2.7rem' }}>Ujjwal Saini</p>
         </Link>
        <div className={`mobile-navbar ${isOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <NavLink to="/" exact onClick={() => { toggleNavbar(); playSound(); }}>
                <div className="nav-item" style={{...iconStyle, fontFamily: "'Vidaloka', serif",}}>
                  Home <Home className="nav-icon" sx={{ fontSize: 20 }} />
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" exact onClick={() => { toggleNavbar(); playSound(); }}>
                <div className="nav-item" style={{...iconStyle, fontFamily: "'Vidaloka', serif",}}>
                  About <Info className="nav-icon" sx={{ fontSize: 16 }}/>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" exact onClick={() => { toggleNavbar(); playSound(); }}>
                <div className="nav-item" style={{...iconStyle, fontFamily: "'Vidaloka', serif",}}>
                  Skills <PsychologyIcon className="nav-icon" sx={{ fontSize: 20 }}/>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/education" exact onClick={() => { toggleNavbar(); playSound(); }}>
                <div className="nav-item" style={{...iconStyle, fontFamily: "'Vidaloka', serif",}}>
                  Education <MenuBookIcon className="nav-icon" sx={{ fontSize: 18 }}/>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" exact onClick={() => { toggleNavbar(); playSound(); }}>
                <div className="nav-item" style={{...iconStyle, fontFamily: "'Vidaloka', serif",}}>
                  Projects <Engineering className="nav-icon" sx={{ fontSize: 20 }}/>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/experience" exact onClick={() => { toggleNavbar(); playSound(); }}>
                <div className="nav-item" style={{...iconStyle, fontFamily: "'Vidaloka', serif",}}>
                  Experience <Work className="nav-icon" sx={{ fontSize: 20 }}/>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" exact onClick={() => { toggleNavbar(); playSound(); }}>
                <div className="nav-item" style={{...iconStyle, fontFamily: "'Vidaloka', serif",}}>
                  Contact <Contacts className="nav-icon" sx={{ fontSize: 20 }}/>
                </div>
              </NavLink>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1dUp-F4kjgafGYs9xX6DUDbi6crlxQqjt/view?usp=drive_link" target="_blank" rel="noopener noreferrer" onClick={() => { toggleNavbar(); playSoundAlert(); }}>
                <div className="nav-item" style={{...iconStyle, fontFamily: "'Vidaloka', serif",}}>
                  Resume <DocumentScannerIcon className="nav-icon" sx={{ fontSize: 20 }}/>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
