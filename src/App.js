import React, { useState, useEffect } from 'react';
import {Route, Routes } from "react-router-dom";

import Preloader from './components/Preloader.js';
import AppLayout from "./components/AppLayout";
import SideBar from './components/Sidebar/SideBar.jsx'

import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Skills from './Pages/Skills.js';
import WorkEx from './Pages/WorkEx.js';
import Project from './Pages/Project.js';
import Contact from './Pages/Contact.js';
import Error404 from './Pages/Error404.js';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2200); // Adjust the timeout as needed
  }, []);

  return (
    <div  className="App">
      {loading ? <Preloader /> : (
      <>
        {/* <SideBar /> */}
        <SideBar>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/work" element={<WorkEx />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
            <Route path="*" element={<Error404 />} />
            {/* <Route path="*" element={<h1>404 Not Found</h1>} /> */}
          </Routes>
        </SideBar>
      </>
    )}
    </div>
  );
};

export default App;
