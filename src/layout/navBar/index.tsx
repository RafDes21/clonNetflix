import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IMAGE } from "../../constants";
import { IoMdArrowDropdown } from "react-icons/io";
import styles from "./styles.module.css";
import Search from "../../components/search";
import useScroll from "../../hooks/useSccroll";

const NavBar = () => {
  const scrollY = useScroll()

  const [isMouse, setIsMouse] = useState(false);



  const classesLinks = `${styles["containerLink"]} ${
    isMouse ? styles.active : ""
  }`;

  return (
    <nav className={`${styles.nav} ${scrollY < 70 ? '' : styles.active}`}>
      <div className={styles.navHeader}>
        <div className={styles.containerNav}>
          <img className={styles.logo} src={IMAGE.logo} />
          <ul
            className={classesLinks}
            onMouseOver={() => setIsMouse(true)}
            onMouseOut={() => setIsMouse(false)}
          >
            <li>
              <Link className={styles.link} to="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/series">
                Series
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/movies">
                Películas
              </Link>
            </li>
          </ul>
          <span
            className={styles.hiddenLink}
            onMouseOver={() => setIsMouse(true)}
            onMouseOut={() => setIsMouse(false)}
          >
            <p>Explorar</p>
            <IoMdArrowDropdown />
          </span>
        </div>
        <div>
          <Search />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
