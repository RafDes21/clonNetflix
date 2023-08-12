import React from "react";
import { ContentSectionProps } from "../../types/types";
import styles from "./styles.module.css";
import { useAppSelector } from "../../store/hook/hook";
import { ListCards } from "./components";

const ContentCard: React.FC<ContentSectionProps> = ({ children }) => {
    const popularMovies = useAppSelector((state)=>state.movieHome.popular)
    console.log(popularMovies);
    
  return (
    <div className={styles.container}>
      <div className={styles.contenCard}>
        <div className={styles.containerCardsMobile}>
            <ListCards movies={popularMovies}/>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ContentCard;
