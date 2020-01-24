import React from "react";
import { Link } from "react-router-dom";

export default ({ brand }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-info">
    <Link className="navbar-brand" to="/">
      {brand}
    </Link>
  </nav>
);
