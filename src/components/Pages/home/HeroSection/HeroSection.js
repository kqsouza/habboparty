import React from "react";

import "./HeronSection.css";
import ManOnly from "../../../../assets/bgmanonly.png";

export default class HeroSection extends React.Component {
  render() {
    return (
      <div id="herosection">
        <div className="row" style={{ height: "100%" }}>
          <div
            className="col-md-6"
            style={{ border: "1px solid yellow", height: "100%" }}
          ></div>
          <div
            className="col-md-6 d-flex justify-content-end align-items-end"
            style={{ border: "1px dashed green", height: "100%" }}
          ></div>
        </div>
      </div>
    );
  }
}
