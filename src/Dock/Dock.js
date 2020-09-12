import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import DockItem from "./DockItem";
import styles from "./Dock.module.css";

const Dock = () => (
  <div className={[styles.dockWrapper]}>
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

export default Dock;
