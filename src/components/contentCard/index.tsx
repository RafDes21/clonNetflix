import React from "react";
import { ContentMovieChildren } from "../../types/types";
import styles from "./styles.module.css";
import { ListCards } from "./components";
import { useAppSelector } from "../../store/hook/hook";

const ContentCard: React.FC<ContentMovieChildren> = ({
  movies,
  title,
  isMobile,
}) => {
  const isLoading = useAppSelector((state) => state.movieHome.loading);

  return (
    <div className={styles.container}>
      <div className={styles.contenCard}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <div className={styles.containerCardsMobile}>
          <ListCards movies={movies} isMobile={isMobile} />
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
