import React from "react";
import Letgo_video from "./Letgo_video";
import LetsGoslogan from "./LetsGoslogan";

export default function ShowLetgo() {
  return (
    <section
      style={{
        backgroundColor: "black",
        height: "120vh",
        overflow: "hidden",
        position: "relative",
      }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <Letgo_video />

      <LetsGoslogan
        thecss={{
          position: "absolute",
          top: "50%",
          left: "0%",
          width: "fit-content",
          height: "fit-content",
          zIndex: "1",
        }}
        translateX={[-50, 70]}
      >
        Let's
      </LetsGoslogan>
      <LetsGoslogan
        thecss={{
          position: "absolute",
          top: "50%",
          right: "0%",
          width: "fit-content",
          height: "fit-content",
          zIndex: "1",
        }}
        translateX={[50, -70]}
      >
        Go!!!
      </LetsGoslogan>
    </section>
  );
}
