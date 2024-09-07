import React from "react";
import { useInView } from 'react-intersection-observer';

export default function AboutCard(props) {

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

  const titleStyle = {
    color: '#e73e0d',
    fontSize: '16.5px',
    fontWeight: 'bold',
    opacity: inView1 ? 1 : 0, 
    transform: inView1 ? 'translateY(0)' : 'translateY(-50px)', 
    transition: `opacity 1.25s ease-out 4s, transform 1.25s ease-out 4s`
  };
  
  const descStyle = {
    color: 'white',
    fontSize: '13.5px',
    marginTop: '5px',
    opacity: '0.8',
    opacity: inView1 ? 1 : 0, 
    transform: inView1 ? 'translateY(0)' : 'translateY(-50px)', 
    transition: `opacity 1.25s ease-out 4s, transform 1.25s ease-out 4s`
  };

  const cardStyle = {
    fontSize: '15px',
    padding: '15px',
    paddingTop: '15px',
    marginLeft: '0',
    marginTop: '0',
    textAlign: 'left',
    // backgroundColor: 'black',
    backgroundColor: 'transparent',
    maxWidth: '100%',
    height: 'auto',
    aspectRatio: 'attr(width) / attr(height)',
    // background: 'linear-gradient(0deg, rgb(20, 20, 20) 0%, rgba(0, 0, 0, 0.5) 100%)',
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
    opacity: inView1 ? 1 : 0, 
    transform: inView1 ? 'translateY(0)' : 'translateY(-50px)', 
    transition: `opacity 1.25s ease-out 4s, transform 1.25s ease-out 4s`
  };

  const pointsStyle = {
    color: 'white',
    fontSize: '13.5px',
    marginTop: '5px',
    opacity: '0.8',
    opacity: inView1 ? 1 : 0, 
    transform: inView1 ? 'translateY(0)' : 'translateY(-50px)', 
    transition: `opacity 1.25s ease-out 4s, transform 1.25s ease-out 4s`
  };

  return (
    <div style={cardStyle}>
      <div ref = {ref1} style={titleStyle}>{props.title}</div>
        <div ref = {ref1} style={descStyle}>
          {props.description}
        </div>
      <div className="points"  ref = {ref1} style={pointsStyle}>
        {props.points.map((point, index) => (
          <li className="card-item" key={index} ref = {ref1} style={cardItemStyle}>
            {point}
          </li>
        ))}
      </div>
    </div>
  );
}
