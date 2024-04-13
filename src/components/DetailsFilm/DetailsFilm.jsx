import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useState } from "react";

import css from "./DetailsFilm.module.css";
import photo from "../../img/photo.jpg";

import { selectFilmById } from "../../redux/Films/selector";
import { FaArrowLeft } from "react-icons/fa";
import { NotFound } from "../NotFound/NotFound";
import { deleteFilm } from "../../redux/Films/operation";

import toast from "react-hot-toast";

export const DetailsFilm = () => {
  const data = useSelector(selectFilmById);

  const location = useLocation();
  const dispatch = useDispatch();
  const [goToHome, setGotoHome] = useState(false);
  const [checkImage , setCheckImage] = useState(true)

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
  const act = Array.isArray(actors) ? actors.join(", ") : actors;
  const gnr = Array.isArray(genre) ? genre.join(", ") : genre;

  const back = location?.state?.from || "/";
  if (goToHome) {
    return <Navigate to="/" />;
  }

  const onDelete = (id) => {
    dispatch(deleteFilm(id))
      .unwrap()
      .then(() => {
        toast.success("Film deleted");
        setGotoHome(true);
      })
      .catch((error) => toast.error("Error: " + error.message));
  };

  const onError = () => {
    setCheckImage(false)
  }

  return (
    <>
      <div data-id={id} className={css.maindiv}>
        <Link to={back} className={css.linkArrow}>
          <FaArrowLeft className={css.icon} />
        </Link>
        <>
          <div className={css.contflex}>
           { checkImage ? <img src={image} alt={title} className={css.image} onError={onError}/> : <img src={photo} alt={title} className={css.image} />}
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
        </>

        <div className={css.btndiv}>
          <button
            type="button"
            className={css.btn}
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
          <Link
            to={`/share/${id}`}
            className={css.link}
            state={{ from: location }}
          >
            Edit
          </Link>
        </div>
      </div>
    </>
  );
};
