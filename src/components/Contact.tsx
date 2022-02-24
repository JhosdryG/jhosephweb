import { useState, useEffect, useRef, FormEvent } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  faGithub,
  faLinkedin,
  faDiscord,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "@ui/Loader";
import ContactModal from "@ui/ContactModal";
import styles from "@styles/contact.module.sass";

type Status = "loading" | "success" | "error" | "";

type formTarget = EventTarget & {
  name: {
    value: string;
  };
  email: {
    value: string;
  };
  desc: {
    value: string;
  };
};

function Contact() {
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
    tl.from(qs(".findme"), {
      y: 50,
      opacity: 0,
      duration: 0.6,
    })
      .from(qs(".icon_box a"), {
        y: 30,
        opacity: 0,
        stagger: 0.2,
      })
      .from(qs(".cv"), {
        y: 30,
        opacity: 0,
        duration: 0.6,
      })
      .from(qs(".cv_icon"), {
        y: 30,
        opacity: 0,
        duration: 0.6,
      })
      .from(qs(".rights"), {
        y: 30,
        opacity: 0,
        duration: 0.6,
      })
      .from(qs(".title_box h3"), {
        y: 30,
        opacity: 0,
        stagger: 0.4,
      })
      .from(qs(".form > div"), {
        y: 30,
        opacity: 0,
        stagger: 0.4,
      })
      .from(qs(".right_bottom_text"), {
        y: 30,
        opacity: 0,
        stagger: 0.4,
      });
  });

  const [status, setStatus] = useState<Status>("");
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const target = e.target as formTarget;

    const res = await fetch("/api/contact", {
      body: JSON.stringify({
        name: target.name.value,
        email: target.email.value,
        desc: target.desc.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    cleanForm(target);
    const result = await res.json();
    if (res.status === 200) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  const closeModal = () => {
    setStatus("");
  };

  const cleanForm = (target: formTarget) => {
    target.name.value = "";
    target.email.value = "";
    target.desc.value = "";
  };

  return (
    <div className={styles.container} ref={gsapRef}>
      <div className={styles.panel_left}>
        <div className={styles.left_container}>
          <div className={styles.mula}></div>
          <div className={styles.findme_box}>
            <p className="findme">You can find me in:</p>
            <div className={[styles.icon_box, "icon_box"].join(" ")}>
              <a target="_blank" href="https://github.com/JhosdryG">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/jhosephweb/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                target="_blank"
                href="https://discordapp.com/users/829051830746218527"
              >
                <FontAwesomeIcon icon={faDiscord} />
              </a>
              <a target="_blank" href="https://t.me/JhosephG">
                <FontAwesomeIcon icon={faTelegramPlane} />
              </a>
            </div>
            <div className={styles.cv}>
              <p className="cv">You can download my cv here:</p>
              <a
                href="assets/curriculum.pdf"
                target="_blank"
                download="jhoseph_curriculum.pdf"
                className="cv_icon"
              >
                <FontAwesomeIcon icon={faFilePdf} />
              </a>
            </div>
          </div>
          <p className={[styles.rights, "rights"].join(" ")}>
            Jhoseph Guerrero all rights reserved
          </p>
        </div>
      </div>

      <div className={styles.panel_right}>
        <div className={[styles.title_box, "title_box"].join(" ")}>
          <h3>Would you like to work with me?</h3>
          <h3>Contact me</h3>
        </div>
        <form
          onSubmit={handleSubmit}
          className={[styles.form, "form"].join(" ")}
        >
          <div className={styles.form_box}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              maxLength={100}
              id="name"
              name="name"
              placeholder="Your name..."
            />
          </div>
          <div className={styles.form_box}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              required
              maxLength={100}
              id="email"
              name="email"
              placeholder="Your email..."
            />
          </div>
          <div className={styles.form_box}>
            <label htmlFor="desc">Something you would like to tell me</label>
            <textarea
              required
              maxLength={400}
              id="desc"
              name="desc"
              placeholder="Something you would like to tell me..."
            />
          </div>
          <div className={styles.form_box}>
            <button type="submit">Send message</button>
          </div>
        </form>
        <p
          className={[styles.right_bottom_text, "right_bottom_text"].join(" ")}
        >
          I'll be excited to work with you
        </p>
      </div>
      {status === "loading" && <Loader />}
      {status === "success" && <ContactModal closeModal={closeModal} />}
    </div>
  );
}

export default Contact;
