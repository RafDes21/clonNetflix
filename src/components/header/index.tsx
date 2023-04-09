import React from "react";
import styles from "./styles.module.css";
import { GrPlayFill } from "react-icons/gr";
import { AiOutlineInfoCircle } from "react-icons/ai";

type props = {
  image: string;
  title: string;
  description: string;
};

const Header: React.FC<props> = ({ image, title, description }) => {
  console.log("este", image, title);

  return (
    <div className={styles.containerHeader}>
      <img src={image} alt={title} />
      <div className={styles.descriptionHeader}>
        <div className={styles.description}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className={styles.btnDescription}>
          <button>
            <GrPlayFill />
            Reproducir
          </button>
          <button>
            <AiOutlineInfoCircle className={styles.btnIconInfo} />
            Más información
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
