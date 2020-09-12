import styles from "./DockItem.module.css";

const DockItem = ({ icon, label, ...props }) => (
  <a
    {...props}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.dockItem}
  >
    {icon}
    <p className={styles.dockLabel}>{label}</p>
  </a>
);

export default DockItem;
