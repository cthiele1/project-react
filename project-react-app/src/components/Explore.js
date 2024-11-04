import React from "react";
import "./Explore.css";
import explore from "../images/projectimage1.jpg";

const Explore = () => {
  return (
    <div className="explore-degree">
      <div className="imgcolor">
        <div className="sidebar-image">
          <img src={explore} alt="Explore" />
        </div>
      </div>
      <div className="right-side">
        <h2>
          <strong>Welcome to Famous Southern Cooking Recipes!!</strong>
        </h2>
        <p>
          Welcome to Famous Southern Cooking Recipes, your go-to destination for
          the heart and soul of Southern cooking! Here, we celebrate the rich
          traditions...
        </p>
        <p>
          At Famous Southern Cooking Recipes, we believe that food is more than
          just a meal; it’s an experience...
        </p>
      </div>
    </div>
  );
};

export default Explore;
