import React from "react";
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import DockItem from "./DockItem";
import styles from "./Dock.module.css";

const Dock = () => {
  const router = useRouter()

  return (
    <div className={[styles.dockWrapper]}>
      <DockItem
        label="Home"
        href="/"
        internal
        isVisible={router.pathname !== '/'}
        icon={<FontAwesomeIcon icon={["fab", "grav"]} />}
      />
      <DockItem
        internal
        label="About"
        href="/about"
        isVisible={router.pathname !== '/about'}
        icon={<FontAwesomeIcon color="#7CC6FE" icon={["fas", "info-circle"]} />}
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
    </div>
  );
}

export default Dock;
