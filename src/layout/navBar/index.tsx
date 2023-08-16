import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IMAGE } from "../../constants";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./styles.module.css";
import Search from "../../components/search";
import useScroll from "../../hooks/useSccroll";
import { Perfil } from "../../components";
import useWindowWidth from "../../hooks/useWindowWidth";

const NavBar = () => {
  const scrollY = useScroll();

  const [isShowMenu, setIsShowMenu] = useState(false);

  const isMobile = useWindowWidth();
  useEffect(() => {
    if (isMobile) {
      setIsShowMenu(false);
    }
  }, [isMobile]); 

  const showMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  return (
    <nav className={`${styles.nav} ${scrollY < 70 ? "" : styles.active}`}>
      <div className={styles.navHeader}>
        <div className={styles.containerNav}>
          <GiHamburgerMenu onClick={showMenu} className={styles.menuBurger} />
          <img className={styles.logo} src={IMAGE.logo} />
          <ul
            onClick={showMenu}
            className={`${styles.menuList} ${isShowMenu ? "" : styles.active}`}
          >
            <div className={styles.showPerfil}>
              <Perfil showIcon={false} />
            </div>
            <li className={styles.navItem}>
              <Link className={styles.link} to="/">
                Inicio
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link className={styles.link} to="/series">
                Series
              </Link>
            </li>
            <li className={styles.navItem}>
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
        <div className={styles.perfilSearch}>
          <Search />
          <div className={styles.showPerfilTablet}>
            <Perfil showIcon={true} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
