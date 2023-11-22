import React from "react";
import { Parallax } from "react-scroll-parallax";

const TeamName = ({ children }) => {
  return (
    <Parallax
      translateY={[100, 0]}
      speed={-10}
      style={{
        position: "absolute",
        // zIndex: "1",
        hieght: "100%",
        width: "100%",
      }}
    >
      {children}
    </Parallax>
  );
};

export default TeamName;
