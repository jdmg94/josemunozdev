import styles from "./Bento.module.css";
import clsx from "clsx";
import {
  FiUser,
  FiCode,
  FiBookOpen,
  FiLinkedin,
  FiGithub,
  FiExternalLink,
} from "react-icons/fi";
import { FaDev, FaMastodon } from "react-icons/fa";

const Bento = () => (
  <div className={styles.background}>
    <div className={styles.container}>
      <div className={clsx(styles.largeBox, styles.glassCard)}>
        <div className={clsx(styles.spacedOut, styles.titleBar)}>
          <h1 className={styles.title}>José David Muñoz</h1>
          <FiUser className={styles.icon} />
        </div>
        <p>
          I'm a full-stack developer with a passion for creating beautiful,
          functional websites and applications. With over 9 years of experience
          in web and mobile development I'm a specialist in React.js and
          creating high quality user experieces using emerging technologies like
          LLMs and diffusion models.
        </p>
      </div>
      <div className={clsx(styles.smallBox, styles.gradient)}>
        <div className={styles.profileCircle}></div>
      </div>
      <div
        className={clsx(styles.smallBox, styles.glassCard, styles.spacedOut)}
      >
        <div className={clsx(styles.spacedOut, styles.titleBar)}>
          <h2 className={styles.title}>Projects</h2>
          <FiCode className={styles.icon} />
        </div>
        <div>
          <a
            href="https://jdmg94.github.io/fast-trivia"
            target="_blank"
            rel="noreferrer noopener"
            className={clsx(styles.spacedOut, styles.clickable, styles.row)}
          >
            <span>3D Trivia</span>
            <FiExternalLink className={styles.icon} />
          </a>
          <a
            href="https://github.com/jdmg94/Hue-Sync"
            target="_blank"
            rel="noreferrer noopener"
            className={clsx(styles.spacedOut, styles.clickable, styles.row)}
          >
            <span>IoT interface for Phillips Hue</span>
            <FiExternalLink className={styles.icon} />
          </a>
          <a
            href="https://ibpm.superiortech.co"
            target="_blank"
            rel="noreferrer noopener"
            className={clsx(styles.clickable, styles.spacedOut, styles.row)}
          >
            <span>Smart Beat Detection on iOS</span>
            <FiExternalLink className={styles.icon} />
          </a>
        </div>
      </div>
      <div className={clsx(styles.largeBox, styles.glassCard)}>
        <div className={clsx(styles.spacedOut, styles.titleBar)}>
          <h3 className={styles.title}>Posts</h3>
          <FiBookOpen className={styles.icon} />
        </div>
        <a
          target="_blank"
          className={clsx(styles.clean, styles.clickable)}
          href="https://dev.to/josemunoz/pimp-your-cli-3i5e"
        >
          <div className={styles.column}>
            <div className={clsx(styles.spacedOut, styles.centerAlign)}>
              <p className={styles.heading}>Pimp Your CLI</p>
              <FiExternalLink className={styles.icon} />
            </div>
            <p className={styles.subHeading}>
              A comprehensive guide to terminal tools that improve your
              productivity.
            </p>
          </div>
        </a>
        <div className={styles.divider} />
        <a
          target="_blank"
          className={clsx(styles.clean, styles.clickable)}
          href="https://dev.to/josemunoz/webrtc-and-react-native-52pi"
        >
          <div className={styles.column}>
            <div className={clsx(styles.spacedOut, styles.centerAlign)}>
              <p className={styles.heading}>WebRTC and React Native</p>
              <FiExternalLink className={styles.icon} />
            </div>
            <p className={styles.subHeading}>
              A brief view into how WebRTC works, and how to setup mobile apps
              for WebRTC.
            </p>
          </div>
        </a>
      </div>
      <div className={clsx(styles.fullWidth, styles.glassCard)}>
        <h4 className={styles.title}>Connect With Me</h4>
        <div className={styles.row}>
          <a
            rel="noreferrer noopener"
            target="_blank"
            className={clsx(styles.socialIcon, styles.clickable)}
            href="https://www.github.com/jdmg94"
          >
            <FiGithub size="24px" />
          </a>
          <a
            rel="noreferrer noopener"
            target="_blank"
            className={clsx(styles.socialIcon, styles.clickable)}
            href="https://www.linkedin.com/in/josemunozdev"
          >
            <FiLinkedin size="24px" />
          </a>
          <a
            rel="noreferrer noopener"
            target="_blank"
            className={clsx(styles.socialIcon, styles.clickable)}
            href="https://dev.to/josemunoz"
          >
            <FaDev size="24px" />
          </a>
          <a
            rel="noreferrer noopener"
            target="_blank"
            className={clsx(styles.socialIcon, styles.clickable)}
            href="https://techhub.social/@josemunoz"
          >
            <FaMastodon size="24px" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Bento;
