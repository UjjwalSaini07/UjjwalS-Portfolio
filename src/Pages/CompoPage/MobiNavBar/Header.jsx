import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Info, Engineering, Work, Contacts} from '@mui/icons-material';
import PsychologyIcon from '@mui/icons-material/Psychology';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Hamburger from './Hamburger';
import './Header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
    setIsOpen(!isOpen);
  };

  const iconStyle = {
    verticalAlign: 'sub',
    transition: 'transform 0.3s ease-in-out',
    transform: isOpen ? 'scale(1.1)' : 'scale(1)',
  };

  return (
    <div className="myheader" id="nav">
      <div className="head-container">
        <span className="hamburger-icon">
          <Hamburger isOpen={isOpen} toggle={toggleNavbar} />
        </span>
        <div className={`mobile-navbar ${isOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <NavLink to="/" exact onClick={toggleNavbar}>
                <div className="nav-item" style={iconStyle}>
                  Home <Home className="nav-icon" sx={{ fontSize: 20 }} />
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" exact onClick={toggleNavbar}>
                <div className="nav-item" style={iconStyle}>
                  About <Info className="nav-icon" sx={{ fontSize: 16 }}/>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" exact onClick={toggleNavbar}>
                <div className="nav-item" style={iconStyle}>
                  Skills <PsychologyIcon className="nav-icon" sx={{ fontSize: 20 }}/>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/education" exact onClick={toggleNavbar}>
                <div className="nav-item" style={iconStyle}>
                  Education <MenuBookIcon className="nav-icon" sx={{ fontSize: 18 }}/>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" exact onClick={toggleNavbar}>
                <div className="nav-item" style={iconStyle}>
                  Projects <Engineering className="nav-icon" sx={{ fontSize: 20 }}/>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/experience" exact onClick={toggleNavbar}>
                <div className="nav-item" style={iconStyle}>
                  Experience <Work className="nav-icon" sx={{ fontSize: 20 }}/>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" exact onClick={toggleNavbar}>
                <div className="nav-item" style={iconStyle}>
                  Contact <Contacts className="nav-icon" sx={{ fontSize: 20 }}/>
                </div>
              </NavLink>
            </li>
            <li>
              <a href="#" onClick={toggleNavbar}>
                <div className="nav-item" style={iconStyle}>
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
