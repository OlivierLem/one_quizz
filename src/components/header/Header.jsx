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
                <NavLink to='/quizz'>Quizz en lignes</NavLink>
                <NavLink to='themes'>Thémes</NavLink>
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
                        <NavLink to='/inscription'>john62</NavLink>
                        <i class="fa-regular fa-user"></i>
                    </div>
                )

            }
            
        </div>
    )
}