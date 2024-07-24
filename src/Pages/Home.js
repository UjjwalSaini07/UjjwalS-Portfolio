import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
    <Helmet>
      <title>Home | Portfolio - Ujjwal</title>
    </Helmet>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ color: 'white', fontWeight: 'bold', fontSize: '50px'}}>Home</h1>
        <p style={{ color: 'white', fontWeight: 'bold' }} >Welcome to the Home page!</p>
      </div>
    </>
  );
};

export default Home;
