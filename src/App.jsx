import styles from "./App.module.scss";
import Acceuil from "./components/Acceuil/Acceuil";
import Connexion from "./components/connexion/Connexion";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
        <Header />
        {/* <Acceuil /> */}
        <Connexion />
        <Footer />
    </div>
  );
}

export default App;
