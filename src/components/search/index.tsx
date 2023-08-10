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
    
    </div>
  );
};

export default Search;
