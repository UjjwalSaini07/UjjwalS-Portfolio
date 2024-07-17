import React, { useState, useEffect } from 'react';
import {Route, Routes } from "react-router-dom";

import Preloader from './components/Preloader.js';
import AppLayout from "./components/AppLayout";

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
        <Routes>
          <Route element={<AppLayout />}>


          </Route>
        </Routes>
      </>
    )}
    </div>
  );
};

export default App;
