import styles from "./Bento.module.css";
import clsx from "clsx";
import {
  FiUser,
  FiCode,
  FiBookOpen,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";
import { FaDev } from "react-icons/fa";

const Bento = () => (
  <div className={styles.container}>
    <div className={clsx(styles.largeBox, styles.glassCard)}>
      <div className={styles.spacedOut}>
        <h1 className={styles.title}>Jose David Munoz</h1>
        <FiUser className={styles.icon} />
      </div>
    </div>
    <div className={clsx(styles.smallBox, styles.gradient)}>
      <div className={styles.profileCircle}></div>
    </div>
    <div className={clsx(styles.smallBox, styles.glassCard)}>
      <div className={styles.spacedOut}>
        <h2 className={styles.title}>Projects</h2>
        <FiCode className={styles.icon} />
      </div>
    </div>
    <div className={clsx(styles.largeBox, styles.glassCard)}>
      <div className={styles.spacedOut}>
        <h3 className={styles.title}>Articles</h3>
        <FiBookOpen className={styles.icon} />
      </div>
    </div>
    <div className={clsx(styles.fullWidth, styles.glassCard)}>
      <a
        rel="noreferrer noopener"
        target="_blank"
        className={styles.socialIcon}
        href="https://www.linkedin.com/in/josemunozdev"
      >
        <FiLinkedin size="24px" />
      </a>
      <a
        rel="noreferrer noopener"
        target="_blank"
        className={styles.socialIcon}
        href="https://www.github.com/jdmg94"
      >
        <FiGithub size="24px" />
      </a>
      <a
        rel="noreferrer noopener"
        target="_blank"
        className={styles.socialIcon}
        href="https://dev.to/josemunoz"
      >
        <FaDev size="24px" />
      </a>
    </div>
  </div>
);

export default Bento;
