import React from "react";
import styles from "@styles/projects.module.sass";
import Image from "next/image";

interface Props {
  project: Project;
}

function Project({ project }: Props) {
  return (
    <div className={styles.project}>
      <div className={styles.project_img}>
        <Image
          src={project.projectPreview.url}
          alt={`${project.projectName} preview`}
          layout="fill"
          quality={100}
        />
      </div>
      <div className={styles.project_content}>
        <div>
          <h3 className={styles.project_name}>{project.projectName}</h3>
          <p className={styles.project_desc}>{project.projectDescription}</p>
        </div>
        <div className={styles.stacks}>
          {project.projectStackCollection.map((stack, i) => (
            <div className={styles.stack_img_box} key={i}>
              <Image
                src={stack.url}
                alt={`${stack.title} logo`}
                layout="fill"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
