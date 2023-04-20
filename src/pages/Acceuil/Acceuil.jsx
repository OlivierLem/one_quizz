import SliderQuizz from "./sliderQuizz/SliderQuizz";
import SliderThemes from "./sliderThemes/SliderThemes";
import './Acceuil.scss';


export default function Acceuil () {
    return (
        <div className={`main`} >
            <SliderQuizz online={false} > Quizz </SliderQuizz>
            <SliderQuizz online={true} > Quizz en attentes</SliderQuizz>
            <SliderThemes />
        </div>
    )
}