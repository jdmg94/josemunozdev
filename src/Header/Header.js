import Link from "next/link";
import styles from "./Header.module.css";
import Container from "../Container";

const Header = () => (
  <Container
    style={{
      position: "absolute",
      pointerEvents: "none",
      touchEvents: "none",
      width: "100vw",
      height: '100vh',
    }}
  >
    <div className={styles.typewriter}>
      <h1>José Muñoz: Señor Engineer</h1>
    </div>
    <h1 className={styles.mobileHeader}>José Muñoz</h1>
    <div className={styles.actionButton} style={{ pointerEvents: "auto" }}>
      <Link href="/about">Learn More</Link>
    </div>
  </Container>
);

export default Header;
