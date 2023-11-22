import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
const Para_teamlogo = ({ imageRight, imageCenter }) => {
  return (
    <Parallax
      startScroll={50}
      style={{
        position: "absolute",
        // zIndex: "1",
        hieght: "100%",
        width: "100%",
      }}
      translateY={[100, -110]}
      speed={-5}
    >
      <Container>
        <Row>
          <Col className="d-flex flex-row justify-content-center align-items-center">
            <Image
              style={{ objectFit: "cover", objectPosition: "center" }}
              width={250}
              height={250}
              src={imageCenter}
            ></Image>
          </Col>
        </Row>
      </Container>
    </Parallax>
  );
};

export default Para_teamlogo;
