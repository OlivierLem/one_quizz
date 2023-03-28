import CardTheme from "../cardTheme/CardTheme";
import styles from './SliderThemes.module.scss'
import { themes } from "../../data/themes";
import { useState } from "react";

export default function SliderThemes () {

    const [page, setPage] = useState(1);
    const maxPage = 2
    const nextPage = () => {
        if(page < maxPage) {
            setPage(page + 1)
        }
    }
    const previousPage = () => {
        if(page > 1) {
            setPage(page - 1)
        }
    }

    const paginationDisplay = (max) => {
        const pagination = []
        for (let i = 1; i <= max; i++) {
            pagination.push( <span key={i} className={`${page === i ? 'active' : ''}`}></span> )
        }
        return pagination
    }

    return (
        <div className={`${styles.slider}`}>
            <div className={`${styles.title}`}>
                <h3>Thémes favoris</h3>
                <i className="fa-solid fa-arrow-right"></i>
            </div>
            <div className={`${styles.slider_content}`}>
                <i className="fa-solid fa-chevron-left"  onClick={previousPage} ></i>
                <div>
                    {
                        themes.map((theme, i) => { 
                            if(i < 3  && page === 1){
                                return (
                                <CardTheme like='true' NLike={theme.like} theme={theme.title} category={theme.category} image={theme.image} key={i} />
                            ) 
                            } else if (i >= 3 && i < 6  && page === 2){
                                return (
                                    <CardTheme like='true' NLike={theme.like} theme={theme.title} category={theme.category} image={theme.image} key={i} />
                                )
                            }
                            
                        })
                        
                    }
                </div>
                
                <i className="fa-solid fa-chevron-right" onClick={nextPage} ></i>
            </div>
            <div className={`${styles.pagination}`} >
                {
                    paginationDisplay(maxPage).map((p, i) => {
                        return p
                    })
                }
            </div>
        </div>
    )
}