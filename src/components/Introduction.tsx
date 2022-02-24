import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "@styles/introduction.module.sass";

import profilePhoto from "@assets/profile.png";

function Introduction() {
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
      .from(qs(".gretting p:nth-child(1)"), {
        x: -50,
        opacity: 0,
        duration: 0.5,
      })
      .from(qs(".gretting p:nth-child(2)"), {
        y: 50,
        opacity: 0,
        duration: 0.5,
      })
      .from(qs(".gretting p:nth-child(3)"), {
        x: 50,
        opacity: 0,
        duration: 0.5,
      })
      .from(qs(".gretting p:nth-child(4)"), {
        y: -50,
        opacity: 0,
        duration: 0.5,
      })
      .from(
        qs(".left_bot_text"),
        {
          y: 10,
          opacity: 0,
          duration: 0.3,
        },
        "+=0.3"
      )
      .from(qs(".image_box img"), {
        scale: 0,
        opacity: 0,
        duration: 0.5,
      })
      .from(qs(".look"), {
        opacity: 0,
        rotate: "0deg",
        duration: 0.3,
      })
      .from(qs(".biography p"), {
        stagger: 0.3,
        opacity: 0,
        y: 20,
      })
      .from(qs(".prhase"), {
        opacity: 0,
        duration: 0.4,
      });
  });

  return (
    <div className={styles.container} ref={gsapRef}>
      <div className={styles.panel_left}>
        <div className={[styles.introduction_gretting, "gretting"].join(" ")}>
          <p>Hi there</p>
          <p>i'm Jhoseph</p>
          <p>Fullstack</p>
          <p>web developer</p>
        </div>
        <p className={[styles.left_bot_text, "left_bot_text"].join(" ")}>
          Get to know me a little bit better
        </p>
      </div>
      <div className={styles.panel_right}>
        <div className={styles.image_container}>
          <div className={[styles.image_box, "image_box"].join(" ")}>
            <Image
              src={profilePhoto}
              alt="Jhoseph Guerrero Profile photo"
              width={300}
              height={300}
            />
            <span className={[styles.look, "look"].join(" ")}>
              Look, it's me!
            </span>
          </div>
        </div>
        <div className={styles.profile_desc}>
          <div className="biography">
            <p>
              I'm a professional fullstack web developer who loves what he does,
              an enthusiast for learning new things and get more experience
              everyday. I like to cooperate with my team and create a friendly
              atmosphere and make the working journey feel like something to
              look forward to.
            </p>
            <p>
              During my career that i started even before finishing my
              university degree i have worked in both frontend and backend side
              knowing multiple tools and developing solutions for my customers
              problems and making their life easier.
            </p>
          </div>
          <p className={[styles.prhase, "prhase"].join(" ")}>
            I don't only want to write code, i want to create amazing things to
            promote the development of humanity.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
