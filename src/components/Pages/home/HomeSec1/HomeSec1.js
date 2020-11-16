import React from "react";

import CardRoom from "../../../cardroom/CardRoom";
import Logotipo from "../../../logotipo/Logotipo";
import Button from "../../../button/Button";

import "./Homesec1.css";

export default class HomeSec1 extends React.Component {
  render() {
    return (
      <div id="homesec1">
        <div className="row" style={{ height: "100%", margin: "0" }}>
          <div className="col-md-6" style={{ padding: "0" }}>
            <div className="left-cont-wrp">
              <h3 className="logo">
                <span className="hrs">Sala em destaque agora !</span>
              </h3>
              <div className="box-glow">
                <CardRoom />
              </div>
            </div>
          </div>
          <div className="col-md-6" style={{ padding: "0" }}>
            <div className="right-cont-wrp">
              <p className="logo">
                <span className="hrs">
                  Ouça,
                  <br /> toque{" "}
                  <span className="open">
                    músicas <i class="fab fa-itunes-note"></i>
                  </span>{" "}
                  juntos !
                </span>
              </p>
            </div>
          </div>
          <div class="space">
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
          </div>
        </div>
      </div>
    );
  }
}
