import { useState } from 'react'
import styles from './Connexion.module.scss'

export default function Connexion () {

    const[reveal, setReveal] = useState(false)

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
                   <label htmlFor="pseudo">Pseudo</label>
                    <input type="text" name="pseudo"  />
                </div>
                <div>
                    <label htmlFor="password">Mots de passe</label>
                    <input type="password" name="password"  />
                </div>
                <span>
                    <input type="checkbox" name="remember" />
                    <label htmlFor="remember">Se souvenir de moi</label>
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
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email"  />
                    </div>
                    <div>
                        <label htmlFor="pseudo">Pseudo</label>
                        <input type="text" name="pseudo"  />
                    </div>
                    <div>
                        <label htmlFor="password">Mots de passe</label>
                        <input type="password" name="password"  />
                    </div>
                    <div>
                        <label htmlFor="confirm_password">confirmation mots de passe</label>
                        <input type="password" name="confirm_password"  />
                    </div>
                    <button>S'inscrire</button> 
                </form>
            </div>
        </div>
    )
}