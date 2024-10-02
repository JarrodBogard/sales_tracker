import Sidebar from "./Sidebar";

import styles from "./App.module.css";

function App() {
  return (
    <main className={styles.layout}>
      <Sidebar />
      <Header />
    </main>
  );
}

function Header() {
  return <header>Total</header>;
}

export default App;
