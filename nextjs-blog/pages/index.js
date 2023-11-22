import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hompage_Animate from "../components/homepage_animate";
import About from "../components/About";
import Teams from "../components/teams";
import ShowLetgo from "../components/showLetgo";
import Mimai from "../components/mimai";
import Footer from "../components/footer";
import { useState, useEffect, useCallback } from "react";

export default function Home() {
  const [background, setbackground] = useState("black"); //the background color of the whole website
  const [color, setcolor] = useState("white"); // the text color of the about section
  const [scrollPosition, setScrollPosition] = useState(0); // the scroll progress
  useEffect(() => {
    const updateScrollPosition = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", updateScrollPosition);

    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []); // the event which calculate the scroll progress

  const colorChange = useCallback(() => {
    if (scrollPosition >= 600) {
      setbackground("gray");
    }
    if (scrollPosition > 700) {
      setbackground("#D17E2A");
      setcolor("black");
    }

    if (scrollPosition < 600) {
      setbackground("black");
    }
    if (scrollPosition < 700) {
      setcolor("white");
    }
    if (scrollPosition > 1150) {
      setbackground("#dd4f0e");
    }
    if (scrollPosition >= 1700) {
      setbackground("#FAC8C8");
    }
  }, [scrollPosition]); // the function changing the background color of the website due to the particular scroll position

  useEffect(() => {
    console.log("check if the particular scrolling progress is approached");
    colorChange();
  }, [colorChange]); // the changing color function happens

  return (
    <div
    // style={{ overflow: "hidden" }}
    // className={styles.container}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Create Next App</title>
      </Head>

      <Hompage_Animate></Hompage_Animate>
      <About background={background} color={color} />
      <Teams
        background={background}
        color={color}
        scrollPosition={scrollPosition}
      />
      <ShowLetgo />
      <Mimai></Mimai>
      <Footer></Footer>
    </div>
  );
}
