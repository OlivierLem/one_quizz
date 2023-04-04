import styles from './Qcm.module.scss'

export default function Qcm ({qcm: {question, reponses}}) {
    return (
        <div className={styles.qcm}>
            <div>
               <p>1/10</p> 
               <h3>{question}</h3>
               <p>5</p>
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