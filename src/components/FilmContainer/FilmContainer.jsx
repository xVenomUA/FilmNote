import css from "./FilmContainer.module.css";
export const FilmContainer = ({
  dataFilms: { id, title, rating, release_date, image },
}) => {
  return (
      <div data-id={id} className={css.container}>
        <img src={image} alt={title} className={css.image} />
        <div className={css.info}>
          <h2 className={css.title}>{title}</h2>
          <p className={css.rating}>Rating: {rating}</p>
          <p className={css.data}>Release data: {release_date}</p>
        </div>
      </div>
  );
};
