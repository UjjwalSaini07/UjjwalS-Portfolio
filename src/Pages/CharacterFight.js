import React from 'react';

const CharacterFight = () => {
  return (
    <div style={{
      textAlign: 'center',
      background: 'linear-gradient(135deg, #161626, #070721)',
      padding: '20px',
      marginTop: '68px',
      borderRadius: '15px',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
      color: '#fff',
      fontFamily: "'Roboto', sans-serif",
      transition: 'transform 0.2s',
      maxWidth: '100%',
      boxSizing: 'border-box'
    }}>
      <h1 style={{
        color: '#E73E0D',
        fontWeight: 'bold',
        fontSize: '45px',
        marginBottom: '20px',
        letterSpacing: '2px'
      }}>
        Character Fighting
      </h1>
      <p style={{
        color: '#E73E0D',
        fontWeight: '300',
        fontSize: '18px',
        marginBottom: '40px',
        maxWidth: '600px',
        margin: '0 auto',
        lineHeight: '1.6'
      }}>
        Character Fighting: Experience epic battles with dynamic 3D models, showcasing detailed characters and thrilling combat action.
      </p>
      <div className="sketchfab-embed-wrapper" style={{
        width: '100%',
        height: '300px',
        margin: '0 auto',
        border: '3px solid #E73E0D',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s, box-shadow 0.3s'
      }}>
        <iframe
          title="Character Fight"
          frameBorder="0"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          src="https://sketchfab.com/models/9ef2f6bd1346475885ce22ea971f8e4e/embed?autostart=1&ui_theme=dark&ui_controls=0&ui_infos=0&ui_stop=0"
          style={{ width: '100%', height: '100%' }}
        >
        </iframe>
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            h1 {
              font-size: 35px;
            }
            p {
              font-size: 16px;
            }
            .sketchfab-embed-wrapper {
              height: 250px;
            }
          }
          @media (max-width: 480px) {
            h1 {
              font-size: 25px;
            }
            p {
              font-size: 14px;
            }
            .sketchfab-embed-wrapper {
              height: 200px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default CharacterFight;
