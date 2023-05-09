import { useState } from "react";

export default function TitleComponent ({children, importance, order, isEdit}) {
    
    const [edit, setEdit] = useState(isEdit)
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

    function handleDelete () {
        console.log('click');
    }

   // ! à faire supprimer le composant et changer l'ordre des composants

    return (
        <div className={`title__component title-${importance}`}>  
            <div>
                <i onClick={() => setEdit(!edit)}
                   className="fa-solid fa-pen-to-square">
                </i>
                <i  onClick={handleDelete}
                    className="fa-solid fa-x">
                </i>
            </div>
            {
                edit === true ? (
                    <div>
                        <input 
                            type="text" 
                            onChange={handleChange}
                            autoFocus
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