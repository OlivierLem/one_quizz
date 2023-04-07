import { useEffect, useState } from 'react'
import styles from './Qcm.module.scss'

export default function Qcm ({qcm: {question, reponses}, timer}) {

    const [time, setTime] = useState(timer);
    // ! animation timer non terminer
    useEffect(() => {
        if(time > 0) {
            setTimeout(changeTime, 1000 )
        } else {
            clearTimeout(changeTime)
        }
    }, [time])

    function changeTime () {
        setTime(time - 1)
        console.log(time);
    }

    return (
        <div className={styles.qcm}>
            <div>
               <p>1/10</p> 
               <h3>{question}</h3>
               <p> {time} </p>
            </div>
            <div>
                {
                    reponses.map((r, i) => (
                        <button>{r.reponse}</button>
                    ))
                }
            </div>
        </div>
    )
}