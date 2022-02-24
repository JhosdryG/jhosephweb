import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "@styles/contact_modal.module.sass";

function ContactModal({ closeModal }: { closeModal(): void }) {
  const gsapRef = useRef(null);
  const qs = gsap.utils.selector(gsapRef);

  useEffect(() => {
    gsap.from(qs(".modal"), {
      y: 50,
      opacity: 0,
      duration: 0.5,
    });
  }, []);

  const handleCloseModal = () => {
    gsap.to(".modal", {
      y: 50,
      opacity: 0,
      duration: 0.5,
      onComplete: () => closeModal(),
    });
  };

  return (
    <div className={styles.container} ref={gsapRef}>
      <div className={[styles.modal, "modal"].join(" ")}>
        <FontAwesomeIcon icon={faCheckCircle} />
        <h3>Your message has been sent</h3>
        <p>Thanks for message me, i'll answer you as soon as posible.</p>
        <button onClick={handleCloseModal}>Continue</button>
      </div>
    </div>
  );
}

export default ContactModal;
