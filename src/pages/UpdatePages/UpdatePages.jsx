import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useId } from "react";

import css from "./UpdatePages.module.css";
import { FaArrowLeft } from "react-icons/fa";
import photo from "../../img/film.jpg";
import toast from "react-hot-toast";

import { NotFound } from "../../components/NotFound/NotFound";

import { getFilmById, updateFilm } from "../../redux/Films/operation";
import { selectFilmById } from "../../redux/Films/selector";

import { Formik, Form, Field, ErrorMessage } from "formik";
import validationSchema from "../../helpers/validationSchema";


const UpdatePages = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  
  const back = location?.state?.from || "/";

  const titleId = useId();
  const descriptionId = useId();
  const release = useId();
  const genre = useId();
  const actors = useId();
  const rating = useId();
  const linkPohto = useId();
  const director = useId();

  useEffect(() => {
    dispatch(getFilmById(id));
  }, [id, dispatch]);

  const data = useSelector(selectFilmById);
  if (!data) {
    return <NotFound />;
  }

  const initialValues = {
    title: data.title,
    description: data.description,
    release_date: data.release_date,
    genre: String(data.genre),
    actors: String(data.actors),
    rating: data.rating,
    image: data.image,
    director: data.director,
  };

  const handleSubmit = (values) => {
    const film = {
      ...values,
      id: data.id,
    };
    dispatch(updateFilm(film))
      .unwrap()
      .then(() => {
        toast.success("Film updated");
        navigate(back);
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };



  return (
    <main>
      <div className="container">
        <Link to={back} className={css.linkArrow}>
          <FaArrowLeft className={css.icon} />
        </Link>

        <div className={css.formdiv}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className={css.form}>
              <h1>Update your film</h1>
              <div className={css.firstcont}>
                <div className={css.contFil}>
                  <label htmlFor={titleId}>Title</label>
                  <Field
                    id={titleId}
                    name="title"
                    type="text"
                    className={css.input}
                  />
                  <ErrorMessage
                    name="title"
                    component="span"
                    className={css.error}
                  />
                </div>
                <div className={css.contFil}>
                  <label htmlFor={release}>Release date</label>
                  <Field
                    id={release}
                    name="release_date"
                    type="text"
                    className={css.input}
                  />
                  <ErrorMessage
                    name="release_date"
                    component="span"
                    className={css.error}
                  />
                </div>
              </div>
              <div className={css.firstcont}>
                <div className={css.contFil}>
                  <label htmlFor={rating}>Rating</label>
                  <Field
                    id={rating}
                    name="rating"
                    type="text"
                    className={css.input}
                  />
                  <ErrorMessage
                    name="rating"
                    component="span"
                    className={css.error}
                  />
                </div>
                <div className={css.contFil}>
                  <label htmlFor={director}>Director</label>
                  <Field
                    id={director}
                    name="director"
                    type="text"
                    className={css.input}
                  />
                  <ErrorMessage
                    name="director"
                    component="span"
                    className={css.error}
                  />
                </div>
              </div>
              <div className={css.contFil}>
                <label htmlFor={genre}>Genre</label>
                <Field
                  id={genre}
                  name="genre"
                  type="text"
                  className={css.input}
                />
                <ErrorMessage
                  name="genre"
                  component="span"
                  className={css.error}
                />
              </div>
              <div className={css.contFil}>
                <label htmlFor={actors}>Actors</label>
                <Field
                  id={actors}
                  name="actors"
                  type="text"
                  className={css.input}
                />
                <ErrorMessage
                  name="actors"
                  component="span"
                  className={css.error}
                />
              </div>
              <div className={css.contFil}>
                <label htmlFor={descriptionId}>Description</label>
                <Field
                  id={descriptionId}
                  name="description"
                  as="textarea"
                  className={css.input}
                  rows={4}
                />
                <ErrorMessage
                  name="description"
                  component="span"
                  className={css.error}
                />
              </div>
              <div className={css.contFil}>
                <label htmlFor={linkPohto}>Link to photo</label>
                <Field
                  id={linkPohto}
                  name="image"
                  type="text"
                  className={css.input}
                />
                <ErrorMessage
                  name="image"
                  component="span"
                  className={css.error}
                />
              </div>
              <button type="submit" className={css.btn}>
                Submit
              </button>
            </Form>
          </Formik>
          <img src={photo} alt="film" className={css.photo} />
        </div>
      </div>
    </main>
  );
};
export default UpdatePages;
