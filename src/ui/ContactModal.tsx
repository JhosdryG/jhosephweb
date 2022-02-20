import React from "react";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "@styles/contact_modal.module.sass";

function ContactModal({ closeModal }: { closeModal(): void }) {
  const handleCloseModal = () => {
    closeModal();
  };
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <FontAwesomeIcon icon={faCheckCircle} />
        <h3>Your message has been sent</h3>
        <p>Thanks for message me, i'll answer you as soon as posible.</p>
        <button onClick={handleCloseModal}>Continue</button>
      </div>
    </div>
  );
}

export default ContactModal;
