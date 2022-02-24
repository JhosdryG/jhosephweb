import React, { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Project from "@ui/Project";
import styles from "@styles/projects.module.sass";

interface Props {
  projects: Project[];
}

function Projects({ projects }: Props) {
  const gsapRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const qs = gsap.utils.selector(gsapRef);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: gsapRef.current,
        start: "top center-=150px",
      },
    });
    tl.from(qs(".software"), {
      y: 50,
      opacity: 0,
      duration: 0.6,
    });

    projects.forEach((_, i) => {
      const prs = `.project:nth-child(${i + 1})`;
      const delay = i > 0 ? "-=0.2" : "-=0";
      tl.from(
        qs(prs),
        {
          x: 60,
          opacity: 0,
          duration: 0.4,
        },
        delay
      )
        .from(qs(`${prs} h3`), {
          x: 60,
          opacity: 0,
          duration: 0.4,
        })
        .from(qs(`${prs} p`), {
          x: 60,
          opacity: 0,
          duration: 0.4,
        })
        .from(qs(`${prs} .stack_img`), {
          x: 70,
          opacity: 0,
          stagger: 0.1,
        });
    });
  });
  return (
    <section className={styles.projects_section} ref={gsapRef}>
      <div className={styles.container}>
        <h3 className="software">Software && Apps</h3>
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
