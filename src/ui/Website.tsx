import React from "react";
import styles from "@styles/websites.module.sass";
import Image from "next/image";

interface Props {
  web: Website;
}

function Website({ web }: Props) {
  return (
    <a
      className={[styles.web, "web"].join(" ")}
      href={web.webLink}
      target="_blank"
    >
      <div className={[styles.web_img_box, "img_box"].join(" ")}>
        <Image
          src={web.webPreview.url}
          alt={`${web.webName} preview`}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className={styles.web_content}>
        <h3 style={{ color: web.webColor }}>{web.webName}</h3>
        <p>{web.webDescription}</p>
      </div>
    </a>
  );
}

export default Website;
