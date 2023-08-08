import { useEffect } from "react";

import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hook/hook";

import { fetchFilterMovies } from "../../store/thunks/filterThunks";
import styles from "./styles.module.css";
import { CardFilter } from "../../components";

const Filter = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state) => state.filter.movies);
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  useEffect(() => {
    dispatch(fetchFilterMovies(keyword));
  }, [keyword]);
  return (
    <div className={styles.filter}>
      <h2 className={styles.h2}>
        Resultados de tu busqueda:
        {movies.length === 0 ? " no hay resultados" : ` ${keyword}`}
      </h2>
      <div className={styles.containerCard}>
        {movies.length === 0 ? (
          <div className="sinResults">
            <h1>no hay nada</h1>
          </div>
        ) : (
          movies.map((movie: any, index) => (
            <div className={styles.cards}>
              <CardFilter
                key={index}
                title={movie.title}
                image={movie.poster_path}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default Filter;
