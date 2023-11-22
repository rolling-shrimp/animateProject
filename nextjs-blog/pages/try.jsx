import React, { useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

function MyComponent() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section>
      <div style={{ height: "100vh", backgroundColor: "green" }}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi minima
          eos eveniet maiores <br />
          cumque laudantium inventore ipsam explicabo nam, <br />
          in asperiores dignissimos soluta quidem at repudiandae perferendis
          voluptatum, qui minus!
        </p>
      </div>
      <div
        className="d-flex flex-column align-items center justify-content-center"
        style={{ backgroundColor: "black", height: "50vh" }}
      >
        <AnimatePresence>
          {inView && (
            <motion.p
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              style={{ color: "white" }}
            >
              帥哥
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default MyComponent;
