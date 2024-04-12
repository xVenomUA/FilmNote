import { useSelector } from "react-redux";
import { selectFilmById } from "../../redux/Films/selector";

import css from  "./DetailsFilm.module.css"
export const DetailsFilm = () => {
  const data = useSelector(selectFilmById);
  const {
    id,
    title,
    description,
    rating,
    release_date,
    genre,
    actors,
    director,
    image
  } = data;
  const act = actors && actors.join(", ");
  const gnr = genre && genre.join(", ");
  return (
    <div data-id={id}>
      <div className={css.contflex}> 
        <img src={image} alt={title} className={css.image}/>
        <div>
        <h1>
          {title} <span>({rating})</span>
        </h1>
        <h2 className={css.date}>Release date: {release_date}</h2>
        <p>Genre: {gnr}</p>
        <p>Actors: {act}</p>
        <p>Director: {director}</p></div>
      </div>
        <p className={css.text}>{description}</p>
    </div>
  );
};
