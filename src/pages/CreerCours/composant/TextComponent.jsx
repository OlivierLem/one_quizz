import { useState } from "react";

export default function TextComponent ({children, order}) {
    // ! probléme pour l'edit
    const [edit, setEdit] = useState(false)
    const [content, setContent] = useState(children)

    function handleChange (e) {
        console.log(e.target.value);
        setContent(e.target.value)
    }

    return (
        <div className="text__component">  
            <i onClick={() => setEdit(!edit)}
                className="fa-solid fa-pen-to-square">
            </i>
            {
                edit === true ? (
                    <div>
                        <textarea 
                            type="text" 
                            onChange={handleChange}
                            className="editText"
                            value={content}>
                        </textarea>
                        <button onClick={() => setEdit(false)}>valider</button>
                    </div>
                ) : (
                    <p>{content} </p>
                )
            }
        </div>
    )
}