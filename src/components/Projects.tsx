import React from "react";
import Project from "@ui/Project";
import styles from "@styles/projects.module.sass";

interface Props {
  projects: Project[];
}

function Projects({ projects }: Props) {
  return (
    <section className={styles.projects_section}>
      <div className={styles.container}>
        <h3>Software && Apps</h3>
        <div className={styles.projects}>
          {projects.map((project) => (
            <Project project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
