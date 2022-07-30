import styles from "./Header.module.css";
import Container from "../Container";

const Header = () => (
  <Container className={styles.container}>
    <div className={styles.typewriter}>
      <h1>José Muñoz:</h1>
      <h1> Senior Software Developer</h1>
    </div>
    {/* <button className={styles.actionButton} style={{ pointerEvents: "auto" }}>
      Hello World
    </button> */}
  </Container>
);

export default Header;
