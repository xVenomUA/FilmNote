import { useSelector } from "react-redux";
import { selectFilmById } from "../../redux/Films/selector";

import css from "./DetailsFilm.module.css";
import { Link, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { NotFound } from "../NotFound/NotFound";
export const DetailsFilm = () => {
  const data = useSelector(selectFilmById); 
  const location = useLocation();
  if (!data) {
    return <NotFound />;
  }
  const {
    id,
    title,
    description,
    rating,
    release_date,
    genre,
    actors,
    director,
    image,
  } = data;
  const act = Array.isArray(actors) && actors.join(", ");
  const gnr = Array.isArray(genre) && genre.join(", ");


  const back = location?.state?.from || "/";
  return (
    <>
      <div data-id={id} className={css.maindiv}>
        <Link to={back} className={css.linkArrow}>
          <FaArrowLeft className={css.icon} />
        </Link>
        <div className={css.contflex}>
          <img src={image} alt={title} className={css.image} />
          <div>
            <h1 className={css.title}>
              {title} <span>({rating})</span>
            </h1>
            <h2 className={css.date}>Release date: {release_date}</h2>
            <p className={css.role}>Genre: {gnr}</p>
            <p className={css.role}>Actors: {act}</p>
            <p className={css.role}>Director: {director}</p>
          </div>
        </div>
        <p className={css.text}>{description}</p>
      </div>{" "}
    </>
  );
};
