import styles from './Connexion.module.scss'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { createUser } from '../../apis/user.js';

export function Inscription ({handleRemove}) {

    const defaultValues = {
        pseudo_inscription: '',
        password_inscription: '',
        email: '',
    }

    const shema = yup.object({
        pseudo_inscription: yup
            .string()
            .required('Ce champ est vide'),
        email: yup
            .string()
            .required('Ce champ est vide')
            .email('email incorrect'),
        password_inscription: yup
            .string()
            .required('Ce champ est vide')
            .min(4, 'Le mdp doit avoir plus de 4 charactéres')
            .matches(/[0-9]/, "Le mdp n'as pas de chiffre")
            .matches(/[a-z]/, "Le mdp n'as pas de lettre en minuscule")
            .matches(/[A-Z]/, "Le mdp n'as pas de lettre en majuscule"),
        confirm_password: yup
            .string()
            .required('Ce champ est vide')
            .oneOf([yup.ref('password_inscription')], "le mots de passe n'est pas le même"),
    })

    const { 
        register, 
        handleSubmit: handleSubmitInscription, 
        formState: { errors },
        setError,
        clearErrors
    } = useForm({
        defaultValues,
        resolver: yupResolver(shema)
    })

    const submitInscription = handleSubmitInscription (async (values) => {
        console.log(values);
        try {
            clearErrors();
            await createUser(values);
            handleRemove()
        } catch (message) {
            console.error(message)
            setError('generic', {type: "generic", message})
        }
    })

    function clossInscripion (e) {
        e.stopPropagation()
        document.querySelector('.formInscription').reset();
        const labels = document.querySelectorAll('label');
        for (const label of labels) {
            label.classList.remove(`${styles.active}`)
        }
        handleRemove();
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

    //! bug pseudo et password handleInput

    return (
        <form action="" className={'formInscription'} onSubmit={submitInscription}>
            <h3>Inscription</h3>
            <i  className={`fa-solid fa-xmark ${styles.cross}`}
                onClick={clossInscripion}>
            </i>
            <div>
                <input {...register('email')} onInput={handleInput} type="text" name="email"  />
                <label htmlFor="email">Email</label>
            </div>
                {errors?.email && <p>{errors.email.message}</p> }
            <div>
                <input {...register('pseudo_inscription')} onInput={handleInput} type="text" name="pseudo_inscription" />
                <label htmlFor="pseudo_inscription">Pseudo</label>
            </div>
                {errors?.pseudo_inscription &&  <p>{errors.pseudo_inscription.message}</p>}
            <div>
                <input {...register('password_inscription')} onInput={handleInput} type="password" name="password_inscription" />
                <label htmlFor="password_inscription">Mots de passe</label>
            </div>
                {errors?.password_inscription &&  <p>{errors.password_inscription.message}</p>} 
            <div>
                <input {...register('confirm_password')} onInput={handleInput} type="password" name="confirm_password" />
                <label htmlFor="confirm_password">confirmation mots de passe</label>
            </div>
                {errors?.confirm_password &&  <p>{errors.confirm_password.message}</p>}
                {errors.generic && <p>{errors.generic.message}</p>}
            
            <button>S'inscrire</button> 
        </form>
    )
}