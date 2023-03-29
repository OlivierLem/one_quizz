import { useState } from 'react'
import styles from './Header.module.scss'

export default function Header ({log}) {

    //const [log, setLog] = useState(false)

    return (
        <div className={`${styles.header}`} >
            <p>Logo</p>
            <nav>
                <a href="#" className={`${styles.active}`}>Acceuil</a>
                <a href="#">Quizz</a>
                <a href="#">Quizz en lignes</a>
                <a href="#">Thémes</a>
            </nav>
            {
                log !== true ?
                (
                    <div>
                        <a href="#">Connexion</a>
                        <button>Incription</button>
                    </div>
                ) : 
                (
                    <div>
                        <a href="#">john62</a>
                        <i class="fa-regular fa-user"></i>
                    </div>
                )

            }
            
        </div>
    )
}