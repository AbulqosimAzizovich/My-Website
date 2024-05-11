import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./style.scss";
import menu from "../../assets/images/svg/bx-menu.svg";
import { Button, Drawer } from "antd";

const index = () => {
  const [menu, setMenu] = useState(true);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <header>
      <div className="container">
        <div className="header__wrapper">
          <div className="logo">
            <h1>Axi</h1>
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
            <button onClick={showDrawer}>
              <i className="bx bx-menu text-white text-[30px]"></i>
            </button>

            <Drawer onClose={onClose} open={open}>
              <div className="menu__rs">
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
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  );
};

export default index;
