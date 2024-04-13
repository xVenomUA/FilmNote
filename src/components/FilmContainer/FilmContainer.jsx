import css from "./FilmContainer.module.css";
import { FaHeart } from "react-icons/fa";
import clsx from "clsx";
import photo from "../../img/photo.jpg"

import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  addFavourite,
  removeFavourite,
} from "../../redux/Films/onAddFavourite";
import { selectFavourite } from "../../redux/Films/selector";
import { useState } from "react";

export const FilmContainer = ({
  dataFilms: { id, title, rating, release_date, image },
}) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [checkImage , setCheckImage] = useState(true)

  const favId = useSelector(selectFavourite);
  const isFavourite = favId && favId.includes(id);

  const onAddToFavorite = (evt) => {
    const favouriteId = evt.target.closest("div").dataset.id;
    !favId.includes(favouriteId)
      ? dispatch(addFavourite(favouriteId))
      : dispatch(removeFavourite(favouriteId));
  };

  const onError = () => {
    setCheckImage(false)
  }

  return (
    <div data-id={id} className={css.container}>
      <Link to={`/film/${id}`} className={css.link} state={{ from: location }}>
        {
          checkImage ? <img src={image} alt={title} className={css.image}  onError={onError}/> : <img src={photo} alt={title} className={css.image} />
        }
        <div className={css.info}>
          <h2 className={css.title}>{title}</h2>
          <p className={css.rating}>Rating: {rating}</p>
          <p className={css.data}>Release data: {release_date}</p>
        </div>
      </Link>
      <button type="button" className={css.divIcon} onClick={onAddToFavorite}>
        <FaHeart
          className={clsx({
            [css.icon]: true,
            [css.active]: isFavourite,
          })}
        />
      </button>
    </div>
  );
};
