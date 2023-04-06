import { Link } from "react-router-dom";
import { LOGO } from "../../constants";

const NavBar = () => {
  return (
    <div>
      <img src={LOGO.logo} />
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/series">Series</Link>
          </li>
          <li>
            <Link to="/movies">Películas</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
