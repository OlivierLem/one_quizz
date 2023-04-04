import styles from "./App.module.scss";
import Acceuil from "./pages/Acceuil/Acceuil";
import Connexion from "./pages/Connexion/Connexion";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Qcm from "./pages/Qcm/Qcm";

function App() {

  const qcmData = {
    question: "Quelle est la langue utilisé ?",
    reponses: [
      {
        reponse: 'Espagnol',
        isCorrect: false
      },
      {
        reponse: 'Français',
        isCorrect: true
      },
      {
        reponse: 'Anglais',
        isCorrect: false
      },
      {
        reponse: 'Allemand',
        isCorrect: false
      }
    ]
    
  }

  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
        <Header log={false} />
        {/* <Acceuil /> */}
        <Connexion />
        {/* <Qcm qcm={qcmData} /> */}
        <Footer />
    </div>
  );
}

export default App;
