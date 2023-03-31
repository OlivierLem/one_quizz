import styles from "./App.module.scss";
import Acceuil from "./pages/Acceuil/Acceuil";
import Connexion from "./pages/Connexion/Connexion";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
        <Header log={false} />
        {/* <Acceuil /> */}
        <Connexion />
        <Footer />
    </div>
  );
}

export default App;
