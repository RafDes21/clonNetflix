import React from "react";
import styles from "./styles.module.css";

type props = {
  image: string;
  title: string;
};

const Header: React.FC<props> = ({ image, title }) => {

  console.log("este", image, title);
  
  return (
    <div className={styles.containerHeader}>
      <img src={image} alt={title} />
      <div className={styles.descriptionHeader}>
        <h1>{title}</h1>
        
        <div>
          <button>Reproducir</button>
          <button>Más información</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
