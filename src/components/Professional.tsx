import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Aptitudes from "@ui/Aptitudes";
import Experiences from "@ui/Experiences";
import styles from "@styles/professional.module.sass";
import pslogo from "@assets/ps_logo.png";
import applelogo from "@assets/apple_logo.png";

interface Props {
  experiences: Experience[];
}

function Professional({ experiences }: Props) {
  const gsapRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const qs = gsap.utils.selector(gsapRef);

  useEffect(() => {
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: gsapRef.current,
          start: "top center-=150px",
        },
      })
      .from(qs(".aptitudes"), {
        y: 50,
        opacity: 0,
        duration: 0.4,
      })
      .from(qs(".left_container p"), {
        y: 50,
        stagger: 0.15,
        opacity: 0,
      })
      .from(
        qs(".experience_title"),
        {
          y: 50,
          opacity: 0,
          duration: 0.5,
        },
        "+=0.5"
      );

    experiences.forEach((_, i) => {
      const exs = `.experience:nth-child(${i + 1})`;
      const delay = i > 0 ? "-=.8" : "-=0";
      tl.from(
        qs(exs),
        {
          x: 50,
          opacity: 0,
          duration: 0.3,
        },
        delay
      )
        .from(
          `${exs} .image_box`,
          {
            x: 50,
            opacity: 0,
            duration: 0.2,
          },
          "-=0.1"
        )
        .from(
          qs(`${exs} h3`),
          {
            x: 50,
            opacity: 0,
            duration: 0.2,
          },
          "-=0.1"
        )
        .from(
          qs(`${exs} h4`),
          {
            x: 50,
            opacity: 0,
            duration: 0.2,
          },
          "-=0.1"
        )
        .from(
          qs(`${exs} p`),
          {
            x: 50,
            opacity: 0,
            stagger: 0.2,
          },
          "-=0.1"
        );
    });

    tl.from(qs(".right_bot_text"), {
      y: 50,
      opacity: 0,
      duration: 0.5,
    }).from(qs(".externals_box > div"), {
      stagger: 0.2,
      opacity: 0,
    });
  });
  return (
    <div className={styles.container} ref={gsapRef}>
      <div className={styles.panel_left}>
        <h2 className="aptitudes">My aptitudes</h2>
        <div className={[styles.left_content, "left_container"].join(" ")}>
          <Aptitudes />
          <p className={[styles.bot_text, "bot_text"].join(" ")}>
            Due, i just love what i do
          </p>
        </div>
      </div>
      <div className={styles.panel_right}>
        <h2 className="experience_title">My experience</h2>
        <div className={styles.right_content}>
          <Experiences experiences={experiences} />
          <div className={styles.externals}>
            <p className="right_bot_text">
              Oh i also have some experience working with:
            </p>
            <div className={[styles.externals_box, "externals_box"].join(" ")}>
              <div>
                <Image
                  src={pslogo}
                  alt="PlayStation Logo"
                  width={45}
                  height={35}
                />
              </div>
              <div>
                <Image
                  src={applelogo}
                  alt="Apple logo"
                  width={35}
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Professional;
