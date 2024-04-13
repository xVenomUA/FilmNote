import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getFilmById } from "../../redux/Films/operation";
import { DetailsFilm } from "../../components/DetailsFilm/DetailsFilm";

const FilmDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFilmById(id));
  }, [id, dispatch]);
  return (
    <main>
      <div className="container">
        <DetailsFilm />
      </div>
    </main>
  );
};
export default FilmDetails;
