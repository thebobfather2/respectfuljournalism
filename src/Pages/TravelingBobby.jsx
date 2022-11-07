import React from "react";
import World from "../images/world.png";
import "./TravelingBobby.css";

const TravelingBobby = () => {
  return (
 
    <div className="k24MainContainer">
    <h1 style={{ marginTop: "30px" }} className="k24Title">Traveling Bobby</h1>
    <div className="k24Main2">
      <img
        className="World"
        src={World}
        alt="World"
        style={{ marginTop: "30px" }}
      ></img>
 </div>
  </div>
);
};

export default TravelingBobby;