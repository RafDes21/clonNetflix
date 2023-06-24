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
  const [paddingValue, setPaddingValue] = useState<boolean>(true);

  const handleScrollLeft = () => {
    setPaddingValue(false)
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft -= 300; // Ajusta la cantidad de desplazamiento aquí
    }
  };

  const handleScrollRight = () => {
    setPaddingValue(false)
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft += 300; // Ajusta la cantidad de desplazamiento aquí
    }
  };
  const moveFirstToLast = () => {
    setPaddingValue(false)
    // const refChild = refLeft.current.children[0];
    // const refChild1 = refLeft.current.children[1];
    // const refChild2 = refLeft.current.children[2];
    // const widthToMove = refChild.offsetWidth * 4;

    // refLeft.current.style.transition = `1000ms ease-out all`;
    // refLeft.current.style.marginLeft = `-${widthToMove}px`;

    // const transition = async () => {
    //   refLeft.current.style.transition = `none`;
    //   refLeft.current.style.marginLeft = `-250px`;

    //   await refLeft.current.appendChild(refChild);
    //   await refLeft.current.appendChild(refChild1);
    //   await refLeft.current.appendChild(refChild2);
    // };

    // refLeft.current.addEventListener("transitionend", transition);
  };

  const moveLastToFirst = () => {
    setPaddingValue(false)
    // const ChildPosition1 = refLeft.current.children.length - 1;
    // const ChildPosition2 = refLeft.current.children.length - 2;
    // const ChildPosition3 = refLeft.current.children.length - 3;
    // const ChildPosition4 = refLeft.current.children.length - 4;

    // const refChild = refLeft.current.children[ChildPosition1];
    // const refChild1 = refLeft.current.children[ChildPosition2];
    // const refChild2 = refLeft.current.children[ChildPosition3];
    // const refChild3 = refLeft.current.children[ChildPosition4];

    // refLeft.current.insertBefore(refChild, refLeft.current.firstChild);
    // refLeft.current.insertBefore(refChild1, refLeft.current.firstChild);
    // refLeft.current.insertBefore(refChild2, refLeft.current.firstChild);
    // refLeft.current.insertBefore(refChild3, refLeft.current.firstChild);
    // refLeft.current.style.transition = "none";

    // const long = refChild.offsetWidth * 4;
    // refLeft.current.style.marginLeft = `-${long}px`;

    // setTimeout(() => {
    //   refLeft.current.style.transition = `1000ms ease-out all`;
    //   refLeft.current.style.marginLeft = "-250px";
    // }, 30);
  };

  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <div className={`${styles.containerSlider} ${paddingValue ? '' : styles.active}`} ref={cardContainerRef}>
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
        <MdArrowBackIosNew
          onClick={handleScrollLeft}
          className={styles.arrowLeft}
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
