import React, { useState, useEffect } from 'react';
import {Route, Routes } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

import AppLayout from "./components/AppLayout";
import Preloader from './components/Preloader.js';
import Navbar from './components/Navbar.js';
import Header from './Pages/CompoPage/MobiNavBar/Header.jsx';
// Pages import
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Skills from './Pages/Skills.js';
import Experience from './Pages/Experience.js';
import Education from './Pages/Education.js';
import Project from './Pages/Project.js';
import Contact from './Pages/Contact.js';
import CharacterFight from './Pages/CompoPage/ExtraComponents/CharacterFight.js';
import Certifications from './Pages/CompoPage/Certificate/Certifications.jsx';
// Error Page
import Error404 from './Pages/Error404.js';

const App = () => {
  const [loading, setLoading] = useState(true);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3400);
  }, []);

  return (
    <div  className="App">
      {loading ? <Preloader /> : (
      <>
      {isMobile ? <Header /> : <Navbar />}
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/fight" element={<CharacterFight />} />
            <Route path="/certifications" element={<Certifications />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </>
    )}
    </div>
  );
};

export default App;
