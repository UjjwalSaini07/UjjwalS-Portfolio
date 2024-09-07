import React from "react";
import { useInView } from 'react-intersection-observer';

export default function Certificate({ certification, index }) {
  const isMobile = window.innerWidth < 798;

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

  return (
    <div
      className="certificate-card"
      key={index}
      ref={ref1}
      style={{
        position: 'relative',
        width: '335px',
        height: isMobile ? '265px' : '280px',
        perspective: '1000px',
        margin: '10px',
        cursor: 'pointer',
        transform: 'scale(1)',
        transition: 'transform 0.3s ease',
        opacity: inView1 ? 1 : 0, 
        transform: inView1 ? 'translateY(0)' : 'translateY(-50px)', 
        transition: 'opacity 1.25s ease-out ${1.7 + index}s, transform 1.25s ease-out ${1.7 + index}s'
      }}
    >
      <div
        className="certificate-card__inner"
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transition: 'transform 0.8s',
          transformStyle: 'preserve-3d',
        }}
      >
        <div
          className="certificate-card__front"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, #4a148c, #f06292)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '15px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
            transform: 'rotateY(0deg)',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: isMobile ? '15.4px' : '17px', fontWeight: 'bold' }}>
              {certification.certification}
            </div>
            <div style={{ fontSize: '14px', color: '#dcdcdc' }}>
              {certification.year}
            </div>
            <div style={{ fontSize: isMobile ? '13px' : '14px', color: '#c9c9c9' }}>
              {certification.institution}
            </div>
          </div>
        </div>
        <div
          className="certificate-card__back"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, #cfd9df, #e2ebf0)',
            transform: 'rotateY(180deg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={certification.image}
            alt="certificate"
            style={{
              width: '92%',
              height: '88%',
              objectFit: 'contain', 
              borderRadius: '10px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            }}
          />
        </div>
      </div>
      <style>
        {`
          .certificate-card:hover .certificate-card__inner {
            transform: rotateY(180deg);
          }
          .certificate-card:hover {
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
}
