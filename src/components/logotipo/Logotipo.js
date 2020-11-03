import React from "react";

import "./logotipo.css";

import "./animLogotipo";

class Logotipo extends React.Component {
  render() {
    return (
      <div className="logotipo">
        <h1>
          Vinyl<i class="fas fa-compact-disc"></i>
        </h1>
      </div>
    );
  }
}

export default Logotipo;
