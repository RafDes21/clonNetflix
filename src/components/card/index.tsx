import React from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { BiLike } from "react-icons/bi";
import { AiFillPlayCircle } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import styles from "./styles.module.css";

interface props{
    image:string,
    title:string
}

export const Cards:React.FC<props> = ({ image, title }) => {
  return (
    <div className={styles.cards}>
      <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt={title} />
      <div className={styles.cardsBody}>
        <div className={styles.cardsIcons}>
          <div className={styles.cardsIconsOne}>
            <IoIosAddCircleOutline />
            <AiFillPlayCircle />
            <BiLike />
          </div>
          <IoIosArrowDropdownCircle />
        </div>
        <div className={styles.cardsText}>
          <span className={styles.cardsTextOne}>Nuevo</span>
          <span className={styles.cardsTextTwo}>7+</span>
          <span>2h</span>
          <span className={styles.cardsTextTwo}>hd</span>
        </div>
        <div className={styles.cardsGenre}>generos</div>
      </div>
    </div>
  );
};

