import React from "react";
import { Parallax } from "react-scroll-parallax";
export default function Scroll() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Parallax translateY={[]}>
        <h1>please scroll</h1>
      </Parallax>
    </div>
  );
}
