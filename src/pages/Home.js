import React from "react";

import Map from "../components/Map";
import List from "../components/List";

export default () => {
  return (
    <div className="container-fluid h-100 px-0">
      <div className="row no-gutters h-100">
        <div className="col-md-9 h-100">
          <Map />
        </div>
        <div className="col-md-3 h-100">
          <List />
        </div>
      </div>
    </div>
  );
};
