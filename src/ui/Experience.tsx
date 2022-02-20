import React from "react";
import Image from "next/image";
import styles from "@styles/experiences.module.sass";

interface Props {
  exp: Experience;
  onClickExperience: (id: string) => void;
}

function Experience({ exp, onClickExperience }: Props) {
  return (
    <div
      className={styles.experience}
      key={exp.id}
      onClick={() => onClickExperience(exp.id)}
    >
      <div className={styles.exp_image_box}>
        <Image
          src={exp.enterpriseLogo.url}
          alt={`${exp.enterprise} Logo`}
          width={exp.enterpriseLogo.width}
          height={exp.enterpriseLogo.height}
        />
      </div>
      <div className={styles.exp_content}>
        <h3 style={{ color: exp.brandColor }}>{exp.enterprise}</h3>
        <h4>{exp.occupation}</h4>
        <p className={styles.exp_subdesc}>{exp.subDescription}</p>
        <p className={styles.exp_date}>{exp.dateRange}</p>
      </div>
    </div>
  );
}

export default Experience;
