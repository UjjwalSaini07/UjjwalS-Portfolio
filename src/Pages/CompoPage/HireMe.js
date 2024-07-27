import React from 'react';

const RotatingSVGWithButton = () => {
  return (
    <div style={{
      position: 'relative',
      width: '200px',
      height: '200px',
      margin: '100px auto',
      backgroundColor: 'transparent',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: '100px',
    }}>
      <svg
        viewBox="0 0 100 100"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          transformOrigin: 'center',
          animation: 'rotate 10s linear infinite',
          marginTop: '-102px',
          marginLeft: '-100px',
        }}
      >
        <defs>
          <path id="circlePath" d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
        </defs>
        <text fill="#ffffff" fontSize="11.1">
          <textPath xlinkHref="#circlePath">
            . UI/UX Designer  .  Web Developer  .  Game Dev
          </textPath>
        </text>
      </svg>
      <a 
        href="https://example.com" 
        style={{
          position: 'absolute',
          width: '90px',
          height: '90px',
          background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)', // Initial gradient background
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: '16px',
          textAlign: 'center',
          zIndex: 1,
          textDecoration: 'none',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', // Initial shadow
          transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, width 0.3s ease, height 0.3s ease', // Smooth transitions
          cursor: 'pointer',
          animation: 'glow 1.5s infinite alternate', // Glow animation
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translate(-50%, -50%) scale(1.2)';
          e.target.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.3)';
          e.target.style.background = 'linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)'; // Hover gradient background
          e.target.style.width = '100px'; // Increase size on hover
          e.target.style.height = '100px'; // Increase size on hover
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translate(-50%, -50%) scale(1)';
          e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
          e.target.style.background = 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)'; // Initial gradient background
          e.target.style.width = '95px'; // Reset size
          e.target.style.height = '95px'; // Reset size
        }}
      >
        Hire Me
      </a>


      <style>{`
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }


         @keyframes glow {
          0% {
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2), 0 0 20px rgba(106, 17, 203, 0.6);
          }
          100% {
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2), 0 0 20px rgba(37, 117, 252, 0.8);
          }
        }
      `}</style>
    </div>
  );
}

export default RotatingSVGWithButton;
