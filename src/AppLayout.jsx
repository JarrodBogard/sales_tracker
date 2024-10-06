import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styles from "./AppLayout.module.css";

function AppLayout({ leadData }) {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <Header leadData={leadData} />
      <main className={styles.main}>
        <div className={styles.container}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
