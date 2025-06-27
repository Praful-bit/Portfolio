// components/TiltWrapper.jsx
import React, { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

const TiltWrapper = ({ children, options, className }) => {
  const tiltRef = useRef();

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, options || {
      max: 45,
      speed: 400,
      scale: 1,
    });
  }, [options]);

  return (
    <div ref={tiltRef} className={className}>
      {children}
    </div>
  );
};

export default TiltWrapper;  

