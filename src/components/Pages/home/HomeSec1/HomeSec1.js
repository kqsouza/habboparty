import React from "react";

import CardRoom from "../../../cardroom/CardRoom";
import Logotipo from "../../../logotipo/Logotipo";

import "./Homesec1.css";

export default class HomeSec1 extends React.Component {
  render() {
    return (
      <div id="homesec1">
        <div className="row" style={{ height: "100%", margin: "0" }}>
          <div className="col-md-6" style={{ padding: "0" }}>
            <div className="left-cont-wrp">
              <h3>
                Sala em <span>destaque</span> agora !
              </h3>
              <div className="box-glow">
                <CardRoom />
              </div>
            </div>
          </div>
          <div className="col-md-6" style={{ padding: "0" }}>
            <div className="right-cont-wrp">
              <div className="logo-cont-wrp">
                <Logotipo />
              </div>
              <p>
                Ouça, <br />
                Toque <span>músicas</span> juntos !
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
