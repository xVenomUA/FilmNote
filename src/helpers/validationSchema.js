import * as Yup from "yup";
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
      .max(100, "Too Long!")
      .required("Required"),
    actors: Yup.string()
      .min(3, "Too Short!")
      .max(100, "Too Long!")
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
  export default validationSchema;