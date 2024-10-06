import { NavLink } from "react-router-dom";
import styles from "./MainNav.module.css";

function MainNav() {
  return (
    <nav>
      <ul className={styles.nav}>
        <li>
          <NavLink to="/create">Create</NavLink>
        </li>
        <li>
          <NavLink to="/view">View</NavLink>
        </li>
        <li>
          <NavLink to="/charts">charts</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
