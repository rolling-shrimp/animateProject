import { easeIn } from "framer-motion";
import React from "react";

import { Parallax } from "react-scroll-parallax";
import { Container, Row, Col } from "react-bootstrap";
const ViedoLetGo = () => {
  return (
    <Parallax startScroll={90} scale={[0.5, 3, easeIn]}>
      <Container style={{ height: "70vh" }}>
        <Row style={{ height: "100%" }}>
          <Col style={{ height: "100%" }}>
            <video
              autoPlay
              loop
              muted
              style={{
                objectFit: "contain",
                objectPosition: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <source src="/images/horward2.mp4" />
            </video>
          </Col>
        </Row>
      </Container>
    </Parallax>
  );
};

export default ViedoLetGo;
