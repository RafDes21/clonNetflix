import React, { useRef, useState } from "react";
import styles from "./styles.module.css";
import { Card } from "../card";
import { MdArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import { IMAGE } from "../../constants";

interface Props {
  title: string;
  arrayList: string[];
}

const ContainSlider: React.FC<Props> = ({ title, arrayList }) => {
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState<boolean>(true);

  const handleScrollLeft = () => {
    
    const cardContainer = cardContainerRef.current;
    if (cardContainer) {
      const lastCard = cardContainer.lastElementChild;
      if (lastCard) {
        cardContainer.insertBefore(lastCard, cardContainer.firstElementChild);
      }
    }
  };

  const handleScrollRight = () => {
    setIsActive(false);
    if (cardContainerRef.current) {
      const cardContainer = cardContainerRef.current;
      const firstCard = cardContainer.firstElementChild;
      if (firstCard) {
        cardContainer.appendChild(firstCard);
      }
    }
  };

  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <div className={styles.boxSlider}>
        <div className={styles.Slider}>
          <div
            className={`${styles.containerSlider} ${
              isActive ? "" : styles.active
            }`}
            ref={cardContainerRef}
          >
            {arrayList.map((item: any, index: any) => (
              <Card
                key={index}
                title={item.title}
                image={
                  item.backdrop_path
                    ? `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
                    : IMAGE.imageNotAvailable
                }
              />
            ))}
          </div>
        </div>
        <MdArrowBackIosNew
          onClick={handleScrollLeft}
          className={`${isActive? "":styles.arrowLeft}`}
        />
        <MdOutlineArrowForwardIos
          onClick={handleScrollRight}
          className={styles.arrowRight}
        />
      </div>
    </div>
  );
};

export default ContainSlider;
