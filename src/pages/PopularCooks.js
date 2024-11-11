import React, { useState, useEffect } from "react";
import "../styles/cooks.css";
import Header from "../components/Header";
import House from "../components/House"; // Ensure this is imported correctly
import axios from "axios";

const PopularCooks = () => {
  const [housePlans, setHousePlans] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://cthiele1.github.io/csce242/json/cooks.json"
      );
      setHousePlans(response.data);
    })();
  }, []);

  return (
    <>
      <Header />
      <div id="main-heading">
        <h2>These are the main contributors to this website:</h2>
      </div>
      <br />
      {housePlans.map((housePlan, index) => {
        return (
          <House
            key={index}
            name={housePlan.name}
            hometown={housePlan.hometown}
            recipe={housePlan.favorite_recipe}
            rating={housePlan.rating}
            goals={housePlan.goals}
          />
        );
      })}
    </>
  );
};

export default PopularCooks;
