import styles from './Connexion.module.scss'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";

export function Inscription ({handleRemove}) {

    const defaultValues = {
        pseudo: '',
        password: '',
        email: '',
    }

    const shema = yup.object({
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
            .required('Ce champ est vide')
            .oneOf([yup.ref('password')], "le mots de passe n'est pas le même"),
    })

    const { 
        register: register, 
        handleSubmit: handleSubmitI, 
        formState: { errors: errors } 
    } = useForm({
        defaultValues,
        resolver: yupResolver(shema)
    })

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

    //! bug pseudo et password handleInput

    return (
        <form action="" onSubmit={handleSubmitI(submit)}>
            <h3>Inscription</h3>
            <i  className={`fa-solid fa-xmark ${styles.cross}`}
                onClick={handleRemove}>
            </i>
            <div>
                <input {...register('email')} onInput={handleInput} type="text" name="email"  />
                <label htmlFor="email">Email</label>
            </div>
                {errors?.email && <p>{errors.email.message}</p> }
            <div>
                <input {...register('pseudo')} onInput={handleInput} type="text" name="pseudo" />
                <label htmlFor="pseudo">Pseudo</label>
            </div>
                {errors?.pseudo &&  <p>{errors.pseudo.message}</p>}
            <div>
                <input {...register('password')} onInput={handleInput} type="password" name="password" />
                <label htmlFor="password">Mots de passe</label>
            </div>
                {errors?.password &&  <p>{errors.password.message}</p>} 
            <div>
                <input {...register('confirm_password')} onInput={handleInput} type="password" name="confirm_password" />
                <label htmlFor="confirm_password">confirmation mots de passe</label>
            </div>
                {errors?.confirm_password &&  <p>{errors.confirm_password.message}</p>}
            <button>S'inscrire</button> 
        </form>
    )
}