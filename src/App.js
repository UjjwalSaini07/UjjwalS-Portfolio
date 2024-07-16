import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 7200); // Adjust the timeout as needed
  }, []);

  return (
    <div  className="App">
      {loading ? <Preloader /> : 
      <div>
        Your main content goes here
      </div>}
    </div>
  );
};

export default App;
