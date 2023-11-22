import React, { useContext } from "react";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import styles from "../styles/animation.module.css";
const SlidingPic = ({ thesrc, speed }) => {
  return (
    <Parallax speed={speed}>
      <Image
        width={200}
        height={300}
        className={styles.paraTeamOwnimage}
        src={thesrc}
        style={{
          objectPosition: "center",
          border: "white solid 2px",
        }}
      ></Image>
    </Parallax>
  );
};

export default SlidingPic;
