import React from 'react';
import { ItemCardProps } from '../../../../types/types';
import styles from "./styles.module.css"

const ItemCard: React.FC<ItemCardProps> = ({ id, image, title }) => {
  console.log(image);
  
  return (
    <div className={styles.card}>
      <img src={`https://image.tmdb.org/t/p/original${image}`} alt={title}/>
    </div>
  );
};

export default ItemCard;
