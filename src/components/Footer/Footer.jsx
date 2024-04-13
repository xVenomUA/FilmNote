import clsx from "clsx";
import css from "./Footer.module.css";

export const Foooter = () => {
  return (
    <footer className={css.footer}>
      <div className={clsx("container", css.container)}>
        <p className="footer__text">© 2024. All rights reserved</p>
        <address className={css.address}>
          <a href="mailto:pogra@gmail.com" className={css.link}>
            pogra29@gmail.com
          </a>
          <a href="tel:+380989367367" className={css.link}>
            +380989367367
          </a>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            className={css.link}
          >
            Lviv, Ukraine{" "}
          </a>
        </address>
      </div>
    </footer>
  );
};
