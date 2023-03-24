import styles from './Footer.module.scss'

export default function Footer () {
    return (
        <div className={`${styles.footer}`}>
            <div className={`${styles.footer_content}`}>
                <p>Logo</p>
                <ul>
                    <li className={`${styles.active}`}>Thémes</li>
                    <li><a href="#">Histoire</a> </li>
                    <li><a href="#"> Harry potter</a></li>
                    <li><a href="#"> One piece </a></li>
                    <li><a href="#"> developpement web </a></li>
                </ul>
                <ul>
                    <li className={`${styles.active}`}>Catégorie</li>
                    <li><a href="#">Sport</a></li>
                    <li><a href="#">Film et séries</a></li>
                    <li><a href="#">Etudes</a></li>
                    <li><a href="#">jeux vidéo</a></li>
                </ul>
                <ul>
                    <li><a href="#">Mentions légales</a></li>
                    <li><a href="#">Politique de confidentialités</a></li>
                    <li><a href="#">Aides et informations</a></li>
                    <li><a href="#">Contact</a></li>   
                </ul>
            </div>
            <div className={`${styles.footer_bottom}`}>
                <p>© 2023 One Quizz. All Rights Reserved.</p>
            </div>
        </div>
    )
}