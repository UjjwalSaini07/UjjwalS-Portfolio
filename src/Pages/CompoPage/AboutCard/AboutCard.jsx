import React from "react";
import { useInView } from 'react-intersection-observer';

export default function AboutCard(props) {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

  const titleStyle = {
    color: '#e73e0d',
    fontSize: '18px',
    fontWeight: 'bold',
    fontFamily: "'Vidaloka', serif",
  };
  
  const descStyle = {
    color: 'white',
    fontSize: '13.5px',
    marginTop: '5px',
    opacity: '0.8',
  };

  const cardStyle = {
    fontSize: '13.5px',
    padding: '15px',
    paddingTop: '15px',
    marginLeft: '0',
    marginTop: '0',
    textAlign: 'left',
    backgroundColor: 'transparent',
    maxWidth: '100%',
    height: 'auto',
    aspectRatio: 'attr(width) / attr(height)',
    backdropFilter: 'blur(7px)',
    WebkitBackdropFilter: 'blur(7px)',
    border: '0.1px solid rgb(100, 100, 100)',
    borderRadius: '10px',
    transition: '0.5s all',
    boxShadow: 'none',
  };

  const cardItemStyle = {
    display: 'inline',
    font: 'monospace',
    color: 'white',
    fontSize: '13.5px',
    margin: '2px',
    marginTop: '5px',
    opacity: '0.8',
  };

  const pointsStyle = {
    color: 'white',
    fontSize: '13.5px',
    marginTop: '5px',
    opacity: '0.8',
  };

  return (
    <div style={cardStyle}>
      <div ref={ref1} style={{...titleStyle, opacity: inView1 ? 1 : 0, transform: inView1 ? 'translateY(0)' : 'translateY(-50px)', transition: `opacity 1.25s ease-out 1.5s, transform 1.25s ease-out 1.5s`}}>{props.title}</div>
        <div ref={ref1} style={{...descStyle, opacity: inView1 ? 1 : 0, transform: inView1 ? 'translateY(0)' : 'translateY(-50px)', transition: `opacity 1.25s ease-out 2.0s, transform 1.25s ease-out 2.0s`}}>
          {props.description}
        </div>
      <div className="points" ref={ref1} style={{...pointsStyle, opacity: inView1 ? 1 : 0, transform: inView1 ? 'translateY(0)' : 'translateY(-50px)', transition: `opacity 1.25s ease-out 2.8s, transform 1.25s ease-out 2.8s`}}>
        {props.points.map((point, index) => (
          <li className="card-item" key={index} ref={ref1} style={{...cardItemStyle, opacity: inView1 ? 1 : 0, transform: inView1 ? 'translateY(0)' : 'translateY(-50px)', transition: `opacity 1.25s ease-out 2.8s, transform 1.25s ease-out 2.8s`}}>
            {point}
          </li>
        ))}
      </div>
    </div>
  );
}
