import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value.trim());
  };
  const handleClick = () => {
    if (keyword.length === 0) {
      return setIsActive(!isActive);
    }
    if (keyword.length < 4) {
      alert("Tienes que escribir más de 4 carácteres");
    } else {
      setIsActive(false);
      navigate(`/search/?keyword=${keyword}`);
      setKeyword("")
    }
  };

  return (
    <div className={styles.searchAvatar}>
      <div className={styles.containerInput}>
        <GoSearch className={styles.inputIcon} onClick={handleClick} />
        <input
          placeholder="Títulos, personas, géneros"
          onChange={handleInputChange}
          style={{ display: isActive ? "block" : "none" }}
          value={keyword}
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
