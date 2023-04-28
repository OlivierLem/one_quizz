import { useContext, useState } from 'react'
import styles from './Connexion.module.scss'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { Inscription } from './Inscription';
import { signin } from '../../apis/auth.js';
import { AuthContext } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

export default function Connexion () {

    const { signin, user} = useContext(AuthContext)
    const [reveal, setReveal] = useState(false)

    const defaultValues = {
        pseudo: '',
        password: '',
        stayConnected: false
    }
     
    const shemaConnexion = yup.object({
        pseudo: yup
            .string()
            .required('Ce champ est vide'),
        password: yup
            .string()
            .required('Ce champ est vide'),
    })

    const { 
        register, 
        handleSubmit,
        formState: { errors, isSubmitting } ,
        setError, 
        clearErrors
    } = useForm({
        defaultValues,
        resolver: yupResolver(shemaConnexion)
    })

    function handleClick () {
        document.querySelector('.form').reset();
        const labels = document.querySelectorAll('.form label');
        for (const label of labels) {
            label.classList.remove(`${styles.active}`)
        }
        setReveal(true)
    }

    function handleRemove () {
        setReveal(!reveal)
    }

    const submit = handleSubmit(async (values) => {
        /* console.log(values); */
        try {
            clearErrors();
            await signin(values);
        } catch (message) {
            setError('generic', {type: 'generic', message})
        }
    })

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
        <>
            {user ? (
                <Navigate to='/' />
            ) : (
                <div className={` ${styles.connexion} ${reveal && styles.active}`}>
                    <form action="" className={`form ${styles.connexionForm}`} onSubmit={submit}>
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
                            <input {...register('stayConnected')} type="checkbox" name="stayConnected" />
                            <label htmlFor="stayConnected"><i className={"fa-solid fa-check"}></i>Rester connecter</label>
                        </span>
                        <div className={styles.formInfo}>
                            <button type='button' className={styles.notRegister} onClick={handleClick}>Pas encore inscrit</button>
                            <a href='#'>Mots de passe oublié ?</a>
                        </div>
                        {errors.generic && ( <p>{errors.generic.message}</p> )}
                        
                        <button disabled={isSubmitting} >Se connecter</button> 
                    </form>

                    <div onClick={handleClick} >
                        <div>
                            <span></span>
                            <span></span>
                        </div>
                        <Inscription handleRemove={handleRemove} />
                    </div>
                </div>
            )}
        </>
    )
}