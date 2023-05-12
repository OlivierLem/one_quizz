import { Fragment, useEffect, useState } from "react"
import { getQuestion } from "../../apis/question"


export function QuestionPage () {

    const [question, setQuestion] = useState([])

    useEffect(() => {
        getQuestion().then(q => {
            setQuestion(q)
            console.log(q)
        })
    }, [])

    return (
        <>
            <h1>Listes Questions</h1>
            {
                question.length > 0 ? 
                    question.map(q => (
                        <Fragment key={q._id}>
                            <div>
                                <p>{q.question} ?</p>
                                <p>{q.user.pseudo}</p>
                                <p>{q.status}</p>
                            </div>
                        </Fragment>
                    )) : (
                        <p className="notQuestion">Vous n'avez pas encore créer de question</p>
                    )
            }
        </>
        
    )
}