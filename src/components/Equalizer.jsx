import * as React from "react";
import "./Equalizer.css";

const SVGComponent = (props) => (
  <svg
    id="equalizer"
    width="24px"
    height="26px"
    viewBox="0 0 25 17.5"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <g fill="#fff">
      <path
        id="bar1"
        className="bar bar1"
        d="M0 12.5H2.5V17.5H0V12.5z"
      />
      <path
        id="bar2"
        className="bar bar2"
        d="M7.5 5H10V17.5H7.5V5z"
      />
      <path
        id="bar3"
        className="bar bar3"
        d="M15 0H17.5V17.5H15V0z"
      />
      <path
        id="bar4"
        className="bar bar4"
        d="M22.5 7.5H25V17.5H22.5V7.5z"
      />
    </g>
  </svg>
);

export default SVGComponent;
