import { NavLink } from 'react-router-dom'
import styles from './Footer.module.scss'

export default function Footer () {
    return (
        <footer className={`${styles.footer}`}>
            <div className={`${styles.footer_content}`}>
                <p>Logo</p>
                <ul>
                    <li className={`${styles.active}`}>Théme</li>
                    <li><NavLink to='/quizz'>Histoire</NavLink> </li>
                    <li><NavLink to='/quizz'>Harry potter</NavLink></li>
                    <li><NavLink to='/quizz'>One piece</NavLink></li>
                    <li><NavLink to='/quizz'>Pokémon</NavLink></li>
                </ul>
                <ul>
                    <li className={`${styles.active}`}>Catégorie</li>
                    <li><NavLink to='/quizz'>Sport</NavLink></li>
                    <li><NavLink to='/quizz'>Film et séries</NavLink></li>
                    <li><NavLink to='/quizz'>Etudes</NavLink></li>
                    <li><NavLink to='/quizz'>jeux vidéo</NavLink></li>
                </ul>
                <ul>
                    <li><NavLink to='/mentions'>Mentions légales</NavLink></li>
                    <li><NavLink to='/confidentialite'>Politique de confidentialités</NavLink></li>
                    <li><NavLink to='/aides'>Aides et informations</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>   
                </ul>
            </div>
            <div className={`${styles.footer_bottom}`}>
                <p>© 2023 One Quizz. All Rights Reserved.</p>
            </div>
        </footer>
    )
}