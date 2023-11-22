import React from "react";
import { useState, useEffect, useRef } from "react";
import styles from "../styles/animation.module.css";
import otherStyle from "../styles/Home.module.css";
import { Parallax } from "react-scroll-parallax";

import { Container, Row, Col } from "react-bootstrap";

import Welcome from "./welcome";
import Film from "./video";

export default function Hompage_Animate() {
  let navArray = ["about", "favorite teams"];

  return (
    <section
      className={`${styles.firstSection} d-flex flex-column align-items-center justify-content-start`}
    >
      <Film />
      <Container>
        <Row>
          <Col>
            <nav className="d-flex flex-row justify-content-start align-items-center  w-100 ">
              <ul
                className={`${styles.ul} d-flex flex-row justify-content-start align-items-center`}
              >
                {navArray.map((item) => (
                  <li
                    key={item}
                    style={{ listStyleType: "none", marginLeft: "2rem" }}
                    className={styles.atag}
                  >
                    <a
                      className="fs-4"
                      style={{ color: "white", textDecoration: "none" }}
                      href={`#${item}`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Col>
        </Row>
      </Container>

      <Welcome></Welcome>
    </section>
  );
}
