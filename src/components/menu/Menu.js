import React from "react";

import "./Menu.css";
import "./animMenu.js";

import Logotipo from "../logotipo/Logotipo";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegisterActive: false,
    };
  }

  switchRegister = () => {
    this.setState((state) => ({
      isRegisterActive: !state.isRegisterActive,
    }));
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
                  <a
                    href="#"
                    onClick={this.switchRegister}
                    class="hover-target"
                  >
                    Registrar
                  </a>
                </li>
                <li class="nav__list-item">
                  <a href="#" class="hover-target">
                    {this.state.isRegisterActive}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }
}
