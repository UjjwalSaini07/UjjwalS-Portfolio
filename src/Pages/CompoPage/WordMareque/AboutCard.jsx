import React from "react";

export default function AboutCard(props) {
  const titleStyle = {
    color: '#e73e0d',
    // color: 'wheat',
    fontSize: '15px',
    fontWeight: 'bold',
  };
  
  const descStyle = {
    color: 'white',
    fontSize: '15px',
    marginTop: '5px',
    opacity: '0.8',
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
    fontSize: '15px',
    margin: '2px',
    marginTop: '5px',
    opacity: '0.8',
  };

  const pointsStyle = {
    color: 'white',
    fontSize: '15px',
    marginTop: '5px',
    opacity: '0.8',
  };

  return (
    <div style={cardStyle}>
      <div style={titleStyle}>{props.title}</div>
        <div style={descStyle}>
          {props.description}
        </div>
      <div className="points" style={pointsStyle}>
        {props.points.map((point, index) => (
          <li className="card-item" key={index} style={cardItemStyle}>
            {point}
          </li>
        ))}
      </div>
    </div>
  );
}
