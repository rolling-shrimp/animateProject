import React, { useRef, useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { Container, Row, Col, Button } from "react-bootstrap";
import { theStatics } from "./the_ParllaxPic_css";
import TeamLogo from "./teamLogo";
import ParllaxPic from "./parallaxImage";
import Image from "next/image";
import { motion, useInView, animate, AnimatePresence } from "framer-motion";

import style from "../styles/animation.module.css";
export default function Teams({ scrollPosition, background }) {
  const { leftTop, rightTop, leftBottom, rightBottom } = theStatics;
  const teamRef = useRef(null);
  const buttonRef = useRef(null);
  const isInView = useInView(teamRef);
  const isButtonInview = useInView(buttonRef);
  const [isAppear, setisAppear] = useState(false);
  useEffect(() => {
    if (isInView) {
      animate(teamRef.current, { opacity: 1 }, { duration: 2 });
    }
  }, [isInView]);
  useEffect(() => {
    if (isButtonInview) {
      animate(
        buttonRef.current,
        { opacity: 1, rotate: "360deg" },
        { duration: 2 }
      );
    }
  }, [isButtonInview]);
  return (
    <section
      id="favorite teams"
      className={`${style.teams} d-flex flex-column align-items-center justify-content-evenly`}
      style={{ overflow: "hidden", backgroundColor: background }}
    >
      <h1 className={style.h1}>Favorite Teams </h1>
      <Container>
        <Row style={{ height: "100%" }}>
          <Col
            className="d-flex flex-row justify-content-center align-items-center"
            style={{ height: "100%", position: "relative" }}
          >
            <motion.div ref={teamRef} initial={{ opacity: 0 }}>
              <Image
                style={{ objectFit: "contain" }}
                width={500}
                height={300}
                src="/images/play.jpg"
              ></Image>
            </motion.div>
            <ParllaxPic
              translateX={leftTop.translateX}
              translateY={leftTop.translateY}
              thecss={leftTop.thecss}
              imageWidth={leftTop.imageWidth}
              imageHeight={leftTop.imageHeight}
              thesrc={leftTop.thesrc}
            ></ParllaxPic>
            <ParllaxPic
              translateX={rightTop.translateX}
              translateY={rightTop.translateY}
              thecss={rightTop.thecss}
              imageWidth={rightTop.imageWidth}
              imageHeight={rightTop.imageHeight}
              thesrc={rightTop.thesrc}
            ></ParllaxPic>
            <ParllaxPic
              translateX={leftBottom.translateX}
              translateY={leftBottom.translateY}
              thecss={leftBottom.thecss}
              imageWidth={leftBottom.imageWidth}
              imageHeight={leftBottom.imageHeight}
              thesrc={leftBottom.thesrc}
            ></ParllaxPic>
            <ParllaxPic
              translateX={rightBottom.translateX}
              translateY={rightBottom.translateY}
              thecss={rightBottom.thecss}
              imageWidth={rightBottom.imageWidth}
              imageHeight={rightBottom.imageHeight}
              thesrc={rightBottom.thesrc}
            ></ParllaxPic>
          </Col>
        </Row>
        <Row>
          <Col style={{ height: "100%" }} md={3}></Col>
          <Col
            style={{ height: "10vh" }}
            className="d-flex flex-column justify-content-evenly align-items-center p-2"
          >
            <motion.button
              initial={{ opacity: 0, rotate: "0deg" }}
              ref={buttonRef}
              style={{
                backgroundColor: "black",
                color: "white",
                border: "unset",
                padding: "0.5rem 1rem",
              }}
              onClick={() => {
                setisAppear(!isAppear);
              }}
            >
              click & hide
            </motion.button>
          </Col>
          <Col style={{ height: "100%" }} md={3}></Col>
        </Row>
        <Row>
          <Col style={{ height: "100%" }} md={3}></Col>
          <Col
            style={{ minHeight: "35vh" }}
            className="d-flex flex-column justify-content-evenly align-items-center"
          >
            <AnimatePresence>
              {isAppear && <TeamLogo></TeamLogo>}
            </AnimatePresence>
          </Col>
          <Col style={{ height: "100%" }} md={3}></Col>
        </Row>
      </Container>
    </section>
  );
}
