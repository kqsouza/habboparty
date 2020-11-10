import React from "react";

import Menu from "../../menu/Menu";
import HomeSec1 from "./HomeSec1/HomeSec1";

import "./Home.css";
//import "../../menu/animMenu.js";
export default class Home extends React.Component {
  render() {
    return (
      <div id="homepage">
        <div className="container-fluid">
          <Menu />
          <HomeSec1 />
        </div>
      </div>
    );
  }
}
