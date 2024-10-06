import MainNav from "./MainNav";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <MainNav />
    </aside>
  );
}

export default Sidebar;
