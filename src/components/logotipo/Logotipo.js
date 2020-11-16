import React from "react";

import "./logotipo.css";

import "./animLogotipo";

class Logotipo extends React.Component {
  render() {
    return (
      <div className="logotipo">
        <h1 style={{ fontSize: this.props.fontSz }}>
          Vinyl
          <i
            class="fas fa-compact-disc"
            style={{
              fontSize: this.props.iconSz,
              left: this.props.leftIcon,
              top: this.props.topIcon,
            }}
          ></i>
        </h1>
      </div>
    );
  }
}

export default Logotipo;
