import { useEffect, useState } from "react"
import { getThemes } from "../../apis/themes"
import CardTheme from "../Acceuil/sliderThemes/components/CardTheme"
import './ThemePage.scss'

export default function ThemesPage () {

    const [themes, setThemes] = useState([])

    useEffect(() => {
        getThemes().then(themes => {
            setThemes(themes)
        })
        console.log(themes);
    },[])

    return (

        <div className="themes">
            <div className="titleBlock">
                <h1>Thémes</h1>
                <button>Demande de thémes <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="paramsBlock">
                <div className="filterThemes">
                    <input type="search"/> 
                    <p><i class="fa-solid fa-filter"></i> Filtre</p>
                </div>
                <div className="sortThemes">
                    <i class="fa-solid fa-chevron-down"></i>
                    <p>Popularité</p>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>
            <div className="themeList">
                {themes.length > 0 ?
                    themes.map(t => (
                        <>
                            <CardTheme 
                                key={t._id}
                                like='true'
                                NLike={t.like} 
                                theme={t.name} 
                                category={t.category} 
                                image={t.image} 
                            />
                            <CardTheme 
                                key={t._id}
                                like='true'
                                NLike={t.like} 
                                theme={t.name} 
                                category={t.category} 
                                image={t.image} 
                            />
                            <CardTheme 
                                key={t._id}
                                like='true'
                                NLike={t.like} 
                                theme={t.name} 
                                category={t.category} 
                                image={t.image} 
                            />
                            <CardTheme 
                                key={t._id}
                                like='true'
                                NLike={t.like} 
                                theme={t.name} 
                                category={t.category} 
                                image={t.image} 
                            />
                            <CardTheme 
                                key={t._id}
                                like='true'
                                NLike={t.like} 
                                theme={t.name} 
                                category={t.category} 
                                image={t.image} 
                            />
                            <CardTheme 
                                key={t._id}
                                like='true'
                                NLike={t.like} 
                                theme={t.name} 
                                category={t.category} 
                                image={t.image} 
                            />
                           
                        </>
                    )) : (
                        <p className="notThemes">! - Il n'ya pas de thémes</p>
                    )
                }
                
            </div>
            <div className="paginationBlock">
                    <button><i class="fa-solid fa-arrow-left"></i> Précédent</button>
                    <div className="paginationBlock-pages">
                        <p className="active">1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>Derniere page</p>
                    </div>
                    <button>Suivant <i class="fa-solid fa-arrow-right"></i></button>
                </div>
        </div>
    )
}