import { Suspense, useEffect, useState } from "react";
import React from "react";

// Import Spline normally
import Spline from "@splinetool/react-spline";

const SplineObj = (props) => {
  const [isDesktop, setDesktop] = useState(false);
  const [SplineComponent, setSplineComponent] = useState(null);

  useEffect(() => {
    const updateMedia = () => {
      if (window.innerWidth > 550) {
        setDesktop(true);
        import("@splinetool/react-spline")
          .then((module) => {
            setSplineComponent(() => module.default);
          })
          .catch((error) => {
            console.error("Error loading Spline component:", error);
          });
      } else {
        setDesktop(false);
        setSplineComponent(null);
      }
    };
  
    // Initial check
    updateMedia();
  
    // Add event listener for resizing
    window.addEventListener("resize", updateMedia);
  
    // Cleanup event listener
    return () => window.removeEventListener("resize", updateMedia);
  }, []);
  

  return (
    <Suspense fallback={<>Loading...</>}>
      {isDesktop && SplineComponent && (
        <SplineComponent className="absolute top-0 right-0" scene={props.scene} />
      )}
    </Suspense>
  );
};

export default SplineObj;
