import { useSelector } from "react-redux";

import { selectDataFilter } from "../../redux/Films/selector";
import { FilmContainer } from "../FilmContainer/FilmContainer";

import css from "./FilmList.module.css";

export const FilmList = () => {
  const data = useSelector(selectDataFilter);
  return (
    <ul className={css.list}>
      {data.length > 0 &&
        data.map((film) => {
          return (
            <li key={film.id} className={css.li}>
              <FilmContainer key={film.id} dataFilms={film} />
            </li>
          );
        })}
    </ul>
  );
};
