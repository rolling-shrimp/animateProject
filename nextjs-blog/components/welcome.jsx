import React from "react";
import { Parallax } from "react-scroll-parallax";
import { Container, Row } from "react-bootstrap";
import styles from "../styles/animation.module.css";
const Welcome = () => {
  return (
    <Container className={styles.parallaxContainer}>
      <Row className={styles.parallaxRow}>
        <Parallax
          scale={[1, 0, "easeInElastic"]}
          translateX={[0, 50]}
          className={styles.parallaxLayer}
        >
          <h1 className={styles.h1}>
            Welcome~~This is the website <br></br>
            about my favorite NBA teams
          </h1>
        </Parallax>
      </Row>
    </Container>
  );
};

export default Welcome;
