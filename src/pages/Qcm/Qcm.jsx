import { useEffect, useRef, useState } from 'react'
import styles from './Qcm.scss'

export default function Qcm ({qcm, timer}) {

    const [time, setTime] = useState(timer);
    const [stateQuestion, setStateQuestion] = useState(0);

    // ! bug de transition lors de l'affichage de la réponse 
    const [timerIsActive, setTimerIsActive] = useState(true);
    const responsesRef = useRef();
    const [disableButton, setDisableButton] = useState(false);
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false);

    function changeTime () {
        setTime(time - 1)
    }

    function start() {
        setTime(timer);
        setTimerIsActive(true);
      }

    function reset() {
        setTimerIsActive(false);
        setTime(0);
    }


    useEffect(() => {
        let timeout = null
        if(time > 0 && timerIsActive) {
            timeout = setTimeout(changeTime, 1000 )

        } else if ((time < 1)){
            if(stateQuestion < qcm.length - 1) {
                setTimeout(() => {
                    setStateQuestion(stateQuestion + 1)
                    setTime(timer)
                    setTimerIsActive(true)
                },1.5 * 1000)
            }
            clearTimeout(timeout);
        } 

        if(disableButton === true) {
            reset()
            clearTimeout(timeout);
        }
        
        /* if(stateQuestion === qcm.length) {
            console.log(stateQuestion);
            setShowScore(true)
        } */
        
    }, [time, timerIsActive])

    function handleClick(index) {
        let currentResponse = responsesRef.current.children[index];
        let responses = responsesRef.current.children
        
        for (let i = 0; i < responses.length; i++) {
            if(
                qcm[stateQuestion].reponses[i].isCorrect &&
                responses[i] === currentResponse
            ) 
            {
                currentResponse.classList.add('goodResponse')
                setScore(score + (((Math.round((time/timer) * 100) / 100) + 1) * 100)) 
            } 
            else {
                currentResponse.classList.add('badResponse')
            }
            
            setDisableButton(true)
            // ! mettre dans une fonction avec currentResponse et response
            if ( stateQuestion  < qcm.length - 1){
                setTimeout(() => {
                    setStateQuestion(stateQuestion + 1)
                    currentResponse.classList.remove('goodResponse')
                    currentResponse.classList.remove('badResponse')
                    setDisableButton(false)
                    setTime(timer)
                    setTimerIsActive(true)
                },1.5 * 1000)
            } else {
                setShowScore(true)
            }
        }
    }
    return (
        <div className={'qcm'}>
            {
                showScore === false ? (
                    <>
                        <div>
                            <p>{stateQuestion + 1} / {qcm.length}</p> 
                            <p className='score'>Score: {score}</p> 
                            <h3>{qcm[stateQuestion].question}</h3>
                            {<div className={`timer ${time < 1 && 'unactive'}`}>
                                    {
                                        time > 0 && (
                                            <svg viewBox="0 0 40 40" className={`timerSvg`}>
                                                <circle 
                                                    style={{animation: `timerSvg linear ${timer}s`}}
                                                    className={`timerSvg__segment`}
                                                    cx="20" cy="20" r="16" 
                                                >
                                                </circle>
                                            </svg>
                                        )
                                    }
                                    
                                    <p> {time} </p>
                                </div>
                            }
                            
                            </div>
                            <div ref={responsesRef}>       
                                {
                                    qcm[stateQuestion].reponses.map((r, i) => (
                                        <button 
                                            key={i}
                                            className='response'
                                            disabled={disableButton}
                                            onClick={() => handleClick(i)}>
                                            {r.reponse}
                                            {/* <span>25%</span> */}
                                        </button>

                                    ))
                                }
                            </div>
                    </>
                ) : (
                    <p>Score: {score} </p>
                )
            }
            
        </div>
    )
}