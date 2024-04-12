import { NavLink } from "react-router-dom"
import css from "./AppBar.module.css"


export const AppBar = () =>{
     return(
        <header className={css.header}>
            <div className="container">
            <nav>
                <ul className={css.nav}>
                    <li>
                        <NavLink to="/" className={css.link}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/favourite" className={css.link}>Favourite</NavLink>
                    </li>
                    <li>
                        <NavLink to="/share" className={css.link}>Share your film</NavLink>
                    </li>
                </ul>
            </nav></div>
        </header>
     )
}