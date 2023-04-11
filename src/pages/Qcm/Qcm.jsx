import { useEffect, useState } from 'react'
import styles from './Qcm.module.scss'

export default function Qcm ({qcm: {question, reponses}, timer}) {

    const [time, setTime] = useState(timer);
    // ! bug de transition lors de l'affichage de la réponse 
    useEffect(() => {
        if(time > 0) {
            setTimeout(changeTime, 1000 )
        } else {
            clearTimeout(changeTime)
        }
    }, [time])

    function changeTime () {
        setTime(time - 1)
    }

    return (
        <div className={styles.qcm}>
            <div>
               <p>1 / 10</p> 
               <h3>{question}</h3>
               {
                time > 0 && (
                    <div className={`${styles.timer}`}>
                        <svg viewBox="0 0 40 40" className={`${styles.timerSvg}`}>
                            <circle 
                                className={`${styles.timerSvg__segment}`}
                                style={{animationDuration: `${timer}s`}} 
                                cx="20" cy="20" r="16" 
                            >
                            </circle>
                        </svg>
                        <p> {time} </p>
                    </div>
                )
               }
               
            </div>
            <div>
                {   time > 0 ? (
                        reponses.map((r, i) => (
                            <button key={i}>{r.reponse}</button>
                        ))
                    ) : (

                        reponses.map((r, i) => (
                            <button key={i} className={`${styles.reponse} ${r.isCorrect && styles.goodReponse}` } >{r.reponse} <span>25%</span></button>
                        ))
                    )
                    
                }
            </div>
        </div>
    )
}