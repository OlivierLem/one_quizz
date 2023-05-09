import { useState } from "react";
import TextComponent from "./composant/TextComponent.jsx";
import TitleComponent from "./composant/TitleComponent.jsx";
import './CreerCours.scss'

export default function CreerCours ({title}) {

    const [component, setComponent] = useState([])
    const [create, setCreate] = useState(false)
    const [edit, setEdit] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

    function handleClick (e) {
        const {value} = e.target.dataset;
        setCreate(!create);
        console.log(value);
        switch (value) {
            case 'titre':
                console.log("c'est un titre");
                setComponent([...component , <TitleComponent importance='1' isEdit={true}></TitleComponent>])
                break;
            case 'texte':
                console.log("c'est un text");
                setComponent([...component , <TextComponent isEdit={true}></TextComponent>])
                break;
            default:
                console.log('pas de bonne valeur');
                break;
        }
    }

    function handleChange (e) {
        console.log(e.target.value);
        setNewTitle(e.target.value)
    }

    return (
        <div className="cours">
            <div className="cours__title">
                {
                    edit === true ? (
                        <>
                            <input type="text" onChange={handleChange} value={newTitle} />
                            <button onClick={() => setEdit(!edit)}>Valider</button>
                        </>
                    ) : (
                        <h1> {newTitle} </h1>
                    )
                }
                <button className="edit">
                <i  
                    onClick={() => setEdit(!edit)} 
                    className="fa-solid fa-pen-to-square">
                </i>
                </button>
           
            </div>
            <div className="cours__create">
                <TitleComponent importance='1' order='1' isEdit={false}>L’essentiel du cours</TitleComponent>
                <TextComponent isEdit={false}>
                    Quae, son mode, son tempéristiques propres.
                </TextComponent>
                <TitleComponent importance='1' order='1' isEdit={false}>titres</TitleComponent>

                {
                    component.map((c, i) => (c))
                }
            </div>
            <div className={`addComponent ${create === true && 'active'} `}>
                {
                    create === true ? (
                        <div>
                            <nav>
                                <button onClick={handleClick} data-value='texte'>T</button>
                                <button onClick={handleClick} data-value='titre'><i className="fa-solid fa-heading"></i></button>
                            </nav>
                        </div>
                    ): (
                        <button onClick={() => setCreate(!create)}>+</button>
                    )
                }
            </div>
            <div>
                <input type="text" placeholder="Thémes" />
                <div className="buttonNav"><button >Créer cours</button><button>Annuler</button></div>
            </div>
        </div>
    )
}