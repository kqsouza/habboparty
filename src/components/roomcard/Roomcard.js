import React from "react";

import "./visualRoomAnimation.js";
import "./Roomcard.css";

export default class Roomcard extends React.Component {
  render() {
    return (
      <div class="card">
        <div class="cardtop">
          <i className="fas fa-play"></i>
          <i class="far fa-star"></i>
        </div>
        <div class="carddescription">
          <div class="card-text">
            <p class="roomname">Nome da sala</p>
            <p class="genres">Gênero 1, Gênero 2, Gênero 3</p>
          </div>
          <div class="profile-avatar">
            <img src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
          </div>
        </div>
      </div>
    );
  }
}
