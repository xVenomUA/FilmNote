import { NavLink } from "react-router-dom";

import css from "./AppBar.module.css";
import clsx from "clsx";

export const AppBar = () => {
  const isActive = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <header className={css.header}>
      <div className="container">
        <nav>
          <ul className={css.nav}>
            <li>
              <NavLink to="/" className={isActive}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/favourite" className={isActive}>
                Favourite
              </NavLink>
            </li>
            <li>
              <NavLink to="/share" className={isActive}>
                Share your film
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
