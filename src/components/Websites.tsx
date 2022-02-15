import React from "react";
import Website from "@ui/Website";
import styles from "@styles/websites.module.sass";

interface Props {
  websites: Website[];
}

function Websites({ websites }: Props) {
  return (
    <section className={styles.container}>
      <h2>Let me show you my work</h2>
      <h3>Web sites</h3>
      <div className={styles.websites}>
        {websites.map((web) => (
          <Website web={web} key={web.id} />
        ))}
      </div>
    </section>
  );
}

export default Websites;
