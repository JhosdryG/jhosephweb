import React from "react";
import styles from "@styles/hero.module.sass";

function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.panel_left}>
        <div className={styles.box_left}>
          <h2>Jhos</h2>
          <h2>Guer</h2>
          <h3>Fullstack</h3>
        </div>
      </div>
      <div className={styles.panel_right}>
        <div className={styles.box_right}>
          <h2>eph</h2>
          <h2>rero</h2>
          <h3>Developer</h3>
        </div>
      </div>
      <h4 className={styles.quote}>"I think, therefore i code"</h4>
    </div>
  );
}

export default Hero;
