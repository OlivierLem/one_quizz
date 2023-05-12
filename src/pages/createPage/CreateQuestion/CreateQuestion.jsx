import '../CreatePages.scss'
import { useContext, useRef, useState } from "react"
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { addQuestion } from '../../../apis/question';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';

export function CreateQuestion () {

    const [step, setStep] = useState(1)
    const [showQuestion, setShowQuestion] = useState(false)
    const formRef = useRef();
    const navigate = useNavigate()

    const defaultValues = {
        type: 'qcm',
        theme: 'histoire',
        times: '25',
        status: 'privé',
        question: '',
        responses: []
    }

    // * lessThan valeur + 1 * //

    // ! message d'erreur reponses à afficher
    // ! Vérifier que l'une des checkbox est coché

    const shema = yup.object({
        times:  yup.number()
            .required("Ce champs est requis")
            .positive("Entrer un nombre supérieur à 0")
            .lessThan(101, 'Vous ne pouvez pas noter un nombre supérieur à 100'),
        question: yup.string()
            .required("Ce champs est requis"),
        responses: yup.array().of(
            yup.object({
                name: yup.string().required('Ce champs est requis')
            })
        )
    })

    const { 
        register, 
        handleSubmit: handleSubmit, 
        formState: { errors, isValid },
        trigger,
        setError,
        clearErrors
    } = useForm({
        defaultValues,
        resolver: yupResolver(shema)
    })

    const handleClick = async () => {
        await trigger('times').then((value) => {
            if (value === true) {
                setShowQuestion(true)
                setStep(2)
            }
        })
    }

    const submit = handleSubmit (async (values) => {
        console.log(values);
        try {
            clearErrors();
            await addQuestion(values)
            navigate('/')

        } catch (message) {
            console.error(message)
            setError('generic', {type: "generic", message})
        }
    })
    let nResponses
    const renderQuestion = (nQuestion) => {
        nResponses = []
        for (let i = 0; i < nQuestion ; i++) {
            nResponses.push(
            <>
                <div key={i}>
                    <input {...register(`responses[${i}].isValid`)} type="checkbox" />
                    <input {...register(`responses[${i}].name`)} type="text" placeholder={`réponse ${i + 1}`} />
                </div>
                {errors?.responses?.name &&  <p className={'errorMessage'}>{errors.responses.name.message}</p>}
            </>
            )
        }
        return nResponses
    }

    return (
        <>
        <div className='createContainer'>
            <h1>Créer une question</h1>
            
            <div className={'stepCreate'}>
                <div className={'active'}>
                    <span data-status='Paramétres'>1</span>
                    <span></span>
                </div>
                <div className={ step >= 2 ? 'active' : ''}>
                    <span data-status='Question'>2</span>
                </div>
            </div>
            
            <form 
              ref={formRef}
              onSubmit={submit} 
              className={step === 1 ? 'firstStep' : 'secondStep'}>
                <div className='form-params'>
                    <div>
                        <label htmlFor="type">Type de question</label>
                        <select {...register('type')} name="type" >
                            <option value="qcm">QCM</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="theme">Thémes</label>
                        <select {...register('theme')} name="theme" >
                            <option value="histoire">Histoire</option>
                            <option value="mathematique">Mathématique</option>
                            <option value="géographie">Géographie</option>
                            <option value="rocket league">Rocket League</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="times">Durée question (en sec)</label>
                        <input {...register('times')} type="text" name='times' />
                    </div>
                        {errors?.times &&  <p className={'errorMessage'}>{errors.times.message}</p>}

                    <div className='form-params-state'>
                        <div>
                            {/* <input type="image" src="../../assets/images/insert-picture-icon.png" width='50'  /> */}
                            <label htmlFor="">Image Question</label>
                        </div>
                        <div>
                            <div>
                                <input {...register('status')} type="radio" value='privé' name="status" />
                                <label >Privé</label>
                            </div>
                            <div>
                                <input {...register('status')} type="radio" value='public' name="status" />
                                <label htmlFor="status">Public</label>
                            </div>
                        </div>
                    </div>
                    
                    <button type='button' className='nextButton' onClick={handleClick}>Suivant <i className={"fa-solid fa-arrow-right"}></i></button>
                </div>

                {showQuestion === true &&
                    (
                        <div className='form-question'>
                            <input {...register('question')} className='questionBlock' type="text" name='question' placeholder='Question' />
                            {errors?.question &&  <p className={'errorMessage'}>{errors.question.message}</p>}

                            <div className="reponsesBlock">
                                <p>Réponses</p>
                                <div>
                                    {
                                        renderQuestion(4)
                                    }
                                </div>
                            </div>

                            <div className='navButton'>
                                <button type='button' className='previousButton' onClick={() => setStep(1)}><i className={"fa-solid fa-arrow-left"}></i> Precédent</button>
                                <button type='submit'>Terminer la création</button>
                            </div>
                        </div>
                    )
                }
            </form>
              
        </div>
        </>
    )
}