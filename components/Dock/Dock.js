import { useRouter } from "next/router";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpring, animated, config } from "react-spring";
import DockItem from "../DockItem";

import styles from "./Dock.module.css";

const checkHomePath = ({ pathname }) => pathname === "/";

const Dock = () => {
  const router = useRouter();
  const isHome = checkHomePath(router);
  const [[icon, color], setIcon] = useState(["info-circle", "#7CC6FE"]);
  const animation = useSpring({
    delay: isHome ? 5000 : 0,
    config: isHome ? config.slow : config.gentle,
    from: { opacity: 0, transform: "translateY(100px) scale(0.1)" },
    to: { opacity: 1, transform: "translateY(0px) scale(1)" },
  });

  return (
    <animated.div className={styles.dockWrapper} style={animation}>
      <DockItem
        label="Home"
        href="/"
        internal
        icon={<FontAwesomeIcon icon={["fab", "grav"]} spin={isHome} />}
      />
      <DockItem
        internal
        label="About Me"
        href="/about"
        icon={
          <FontAwesomeIcon
            color={color}
            icon={["fas", icon]}
            onMouseEnter={() => setIcon(["cannabis", "#6EB257"])} // easter egg about me
            onMouseLeave={() => setIcon(["info-circle", "#7CC6FE"])}
          />
        }
      />
      <DockItem
        label="Twitter"
        href="https://twitter.com/jdmg94"
        icon={
          <FontAwesomeIcon icon={["fab", "twitter-square"]} color="#1DA1F2" />
        }
      />
      <DockItem
        label="LinkedIn"
        href="https://linkedin.com/in/jdmg94"
        icon={<FontAwesomeIcon icon={["fab", "linkedin"]} color="#0073b1" />}
      />
      <DockItem
        label="Github"
        href="https://github.com/jdmg94"
        icon={<FontAwesomeIcon icon={["fab", "github"]} color="#000" />}
      />
      <DockItem
        label="Blog"
        href="https://www.dev.to/jdmg94"
        icon={<FontAwesomeIcon icon={["fab", "dev"]} color="#000" />}
      />
    </animated.div>
  );
};

export default Dock;
