import clsx from "clsx";
import css from "./NotFound.module.css";
export const NotFound = () => {
  return (
    <main className={clsx("container", css.main)}>
      <h2 className={css.text}>I am so sorry , 404 Page not found</h2>
    </main>
  );
};
