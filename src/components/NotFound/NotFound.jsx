import clsx from "clsx";
import css from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <main className={clsx(css.main)}>
      <div className="container">
        <h2 className={css.text}>I am so sorry , 404 Page not found</h2>
      </div>
    </main>
  );
};
