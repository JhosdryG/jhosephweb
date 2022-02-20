import styles from "@styles/introduction.module.sass";
import Image from "next/image";

import profilePhoto from "@assets/profile.png";

function Introduction() {
  return (
    <div className={styles.container}>
      <div className={styles.panel_left}>
        <div className={styles.introduction_gretting}>
          <p>Hi there</p>
          <p>i'm Jhoseph</p>
          <p>Fullstack</p>
          <p>web developer</p>
        </div>
        <p className={styles.left_bot_text}>
          Get to know me a little bit better
        </p>
      </div>
      <div className={styles.panel_right}>
        <div className={styles.image_container}>
          <div className={styles.image_box}>
            <Image
              src={profilePhoto}
              alt="Jhoseph Guerrero Profile photo"
              width={300}
              height={300}
            />
            <span className={styles.look}>Look, it's me!</span>
          </div>
        </div>
        <div className={styles.profile_desc}>
          <div>
            <p>
              I'm a professional fullstack web developer who loves what he does,
              an enthusiast for learning new things and get more experience
              everyday. I like to cooperate with my team and create a friendly
              atmosphere and make the working journey feel like something to
              look forward to.
            </p>
            <p>
              I'm an entrepreneur, autodidact, fast learner, innovative,
              creative, open to new ideas, able to work with teams development
              and under pressure.
            </p>
          </div>
          <p className={styles.prhase}>
            I don't only want to write code, i want to create amazing things to
            promote the development of humanity.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
