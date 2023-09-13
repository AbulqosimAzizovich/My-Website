import { NavLink } from "react-router-dom";
import menu from "../../assets/images/svg/bx-menu.svg"
import "./style.scss";


const index = () => {
  return (
    <header>
      <div className="container">
        <div className="header__wrapper">
          <div className="logo">
            <h1>Abdulqosim</h1>
          </div>
          <div className="header__list">
            <ul>
              <li>
                <NavLink className="header__link" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="header__link" to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="header__link" to="/project">
                  Project
                </NavLink>
              </li>
              <li>
                <NavLink className="header__link" to="/blog">
                  Blog
                </NavLink>
              </li>

              <li>
                <button>Contact Me</button>
              </li>
            </ul>
          </div>

          <div className="header__res">
            <button>
              <img src={menu} alt="Menu" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default index;
