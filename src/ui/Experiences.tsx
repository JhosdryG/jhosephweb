import React, { useState } from "react";
import Experience from "./Experience";
import ExperienceModal from "./ExperienceModal";
import styles from "@styles/experiences.module.sass";

interface Props {
  experiences: Experience[];
}

function Experiences({ experiences }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<
    Experience | undefined
  >();

  const onClickExperience = (id: string) => {
    const experience = experiences.find((exp) => exp.id === id);
    setSelectedExperience(experience);
    setIsOpen(true);
  };

  return (
    <>
      <div className={styles.experiences}>
        {experiences.map((exp) => (
          <Experience
            key={exp.id}
            exp={exp}
            onClickExperience={onClickExperience}
          />
        ))}
      </div>
      <ExperienceModal
        experience={selectedExperience}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
}

export default Experiences;
