import { NavLink, useRouteError } from "react-router-dom"
import styles from './ErrorPage.module.scss'

export default function ErrorPage () {
    const error = useRouteError();
    return (
        <>  
            <div className={`${styles.errorPage}`}>
                <NavLink to='/'>Home</NavLink>
            </div>
            <div>
                <h1>{error.message || error.statusText}</h1>
            </div>
        </>
    )
}