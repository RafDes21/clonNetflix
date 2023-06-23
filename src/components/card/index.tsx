import React, { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { BiLike } from "react-icons/bi";
import { AiFillPlayCircle } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import styles from "./styles.module.css";

interface props {
  image: string;
  title: string;
}

export const Card: React.FC<props> = ({ image, title }) => {
  const [isActiveCard, setIsActiveCard] = useState(true);
  // const [show, setShow] = useState(true);

  // const onMouseOut = () => {
  //   setShow(false);
  // };

  // const onMouseOver = () => {
  //   setShow(true);
  // };
  // onMouseOver={onMouseOver}
  // onMouseOut={onMouseOut}

  return (
    <div className={styles.container}>
      {isActiveCard ? (
        <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt={title} />
      ) : (
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt={title} />
          </div>
          <div className={styles.cardBody}>
            <div className={styles.cardContentIcons}>
              <div className={styles.cardIcons}>
                <IoIosAddCircleOutline />
                <AiFillPlayCircle />
                <BiLike />
              </div>
              <IoIosArrowDropdownCircle />
            </div>
            <div className={styles.cardDetail}>
              <span className={styles.cardSubTitle}>Nuevo</span>
              <span className={styles.cardAge}>7+</span>
              <span>2h</span>
              <span className={styles.cardDefinition}>hd</span>
            </div>
            <div className={styles.cardsGenders}>generos</div>
          </div>
        </div>
      )}
    </div>
  );
};
