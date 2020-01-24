import React from "react";
import { Link } from "react-router-dom";
import db from "../db";

export default () => (
  <>
    <h2>Places</h2>
    <div className="list-group">
      {db.places.map((place, id) => (
        <Link
          to={`/place/${id}`}
          className="list-group-item list-group-item-action"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{place.restaurantName}</h5>
            <small>{place.ratings.length} reviews</small>
          </div>
          <p className="mb-1">{place.address}</p>
          <small>Donec id elit non mi porta.</small>
        </Link>
      ))}
    </div>
  </>
);
