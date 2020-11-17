import React from "react";

import "./Button.css";
//import "./animButton.js";

export default class Button extends React.Component {
  render(props) {
    return (
      <button
        class="bubbly-button"
        style={{
          background: this.props.bgbutton,
          backgroundSize: "400%",
          boxShadow: this.props.boxSha,
        }}
      >
        {this.props.text}
      </button>
    );
  }
}
