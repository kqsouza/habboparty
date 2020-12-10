import React from "react";
import Logotipo from "../logotipo/Logotipo";

import "./loginform.css";
import gsap from "gsap";
import axios from "axios";

export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    // reference to the DOM node
    this.myElement = null;
    this.overlay = null;
    // reference to the animation
    this.myTween = null;
  }

  componentDidMount() {
    let tl = gsap.timeline();
    tl.from(this.overlay, {
      opacity: 0,
      duration: 0.3,
      transformOrigin: "center center",
    });
    tl.from(this.myElement, {
      opacity: 0,
      scale: 0.5,
      duration: 0.6,
      ease: "power4.out",
    });
  }

  cadastraDados = (evt) => {
    evt.preventDefault();
    const username = evt.target[0].value;
    const email = evt.target[1].value;
    const password = evt.target[2].value;

    const ax = axios.create({ baseURL: "http://localhost:9000" });
    ax.post("/register", {
      username: username,
      email: email,
      password: password,
    }).then(function (response) {
      console.log(response);
    });
  };

  render() {
    return (
      <div className="bgform d-flex justify-content-center align-items-center">
        <div class="wrap-login100">
          <form
            class="login100-form validate-form"
            onSubmit={this.cadastraDados}
          >
            <span class="login100-form-title p-b-26">Registre-se !</span>
            <i class="fas fa-times" onClick={this.props.click}></i>
            <div class="wrap-input100 validate-input" data-validate="Min x">
              <input class="input100" type="text" name="username" required />
              <span
                class="focus-input100"
                data-placeholder="Nome de usuário"
              ></span>
            </div>
            <div
              class="wrap-input100 validate-input"
              data-validate="Valid email is: a@b.c"
            >
              <input class="input100" type="text" name="email" required />
              <span class="focus-input100" data-placeholder="E-mail"></span>
            </div>
            <div
              class="wrap-input100 validate-input"
              data-validate="Enter password"
            >
              <span class="btn-show-pass">
                <i class="zmdi zmdi-eye"></i>
              </span>
              <input class="input100" type="password" name="pass" required />
              <span class="focus-input100" data-placeholder="Senha"></span>
            </div>
            <div class="container-login100-form-btn">
              <div class="wrap-login100-form-btn">
                <div class="login100-form-bgbtn"></div>
                <button type="submit" class="login100-form-btn">
                  Registrar
                </button>
              </div>
            </div>
            <div class="text-center p-t-115">
              <span class="txt1">Já possui uma conta? </span>
              <a class="txt2" href="#">
                Clique aqui !
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
