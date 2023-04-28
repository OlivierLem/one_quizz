import { useContext, useState } from 'react'
import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

export default function Header () {

    const { user, signout } = useContext(AuthContext);
    /* console.log(user); */
    const handleClick = () => {
        signout();
    }

    //! bug hover lien 

    return (
        <header className={`${styles.header}`} >
            <NavLink to='/'>Logo</NavLink>
            <nav>
                <NavLink to='/' >Acceuil</NavLink>
                <NavLink to='/quizz'>Quizz</NavLink>
                <NavLink to='/groupes'>Groupes</NavLink>
                <NavLink to='/themes'>Thémes</NavLink>
            </nav>
            {user ? (
                <div>
                    <div className={`${styles.createButton}`}>
                            <button>Créer <i className={"fa-solid fa-chevron-down"}></i></button>
                            <span className={`${styles.active}`}>
                                <NavLink to='/creer_quizz'>Créer un quizz</NavLink>
                                <NavLink to='/creer_cours'>Créer un cours</NavLink>
                                <NavLink to='/creer'>Créer une question</NavLink>
                                <NavLink to='/demande_favoris'>Demande favoris</NavLink>
                                <NavLink to='/creation'>Voir vos création</NavLink>
                            </span>
                        </div>
                        
                        <NavLink to='/' onClick={handleClick}>Déconnexion <i className={"fa-solid fa-right-from-bracket"}></i></NavLink>
                        <NavLink to='/profile'> {user.pseudo} </NavLink>
                        <i className={"fa-regular fa-user"}></i>
                    </div>
                ) : (
                    <div>
                        <NavLink to='/connexion/' >Connexion</NavLink>
                        <NavLink to='/connexion/?notRegister=true' ><button>Incription</button></NavLink>
                    </div>
                )

            }
            
        </header>
    )
}