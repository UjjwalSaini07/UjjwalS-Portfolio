import * as React from "react";
import "./Equalizer.css";

const SVGComponent = (props) => (
  <svg
    id="equalizer"
    width="25px"
    height="30px"
    viewBox="0 0 25 17.5"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <g fill="#000000">
      <path
        id="bar1"
        className="bar bar1"
        x={0}
        y={5}
        width={1}
        height={2}
        d="M0 12.5H2.5V17.5H0V12.5z"
      />
      <path
        id="bar2"
        className="bar bar2"
        x={3}
        y={2}
        width={1}
        height={5}
        d="M7.5 5H10V17.5H7.5V5z"
      />
      <path
        id="bar3"
        className="bar bar3"
        x={6}
        y={0}
        width={1}
        height={7}
        d="M15 0H17.5V17.5H15V0z"
      />
      <path
        id="bar4"
        className="bar bar4"
        x={9}
        y={3}
        width={1}
        height={4}
        d="M22.5 7.5H25V17.5H22.5V7.5z"
      />
    </g>
  </svg>
);
export default SVGComponent;
