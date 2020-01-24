import React from "react";
import db from "../db";

export default ({ match }) => {
  const placeId = match.params.placeId;
  const place = db.places[placeId];
  return (
    <div className="container">
      <div className="row no-gutters">
        <div className="col-md-9">
          <h2>Place info... (ID: {placeId})</h2>
          <h4>{place.restaurantName}</h4>
          <h4>{place.address}</h4>
        </div>
        <div className="col-md-3 h-100">
          <h2>Reviews</h2>
        </div>
      </div>
    </div>
  );
};
