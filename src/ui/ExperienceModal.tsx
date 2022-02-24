import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import Image from "next/image";
import Modal from "react-modal";

import styles from "@styles/experiences.module.sass";

Modal.setAppElement("#__next");

const modalStyle = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.8)",
    padding: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto",
    width: "90%",
    maxWidth: 600,
    maxHeight: "90vh",
    overflow: "auto",
  },
};

interface Props {
  experience: Experience | undefined;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

function ExperienceModal({ experience, isOpen, setIsOpen }: Props) {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    if (isOpen && isRendered) {
      gsap.from(".ReactModal__Content", {
        y: 50,
        opacity: 0,
        duration: 0.5,
      });
    } else if (isOpen) {
      setIsRendered(true);
    } else if (!isOpen) {
      setIsRendered(false);
    }
  }, [isOpen, isRendered]);

  const handleClose = () => {
    gsap.to(".ReactModal__Content", {
      y: 50,
      opacity: 0,
      duration: 0.5,
      onComplete: () => setIsOpen(false),
    });
  };

  if (!experience) return null;
  return (
    <Modal isOpen={isOpen} onRequestClose={handleClose} style={modalStyle}>
      <div className={styles.modal_closer} onClick={handleClose}>
        X
      </div>
      <div className={[styles.modal_content, "content"].join(" ")}>
        <div className={styles.modal_header}>
          <div className={styles.modal_image_box}>
            <Image
              src={experience.enterpriseLogo.url}
              alt={`${experience.enterprise} Logo`}
              width={experience.enterpriseLogo.width}
              height={experience.enterpriseLogo.height}
            />
          </div>
          <div className={styles.modal_header_text}>
            <h3 style={{ color: experience.brandColor }}>
              {experience.enterprise}
            </h3>
            <p>{experience.dateRange}</p>
          </div>
        </div>
        <p className={styles.modal_desc}>{experience.description}</p>
      </div>
    </Modal>
  );
}

export default ExperienceModal;
