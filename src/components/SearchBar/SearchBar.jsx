import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";

import css from "./SearchBar.module.css";

import { selectFilter } from "../../redux/Films/selector";
import { setFilter } from "../../redux/Films/fliterSlice";

export const SearchBar = () => {
  const id = useId();
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);
  
  const onSearch = (evt) => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <div className={css.search}>
      <label htmlFor={id} className={css.label}>
        Find film by title
      </label>
      <input
        type="text"
        id={id}
        className={css.input}
        onChange={onSearch}
        placeholder="Search"
        name="search"
        value={value}
      />
    </div>
  );
};
