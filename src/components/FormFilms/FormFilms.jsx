import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

import { useDispatch } from "react-redux";
import { useId } from "react";

import css from "./FormFilms.module.css";
import toast from "react-hot-toast";
import photo from "../../img/film.jpg";

import { addFilm } from "../../redux/Films/operation";

const initialValues = {
  title: "",
  description: "",
  release_date: "",
  genre: "",
  actors: "",
  rating: "",
  image: "",
  director: "",
};

export const FormFilms = () => {
  const dispatch = useDispatch();
  //Generate Id for label
  const titleId = useId();
  const descriptionId = useId();
  const release = useId();
  const genre = useId();
  const actors = useId();
  const rating = useId();
  const linkPohto = useId();
  const director = useId();

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(3, "Too Short!")
      .max(40, "Too Long!")
      .required("Required"),
    description: Yup.string()
      .min(10, "Too Short!")
      .max(300, "Too Long!")
      .required("Required"),
    release_date: Yup.string()
      .min(4, "Too Short!")
      .max(40, "Too Long!")
      .required("Required"),
    genre: Yup.string()
      .min(3, "Too Short!")
      .max(40, "Too Long!")
      .required("Required"),
    actors: Yup.string()
      .min(3, "Too Short!")
      .max(40, "Too Long!")
      .required("Required"),
    rating: Yup.string().min(1, "Too Short!").required("Required"),
    image: Yup.string()
      .min(3, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),
    director: Yup.string()
      .min(3, "Too Short!")
      .max(40, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    const newFilm = {
      id: nanoid(),
      ...values,
    };
    dispatch(addFilm(newFilm))
      .unwrap()
      .then(() => {
        toast.success("Film added");
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}......Sorry, try again`);
      });
    actions.resetForm();
  };
  return (
    <div className={css.formdiv}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <h1>Share your film</h1>
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
            <Field id={genre} name="genre" type="text" className={css.input} />
            <ErrorMessage name="genre" component="span" className={css.error} />
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
            <ErrorMessage name="image" component="span" className={css.error} />
          </div>
          <button type="submit" className={css.btn}>
            Submit
          </button>
        </Form>
      </Formik>
      <img src={photo} alt="film" className={css.photo} />
    </div>
  );
};
