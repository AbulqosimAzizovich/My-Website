import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./style.scss";
import menu from "../../assets/images/svg/bx-menu.svg";

const index = () => {
  const [menu, setMenu] = useState(true);
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
            <button
              onClick={() => setMenu(!menu)}
              style={menu ? { display: "block" } : { display: "none" }}
            >
              <i className="bx bx-menu text-white text-[30px]"></i>
            </button>

            <button
              onClick={() => setMenu(!menu)}
              style={menu ? { display: "none" } : { display: "block" }}
            >
              <i class="bx bx-x text-white text-[30px]"></i>
            </button>

            <div
              className="menu__rs"
              style={menu ? { right: "-250px" } : { transform: "0px" }}
            >
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default index;
