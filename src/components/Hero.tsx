import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "@styles/hero.module.sass";

function Hero() {
  const gsapRef = useRef(null);
  const qs = gsap.utils.selector(gsapRef);

  useEffect(() => {
    gsap
      .timeline()
      .from(qs(".jhos"), {
        y: 50,
        opacity: 0,
        duration: 0.6,
      })
      .from(
        qs(".eph"),
        {
          x: -50,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.2"
      )
      .from(
        qs(".guer"),
        {
          x: 50,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.2"
      )
      .from(
        qs(".rero"),
        {
          y: -50,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.2"
      )
      .from(qs(".full"), {
        x: "100%",
        duration: 0.5,
      })
      .from(
        qs(".dev"),
        {
          x: "-100%",
          duration: 0.5,
        },
        "-=0.5"
      )
      .from(
        qs(".quote"),
        {
          y: 50,
          opacity: 0,
          duration: 0.5,
        },
        "+=0.2"
      );
  });

  return (
    <div className={styles.container} ref={gsapRef}>
      <div className={styles.panel_left}>
        <div className={styles.box_left}>
          <h2 className="jhos">Jhos</h2>
          <h2 className="guer">Guer</h2>
          <h3 className="full">Fullstack</h3>
        </div>
      </div>
      <div className={styles.panel_right}>
        <div className={styles.box_right}>
          <h2 className="eph">eph</h2>
          <h2 className="rero">rero</h2>
          <h3 className="dev">Developer</h3>
        </div>
      </div>
      <h4 className={[styles.quote, "quote"].join(" ")}>
        "I think, therefore i code"
      </h4>
    </div>
  );
}

export default Hero;
