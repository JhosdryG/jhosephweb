import React from "react";
import styles from "@styles/loader.module.sass";

function Loader() {
  return (
    <div className={styles.container}>
      <div className={styles["lds-dual-ring"]}></div>
    </div>
  );
}

export default Loader;
