import { useState } from "react";
import styles from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

function App() {

  const [log, setLog] = useState(true)

  function logout () {
    setLog(false)
  }

  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
        <Header log={log} logout={logout} />
        <Outlet />
        <Footer />
    </div>
  );
}

export default App;
