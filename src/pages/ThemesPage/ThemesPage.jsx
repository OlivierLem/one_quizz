import { useEffect, useState } from "react"
import { getThemes } from "../../apis/themes"
import CardTheme from "../Acceuil/sliderThemes/components/CardTheme"

export default function ThemesPage () {

    const [themes, setThemes] = useState([])

    useEffect(() => {
        getThemes().then(themes => {
            setThemes(themes)
        })
        console.log(themes);
    },[])

    return (

        <div>
            <div>
                <h1>Themes</h1>
                <button>Demande de thémes <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div>
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
                        <CardTheme 
                            key={t._id}
                            like='true'
                            NLike={t.like} 
                            theme={t.name} 
                            category={t.category} 
                            image={t.image} 
                        />
                    )) : (
                        <p>Pas de thémes</p>
                    )
                }
            </div>
        </div>
    )
}