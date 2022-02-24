import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "@styles/skills.module.sass";

interface props {
  skills: Skill[];
}

const Skills = ({ skills }: props) => {
  const gsapRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const qs = gsap.utils.selector(gsapRef);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: gsapRef.current,
          start: "top center-=150px",
        },
      })
      .from(qs(".title"), {
        y: 50,
        opacity: 0,
        duration: 0.6,
      })
      .from(qs(".skill"), {
        stagger: 0.1,
        opacity: 0,
        x: 150,
      })
      .from(qs(".continue"), {
        y: 50,
        opacity: 0,
        duration: 0.5,
      });
  });

  return (
    <div className={styles.skill_section} ref={gsapRef}>
      <div className={styles.container}>
        <h2 className="title">My skills</h2>
        <div className={styles.skills_box}>
          {skills.reverse().map((skill) => (
            <div className={[styles.skill, "skill"].join(" ")} key={skill.id}>
              <div className={styles.image_box}>
                <Image
                  src={skill.skillLogo.url}
                  alt={`${skill.skill} logo`}
                  width={skill.skillLogo.width}
                  height={skill.skillLogo.height}
                  layout="responsive"
                />
              </div>
              <p>{skill.skill}</p>
            </div>
          ))}
        </div>
        <h2 className={[styles.continue, "continue"].join(" ")}>
          To be continue...
        </h2>
      </div>
    </div>
  );
};

export default Skills;
