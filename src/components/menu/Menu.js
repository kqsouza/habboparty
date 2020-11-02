import React from "react";

import "./Menu.css";
import "./animMenu.js";

export default class Menu extends React.Component {
  render() {
    return (
      <div className="menumine">
        <div class="nav-but-wrap">
          <div class="menu-icon hover-target">
            <span class="menu-icon__line menu-icon__line-left"></span>
            <span class="menu-icon__line"></span>
            <span class="menu-icon__line menu-icon__line-right"></span>
          </div>
        </div>
        <div class="nav">
          <div class="nav__content">
            <ul class="nav__list">
              <li class="nav__list-item active-nav">
                <a href="#" class="hover-target">
                  Logar
                </a>
              </li>
              <li class="nav__list-item">
                <a href="#" class="hover-target">
                  Registrar
                </a>
              </li>
              <li class="nav__list-item">
                <a href="#" class="hover-target">
                  Studio
                </a>
              </li>
              <li class="nav__list-item">
                <a href="#" class="hover-target">
                  News
                </a>
              </li>
              <li class="nav__list-item">
                <a href="#" class="hover-target">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
