import { useSelector } from "react-redux";

import css from "./Favourite.module.css";

import { selectFavourite, selectFilms } from "../../redux/Films/selector";
import { FilmContainer } from "../../components/FilmContainer/FilmContainer";
import clsx from "clsx";

const Favourite = () => {
  const listFilm = useSelector(selectFilms);
  const idFavourite = useSelector(selectFavourite);
  const data = listFilm.filter((film) => idFavourite.includes(film.id));
  return (
    <main className={clsx({
      [css.main]: data.length === 0  
    })}>
      <div className="container">
        <ul className={css.list}>
          {data.length > 0 ? (
            data.map((film) => {
              return (
                <li key={film.id} className={css.li}>
                  <FilmContainer key={film.id} dataFilms={film} />
                </li>
              );
            })
          ) : (
            <h1 className={css.text}>No favorite movies</h1>
          )}
        </ul>
      </div>
    </main>
  );
};
export default Favourite;
