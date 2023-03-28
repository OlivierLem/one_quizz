import styles from './Connexion.module.scss'

export default function Connexion () {
    return (
        <div className={`${styles.connexion}`}>
            <form action="">
                <h2>Connexion au compte</h2>
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
        </div>
    )
}