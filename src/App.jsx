import styles from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
        <Header log={true} />
        <Outlet />
        <Footer />
    </div>
  );
}

export default App;
