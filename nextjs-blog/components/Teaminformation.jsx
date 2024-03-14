import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { motion } from "framer-motion";
const Teaminformation = ({ children, bgColor, IMAGE, IMAGEtop }) => {
  const cardVariants = {
    offscreen: {
      x: 300,
    },
    onscreen: {
      x: 0,
      rotate: -5,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2,
      },
    },
  };
  return (
    <section
      style={{
        // padding: "0.5rem 1.5rem",
        height: "150vh",
        backgroundColor: bgColor,
        overflow: "hidden",
      }}
    >
      <Container>
        <Row>
          <Col>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { type: "spring", bounce: 0.4, duration: 4 },
              }}
            >
              <Image
                style={{
                  border: "solid 2px white",
                  objectFit: "cover",
                  objectPosition: "0% -5%",
                }}
                width={500}
                height={600}
                src={IMAGE}
              ></Image>
            </motion.div>
          </Col>
          <Col md={7} style={{ minHeight: "70vh", color: "white" }}>
            <div
              className="d-flex flex-row justify-content-center align-items-center"
              style={{ height: "50vh" }}
            >
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                variants={cardVariants}
              >
                <Image
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    border: "solid 2px white",
                  }}
                  src={IMAGEtop}
                  width={450}
                  height={250}
                ></Image>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { type: "spring", bounce: 0.4, duration: 4 },
              }}
            >
              {children}
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Teaminformation;
