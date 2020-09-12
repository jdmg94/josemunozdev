import Link from "next/link";
import styles from "./BackButton.module.css";

const BackButton = (props) => (
  <Link {...props}>
    <button className={styles.wrapper}>
      <div className={styles.chevron} />
    </button>
  </Link>
);

export default BackButton;
