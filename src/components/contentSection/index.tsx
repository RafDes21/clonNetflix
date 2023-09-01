import React, { useEffect, useState } from "react";
import { ContentSectionProps } from "../../types/types";
import { useAppSelector } from "../../store/hook/hook";
import styles from "./style.module.css";
import { getRandomPoster } from "../../utils/getRandomPoster";

const ContentSection: React.FC<ContentSectionProps> = ({ children }) => {
  const moviesPopular = useAppSelector((state) => state.movieHome.popular);
  const [isLoading, setIsLoading] = useState(true);
  const [randomPoster, setRandomPoster] = useState("");

  useEffect(() => {
    if (moviesPopular.length > 0) {
      const poster = getRandomPoster(moviesPopular);
      setRandomPoster(poster.poster);
      setIsLoading(false);
    }
  }, [moviesPopular]);

  return (
    <div className={styles.contentSection}>
      {isLoading ? (
        <div className={styles.loading}>
          <div className={styles.customloader}></div>
        </div>
      ) : (
        <img
          className={styles.contentSectionPoster}
          src={`https://image.tmdb.org/t/p/original${randomPoster}`}
          alt="Random Poster"
        />
      )}
      {children}
    </div>
  );
};

export default ContentSection;
