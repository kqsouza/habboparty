import React from "react";

import Navbar from "../../menu-bootstrap/Navbar";
import Menu from "../../menu/Menu";
import HomeSec1 from "./HomeSec1/HomeSec1";
import HeroSection from "./HeroSection/HeroSection";

import "./Home.css";
//import "../../menu/animMenu.js";
export default class Home extends React.Component {
  render() {
    return (
      <div id="homepage">
        <div className="container-fluid">
          <Navbar />
          <HeroSection />
        </div>
      </div>
    );
  }
}
