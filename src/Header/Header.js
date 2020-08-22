import React from "react";
import styles from "./Header.module.css";
import Container from "../Container";

const Header = () => (
  <Container
    style={{ position: "absolute", pointerEvents: "none", touchEvents: "none" }}
  >
    <div className={styles.typewriter} style={{ flexWrap: "wrap" }}>
      <h1>Jose Muñoz: Señor Engineer</h1>
    </div>
  </Container>
);

export default Header;
