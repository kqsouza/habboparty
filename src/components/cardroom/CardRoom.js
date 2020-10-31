import React from "react";

/*Importação do estilo*/
import "./CardRoom.css";

/*Importação foto do perfil*/
import ProfileAvat from "../../assets/prof2.jpg";

/*Importação animações*/
import "./animCardRoom";

class CardRoom extends React.Component {
  render(props) {
    return (
      <div className="cardroom">
        <div className="cardtop">
          <i className="fas fa-play"></i>
        </div>
        <div className="carddescription">
          <p>
            <i className="fas fa-users"></i> 1
          </p>
          <p>Nome da sala 1 Nome da sala 1 </p>
          <p>Pop, Rock, MPB</p>
          <p>
            <i className="fas fa-lock"></i>
          </p>
          <div className="profile-circle">
            <img alt="Avatar Profile" src={ProfileAvat} />
          </div>
          <div className="backSkew"></div>
        </div>
      </div>
    );
  }
}

export default CardRoom;
