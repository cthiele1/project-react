import React, { useState, useEffect } from "react";
import "../styles/cooks.css";
import Header from "../components/Header";
import House from "../components/House"; // Ensure the import is correct
import axios from "axios";

const PopularCooks = () => {
  const [housePlans, setHousePlans] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:3000/api/house_plans");
      setHousePlans(response.data); // Assuming response.data contains name, hometown, imageUrl, etc.
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
            img_name={`cook${index + 1}.jpg`}
            key={index}
            name={housePlan.name}
            hometown={housePlan.hometown}
            favorite_recipe={housePlan.favorite_recipe}
            rating={housePlan.rating}
            goals={housePlan.goals}
          />
        );
      })}
    </>
  );
};

export default PopularCooks;
