import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import styles from "./styles.module.css";

const PerfilUser = () => {
  return (
    <div className={styles.perfil}>
      <img
        className={styles.perfilAvatar}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWgre2gA2M9a9kP8Ckzh1naBiZtCbTcIe2ux5wNMh4Ho2sXyF61Z6CayB9jcrcEVN6ztY&usqp=CAU"
        alt="avatar"
      />
      <IoMdArrowDropdown className={styles.perfilShow} />
    </div>
  );
};

export default PerfilUser;
