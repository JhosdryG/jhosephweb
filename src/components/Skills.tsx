import styles from "@styles/skills.module.sass";
import Image from "next/image";

interface props {
  skills: Skill[];
}

const Skills = ({ skills }: props) => {
  return (
    <div className={styles.skill_section}>
      <div className={styles.container}>
        <h2>My skills</h2>
        <div className={styles.skills_box}>
          {skills.reverse().map((skill) => (
            <div className={styles.skill} key={skill.id}>
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
        <h2 className={styles.continue}>To be continue...</h2>
      </div>
    </div>
  );
};

export default Skills;
