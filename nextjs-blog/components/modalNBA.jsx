import React, { useContext } from "react";
import styles from "../styles/animation.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import TeamName from "./teamName";
import Para_teamlogo from "./para_teamlogo";
import { sliding_Picture_params } from "./mimai";
import SlidingPic from "./slidingPic";

const Model_Nba = ({
  bgColor,
  teamName,
  imageLeft,
  imageCenter,
  imageRight,
  leftSecond,
  rightSecond,
  leftThird,
  rightThird,
}) => {
  return (
    <section
      id="miami"
      className="d-flex flex-row align-items-start justify-content-center"
      style={{
        height: "250vh",
        // overflow: "hidden",

        backgroundColor: bgColor,
      }}
    >
      <div
        style={{ position: "relative", overflow: "hidden", height: "100%" }}
        className="d-flex flex-column align-items-center justify-content-evenly"
      >
        <SlidingPic speed={5} thesrc={imageLeft}></SlidingPic>
        <SlidingPic speed={-5} thesrc={leftSecond}></SlidingPic>
        <SlidingPic speed={-10} thesrc={leftThird}></SlidingPic>
      </div>

      <div
        style={{
          height: "20%",
          width: "50%",
          position: "sticky",
          top: "10rem",
          overflow: "hidden",
          // border: "2px solid white",
        }}
        className="d-flex flex-column justify-content-between align-items-center"
      >
        <Container style={{ height: "100%" }}>
          <Row>
            <Col
              style={{ height: "100%" }}
              className="d-flex flex-column justify-content-evenly align-items-center"
            >
              <div
                className="d-flex flex-column justify-content-between align-items-center"
                style={{
                  overflow: "hidden",
                  // border: "solid white 2px",
                  position: "relative",
                  height: "10vh",
                  width: "100%",
                  // border: "2px white solid",
                }}
              >
                <TeamName>
                  <h1
                    className={styles.h1}
                    style={{ color: "white", textAlign: "center" }}
                  >
                    {teamName}
                  </h1>
                </TeamName>
              </div>
              <div
                style={{
                  // border: "2px solid white",
                  height: "40vh",
                  overflow: "hidden",
                  position: "relative",
                  width: "100%",
                }}
                className="d-flex flex-column justify-content-evenly align-items-center"
              >
                <Para_teamlogo imageCenter={imageCenter}></Para_teamlogo>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        style={{ position: "relative", overflow: "hidden", height: "100%" }}
        className="d-flex flex-column align-items-center justify-content-evenly"
      >
        <SlidingPic speed={3} thesrc={imageRight}></SlidingPic>
        <SlidingPic speed={-8} thesrc={rightSecond}></SlidingPic>
        <SlidingPic speed={-20} thesrc={rightThird}></SlidingPic>
        {/* <Parallax speed={3}>
          <Image
            width={200}
            height={300}
            className={styles.paraTeamOwnimage}
            style={{
              border: "white solid 2px",
            }}
            src={imageRight}
          ></Image>
        </Parallax> */}
        {/* <Parallax speed={-8}>
          <Image
            width={200}
            height={300}
            className={styles.paraTeamOwnimage}
            style={{
              border: "white solid 2px",
            }}
            src={rightSecond}
          ></Image>
        </Parallax> */}
        {/* <Parallax speed={-20}>
          <Image
            width={200}
            height={300}
            className={styles.paraTeamOwnimage}
            style={{
              border: "white solid 2px",
            }}
            src={rightThird}
          ></Image>
        </Parallax> */}
      </div>
    </section>
  );
};

export default Model_Nba;
