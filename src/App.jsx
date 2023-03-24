import styles from "./App.module.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import SliderQuizz from "./components/sliderQuizz/SliderQuizz";
import SliderThemes from "./components/sliderThemes/SliderThemes";

function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
        <Header />
        <SliderQuizz />
        <SliderThemes />
        <Footer />
    </div>
  );
}

export default App;
