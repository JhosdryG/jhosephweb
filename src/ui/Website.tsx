import React from "react";
import styles from "@styles/websites.module.sass";
import Image from "next/image";

interface Props {
  web: Website;
}

function Website({ web }: Props) {
  return (
    <a className={styles.web} key={web.id}>
      <div className={styles.web_img_box}>
        <Image
          src={web.webPreview.url}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className={styles.web_content}>
        <h3>{web.webName}</h3>
        <p>{web.webDescription}</p>
      </div>
    </a>
  );
}

export default Website;