import styles from "./App.module.scss";
import Acceuil from "./pages/Acceuil/Acceuil";
import Connexion from "./pages/Connexion/Connexion";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Qcm from "./pages/Qcm/Qcm";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
        <Header log={false} />
        <Outlet />
    </div>
  );
}

export default App;
