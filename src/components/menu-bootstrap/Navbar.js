// IMPORTAÇÕES COMPONENTES
import React from "react";
import Button from "../button/Button";
import Logotipo from "../logotipo/Logotipo";
import LoginForm from "../loginform/LoginForm";

//ESTILIZAÇÃO NAVBAR
import "./Navbar.css";

//ANIMAÇÃO
import gsap from "gsap";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayLogin: false,
    };
  }

  componentDidMount() {}

  showLogin = () => {
    return <LoginForm />;
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        {this.state.displayLogin ? this.showLogin() : ""}
        <a className="navbar-brand" href="#">
          <Logotipo
            fontSz="45px"
            iconSz="58px"
            leftIcon="27px"
            topIcon="-2px"
          />{" "}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul
            className="navbar-nav ml-auto"
            ref={(el) => (this.myElement = el)}
          >
            <li className="nav-item mr-4">
              <Button
                text="Login"
                bgbutton="linear-gradient(90deg, #8b8ee1, #dc51dc, #a977df, #8b8ee1)"
                id="Login"
                click={() => {
                  this.setState({ displayLogin: true });
                }}
              />
            </li>
            <li className="nav-item">
              <Button text="Registrar" id="Registrar" />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
