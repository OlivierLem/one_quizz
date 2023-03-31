import { useState } from 'react'
import styles from './CardTheme.module.scss'

export default function CardTheme ({like, NLike, theme, category, image }) {

    const [favourite, setFavourite] = useState(like)

    const handleClick = () => {
        setFavourite(!favourite)
    }

    //console.log(theme);
    //const themeWithSpace = theme.replace('_', ' ')

    const NlikeAroud = (like) => {
        let likeString = like.toString()

        if (likeString.length > 9) {
            likeString = `${Math.round((like / 10**9) * 10) / 10}Md`
            return likeString
        } 
        if (likeString.length > 6) {
            likeString = `${Math.round((like / 10**6) * 10) / 10}M`
            return likeString
        }
        if(likeString.length > 4) {
            likeString = `${Math.round((like / 10**3) * 10) / 10}k`
            return likeString
        } 
        
        return like
    }

    const categoryImage = (category) => {
        switch(category) {
            case 'etude':
                return <i className="fa-solid fa-graduation-cap"></i>
            case 'jeux vidéo':
                return <i className="fa-solid fa-gamepad"></i>
            case 'film et série':
                return <i className="fa-solid fa-film"></i>
            case 'manga': 
                return <i className="fa-solid fa-book"></i>
            case 'métier':
               return <i className="fa-solid fa-briefcase"></i>
            default:
                return <div>erreur</div>      
            }
    }

    return (
        <div className={`${styles.cardContent}`} style={{backgroundImage: `url(${image})`}}>
            <div className={`${styles.favoris}`} onClick={handleClick} >
                {
                    favourite !== true ? 
                        (
                            <i className="fa-solid fa-star"></i>
                        ) :   
                        (
                            <i className="fa-regular fa-star"></i>
                        )
                }
                
                <p> {NlikeAroud(NLike)}</p>  
            </div>
            <h2> {theme} </h2>
            {categoryImage(category) }
        </div>
    )
}