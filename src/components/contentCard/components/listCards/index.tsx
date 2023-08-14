import React, { useRef, useState } from "react";
import { ListCardsProps } from "../../../../types/types";
import ItemCard from "../itemCard";
import styles from "./styles.module.css";

const ListCards: React.FC<ListCardsProps> = ({ movies, isMobile }) => {
  const renderMovies = () => {
    return movies.map((movie, index) => (
      <ItemCard key={index} id={movie.id} image={isMobile? movie.poster: movie.image} title={movie.title}/>
    ));
  };

  const containerRef = useRef<HTMLDivElement | null>(null); // Indica el tipo de containerRef
  const [startX, setStartX] = useState(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const currentX = e.touches[0].clientX;
    const deltaX = startX - currentX;
    containerRef.current.scrollLeft += deltaX;
    setStartX(currentX);
  };

  return (
    <div
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setStartX(0)}
      className={styles.containerCards}
    >
      {renderMovies()}
    </div>
  );
};

export default ListCards;