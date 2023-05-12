import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { getQuestion } from "../../apis/question"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";


export function QuestionPage () {

    const [question, setQuestion] = useState([]);

    useEffect(() => {
        getQuestion().then(q => {
            setQuestion(q);
            console.log(q);
        });
    }, []);

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
                                </div>
                            </Fragment>
                        )) : (
                            <p className="notQuestion">Vous n'avez pas encore créer de question</p>
                        )
                }
            </>
    )       
}