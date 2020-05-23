import React from "react";
import Link from "next/link";
import styles from "./DockItem.module.css";

const IconLabel = ({ icon, label }) => (
  <>
    {icon}
    <p className={styles.dockLabel}>{label}</p>
  </>
);

const DockItem = ({ internal, icon, label, ...props }) => {
  if (internal) {
    return (
      <Link {...props}>
        <div className={styles.dockItem}>
          <IconLabel icon={icon} label={label} />
        </div>
      </Link>
    );
  }

  return (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.dockItem}
    >
      <IconLabel icon={icon} label={label} />
    </a>
  );
};

export default DockItem;
