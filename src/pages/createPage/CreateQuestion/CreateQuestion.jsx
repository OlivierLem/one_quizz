import '../CreatePages.scss'
import { useState } from "react"
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";

export function CreateQuestion () {

    const [step, setStep] = useState(1)
    const [showQuestion, setShowQuestion] = useState(false)
    const defaultValues = {
        type: 'qcm',
        theme: 'histoire',
        times: '',
        status: 'privé',
        question: '',
        reponses: []
    }

    // * lessThan valeur + 1 * //

    // ! verification reponses à terminer

    const shema = yup.object({
        times:  yup.number()
            .required("Ce champs est requis")
            .positive("Entrer un nombre positif")
            .lessThan(101, 'Vous ne pouvez pas noter un nombre supérieur à 100'),
        question: yup.string()
            .required("Ce champs est requis"),
        reponses: yup.array().of(
            yup.object({
                valueResponse: yup.string().required('champs requis')
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

    const submit = handleSubmit ((values) => {
        console.log(values);
        /* try {
            clearErrors();
            handleRemove()
        } catch (message) {
            console.error(message)
            setError('generic', {type: "generic", message})
        } */
    })
    let nResponses
    const renderQuestion = (nQuestion) => {
        nResponses = []
        for (let i = 0; i < nQuestion ; i++) {
            nResponses.push(
                <div key={i}>
                    <input {...register(`reponses[${i}].checkResponse`)} type="checkbox" />
                    <input {...register(`reponses[${i}].valueResponse`)} type="text" placeholder={`reponse ${i + 1}`}  />
                </div>
            )
        }
        return nResponses
    }

    return (
        <div className='createContainer'>
            <h1>Créer une question</h1>
            <>
                {/* <div className={'stepCreate'}>
                <div className={'active'}>
                    <span data-status='Paramétres'>1</span>
                    <span></span>
                </div>
                <div className={ step >= 2 ? 'active' : ''}>
                    <span data-status='Question'>2</span>
                </div>
            </div> */}

            </>
            
            <form 
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
                        <label htmlFor="themes">Thémes</label>
                        <select {...register('themes')} name="themes" >
                            <option value="histoire">Histoire</option>
                            <option value="mathematique">Mathématique</option>
                            <option value="geographie">Géographie</option>
                            <option value="roquet_league">Rocket League</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="times">Durée question (en sec)</label>
                        <input {...register('times')} type="text" name='times' />
                    </div>
                        {errors?.times &&  <p className={'errorMessage'}>{errors.times.message}</p>}

                    <div className='form-params-state'>
                       {/*  <div>
                            <input type="image" src="../../assets/images/insert-picture-icon.png" width='50'  />
                            <label htmlFor="">Image Question</label>
                        </div> */}
                        <div>
                            <input {...register('status')} type="radio" value='privé' name="status" />
                            <label >Privé</label>
                        </div>
                        <div>
                            <input {...register('status')} type="radio" value='public' name="status" />
                            <label htmlFor="status">Public</label>
                        </div>
                    </div>
                    
                    <button 
                        onClick={handleClick}>Suivant</button>
                </div>

                {showQuestion === true &&
                    (
                        <div className='form-question'>
                            <div className="questionBlock">
                                <label htmlFor="question">Question</label>
                                <input {...register('question')} type="text" name='question' />
                            </div>
                            {errors?.question &&  <p className={'errorMessage'}>{errors.question.message}</p>}

                            <div className="reponsesBlock">
                                {
                                    renderQuestion(4)
                                }
                            
                            </div>
                            {errors?.reponses.valueResponse &&  <p className={'errorMessage'}>{errors.reponses.valueResponse}</p>}
                            

                            <div>
                                <button onClick={() => setStep(1)}>Precédent</button>
                                <button type='submit'>Terminer la création</button>
                            </div>
                        </div>
                    )
                }
            </form>
              
        </div>
    )
}