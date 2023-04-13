import { useState } from "react";

export default function TitleComponent ({children, importance, order}) {
    
    const [edit, setEdit] = useState(false)
    const [content, setContent] = useState(children)

    function numberTitle () {
        let number;
        if(order === '1') {
            number = '1'
            return (<span>{number}-</span>)
        } 
    }

    function handleChange (e) {
        console.log(e.target.value);
        setContent(e.target.value)
    }

 

    return (
        <div className={`title__component title-${importance}`}>  
            <i onClick={() => setEdit(!edit)}
                className="fa-solid fa-pen-to-square">
            </i>
            {
                edit === true ? (
                    <div>
                        <input 
                            type="text" 
                            onChange={handleChange}
                            className="editTitle" 
                            value={content}/>
                        <button onClick={() => setEdit(false)}>valider</button>
                    </div>
                ) : (
                    <p> {numberTitle()} {content} </p>
                )
            }
        </div>
    )
}