import { useState } from 'react'
import styles from './Connexion.module.scss'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";

export default function Connexion () {

    const [reveal, setReveal] = useState(true)

    const defaultValues = {
        pseudo: '',
        password: '',
        email: '',
        remember: false
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
            .required('Ce champ est vide')
            .matches(/^toto$/, 'Pas le bon pseudo'),
        email: yup.string().required('Ce champ est vide'),
        password: yup
            .string()
            .required('Ce champ est vide')
            .matches(/[0-9]/, "Le mots de passe n'as pas de chiffre"),
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
        formState: { errorsInscription } 
    } = useForm({
        defaultValues,
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

    // ! Message d'erreur non affiché pour le formulaire d'inscription

    return (
        <div className={`${styles.connexion}  ${reveal && styles.active}`}>
            <form action="" onSubmit={handleSubmit(submit)}>
                <h3>Connexion au compte</h3>
                <div>
                   <input {...register('pseudo')} type="text" name="pseudo" required  />
                   <label htmlFor="pseudo">Pseudo</label>
                </div>
                   {errors?.pseudo && <p>{errors.pseudo.message}</p> }
                <div>
                    <input {...register('password')} type="password" name="password" required />
                    <label htmlFor="password">Mots de passe</label>
                </div>
                    {errors?.password && <p>{errors.password.message}</p> }

                <span>
                    <input {...register('remember')} type="checkbox" name="remember" />
                    <label htmlFor="remember"><i className="fa-solid fa-check"></i> Se souvenir de moi</label>
                    
                </span>
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
                        <input {...registerInscription('email')} type="text" name="email"  />
                        <label htmlFor="email">Email</label>
                    </div>
                        {errorsInscription?.email && <p>{errorsInscription.email.message}</p> }
                    <div>
                        <input {...registerInscription('pseudo')} type="text" name="pseudo"  />
                        <label htmlFor="pseudo">Pseudo</label>
                    </div>
                        {errorsInscription?.pseudo &&  <p>{errorsInscription.pseudo.message}</p>}
                    <div>
                        <input {...registerInscription('password')} type="password" name="password"  />
                        <label htmlFor="password">Mots de passe</label>
                    </div>
                        {errorsInscription?.password &&  <p>{errorsInscription.password.message}</p>} 
                    <div>
                        <input {...registerInscription('confirm_password')} type="password" name="confirm_password"  />
                        <label htmlFor="confirm_password">confirmation mots de passe</label>
                    </div>
                        {errorsInscription?.confirm_password &&  <p>{errorsInscription.confirm_password.message}</p>}
                    <button>S'inscrire</button> 
                </form>
            </div>
        </div>
    )
}