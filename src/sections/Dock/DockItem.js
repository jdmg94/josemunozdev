import styles from "./DockItem.module.css";

const DockItem = ({ icon, label, open,  ...props }) => (
  <a
    {...props}
    {...open ? {
      target: '_blank',
      rel: 'noopener noreferrer'
    }: {}}    
    className={styles.dockItem}
  >
    {icon}
    <p className={styles.dockLabel}>{label}</p>
  </a>
);

export default DockItem;
