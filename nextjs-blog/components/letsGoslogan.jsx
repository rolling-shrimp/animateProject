import React from "react";
import { Parallax } from "react-scroll-parallax";
import { Container, Row, Col } from "react-bootstrap";

export default function LetsGoslogan({ children, thecss, translateX }) {
  return (
    <Parallax style={thecss} translateX={translateX}>
      <Container>
        <Row>
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <h1
              style={{
                fontSize: "10rem",
                padding: "1rem,2rem",
                color: "white",
                // backgroundColor: "black",
                height: "30vh",
                width: "70vh",
                textAlign: "center",
                textShadow: "black 2px",
              }}
            >
              {children}
            </h1>
          </Col>
        </Row>
      </Container>
    </Parallax>
  );
}
