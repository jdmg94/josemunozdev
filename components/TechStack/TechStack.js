import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import styles from "./TechStack.module.css";

const techStack = [
  "html5",
  "js",
  "css3",
  "git",
  "react",
  "node",
  "linux",
  "docker",
  "aws",
  "jira",
  "java",
  "markdown",
  "php",
  "laravel",
  "sass",
];

const TechStack = () => (
  <div className={styles.nook}>
    {techStack.map((item) => (
      <Icon
        size="6x"
        color="#FFF"
        key={item}
        title={item}
        icon={["fab", item]}
        className={styles.nookItem}
      />
    ))}
  </div>
);

export default TechStack;
