import { NavLink } from 'react-router-dom';
import styles from './CardQuizz.module.scss'

export default function CardQuizz ({quizz, online}) {

    const {category, type, themes} = quizz;

    console.log(quizz);
    const categoryImage = (category) => {
        switch(category) {
            case 'etude':
                return <i className="fa-solid fa-graduation-cap"></i>
            case 'jeux vidéo':
                return <i className="fa-solid fa-gamepad"></i>
            case 'film et série':
                return <i className="fa-solid fa-film"></i>
            case 'manga': 
                return <i className="fa-solid fa-book"></i>
            case 'métier':
               return <i className="fa-solid fa-briefcase"></i>
            default:
                return <div>erreur</div>      
            }
    }
    let currentPlayer = 5
    let maxPlayer = 10
    return (
        <div className={`${styles.cardContent}`}>
           
            <div>
                {   online &&(
                    <div>
                        <p>{currentPlayer} joueurs / {maxPlayer} </p>
                    </div>
                )}
                
                {
                    categoryImage(category)
                }
            </div>
            <div className={`${styles.cardContent_bottom}`}>  
                <div>
                    <div>
                        {
                            type.map((t, i) => (
                                <p key={i} >{t}</p>
                            ))
                        }
                    </div>
                    <div>
                    {
                            themes.map((t, i) => (
                                <p key={i} >{t}</p>
                            ))
                        }
                    </div>
                </div>      
                <button>
                    <NavLink to='/quizz'>Rejoindre</NavLink>
                </button>          
            </div>
            
        </div>
    )
}