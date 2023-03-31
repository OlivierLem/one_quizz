import { useState } from 'react'
import styles from './Connexion.module.scss'

export default function Connexion () {

    const [reveal, setReveal] = useState(false)

    function handleClick () {
        setReveal(true)
    }

    function handleRemove (e) {
        e.stopPropagation()
        setReveal(false)
    }


    return (
        <div className={`${styles.connexion}  ${reveal && styles.active}`}>
            <form action="">
                <h3>Connexion au compte</h3>
                <div>
                   <input type="text" name="pseudo" required />
                   <label htmlFor="pseudo">Pseudo</label>
                </div>
                <div>
                    <input type="password" name="password" required />
                    <label htmlFor="password">Mots de passe</label>
                </div>
                <span>
                    <input type="checkbox" name="remember" />
                    <label htmlFor="remember"><i className="fa-solid fa-check"></i> Se souvenir de moi</label>
                    
                </span>
                <button>Se connecter</button> 
            </form>
            <div onClick={handleClick} >
                <div>
                    <span></span>
                    <span></span>
                </div>
                <form action="">
                    <h3>Inscription</h3>
                    <i className="fa-solid fa-xmark"
                       onClick={handleRemove}></i>
                    <div>
                        <input type="text" name="email" required />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div>
                        <input type="text" name="pseudo" required />
                        <label htmlFor="pseudo">Pseudo</label>
                    </div>
                    <div>
                        <input type="password" name="password" required />
                        <label htmlFor="password">Mots de passe</label>
                    </div>
                    <div>
                        <input type="password" name="confirm_password" required />
                        <label htmlFor="confirm_password">confirmation mots de passe</label>
                    </div>
                    <button>S'inscrire</button> 
                </form>
            </div>
        </div>
    )
}