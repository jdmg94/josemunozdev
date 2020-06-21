import React, { useRef, useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import styles from "./Header.module.css";
import Container from "../Container";

const Header = ({ animationRef: ref }) => {
  const timers = useRef([]);
  const [words, setWords] = useState([]);
  const transition = useTransition(words, null, {
    ref,
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      color: "#c23369",
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { color: "#28d79f" },
    ],
    leave: [
      { color: "#c23369" },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
  });
  useEffect(() => {
    timers.current.push(setTimeout(() => setWords(["Jose"]), 800));
    timers.current.push(setTimeout(() => setWords(["Jose", "Munoz"]), 1800));
    timers.current.push(
      setTimeout(() => setWords(["Jose", "Munoz", "professional"]), 2800)
    );
    timers.current.push(
      setTimeout(() => setWords(["Jose", "Munoz", "professional", "key"]), 3800)
    );
    timers.current.push(
      setTimeout(
        () => setWords(["Jose", "Munoz", "professional", "key", "slapper"]),
        4800
      )
    );

    return () => timers.current?.map(clearTimeout)
  }, []);

  return (
    <Container style={{ position: "absolute", touchEvents: 'none', pointerEvents: 'none' }}>
      <div className={styles.wordWrapper}>
        {transition.map(
          ({ item, key, props: { color, innerHeight, ...rest } }) =>
            item && (
              <animated.div key={key} className={styles.wordItem} style={rest}>
                <animated.span
                  style={{ color, overflow: "hidden", height: innerHeight, willChange: 'height' }}
                >
                  {item}
                </animated.span>
              </animated.div>
            )
        )}
      </div>
    </Container>
  );
};

export default Header;
