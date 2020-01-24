import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import Place from "./pages/Place";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header brand="Restaurant Reviews" />
        <Route exact path="/" render={Home} />
        <Route path="/place/:placeId" render={Place} />
      </Router>
    </div>
  );
}
