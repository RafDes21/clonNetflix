import React, { useRef } from "react";
import styles from "./styles.module.css";
import { Card } from "../card";
import { MdArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";

interface Props {
  title: string;
  arrayList: object[];
}

const ContainSlider: React.FC<Props> = ({ title, arrayList }) => {
  const refLeft: any = useRef();

  const moveFirstToLast = () => {
    const refChild = refLeft.current.children[0];
    const refChild1 = refLeft.current.children[1];
    const refChild2 = refLeft.current.children[2];
    const widthToMove = refChild.offsetWidth * 4;

    refLeft.current.style.transition = `1000ms ease-out all`;
    refLeft.current.style.marginLeft = `-${widthToMove}px`;

    const transition = async () => {
      refLeft.current.style.transition = `none`;
      refLeft.current.style.marginLeft = `-250px`;

      await refLeft.current.appendChild(refChild);
      await refLeft.current.appendChild(refChild1);
      await refLeft.current.appendChild(refChild2);
    };

    refLeft.current.addEventListener("transitionend", transition);
  };

  const moveLastToFirst = () => {
    const ChildPosition1 = refLeft.current.children.length - 1;
    const ChildPosition2 = refLeft.current.children.length - 2;
    const ChildPosition3 = refLeft.current.children.length - 3;
    const ChildPosition4 = refLeft.current.children.length - 4;

    const refChild = refLeft.current.children[ChildPosition1];
    const refChild1 = refLeft.current.children[ChildPosition2];
    const refChild2 = refLeft.current.children[ChildPosition3];
    const refChild3 = refLeft.current.children[ChildPosition4];

    refLeft.current.insertBefore(refChild, refLeft.current.firstChild);
    refLeft.current.insertBefore(refChild1, refLeft.current.firstChild);
    refLeft.current.insertBefore(refChild2, refLeft.current.firstChild);
    refLeft.current.insertBefore(refChild3, refLeft.current.firstChild);
    refLeft.current.style.transition = "none";

    const long = refChild.offsetWidth * 4;
    refLeft.current.style.marginLeft = `-${long}px`;

    setTimeout(() => {
      refLeft.current.style.transition = `1000ms ease-out all`;
      refLeft.current.style.marginLeft = "-250px";
    }, 30);
  };

  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <div className={styles.containerSlider} ref={refLeft}>
        {arrayList.map((item: any, index: any) => (
          <Card key={index} title={item.title} image={item.backdrop_path} />
        ))}
      </div>
      <MdArrowBackIosNew
        onClick={moveFirstToLast}
        className={styles.arrowLeft}
      />
      <MdOutlineArrowForwardIos
        onClick={moveLastToFirst}
        className={styles.arrowRight}
      />
    </div>
  );
};

export default ContainSlider;
