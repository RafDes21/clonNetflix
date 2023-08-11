import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IMAGE } from "../../constants";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./styles.module.css";
import Search from "../../components/search";
import useScroll from "../../hooks/useSccroll";
import { Perfil } from "../../components";

const NavBar = () => {
  const scrollY = useScroll();

  const [isShowMenu, setIsShowMenu] = useState(true);


  const showMenu = () => {
    setIsShowMenu(!isShowMenu)
  }

  return (
    <nav className={`${styles.nav} ${scrollY < 70 ? "" : styles.active}`}>
      <div className={styles.navHeader}>
        <div className={styles.containerNav}>
          <GiHamburgerMenu onClick={()=>{showMenu()}} className={styles.menuBurger} />
          <img className={styles.logo} src={IMAGE.logo} />
          <ul className={`${styles.menuList} ${isShowMenu? "" : styles.active}`}>
            <Perfil/>
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
          {/* <span
            className={styles.hiddenLink}
            onMouseOver={() => setIsMouse(true)}
            onMouseOut={() => setIsMouse(false)}
          >
            <p>Explorar</p>
            <IoMdArrowDropdown />
          </span> */}
        </div>
        <div>
          <Search />
        </div>
        <div className={styles.showPerfil}>
          <Perfil />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
