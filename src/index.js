import React from "react";
import ReactDOM from "react-dom";

import CardRoom from "./components/cardroom/CardRoom";

ReactDOM.render(
  <div>
    <div className="row">
      <div className="col-md-4">
        <CardRoom />
      </div>
      <div className="col-md-4">
        <CardRoom />
      </div>
    </div>
  </div>,
  document.getElementById("root")
);
