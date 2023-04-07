import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";
import styles from "./styles.module.css";

const Search = () => {
  const [state, setState] = useState({ filter: "", isActive: false });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, filter: e.target.value });
  };
  const handleClick = () => {
    setState({ ...state, isActive: !state.isActive });
  };

  return (
    <div className={styles.searchAvatar}>
      <div className={styles.containerInput}>
        <GoSearch className={styles.inputIcon} onClick={handleClick} />
        <input
          placeholder="Títulos, personas, géneros"
          onChange={handleInputChange}
          style={{ display: state.isActive ? "block" : "none" }}
        />
      </div>
      <div className={styles.containerAvatar}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWgre2gA2M9a9kP8Ckzh1naBiZtCbTcIe2ux5wNMh4Ho2sXyF61Z6CayB9jcrcEVN6ztY&usqp=CAU"
          alt="avatar"
        />
        <IoMdArrowDropdown className={styles.avatarDown} />
      </div>
    </div>
  );
};

export default Search;
