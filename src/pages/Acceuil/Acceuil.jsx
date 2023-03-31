import SliderQuizz from "./sliderQuizz/SliderQuizz";
import SliderThemes from "./sliderThemes/SliderThemes";
import styles from './Acceuil.module.scss';


export default function Acceuil () {
    return (
        <div className={`${styles.main}`} >
            <SliderQuizz online={false} > Quizz </SliderQuizz>
            <SliderQuizz online={true} > Quizz en attentes</SliderQuizz>
            <SliderThemes />
        </div>
    )
}