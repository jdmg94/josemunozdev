import { useEffect, useState } from "react";

import styles from "./Header.module.css";
import Container from "../../components/Container";

const Header = () => {
  const [shouldAnimate, setAnimationState] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setAnimationState(false);
    }, 3850);
  });

  return (
    <Container className={styles.container}>
      <div
        className={styles.typewriter}
        style={{ animationPlayState: shouldAnimate ? "running" : "paused" }}
      >
        <h1>
          José Muñoz{" "}
          <span
            style={{
              color: "#ff7b00",
              fontWeight: "bold",
            }}
          >
            |
          </span>{" "}
          Software Dev
        </h1>
      </div>
      <h1 className={styles.mobileHeader}>José Muñoz Software Dev</h1>
    </Container>
  );
};

export default Header;
