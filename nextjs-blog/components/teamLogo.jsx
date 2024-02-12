import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TeamImages } from "./teamsImage";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
export default function TeamLogo() {
  return (
    <motion.div
      initial={{ rotate: "0deg", opacity: 0 }}
      animate={{ rotate: "360deg", opacity: 1 }}
      transition={{ duration: 3, ease: "backInOut" }}
      exit={{ rotate: "0deg", opacity: 0 }}
    >
      <Container>
        <Row
          // className="d-flex flex-row
          //   align-items-center justify-content-evenly p-3 "
          className="p-3"
          style={{
            backgroundColor: "black",
            // width: "fit-content",
            // height: "fit-content",
          }}
        >
          {TeamImages.map((item, index) => (
            <Col
              key={index}
              className="d-flex flex-row align-items-center justify-content-center "
              style={{ width: "fit-content" }}
            >
              <Link href={`${item[1]}`}>
                <Image src={item[0]} width={150} height={150}></Image>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </motion.div>
  );
}
