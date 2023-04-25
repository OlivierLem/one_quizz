import { useState } from 'react'
import styles from './Connexion.module.scss'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { Inscription } from './Inscription';

export default function Connexion () {

    const [reveal, setReveal] = useState(false)

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

    const { 
        register, 
        handleSubmit,
        formState: { errors } 
    } = useForm({
        defaultValues,
        resolver: yupResolver(shemaConnexion)
    })

    function handleClick () {
        setReveal(true)
    }

    function handleRemove (e) {
        e.stopPropagation()
        setReveal(false)
    }

    function submit (values) {
        console.log('click');
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
                        <li><button type='button' onClick={handleClick}>Pas encore inscrit</button></li>
                        <li><a href='#'>Mots de passe oublié ?</a></li>
                    </ul>
                </div>
                <button >Se connecter</button> 
            </form>

            <div onClick={handleClick} >
                <div>
                    <span></span>
                    <span></span>
                </div>
                <Inscription handleRemove={handleRemove} />
            </div>
        </div>
    )
}