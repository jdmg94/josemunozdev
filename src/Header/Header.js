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
    }}
  >
    <div className={styles.typewriter}>
      <h1>José Muñoz: Señor Engineer</h1>
    </div>
    <div className={styles.actionButton} style={{ pointerEvents: "auto" }}>
      <Link href="/about">Learn More</Link>
    </div>
  </Container>
);

export default Header;
