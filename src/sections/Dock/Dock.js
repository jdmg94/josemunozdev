import DockItem from "./DockItem";
import About from "./icons/maximize.svg";
import Github from "./icons/github.svg";
import Linkedin from "./icons/linkedin.svg";
import Twitter from "./icons/twitter.svg";
import styles from "./Dock.module.css";

const Dock = () => (
  <div className={[styles.dockWrapper]}>
    <DockItem
      label="Backstory"
      href="/about"
      icon={<About color="#FFF" size="58px" />}
    />
    <DockItem
      open
      label="Github"
      href="https://github.com/jdmg94"
      icon={<Github color="#000" />}
    />    
    <DockItem
      open
      label="LinkedIn"
      href="https://linkedin.com/in/josemunozdev"
      icon={<Linkedin color="#0073b1" />}
    />    
    <DockItem
      open
      label="Twitter"
      href="https://twitter.com/jdmg94"
      icon={<Twitter color="#1DA1F2" />}
    />    
  </div>
);

export default Dock;
