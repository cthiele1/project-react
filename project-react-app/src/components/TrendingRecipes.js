import React from "react";
import "./TrendingRecipes.css";
import cheese from "../images/maccheese.jpeg";
import pie from "../images/pecanpie.jpeg";
import biscuits from "../images/buiscuits.jpeg";

const TrendingRecipes = () => {
  return (
    <div className="paying-for-school">
      <div className="title">
        <h1>
          <strong>Top Trending Recipes</strong>
        </h1>
      </div>
      <div className="title-text">
        <p>
          Our collection features the most beloved Southern recipes, cherished
          for their rich flavors...
        </p>
      </div>
      {/* Recipe items can be mapped from an array for reusability */}
      {[cheese, pie, biscuits].map((img, index) => (
        <div className="img" key={index}>
          <img src={img} alt={`Recipe ${index + 1}`} width="300" height="150" />
          <h4>{["Mac and Cheese", "Pecan Pie", "Biscuits"][index]}</h4>
          <p>
            {
              [
                "This recipe for Southern-style mac and cheese...",
                "Pecan trees grow wild...",
                "Biscuits are a favorite Southern quick bread...",
              ][index]
            }
          </p>
        </div>
      ))}
    </div>
  );
};

export default TrendingRecipes;
