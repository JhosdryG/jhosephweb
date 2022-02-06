import Image from "next/image";
import Aptitudes from "@ui/Aptitudes";
import Experiences from "@ui/Experiences";
import styles from "@styles/professional.module.sass";
import pslogo from "@assets/ps_logo.png";
import applelogo from "@assets/apple_logo.png";

interface Props {
  experiences: Experience[];
}

function Professional({ experiences }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.panel_left}>
        <h2>My aptitudes</h2>
        <div className={styles.left_content}>
          <Aptitudes />
          <p className={styles.bot_text}>Due, i just love what i do</p>
        </div>
      </div>
      <div className={styles.panel_right}>
        <h2>My experience</h2>
        <div className={styles.right_content}>
          <Experiences experiences={experiences} />
          <div className={styles.externals}>
            <p>Oh i also have some experience working with:</p>
            <div className={styles.externals_box}>
              <div>
                <Image src={pslogo} width={45} height={35} />
              </div>
              <div>
                <Image src={applelogo} width={35} height={40} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Professional;
