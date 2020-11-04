import React from "react";

import CardRoom from "../../../cardroom/CardRoom";

import "./Homesec1.css";

export default class HomeSec1 extends React.Component {
  render() {
    return (
      <div id="homesec1">
        <div className="row" style={{ height: "100%" }}>
          <div className="col-md-6">
            <div className="left-cont-wrp">
              <h3>
                Sala em <span>destaque</span> agora !
              </h3>
              <div className="box-glow">
                <CardRoom />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
