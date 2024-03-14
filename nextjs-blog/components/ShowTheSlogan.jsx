import React from "react";
import SloganLetGo from "./SloganLetGo";
import ViedoLetGo from "./ViedoLetGo";

const ShowTheSlogan = () => {
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
      <ViedoLetGo />

      <SloganLetGo
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
      </SloganLetGo>
      <SloganLetGo
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
      </SloganLetGo>
    </section>
  );
};

export default ShowTheSlogan;
