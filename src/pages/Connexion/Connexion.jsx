import { useState } from 'react'
import styles from './Connexion.module.scss'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";

export default function Connexion () {

    const [reveal, setReveal] = useState(false)

    const defaultValues = {
        pseudo: '',
        password: '',
        email: '',
        remember: false
    }

    const defaultValuesInscription = {
        pseudo: '',
        password: '',
        email: '',
    }
     
    const shemaConnexion = yup.object({
        pseudo: yup
            .string()
            .required('Ce champ est vide')
            .matches(/^toto$/, 'Pas le bon pseudo'),
        password: yup
            .string()
            .required('Ce champ est vide')
            .matches(/^toto25$/, 'Pas le bon mots de passe'),
    })

    const shemaInscription = yup.object({
        pseudo: yup
            .string()
            .required('Ce champ est vide'),
        email: yup.string().required('Ce champ est vide'),
        password: yup
            .string()
            .required('Ce champ est vide')
            .min(4, 'Le mdp doit avoir plus de 4 charactéres')
            .matches(/[0-9]/, "Le mdp n'as pas de chiffre")
            .matches(/[a-z]/, "Le mdp n'as pas de lettre en minuscule")
            .matches(/[A-Z]/, "Le mdp n'as pas de lettre en majuscule"),
        confirm_password: yup
            .string()
            .oneOf([yup.ref('password')], "le mots de passe n'est pas le même"),
    })

    const { 
        register, 
        handleSubmit,
        formState: { errors } 
    } = useForm({
        defaultValues,
        resolver: yupResolver(shemaConnexion)
    })

    const { 
        register: registerInscription, 
        handleSubmit: handleSubmitInscription, 
        formState: { errors: errorsInscription } 
    } = useForm({
        defaultValuesInscription,
        resolver: yupResolver(shemaInscription)
    })

    function handleClick () {
        setReveal(true)
    }

    function handleRemove (e) {
        e.stopPropagation()
        setReveal(false)
    }

    function submit (values) {
        console.log(values);
    }

    function handleInput (e) {
        // ? Manque la gestion des espaces dans les input
        const label = document.querySelector(`label[for='${e.target.name}']`)
        if(e.target.value !== '') {
            label.classList.add(`${styles.active}`);
        } else {
            label.classList.remove(`${styles.active}`);
        }
    }

    return (
        <div className={`${styles.connexion}  ${reveal && styles.active}`}>
            <form action="" className={styles.connexionForm} onSubmit={handleSubmit(submit)}>
                <h3>Connexion au compte</h3>
                <div>
                   <input {...register('pseudo')} onInput={handleInput} type="text" name="pseudo" />
                   <label htmlFor="pseudo">Pseudo</label>
                </div>
                   {errors?.pseudo && <p>{errors.pseudo.message}</p> }
                <div>
                    <input {...register('password')} onInput={handleInput} type="password" name="password"  />
                    <label htmlFor="password">Mots de passe</label>
                </div>
                    {errors?.password && <p>{errors.password.message}</p> }

                <span>
                    <input {...register('remember')} type="checkbox" name="remember" />
                    <label htmlFor="remember"><i className={"fa-solid fa-check"}></i> Se souvenir de moi</label>
                </span>
                <div>
                    <ul>
                        <li><a href='#'>Pas encore inscrit</a></li>
                        <li><a href='#'>Mots de passe oublié</a></li>
                    </ul>
                </div>
                <button >Se connecter</button> 
            </form>

            <div onClick={handleClick} >
                <div>
                    <span></span>
                    <span></span>
                </div>
                <form action="" onSubmit={handleSubmitInscription(submit)}>
                    <h3>Inscription</h3>
                    <i className={`fa-solid fa-xmark ${styles.cross}`}
                       onClick={handleRemove}></i>
                    <div>
                        <input {...registerInscription('email')} onInput={handleInput} type="text" name="email"  />
                        <label htmlFor="email">Email</label>
                    </div>
                        {errorsInscription?.email && <p>{errorsInscription.email.message}</p> }
                    <div>
                        <input {...registerInscription('pseudo')} onInput={handleInput} type="text" name="pseudo-inscription"  />
                        <label htmlFor="pseudo-inscription">Pseudo</label>
                    </div>
                        {errorsInscription?.pseudo &&  <p>{errorsInscription.pseudo.message}</p>}
                    <div>
                        <input {...registerInscription('password')} onInput={handleInput} type="password" name="password-inscription"  />
                        <label htmlFor="password-inscription">Mots de passe</label>
                    </div>
                        {errorsInscription?.password &&  <p>{errorsInscription.password.message}</p>} 
                    <div>
                        <input {...registerInscription('confirm_password')} onInput={handleInput} type="password" name="confirm_password"  />
                        <label htmlFor="confirm_password">confirmation mots de passe</label>
                    </div>
                        {errorsInscription?.confirm_password &&  <p>{errorsInscription.confirm_password.message}</p>}
                    <button>S'inscrire</button> 
                </form>
            </div>
        </div>
    )
}