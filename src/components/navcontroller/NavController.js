import React from "react";

import Navbar from "../menu-bootstrap/Navbar";

export default class NavController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isInRoom: false,
    };
  }

  render() {
    if (this.state.isLoggedIn === false && this.state.isInRoom === false) {
      return <Navbar />;
    } else if (
      this.state.isLoggedIn === true &&
      this.state.isInRoom === false
    ) {
      return <h1>Logado</h1>;
    }
  }
}
