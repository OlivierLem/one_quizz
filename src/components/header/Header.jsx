import { useState } from 'react'
import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom'

export default function Header ({log}) {

    //const [log, setLog] = useState(false)

    return (
        <div className={`${styles.header}`} >
            <NavLink to='/'>Logo</NavLink>
            <nav>
                <NavLink to='/' >Acceuil</NavLink>
                <NavLink to='/quizz'>Quizz</NavLink>
                <NavLink to='/groupes'>Groupes</NavLink>
                <NavLink to='/themes'>Thémes</NavLink>
            </nav>
            {
                log !== true ?
                (
                    <div>
                        <NavLink to='/connexion' >Connexion</NavLink>
                        <button>Incription</button>
                    </div>
                ) : 
                (
                    <div>
                        <div className={`${styles.createButton}`}>
                            <button>Créer</button>
                            <span className={`${styles.active}`}>
                                <NavLink to='/creer'>Créer un quizz</NavLink>
                                <NavLink to='/creer'>Créer un cours</NavLink>
                                <NavLink to='/creer'>Créer une question</NavLink>
                                <NavLink to='/demande_favoris'>Demande favoris</NavLink>
                                <NavLink to='/creation'>Voir vos création</NavLink>
                            </span>
                        </div>
                        
                        <NavLink to='/profil'>john62</NavLink>
                        <i className="fa-regular fa-user"></i>
                    </div>
                )

            }
            
        </div>
    )
}