import React from "react";

import "./Button.css";
//import "./animButton.js";

export default class Button extends React.Component {
  render(props) {
    return (
      <button
        class="bubbly-button"
        id={this.props.id}
        style={{
          background: this.props.bgbutton,
          backgroundSize: "400%",
          boxShadow: this.props.boxSha,
        }}
        onClick={this.props.click}
      >
        {this.props.text}
      </button>
    );
  }
}
