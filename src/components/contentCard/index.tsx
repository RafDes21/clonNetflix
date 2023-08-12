import React from "react";
import { ContentMovieChildren } from "../../types/types";
import styles from "./styles.module.css";
import { ListCards } from "./components";

const ContentCard: React.FC<ContentMovieChildren> = ({ children, movies, title, isMobile }) => {

  return (
    <div className={styles.container}>
      <div className={styles.contenCard}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <div className={styles.containerCardsMobile}>
          <ListCards movies={movies} isMobile={isMobile}/>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ContentCard;
