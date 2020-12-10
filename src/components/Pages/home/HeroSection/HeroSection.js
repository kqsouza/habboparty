import React from "react";

import Button from "../../../button/Button";

import "./HeronSection.css";
import ManOnly from "../../../../assets/bgmanonly.png";
import TitleHome from "../../../../assets/titlehomesection.png";

export default class HeroSection extends React.Component {
  render() {
    return (
      <div id="herosection">
        <div className="row m-0" style={{ height: "100%" }}>
          <div className="col-md-6 p-0" style={{ height: "100%" }}>
            <div className="wrp-cont-left">
              <img
                src={TitleHome}
                style={{ width: "740px" }}
                className="img-fluid"
              />
              <p>
                Entre nessa e venha curtir com seus amigos,{" "}
                <span>é totalmente de graça !</span>
              </p>
              <p>
                Ouça e reproduza seus vídeos, músicas, em tempo real com seus
                amigos. <span>Saiba mais no botão abaixo.</span>
              </p>
              <Button
                text="Saiba mais"
                bgbutton="#3cbfaf"
                boxSha="0 2px 25px #3cbfaf"
              />
            </div>
          </div>
          <div
            className="col-md-6 d-flex justify-content-end align-items-end p-0"
            style={{ height: "100%" }}
          ></div>
        </div>
      </div>
    );
  }
}
