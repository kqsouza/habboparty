import React from "react";

import Navbar from "../../menu-bootstrap/Navbar";
import Menu from "../../menu/Menu";
import HomeSec1 from "./HomeSec1/HomeSec1";
import HeroSection from "./HeroSection/HeroSection";
import RoomSection from "./RoomSection/RoomSection";

import "./Home.css";
//import "../../menu/animMenu.js";
import "./barba.js";

export default class Home extends React.Component {
  render() {
    return (
      <div id="homepage">
        <div className="container-fluid">
          <Navbar />
          <HeroSection />
          <RoomSection />
        </div>
      </div>
    );
  }
}
