import React, { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Website from "@ui/Website";
import styles from "@styles/websites.module.sass";

interface Props {
  websites: Website[];
}

function Websites({ websites }: Props) {
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
    tl.from(qs(".letme"), {
      y: 50,
      opacity: 0,
      duration: 0.6,
    }).from(qs(".websites"), {
      y: 50,
      opacity: 0,
      duration: 0.6,
    });
    websites.forEach((_, i) => {
      const webs = `.web:nth-child(${i + 1})`;
      const delay = i > 0 ? "-=0.7" : "-=0";

      tl.from(
        qs(webs),
        {
          y: 50,
          opacity: 0,
          duration: 0.4,
        },
        delay
      )
        .from(
          qs(`${webs} .img_box`),
          {
            y: 50,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.15"
        )
        .from(
          qs(`${webs} h3`),
          {
            y: 50,
            opacity: 0,
            duration: 0.3,
          },
          "-=0.15"
        )
        .from(
          qs(`${webs} p`),
          {
            y: 50,
            opacity: 0,
            duration: 0.3,
          },
          "-=0.15"
        );
    });
  });

  return (
    <section className={styles.container} ref={gsapRef}>
      <h2 className="letme">Let me show you my work</h2>
      <h3 className="websites">Web sites</h3>
      <div className={styles.websites}>
        {websites.map((web) => (
          <Website web={web} key={web.id} />
        ))}
      </div>
    </section>
  );
}

export default Websites;
