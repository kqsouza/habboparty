import React from "react";

import "./Menu.css";
import "./animMenu.js";

import Logotipo from "../logotipo/Logotipo";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegisterActive: false,
      activeMenu: false,
    };
  }

  switchRegister = () => {
    this.setState((state) => ({
      isRegisterActive: !state.isRegisterActive,
    }));
  };

  toggleClass = () => {
    const currentState = this.state.activeMenu;
    this.setState((state) => ({ activeMenu: !currentState }));
  };
  render() {
    if (this.state.isRegisterActive === true) {
      return (
        <div className="bgRegisterForm">
          <div className="registerForm ">
            <i class="fas fa-times" onClick={this.switchRegister}></i>
            <h2 className="text-center">Registrar</h2>
            <form className="login-box">
              <div class="user-box">
                <input type="text" name="" required="" />
                <label>Nome de usuário</label>
              </div>
              <div class="user-box">
                <input type="text" name="" required="" />
                <label>E-mail</label>
              </div>
              <div class="user-box">
                <input type="password" name="" required="" />
                <label>Senha</label>
              </div>
              <button
                type="submit"
                value="Cadastrar"
                className="btn btn-outline-light"
              >
                Cadastrar{" "}
              </button>
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className={this.state.activeMenu ? "menumine nav-active" : "menumine"}
        >
          <div className="nav-but-wrap">
            <div className="menu-icon hover-target" onClick={this.toggleClass}>
              <span className="menu-icon__line menu-icon__line-left"></span>
              <span className="menu-icon__line"></span>
              <span className="menu-icon__line menu-icon__line-right"></span>
            </div>
          </div>
          <div className="nav">
            <div className="nav__content">
              <ul className="nav__list">
                <li className="nav__list-item active-nav">
                  <a href="#" className="hover-target">
                    Logar
                  </a>
                </li>
                <li className="nav__list-item">
                  <a
                    href="#"
                    onClick={this.switchRegister}
                    className="hover-target"
                  >
                    Registrar
                  </a>
                </li>
                <li className="nav__list-item">
                  <a href="#" className="hover-target"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }
}
