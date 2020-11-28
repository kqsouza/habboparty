import React from "react";

import "./Roomsection.css";

//import "./visualRoomSecAnim.js";

import "./animsRoomSection.js";

import Roomcard from "../../../roomcard/Roomcard";

export default class RoomSection extends React.Component {
  render() {
    return (
      <div id="roomsection">
        <div className="headerroom">
          <div className="music">
            <div className="sidebarmusic">
              <i class="fas fa-times"></i>
            </div>
            <div className="music-note">
              Salas de músicas <br />
              <span>
                <i className="fas fa-search"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
