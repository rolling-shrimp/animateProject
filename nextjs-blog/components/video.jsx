import React from "react";
import styles from "../styles/animation.module.css";
import { Container, Row } from "react-bootstrap";
export default function Film({ children }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: "-1",
      }}
    >
      <video className={styles.video} muted loop autoPlay>
        <source src="/images/nba2k.mp4" />
      </video>
    </div>
  );
}
