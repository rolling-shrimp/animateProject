import React from "react";

import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import "animate.css";
import thestyle from "../styles/animation.module.css";

export default function ParllaxPic({
  translateX,
  translateY,
  thecss,
  thesrc,
  imageWidth,
  imageHeight,
}) {
  return (
    <Parallax
      scale={[1, 2, "easeInQuad"]}
      translateX={translateX}
      translateY={translateY}
      speed={-10}
      style={thecss}
      className={thestyle.theTeampic}
    >
      <Image
        style={{ objectFit: "cover", objectPosition: "center" }}
        width={imageWidth}
        height={imageHeight}
        src={thesrc}
      ></Image>
    </Parallax>
  );
}
