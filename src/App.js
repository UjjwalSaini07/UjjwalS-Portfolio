import React, { useState, useEffect } from 'react';
import {Route, Routes } from "react-router-dom";

import AppLayout from "./components/AppLayout";
import Preloader from './components/Preloader.js';
import Navbar from './components/Navbar.js';
// Pages import
import Home from './Pages/Home.js';
// import About from './Pages/About.js';
import About from './Pages/CompoPage/Particles';


import Skills from './Pages/Skills.js';
import Experience from './Pages/Experience.js';
import Education from './Pages/Education.js';
import Project from './Pages/Project.js';
import Contact from './Pages/Contact.js';
import CharacterFight from './Pages/CharacterFight.js';
// Error Page
import Error404 from './Pages/Error404.js';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5200); // Adjust the timeout as needed
  }, []);

  return (
    <div  className="App">
      {loading ? <Preloader /> : (
      <>
      <Navbar/>
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
          </Route>
          <Route path="*" element={<Error404 />} />
          {/* <Route path="*" element={<h1>404 Not Found</h1>} /> */}
        </Routes>
      </>
    )}
    </div>
  );
};

export default App;
