import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import style from "../styles/animation.module.css";
import { motion, useInView } from "framer-motion";

import { Container, Row, Col } from "react-bootstrap";
import { Parallax } from "react-scroll-parallax";
import { ParallaxBanner } from "react-scroll-parallax";

const About = ({ background, color }) => {
  // const [background, setbackground] = useState("black");
  // const [color, setcolor] = useState("white");
  const [scrollPosition, setScrollPosition] = useState(0);
  const ref = useRef(null);
  const ptagref = useRef(null);
  const View = useInView(ptagref, { once: true });

  const inView = useInView(ref, { once: true });

  return (
    <section
      id="about"
      className={`${style.about} d-flex flex-column justify-content-evenly align-items-center `}
      style={{ backgroundColor: background }}
    >
      <Container style={{ height: "50vh" }}>
        <Row style={{ height: "100%" }}>
          <Col md={3}></Col>
          <Col
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ height: "100%" }}
          >
            <motion.h1
              className={style.AboutH1}
              ref={ptagref}
              style={{
                // position: "absolute",
                // left: "40%",
                color: color,
                transform: View ? "none" : " translateX(-200px)",

                transition: "all 2s ",
              }}
            >
              About
            </motion.h1>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
      <Container style={{ height: "50vh" }}>
        <Row style={{ height: "100%" }}>
          <Col md={3}></Col>
          <Col style={{ position: "relative", height: "100%" }}>
            <motion.p
              ref={ptagref}
              style={{
                position: "absolute",
                // left: "40%",
                color: color,
                transform: View ? "none" : " translateX(-200px)",

                transition: "all 4s ",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui fugit
              <br></br>
              quaerat similique provident harum unde porro, illo corporis
              dignissimos
              <br></br>
              voluptas repudiandae nihil quasi amet optio vel rerum fugiat
              placeat dolorum!
              <br></br>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br></br>
              Quos, quis voluptatum iste veritatis laudantium corrupti,
              <br />
              blanditiis, optio cupiditate harum reprehenderit natus dolorem
              similique saepe <br />
              quod labore eveniet laboriosam! Cupiditate, repudiandae! Lorem
              ipsum dolor, sit amet consectetur adipisicing elit.<br></br>
              Quos, quis voluptatum iste veritatis laudantium corrupti,
              <br />
              blanditiis, optio cupiditate harum reprehenderit natus dolorem
              similique saepe <br />
              quod labore eveniet laboriosam! Cupiditate, repudiandae!
            </motion.p>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
