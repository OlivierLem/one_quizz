import styles from "./App.module.scss";
import Acceuil from "./components/Acceuil/Acceuil";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
        <Header />
        <Acceuil />
        <Footer />
    </div>
  );
}

export default App;
