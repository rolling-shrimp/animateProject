import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "40vh", backgroundColor: "black" }}
    >
      <Container>
        <Row>
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <motion.div
              initial={{ y: 3, scale: 0 }}
              whileInView={{
                y: 0,

                scale: 1,
                transition: { type: "spring", bounce: 0.4, duration: 4 },
              }}
            >
              <div
                style={{
                  padding: "1rem",
                  height: "28vh",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  color: "brown",
                }}
              >
                <h1 style={{ color: "brown", textDecorationLine: "underline" }}>
                  {" "}
                  You can communicate with me via ..
                </h1>
                <p style={{ color: "brown" }}> tel: 099390376 </p>
                <p style={{ color: "brown" }}> line: btkbeatbox </p>
                <a style={{ color: "brown" }} href="#">
                  {" "}
                  back to top
                </a>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
